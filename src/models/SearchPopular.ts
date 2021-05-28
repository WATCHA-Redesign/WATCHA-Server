import mongoose from "mongoose";
import { ISearch } from "../interfaces/ISearch";

const SearchPopularSchema = new mongoose.Schema({
    image:{type:String},
    name:{type:String}
})

export default mongoose.model<ISearch & mongoose.Document>("SearchPopular",SearchPopularSchema)