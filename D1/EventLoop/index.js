const fs=require("fs");

console.log("Start");
fs.readFile("a.txt", ()=>
{
    console.log("File");
});

console.log("End");
