//server routing

const http= require("http");

const server= http.createServer((req,res)=>{
    if(req.url=="/")
    {
         res.writeHead(200,{"content-type" : "application/json"});
         res.end("Home page");
    }
    else if(req.url=='/about')
    {
        res.writeHead(200,{"content-type" : "application/json"});
         res.end("about page");
    }
    else{
        res.writeHead(404,{"content-type" : "application/json"});
         res.end("page not found");
    }
});


server.listen(5000, ()=>{

    console.log("server listenting http://localhost:5000")
});