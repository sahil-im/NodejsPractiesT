//conver object to Json
const fs = require('fs');
const biodata ={
    name : "Sahil",
    age : 24,
    surname:"Mujawar",
};
// const JsonFile =JSON.stringify(biodata);
// console.log(JsonFile)

//conver Json to object
// const bio = {
    
//     "name" : "Sahil",
//     "age" : 24,
//     "surname" : "Mujawar",
// };
// const ObjectFile = JSON.parse(bio);
// console.log(ObjectFile);


//Task 
//1.convert to Json file
//2.add on another file
//3.read file content
//4.again convert into Objects
//5.console.log

//1.
const JsonFile =JSON.stringify(biodata);
 console.log(JsonFile);

//2.
fs.writeFile('new.json',JsonFile, (err) =>
{

    console.log("File is created ");
});

//3. 
fs.readFile('new.json',"utf-8",(err,data) =>
{
    console.log(data);
});

//4.
const ObjectFile =JSON.parse(JsonFile);
console.log(ObjectFile);
