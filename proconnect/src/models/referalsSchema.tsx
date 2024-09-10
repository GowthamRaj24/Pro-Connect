import mongoose, { Schema, Document } from 'mongoose';

export interface Referral extends Document {
    referrer: Schema.Types.ObjectId; // Reference to the Referrer
    user: Schema.Types.ObjectId; // Reference to the User
    jobTitle: string;
    company: string;
    referralDate: Date;
    status: 'pending' | 'accepted' | 'rejected';
}

const referralSchema: Schema = new Schema({
    referrer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    referralDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
});

export default mongoose.models.Referral || mongoose.model<Referral>('Referral', referralSchema);
