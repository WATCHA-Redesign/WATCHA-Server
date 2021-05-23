import mongoose from "mongoose";
import { IPlaying } from "../interfaces/IPlaying";

const MainRecommendSchema = new mongoose.Schema({
    image:{type:String},
    title:{type:String},
})

export default mongoose.model<IPlaying & mongoose.Document>("MainRecommend",MainRecommendSchema)