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



 /* ESECIZIO 1 */

 console.log("ESECIZIO 1")

 const max:number = 100;

for (let i:number = 0; i < max; i++) {
    console.log(i);
}

/* ESERCIZIO 2 */

console.log("ESECIZIO 2")

let s: number = 0;

for (let i: number = 0; i < max; i++) {
    s = s + i;
}
console.log(s);

/* ESECIZIO 3 */

console.log("ESECIZIO 3")

for (let i: number = 0; i < max; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/* ESECIZIO 4 */

console.log("ESECIZIO 4")

for (let i: number = 0; i < max; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/* ESECIZIO 5 */

console.log("ESECIZIO 5")


const min:number = 0;

for (let i:number = 99; i >= min; i--) {
    console.log(i);
}

