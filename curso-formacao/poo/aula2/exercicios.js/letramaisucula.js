class StringMelhor extends String {
    palavra;
    constructor(palavra) {
      super()
      this.palavra = palavra;
    }
  
    primeiraLetraMaiuscula() {
      return this.palavra.charAt(0).toUpperCase() + this.palavra.slice(1).toLowerCase();
    }
  }
  
  const str = new StringMelhor("exemplo");
  console.log(str.primeiraLetraMaiuscula());
  
  const outraStr = new StringMelhor("exemPLO");
  console.log(outraStr.primeiraLetraMaiuscula());
  