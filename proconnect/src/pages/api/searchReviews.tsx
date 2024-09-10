import connect from "../../../db";
import reviewsSchema from "@/models/reviewsSchema";
import { NextApiRequest, NextApiResponse } from "next";
connect();
export default async (req: NextApiRequest , res : NextApiResponse) => {
    const {method} = req;
    switch(method) {
        case "POST":
            const filter = req.body.filter || "";
            const reviews = await reviewsSchema.find({
                $or: [
                    { title: { "$regex": filter} },
                    { content: { "$regex": filter} },
                    { tags: { "$regex": filter} }
                    
                ]
            });
            return res.status(200).json(reviews);
        default:
            return res.status(405).json({ message: "Method Not Allowed" });
    }
}
