const prompt = require("prompt-sync")();

const number1 = prompt("Digite um número: ");

const operador = prompt("Digite um operador: ");

const number2 = prompt("Digite outro número: ");

switch (operador) {
  case "+":
    let soma = parseFloat(number1) + parseFloat(number2);
    console.log(`${number1} + ${number2} = ${soma}`);
    break;

  case "-":
    let subtracao = parseFloat(number1) - parseFloat(number2);
    console.log(`${number1} - ${number2} = ${subtracao}`);
    break;

  case "/":
    let divisao = parseFloat(number1) / parseFloat(number2);
    console.log(`${number1} / ${number2} = ${divisao}`);
    break;

  case "*":
    let multiplicacao = parseFloat(number1) * parseFloat(number2);
    console.log(`${number1} * ${number2} = ${multiplicacao}`);
    break;
  default:
    console.log("Digite um operador e número válido");
    break;
}
