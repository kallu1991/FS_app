import mongoose from "mongoose";

const userDetails = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    passWord:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model('userDetails',userDetails);