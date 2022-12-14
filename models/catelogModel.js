const mongoose = require('mongoose')


const catlogSchema= new mongoose.Schema({
    seller:{
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

module.exports=mongoose.model('Catalog',catlogSchema)