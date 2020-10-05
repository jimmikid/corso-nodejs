/**
 * 
 * ISTRUZIONE CONDIZIONALE IF-ELSE
 * 
 */
let miaEta:number = 30;

//If senza else
if(miaEta > 18){
    console.log("Hai più di 18 anni");
}

miaEta = 17;
//If con else
if(miaEta > 18){
    console.log("Hai più di 18 anni");
} else {
    console.log("Hai meno di 18 anni");
}

//Nested If
miaEta = 101;
if (miaEta > 18){
    if(miaEta > 100){
        console.log("Sei molto vecchio!");
    }
}

console.log("Resto del codice...");

//Operatore Ternario
miaEta < 100 ? console.log("Sei ringiovanito!") : console.log("No sei sempre molto vecchio come prima...");