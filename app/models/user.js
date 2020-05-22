const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isEmail = require('validator/lib/isEmail')


const userSchema = new Schema({
    username:{
        type:String,
        minlength: 6,
        maxlength:64,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        validate:{
            validator:function(value){
            return isEmail(value)
            },
            message:function(){
                return 'Invalid e-mail format'
            }
        }
    },
    password:{
        type:String,
        minlength:8,
        maxlength:128
    }
})

const User = mongoose.model('User',userSchema)
module.exports =  User