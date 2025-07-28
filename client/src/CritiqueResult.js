import React from 'react';

function CritiqueResult() {
  const mockResponse = "This piece reflects a strong emotional undercurrent..."; // Replace with real API response

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title">🧠 AI Critique</h2>
        <p className="card-text">{mockResponse}</p>
      </div>
    </div>
  );
}

export default CritiqueResult;
