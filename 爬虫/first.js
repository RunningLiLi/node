const https=require('https')
const cheerio=require('cheerio')
const request=require('request')
const fs=require("fs")
const req=https.request("https://movie.douban.com/",async(res)=>{
    const chunks=[]
    res.on('data',(chunk)=>{
         chunks.push(chunk)
    })
  
    res.on('end',()=>{
        let htmlstr=Buffer.concat(chunks).toString("utf-8")
        fs.writeFile("爬出来的文件.html",htmlstr,()=>{
            console.log("ok")
        })
        let $=cheerio.load(htmlstr)     
    })    
})
req.end()

