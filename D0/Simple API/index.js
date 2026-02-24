const http=require("http");

const users=[
{
  id:1,
  name:"Anya Jha"
},
{
    id:2,
    name:"Gowtham G"
}];



const server=http.createServer((req, res)=>
{
    if(req.url==="/api")
    {    
       res.end("API is working");
    }

    else if(req.url==="/api/users")
    {
        res.writeHead(200, {"content-type":"application/json"});
         res.end(JSON.stringify(users));
    }

    else
    {
        res.end("Page not found");
    }
});

server.listen(8000, ()=>
{
    console.log("I am working, don't worry on http://localhost:8000");
});
