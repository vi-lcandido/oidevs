function calculoFatorial(fatorial) {
  let resposta = fatorial;
  let numeroMultiplica = fatorial - 1;
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
  for (let index = numeroMultiplica; index > 1; index--) {
    resposta *= index;
  }
  return resposta;
}
console.log(`Fatorial é ${calculoFatorial(5)}`);

/* definir o numero fatorial
fatorial de é 5*4*3*2*1
pra cada valor multiplica cada valor até o 5, sem incluí-lo*/


