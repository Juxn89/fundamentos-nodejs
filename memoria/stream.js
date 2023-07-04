const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf-8')

readableStream.on('data', (chunk) => {
    console.log(chunk);
    data += chunk;
});

readableStream.on('end', () => {
    console.log(data);
})

process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal\n')

const Transform = stream.Transform;

function UpperCase () {
    Transform.call(this)
}

util.inherits(UpperCase, Transform);

UpperCase.prototype._transform = function(chunk, codification, callback) {
    chunckUpperCase = chunk.toString().toUpperCase();
    this.push(chunckUpperCase)
    callback()
}

let UpperCaseLetter = new UpperCase();
readableStream
    .pipe(UpperCaseLetter)
    .pipe(process.stdout)