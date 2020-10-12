/**
 * ESERCIZIO 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
 */

/**
 * Creo l'array con i 50 numeri pari 
 */

//Definisco l'array da popolare e 2 variabili una per l'indice dell'array da popolare e una per il numero da inserire nell'array
let arrayNumPari : number[] =[];
let numAnalizzPari : number= 0;
let indiceArrayPari=0;

//Popolo l'array con i numeri pari
while(numAnalizzPari<=100){
    if (numAnalizzPari%2 === 0){
        arrayNumPari[indiceArrayPari]=numAnalizzPari;
        indiceArrayPari++;
    }
    numAnalizzPari++;
}

/**
 * Creo l'array con i 50 numeri dispari 
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

/**
 * Unisco i due array in un solo array con i valori cambiti di segno
 * Questa soluzione da priorità all'alternanza dei valori presenti nei due array, non viene tenuto conto della cardinalità dei numeri.
 */

//Dichiaro il nuovo array finale
 let arrayTotale : number[] =[];

//Dichiaro una variabile per scorrere gli indici dell'array 
let indiceArrayTot: number=0;

//Dichiaro una variabile che contiene la lunghezza che deve avere l'array finale
let lungTot: number= arrayNumDispari.length+arrayNumPari.length;

//Dichiaro due variabili di appoggio per scorrere gli array parziali

let indicePari: number=0;
let indiceDispari: number=0;

//Popolo l'array finale con i numeri cambiati di segno
while(indiceArrayTot<lungTot){
    if(indiceArrayTot%2 === 0){
        arrayTotale[indiceArrayTot]=(arrayNumPari[indicePari])*-1;
        indicePari++;
    }

    if(indiceArrayTot%2 !== 0){
        arrayTotale[indiceArrayTot]=(arrayNumDispari[indiceDispari])*-1;
        indiceDispari++;
    }
    indiceArrayTot++;
}

 //Stampo il contenuto dell'array
 for (let valore of arrayTotale) {
    console.log(valore);
}
