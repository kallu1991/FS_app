import mongoose from "mongoose";

const userDetails = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    passWord:{
        type:String,
        required:true
    },
    reEnterPassWord:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model('userDetails',userDetails);