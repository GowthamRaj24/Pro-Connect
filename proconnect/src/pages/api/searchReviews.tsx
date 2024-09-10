import connect from "../../../db";
import reviewsSchema from "@/models/reviewsSchema";
import { NextApiRequest, NextApiResponse } from "next";
connect();
export default async (req: NextApiRequest , res : NextApiResponse) => {
    const {method} = req;
    switch(method) {
        case "POST":
            const filter = req.body.filter;
            const reviews = await reviewsSchema.find({
                $or: [
                    { title: { $regex: filter, $options: "i" } },
                    { content: { $regex: filter, $options: "i" } },
                    { tags: { $regex: filter, $options: "i" } },
                    { "comments.title": { $regex: filter, $options: "i" } },
                    { "comments.content": { $regex: filter, $options: "i" } },
                    { "comments.tags": { $regex: filter, $options: "i" } }
                ]
            });
            return res.status(200).json(reviews);
        default:
            return res.status(405).json({ message: "Method Not Allowed" });
    }
}
