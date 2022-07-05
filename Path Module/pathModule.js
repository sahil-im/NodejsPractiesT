const Path = require('node:path');

// console.log(Path.dirname('E:/NodejsT/pathModule.js'));

// console.log(Path.extname('E:/NodejsT/pathModule.js'));


//console.log(Path.basename('E:/NodejsT/pathModule.js'));


const Demo = (Path.parse('E:/NodejsT/pathModule.js'));
console.log(Demo.name,Demo.dir);

//console.log(Path.toNamespacedPath('E:/NodejsT/pathModule.js'));