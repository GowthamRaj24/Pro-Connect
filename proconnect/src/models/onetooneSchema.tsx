import mongoose, { Schema, Document } from 'mongoose';

export interface Mentorship extends Document {
    mentor: Schema.Types.ObjectId; // Reference to the Mentor
    mentee: Schema.Types.ObjectId; // Reference to the Mentee
    sessionDate: Date;
    feedback: string;
    status: 'scheduled' | 'completed' | 'canceled';
}

const OneToOne: Schema = new Schema({
    mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    sessionDate: { type: Date, required: true },
    feedback: { type: String, default: "" },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' }
});

export default mongoose.models.Mentorship || mongoose.model<Mentorship>('OneToOne', OneToOne);
