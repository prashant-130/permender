const express= require('express')
const cors=require('cors')

const app = express();
const port = 5500;
const multer = require('multer')
const connectdb = require('./db/db')
connectdb()
const router= require('./routes/routes');
const router1=require('./routes/routes1');
const router2=require('./routes/Db_route')
const router3 = require('./routes1/Db_routes');
app.use(express.json())
app.use(cors({origin:'*'}));

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,res,cd)
//         {
//             cd(null,'upload')
//         },
//         filename:function(req,res,cd)
//         {
//           cd (null,"backendfile"+Date.now() +'.jpg')  
//         }
//     })
// }).single('my_image')

// app.post('/upload',upload,(req,res)=>{
//        res.send("your file is uploaded")
// })

const upload =multer({
    storage:multer.diskStorage({
        destination:function(req, res,cd)
        {
            cd(null,'upload')
        },
        filename:function(req,res,cd)
        {
            cd (null, "back"+  Date.now() + '.jpg')
        }
    })
     
}).single('my_name')

app.post('/upload',upload,(req,res)=>{
    res.send("uploaded")
})
//req---->client/user/frontend
//res--->server/backend

// const isLogn = function(req,res,next)
// {
//     console.log("user is login")
//     next();
// }
// app.use(isLogn)

// const isValid=function(req,res,next)
// {
    
//     console.log('yes valid user')
//     next();
// }
// app.use(isValid)
// const isAdmib=function(req,res,next)
// {
   
//     console.log('yes valid Admin')
//     next();
// }
// app.use(isAdmib)

// const firstvalid = function(req,res,next){
//     console.log("first user is valid")
//     next();
// }
// app.use(firstvalid)

// const secondvalid= function(req,res,next){
//     console.log("second user is valid")
//     next();
// }
// app.use(secondvalid)

// const thirdvalid= function(req, res, next){
//     console.log("third user is valid")
//     next();
// }

// app.use(thirdvalid)


// app.get('/',(req,res)=>{
//     res.send('you are successfully login')
//     // res.json({
//     //     success:true,
//     //     message:"you are successfully login"
//     // })

//     console.log(req.body)
// })


app.use('/api',router)  //api/login   api/data
app.use('/API',router1)

app.use('/mongo',router2)
app.use('/mango',router3)

// app.put('/put',(req,res)=>{
//     // res.send('data')
//     res.json(
//         {
//             done:this,
//             message:"done"
//         }
//     )
//     console.log(req.body)
// })
app.listen(port)

