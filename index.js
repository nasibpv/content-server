const express=require("express")
const app=express()
app.listen(3000,()=>{console.log("server started at port number 3000");


})
app.get('/',(req,res)=>{
    res.send('Get Method run')
})