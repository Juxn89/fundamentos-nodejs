// const PROCESS = require('process');

process.on('exit', () => {
    console.log('Proceso de NODE terminado...');
});

process.on('beforeExit', () => {
    console.log('El proceso de NODE va a terminar..');
});

process.on('uncaughtException', (err, origen) => {
    console.error('Excepción no controlada');
    console.error(err);
})

functionQueNoExiste();

process.on('uncaughtRejection', () => {})