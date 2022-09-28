let A = 10
let B = 20
let C = 5
let D = 9

let soma1 = C + D

let soma2 = A + B

let par = A % 2

if (B > C && D > A && soma1 > soma2 && C > 0 && D > 0 && par == 0) {
    console.log("Valores aceitos");
}
else {
    console.log("Valores não aceitos");
}

// se B > C e se C > A e C + D > A + B, e se C e D > 0, e se A % 2
