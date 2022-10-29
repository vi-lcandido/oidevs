let fatorialRecursivo = (num) => {
  return num === 1 ? 1 : num * fatorialRecursivo(num - 1);
};

function calculoFatorial(fatorial) {
  let numInteiro = Number.isInteger(fatorial);

  if (isNaN(fatorial)) {
    return "Digite um número";
  }
  if (!numInteiro || fatorial < 0) {
    return "Digite um número inteiro e positivo";
  }
  if (fatorial === 0 || fatorial === 1) {
    return 1;
  }
  return fatorialRecursivo(fatorial);
}
console.log(calculoFatorial(-1));

