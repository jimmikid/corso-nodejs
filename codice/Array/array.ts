let arrayOfStrings: string[] = ["pippo", "pluto", "paperino"];

let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

// Per accedere agli elementi di un array utilizzo l'indice che va da 0 a lunghezza array -1 (perché inizia da 0).

console.log(arrayOfStrings.length);

console.log("\n");
for (let i: number = 0; i < arrayOfStrings.length; i++) {
	console.log(arrayOfStrings[i]);
}

console.log("\n");
console.log(arrayOfStrings[0]);
// console.log(arrayOfStrings[3]); // return undefined


// for...in

console.log("\n");
for (let itemNumber in arrayOfNumbers) {
	console.log(arrayOfNumbers[itemNumber]);
}

console.log("\n");
for (let itemString in arrayOfStrings) {
	console.log(arrayOfStrings[itemString]);
}


// for...of

console.log("\n");
for (let number of arrayOfNumbers) {
  console.log(number);
  
}

console.log("\n");
let arrayOfNumbers1:number[] = [1, 2, 3, 4, 5];
let arrayOfNumbers2:number[] = [6, 7, 8, 9, 10];
console.log(arrayOfNumbers1);
console.log(arrayOfNumbers2);

console.log("\n");
let arrayOfNumbersSum:number[] = arrayOfNumbers1.concat(arrayOfNumbers2);
console.log(arrayOfNumbersSum);

console.log("\n");
// ciclo for
for (let number in arrayOfNumbers1) {
  arrayOfNumbersSum[number] = arrayOfNumbers1[number];
}
for (let number in arrayOfNumbers2) {
  arrayOfNumbersSum[number + 5] = arrayOfNumbers2[number]
}
console.log(arrayOfNumbersSum); //rotto

//soluzione 3
console.log("\n");
let arraySum: number[] = [...arrayOfNumbers1, ...arrayOfNumbers2];
console.log(arraySum);

//console.log([...arrayOfNumbers1,...arrayOfNumbers2]);
