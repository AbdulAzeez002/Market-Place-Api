const mongoose = require('mongoose')


const orderSchema= new mongoose.Schema({
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true 
    }, 
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true 
    },
    products:[{ 
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product', 
        } 
            
    }]
})



module.exports=mongoose.model('Order',orderSchema)