import mongoose, { Schema, Document } from 'mongoose';

const usersSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
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
        resumeFileUrl: { type: String, required: true },
        feedback: { type: String, required: true }
    }, { _id: false })]},

    referrals: { type: [new Schema({
        referrerId: { type: String, required: true },
        refereeId: { type: String, required: true },
        date: { type: Date, required: true },
        details: { type: String, required: true },
        status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
    }, { _id: false })]},

    oneToOneMentorships: { type: [new Schema({
        mentorId: { type: String, required: true },
        menteeId: { type: String, required: true },
        date: { type: Date, required: true },
        topicsDiscussed: { type: [String], required: true },
        feedback: { type: String, required: true }
    }, { _id: false })]}


});

export default mongoose.models.UserSchema1 || mongoose.model('UserSchema1', usersSchema);
