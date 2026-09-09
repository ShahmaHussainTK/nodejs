const fs=require("fs")
const http=require("http")

http.createServer((req,res)=>{
fs.readFile("data.text","utf-8",(err,data)=>{
if(err){
    res.writeHead(500,{"content-type":"text/html"})
    res.end("error  handling file")
    return
}
    res.writeHead(200,{"content-type":"text/html"})
    res.end(data)
})

})
.listen(3000,()=>{
    console.log("server running")
})