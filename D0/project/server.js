const fs=require("fs");
const http=require("http");



const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
        const html=fs.readFileSync("home.html");
        res.writeHead(200,{"content-type":"text/html"});
        res.end(html);
    }

    else if(req.url==="/about")
    {
        const html=fs.readFileSync("about.html");
        res.writeHead(200,{"content-type":"text/html"});
        res.end(html);
    }

    else if(req.url==="/contact")
    {
        const html=fs.readFileSync("contact.html");
        res.writeHead(200,{"content-type":"text/html"});
        res.end(html);
    }
});

server.listen(8000, ()=>
{
    console.log("http://localhost:8000/");
});
