console.log(global); // global: es el objeto en dónde están todos los módulos glables de node

// Agregar una variable a global
global.MiVariable = 'Hello world! :)';

console.log(global);
console.log(global.MiVariable);