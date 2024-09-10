import connect from "../../../db";
import reviewsSchema from "@/models/reviewsSchema";
import { NextApiRequest, NextApiResponse } from "next";
connect();

export default async (req: NextApiRequest , res : NextApiResponse) => {
    const {method} = req;
    switch(method) {
        case "POST":
            try{
                const comment = {
                    reviewer : req.body.userId,
                    content : req.body.comment,
                    reviewDate : Date.now(),
                }
                await reviewsSchema.findOneAndUpdate({_id : req.body.reviewId} , 
                    {$push : {comments : comment}} , {new : true} 
                )
                return res.status(200).json({"comment" : comment});
            }
            catch(err){
                return res.status(400).json({err : err})
            }
    }
}