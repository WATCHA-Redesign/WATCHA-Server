import mongoose from "mongoose";
import { ICollection } from "../interfaces/ICollection";

const SearchCollectionSchema = new mongoose.Schema({
    title:{type:String},
    nickname:{type:String},
})

export default mongoose.model<ICollection & mongoose.Document>("SearchCollection",SearchCollectionSchema)