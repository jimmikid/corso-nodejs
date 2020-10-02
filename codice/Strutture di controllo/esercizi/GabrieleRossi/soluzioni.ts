/**
 * ESERCIZIO 1
 * Stampare i primi 100 numeri naturali
 */

const maxNumber: number = 100;

console.log("\n-- ESERCIZIO 1--\n");
for (let i: number = 0; i < maxNumber; i++) {
    console.log("Numero: " + i);
}

/**
 * ESERCIZIO 2
 * Stampare la somma dei primi 100 numeri naturali
 */
let sum: number = 0;

for (let i: number = 0; i < maxNumber; i++) {
    sum += i;
}
console.log("\n-- ESERCIZIO 2--\n\nSomma primi 100 numeri naturali: " + sum);