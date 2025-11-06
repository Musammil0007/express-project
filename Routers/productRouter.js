const express=require("express")
const router=express.Router();
const{addProduct,getProduct,getById, editProduct, deleteProduct}=require("../controllers/productController")

router.post("/add",addProduct)
router.get("/get",getProduct)
router.get("/get/:id",getById)
router.patch("/edit/:id",editProduct)
router.delete("/delete/:id",deleteProduct)
module.exports=router;