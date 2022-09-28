/* declarar um número
decalrar um varíavel com os seguintes intervalos ([0,25], (25,50], (50,75], (75,100])
ler cada intervalo para identificar se o número declarado se encontra em algum intervalo
printar no console onde o número declarado se encontra
se tiver fora do intervalo printar "Fora de intervalo"*/

var numero = 10.2


if ( numero < 100 && numero > 0){
    if (numero >= 0 && numero <= 25) {
        console.log('Intervalo [0,25]');
    } 
    if (numero > 25 && numero <= 50) {
        console.log('Intervalo (25,50]');
    }
    
    if (numero > 50 && numero <= 75) {
        console.log('Intervalo (50,75]');
    }
    
    if (numero > 75 && numero <= 100) {
        console.log('Intervalo (75,100]');
    }
    
}
else{
    console.log("Fora do Intervalo");
}