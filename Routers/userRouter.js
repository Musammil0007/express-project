const express=require("express")
const router=express.Router()
const { register,login,getUserProfile,editProfile,deleteUser}=require("../controllers/user");
router.post("/register",register);
router.post("/login",login);
router.get("/profile/:id",getUserProfile);
router.patch("/edit/:id",editProfile);
router.delete("/delete/:id",deleteUser);
module.exports=router;