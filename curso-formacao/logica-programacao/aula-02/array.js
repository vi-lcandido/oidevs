let students = ["André", "Vitória", "Ivina"];
console.log(typeof students);
// console.log(students);
// console.log();

students.unshift("Ivina")
students.push("Jose")

const index = students.indexOf("Vitória")
console.log(students);

students.splice(index, 1);
console.log(students);

