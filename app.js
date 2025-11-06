const express=require("express")
const mongoose=require("mongoose");
const User=require("./models/user");
const app=express()
const dotenv=require("dotenv");
dotenv.config();
const userRouter=require("./Routers/userRouter");
const productRouter=require("./Routers/productRouter");
const  addressRouter=require("./Routers/addressRouter");
const jwt=require("jsonwebtoken")
 app.use(express.json());
 app.use("/user",userRouter)
 app.use("/product",productRouter)
 app.use("/address",addressRouter)
 mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("error while connecting mongodb",err)
})
app.get("/", (req, res) => {
    try {
        console.log("hi hellow");
    
        res.send("Hello World");
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }

})
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();  // fetch all users from database
        res.status(200).json(users);      // send them as JSON response
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
});

 app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
 })