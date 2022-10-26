/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  A entrada é dada em dois inteiros. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

const prompt = require("prompt-sync")();

let hora = prompt("Digite a hora (0 a 24): ");

function intervaloHora(rangeHora) {
  return rangeHora >= 0 && rangeHora <= 24;
}

while (!intervaloHora(hora)) {
  hora = prompt("Digite uma hora válida (0 a 24): ");
}

let minuto = prompt("Digite os minutos (00 a 59): ");

function intervaloMin(rangeMin) {
  return rangeMin >= 0 && rangeMin <= 59;
}

while (!intervaloMin(minuto)) {
    minuto = prompt("Digite os minutos válidos (00 a 59): ");
}

if (hora > 12 && intervaloHora(hora)) {
  function transformaHora(horaPm) {
    return (horaPm -= 12);
  }
  function print() {
    return `${transformaHora(parseInt(hora))}:${parseInt(minuto)} PM`;
  }
  console.log(print());
} else if (hora <= 12 && intervaloHora(hora)) {
  function horaFixa(horaAm) {
    return (horaAm = hora);
  }
  function print() {
    return `${horaFixa(parseInt(hora))}:${parseInt(minuto)} AM`;
  }
  console.log(print());
}
