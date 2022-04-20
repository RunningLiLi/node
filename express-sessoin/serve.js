import express from "express"
import session from "express-session"
import cors from "cors"
import bodyParser from 'body-parser'
import parseJson from "parse-json"

import parse, {
    parseJSONObject,
  } from "parse-json-object";
const app=express()
app.use(session({
    secret:"1",
    cookie:{ maxAge:1000*60*60 },  
    resave:false,
    saveUninitialized:true
}))
app.use(cors())
app.use(bodyParser.urlencoded())
app.post('/post',(req,res)=>{
    req.session.name=req.body;
    req.session.islog=true;
    console.log(req.session.name)
    res.send({status:1,mes:'okok'})
})
app.get('/post',(req,res)=>{
    // let id=req.sessionID
    console.log(req)
    res.send({status:1,mes:'已登录'})
})
app.get('/destory',(req,res)=>{
    req.session.destroy()
    res.send({status:1,mes:'已清空'})
})
app.listen(80,()=>{
    console.log('ok')
})