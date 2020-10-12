/**
 * ESERCIZIO 1 - Creare un array contenente i primi 100 numeri naturali
 */
let centoNumeri : number[] = [];

// Popolo l'array con un ciclo for
for(let varIndice:number = 0; varIndice<=100; varIndice++){
    centoNumeri[varIndice]= varIndice;
}

//Stampo il contenuto dell'array con for in
console.log("Stampo il contenuto dell'array con for in");
for (let indice in centoNumeri) {
	console.log(centoNumeri[indice]);
}


//Stampo il contenuto dell'array con for of
console.log("\n");
console.log("Stampo il contenuto dell'array con for of");
for (let indice of centoNumeri) {
	console.log(indice);
}

