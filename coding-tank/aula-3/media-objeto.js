let alunos = [
    {nome: "Liz", notas:[10,7,8,10]},
    {nome: "Felipe", notas:[0,10,10,6]},
    {nome: "Alice", notas:[5,5,5,3]},
    {nome: "Eduardo", notas:[10,9,8,10]}
]


for (let index = 0; index < alunos.length; index++) {
    let media = 0 
    let aluno = alunos[index]

    for (let index2 = 0; index2 < alunos[index].notas.length; index2++) {
        // media += alunos[index].notas[index2]/alunos[index].notas.length;
        media += aluno.notas[index2]/aluno.notas.length;        
        
    }

    console.log(`Aluno: ${aluno.nome}, média: ${media}`)
}

console.log("\n\n")

//PEDRO =================================================================

alunos.forEach(aluno => {
    let media = 0
    aluno.notas.forEach(nota => {
        media += nota/aluno.notas.length
    })
    console.log(`Aluno: ${aluno.nome}, media: ${media}`)
});