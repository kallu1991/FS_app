// const mongoose = require('mongoose');

import mongoose  from 'mongoose';

const ReciepeName = mongoose.Schema({
    reciepeName:{
        type:String,
        required:true
    },

    reciepeQuantity:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }

});


// module.exports = mongoose.model('reciepename',ReciepeName);

export default mongoose.model('reciepeName',ReciepeName);