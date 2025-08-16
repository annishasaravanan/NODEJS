const path=require("path");

const filepath="/users/testuser/documents/file.js";

console.log("base name",path.basename(filepath));//last portion of the path 

console.log("directoryname :",path.dirname(filepath));


console.log("extension name:",path.extname(filepath));

//test.txt
console.log("joinpath:",__dirname+'\\test.txt');