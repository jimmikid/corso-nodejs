//5 - Stampare i primi 100 numeri naturali in ordine inverso


console.log("-------------------------------------");
console.log("----- Soluzione con il do-while -----");
console.log("------------------------------------- \n");

let numero_dowhile:number = 100;

do{
    console.log(numero_dowhile);
    numero_dowhile--;
}while (numero_dowhile>=0);

console.log("\n");
console.log("**************************************");
console.log("\n");

console.log("-------------------------------------");
console.log("--------- Soluzione con for ---------");
console.log("------------------------------------- \n");

let numero_for:number = 100;

for(numero_for; numero_for>=0; numero_for--){
    console.log(numero_for);
}

console.log("\n");
console.log("**************************************");
console.log("\n");

console.log("-------------------------------------");
console.log("--------- Soluzione con while -------");
console.log("------------------------------------- \n");

let numero_while:number = 100;

while(numero_while>=0)
{
    console.log(numero_while);
    numero_while--;
}

console.log("\n");
console.log("**************************************");
console.log("\n");