const fs = require('fs');
const http =require('http');
const url =require('url');
const server = http.createServer((req,res) =>
{
    //console.log(req.url);
    if(req.url == ("/"))
      {
        res.end("responce to the endside"); 
     }
     else if(req.url == "/about")
     {
        res.end("responce from about us");
     }
     else if(req.url == "/content")
     {
        res.end("The response from content end");
     }
     else if(req.url == "/MyApi")
     {
        fs.readFile("/RoutingServer/MyApi.json","utf-8",(err,data) =>
        {
            console.log(data);
            //res.end(data);
        });
     }
     else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>404 Not found <h1 >");
     }
    
});
server.listen(8000,'127.0.0.1',() =>
{
console.log("LISTENING PORT 8000");
});