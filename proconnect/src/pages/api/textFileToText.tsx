import connect from "../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import formidable from "formidable";
connect();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const file = fs.readFileSync(process.cwd(), 'utf8');
                const data = JSON.parse(file);
                return res.status(200).json({data : data});
              
            } catch (err) {
                console.log(err);
                return res.status(400).json(err);
            }
        default:
            return res.status(405).json({ message: "Method Not Allowed" });
    }
};