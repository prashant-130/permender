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
router.post('/array',async(req,res)=>{
    try{
         
          let {name , phonenumber} = req.body
       const newUser= new User({name, phonenumber})
           await newUser.save()

           res.send({
            newUser
           })
    }
    catch(err){
        console.log(err.message)
    }
})

router.delete('/array/:id',async(req,res)=>
{
     let  {id}=req.params

     try{
        let deletedUser= await User.findByIdAndDelete(id)
        res.send({deletedUser})
     }
     catch(err)
     {
        console.log(err.message)
     }
})

router.put('/array/:id',async(req,res)=>{
    let {id}=req.params

    let {name,age} = req.body

    try{
        let updateduser = await User.findByIdAndUpdate(id,{name,age})
        res.send({updateduser})
    }
    catch(err){
        console.log(err.message)
    }
})

//mango/array
module.exports=router