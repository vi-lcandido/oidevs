let notas = [
    { valor: 8.5, peso: 0.25},
    { valor: 9.9, peso: 0.95},
    { valor: 5, peso: 0.5},
    { valor: 2, peso: 0.25},
    { valor: 10, peso: 1},
    { valor: 5.5, peso: 0.25},
    { valor: 6, peso: 0.2},
    { valor: 9, peso: 0.75}
  ]

  let mediaAritmetica = 0
  let valorPeso = 0
  let somaPeso = 0
  let maiorValor = notas[0].valor
  let menorValor = notas[0].valor


  for (let index = 0; index < notas.length; index++) {
    const nota = notas[index]
    mediaAritmetica += nota.valor/notas.length;
    valorPeso += (nota.valor * nota.peso) 
    somaPeso += nota.peso;
    if (maiorValor < nota.valor) {
        maiorValor = nota.valor
    }
    if (menorValor > nota.valor){
        menorValor = nota.valor
    }
}

// 1) Média artimética simples;
  console.log(`A média aritmética é: ${mediaAritmetica}`)
// 2) Média ponderada;
  console.log(`A média ponderada é: ${valorPeso / somaPeso}`)
// 3) DESAFIO 
  console.log(`O maior valor é: ${maiorValor}`)
  console.log(`O menor valor é: ${menorValor}`)


// DUVIDA =============================================================================

//   let notas2 = [
//     { valor: 1, peso: 0.25},
//     { valor: 2, peso: 0.95},
//     { valor: 3, peso: 0.5},
//     { valor: 4, peso: 0.25},
//     { valor: 5, peso: 1},
//     { valor: 6, peso: 0.25},
//     { valor: 7, peso: 0.2},
//     { valor: 8, peso: 0.75}
//   ]

//   let maiorValor2 = 0
//   let menorValor2 = 300000000

//  for (let index = 0; index < notas2.length; index++) {
//     const nota = notas2[index]
//     // mediaAritmetica += nota.valor/notas.length;
//     // valorPeso += (nota.valor * nota.peso) 
//     // somaPeso += nota.peso;
//     if (maiorValor2 < nota.valor) {
//         maiorValor2 = nota.valor
//     }
//     else {
//         menorValor2 = nota.valor
//     }
// }

// console.log(`O maior valor é: ${maiorValor2}`)
// console.log(`O menor valor2 é: ${menorValor2}`)
