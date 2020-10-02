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


 // 1
 console.log("Esercizio 1:\n");
 for(let i=0; i<100; i++)
 {
     console.log(i+1);
 }
 console.log("\n");

 //2
 console.log("Esercizio 2:\n");
 let n:number = 0;
 for(let i=0; i<100; i++)
 {
     n = n+i+1;
 }
 console.log(n);
 console.log("\n");

 //3
 console.log("Esercizio 3:\n");
 for(let i=0; i<100; i++)
 {
     if(i%2==1)
     console.log(i);
 }
 console.log("\n");

 //4
 console.log("Esercizio 4:\n");
 for(let i=0; i<100; i++)
 {
     if(i%2==0)
     console.log(i);
 }
 console.log("\n");

 //5
 console.log("Esercizio 5:\n");
 for(let i=100; i>0; i--)
 {
     console.log(i);
 }


