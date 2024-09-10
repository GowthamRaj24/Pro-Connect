import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    transactions: any[];
    contacts: any[];
    registrationNumber: string;
    department: string;
    year: string;
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
    mentors?: Array<string>; // List of mentor IDs
    mentorRequests?: Array<{ mentorId: Schema.Types.ObjectId; status: 'pending' | 'accepted' | 'rejected'; requestDate: Date; }>;
    availabilityForProjects?: boolean;
    preferredContactMethod?: string;
    resumeReviews?: Array<{ reviewerId: Schema.Types.ObjectId; resumeFileUrl: string; feedback: string; reviewDate: Date; }>;
    referrals?: Array<{ referrerId: Schema.Types.ObjectId; jobTitle: string; company: string; referralDate: Date; status: 'pending' | 'accepted' | 'rejected'; }>;
    mockInterviews?: Array<{ interviewerId: Schema.Types.ObjectId; interviewDate: Date; feedback: string; status: 'pending' | 'completed' | 'canceled'; }>;
    webinars?: Array<{ webinarId: Schema.Types.ObjectId; registrationDate: Date; }>;
}

const usersSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    transactions: { type: Array, default: [] },
    contacts: { type: Array, default: [] },
    registrationNumber: { type: String, required: true },
    department: { type: String, required: true },
    year: { type: String, required: true },
    interestDomain: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    bio: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    email: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    enrollmentDate: { type: Date, default: Date.now },
    courses: { type: Array, default: [] },
    grades: { type: Array, default: [] },
    activities: { type: Array, default: [] },
    projects: { type: Array, default: [] },
    internships: { type: Array, default: [] },
    achievements: { type: Array, default: [] },
    certifications: { type: Array, default: [] },
    goals: { type: Array, default: [] },
    mentors: { type: Array, default: [] }, // List of mentor IDs
    mentorRequests: { type: Array, default: [] }, // List of mentorship requests
    availabilityForProjects: { type: Boolean, default: false },
    preferredContactMethod: { type: String, default: "email" },
    resumeReviews: { type: Array, default: [] }, // List of resume reviews
    referrals: { type: Array, default: [] }, // List of referrals
    mockInterviews: { type: Array, default: [] }, // List of mock interviews
    webinars: { type: Array, default: [] } // List of webinars
});

export default mongoose.models.User || mongoose.model<User>('User', usersSchema);
