/*Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas 
expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
pode cirar um array de produtos se quiser */

let impostoVenda = 10;
let valorAntesImposto = [55, 112, 20.98, 40.79, 217.5];

console.log(`O imposto sobre a venda é ${impostoVenda}% \n`);

for (let index = 0; index < valorAntesImposto.length; index++) {
  console.log(`O custo antes do imposto é R$ ${valorAntesImposto[index]}`);
  function somaImposto(taxaImposto, custo) {
    return (custo[index] + custo[index] * (taxaImposto / 100)).toFixed(2);
  }
  console.log(
    `O preço final é R$ ${somaImposto(impostoVenda, valorAntesImposto)} \n`
  );
}
