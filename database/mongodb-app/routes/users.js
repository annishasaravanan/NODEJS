const express=require("express");
const router=express.Router();
const User=require("../models/User");

//user routes

//POST
router.post("/",async(req,res)=>{
    const data = req.body;
   const users=new User(data);
    const saved =await users.save()
    res.status(201).json(saved);

})

// get all the users

router.get("/:id", async (req, res) => {
   const users = await User.findById(req.params.id);
   res.status(201).json(users);
});
// update -PUT REQUEST

router.put("/:id",async(req,res)=>{
   const users=await User.findByIdAndUpdate(req.params.id,req.body,{new :true}); 
   res.status(201).json(users);
})

//DELETE REQUEST

router.delete("/:id",async(req,res)=>{
   const users=await User.findByIdAndDelete(req.params.id); 
   res.sendStatus(204);
})




module.exports=router;