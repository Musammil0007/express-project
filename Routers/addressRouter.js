const express=require("express")
const { addAddress, getAddress, getAddressById, editAddress, deleteAddress } = require("../controllers/addressController")
const router=express.Router()

router.post("/add",addAddress)
router.get("/get",getAddress)
router.get("/get/:id",getAddressById)
router.patch("/edit/:id",editAddress)
router.delete("/delete/:id",deleteAddress)
module.exports=router