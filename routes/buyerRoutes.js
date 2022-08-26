const express=require('express');
const {getAllSellers,getSingleCatalog,createOrder} = require('../controllers/buyerController');

const router=express.Router()

const {buyerProtect}=require('../middleware/buyerAuthMiddleware')

router.get('/list-of-sellers',buyerProtect,getAllSellers)
router.get('/seller-catalog/:id',buyerProtect,getSingleCatalog)
router.post('/create-order/:id',buyerProtect,createOrder)

module.exports=router;