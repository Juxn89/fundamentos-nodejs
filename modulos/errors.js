function error() {
    return 3 + z;
}

function otherError() {
    error();
}

try {
    otherError();    
} catch (err) {
    console.log(`Something was wrong...`, err);
}