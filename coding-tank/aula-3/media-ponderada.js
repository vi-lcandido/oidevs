let notas = [
    {valor: 10, peso: 2},
    {valor: 7, peso: 6},
    {valor: 8, peso: 1},
    {valor: 10, peso: 1}

]


let soma = 0

let somaPeso = 0

for (let index = 0; index < notas.length; index++){
    somaPeso += notas[index].peso
    let nota = (notas[index].peso * notas[index].valor)
    soma += nota
    mediaPonderada = soma/somaPeso
}
console.log(mediaPonderada)



