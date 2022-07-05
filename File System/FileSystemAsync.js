const fs = require('fs');

//Writing into file with Async Way
// fs.writeFile('newfile',"These  is new file ", (err) => { 
//        console.log("FIle is created");
// });

//Readig file Async Way 
// fs.readFile('newfile',"utf-8", (err,data) =>
// {
// console.log(data);
// } );



//Creating new  folder 
// fs.mkdir('Sahiltask',(err) => {
//     console.log("File is created ");
// });

//Add file into new folder 
// fs.writeFile('Sahiltask/bio.txt',"These My Bio", (err) =>
// {
//     console.log("file id also is create ");
// })


//append the file contain
//fs.appendFile('Sahiltask/bio.txt',"  These is new data of bio data " , (err) =>{
//  console.log("Data is add");
// });

//reading file contains 
// fs.readFile('Sahiltask/bio.txt',"utf-8",(err,data ) =>{
//  console.log(data);
// });

//Rename the file 
// fs.rename('Sahiltask/bio.txt','Sahiltask/Mybio.txt',(err) => {
//     console.log("file is  renamed ");
// });

//Deleting  file
// fs.unlink('./Sahiltask/Mybio.txt',(err) =>
// {
//     console.log("file is deleted ");
// });

//Deleting the folder
fs.rmdir('./Sahiltask' ,(err) =>
{
    console.log("Folder also deleted ");
}); 