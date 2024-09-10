import connect from '../../../db';
import usersShema from '@/models/usersShema';
import { NextApiRequest, NextApiResponse } from 'next';
connect();

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {method}=req;
    switch(method){
        case "POST":
            try{
                const mockInterviews = {
                    interviewerId: req.body.interviewerId,
                    intervieweeId: req.body.intervieweeId,
                    date: Date,
                    feedback: req.body.feedback
                }
                const updatedUser = await usersShema.findOneAndUpdate(
                    { _id: req.body.interviewerId },
                    { $push: { mockInterviews: mockInterviews } },
                    { new: true }
                );

                const updatedAlumin = await usersShema.findOneAndUpdate(
                    { _id: req.body.intervieweeId },
                    { $push: { mockInterviews: mockInterviews } },
                    { new: true }
                )
                return res.status(200).json({"user" :updatedUser , "alumin":updatedAlumin});
            }
            catch(err){
                return res.status(400).json("Error Adding in ResumeReview\n" + err);
            }
    }
}
