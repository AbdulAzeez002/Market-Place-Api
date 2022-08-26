const express=require('express');
const {createCatalog,getOrder} = require('../controllers/sellerController');
const router=express.Router()

const {sellerProtect}=require('../middleware/sellerAuthMiddleware')

router.post('/create-catalog',sellerProtect,createCatalog)
router.get('/orders',sellerProtect,getOrder)

module.exports=router;