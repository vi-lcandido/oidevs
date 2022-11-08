// const pessoa = {
//     nome : 'Guilherme',
//     idade:29,
//     apresentacao: function (nome, idade) {
//         console.log(`[meu objeto] Oi, meu nome é ${this.nome} tenho ${this.idade} anos`);
//         console.log(`[parametros] Oi, meu nome é ${nome} tenho ${idade} anos`);
//     }
// }

// pessoa.apresentacao("Paula", 21 )

// const pessoa = {
//     nome : 'Guilherme',
//     idade:29,
//     apresentacao: (nome, idade) => {
//         console.log(`[meu objeto] Oi, meu nome é ${this.nome} tenho ${this.idade} anos`); //retorna indefino por causa da arrow function
//         console.log(`[parametros] Oi, meu nome é ${nome} tenho ${idade} anos`);
//     }
// }

// pessoa.apresentacao("Paula", 21 )

// class Pessoa {

// }
// const pessoa = new Pessoa()

// pessoa.nome = 'Guilherme'
// pessoa.idade = 29
// pessoa.apresentacao = function () {
//     console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade}`);
// }

// pessoa.apresentacao()

class Pessoa {
    nome;
    sobrenome;
    idade;
    peso;
    altura;

    constructor(nome,
        sobrenome,
        idade,
        peso,
        altura) {
            this.nome=nome
            this.sobrenome=sobrenome
            this.idade=idade
            this.peso=peso
            this.altura=altura
    }

    apresentacao () {
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade}, peso ${this.peso} kg e tenho ${this.altura} m`);
    }
    calcularImc (){
        return this.peso/(this.altura ** 2)
    }
}
const pessoa = new Pessoa('Guilherme','Silva',29,61,1.74)

// pessoa.nome = 'Guilherme'
// pessoa.idade = 29
// pessoa.apresentacao = 
// function () {
//     console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade}`);
// }

pessoa.apresentacao()
console.log(`O IMC de ${pessoa.nome} é ${pessoa.calcularImc()}`);
