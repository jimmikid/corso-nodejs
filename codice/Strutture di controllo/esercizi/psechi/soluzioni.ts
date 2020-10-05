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

 // soluzione esercizio uno
console.log("I numeri i naturali da 0 fino a 100 sono:")

for (let i = 0; i <= 100; i++) {
    console.log("\n", i);
}
// soluzione esercizio due
let somma:number = 0;
for (let i = 0; i < 100; i++) {
    somma += i;
}
console.log("La somma  dei primi 100 numeri naturali è : " + somma);

//soluzione esercizio tre
console.log("I  numeri dispari dei primi 100 numeri naturali sono :");
for (let i= 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log("Il numero dispari è : " + i);
    }
}
// soluzione esercizio quattro
console.log("I  numeri pari dei primi 100 numeri naturali sono :");
for (let i= 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("Il numero pari è : " + i);
    }
}
// soluzione esercizio cinque
console.log(" I primi 100 numeri naturali in ordine inverso sono :");
for (let i= 100 - 1; i >= 0; i--) {
    console.log(" \n " + i);
}
