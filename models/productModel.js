const mongoose = require('mongoose')

const productSchema=mongoose.Schema({
    productName:{
        type:String,
        required:[true,'product name is required'],
        
    },
   
    price:{
        type:Number,
        required:[true,'product price is required']
    },
    
},
{
    timestamps:true
})

module.exports=mongoose.model('Product',productSchema)