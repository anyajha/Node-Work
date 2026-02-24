const http=require("http");
const url=require("url");


const server=http.createServer((req,res)=>
{

    const id=req.url.split("/")[2];
    res.end("User Id is" + " " + id);
});

server.listen(3000, ()=>
{
    console.log("http://localhost:3000");
});
