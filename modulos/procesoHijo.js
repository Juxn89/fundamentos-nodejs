const { exec, spawn } = require('child_process');

// exec('dir', (err, stdout, sterr) => {
// exec('node console.js', (err, stdout, sterr) => {
//     if(err) {
//         console.error(err)
//         return false;
//     }

//     console.log(stdout);
// })

let proceso = spawn('dir');
console.log(proceso.pid);
console.log(proceso.connected);