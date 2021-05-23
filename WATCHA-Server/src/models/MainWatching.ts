import mongoose from "mongoose";
import { IPlaying } from "../interfaces/IPlaying";

const MainWatchingSchema = new mongoose.Schema({
    image:{type:String},
    title:{type:String},
    progress:{type:Number},
})

export default mongoose.model<IPlaying & mongoose.Document>("MainWatching",MainWatchingSchema)