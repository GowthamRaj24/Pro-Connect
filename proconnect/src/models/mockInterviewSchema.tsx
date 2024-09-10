import mongoose, { Schema, Document } from 'mongoose';

export interface MockInterview extends Document {
    interviewer: Schema.Types.ObjectId; // Reference to the Interviewer
    user: Schema.Types.ObjectId; // Reference to the User
    interviewDate: Date;
    feedback: string;
    status: 'scheduled' | 'completed' | 'canceled';
}

const mockInterviewSchema: Schema = new Schema({
    interviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    interviewDate: { type: Date, required: true },
    feedback: { type: String, default: "" },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' }
});

export default mongoose.models.MockInterview || mongoose.model<MockInterview>('MockInterview', mockInterviewSchema);
