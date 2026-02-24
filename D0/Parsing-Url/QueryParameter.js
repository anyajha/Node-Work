const http=require("http");
const url=require("url")

const server=http.createServer((req,res)=>
{
   const parsed=url.parse(req.url,true);
   const name=parsed.query.name;
   res.end("Good Morning Mom, Dadduuuuu and " + name);
});

server.listen(3000,()=>
{
    console.log("http://localhost:3000");
});

//This gave output: ?name=Anya in the terminal



// const url=require("url");
// const raw="/?name=Anya&age=22";
// const parsed= url.parse(raw,true);
// console.log(parsed.query.name);
