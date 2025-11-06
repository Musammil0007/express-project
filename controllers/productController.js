const Product=require("../models/productModel")
exports.addProduct=async (req,res)=>{
    const{name,price,qty,description}=req.body

    if(!name||!price||!qty||!description){
        res.status(400).json({message:"all field required"})

    }

    const newProduct=new Product({
        name,
        price,
        qty,
        description
    })
    await newProduct.save()
    res.status(200).json({message:"product added successfully",newProduct})
}
exports.getProduct=async(req,res)=>{
    const products=await Product.find()
    res.status(200).json({message:"products fetched success",products})
}
exports.getById=async(req,res)=>{
    const id=req.params.id;
    const product =await Product.findOne({_id:id})
    res.status(200).json({message:"success",product})
}
exports.editProduct=async(req,res)=>{
    const id=req.params.id;
    const{name,price,qty,description}=req.body;
    const product=await Product.findById({_id:id});
    if(!product){
        res.status(400).json({message:"product not found"})
        return
    }
    if(name)product.name=name;
    if(price)product.price=price;
    if(qty)product.qty=qty;
    if(description)product.description=description
    await product.save({validateBeforeSave:false})
    res.status(200).json({message:"product details edited successfully",product})




    
}
 exports.deleteProduct=async (req,res)=>{
    const id =req.params.id;
    const product= await Product.findOneAndDelete({_id:id})
    if(!product){
        res.status(400).json({message:"product not found"})
        return
    }
    res.status(200).json({message:"product deleted success"})
 }