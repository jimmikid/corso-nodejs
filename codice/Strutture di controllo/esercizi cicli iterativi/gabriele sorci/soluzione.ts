/**
 * 
 * Utilizzare i cicli iterativi e le istruzioni condizionali per risolvere i seguenti esercizi
 * 
 * 1 - Stampare i primi 100 numeri naturali
 * 2 - Stampare la somma dei primi 100 numeri naturali
 * 3 - Stampare solo i numeri dispari dei primi 100 numeri naturali
 * 4 - Stampare solo i numeri pari dei primi 100 numeri naturali
 * 5 - Stampare i primi 100 numeri naturali in ordine inverso
 * 
 */

/**
 * soluzione esercizio 1
 */
console.log('soluzione esercizio 1');

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/**
 * soluzione esercizio 2
 */
console.log('soluzione esercizio 2');

let somma: number = 0;

for (let i = 1; i <= 100; i++) {
    somma += i;     
}

console.log(somma);

/**
 * soluzione esercizio 3
 */
console.log('soluzione esercizio 3');

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/**
 * soluzione esercizio 4
 */
console.log('soluzione esercizio 4');

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/**
 * soluzione esercizio 5
 */
console.log('soluzione esercizio 5');

for (let i = 100; i >= 1; i--) {
    console.log(i);
}