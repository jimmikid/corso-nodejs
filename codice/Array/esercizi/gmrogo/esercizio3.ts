/**
 * ESERCIZIO 3 - Creare un array contenente i primi 50 numeri dispari
 */

 //Definisco l'array da popolare e 2 variabili una per l'indice dell'array da popolare e una per il numero da inserire nell'array
 let arrayNumDispari : number[] =[];
 let numAnalizz : number= 0;
 let indiceArray=0;
 
 //Popolo l'array con i numeri pari
 while(numAnalizz<=100){
     if (numAnalizz%2 !== 0){
        arrayNumDispari[indiceArray]=numAnalizz;
         indiceArray++;
     }
     numAnalizz++;
 }
 
 //Stampo il contenuto dell'array
 for (let valore of arrayNumDispari) {
     console.log(valore);
 }