const { log } = require("console")
const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/contact"){
        res.write("contact page")
        res.end()
    }
})
server.listen(3000,()=>console.log("server running"))