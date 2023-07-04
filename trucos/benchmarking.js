let totalSuma = 0;

console.time("Temporizador");
for (var i = 0; i < 10000; i++) {
  totalSuma += 1;
}
console.timeEnd("Temporizador");