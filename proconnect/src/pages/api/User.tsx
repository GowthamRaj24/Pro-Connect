import connect from '../../../db';
import usersShema from '@/models/usersShema';
import { NextApiRequest, NextApiResponse } from 'next';
connect();
const bcrypt=require("bcrypt");

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    const {method}=req;
    switch(method){
        case 'POST':
            const check=await usersShema.findOne({email:req.body.email});
            if(check==null){
            try{
                const userdetails={
                    email:req.body.email,
                    firstName:req.body.firstname,
                    lastName:req.body.lastname,
                    password:await bcrypt.hash(req.body.password,10),
                    role:req.body.role,
                }
                const user=await usersShema.create(userdetails);
                return res.status(201).json({success:true,data:user})
            }
            catch(err){
                console.log(err)
                return res.status(400).json({success:false});
            }
            }
            else{
                return res.status(400).send("emailerror")
            }
            break;
        default:
            return res.status(400).json({success:false});
    }
}