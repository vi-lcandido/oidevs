let numerosPares = [];
//index pode começar em 2 para não percorrer o 1, já que ele é ímpar
for (let index = 1; index <= 1000; index++) {
  if (index % 2 === 0) {
    numerosPares.push(index);
  }
}

console.log(`Entre 1 a 1000 são ${numerosPares.length} número pares:`);
console.log(...numerosPares);
