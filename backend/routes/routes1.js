const express = require('express')
const router = express.Router();

const isLogn = function(req,res,next)
{
    console.log("user is login")
    next();
}


const isValid=function(req,res,next)
{
    
    console.log('yes valid user')
    next();
}

const isAdmib=function(req,res,next)
{
   
    console.log('yes valid Admin')
    next();
}



router.get('/data', isLogn,isValid,isAdmib,(req,res)=>{
    res.send('you are successfully login')
    
})




module.exports=router