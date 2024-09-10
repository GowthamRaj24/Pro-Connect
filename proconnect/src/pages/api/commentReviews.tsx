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
                    title : req.body.title,
                    rating : req.body.rating,
                    content : req.body.content,
                    reviewDate : Date.now(),
                    type: req.body.type,
                }
                await reviewsSchema.findOneAndUpdate({_id : req.body.userId} , 
                    {$push : {comments : comment}} , {new : true} 
                )
                return res.status(200).json({"comment" : comment});
            }
            catch(err){
                return res.status(400).json({err : err})
            }
    }
}