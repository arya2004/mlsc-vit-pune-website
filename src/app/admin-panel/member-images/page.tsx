'use client';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react'; // Import useState hook

export default function MemberImagesPage() {
  const [uploadSuccess, setUploadSuccess] = useState(false); // State for tracking upload success

  const handleUploadSuccess = () => {
    setUploadSuccess(true); // Set upload success to true
    setTimeout(() => {
      setUploadSuccess(false); // Reset upload success after 5 seconds
    }, 5000);
  };

  const envUploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  return (
    <div style={{color: 'green'}}>
      {uploadSuccess && (
        <div style={{ color: 'green', marginBottom: '10px' }}>
          Upload successful!
        </div>
      )}
      <CldUploadWidget
        uploadPreset={envUploadPreset}
        onSuccess={() => handleUploadSuccess()} // Call handleUploadSuccess on successful upload
      >
        {({ open }) => (
          <button onClick={() => open()}>Upload an Image</button>
        )}
      </CldUploadWidget>
    </div>
  );
}
