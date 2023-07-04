let greeting = process.env.NAME || 'No Name';
let WEB_NAME = process.env.WEB_NAME || 'I have not web'

// PowerShell --> $env:NAME="Juan"; node conceptos/entorno.js
// Eemove variables in PowerShell --npm> / remove variables in PowerShell -> 
console.log(`Hi ${greeting}`);
console.log(`Hi ${WEB_NAME}`);

// pm2 --> alternative to nodemon for prodduction