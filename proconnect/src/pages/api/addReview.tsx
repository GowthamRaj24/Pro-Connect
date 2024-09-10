import connect from "../../../db";
import reviewsSchema from "@/models/reviewsSchema";
import { NextApiRequest, NextApiResponse } from "next";
connect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;
    switch(method){
        case "POST":
            try{
                const review = {
                    reviewer : req.body.reviewerId,
                    type : req.body.type,
                    title : req.body.title,
                    content : req.body.content,
                    tags : req.body.tags
                }
                const newReview = await reviewsSchema.create(review);
                await newReview.save();

                return res.status(200).json({"review" :newReview});
            }
            catch(err){
                return res.status(400).json("Error Adding in Review\n" + err);
            }
    }
}
