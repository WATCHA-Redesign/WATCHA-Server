import mongoose from "mongoose";
import { IPedia } from "../interfaces/IPedia";

const MainPediaSchema = new mongoose.Schema({
    image:{type:String},
    title:{type:String},
    titleDetail:{type:String},
    watchingNum:{type:Number},
    nickname:{type:String},
})

export default mongoose.model<IPedia & mongoose.Document>("MainPedia",MainPediaSchema)