// const prompt = require("prompt-sync")();

let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

let notNumber = isNaN(nota1) || isNaN(nota1) || isNaN(nota1);
let validRange =  between(nota1) && between(nota2) && between(nota3);

function between(nota) {
  return nota >= 0 && nota <= 10;
}

document.write(`
<h1>Olá</h1>
<h3>Exibindo média de aluno:</h3>
`);

let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (notNumber || !validRange) {
  console.log("Comece novamente");
  document.write("Comece novamente");
}

else if (media < 5) {
  console.log(`Está reprovado sua média foi: ${media}`);
  document.write("Está reprovado sua média foi: " + media);
}

else if (media >= 5) {
  console.log(`Está aprovado sua média foi: ${media}`);
  document.write("Está aprovado sua média foi: " + media);
}
