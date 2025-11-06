const jwt=require("jsonwebtoken")
const  User=require("../models/user")

exports.register=async (req,res)=>{
 try{
       const{name,gmail,age,password}=req.body;
    const existingUser= await User.findOne({gmail:gmail})
    if(existingUser){
        res.status(400).json({message:"user already exist"})
        return
    }
    const newUser=new User({
        name,
        gmail,
        age,
        password
    })
    await newUser.save()
    res.status(201).json({message:"user registered successfully",user:newUser})
 }
 catch(error){
    console.log("error in register controller",error);
    res.status(500).json({message:"server error"})
 }
}
exports.login=async (req,res)=>{
 try{
       const{gmail,password}=req.body;
    const user=await User.findOne({gmail:gmail})
    if(!user){
        res.status(400).json({message:"user not found"})
        return
    }
    if(user.password!==password){
        res.status(400).json({message:"invalid password"})
        return
    }
    const token=jwt.sign({id:user.id},"topsecret")
    
    res.status(200).json({message:"login success",user,token})
 }catch(error){
    console.log("error in register controller",error);
    res.status(500).json({message:"server error"})
 }
}
 exports.editProfile=async (req,res)=>{
    try{
         const id=req.params.id;
          const{name,gmail,age,password}=req.body;
       const user=await User.findOne({_id:id})
       if(!user){
           res.status(400).json({message:"user not found"})
           return
       }    
    //    
        const updatedUser=await User.updateOne({_id:id},{$set:{name,gmail,age,password}}) 
       res.status(200).json({message:"profile updated successfully",updatedUser})
   }catch(error){
       console.log("error in update profile controller",error);
       res.status(500).json({message:"server error"})
   }}
    exports.getUserProfile=async (req,res)=>{
        try{
                const{id}=req.params; 
                const user = await User.findOne({ _id: id });
                if(!user){
                    res.status(400).json({message:"user not found"})
                    return
                }
                if(!req.headers.authorization){
                    return res.status(401).json({message:"no token found"})
                }
                const token=req.headers.authorization.split(" ")[1];
                const payload=jwt.verify(token,"topsecret")
                console.log("Got payload",payload);
                res.status(200).json({message:"user profile fetched successfully",user,token})
        }catch(error){
            console.log("error in get user profile controller",error);
            res.status(500).json({message:"server error"})
        }
    }
    exports.deleteUser=async (req,res)=>{
        try{
                const{id}=req.params; 
                const user=await User.findOneAndDelete({_id:id})
                if(!user){
                    res.status(400).json({message:"user not found"})
                    return
                }
                res.status(200).json({message:"user deleted successfully"})
        }catch(error){
            console.log("error in delete user controller",error);
            res.status(500).json({message:"server error"})
        }
    }

