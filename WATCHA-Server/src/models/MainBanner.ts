import mongoose from "mongoose";
import { IBanner } from "../interfaces/IBanner";

const MainBannerSchema = new mongoose.Schema({
    image:{type:String},
    largeTitle:{type:String},
    description:{type:String},
})

export default mongoose.model<IBanner & mongoose.Document>("MainBanner",MainBannerSchema)