console.log('Hello world!');

//Event Loop
let i = 0;
setInterval(() => {
    console.log(`Sigo activo en el Event Loop (${i})`);
    i++;
    if(i === 5) var a = 3 + z;
}, 1000)