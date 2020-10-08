console.log("1 - Stampare i primi 100 numeri naturali");
var i = 0;
while (i < 100) {
    console.log(i);
    i++;
}
// 2 - Stampare la somma dei primi 100 numeri naturali
console.log("2 - Stampare la somma dei primi 100 numeri naturali");
var sum = 0;
for (var j = 1; j < 100; j++) {
    sum += j;
}
console.log(sum);
// 3 - Stampare solo i numeri dispari dei primi 100 numeri naturali
console.log("3 - Stampare solo i numeri dispari dei primi 100 numeri naturali");
for (var odd = 1; (2 * odd - 1) < 100; odd++) {
    console.log(2 * odd - 1);
}
//* 4 - Stampare solo i numeri pari dei primi 100 numeri naturali
console.log("4 - Stampare solo i numeri pari dei primi 100 numeri naturali");
for (var even = 0; (2 * even) < 100; even++) {
    console.log(2 * even);
}
//* 5 - Stampare i primi 100 numeri naturali in ordine inverso
console.log("5 - Stampare i primi 100 numeri naturali in ordine inverso");
var k = 99;
while (k >= 0) {
    console.log(k);
    k--;
}