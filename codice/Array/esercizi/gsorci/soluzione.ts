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

/**
 * soluzione esercizio 1
 */
console.log('\nSoluzione 1');
let array1: number[] = [];
for (let i = 0; i < 100; i++) {
    array1.push(i);
}
console.log('array: ' + array1.toString());

/**
 * soluzione esercizio 2
 */
console.log('\nSoluzione 2');
let array2: number[] = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        array2.push(i);
    }
}
console.log('array: ' + array2.toString());

/**
 * soluzione esercizio 3
 */
console.log('\nSoluzione 3');
let array3: number[] = [];
for (let i = 0; i < 50; i++) {
    if (i % 2 != 0) {
        array3.push(i);
    }
}
console.log('array: ' + array3.toString());

/**
 * soluzione esercizio 4
 */
console.log('\nSoluzione 4');
let arrayPari: number[] = [];
let arrayDispari: number[] = [];
let array4: number[] = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        arrayPari.push(i);
    } else {
        arrayDispari.push(i);
    }
    array4.push(-i);
}
console.log('arrayPari: ' + arrayPari.toString());
console.log('arrayDispari: ' + arrayDispari.toString());
console.log('array: ' + array4.toString());

/**
 * soluzione esercizio 5
 */
console.log('\nSoluzione 5');
let array5: number[] = array1.reverse();
console.log('array: ' + array5.toString());

/**
 * soluzione esercizio 6
 */
console.log('\nSoluzione 6');
let array6: number[] = [];
array1.forEach((n1,index) => {
    let n2: number = array4[index];
    array6.push(n1+n2);
});
console.log('array: ' + array6.toString());
