import connect from "../../../db";
import usersShema from "@/models/usersShema";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
connect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const filePath = req.body.filePath; 
                const fileContent = fs.readFileSync(filePath, "utf-8");
                return res.status(200).json({ message: fileContent });
            } catch (err) {
                return res.status(400).json(err);
            }
    }
};