const fs= require("fs");
fs.writeFile("a.txt", "Hello Async" , () =>
{
    console.log("file has been created and data has been written");
});

console.log("End");
