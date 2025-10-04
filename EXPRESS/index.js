const express = require("express");
const app =express();

app.get("/",(req,res) =>{
    res.status(200).send("hello express app");

});

app.post("/", (req, res) => {
    res.status(200).send("post requires");
})
app.listen(5000, ()=>{
    console.log("server listening on pot 5000");
})