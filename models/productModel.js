
const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"enter your product name"]
    },
    price:{
        type:Number,
        required:[true, "please enter price"]
        
    },
    qty:{
        type:Number,
        required:[true ,"enter the quantity"]
    },
    description:{
        type:String,
        required:[true,"enter the product informatrion"]
    }
})

module.exports=mongoose.model("Product",productSchema)