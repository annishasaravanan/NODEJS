const express = require("express");
const app =express();

app.use((req,res,next)=>{
    console.log("request url",req.url);
    next();
})

app.get("/",(req,res) =>{
    res.status(200).send("hello express app");

});

app.post("/", (req, res) => {
    res.status(200).send("post requires");
})
app.use((req,res,next) =>{
    res.status(404).send("page not found");
    next();
})
app.listen(5000, ()=>{
    console.log("server listening on pot 5000");
})