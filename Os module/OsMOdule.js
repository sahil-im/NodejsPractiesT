const os = require('os');
var cpu = os.arch();
// console.log(cpu);

// const freeMem = os.freemem();

// console.log(`${freeMem /1024/1024/1024}`);



const TotalMem = os.totalmem();

//console.log(`${TotalMem /1024/1024/1024}`);
//console.log(os.hostname());
//console.log(os.platform());
//console.log(os.cpus('speed'));
// console.log(os.tmpdir());
// console.log(os.type());
console.log( os.constants.signals);