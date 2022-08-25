const mongoose = require('mongoose')


const catlogSchema= new mongoose.Schema({
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true 
    }, 
    products:[{  
        productName:{ 
            type:String,
            required:true,
            unique:true
        },
        price:{
            type:Number,
            required:true,
        }
    }]
})

module.exports=mongoose.model('Catlog',catlogSchema)