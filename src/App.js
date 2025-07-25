import React from 'react';
import UploadForm from './UploadForm';
import CritiqueResult from './CritiqueResult';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎨 ArtSense AI - Your Personal Art Critic</h1>
      <UploadForm />
      <CritiqueResult />
    </div>
  );
}

export default App;
