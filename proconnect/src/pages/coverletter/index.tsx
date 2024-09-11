import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/Nav";

const CoverLetter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [finalResult, setFinalResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

    const fetchData=async()=>{
        if (selectedFile && jobDescription) {
            const fetchText = async () => {
              try {
                setLoading(true);
                setError("");
      
                const reader = new FileReader();
                reader.onload = async (event) => {
                  if (event.target) {
                    const fileData = event.target.result as string;
                    try {
                      const res = await axios.post("../api/aichatbot", {
                        prompt:
                          "Based on this resume and Job Description generate a cover letter for me.",
                        message: `Resume: ${fileData}\nJob Description: ${jobDescription}`,
                      });
                      setFinalResult(res.data.result);
                    } catch (apiError) {
                      setError("Failed to generate cover letter. Please try again.");
                    } finally {
                      setLoading(false);
                    }
                  }
                };
                reader.readAsText(selectedFile);
              } catch (error) {
                setError("An error occurred while processing the file.");
                setLoading(false);
              }
            };
            fetchText();
          }
    }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleJobDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJobDescription(e.target.value);
  };

  return (
    <>
      <Nav />
      <div
        className="min-h-screen flex flex-col w-256 mx-auto rounded-md my-2"
        style={{
          boxShadow: "0px 0px 15px lightgrey",
        }}
      >
        <div className="w-full bg-white p-8 rounded-md">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-1 h-10 bg-black rounded-lg"></div>
            <h1 className="text-xl">Cover letter generator</h1>
          </div>

          <div className="mb-4 my-3">
            <label className="block mb-2 font-medium">Upload Resume:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {selectedFile && (
            <p className="text-sm text-gray-600">
              Selected file:{" "}
              <span className="font-medium">{selectedFile.name}</span>
            </p>
          )}

          <div className="mb-4 mt-4">
            <label className="block mb-2 font-medium">
              Enter Job Description:
            </label>
            <textarea
              id="jobDescription"
              className="w-full h-52 p-4 border rounded-lg focus:outline-none resize-none"
              placeholder="Enter the job description here..."
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value);
              }}
            />
          </div>

          {loading ? (
            <button className="w-full bg-black text-white p-3 rounded-md">
              Loading...
            </button>
          ) : (
            <button
              className="w-full bg-black text-white p-3 rounded-md"
              disabled={!selectedFile || !jobDescription}
              onClick={() => {
                fetchData();
              }}
            >
              Generate Cover Letter
            </button>
          )}

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {finalResult && (
            <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
              <h3 className="font-semibold">Generated Cover Letter:</h3>
              <p className="mt-2 whitespace-pre-line">{finalResult}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoverLetter;
