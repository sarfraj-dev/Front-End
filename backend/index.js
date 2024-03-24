const http=require("http");

const server=http.createServer((req,res)=>{
console.log("server start");
res.setHeader('Dummy','value')
res.end('<h1>hello</h1>')
})
server.listen(8080)