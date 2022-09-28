let cedulas = [100, 50, 20, 10, 5, 2, 1]

let valor = 503


for (let index = 0; index < cedulas.length; index++) {
    let qtdCedulas = 0
    let resto = 0 
    if (valor >= cedulas[index]) {
        qtdCedulas = parseInt(valor / cedulas[index])
        resto = valor % cedulas[index]
        if (resto != 0) {
            valor = resto
        } else{
            valor = 0
        }
    }
    console.log(`${qtdCedulas} nota(s) de R$ ${cedulas[index]}`)
   
}




// for (let index = 0; index < cedulas.length; index++) {

//     let qtdCedulas = parseInt(valor / cedulas[index]);

//     console.log(`${qtdCedulas} nota(s) de R$ ${cedulas[index]}`)
    
//     valor = valor % cedulas[index]
// }