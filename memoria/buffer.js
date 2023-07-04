// let buffer = Buffer.alloc(1);
// let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from('Hola');

console.log(buffer);
console.log(buffer.toString());

let alphabet = Buffer.alloc(26)
console.log(alphabet)

for(let i = 0; i < 26; i++) {
    alphabet[i] = i + 97;
}
console.log(alphabet.toString())