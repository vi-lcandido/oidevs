const alunos = [
  { nome: "Carlo", idade: 18, email: "email@email.com", nota1: 5, nota2: 4 },
  { nome: "Julia", idade: 28, email: "email@email.com", nota1: 8, nota2: 6 },
  { nome: "Pedro", idade: 19, email: "email@email.com", nota1: 2, nota2: 10 },
  { nome: "Aline", idade: 25, email: "email@email.com", nota1: 5, nota2: 5 },
  { nome: "Carlo", idade: 32, email: "email@email.com", nota1: 4, nota2: 10 },
  { nome: "Maisa", idade: 30, email: "email@email.com", nota1: 6, nota2: 7 },
];

// for (const { nome, nota1, nota2 } of alunos) {
//   const media = (nota1 + nota2)/2;
//   if (media >= 7) {
//     console.log(` ${nome} obteve média ${media} e está aprovado`);
//   } else {
//     console.log(` ${nome} obteve média ${media} e está reprovado`);
//   }
// }

// for (const { nome, nota1, nota2 } of alunos) {
//     const media = calculaMedia(nota1,nota2); // como a funcção retorna um número podemos atribuir a uma variável
//     const resultado = exibirResultado(nome,media);
//     if (media >= 7) {
//       console.log(` ${nome} obteve média ${media} e está aprovado`);
//     } else {
//       console.log(` ${nome} obteve média ${media} e está reprovado`);
//     }
//   }

// function calculaMedia(pNota1, pNota2) {
//   return (pNota1 + pNota2) / 2;
// }

// function exibirResultado(nome, media) {
//     if (media >= 7) {
//         return ` ${nome} obteve média ${media} e está aprovado`);
//       } else {
//         return ` ${nome} obteve média ${media} e está reprovado`);
//       }
// }

for (const { nome, nota1, nota2 } of alunos) {
  const media = calculaMedia([nota1, nota2]);
  exibirResultado(nome, media);
}

function calculaMedia(notas) {
  let somaNotas = 0;
  notas.forEach((nota) => {
    somaNotas += nota;
  });
  return (somaNotas) / notas.length;
}

function exibirResultado(nome, media) {
  if (media >= 7) {
    console.log(` ${nome} obteve média ${media} e está aprovado`);
  } else {
    console.log(` ${nome} obteve média ${media} e está reprovado`);
  }
}
