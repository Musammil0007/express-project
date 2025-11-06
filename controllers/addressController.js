const { add } = require("lodash");
const Address=require("../models/addressModel")
exports.addAddress=async (req,res)=>{
    const{houseName,place,pinCode,district,state}=req.body;
    const existAdd=await Address.findOne({houseName:houseName})
    if(existAdd){
        res.status(400).json({message:"address already exist"})
    }
    const newAddress=new Address({
        houseName,
        place,
        pinCode,
        district,
        state
    })
    await newAddress.save()
    res.status(200).json({messsage:"address added success",newAddress})
}
exports.getAddress=async(req,res)=>{
    const addresses=await Address.find()
    res.status(200).json({message:"address's fetched successfully",addresses})
}
exports.getAddressById=async(req,res)=>{
    const id=req.params.id;
    const address=await Address.findById({_id:id})
    res.status(200).json({message:"address",address})

}
exports.editAddress=async(req,res)=>{
    const id=req.params.id;
    const{houseName,place,pinCode,district,state}=req.body
    const address=await Address.findById({_id:id})
    if(!address){
        res.status(400).json({message:"address not found"})
        return
    }
    if(houseName)address.houseName=houseName
    if(place)address.place=place
    if(pinCode)address.pinCode=pinCode
    if(district)address.district=district
    if(state)address.state=state

    await address.save({validateBeforeSave:false})
    res.status(200).json({message:"address updated successfully",address})
}
exports.deleteAddress=async(req,res)=>{
    const id=req.params.id;
    const address=await Address.findByIdAndDelete({_id:id})
    if(!address){
        res.status(400).json({message:"address not found"})
    }
    res.status(200).json({message:"address deleted successfully"})
}