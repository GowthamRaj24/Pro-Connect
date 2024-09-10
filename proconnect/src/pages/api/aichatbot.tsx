import connect from "../../../db";
import { NextApiRequest , NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";
connect();

export default async (req:NextApiRequest , res : NextApiResponse) => {
    const {method} = req;
    switch(method){
        case "POST":
            const API_KEY = "AIzaSyB4hZ47Jn4tV3pnkY_e7wXXE4MAH8TCXdw"; // Replace with your actual API key
            const genAI = new GoogleGenerativeAI(API_KEY);
            const prompt = req.body.prompt;
            const message = req.body.message;
            const model = genAI.getGenerativeModel({ model: "gemini-pro"  });
            try{
                const result = await model.generateContent(prompt + " " + message); // Add the prompt to the message
                const text = result.response.text();
                return res.status(200).json({result:text});
            }
            catch(err){
                console.log(err);
                return res.status(400).json(err);
            }
    }
}