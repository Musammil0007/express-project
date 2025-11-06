const mongoose=require("mongoose");
 const addressSchema=new mongoose.Schema({
    houseName:{
        type:String,
        required:[true,"enter your house name"]
    },
    place:{
        type:String,
        required:[true,"enter your place"]
    },
    pinCode:{
        type:Number,
        required:[true,"enter your pincode"]
    },
    district:{
        type:String,
        required:[true,"enter your district"]
    },
    state:{
        type:String,
        required:[true,"enter your state"]
    }


 })
 module.exports=mongoose.model("Address",addressSchema)