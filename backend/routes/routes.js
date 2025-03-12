const express = require('express');
const router =express.Router();



const firstvalid = function(req,res,next){
    console.log("first user is valid")
    next()
}


const secondvalid= function(req,res,next){
    console.log("second user is valid")
    console.log("first user is valid")
    next()
  
}


const thirdvalid= function(req, res, next){
    console.log("third user is valid")
    console.log("first user is valid")
    next()
   
}





router.get('/data', firstvalid,secondvalid,thirdvalid,(req,res)=>{
    res.send('you are successfully login')
    // res.json({
    //     success:true,
    //     message:"you are successfully login"
    // })
})

module.exports = router
