import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/Nav";

const FileInput: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [finalResult, setFinalResult] = useState<string>("");
  const [prosAndCons, setProsAndCons] = useState<string>("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchText = async () => {
    if (!selectedFile || !jobDescription) return;
    try {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (event.target) {
          const fileData = event.target.result as string;

          try {
            const response = await axios.post("../api/aichatbot", {
              prompt:
                "Evaluate this resume's alignment with the job description using ATS scoring on a scale of 0 to 100. Respond with only the score, nothing else.",
              message: fileData + " \nJobDescription : " + jobDescription,
            });

            const res = await axios.post("../api/aichatbot", {
              prompt:
                "Evaluate this resume's alignment with the job description and provide a list of improvements and other reviews",
              message: fileData + " \nJobDescription : " + jobDescription,
            });

            setFinalResult(response.data.result);
            setProsAndCons(res.data.result);
          } catch (apiError) {
            console.error("API error:", apiError);
          } finally {
            setLoading(false); // Set loading to false after both API requests are done
          }
        }
      };
      reader.readAsText(selectedFile);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const formatText = (text: string) => {
    text = text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    text = text.replace(/_(.*?)_/g, "<em>$1</em>");
    text = text.replace(/\n/g, "<br>");
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col w-256 mx-auto rounded-md my-2"
      style={{
        boxShadow:'0px 0px 15px lightgrey'
      }}>
        <div className="bg-white rounded-lg p-8 w-256">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-1 h-10 bg-black rounded-lg"></div>
            <h1 className="text-xl">Resume ATS Score</h1>
          </div>

          <div className="mb-6">
            <label
              className="block text-black my-2 font-sans font-semibold mb-2"
              htmlFor="jobDescription"
            >
              Enter Job Description:
            </label>
            <textarea
              id="jobDescription"
              className="w-full h-52 p-4 border border-grey-300 rounded-lg focus:outline-none focus:ring-2  resize-none"
              placeholder="Enter the job description here..."
              value={jobDescription}
              onChange={onHandleChange}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="fileInput"
            >
              Upload Resume:
            </label>
            <input
              type="file"
              id="fileInput"
              className="w-full p-3 border border-grey-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 "
              onChange={handleFileChange}
            />
          </div>

          {selectedFile && (
            <p className="text-grey-600 text-sm mt-2">
              Selected file:{" "}
              <span className="font-medium">{selectedFile.name}</span>
            </p>
          )}

          {loading ? (
            <button className="w-full bg-black text-white p-3 rounded-md">
              Loading...
            </button>
          ) : (
            <button
              className="w-full bg-black text-white p-3 rounded-md"
              onClick={fetchText}
            >
              Submit
            </button>
          )}

          <div className="mt-6">
            {finalResult && (
              <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-700 mb-6 rounded">
                <strong>ATS Score:</strong>
                <div className="relative w-full h-8 bg-gray-200 rounded mt-2">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500 rounded transition-all duration-300"
                    style={{ width: `${finalResult}%` }}
                  />
                  <span className="absolute top-1 left-2 text-gray-900 font-bold">
                    {finalResult}%
                  </span>
                </div>
              </div>
            )}

            {prosAndCons && (
              <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg">
                <strong>Pros And Cons:</strong>
                <p className="mt-2 whitespace-pre-line">
                  {formatText(prosAndCons)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileInput;
