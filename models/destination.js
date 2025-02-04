const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    visited:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("Destination",DestinationSchema);