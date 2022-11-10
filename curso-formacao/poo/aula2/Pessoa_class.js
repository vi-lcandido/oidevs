class Pessoa {
  nome;
  sobrenome;
  #idade;
  #peso;
  #altura;

  static numeroPessoa = 0;
  
  constructor(nome, sobrenome, idade, peso, altura) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.#idade = idade;
    this.#peso = peso;
    this.#altura = altura;
    Pessoa.numeroPessoa += 1;
  }

//   calcularImc() {
//     return this.#peso / Math.pow(this.#altura, 2);
//   }

get imc(){
    return this.#peso / Math.pow(this.#altura, 2);
}

/*abaixo não é um método, mas ao usar get acessa como se fosse um atributo
nesse caso o get serve pra retornar o o valor privato e a pessoa consegue ter o acesso, não modificar, só acessar e retorná-la. No caso abaixo ele vai te retornar uma string que pode inclusive ser formatada*/
  
  get idade() {
    return `${this.#idade} anos`;
  }

  set peso (novoPeso){

    this.#peso = novoPeso;
  }
}
console.log(Pessoa.numeroPessoa);

const pessoa = new Pessoa("Guilherme", "Risnik", 29, 61, 1.74);

console.log(Pessoa.numeroPessoa);

// console.log(pessoa.imc);
// pessoa.peso = 50

// console.log(pessoa.imc);


