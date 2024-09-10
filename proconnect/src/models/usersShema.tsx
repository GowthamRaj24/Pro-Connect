import mongoose, { Schema, Document } from 'mongoose';

export interface BaseUser extends Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    transactions: any[];
    contacts: any[];
    registrationNumber?: string;
    department?: string;
    year?: string;
    interestDomain: Array<string>;
    skills: Array<string>;
    bio: string;
    profilePic: string;
    email?: string;
    phoneNumber?: string;
    enrollmentDate?: Date;
    courses?: Array<string>;
    grades?: Array<{ course: string, grade: string }>;
    activities?: Array<string>;
    projects?: Array<string>;
    internships?: Array<string>;
    achievements?: Array<string>;
    certifications?: Array<string>;
    goals?: Array<string>;
    mentors?: Array<string>;
    mentorRequests?: Array<string>;
    availabilityForProjects?: boolean;
    preferredContactMethod?: string;
    role: 'user' | 'alumni';  // Distinguishes between User and Alumni
}

export interface AlumniSpecific {
    company: string;
    designation: string;
    yearsOfExperience: string;
    interestDomain: Array<string>;
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
    achievements?: Array<string>;
    portfolioLink?: string;
}

export interface UserSpecific {
    registrationNumber: string;
    department: string;
    year: string;
    courses?: Array<string>;
    grades?: Array<{ course: string, grade: string }>;
    activities?: Array<string>;
    projects?: Array<string>;
    internships?: Array<string>;
    achievements?: Array<string>;
    certifications?: Array<string>;
    goals?: Array<string>;
    mentors?: Array<string>;
    mentorRequests?: Array<string>;
    availabilityForProjects?: boolean;
    preferredContactMethod?: string;
}

export type UserDocument = BaseUser & (UserSpecific | AlumniSpecific);

const userSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    transactions: { type: Array, default: [] },
    contacts: { type: Array, default: [] },
    registrationNumber: { type: String },
    department: { type: String },
    year: { type: String },
    interestDomain: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    bio: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    email: { type: String },
    phoneNumber: { type: String },
    enrollmentDate: { type: Date, default: Date.now },
    courses: { type: Array, default: [] },
    grades: { type: Array, default: [] },
    activities: { type: Array, default: [] },
    projects: { type: Array, default: [] },
    internships: { type: Array, default: [] },
    achievements: { type: Array, default: [] },
    goals: { type: Array, default: [] },
    mentors: { type: Array, default: [] },
    mentorRequests: { type: Array, default: [] },
    availabilityForProjects: { type: Boolean, default: false },
    preferredContactMethod: { type: String, default: "email" },
    role: { type: String, required: true, enum: ['user', 'alumni'] },
    company: { type: String },
    designation: { type: String },
    yearsOfExperience: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    github: { type: String },
    location: { type: String },
    degree: { type: String },
    institution: { type: String },
    certifications: { type: Array, default: [] },
    awards: { type: Array, default: [] },
    availableForMentorship: { type: Boolean, default: false },
    mentorshipPreferences: { type: Array, default: [] },
    eventsAttended: { type: Array, default: [] },
    portfolioLink: { type: String },
});

export default mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
