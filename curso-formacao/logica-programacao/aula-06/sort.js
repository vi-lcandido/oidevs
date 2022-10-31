// Miqueias
function ordenar(lista = []) {
    for(let i = 0; i < lista.length; i++){
        let indiceMenor = i;
        for(let j = i; j < lista.length; j++){
            if(lista[j] < lista[indiceMenor]){
                indiceMenor = j;
            }
        }
        let auxiliar;
        auxiliar = lista[i];
        lista[i] = lista[indiceMenor];
        lista[indiceMenor] = auxiliar;
    }
    return lista;
}

let array = [20, 66, 8, 1, 2, 22, 8, 9, 56];

console.log(ordenar(array));

// Jady
const listaDesordenada = [12,45,78,96,52,4,6,21,5,8,0,1,78,52,36,100,159,254,7852,33]

//1.
const toOrdenate = (array) => {
  let auxiliar
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i] < array[j]) {
        auxiliar = array[j]
        array[j] = array[i]
        array[i] = auxiliar
      }
    }
  }
}

toOrdenate(listaDesordenada)
console.log(listaDesordenada);

//2.
const outralistaDesordenada = [24,90,78,9,101,8,12,22,545,8,0,1,74,25,
outralistaDesordenada.sort((a,b) => b - a)
// /*o método array.prototype.sort() se não receber uma função como parametro, 
// ordena a lista transformando cada elemento em string e colocando em ordem alfabética.
// Para colocar números em ordem crescente, usamos a função (a,b) => a - b
// Para colocar números em ordem decrescente, usamos a função (a,b) => b - a*/
console.log(outralistaDesordenada);

// //fonte(https://www.youtube.com/watch?v=l-AEeyGmejk)