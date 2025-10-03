
const http= require("http");
const fs=require("fs");

const server= http.createServer((req,res)=>{
    if(req.url=="/")
    {
         res.writeHead(200,{"content-type" : "text/plain"});
         res.end("Home page");
    }
    else if(req.url=='/about')
    {
        res.writeHead(200,{"content-type" : "text/plain"});
         res.end("about page");
    }
     else if(req.url=='/file')
    {
       const readstream= fs.createReadStream("sample.mp4");
        res.writeHead(200,{"content-type" : "video/mp4"});
        //  res.end("about page");
        readstream.pipe(res);
    }
    else{
        res.writeHead(404,{"content-type" : "text/plain"});
         res.end("page not found");
    }
});


server.listen(5000, ()=>{

    console.log("server listenting http://localhost:5000")
});