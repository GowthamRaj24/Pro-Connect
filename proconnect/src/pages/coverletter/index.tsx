import React, { useEffect, useState } from 'react';
import axios from "axios";

const coverLetter: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [jobDescription , setJobDescription] = useState("");
    const [finalResult , setFinalResult] = useState<string>("");

    useEffect(() => {
        if (selectedFile && jobDescription) {
            const fetchText = async () => {
                try {
                    const reader = new FileReader();
                    reader.onload = async (event) => {
                        if (event.target) {
                            const fileData = event.target.result as string;

                            console.log(fileData);
                            

                            const res = await axios.post('../api/aichatbot', {
                                prompt: "Based on this resume and Job Description generate a cover letter for me.",
                                message: "resume" + fileData + " \nJobDescription : " + jobDescription
                            });
                            setFinalResult(res.data.result);
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
        </div>
    );
};

export default coverLetter;