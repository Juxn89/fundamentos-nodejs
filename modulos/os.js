const OS = require('os');

console.log('----------------- OS Info -----------------');
console.log(OS);
console.log('----------------- OS Architecture -----------------');
console.log(OS.arch);
console.log('----------------- OS Platform -----------------');
console.log(OS.platform)
console.log('----------------- OS CPUS -----------------');
console.log(OS.cpus);
console.log('----------------- OS CPUS Length -----------------');
console.log(OS.cpus.length);
console.log('----------------- OS Errors and Signals -----------------');
console.log(OS.constants);
console.log('----------------- OS Sizes -----------------');
const SIZE = 1024;
function convertToKB(bytes) { return bytes / SIZE; }
function convertToMB(bytes) { return convertToKB(bytes) / SIZE; }
function convertToGB(bytes) { return convertToMB(bytes) / SIZE; }
console.log('---> Free space')
console.log(`${convertToKB(OS.freemem())} KB`);
console.log(`${convertToMB(OS.freemem())} MB`);
console.log(`${convertToGB(OS.freemem())} GB`);

console.log('---> Total space')
console.log(`${convertToGB(OS.totalmem())} GB`);

console.log('---> Directories')
console.log(OS.homedir());
console.log(OS.tmpdir());
console.log(OS.hostname());

console.log('----------------- OS Network -----------------')
console.log(OS.networkInterfaces());