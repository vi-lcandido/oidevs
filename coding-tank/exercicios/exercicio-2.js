let A = 10.0;
let B = 3;
let C = 5.0;

let delta = Math.pow(B, 2) - (4 * A * C);
let R1 = (-B + Math.sqrt(delta)) / (2 * A)
let R2 = (-B - Math.sqrt(delta)) / (2 * A)


if (delta > 0 && A != 0) {
    console.log(`R1 = ${R1.toFixed(5)}`)
    console.log(`R2 = ${R2.toFixed(5)}`)    
}
else {
    console.log("Impossível calcular");
}

// console.log(delta)
