
// * Esercizio 1 - Creare un array contenente i primi 100 numeri naturali
console.log("\n");
console.log("****************** Eserizio 1 ******************");
console.log("\n");

let arrayPrimiNumNaturali: number[] = []
for (let i: number = 0; i <= 99; i++) {
    arrayPrimiNumNaturali.push(i);
}
console.log(arrayPrimiNumNaturali);

console.log("\n");
console.log("********************** Fine *********************");
console.log("\n");

// * Esercizio 2 - Creare un array contenente i primi 50 numeri pari
console.log("\n");
console.log("****************** Eserizio 2 ******************");
console.log("\n");

let arrayPrimi50NumPari: number[] = []
for (let i: number = 0; i <= 99; i++) {
    if (i % 2 === 0) {
        arrayPrimi50NumPari.push(i);
    }
}
console.log(arrayPrimi50NumPari);

console.log("\n");
console.log("********************** Fine *********************");
console.log("\n");

//* Esercizio 3 - Creare un array contenente i primi 50 numeri dispari
console.log("\n");
console.log("****************** Eserizio 3 ******************");
console.log("\n");

let arrayPrimi50NumDispari: number[] = []
for (let i: number = 0; i <= 99; i++) {
    if (i % 2 !== 0) {
        arrayPrimi50NumDispari.push(i);
    }
}
console.log(arrayPrimi50NumDispari);

console.log("\n");
console.log("********************** Fine *********************");
console.log("\n");
//* Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
//* esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]
console.log("\n");
console.log("****************** Eserizio 4 HP1 ******************");
console.log("\n");
let arrayPariDispari: number[] = [];
for (let i: number = 0, j: number = 0; i < arrayPrimi50NumPari.length; i++, j++) {

    arrayPariDispari[i + j] = -arrayPrimi50NumPari[i];
    arrayPariDispari[i + j + 1] = -arrayPrimi50NumDispari[i]
}

console.log(arrayPariDispari);

console.log("\n");
console.log("********************** Esercizio 4 HP2 *********************");
console.log("\n");

let arrayComboPariDisp: number[] =[]; 
for(let pari of arrayPrimi50NumPari){
    arrayComboPariDisp.splice(pari, 0, -pari);
}
for(let dispari of arrayPrimi50NumDispari){
    arrayComboPariDisp.splice(dispari, 0, -dispari);
}

console.log(arrayComboPariDisp);


console.log("\n");
console.log("********************** Fine *********************");
console.log("\n");

//* Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
console.log("\n");
console.log("****************** Eserizio 5 ******************");
console.log("\n");

let arrayPrimiNumNaturaliStraight: number[] = []
for (let i: number = 0; i <= 99; i++) {
    arrayPrimiNumNaturaliStraight.push(i);
}

let arrayPrimiNumNaturaliReversed = arrayPrimiNumNaturaliStraight.reverse();
console.log(arrayPrimiNumNaturaliReversed);

console.log("\n");
console.log("********************** Fine *********************");
console.log("\n");

// * Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4
console.log("\n");
console.log("****************** Eserizio 6 ******************");
console.log("\n");

let sommaArray = 0;
for (let i:number=0, j:number=0; i<arrayPrimiNumNaturali.length,j<arrayPariDispari.length;i++,j++){
    sommaArray += arrayPrimiNumNaturali[i]+arrayPariDispari[j];
};
console.log(sommaArray);

console.log("\n");
console.log("********************** Fine *********************");
console.log("\n");