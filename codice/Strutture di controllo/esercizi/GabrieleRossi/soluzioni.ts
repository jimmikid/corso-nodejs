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

/**
 * ESERCIZIO 3
 * Stampare solo i numeri dispari dei primi 100 numeri naturali
 */

console.log("\n-- ESERCIZIO 3--\n");
for (let i: number = 0; i < maxNumber; i++) {
    if (i % 2 !== 0) {
        console.log("Numero disparo prima di 100: " + i);
    }
}

/**
 * ESERCIZIO 4
 * Stampare solo i numeri pari dei primi 100 numeri naturali
 */

console.log("\n-- ESERCIZIO 4--\n");
for (let i: number = 0; i < maxNumber; i++) {
    if (i % 2 === 0) {
        console.log("Numero pari prima di 100: " + i);
    }
}