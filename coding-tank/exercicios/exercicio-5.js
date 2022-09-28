let x = -10
let y = 2


if (x == 0 && y == 0) {
    console.log('Origem');
} else if (x == 0) {
    console.log('Eixo Y');
} else if (y == 0) {
    console.log('Eixo X');
//Q1
} else if (y > 0 && x > 0) {
    console.log('Q1');
//Q2
} else if (y > 0 && x < 0) {
    console.log('Q2');
//Q3
} else if (y < 0 && x < 0) {
    console.log('Q3');
//Q4
} else if (y < 0 && x > 0) {
    console.log('Q4');
}
/*pra Q2 - x < 0 e y > 0
pra Q1 - x > 0 e y > 0
pra Q3 - x < 0 e y < 0
pra Q4 - x> o e y < 0*/