const AsyncFunc = (name, callback) => {
    setTimeout(() => {
        console.log(`Hello, ${name}`);
        callback()
    }, 1000);
}

console.log('Process starting...');
AsyncFunc('Juan', () => console.log('Precess ending...') );
