const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const Catalog = require('../models/catelogModel');
const Order=require('../models/orderModel')
var mongoose = require('mongoose');

//@description: Get all sellers
// @route : GET /api/buyer/list-of-sellers

// @access : private 

const getAllSellers=asyncHandler(async(req,res)=>{
  console.log('reached sellers')
    try {
        const sellers=await User.find({type:'seller'}).select('-password')
        console.log(sellers,'niyads') 
        res.status(200).json(sellers)
        
    } catch (error) {
      res.status(500).json(error)  
    }
    
})

//@description: Get Catalog of a seller
// @route : GET /api/buyer/seller-catalog/:seller_id

// @access : private 

const getSingleCatalog=asyncHandler(async(req,res)=>{
 const {id}=req.params
    try {
        const catalog=await Catalog.find({seller:id}).populate('products.product')
   
        res.status(200).json(catalog) 
    } catch (error) {
      res.status(500).json(error)  
    }
    
})

//@description: order products from seller catalog
// @route : POST /api/buyer/create-order/:seller_id

// @access : private 

const createOrder=asyncHandler(async(req,res)=>{
    const {sel}=req.params
    const id=req.params.id.toString()
   
    const sellerId =  mongoose.Types.ObjectId(id);
    
    const products=req.body
    
       try {
     
        const order = await Order({
            seller: sellerId,
            buyer:req.user._id,
            products:products 
         
        })
        
        const response = await order.save();

        res.json({orderId:response._id,order:'submitted'})
        
    }
        catch (error) {
         res.status(500).json(error)  
       }
       
   })


module.exports={
    getAllSellers,getSingleCatalog,createOrder
}