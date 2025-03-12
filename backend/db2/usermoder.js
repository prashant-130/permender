const {Schema,model} = require('mongoose');

const userschema = new Schema(
    {
        name:{
            type:String,
            require:true
        },
        phonenumber:{
            type:Number,
            require:true
        },
        date:{
            type:Date,
            default:Date.now()
        }
    }
)

const usermodel = model('perminders',userschema);
module.exports = usermodel