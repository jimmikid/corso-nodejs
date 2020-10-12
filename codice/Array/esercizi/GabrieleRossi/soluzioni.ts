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

const numberOfMaxElements: number = 100;
const arrayEx1: number[] = [];

function prettyConsoleLog(numberOfExcercise: number, textExercise: string, valueToPrint: any): void {
    console.log(`/***\n*\nEsercizio ${numberOfExcercise} - ${textExercise}\n*\n***/\n${valueToPrint}\n`);
}

/**
 * Generate an array with the size indicated in the parameter.
 * 
 * @param numberOfElements the number of the element of the array
 * @returns an array with specific size
 */
function createArray(numberOfElements: number): void {
    for (let i = 0; i < numberOfElements; i++) {
        arrayEx1.push(i);
    }
}

/**
 * Generate an array with only even value of the array passed like a parameter.
 * 
 * @param arrayToCheck the array where do the check and where get the value
 * @returns an array with only even value
 */
function generateEvenArray(arrayToCheck: number[]): number[] {
    let arrayEven: number[] = [];
    for (let i: number = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] % 2 === 0) {
            arrayEven.push(arrayToCheck[i]);
        }
    }
    return arrayEven;
}

/**
 * Generate an array with only odd value of the array passed like a parameter.
 * 
 * @param arrayToCheck the array where do the check and where get the value
 * @returns an array with only odd value
 */
function generateOddArray(arrayToCheck: number[]): number[] {
    let arrayOdd: number[] = [];

    for (let i: number = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] % 2 !== 0) {
            arrayOdd.push(arrayToCheck[i]);
        }
    }
    return arrayOdd;
}

/**
 * Generate an array with even or odd value from the array passed in the parameter.
 * 
 * @param arrayToCheck the array where do the check
 * @param isEven the param for decide the type of the return array
 * @returns an even or odd array
 */
function generateEvenOddArray(arrayToCheck: number[], isEven: boolean): number[] {
    if (isEven) {
        return generateEvenArray(arrayToCheck);
    } else {
        return generateOddArray(arrayToCheck);
    }
}

/**
 * Generate an array with alternates negatives value from the arrays passed in the parameters.
 * 
 * @param arrayEvenEx4 an even array where do calculation
 * @param arrayOddEx4 an odd array where do calculation
 * @returns an array with alternates negatives value
 */
function generateOppositeArray(arrayEvenEx4: number[], arrayOddEx4: number[]): number[] {
    let arrayOpposite: number[] = [];
    for (let i: number = 0; i < arrayEvenEx4.length && i < arrayOddEx4.length; i++) {
        arrayOpposite.push(arrayEvenEx4[i] * -1, arrayOddEx4[i] * -1);
    }
    return arrayOpposite;
}

createArray(numberOfMaxElements);

const arrayEven: number[] = generateEvenOddArray(arrayEx1, true);
const arrayOdd: number[] = generateEvenOddArray(arrayEx1, false);
const arrayEx4: number[] = generateOppositeArray(arrayEven, arrayOdd);

const sumArray: number = arrayEx1.reduce((totTmp, value, index) => {
    return totTmp += value + arrayEx4[index];
});

prettyConsoleLog(1, "Creare un array contenente i primi 100 numeri naturali:", arrayEx1.toString());
prettyConsoleLog(2, "Creare un array contenente i primi 50 numeri pari:", arrayEven.toString());
prettyConsoleLog(3, "Creare un array contenente i primi 50 numeri dispari:", arrayOdd.toString());
prettyConsoleLog(4, "Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno:", arrayEx4.toString());
prettyConsoleLog(5, "Invertire l'ordine degli elementi dell'array dell'Esercizio 1:", arrayEx1.reverse().toString());
prettyConsoleLog(6, "Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4:", sumArray);