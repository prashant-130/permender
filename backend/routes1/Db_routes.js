const express= require('express');
const router = express.Router();

const user = require('../db2/usermoder');

router.get('/array1',async(req,res)=>{
    try{
       const alluser = await user.find();
       res.send(alluser)
    }
    catch(err){
        console.log(err.message)
    }
})

router.post('/array1',async(req,res)=>{
    try{
        let {name, phonenumber}=req.body;
        const newuser = await new user ({name,phonenumber })
        newuser.save();

        res.send(newuser)
    }
    catch(err){
        console.log(err.message)
    }
})
router.put('/array1/:id',async(req,res)=>{
    let {id}=req.params;

    let {name,age}=req.body;
    try{
        const updateduser= await user.findByIdAndUpdate(id,{name,age})
        res.send(updateduser)
    }
    catch(err){
        console.log(err.message)
    }

})

router.delete('/array1/:id',async(req,res)=>{
    let {id}=req.params;
    try{
        const deletedUser = await user.findByIdAndDelete(id)
        res.send(deletedUser)
    }
    catch(err){
        console.log(err.message)
    }
})



module.exports = router;