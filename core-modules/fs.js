const fs=require("fs")

//write file

// fs.writeFileSync("example.txt","hello  world");
// console.log("file written");


//read file

const data=fs.readFileSync("example.txt",{encoding:"utf-8"});
console.log("read   file",data);