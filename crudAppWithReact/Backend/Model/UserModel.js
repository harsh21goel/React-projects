let mongoose =require("mongoose")
let validator =require("validator")

let userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        
    },
    Email:{
        type:String,
        required:[true,'Email address is required'],
        lowercase:true,
        unique:[true,"Email is already registered"],
        validate:{
            validator: validator.isEmail
        } 

    },
    Number:{
        type:Number,
        required:true,
        maxLength:10,
        minLength:10,
        unique:true
    }
})

let model=new mongoose.model("User",userSchema,"User")
module.exports =model

