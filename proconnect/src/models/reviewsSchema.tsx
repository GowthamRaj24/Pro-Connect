import { Schema, model, Document } from "mongoose";

interface IReview extends Document {
    reviewer: Schema.Types.ObjectId;
    type: "question" | "companyreview" | "discussion" | "suggestion";
    title: string;
    content: string;
    reviewDate: Date;
    tags: string[];
    upvotes: number;
    rating?: number; 
    comments: Schema.Types.ObjectId[];
}

const reviewSchema = new Schema<IReview>({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ["question", "companyreview", "discussion", "suggestion"], required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    reviewDate: { type: Date, default: Date.now },
    rating : {type : Number},
    tags: [{ type: String }],
    upvotes: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

export default model<IReview>('Reviews', reviewSchema);