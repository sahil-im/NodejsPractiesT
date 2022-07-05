const fs = require('fs');
//for creatiing and writing text into file 
//fs.writeFileSync('Sahil.txt',"Sahil is a topper");
///console.log("File is created");

//For rewriting into file we use append file
//fs.appendFileSync('Sahil.txt',"  Sahil is no 1");

//for reading File contain 
var read=fs.readFileSync('readWrite.txt',"utf-8");
//var read1 = read.toString();
console.log(read);

//for renaming the file name 
// fs.renameSync('FileSystem.js','FileSystemSync.js');
// console.log('file name changed ');