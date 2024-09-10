import connect from "../../../db";
import { NextApiRequest , NextApiResponse } from "next";
import usersShema from "@/models/usersShema";
connect();

export default async function (req:NextApiRequest , res:NextApiResponse) {
    const {method} = req;
    switch(method) {
        case "POST":
            try{
                const user = await usersShema.findById(req.body.userId);
                const alumni = await usersShema.findById(req.body.alumniId);

                if(!user){
                    return res.status(400).json({message : "User not found"});
                }
                if(!alumni){
                    return res.status(400).json({message : "Alumni not found"});
                }

                if (req.body.type == "oneToOneMentorship") {
                    user.oneToOneMentorships.status = "accepted";
                    alumni.oneToOneMentorships.status = "accepted";
                    
                }
                else if (req.body.type == "referrals"){
                    user.referrals.status = "accepted";
                    alumni.referrals.status = "accepted";
                }
                else if (req.body.type == "reviews"){
                    user.reviews.status = "accepted";
                    alumni.reviews.status = "accepted";
                }

                await user.save();
                await alumni.save();
            }

            catch(err){
                return res.status(400).json({message : "Error sending request"});
            }
        }

}
