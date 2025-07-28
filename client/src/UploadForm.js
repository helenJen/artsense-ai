import React, { useState } from 'react';

function UploadForm() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [critique, setCritique] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setCritique(""); // Clear previous critique
  };
  const handleSubmit = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await fetch("http://localhost:5000/api/critique", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setCritique(data.critique || "No critique received.");
    } catch (error) {
      setCritique("Error connecting to server.");
    }
  };
  const downloadFile = () => {
    if (previewUrl && image) {
      const link = document.createElement('a');
      link.href = previewUrl;
      link.download = image.name || 'artwork.jpg';
      link.click();
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Upload Your Artwork</h5>
        <input type="file" className="form-control mb-3" onChange={handleFileChange} accept="image/*" />
        {previewUrl && (
          <div className="text-center mb-3">
            <img src={previewUrl} alt="Preview" className="img-fluid rounded" style={{maxHeight: '300px'}} />
            <div className="d-flex justify-content-center gap-2 mt-2">
              <button className="btn btn-outline-primary" onClick={downloadFile}>💾 Save Image Locally</button>
              <button className="btn btn-success" onClick={handleSubmit}>🧠 Get Critique</button>
            </div>
          </div>
        )}
        {critique && (
          <div className="alert alert-info mt-3">
            <strong>AI Critique:</strong> {critique}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
