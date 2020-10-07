// 2 - Stampare la somma dei primi 100 numeri naturali


console.log("-------------------------------------");
console.log("----- Soluzione con il do-while -----");
console.log("------------------------------------- \n");

let numero_dowhile:number = 1;
let somma_dowhile:number =0;

do{
    somma_dowhile +=numero_dowhile;    
    numero_dowhile++;
}while (numero_dowhile<=100);

console.log("Somma totale= " + somma_dowhile);

console.log("\n");
console.log("**************************************");
console.log("\n");

console.log("-------------------------------------");
console.log("--------- Soluzione con for ---------");
console.log("------------------------------------- \n");

let numero_for:number = 1;
let somma_for:number =0;


for(numero_for; numero_for<=100; numero_for++){
    somma_for +=numero_for; 
}

console.log("Somma totale= " + somma_for);

console.log("\n");
console.log("**************************************");
console.log("\n");

console.log("-------------------------------------");
console.log("--------- Soluzione con while -------");
console.log("------------------------------------- \n");

let numero_while:number = 1;
let somma_while:number =0;

while(numero_while<=100)
{
    somma_while+=numero_while;
    numero_while++;
}

console.log("Somma totale= " + somma_while);

console.log("\n");
console.log("**************************************");
console.log("\n");
