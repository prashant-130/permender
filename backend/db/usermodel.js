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

const usermodel= model('permenders' ,userschema)
module.exports = usermodel;