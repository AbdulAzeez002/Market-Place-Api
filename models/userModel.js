const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:[true,'Please add a Username'],
        unique:true
    },
   
    password:{
        type:String,
        required:[true,'Please add a password']
    },
    
    type:{
        type:String,
        enuum:["buyer","seller"],
        
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema)