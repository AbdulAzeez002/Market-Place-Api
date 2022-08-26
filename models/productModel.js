const mongoose = require('mongoose')

const productSchema=mongoose.Schema({
    productName:{
        type:String,
        required:[true,'Please add a Product'],
        
    },
   
    price:{
        type:Number,
        required:[true,'Please add a password']
    },
    
},
{
    timestamps:true
})

module.exports=mongoose.model('Product',productSchema)