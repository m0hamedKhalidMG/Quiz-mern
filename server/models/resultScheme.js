import mongoose from "mongoose";
import { Cover } from "../models/questionScheme.js";
const {Schema} =mongoose
const resultModel= new Schema({
    result : { type : Array, default : []},
    createdAt : { type : Date, default : Date.now},
    userid:{type:Object,required: true},
    idcover:{type:String,required: true} 
})
export default mongoose.model("result",resultModel) 