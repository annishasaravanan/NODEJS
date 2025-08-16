const fs=require("fs")

//write file

fs.writeFile("asyncs.txt","hello  world  nodejs+read file",(err)=>{
       if(err) throw err;
       console.log("file written  completed");

       //readfile
       fs.readFile("asyncs.txt","utf-8",(err,data)=>{
        console.log("Read file.Async",data);
       });
});
console.log("file writing process");

