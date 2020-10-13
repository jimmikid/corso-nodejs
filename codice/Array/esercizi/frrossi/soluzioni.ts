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


//Esercizio 1 - Creare un array contenente i primi 100 numeri naturali

const arrayMaxElementFirtsExercise: number = 100;
const arrayFirtsExercise: number[] = [];
let i: number;
for (i = 0; i < arrayMaxElementFirtsExercise; i++) {
    arrayFirtsExercise.push(i);
}
console.log("\n");
console.log("--- 01 --- First Exercise solution: \n" + arrayFirtsExercise);

//---------------------------------------------------------------------------------------------------------------------------


//Esercizio 2 - Creare un array contenente i primi 50 numeri pari

let arrayEvenNumbers: number[] = [];
arrayEvenNumbers = arrayFirtsExercise.filter(element => element % 2 === 0);
console.log("\n");
console.log("--- 02 --- Second Exercise solution: \n" + arrayEvenNumbers);
console.log(`There are: ${arrayEvenNumbers.length} elements in the array of even numbers`)

//--------------------------------------------------------------------------------------------------------------------------

//Esercizio 3 - Creare un array contenente i primi 50 numeri dispari
let arrayOddNumbers: number[] = [];
arrayOddNumbers = arrayFirtsExercise.filter(element => element % 2 !== 0);
console.log("\n");
console.log("--- 03 --- Third Exercise solution: \n" + arrayOddNumbers);
console.log(`There are: ${arrayOddNumbers.length} elements in the array of even numbers`)

//---------------------------------------------------------------------------------------------------------------------------

// Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
// *******Esercizio non completo********

let arrayNegativeEvenNumbers: number[] = [];
let arrayNegativeOddNumbers: number[] = [];

arrayNegativeEvenNumbers = arrayEvenNumbers.map(evenNum => evenNum * (-1));
arrayNegativeOddNumbers = arrayOddNumbers.map(oddNum => oddNum * (-1));

console.log("\n");
console.log(`--- 04 --- Fourth exercise solution: \n NON RISOLTO \n\n arrayNegativeEvenNumbers:\n ${arrayNegativeEvenNumbers} \n arrayNegativeOddNumbers:\n ${arrayNegativeOddNumbers} \n`);


let arrayNegativeNumbers: number[] = [];
let index: number;
let evenIndex: number;
let oddIndex: number;

const numElementsArrays = arrayNegativeEvenNumbers.length + arrayNegativeOddNumbers.length;

//********NON SO ANDARE AVANTI********

//----------------------------------------------------------------------------------------------------------------------------------


//Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1

let k: number;
let invertedArrayFirstExercise: number[] = [];
for (k = arrayFirtsExercise.length; k >= 0; k--) {
    invertedArrayFirstExercise.push(k);
}
console.log("\n");
console.log(`--- 05 --- Fifth exercise solution: \n InvertedArrayFirstExercise: \n ${invertedArrayFirstExercise}`);

//-----------------------------------------------------------------------------------------------------------------------------------

//Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4
//Vedi sopra
// :)

