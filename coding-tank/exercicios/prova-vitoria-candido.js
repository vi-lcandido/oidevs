const dadosPessoas = [
    ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'], 
    [1.70, 1.72, 1.62, 1.90, 1.53], 
    [80, 90, 61, 84, 49]
]
/* Criando variáveis correspondente para identificação de cada array de dadosPessoas*/
let nome = dadosPessoas[0]
let altura = dadosPessoas[1]
let peso = dadosPessoas [2]

let pessoaMaisAlta = dadosPessoas[1][0]
let pessoaMaisBaixa = dadosPessoas[1][0]

let pessoaMaisPesada = dadosPessoas[2][0]
let pessoaMaisLeve = dadosPessoas[2][0]


/*Criado a variável para salvar os index correspondentes para apresentação futura
já que tendo o index eu consigo ter todas as informações correspondentes como nome, altura e peso 
de cada um*/
let indexPessoaMaisAlta = 0
let indexPessoaMaisBaixa = 0

let indexPessoaMaisPesada = 0
let indexPessoaMaisLeve = 0

let indexPessoaMaiorIMC = 0
let indexPessoaMenorIMC = 0

let mediaAltura = 0
let mediaPeso = 0
let maiorImc = 0
let menorImc = 0

/*Criei uma lista de imcs, já q tendo o index da pessoa que quero apresentar a informação
eu vou conseguir mostrar todos seus dados correspondentes, sendo o imc um dele*/
let imcs = []

for (let index = 0; index < nome.length; index++) {
    mediaAltura += altura[index] / altura.length
    mediaPeso += peso[index] / peso.length

    let imc = peso[index] / Math.pow(altura[index], 2)
    
    /*Esse dois ifs são responsáveis por comparar e verificar qual a pessoa mais alta e mais baixa respectivamente
    Além disso a lógica que pensei é que ao ter o index da pessoa mais alta consigo 
    imprimir todos os dados correspondentes a ela*/
    if (pessoaMaisAlta <= altura[index]) {
        pessoaMaisAlta = altura[index]
        indexPessoaMaisAlta = index
    }
    if (pessoaMaisBaixa >= altura[index]) {
        pessoaMaisBaixa = altura[index]
        indexPessoaMaisBaixa = index
    }

     /*Esse dois ifs são responsáveis por comparar e verificar qual a pessoa mais pesada e mais leve respectivamente
     Além disso salvo seu index também para apresentação dos dados da pessoa*/
    if (pessoaMaisPesada <= peso[index]) {
        pessoaMaisPesada = peso[index]
        indexPessoaMaisPesada = index
    }
    if (pessoaMaisLeve >= peso[index]) {
        pessoaMaisLeve = peso[index]
        indexPessoaMaisLeve = index
    }

    /*Esse dois ifs são responsáveis por comparar e verificar qual a pessoa mais pesada e mais leve respectivamente
     Além disso salvo seu index também para apresentação dos dados da pessoa*/
    if (maiorImc <= imc) {
        maiorImc = imc
        indexPessoaMaiorIMC = index
    }
    if (menorImc >= imc) {
        menorImc = imc
        indexPessoaMenorIMC = index
    }

    //Como em cada index do loop eu tenho o imc calculado, posso imprimir tanto seu nome quanto seu imc
    console.log(`${nome[index]} tem IMC de ${imc.toFixed(2)}`);

    //Salvo o imc calculado na lista de imcs para apresentação futura do imc correspondente 
    imcs.push(imc)
}

console.log("\n");

console.log(`Altura média: ${mediaAltura.toFixed(2)} m`);
console.log(`Peso médio: ${mediaPeso} kg`);

console.log(`${nome[indexPessoaMaisAlta]}, pessoa mais alta com: ${altura[indexPessoaMaisAlta].toFixed(2)}`);
console.log(`${nome[indexPessoaMaisBaixa]}, pessoa mais baixa com: ${altura[indexPessoaMaisBaixa]}\n`);

console.log(`${nome[indexPessoaMaisPesada]}, pessoa mais pesada com: ${peso[indexPessoaMaisPesada]}`);
console.log(`${nome[indexPessoaMaisLeve]}, pessoa mais leve com: ${peso[indexPessoaMaisLeve]}\n`);

console.log(`${nome[indexPessoaMaiorIMC]}, com maior IMC: ${imcs[indexPessoaMaiorIMC].toFixed(2)}`);
console.log(`${nome[indexPessoaMenorIMC]}, com menor IMC: ${imcs[indexPessoaMenorIMC].toFixed(2)}\n`);

