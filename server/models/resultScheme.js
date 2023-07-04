import mongoose from "mongoose";
const {Schema} =mongoose
const resultModel= new Schema({
    result : { type : Array, default : []},
    createdAt : { type : Date, default : Date.now}
})
export default mongoose.model("result",resultModel)