const fs = require('fs');

const FILE_PATH = `${__dirname}/file.txt`;

function readFile(pathFile, callback) {
    fs.readFile(pathFile, (err, data) => {
        console.log(data); // Returns a buffer
        console.log(data.toString()); // Returns file content
    }); 
}

function writeFile(path, content, callback) {
    fs.writeFile(path, content, callback);
}

readFile(FILE_PATH)

const writeFileCallback = (err) => {
    if(err) console.log('Something was wrong...', err);
    else console.log('Content saved! :)');
}
writeFile(`${__dirname}/file1.txt`, `I'm a new file :)`, writeFileCallback)


function deleteFile(pathFile, callback) {
    fs.unlink(pathFile, callback)
}

deleteFile(FILE_PATH, console.log)