const fs=require("fs");
const { dirname } = require("path");
fs.readFile(__dirname+"/draft.js","utf-8",(err,datastr)=>{
    console.log(datastr)
})