/*1 - Stampare i primi 100 numeri naturali*/
let i:number = 0;
do {
    console.log(i);
    i++;
} while (i<100);

/*2 - Stampare la somma dei primi 100 numeri naturali*/
let somma = 0;
for (let i=0; i<100; i++) {
somma = somma + i
}
console.log (somma)

/*3 - Stampare solo i numeri dispari dei primi 100 numeri naturali*/
let i:number = 0
for (i=0; i<100;i++){
    if (i % 2 != 0) {
        console.log(i);
    }
}

 /*4 - Stampare solo i numeri pari dei primi 100 numeri naturali*/
 let i:number = 0
 for (i=0; i<100;i++){
     if (i % 2 == 0) {
         console.log(i);
     }
 }
 
 /*5 - Stampare i primi 100 numeri naturali in ordine inverso*/
let i:number = 99;
do {
    console.log(i);
    --i;
} while (i >= 0);