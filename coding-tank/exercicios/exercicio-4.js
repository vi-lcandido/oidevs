/*passar por cada caracter do numero 
para por cada numeroLed.valor
identificar se o caracter do numero corresponde ao numeroLed.valor
se iguais somar a qtd do numero de led
retornar de leds finalis*/
var prompt = require('prompt-sync')();

var n = prompt('Quantos testes? ');

let teste = parseInt(n)
// let teste = 3
// let numero = "23456"
// let somaLed = 0

let numeroLed = [
    {
        valor : "0",
        led : 6
    },
    {
        valor : "1",
        led : 2
    },
    {
        valor : "2",
        led : 5
    },
    {
        valor : "3",
        led : 5
    },
    {
        valor : "4",
        led : 4
    },
    {
        valor : "5",
        led : 5
    },
    {
        valor : "6",
        led : 6
    },
    {
        valor : "7",
        led : 3
    },
    {
        valor : "8",
        led : 7
    },
    {
        valor : "9",
        led : 6
    }

]


for (let index1 = 0; index1 < teste; index1++) {
    var numero = prompt('Qual numero? ');
    let somaLed = 0
    for (let index2 = 0; index2 < numero.length; index2++) {
    
        for (let index3 = 0; index3 < numeroLed.length; index3++) {

            if (numero[index2] == numeroLed[index3].valor) {
                somaLed += numeroLed[index3].led
            }
            
        }
    }
    
    console.log(somaLed)
}


´[]