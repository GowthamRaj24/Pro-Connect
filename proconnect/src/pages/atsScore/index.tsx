import Nav from "@/components/Nav";
import axios from "axios";
import { useState } from "react";

const AtsScore = () => {
  const [text, setText] = useState('');
  const [atsScore, setAtsScore] = useState(null);
  const [summary, setSummary] = useState('');
  const [resumeIssues, setResumeIssues] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('pdfFile', file);

      // API call to get ATS score
      try {
        const atsResponse = await axios.post('../api/get-ats-score', formData);
        setAtsScore(atsResponse.data.atsScore);

        // API call to get resume summary and issues
        const summaryResponse = await axios.post('../api/summarize-resume', formData);
        setSummary(summaryResponse.data.summary);
        setResumeIssues(summaryResponse.data.issues);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Resume Analysis</h2>
          
          <div className="mb-4">
            <input 
              type="file" 
              accept="application/pdf" 
              onChange={handleFileUpload} 
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            />
          </div>

          {atsScore && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">ATS Score</h3>
              <p className="text-gray-700 bg-green-100 p-3 rounded-lg">
                Your ATS Score is: <strong>{atsScore}</strong>
              </p>
            </div>
          )}

          {summary && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Resume Summary</h3>
              <pre className="whitespace-pre-wrap text-gray-700 bg-gray-100 p-3 rounded-lg">
                {summary}
              </pre>
            </div>
          )}

          {resumeIssues && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Potential Issues in Resume</h3>
              <ul className="list-disc list-inside text-red-500">
                {resumeIssues?.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AtsScore;
