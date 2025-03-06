const express= require('express')
const app = express();
const port = 5000;

app.use(express.json())
//req---->client/user/frontend
//res--->server/backend
app.get('/abc',(req,res)=>{
    // res.send('parminder')
    res.json({
        success:true,
        message:"you are successfully login"
    })

    console.log(req.body)
})
app.put('/put',(req,res)=>{
    // res.send('data')
    res.json(
        {
            done:this,
            message:"done"
        }
    )
    console.log(req.body)
})
app.listen(port)