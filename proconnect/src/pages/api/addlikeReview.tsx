import connect from "../../../db";
import { NextApiRequest , NextApiResponse } from "next";
import usersShema from "@/models/usersShema";
import reviewsSchema from "@/models/reviewsSchema";
connect();

export default async (req : NextApiRequest , res : NextApiResponse)=>{
    const {method} = req;
    switch(method) {
        case "POST":
            try{
                const review = await reviewsSchema.findByIdAndUpdate(req.body.reviewId , {$inc : {upvotes : 1}} , {new : true});
                if(!review){
                    return res.status(400).json({message : "Review not found"});
                }
                await review.save();
                return res.status(200).json({message : "Review upvoted successfully"});
            }
            catch{
                return res.status(400).json({message : "Error upvoting review"});
            }
    }
}
