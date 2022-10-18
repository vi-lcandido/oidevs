//Tipos primitivos

//boolean

let isActivo = false;

//Null
let lastName = null;
console.log("tipo do lastName: " + typeof lastName); // retorna object - identifica sempre como objeto

//Undefined
let pet;
console.log("valor do pet: " + pet); //como não tem nenhum valor ele define o tipo e o valor como undefined
console.log("tipo do pet: " + typeof pet);
pet = "Spike";
console.log("valor do pet depois spike: " + pet);
console.log("tipo do pet depois spike: " + typeof pet);

//Number
let age = 25;
console.log("tipo do age: " + typeof age);

//BigInt
const lightSpeed = 300000n;

console.log("tipo do lightSpeed: " + typeof lightSpeed);

//String - é possível salvar várias coisas como string
let myName = "Ivirson Daltro";
let robotName = "142";

console.log("tipo do myName: " + typeof myName);
console.log("tipo do robotName: " + typeof robotName);

//Symbol
