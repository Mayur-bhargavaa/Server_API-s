const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    type:{
        type:String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true,
        trim:true
    },
    available:{
        type:String,
        require:true,
        trim:true
    },
}) 

const dataVideo = new mongoose.model("Items",dataSchema)

module.exports = dataVideo;