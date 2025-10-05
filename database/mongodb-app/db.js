const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://demo:annisha23@cluster0.sjbw9vx.mongodb.net/userdb")
.then(() =>{
    console.log("connection successful");
})

.catch((err) =>{
    console.log("database not connected",err);
})