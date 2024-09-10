import connect from "../../../db";
import { NextApiRequest , NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";
connect();

export default async (req:NextApiRequest , res : NextApiResponse) => {
    const {method} = req;
    switch(method){
        case "POST":
            const API_KEY = "YOUR_API_KEY";
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            try{
                const prompt = req.body.prompt; // Add your prompt here
                const result = await model.generateContent(req.body.message,  prompt );
                const text = result.response.text();
                return res.status(200).json({result:text});
            }
            catch(err){
                console.log(err);
                return res.status(400).json(err);
            }
    }
}