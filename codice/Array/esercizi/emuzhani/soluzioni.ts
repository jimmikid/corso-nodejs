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

console.log("Esercizio 1:\n");

 let ArrayNaturali:number [] = [];

 for(let i:number = 0; i<=100; i++)
 {
     ArrayNaturali[i] = i;
 }

 console.log(ArrayNaturali);

 console.log("\n\n");

 



 //Esercizio 2 - Creare un array contenente i primi 50 numeri pari

console.log("Esercizio 2:\n");

let ArrayPari:number [] = [];

let j:number = 0;

for(let i:number = 0; i<=50; i++)
{
    if(i%2 === 0)
    {
        ArrayPari[j] = i;
        j++;
    }
    
}

console.log(ArrayPari);

console.log("\n\n");



//Esercizio 3 - Creare un array contenente i primi 50 numeri dispari


console.log("Esercizio 3:\n");

let ArrayDispari:number [] = [];

let x:number = 0;

for(let i:number = 0; i<=50; i++)
{
    if(i%2 !== 0)
    {
        ArrayDispari[x] = i;
        x++;
    }
    
}

console.log(ArrayDispari);

console.log("\n\n");


//Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
//               esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]

console.log("Esercizio 4:\n");

let ArrayInvertiti:number [] = [];

let contaInv:number = 0;

for(let i:number = 0; i<25; i++)
{
    ArrayInvertiti[contaInv] = -ArrayDispari[i];
    contaInv++;
    ArrayInvertiti[contaInv] = -ArrayPari[i+1];
    contaInv++;
}

console.log("Array pari + Array dispari invertiti:");
console.log(ArrayInvertiti);

console.log("\n\n");

//Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1

console.log("Esercizio 5:\n");

let ArrayInv:number [] = [];

let conta:number = 0;

for(let i:number=100; i>=0; i--)
{
    ArrayInv[conta] = ArrayNaturali[i];
        conta++;
}

console.log("Array invertito di posizioni:");
console.log(ArrayInv + " ");

console.log("\n\n");

//Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4


console.log("Esercizio 6:\n");

let ArrayUnion:number [] = [];

for(let i:number = 0; i<ArrayNaturali.length; i++)
{
    ArrayUnion[i] =  ArrayNaturali[i];
}


for(let j:number = 0; j<ArrayInvertiti.length; j++)
{
    ArrayUnion[j+101] = ArrayInvertiti[j];
    
}


console.log("Array uniti:");
console.log(ArrayUnion  + " ");
