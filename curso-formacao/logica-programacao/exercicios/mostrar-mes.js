const prompt = require("prompt-sync")();

const number = prompt("Digite o número de um mês:");

switch (+ number) {
  case 1:
    console.log(`${number} é o mês de Janeiro`);
    break;
  case 2:
    console.log(`${number} é o mês de Fevereiro`);
    break;
  case 3:
    console.log(`${number} é o mês de Março`);
    break;
  case 4:
    console.log(`${number} é o mês de Abril`);
    break;
  case 5:
    console.log(`${number} é o mês de Maio`);
    break;
  case 6:
    console.log(`${number} é o mês de Junho`);
    break;
  case 7:
    console.log(`${number} é o mês de Julho`);
    break;
  case 8:
    console.log(`${number} é o mês de Agosto`);
    break;
  case 9:
    console.log(`${number} é o mês de Setembro`);
    break;
  case 10:
    console.log(`${number} é o mês de Outubro`);
    break;
  case 11:
    console.log(`${number} é o mês de Novembro`);
    break;
  case 12:
    console.log(`${number} é o mês de Dezembro`);
    break;

  default:
    console.log("Mês não existente");
    break;
}
