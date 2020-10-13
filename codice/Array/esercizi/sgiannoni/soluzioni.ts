/**
 * 
 * Esercizio 1 - Creare un array contenente i primi 100 numeri naturali
 * Esercizio 2 - Creare un array contenente i primi 50 numeri pari
 * Esercizio 3 - Creare un array contenente i primi 50 numeri dispari
 * Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
 *               esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]
 * Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
 * Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4
 *  
 */

 console.log("Esercizio 1 - Creare un array contenente i primi 100 numeri naturali")
 let arrayDiNumeriNaturali: number[] = []
 for(let i: number=0; i<100; i++){
     arrayDiNumeriNaturali.push(i);
 }
console.log(arrayDiNumeriNaturali);
console.log("\n\n\n");

console.log("Esercizio 2 - Creare un array contenente i primi 50 numeri pari")
let arrayDiNumeriPari: number[] = []
for(let i: number=0; i<100; i++){
    if (i % 2 === 0) {
        arrayDiNumeriPari.push(i);
    }
}
console.log(arrayDiNumeriPari);
console.log("\n\n\n");

console.log("--versione senza push--")
let arrayDiNumeriPari2: number[] = []
for(let i: number=0,j: number=0; i<100; i++){
    if (i % 2 === 0) {
        arrayDiNumeriPari2[j]=i;
        j++
    }
}
console.log(arrayDiNumeriPari2);
console.log("\n\n\n");

console.log("Esercizio 3 - Creare un array contenente i primi 50 numeri dispari")
let arrayDiNumeriDispari: number[] = []
for(let i: number=0; i<100; i++){
    if (i % 2 != 0) {
        arrayDiNumeriDispari.push(i);
    }
}
console.log(arrayDiNumeriDispari);
console.log("\n\n\n");

console.log("--versione senza push--")
let arrayDiNumeriDispari2: number[] = []
for(let i: number=0,j: number=0; i<100; i++){
    if (i % 2 != 0) {
        arrayDiNumeriDispari2[j]=i;
        j++
    }
}
console.log(arrayDiNumeriDispari2);
console.log("\n\n\n");

console.log("Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno")
let arrayDiNumeriPariDispari: number[] = []
for (let i: number=0,j: number=0; i<arrayDiNumeriPari.length, j<arrayDiNumeriPari.length; i++, j++){
    arrayDiNumeriPariDispari[i+j]=-arrayDiNumeriPari[i]
    arrayDiNumeriPariDispari[i+j+1]=-arrayDiNumeriDispari[j]
}
console.log(arrayDiNumeriPariDispari);
console.log("\n\n\n");

console.log("Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1")
let arrayDiNumeriInvertito: number[] = []
for(let i: number=0, j=99; i<100; i++, j--){
    arrayDiNumeriInvertito[i]=arrayDiNumeriNaturali[j];
}
console.log(arrayDiNumeriInvertito);
console.log("\n\n\n");

console.log("Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4")
let arraySomma: number [] = []
for(let i: number=0; i<arrayDiNumeriNaturali.length; i++){
    arraySomma[i]=arrayDiNumeriNaturali[i]+arrayDiNumeriPariDispari[i]
}
console.log(arraySomma);
