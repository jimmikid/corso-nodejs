/**
 * Utilizzare i cicli iterativi e le istruzioni condizionali per risolvere i seguenti esercizi
 */

/* ESERCIZIO 1 - Stampare i primi 100 numeri naturali */
console.log("||========== ESERCIZIO 1 ==========||\n");
for (let first100 = 0; first100 <= 100; first100++) {
  console.log(first100);
}
console.log("||======== FINE ESERCIZIO =========||\n\n");

/* ESERCIZIO 2 - Stampare la somma dei primi 100 numeri naturali */
console.log("||========== ESERCIZIO 2 ==========||\n");
let sum100: number = 0;
for (let first100 = 1; first100 <= 100; first100++) {
  sum100 += first100;
}
console.log(sum100);
console.log("||======== FINE ESERCIZIO =========||\n\n");

/* ESERCIZIO 3 - Stampare solo i numeri dispari dei primi 100 numeri naturali */
console.log("||========== ESERCIZIO 3 ==========||\n");
for (let disp100 = 0; disp100 <= 100; disp100++) {
  if (disp100 % 2 !== 0) {
    console.log(disp100);
	}
}
console.log("||======== FINE ESERCIZIO =========||\n\n");

/* ESERCIZIO 4 - Stampare solo i numeri pari dei primi 100 numeri naturali */
console.log("||========== ESERCIZIO 4 ==========||\n");
for (let par100 = 0; par100 <= 100; par100++) {
  if (par100 % 2 == 0) {
    console.log(par100);
	}
}
console.log("||======== FINE ESERCIZIO =========||\n\n");

/* ESERCIZIO 5 - Stampare i primi 100 numeri naturali in ordine inverso */
console.log("||========== ESERCIZIO 5 ==========||\n");
for (let first100inv = 100; first100inv >= 0; first100inv--) {
	console.log(first100inv);
}
console.log("||======== FINE ESERCIZIO =========||\n\n");