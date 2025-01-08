import mongoose from "mongoose";

const adminSchema=mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String,
    id:String,
})

export default mongoose.model("Admin",adminSchema);