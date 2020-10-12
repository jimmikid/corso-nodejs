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

 /*ESERCIZIO 1 */ 

 console.log("ESERCIZIO 1")

let array100 :number[] = []

for (let i:number = 0; i < 100; i++){
    array100[i] = i ;  
}
console.log(array100);


 /*ESERCIZIO 2 */ 
 console.log("=========================================")
 console.log("ESERCIZIO 2")

let array50pari :number[] = []

for (let i:number = 0; i < array100.length; i++){
    if (i % 2 === 0){
     array50pari.push(i);
    }  
}
console.log(array50pari);

 /*ESERCIZIO 3 */ 
 console.log("=========================================")
 console.log("ESERCIZIO 3")

let array50dispari :number[] = []

for (let i:number = 0; i < array100.length; i++){
    if (i % 2 !== 0){
        array50dispari.push(i);
    }  
}
console.log(array50dispari);

 /*ESERCIZIO 4 */ 
 console.log("=========================================")
 console.log("ESERCIZIO 4")

 let arrayPariDispari: number[] = [];
for (let i: number = 0, j: number = 0; i < array50pari.length; i++, j++) {
 
    arrayPariDispari[i + j] = -array50pari[i];
    arrayPariDispari[i + j + 1] = -array50dispari[i]
}
 
console.log(arrayPariDispari);

  /*ESERCIZIO 5 */ 
  console.log("=========================================")
  console.log("ESERCIZIO 5")

let array100num: number [] = []
for (let i:number = 0; i < 100; i++){
    array100num[i] = i ;  
}
let array100inverso:number[] = array100num.reverse();

console.log(array100inverso);

  /*ESERCIZIO 6 */ 
  console.log("=========================================")
  console.log("ESERCIZIO 6")

  let arrayTot: number[] =[];

  for(let i: number = 0;i < array100.length; i++){
      arrayTot[i] = array100[i] + arrayPariDispari[i];
  }

  console.log(arrayTot);

  


