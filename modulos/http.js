const http = require('http')

http.createServer((req, res) => {
    console.log('Nueva petición');
    console.log(req.url);

    res.writeHead(200, { 'x-key-site': '123-dfs-2124-a' })
    res.write('Hello!...using HTTP with NodeJS')    

    res.end();
}).listen(3000)

console.log('Escuchando en el puerto 3000');