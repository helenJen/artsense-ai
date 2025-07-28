# 🎨 ArtSense AI

**ArtSense AI** is a Generative AI-powered virtual art critic and assistant that analyzes artwork and provides intelligent critiques — covering style, composition, mood, historical context, and more.

This project is a fusion of technology and art, aimed at empowering artists, collectors, and educators to better understand and engage with visual creativity.

---

## 🧠 What It Does

- 🧠 **AI-Powered Art Critique** — Uses Claude 3 (Haiku) to interpret artworks with depth and context
- 📸 **Image Upload** — Simple UI to upload artworks (paintings, digital art, etc.)
- 💬 **Context-Aware Feedback** — Critiques generated based on curated prompts to ensure artistic richness
- ☁️ **AWS Bedrock Integration** — Secure, scalable, and production-ready
- 💡 **Low-Code Stack** — Built using React, Node.js, and GitHub Copilot-assisted development
---


## 📷 Demo Screenshots
<img width="557" height="826" alt="image" src="https://github.com/user-attachments/assets/a3ac1f00-ee88-460e-820f-b2f700376669" />

## 🚀 Live Demo

_(Coming Soon)_

---
## 🚀 Tech Stack

| Frontend | Backend | AI Model | Dev Tools |
|----------|---------|----------|-----------|
| React (Vite) | Node.js (Express) | Claude 3 (Haiku via AWS Bedrock) | GitHub Copilot, VS Code |

---
## 💡 Vision

ArtSense AI is built with the goal of becoming:
- A creative assistant for artists seeking reflective feedback
- A tool for collectors to interpret and catalogue art
- A platform for learning art history and technique through AI commentary

---


## 🧩 Planned Features

- 🎨 Sketch & analyze (draw inside the app)
- 📚 Art history timeline integration
- 🏆 AI art scoring (for fun, not judgment)
- 🧾 PDF or blog export of critiques
- 🔍 Search by artist, style, medium

---


## 🧪 Try It Yourself

1. Clone the repo  
   `git clone https://github.com/yourusername/artsense-ai.git`
2. Install dependencies and run
   ```bash
   cd server
   npm install
   cp .env.template .env  # Fill with your AWS credentials
   npm start
3. In another Terminal:
   ```bash
   cd client
   npm install
   npm run dev
