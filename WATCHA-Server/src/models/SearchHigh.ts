import mongoose from "mongoose";
import { IHigh } from "../interfaces/IHigh";

const SearchHighSchema = new mongoose.Schema({
    image:{type:String},
    title:{type:String},
    subtitle:{type:String}
})

export default mongoose.model<IHigh & mongoose.Document>("SearchHigh",SearchHighSchema)
