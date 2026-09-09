const http=require("http")
const { url } = require("inspector")

const server=http.createServer((req,res)=>{

    if(req.url==="/about"){
       
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>about page</h1>")
        res.end()
    }
    if(req.url==="/profile"){
        res.write("profile page")
        res.end()
    
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("page not found")
    }


})
server.listen(3000,()=>console.log("server running"))