import mongoose from "mongoose"
const dbConnect = async()=>{
  const connect = await mongoose.connect("mongodb://127.0.0.1:27017/Files")
  if(connect){
    console.log("Database Connected")
  } else{
    console.log("Database failed to Connect")

  }
}
export default dbConnect