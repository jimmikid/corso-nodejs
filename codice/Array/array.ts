
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