
/**
 * 
 * Utilizzare i cicli iterativi e le istruzioni condizionali per risolvere i seguenti esercizi
 * 
 * 1 - Stampare i primi 100 numeri naturali
 * 2 - Stampare la somma dei primi 100 numeri naturali
 * 3 - Stampare solo i numeri dispari dei primi 100 numeri naturali
 * 4 - Stampare solo i numeri pari dei primi 100 numeri naturali
 * 5 - Stampare i primi 100 numeri naturali in ordine inverso
 * 
 */

const limit:number=100;
let str:string="";

// 1 - Stampare i primi 100 numeri naturali
console.log("1 - Stampare i primi 100 numeri naturali");
for(let i:number=0;i<limit;i++){
    str+=i+" ";
}
console.log(str)

// 2 - Stampare la somma dei primi 100 numeri naturali
console.log("\n2 - Stampare la somma dei primi 100 numeri naturali");
let sum:number=0;
for(let i:number=0;i<limit;i++){
    sum+=i;
}
console.log("somma= "+sum);

// 3 - Stampare solo i numeri dispari dei primi 100 numeri naturali
console.log("\n3 - Stampare solo i numeri dispari dei primi 100 numeri naturali");
str="";
for(let i:number=0;i<limit;i++){
    if(i%2!==0){
        str+=i+" ";
    }
}
console.log(str)



// 4 - Stampare solo i numeri pari dei primi 100 numeri naturali
console.log("\n4 - Stampare solo i numeri pari dei primi 100 numeri naturali");
str="";
for(let i:number=0;i<limit;i++){
    if(i%2===0){
        str+=i+" ";
    }
}
console.log(str)

// 5 - Stampare i primi 100 numeri naturali in ordine inverso
console.log("\n5 - Stampare i primi 100 numeri naturali in ordine inverso");
str="";
for(let i:number=limit-1;i>=0;i--){
    str+=i+" ";
}
console.log(str)
