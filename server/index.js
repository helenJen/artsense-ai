import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import fs from 'fs';

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up file storage for uploads
const upload = multer({ dest: 'uploads/' });

// AWS SDK v3 Config for Bedrock
const bedrockClient = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
});

// Endpoint to handle image upload and send prompt to Claude
app.post('/api/critique', upload.single('image'), async (req, res) => {
  try {
    // Prepare Claude Messages API payload (Bedrock)
    const input = {
      modelId: process.env.CLAUDE_MODEL_ID,
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        messages: [
          {
            role: "user",
            content: "Act as a professional art critic. Provide a detailed analysis of this artwork's style, composition, emotional tone, and possible historical influences."
          }
        ],
        max_tokens: 1024,
        temperature: 0.7
      })
    };

    const command = new InvokeModelCommand(input);
    const response = await bedrockClient.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    // Claude 3 returns the result in responseBody.content[0].text
    const critique = responseBody.content?.[0]?.text || "No critique received.";
    res.json({ critique });
  } catch (error) {
    console.error("Claude API error:", error);
    res.status(500).json({ error: 'Claude Bedrock call failed' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
