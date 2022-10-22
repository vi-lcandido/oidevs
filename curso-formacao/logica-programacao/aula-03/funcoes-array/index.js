const turma = "906 - OiDevs";
const arrayFromString = Array.from(turma.replaceAll(" ",""));
// console.log(arrayFromString);

function getAnArrayFromArgument() {
    console.log(arguments);
    return Array.from(arguments)
}

//recebeu os dados abaixo e salvou em arguments. o metodo from pega algo que não é um array mas é iterável e transforma em um array

const arrayFromArgument = getAnArrayFromArgument(1,"Maria",true)

// console.log(arrayFromArgument);

const arrayFromNumberSequence = Array.from({
    length: 7 //digo que quero um array com 7 posições
}, (item, index) => index);

// console.log(arrayFromNumberSequence);



