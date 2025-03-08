const express=require('express');
const router= express.Router();

const User= require('../db/usermodel')


router.get('/array',async(req,res)=>{
    try{
            const alluser= await User.find();
            console.log(alluser)
            res.send(alluser)
    }
    catch(err){
        console.log(err.message)
    }

})
//mango/array
module.exports=router