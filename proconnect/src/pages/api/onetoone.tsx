import connect from '../../../db';
import usersShema from '@/models/usersShema';
import { NextApiRequest, NextApiResponse } from 'next';
connect();

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {method}=req;
    switch(method){
        case "POST":
            try{
                const oneToOneMentorships = {
                    mentorId: req.body.mentorId,
                    menteeId: req.body.menteeId,
                    date: Date.now(),
                    topicsDiscussed: req.body.topicsDiscussed,
                    feedback: req.body.feedback
                };

                const updatedUser = await usersShema.findOneAndUpdate(
                    { _id: req.body.mentorId },
                    { $push: { oneToOneMentorships: oneToOneMentorships } },
                    { new: true }
                );
    
                const updatedAlumin = await usersShema.findOneAndUpdate(
                    { _id: req.body.menteeId },
                    { $push: { oneToOneMentorships: oneToOneMentorships } },
                    { new: true }
                );
    
                return res.status(200).json({ "user": updatedUser, "alumin": updatedAlumin });
                
            }
            catch(err){
                console.log(err);
                return res.status(400).json("Error Adding in ResumeReview\n" + err);
            }
    }
}
