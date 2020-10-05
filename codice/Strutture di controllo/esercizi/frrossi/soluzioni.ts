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



let i: number;


//Soluzione Esercizio 1
for (i = 1; i <= 100; i++) {
    console.log(i);
};

//Soluzione Esercizio 2
let somma: number = 0;
for (i = 1; i <= 100; i++) {
    somma = somma + i;
    console.log(somma);
};

//Soluzione Esercizio 3
for (i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

//Soluzione Esercizio 4
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Soluzione Esercizio 5
for (i = 100; i > 0; i--) {
    console.log(i);
}
