import mongoose, { Schema, model, Document } from "mongoose";

export interface IReview extends Document {
    reviewer: Schema.Types.ObjectId;
    type: "question" | "companyreview" | "discussion" | "suggestion";
    title: string;
    content: string;
    reviewDate: Date;
    tags: string[];
    upvotes: number;
    rating?: number; 
    comments: Icomment[]; // Update the type to Icomment[]
}

export interface Icomment extends Document {
    reviewer: Schema.Types.ObjectId;
    commentId : Schema.Types.ObjectId;
    title: string;
    rating: number;
    content: string;
    reviewDate: Date;
    type: "question" | "companyreview" | "discussion" | "suggestion";
}


const reviewSchema = new Schema<IReview>({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User',},
    type: { type: String, enum: ["question", "companyreview", "discussion", "suggestion"]},
    title: { type: String},
    content: { type: String},
    reviewDate: { type: Date, default: Date.now },
    rating : {type : Number},
    tags: [{ type: String }],
    upvotes: { type: Number, default: 0 },
    comments:{ type: [new Schema<Icomment>({
        reviewer: { type: String},
        commentId : {type : String},
        title: { type: String},
        rating: { type: Number},
        content: { type: String},
        reviewDate : {type : Date},
        type : {type : String}
    }, { _id: false })]} 
});

export default mongoose.models.Reviews || mongoose.model<IReview>('Reviews', reviewSchema);