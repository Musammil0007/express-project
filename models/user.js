const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"enter your name"]
    },
    gmail:{
        type:String,
        required:[true,"enter your gmail"],
        match:[/^\S+@\S+\.\S+$/ ,"please provide valid gmail"]
    },
    age:{
        type:Number,
        required:[true,"enter your age"]
    },
    password:{
        type:String,
        required:[true,"enter your password"],
        minlength:[6,"password atleast contain 6 charecters"]
    }
})
module.exports=mongoose.model("User",userSchema);