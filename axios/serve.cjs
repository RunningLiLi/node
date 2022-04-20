const express=require("express")
const cors=require("cors")
const bodyParser = require('body-parser')
const app=express()
app.use(cors())
app.use(bodyParser.urlencoded())
app.get("/get",(req,res)=>{
    res.send("get请求成功")
})
app.post("/post",(req,res)=>{
   
    res.send(req.body) 
})
app.listen(80,()=>{
    console.log("80端口已启动,http://127.0.0.1:80");
   
})