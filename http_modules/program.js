import http from "http";
 const s=http.createServer((req,res)=>
{
    res.end("hello from node.js server");
});

s.listen(3000,()=>
{
    console.log("server is running on port 3000")
})
