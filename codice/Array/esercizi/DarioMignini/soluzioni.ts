/**
 *  * Esercizio 1 - Creare un array contenente i primi 100 numeri naturali
 */
console.log('Esercizio 1 - Creare un array contenente i primi 100 numeri naturali');
let arr: number[] = [];
for (let i = 0; i <= 100; i++) arr.push(i);
console.log(arr);
for (let i = 0; i <= 100; i++) arr[i] = i;
console.log(arr);


/**
 *  * Esercizio 2 - Creare un array contenente i primi 50 numeri pari
 */
console.log('creare un array contente i primi 50 numeri pari')
let arrEven: number[] = [];
for (let i = 0; arrEven.length < 50; i++) if (i%2 === 0) arrEven.push(i);
console.log(arrEven, arrEven.length);
// e niente la storia dell 0 fa un po' casino, se lo consideriamo come numero primo, 
// nei numeri pari non abbiamo il 100 e poi fa casino nell'ultimo esercizio.. quindi lo pusho e ciaone.
arrEven.push(100);



/**
 * * Esercizio 3 - Creare un array contenente i primi 50 numeri dispari
 */
console.log('Esercizio 3 - Creare un array contenente i primi 50 numeri dispari');
let arrOdd: number[] = [];
for (let i = 0; arrOdd.length < 50; i++) if (i%2 !== 0) arrOdd.push(i);
console.log(arrOdd, arrOdd.length);


/**
 * * Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
 *               esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]
 */
console.log('Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno');
let arrOpposite: number[] = [];
arrEven.shift(); // rimuovo lo 0 perché non ha senso farne l'opposto
console.log('arrEven: ', arrEven);
for(let i = 0; i < arrOdd.length; i++) arrOpposite.push(
  arrOdd[i] * -1,
  arrEven[i] * -1
);
arrOpposite.splice(0, 0, 0); // reinserisco lo 0 così perché mi va
console.log(...arrOpposite, arrOpposite.length);



/**
 * * Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
 */
console.log('Esercizio 5 - Invertire l\'ordine degli elementi dell\'array dell\'Esercizio 1');
console.time('reverse');
arr.reverse();
console.timeEnd('reverse');
console.log(arr);
// se reverse è cheating
arr.reverse() //li rimetto a posto
console.time('myreverse');
let temp: number;
let len: number = arr.length-1;
let end: number = (arr.length%2) + Math.floor(arr.length / 2);
for(let i = 0; i < end; i++) {
  temp = arr[i];
  arr[i] = arr[len-i];
  arr[len-i] = temp;
}
console.timeEnd('myreverse');
console.log(arr, arr.length);


/**
 * * Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4
 */
console.log('Esercizio 6 - Sommare l\'array dell\'Esercizio 1 all\'array dell\'Esercizio 4');
//console.log(arrOpposite.length, arr.length[100]);
arr.reverse() //rimetto a posto l'array dell'ersercizio 1
let sum: number = arr.reduce((accumulator, currentValue, index) => {
  return accumulator += currentValue + arrOpposite[index];
}, 0);
console.log(sum);
//oppure
sum = 0;
for (let i = 0; i < arr.length; i ++) {
  sum += arr[i] + arrOpposite[i];
}
console.log(sum);
//o se si intende avere un array dove ogni posizione è la somma della corrispondente
let arrSum: number[] = [];
for (let i = 0; i < arr.length; i++) {
  arrSum[i] = arr[i] + arrOpposite[i];
}
console.log(arrSum, arrSum.length);
