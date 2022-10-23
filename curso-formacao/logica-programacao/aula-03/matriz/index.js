const matriz = [
    [15, 12,58, 95],
    [42, 57,36, 1],
    [21, 87, 6, 99]
];

const turma = "906 - OiDevs";
const aluno = prompt("Digite o nome do aluno: ")

document.write(`
<h1>Olá ${aluno}</h1>
<h2>${turma}</h2>
<p>Exibindo uma matriz</p>
`)

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        console.log(matriz[linha][coluna]);
        document.write(matriz[linha][coluna] + " | "); //a cada número põe o pype
    }
    document.write("<br />"); // quebra a linha em cada interação com o for
}