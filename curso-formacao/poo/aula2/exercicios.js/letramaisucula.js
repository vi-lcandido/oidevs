class StringMelhor extends String {
  palavra;
  constructor(palavra) {
    super(palavra);
  }

  primeiraLetraMaiuscula() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  }
}

const str = new StringMelhor("exemplo");
console.log(str.primeiraLetraMaiuscula());

const outraStr = new StringMelhor("exemPLO");
console.log(outraStr.primeiraLetraMaiuscula());
