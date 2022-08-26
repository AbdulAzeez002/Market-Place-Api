const express=require('express');
const {registerUser,loginUser} = require('../controllers/authController');
const router=express.Router()

const {userProtect}=require('../middleware/buyerAuthMiddleware')

router.post('/register',registerUser)
router.post('/login',loginUser)
module.exports=router;