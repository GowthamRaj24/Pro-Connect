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
    role: 'user' | 'alumni';
}

export interface MockInterview {
    interviewerId: string;
    intervieweeId: string;
    date: Date;
    feedback: string;
}

export interface Referral {
    referrerId: string;
    refereeId: string;
    date: Date;
    details: string;
}

export interface ResumeReview {
    reviewerId: string;
    revieweeId: string;
    date: Date;
    feedback: string;
}

export interface OneToOneMentorship {
    mentorId: string;
    menteeId: string;
    date: Date;
    topicsDiscussed: string[];
    feedback: string;
}

export interface AlumniSpecific {
    company?: string;
    designation?: string;
    yearsOfExperience?: string;
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
    mockInterviews?: MockInterview[];
    resumeReviews?: ResumeReview[];
    referrals?: Referral[];
    oneToOneMentorships?: OneToOneMentorship[];
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
    resume? : string;
}

export type UserDocument = BaseUser & (UserSpecific | AlumniSpecific);

const userSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    transactions: { type: [Schema.Types.Mixed], default: [] },
    contacts: { type: [Schema.Types.Mixed], default: [] },
    registrationNumber: { type: String },
    department: { type: String },
    year: { type: String },
    interestDomain: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    bio: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    email: { type: String },
    phoneNumber: { type: String },
    enrollmentDate: { type: Date, default: Date.now },
    courses: { type: [String], default: [] },
    grades: { type: [{ course: String, grade: String }], default: [] },
    activities: { type: [String], default: [] },
    projects: { type: [String], default: [] },
    internships: { type: [String], default: [] },
    achievements: { type: [String], default: [] },
    certifications: { type: [String], default: [] },
    goals: { type: [String], default: [] },
    mentors: { type: [String], default: [] },
    mentorRequests: { type: [String], default: [] },
    availabilityForProjects: { type: Boolean, default: false },
    preferredContactMethod: { type: String, default: "email" },
    role: { type: String, required: true, enum: ['user', 'alumni'] },

    // Alumni-specific fields
    company: { type: String },
    designation: { type: String },
    yearsOfExperience: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    github: { type: String },
    location: { type: String },
    degree: { type: String },
    institution: { type: String },
    awards: { type: [String], default: [] },
    availableForMentorship: { type: Boolean, default: false },
    mentorshipPreferences: { type: [String], default: [] },
    eventsAttended: { type: [String], default: [] },
    portfolioLink: { type: String },
    mockInterviews: { type: [new Schema({
        interviewerId: { type: String, required: true },
        intervieweeId: { type: String, required: true },
        date: { type: Date, required: true },
        feedback: { type: String, required: true }
    }, { _id: false })]},
    resumeReviews: { type: [new Schema({
        reviewerId: { type: String, required: true },
        revieweeId: { type: String, required: true },
        date: { type: Date, required: true },
        feedback: { type: String, required: true }
    }, { _id: false })]},
    referrals: { type: [new Schema({
        referrerId: { type: String, required: true },
        refereeId: { type: String, required: true },
        date: { type: Date, required: true },
        details: { type: String, required: true }
    }, { _id: false })]},
    oneToOneMentorships: { type: [new Schema({
        mentorId: { type: String, required: true },
        menteeId: { type: String, required: true },
        date: { type: Date, required: true },
        topicsDiscussed: { type: [String], required: true },
        feedback: { type: String, required: true }
    }, { _id: false })]}
});

export default mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
