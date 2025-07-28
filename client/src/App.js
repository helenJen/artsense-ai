import React from 'react';
import UploadForm from './UploadForm';
import CritiqueResult from './CritiqueResult';

function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold">🎨 ArtSense AI</h1>
            <p className="lead">Your Personal Art Critic</p>
          </div>
          <UploadForm />
          <CritiqueResult />
        </div>
      </div>
    </div>
  );
}

export default App;
