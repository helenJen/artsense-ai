import React, { useState } from 'react';

function UploadForm() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {previewUrl && <img src={previewUrl} alt="Preview" width="300" />}
    </div>
  );
}

export default UploadForm;
