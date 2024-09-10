import mongoose, { Schema, Document } from 'mongoose';

const usersSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    
});

export default mongoose.models.UserSchema1 || mongoose.model('UserSchema1', usersSchema);
