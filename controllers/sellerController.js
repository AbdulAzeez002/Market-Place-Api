const asyncHandler = require('express-async-handler')
const Catalog = require('../models/catelogModel')
const Order = require('../models/orderModel')
const Product = require('../models/productModel')


//@description: createCatelog for sller
// @route : POST /api/seller/create-catalog
// @access : private

const createCatalog = asyncHandler(async (req, res) => {

    let products = req.body
// creating catalog with seller id
    const catlog = await Catalog({
        seller: req.user._id,

    })

    const catlogAdd = await catlog.save();

    // adding products to products collection and updating the catalog collection to add products id.

    products.map(async (item) => {
        const product = await Product({
            productName: item.productName,
            price: item.price

        })
        const response = await product.save();


        const updateCatlog = await Catalog.findByIdAndUpdate(catlogAdd._id,
            {
                $push:
                {
                    products: { product: response._id }
                }
            })


    })

    res.json('catalog created')



})

//@description: Get orders 
// @route : GET /api/seller/orders
// @access : private 

const getOrder = asyncHandler(async (req, res) => {
    console.log('reacaahed')
    const sellerId = req.user._id
    
    try {
        const orders = await Order.find({ seller: sellerId }).populate('products.product')
        console.log(orders)
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }

})


module.exports = {
    createCatalog, getOrder
}