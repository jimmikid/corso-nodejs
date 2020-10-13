class Rettangolo {
    base: number;
    altezza: number;

    constructor(_base: number, _altezza: number) {
        this.base = _base;
        this.altezza = _altezza;
    };

    printInfo(): void {
        console.log(`Base: ${this.base} ---- Altezza: ${this.altezza}`);
    };

    calcolaPerimetro(): number {
        return (this.base * 2 + this.altezza * 2);
    };

    calcolaArea(): number {
        return (this.base * this.altezza);
    };

    calcolaDiagonale(): number {
        let quadratoBase = Math.pow(this.base, 2);
        let quadratoAltezza = Math.pow(this.altezza, 2);

        return Math.sqrt(quadratoBase + quadratoAltezza);
    };

};

let rett1 = new Rettangolo(7, 4);
let rett2 = new Rettangolo(3, 4);

rett1.printInfo();
console.log(`Area Rettangolo 1 : ${rett1.calcolaArea()}`);
console.log(`Perimetro Rettangolo 1 : ${rett1.calcolaPerimetro()}`);
console.log(`Diagonale Rettangolo 1 : ${rett1.calcolaDiagonale()}`);
console.log('\n======================\n');
rett2.printInfo();
console.log(`Area Rettangolo 2 : ${rett2.calcolaArea()}`);
console.log(`Perimetro Rettangolo 2 : ${rett2.calcolaPerimetro()}`);
console.log(`Diagonale Rettangolo 2 : ${rett2.calcolaDiagonale()}`);
