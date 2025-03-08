const{Schema,model} =require('mongoose')


const userschema = new Schema(
    {
        name:{
            type:String,
            required:true,
            },
        phonenumber:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        }
    }
)

const usermodel= model('users' ,userschema)
module.exports = usermodel;