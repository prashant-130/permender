const mongoose=require('mongoose');
const connectdb=async()=>{
    try{
          await  mongoose.connect('mongodb+srv://blurrystar007:gLDfK8RVM8NbbHb0@cluster0.tj8ae.mongodb.net/test')
            console.log("mongoose is connected")
    }
    catch(err){
        console.log(err.message)
    }
    
}
module.exports =connectdb