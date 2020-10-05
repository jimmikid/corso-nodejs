<<<<<<< HEAD

let arrayDiStringhe: string[] = ["pippo", "pluto", "paperino"];

let arrayDiNumeri :number[] = [1, 2, 3, 4, 5];

//Per accedere agli elementi di un array utilizzo un indice che va da 0
//a ( lunghezzaArray - 1 )

console.log(arrayDiStringhe[0]);
console.log(arrayDiStringhe.length);

console.log("\n\n\n\n\n\n");

for (let i:number = 0; i < arrayDiStringhe.length; i++){
    console.log(arrayDiStringhe[i]);
}

console.log("\n\n\n\n\n\n");

//for...in
//for...of

for(let numero in arrayDiNumeri){
    
    if(arrayDiNumeri[numero] % 2 === 0){
        console.log(numero);
    }
}

console.log("\n\n\n\n\n\n");

for (let stringa in arrayDiStringhe){
    console.log(arrayDiStringhe[stringa]);
}

console.log("\n\n\n\n\n\n");

for (let number of arrayDiNumeri){
    console.log(number);
}


let arrayDiNumeri1:number[] = [1,2,3,4,5];
let arrayDiNumeri2:number[] = [6,7,8,9,10];

let arrayDiNumeri3:number[] = [...arrayDiNumeri1, ...arrayDiNumeri2];

//arrayDiNumeri3 = [1,2,3,4,5,6,7,8,9,10]

/* for(let i:number=0; i < arrayDiNumeri1.length; i++){
    arrayDiNumeri3[i] = arrayDiNumeri1[i];
}
let j:number = arrayDiNumeri3.length;
for(let i:number = 0; i < arrayDiNumeri2.length; i++ ){
    arrayDiNumeri3[j] = arrayDiNumeri2[i];
    j++;
} */

console.log(arrayDiNumeri3);

let arrayDiArrivo:any[] = [...arrayDiStringhe, ...arrayDiNumeri1];
console.log(arrayDiArrivo);
=======
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
>>>>>>> e2f2dced8d94eba03f596a5585315b41ad8dbae1
