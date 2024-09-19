import mongoose from "mongoose";

const donorSchema= new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    dob:{type:String},
    place:{type:String},
    phone:{type:Number},
    blood_group:{type:String},
});

export default mongoose.model.Donors||mongoose.model("Donor",donorSchema)