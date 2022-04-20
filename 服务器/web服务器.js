const http=require("http");
const fs=require("fs")
const path=require("path")
const serve=http.createServer();

serve.on("request",(req,res)=>{
    const url=req.url
  
    
    console.log(__dirname+'../'+url)
    // res.setHeader("Content-Type","text/html;charset=utf-8")
    
    const fpath=path.join(__dirname,'../',url) 
    fs.readFile(fpath,"utf8",(err,datastr)=>{      
        res.end(datastr)
    });
  
})
serve.listen(80,()=>{
    console.log("8080端口已启动,http://127.0.0.1:80");
   
})