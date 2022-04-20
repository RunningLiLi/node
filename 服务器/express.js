const express=require('express')
app=express()
app.use(express.static('./html'))
app.use(express.static('./css'))
app.use(express.static('./js'))
app.listen('80',()=>{
    console.log('ok')
})