import React from 'react';

function CritiqueResult() {
  const mockResponse = "This piece reflects a strong emotional undercurrent..."; // Replace with real API response

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>🧠 AI Critique</h2>
      <p>{mockResponse}</p>
    </div>
  );
}

export default CritiqueResult;
