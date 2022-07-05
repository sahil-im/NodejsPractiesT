const EventEmitter = require('events');

const event =new EventEmitter();
// event.on('SayName', () =>{
//     console.log('my name is Sahil');
// });

// event.on('SayName', () =>{
//     console.log('my Father name is Shafik');
// });

// event.on('SayName', () =>{
//     console.log('my surname is Mujawar');
// });
// event.emit("SayName");
event.on('checkpage',(sc,meg) =>{
console.log(`Status code is ${sc} mESSAGE IS ${meg}`)
});
event.emit('checkpage',200,'ok');

