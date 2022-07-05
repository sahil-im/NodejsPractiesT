const http = require('http');

const  server = http.createServer((req,res) =>
{
     res.end("server respones on other side Sahil  ");
});
server.listen(8000,'127.0.0.1',() =>
{
 console.log("listening port 8000");
});