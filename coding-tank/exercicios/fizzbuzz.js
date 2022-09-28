// const limite = 100;

for (let contador = 0; contador < 30; contador++) {
    /*if (contador % 3 === 0 && contador % 5 === 0) {
        console.log("fizzbuzz")
    }
    else if (contador % 3 === 0) {
        console.log("fizz")
    }
    else if (contador % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(contador);
    }*/

    let resultado = "";
    if (contador % 3 === 0) resultado += "fizz";
    if (contador % 5 === 0) resultado += "buzz";
    if (resultado === "") resultado = contador;
    console.log(resultado)
    
}