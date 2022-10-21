/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
   salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

// let salario = 2500;
// let aumento = 0;

// console.log(`Seu salário antes do reajuste: ${salario}`);

// if (salario <= 1500) {
//   console.log(`Aumento de 20%`);
//   aumento = salario * 1.2;
//   console.log(`Aumento foi de:` ${salario - aumento});
//   console.log(`Novo salário é:  ${aumento}`);
// }
// else if (salario > 1500 && salario <= 1700) {
//   console.log(`Aumento de 15%`);
//   aumento = salario * 1.15;
//   console.log(`Novo salário é:  ${aumento}`);
// }

// else if (salario > 1700 && salario <= 2000) {
//   console.log(`Aumento de 10%`);
//   aumento = salario * 1.1;
//   console.log(`Novo salário é:  ${aumento}`);
// }

// else if(salario > 2000) {
//   console.log(`Aumento de 5%`);
//   aumento = salario * 1.05;
//   console.log(`Novo salário é: ${aumento}`);
// }

let salarioAtual = 1600;
let percentualAumento;
let aumento;
let novoSalario;

// if (salarioAtual <= 1500) {
//     percentualAumento = 20;
// }
// else if (salarioAtual > 1500 && salarioAtual <= 1700) {
//     percentualAumento=15;
//   }

//   else if (salarioAtual > 1700 && salarioAtual <= 2000) {
//     percentualAumento=10;
//   }

//   else if(salarioAtual > 2000) {
//     percentualAumento=5;
//   }

//   aumento = (salarioAtual * (percentualAumento/100))
//   novoSalario = (salarioAtual + aumento)

//   console.log(`o salário antes do reajuste: ${salarioAtual}`);
//   console.log(`o percentual de aumento aplicado: ${percentualAumento}%`);
//   console.log(`o valor do aumento: ${aumento}`);
//   console.log(`o novo salário, após o aumento: ${novoSalario}`);

switch (true) {
  case salarioAtual <= 1500:
    percentualAumento = 20;
    break;
  case salarioAtual > 1500 && salarioAtual <= 1700:
    percentualAumento = 15;
    break;
  case salarioAtual > 1700 && salarioAtual <= 2000:
    percentualAumento = 10;
    break;
  case salarioAtual > 2000:
    percentualAumento = 5;
    break;
}

aumento = (salarioAtual * (percentualAumento/100))
  novoSalario = (salarioAtual + aumento)

  console.log(`o salário antes do reajuste: ${salarioAtual}`);
  console.log(`o percentual de aumento aplicado: ${percentualAumento}%`);
  console.log(`o valor do aumento: ${aumento}`);
  console.log(`o novo salário, após o aumento: ${novoSalario}`);