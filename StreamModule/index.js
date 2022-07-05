const http = require('http');
const fs = require('fs');
const { Console } = require('console');

const server = http.createServer();

// server.on("request" ,(req,res) =>{
//  fs.readFile('demo.txt',"utf-8",(err,data) =>
//  {
//     if(err) return console.error(err);
//     res.end(data);
//  });
  
// });
// server.listen(8000,'127.0.0.1',() =>{
//     console.log("listen AT PORT 8000")
// });



// Another ay read  data from file using stream
// server.on("request", (req,res) =>
// {
//     const read = fs.ReadStream('demo.txt');
//      read.on('data' ,(chunkdata) =>
//      {
//          res.write(chunkdata);
//      });
//      read.on('end',()=>{
//        console.log ("No data is remaing");
//        res.end('no data')
//      })
// });
// server.listen(8000,'127.0.0.1',() =>{
//     console.log("Server listen at port 8000");
// });

//write data in file  Using stream

// server.on('request',(req,res) =>{
//     const write= fs.WriteStream('new.txt')
// write.write('hElL0 is good boy and  He is breav' ,'utf-8')
// write.on('finish',() =>{
//     console.log("data will be add");
// });
//  write.end()
// });
// ;
//  server.listen(8000,'127.0.0.1',() =>{
//      console.log("Server listen at port 8000");
// });

//read data using pipeStream

server.on('request',(req,res) =>{
 const read = fs.createReadStream('new.txt');
 read.pipe(res);
});
server.listen(8000,'127.0.0.1',() =>{
        console.log("Server listen at port 8000");
    });