const http=require("http");

const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
        res.end("Home Page");
    }

    else if(req.url==="/about")
    {
        res.end("About page");
    }

    else if(req.url==="/contact")
        {
            res.end("Contact page");
        }
    else
    {
        res.end("Page Not Found");
    }
    
});

server.listen(8000, ()=>
{
    console.log(" I am Working, don't worry.")
})
