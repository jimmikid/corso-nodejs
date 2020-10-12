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

// Esercizio 1 - Creare un array contenente i primi 100 numeri naturali
console.log("\n\n\n\n\n\n");
console.log('#############');
console.log('Esercizio 1 - Creare un array contenente i primi 100 numeri naturali');

let arrayNumNat = [];

for (let i: number = 0; i < 100; i++) { arrayNumNat.push(i); }

console.log('Quanto è bella l insalta in idroponica da 0 a 100?');

for (const number of arrayNumNat) { console.log(number); }


// Esercizio 2 - Creare un array contenente i primi 50 numeri pari
console.log("\n\n\n\n\n\n");
console.log('#############');
console.log('Esercizio 2 - Creare un array contenente i primi 50 numeri pari')

let arrayNumEven: number[] = [];

for (let i: number = 0; i < 100; i++) { if (i % 2 === 0) { arrayNumEven.push(i); } }

for (const number of arrayNumEven) { console.log(number); }

// Esercizio 3 - Creare un array contenente i primi 50 numeri dispari
console.log("\n\n\n\n\n\n");
console.log('#############');
console.log('Esercizio 3 - Creare un array contenente i primi 50 numeri dispari')

let arrayNumOdd: number[] = [];

for (let i: number = 0; i <= 100; i++) {
    if (i % 2 === 0) { } else { arrayNumOdd.push(i); }
}

for (const number of arrayNumOdd) { console.log(number); }

// Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno   
// esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]
console.log("\n\n\n\n\n\n");
console.log('#############');
console.log('Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno');

let arrayNumNeg: number[] = [];

for (let i: number = 0; i < 50; i++) {
    arrayNumNeg.push(arrayNumEven[i]);
    arrayNumNeg.push(arrayNumOdd[i]);
}

arrayNumNeg = arrayNumNeg.map(x => x * -1);

/*for(let i:number = 0; i <= 100; i++){
    arrayNumNeg[i] *= -1;
}
*/
for (const nubmer of arrayNumNeg) { console.log(nubmer); }

// Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
console.log("\n\n\n\n\n\n");
console.log('#############');
console.log('Esercizio 5 - Invertire l ordine degli elementi dell array dell Esercizio 1');

let arrayNumNatRev = arrayNumNat.reverse();

for (const number of arrayNumNatRev) { console.log(number); }

// Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4'
console.log("\n\n\n\n\n\n");
console.log('#############');
console.log(' Esercizio 6 - Sommare l array dell Esercizio 1 all array dell Esercizio 4')

let arraySum: number[] = [];

for (let i: number = 0; i < 50; i++) { arraySum.push(arrayNumNeg[i] + arrayNumNat[i]); }

for (const number of arraySum) { console.log(number); }