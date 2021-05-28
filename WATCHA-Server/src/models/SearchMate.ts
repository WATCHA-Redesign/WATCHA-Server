import mongoose from "mongoose";
import { IMate } from "../interfaces/IMate";

const SearchMateSchema = new mongoose.Schema({
    name:{type:String},
    role:{type:Boolean},
})

export default mongoose.model<IMate & mongoose.Document>("SearchMate",SearchMateSchema)