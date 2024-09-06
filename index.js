const dataservice=require('./service/dataservice')

const express=require("express")
const app=express()
app.listen(3000,()=>{console.log("server started at port number 3000");


})
// to parse json data from req.body
app.use(express.json())

// login
app.get('/login',(req,res)=>{
   
    const reslut=dataservice.login(req.body.userid,req.body.password)
    if(reslut){
        res.status(reslut.statusCode).json(reslut.message)
    }
    else{
        res.send(reslut.message)
    }
})

app.get('/',(req,res)=>{
    res.send('Get Method run woeukjn sldjsdjskdjsl')
})
app.post('/',(req,res)=>{
    res.send('post Method ')
})
app.get('/',(req,res)=>{
    res.send('Get Method run woeukjn sldjsdjskdjsl')
})
app.get('/',(req,res)=>{
    res.send('Get Method run woeukjn sldjsdjskdjsl')
})