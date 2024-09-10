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
                    const userOneToOneMentorships = user.oneToOneMentorships;
                    const alumniOneToOneMentorships = alumni.oneToOneMentorships;
                    userOneToOneMentorships.push(userOneToOneMentorships);
                    alumniOneToOneMentorships.push(alumniOneToOneMentorships);

                    await usersShema.findByIdAndUpdate(req.body.userId , {oneToOneMentorships : userOneToOneMentorships} , {new : true});
                    await usersShema.findByIdAndUpdate(req.body.alumniId , {oneToOneMentorships : alumniOneToOneMentorships} , {new : true});

                }
                else if (req.body.type == "resumeReviews"){
                    const usersResumeReview = user.resumeReviews;
                    const alumniResumeReview = alumni.resumeReviews;

                    usersResumeReview.push(usersResumeReview);
                    alumniResumeReview.push(alumniResumeReview);

                    await usersShema.findByIdAndUpdate(req.body.userId , {resumeReviews : usersResumeReview} , {new : true});
                    await usersShema.findByIdAndUpdate(req.body.alumniId, {resumeReviews : alumniResumeReview} , {new : true});
                 }

                 else if (req.body.type == "referrals"){
                    const userRefferals = user.referrals;
                    const alumniRefferals = alumni.referrals;

                    userRefferals.push(userRefferals);
                    alumniRefferals.push(alumniRefferals);

                    await usersShema.findByIdAndUpdate(req.body.userId , {referrals : userRefferals} , {new : true});
                    await usersShema.findByIdAndUpdate(req.body.alumniId, {referrals : userRefferals} , {new : true});
                 }

                return res.status(200).json({message : "Request sent successfully"});
            }
            catch(err){
                return res.status(400).json({message : "Error sending request"});
            }
        }
}
