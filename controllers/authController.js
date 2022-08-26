
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const generateToken = require("../config/token/generateToken");


//@description: Register new user
// @route : POST /api/users
// @access : public

const registerUser=asyncHandler(async(req,res)=>{
    const{userName,password,type}=req.body

    if(!userName || !type || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists=await User.findOne({userName})

    if(userExists){
        res.status(400)
        throw new Error('userName already exists')

    }
    
    // Hash password

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    // create User

    const user= await User.create({
        userName,
        type,
        password:hashedPassword
    })

    if(user){
        res.status(201).json("successfully registered")
    }else{
        res.status(400)
        throw new Error('Something went wrong, Please register again')
    }

})


//@description: authenticate a user
// @route : POST /api/users/login
// @access : public

const loginUser=asyncHandler(async(req,res)=>{

    const {userName,password}=req.body
    const user=await User.findOne({userName})
 
    if(user && (await bcrypt.compare(password,user.password))){
     res.json({
             UserName:user.userName,
             type:user.type,
             token:generateToken(user._id)
     })
    }
    else{
     res.status(400)
         throw new Error('invalid  details')
    }
 
  })


module.exports={
    registerUser,loginUser
}