import mongoose, { Schema, Document } from 'mongoose';

export interface ResumeReview extends Document {
    reviewer: Schema.Types.ObjectId; // Reference to the Reviewer
    user: Schema.Types.ObjectId; // Reference to the User
    resumeFileUrl: string;
    feedback: string;
    reviewDate: Date;
}

const resumeReviewSchema: Schema = new Schema({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    resumeFileUrl: { type: String, required: true },
    feedback: { type: String, default: "" },
    reviewDate: { type: Date, default: Date.now }
});

export default mongoose.models.ResumeReview || mongoose.model<ResumeReview>('ResumeReview', resumeReviewSchema);
