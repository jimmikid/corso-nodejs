interface IOp {
    sum(): any;
};

const myFunc = (a: IOp) => {
    a.sum();
};

class ClassA implements IOp {
    print(): void {
        console.log('Sono la Classe A');
    };
    sum(): number {
        console.log(`${1 + 2}`);
        return 0;
    }
};

class ClassB implements IOp {
    print(): void {
        console.log('Sono la Classe B');
    };
    sum(): string {
        console.log('pippo');
        return 'a' + 'b';
    }
};

let classeA = new ClassA();
let classeB = new ClassB();
myFunc(classeA);
myFunc(classeB);

interface IGeom {
    calcolaArea(): number;
    calcolaPerimetro(): number;
};

class Rettangolo implements IGeom {
    base: number;
    altezza: number;

    constructor(_base: number, _altezza:number){
        this.base = _base;
        this.altezza = _altezza;
    };

    calcolaArea(): number {
        return this.base * this.altezza;
    };
    calcolaPerimetro(): number {
        return this.base * 2 + this.altezza * 2;
    };
    stampaBellezza(): void {
        console.log("Sono un rettangolo bellissimo");
    };
};

class Quadrato implements IGeom {
    lato: number;

    constructor(_lato:number){
        this.lato = _lato;
    }
    calcolaArea(): number {
        return Math.pow(this.lato, 2);
    };
    calcolaPerimetro(): number {
        return this.lato * 4;
    };
    print(): void {
        console.log("Ho quattro lati uguali =) ");
    };
};

let rett = new Rettangolo(16, 9);
let rett1 = new Rettangolo(32, 18);
let quad = new Quadrato(5);
quad.print();
rett.stampaBellezza();

if(rett.calcolaArea() > rett1.calcolaArea()){
    console.log("Area rett > area rett1");
} else {
    console.log("Area rett < area rett1");
}
