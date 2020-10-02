// 4 - Stampare solo i numeri pari dei primi 100 numeri naturali


console.log("-------------------------------------");
console.log("----- Soluzione con il do-while -----");
console.log("------------------------------------- \n");

let numero_dowhile:number = 1;

do{
    if(numero_dowhile%2==0){
    console.log(numero_dowhile);
}
    numero_dowhile++;
}while (numero_dowhile<=100);

console.log("\n");
console.log("**************************************");
console.log("\n");

console.log("-------------------------------------");
console.log("--------- Soluzione con for ---------");
console.log("------------------------------------- \n");

let numero_for:number = 1;

for(numero_for; numero_for<=100; numero_for++){
    if(numero_for%2==0)
    console.log(numero_for);
}

console.log("\n");
console.log("**************************************");
console.log("\n");


console.log("-------------------------------------");
console.log("--------- Soluzione con while -------");
console.log("------------------------------------- \n");

let numero_while:number = 1;

while(numero_while<=100)
{
    if(numero_while%2==0)
    console.log(numero_while);
    numero_while++;
}

console.log("\n");
console.log("**************************************");
console.log("\n");
