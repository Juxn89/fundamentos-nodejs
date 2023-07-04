const MOMENT = require('moment')

let today = MOMENT();

console.log(today.toString());
console.log(today.format('YYYY/MM/DD - HH:MM'));