/**
 * ESERCIZIO 2 - Creare un array contenente i primi 50 numeri pari
 */


 //Definisco l'array da popolare e 2 variabili una per l'indice dell'array da popolare e una per il numero da inserire nell'array
let arrayNumPari : number[] =[];
let numAnalizz : number= 0;
let indiceArray=0;

//Popolo l'array con i numeri pari
while(numAnalizz<=100){
    if (numAnalizz%2 === 0){
        arrayNumPari[indiceArray]=numAnalizz;
        indiceArray++;
    }
    numAnalizz++;
}

//Stampo il contenuto dell'array
for (let indice in arrayNumPari) {
	console.log(arrayNumPari[indice]);
}