import mongoose from "mongoose";
const userScehma = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    profile:String

})
const userModel = mongoose.model("users",userScehma)
export default userModel