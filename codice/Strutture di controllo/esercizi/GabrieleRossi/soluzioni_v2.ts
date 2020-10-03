/**
 * ESERCIZIO 1
 * Stampare i primi 100 numeri naturali
 */

const maxNumber: number = 100;
const stringEx1: string = "Numeri naturali prima di 100: ";
const stringEx2: string = "\nSomma primi 100 numeri naturali: ";
const stringEx3: string = "Numeri naturali dispari prima di 100: ";
const stringEx4: string = "Numeri naturali pari prima di 100: ";
const stringEx5: string = "Numero naturali con ordine invertito prima di 100: ";

let arrayEx1: Array<number> = [];

console.log("\n-- ESERCIZIO 1--\n* Stampare i primi 100 numeri naturali *\n");
for (let i: number = 0; i < maxNumber; i++) {
    arrayEx1[i] = i;
}
console.log(stringEx1 + arrayEx1.join(', ').toString());

/**
 * ESERCIZIO 2
 * Stampare la somma dei primi 100 numeri naturali
 */
let sum: number = 0;

for (let i: number = 0; i < maxNumber; i++) {
    sum += i;
}
console.log("\n-- ESERCIZIO 2--\n" + stringEx2 + sum);

/**
 * ESERCIZIO 3
 * Stampare solo i numeri dispari dei primi 100 numeri naturali
 */

let stringToPrintEx3: string = stringEx3;
console.log("\n-- ESERCIZIO 3--\n* Stampare solo i numeri dispari dei primi 100 numeri naturali *\n");
for (let i: number = 0; i < maxNumber; i++) {
    if (i % 2 !== 0) {
        stringToPrintEx3 += i + ", ";
    }
}
console.log(stringToPrintEx3.replace(/, $/,""));

/**
 * ESERCIZIO 4
 * Stampare solo i numeri pari dei primi 100 numeri naturali
 */

let stringToPrintEx4: string = stringEx4;
console.log("\n-- ESERCIZIO 4--\n* Stampare solo i numeri pari dei primi 100 numeri naturali *\n");
for (let i: number = 0; i < maxNumber; i++) {
    if (i % 2 === 0) {
        stringToPrintEx4 += i + ", ";
    }
}
console.log(stringToPrintEx4.replace(/, $/,""));

/**
 * ESERCIZIO 5
 * Stampare i primi 100 numeri naturali in ordine inverso
 */
console.log("\n-- ESERCIZIO 5--\n* Stampare i primi 100 numeri naturali in ordine inverso *\n");
console.log(stringEx5 + arrayEx1.reverse().join(', ').toString());