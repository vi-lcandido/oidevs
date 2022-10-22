const alunos = [
    {nome:"Carlo", idade: 18, email: "email@email.com", nota1:5 , nota2:4},
    {nome:"Julia", idade: 28, email: "email@email.com", nota1:8 , nota2:6},
    {nome:"Pedro", idade: 19, email: "email@email.com", nota1:2 , nota2:10},
    {nome:"Aline", idade: 25, email: "email@email.com", nota1:5 , nota2:5},
    {nome:"Carlo", idade: 32, email: "email@email.com", nota1:4 , nota2:10},
    {nome:"Maisa", idade: 30, email: "email@email.com", nota1:6 , nota2:7},
];

//  //for in traz o índice caso coloque a constante aluno no log

for (const aluno in alunos) {
console.log(`O aluno ${alunos[aluno].nome} tem ${alunos[aluno].idade}`);
}

//  //for of traz o objeto caso coloque a constante aluno no log


for (const aluno of alunos) {
    console.log(`O aluno ${alunos.nome} tem ${alunos.idade}`);
 }

// //é possível colocar a propriedade utilizada no atributo como variavel de entrada

 for (const {nome, idade} of alunos) {
    console.log(`O aluno ${nome} tem ${idade}`);
 }


//EXERCICIO
//Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
//onde as tem-se, nome, nota 1 e nota2. Use o for para percorer esse array
//e calcular a média das duas notas de cada aluno


for (const {nome, nota1, nota2} of alunos) {

    console.log(`O aluno ${nome} está com média ${((nota1 + nota2)/2)}`);
    
}

for (const aluno in alunos) {

    console.log(`O aluno ${alunos[aluno].nome} está com média ${((alunos[aluno].nota1 + alunos[aluno].nota2)/2)}`);
    
}