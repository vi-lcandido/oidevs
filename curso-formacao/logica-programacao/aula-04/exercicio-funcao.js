/*
  Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
*/

const array = [12, 78, 10, 82, 150]

function menorValor(numeros) {
    return Math.min (...numeros)
}

console.log(menorValor(array));

function maiorValor(numeros) {
    return Math.max (...numeros)
}

console.log(maiorValor(array));
