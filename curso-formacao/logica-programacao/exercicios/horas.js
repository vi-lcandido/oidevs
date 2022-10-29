// /*
//   Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
//   Por exemplo, o programa deve converter 14:25 em 2:25 P.M.
//   A entrada é dada em dois inteiros.
//   Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
// */

const prompt = require("prompt-sync")();

let hora = parseInt(prompt("Digite a hora (0 a 24): "));

while (!intervaloHora(hora)) {
  hora = parseInt(prompt("Digite uma hora válida (0 a 24): "));
}

let minuto = parseInt(prompt("Digite os minutos (00 a 59): "));

while (!intervaloMin(minuto)) {
  minuto = parseInt(prompt("Digite os minutos válidos (00 a 59): "));
}

if (hora >= 12 && intervaloHora(hora)) {
  if (hora === 24) {
    console.log(print(transformaHora(hora), minuto, "AM"));
  } else if (hora === 12) {
    console.log(print(hora, minuto, "PM"));
  } else {
    console.log(print(transformaHora(hora), minuto, "PM"));
  }
}

if (hora < 12 && intervaloHora(hora)) {
  console.log(print(hora, minuto, "AM"));
}

function intervaloHora(rangeHora) {
  return rangeHora >= 0 && rangeHora <= 24;
}

function intervaloMin(rangeMin) {
  return rangeMin >= 0 && rangeMin <= 59;
}

function transformaHora(horaPm) {
  return (horaPm -= 12);
}

function print(horaParams, minutoParams, marcadorDeTempo) {
  return `${horaParams}:${minutoParams} ${marcadorDeTempo}`;
}