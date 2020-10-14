/* ESERCIZIO 1 - Creare un array contenente i primi 100 numeri naturali */
let numNaturaliCento: number[] = []
for (let i = 0; i <= 100; i++) {
    numNaturaliCento[i] = i
}
//per iterare l'array potrei usare ad ex for ..in
for (let i in numNaturaliCento) {
    console.log(numNaturaliCento[i]);
}
// per riempire l'array potrei usare anche il push 
//for (let i = 0; i <= 100; i++) numNaturaliCento.push(i);

/**
 *  * Esercizio 2 - Creare un array contenente i primi 50 numeri pari
 */
let interi0: number[] = []
for (let i = 0; i <= 100; i++) interi0.push(i);
let pari: number[] = interi0.filter((numero: number) => {
    if (numero % 2 == 0) {
        return numero;
    }
})
pari.forEach((numero: number) => console.log(numero));
console.log(pari.length)


/**
 * ESERCIZIO 3 - Creare un array contenente i primi 50 numeri dispari
 */
let interi: number[] = []
for (let i = 0; i <= 100; i++) interi.push(i);
let dispari: number[] = interi.filter((numero: number) => {
    if (numero % 2 !== 0) {
        return numero;
    }
})
dispari.forEach((numero: number) => console.log(numero));
console.log(dispari.length)



/**
 * * Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
 */

numNaturaliCento.reverse();
for (var x = 0; x < numNaturaliCento.length; x++) {
    console.log((x + 1) + ")" + numNaturaliCento[x]);
}
/**
 * ESERCIZIO 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]
 * 
 *
 */
let arrayPariDispar: number[] = [];
for (let i: number = 0; i < pari.length && i < dispari.length; i++) {
    arrayPariDispar.push(dispari[i] * -1, pari[i] * -1);
}
console.log(arrayPariDispar)

/**Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4*/

let sommaArray: number = numNaturaliCento.reduce((accumulator, value, index) => {
    return accumulator += value + arrayPariDispar[index];
});



