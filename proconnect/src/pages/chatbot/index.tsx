import React, { useEffect, useState } from 'react';
import axios from "axios";

const FileInput: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [finalResult, setFinalResult] = useState<string>("");
    const [prosAndCons, setProsAndCons] = useState<string>("");
    const [jobDescription , setJobDescription] = useState("");

    useEffect(() => {
        if (selectedFile && jobDescription) {
            const fetchText = async () => {
                try {
                    const reader = new FileReader();
                    reader.onload = async (event) => {
                        if (event.target) {
                            const fileData = event.target.result as string;

                            console.log(fileData);
                            const response = await axios.post('../api/aichatbot', {
                                prompt: "Evaluate this resume's alignment with the job description using ATS scoring on a scale of 0 to 100. Respond with only the score, nothing else.",
                                message: fileData + " \nJobDescription : " + jobDescription
                            });

                            const res = await axios.post('../api/aichatbot', {
                                prompt: "Evaluate this resume's alignment with the job description and provide a list of pros and cons. Highlight specific strengths and areas for improvement in the resume based on the job requirements.",
                                message: fileData + " \nJobDescription : " + jobDescription
                            });

                            setFinalResult(response.data.result);
                            setProsAndCons(res.data.result);
                        }
                    };
                    reader.readAsText(selectedFile);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchText();
        }
    }, [selectedFile , jobDescription]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const onHandleChange = (e) =>{
        setJobDescription(e.target.value);
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input type='text' onChange={onHandleChange} value={jobDescription} placeholder='Enter Job Description'/>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            {finalResult && <p><b>Final Result: </b>{finalResult}</p>}
            {prosAndCons && <p><b>Pros And Cons: </b>{prosAndCons}</p>}
        </div>
    );
};

export default FileInput;