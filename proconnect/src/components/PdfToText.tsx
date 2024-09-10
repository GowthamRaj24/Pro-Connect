import axios from 'axios';
import { useState } from 'react';

const PdfToText = () => {
  const [text, setText] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('pdfFile', file);


      const response = await fetch('/api/extract-text', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.text) {
        setText(result.text);
      } else {
        console.error('Error extracting text:', result.error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      <pre>{text}</pre>
    </div>
  );
};

export default PdfToText;
