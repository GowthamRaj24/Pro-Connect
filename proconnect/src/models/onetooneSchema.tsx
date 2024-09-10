import mongoose, { Schema, Document } from 'mongoose';

export interface MentorshipRequest extends Document {
    mentorId: Schema.Types.ObjectId;
    menteeId: Schema.Types.ObjectId;
    status: 'pending' | 'accepted' | 'rejected';
    requestDate: Date;
    meetingDate?: Date;
}

const mentorshipRequestSchema: Schema = new Schema({
    mentorId: { type: Schema.Types.ObjectId, ref: 'Alumni', required: true },
    menteeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    requestDate: { type: Date, default: Date.now },
    meetingDate: { type: Date }
});

export default mongoose.models.MentorshipRequest || mongoose.model<MentorshipRequest>('MentorshipRequest', mentorshipRequestSchema);
