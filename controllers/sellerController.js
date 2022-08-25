const asyncHandler = require('express-async-handler')
const Catlog = require('../models/catelogModel')


//@description: createCatelog for sller
// @route : POST /api/seller/create-catalog
// @access : private

const createCatalog = asyncHandler(async (req, res) => {

    try {

        const catlogExist = await Catlog.findOne({ seller: req.user._id })
        const products = req.body
    
        if (catlogExist) {
    
            products.map(async (item) => {
                const productExist = catlogExist.products.findIndex(product => product.productName == item.productName)
    
    
                if (productExist != -1) {
                    console.log("product exists")
                }

                else {
                    const updateCatlog = await Catlog.findOneAndUpdate({ seller: req.user._id },
                        {
                            $push:
                            {
                                products: { productName: item.productName, price: item.price }
                            }
                        })
                        
                }
            })
            res.json('updated')
     
           
        }
        else {
            const catlog = await Catlog({
                seller: req.user._id,
                products: req.body
    
            })
    
            const response = await catlog.save();
            res.json(response)
        }
        
    } catch (error) {
        console.log('error');
        res.json(error)
    }
  
})


module.exports = {
    createCatalog
}