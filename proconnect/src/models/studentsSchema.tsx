
import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    transactions: any[];
    follow: any[];
    registrationNumber : string;
    department : string;
    year : string;
    interestDomain : Array<string>;
    skills : Array<string>;
    bio : string;
    profilePic : string;
}

const usersSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    transactions: { type: Array, default: [] },
    contacts: { type: Array, default: [] },
    registrationNumber: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    interestDomain: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    bio: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: ""
    }
});

export default mongoose.models.User || mongoose.model<User>('User', usersSchema);