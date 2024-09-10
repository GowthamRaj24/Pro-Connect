import connect from "../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import usersShema, { UserDocument } from "@/models/usersShema";
connect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const user = await usersShema.findById(req.body.userId);

                if (!user) {
                    res.status(400).json({ message: "User not found" });
                    return;
                }

                const userData = {
                    ...req.body.data
                };

                Object.assign(user, userData);
                await user.save();
                res.status(200).json({ message: "User details updated successfully" });
            } catch (err) {
                res.status(500).json({ message: "Error updating user details" });
            }
            break;
        default:
            res.status(400).json({ message: "Invalid request method" });
            break;
    }
};
