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


 //  Stampare i primi 100 numeri naturali
 console.log("Es. 1)\n");
 for(let i=0; i<100; i++)
 {
     console.log(i);
 }
 console.log("-------------\n");

 // Stampare la somma dei primi 100 numeri naturali
 console.log("Es. 2)\n");
 let sum:number = 0;
 for(let i=0; i<=100; i++)
 {
     sum += i;
     console.log(sum)
 }
 console.log("-------------\n");

 //  Stampare solo i numeri dispari dei primi 100 numeri naturali
 console.log("Es. 3)\n");
 for(let i =0; i<=100; i++)
 {
     if(i%2 != 0) {
         console.log(i)
     }
 }
 console.log("-------------\n");

 // Stampare solo i numeri pari dei primi 100 numeri naturali
 console.log("Es. 4)\n");
 for(let i =0; i<=100; i++)
 {
     if(i%2 == 0) {
         console.log(i)
     }
 }
 console.log("-------------\n");

 // Stampare i primi 100 numeri naturali in ordine inverso
console.log("Es. 5)\n");
let val:number=100;
while(val>=0)
{
    console.log(val);
    val--;
}