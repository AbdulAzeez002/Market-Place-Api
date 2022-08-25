const express=require('express');
const {createCatalog} = require('../controllers/sellerController');
const router=express.Router()

const {sellerProtect}=require('../middleware/sellerAuthMiddleware')

router.post('/create-catalog',sellerProtect,createCatalog)
// router.post('/login',loginUser)
// router.get('/me',protect,getMe)
module.exports=router;