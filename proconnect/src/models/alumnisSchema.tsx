import mongoose, { Schema, Document } from 'mongoose';

export interface Alumni extends Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    transactions: any[];
    follow: any[];
    bio: string;
    profilePic: string;
    company: string;
    designation: string;
    skills: Array<string>;
    services: Array<string>;
    yearsOfExperience: string;
    interestDomain: Array<string>;
    email?: string;
    phoneNumber?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    location?: string;
    degree?: string;
    institution?: string;
    certifications?: Array<string>;
    awards?: Array<string>;
    availableForMentorship?: boolean;
    mentorshipPreferences?: Array<string>;
    eventsAttended?: Array<string>;
    preferredContactMethod?: string;
    achievements?: Array<string>;
    portfolioLink?: string;
}

const alumniSchema: Schema = new Schema({
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
    follow: { type: Array, default: [] },
    bio: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: ""
    },
    company: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    skills: { type: Array, default: [] },
    services: { type: Array, default: [] },
    yearsOfExperience: {
        type: String,
        required: true
    },
    interestDomain: { type: Array, default: [] },
    email: {
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    degree: {
        type: String,
        default: ""
    },
    institution: {
        type: String,
        default: ""
    },
    certifications: { type: Array, default: [] },
    awards: { type: Array, default: [] },
    availableForMentorship: {
        type: Boolean,
        default: false
    },
    mentorshipPreferences: { type: Array, default: [] },
    eventsAttended: { type: Array, default: [] },
    preferredContactMethod: {
        type: String,
        default: "email"
    },
    achievements: { type: Array, default: [] },
    portfolioLink: {
        type: String,
        default: ""
    }
});

export default mongoose.models.Alumni || mongoose.model<Alumni>('Alumni', alumniSchema);
