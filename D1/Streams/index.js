const fs=require("fs");
const http=require("http");

const read= fs.createReadStream("a.txt");
const write=fs.createWriteStream("b.txt");
read.pipe(write);


http.createServer((req,res)=>
{
    const stream=fs.createReadStream("Video.mp4");
    stream.pipe(res);
});


