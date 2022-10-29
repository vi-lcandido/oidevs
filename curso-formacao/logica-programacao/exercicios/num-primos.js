let numPrimos = [];
let valorPrimo = true;

for (let numTeste = 2; numTeste <= 100; numTeste++) {
  for (let divisor = 2; divisor < numTeste && valorPrimo; divisor++) {
    if (numTeste % divisor === 0) {
      valorPrimo = false;
    }
  }
  if (valorPrimo) {
    numPrimos.push(numTeste);
  }
  valorPrimo = true;
}
console.log(`De 1 a 100 são ${numPrimos.length} primos:`);
console.log(numPrimos);

