/**
 * ESERCIZIO 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
 */

//Riprendo la soluzione usata nell'esercizio 1

let centoNumeri : number[] = [];

// Popolo l'array con un ciclo for
for(let varIndice:number = 0; varIndice<=100; varIndice++){
    centoNumeri[varIndice]= varIndice;
}

//Definisco l'array da popolare

let arrInv:number[]= [];

 //Ottengo la lunghezza dell'array per il posizionamento dei valori
let lungArr: number= centoNumeri.length-1;

 //Inverto la posizione dei valori
for(let i:number=0; i<lungArr;i++){
    arrInv[i]=centoNumeri[lungArr-i];
 }

//Stampo il contenuto dell'array
for (let valore of arrInv) {
    console.log(valore);
}
