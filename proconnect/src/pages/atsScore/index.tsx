import Nav from "@/components/Nav";
import PdfToText from "@/components/PdfToText";
import axios from "axios";
import { useState } from "react";

const AtsScore = () => {
  const [text, setText] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('pdfFile', file);

      await axios.post('../api/extract-text',{
        formData
      })
      .then((res)=>{
        console.log(res?.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  };
  return (
    <>
      <Nav />
      <div>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      <pre>{text}</pre>
      </div>
    </>
  );
};
export default AtsScore;
