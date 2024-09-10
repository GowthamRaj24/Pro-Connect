import mongoose, { Schema, Document } from 'mongoose';

export interface MockInterview extends Document {
    alumniId: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    interviewDate: Date;
    feedback: string;
    status: 'pending' | 'completed' | 'canceled';
}

const mockInterviewSchema: Schema = new Schema({
    alumniId: { type: Schema.Types.ObjectId, ref: 'Alumni', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    interviewDate: { type: Date, required: true },
    feedback: { type: String, default: "" },
    status: { type: String, enum: ['pending', 'completed', 'canceled'], default: 'pending' }
});

export default mongoose.models.MockInterview || mongoose.model<MockInterview>('MockInterview', mockInterviewSchema);
