const http= require("http")

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
 res.write("hello world")
    res.write('\nshamakutty')
    res.end()
    }
   

})
server.listen(3000,()=>console.log("server running"))