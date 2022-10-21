let contador =101;

while (contador <= 100) {
    console.log(contador);
    contador++
}

do {
    console.log(contador);
    contador++
} while (contador <= 100);


//Você tem um array que está vazio e precisa preencher o mesmo com 5 numeros aleatorios de 0 a 10

//resolução 1

const aleatorios = [];

while(aleatorios.length < 5) {
    let aleatorio = Math.round(Math.random() * 10);

    if(aleatorios.indexOf(aleatorio) === -1) {
        aleatorios.push(aleatorio)
    }
}

console.log(aleatorios)

//resolução 2

const lista = [];
let controle = 0

while (controle < 5) {
  lista.push(Math.round(Math.random() * 10))
  controle++
}
console.log(lista)