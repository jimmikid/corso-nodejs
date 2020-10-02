/**
 * ESERCIZIO 1
 */

const maxNumber: number = 100;

console.log("\n-- ESERCIZIO 1--\n");
for (let i: number = 0; i < maxNumber; i++) {
    console.log("Numbero: " + i);
}

/**
 * ESERCIZIO 2
 */
let sum: number = 0;

for (let i: number = 0; i < maxNumber; i++) {
    sum += i;
}
console.log("\n-- ESERCIZIO 2--\n\nSomma primi 100 numeri naturali: " + sum);