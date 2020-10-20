interface IBase {
    id: number;
};

interface IDerivataDaBase extends IBase {
    nome: string;
};

class ClasseCheEreditaDaInterfaccia implements IDerivataDaBase {
    id: number;
    nome: string
};

class ClasseBase implements IBase {
    id: number
};

class ClasseDerivata extends ClasseBase implements IDerivataDaBase {
    nome: string
};

/************************************************************/

interface IPrimaInterfaccia {
    id: number;
};
interface ISecondaInterfaccia {
    nome: string;
}
class EreditaDaPiuInterfacce implements IPrimaInterfaccia, ISecondaInterfaccia {
    id: number;
    nome: string;
};

/************************************************************/

class ClasseBaseConCostruttore {
    private id: number;
    constructor(_id: number) {
        this.id = _id
    };
};
class ClasseDerivataDaClasseBaseConCostruttore extends ClasseBaseConCostruttore {
    private nome: string;
    constructor(_id: number, _nome: string) {
        super(_id);
        this.nome = _nome;
    };
};

/************************************************************/

class ClasseBaseConMetodo {
    public id: number;
    getProperties(): string {
        return this.id.toString();
    };
};
class ClasseDerivataDaClasseBaseConMetodo extends ClasseBaseConMetodo {
    public nome: string;
    getProperties(): string {
        return super.getProperties() + ' ' + this.nome;
    };
};
let classeDerivata = new ClasseDerivataDaClasseBaseConMetodo();
classeDerivata.id = 10;
classeDerivata.nome = 'pippo';
console.log(classeDerivata.getProperties());

/************************************************************/

class ClassConProtected {
    protected id: number;
    public getId(): number {
        return this.id;
    }
};
class ClasseDerivataDaClassConProtected extends ClassConProtected {
    constructor() {
        super();
        this.id = 0;
    };
};

let variabileDiClasseDerivata = new ClasseDerivataDaClassConProtected();
variabileDiClasseDerivata.id = 1;
console.log(variabileDiClasseDerivata.getId());

/****************************************/
abstract class ImpiegatoAstratto {
    public id: number;
    public nome: string;
    abstract getDettaglio(): string;
    public stampaDettaglio(): void {
        console.log(this.getDettaglio());
    };
}
class Impiegato extends ImpiegatoAstratto {
    getDettaglio(): string {
        return `id: ${this.id} --- Nome: ${this.nome}`;
    };
};
class Manager extends Impiegato {
    public Impiegati: Impiegato[];
    getDettaglio(): string {
        return super.getDettaglio() + ` ---- Numero Impiegat: ${this.Impiegati.length}`;
    };
};

let impiegato = new Impiegato();
impiegato.id = 1001;
impiegato.nome = 'Ugo Fantozzi';
impiegato.stampaDettaglio();

let manager = new Manager();
manager.id = 1;
manager.nome = 'Mega Direttore Galattico';
manager.Impiegati = [impiegato];
manager.stampaDettaglio();

class A { };
class B extends A { };
class C extends A { };
class D extends C { };

function controllaIstanza(valore: A | B | C | D) {
    if (valore instanceof A) {
        console.log("Sono della classe A");
    }
    if (valore instanceof B) {
        console.log("Sono della classe B");
    }
    if (valore instanceof C) {
        console.log("Sono della classe C");
    }
    if (valore instanceof D) {
        console.log("Sono della classe D");
    }
};

controllaIstanza(new A());
controllaIstanza(new B());
controllaIstanza(new C());
controllaIstanza(new D());

abstract class FormaGeometrica {
    abstract calcolaArea(): number;
    abstract calcolaPerimetro(): number;
    public stampaPerimetro(): void {
        console.log(this.calcolaPerimetro());
    };
    public stampaArea(): void {
        console.log(this.calcolaArea());
    };
};
class Triangolo extends FormaGeometrica {
    private lato1: number;
    private lato2: number;
    private lato3: number;
    constructor(_lato1: number, _lato2: number, _lato3: number) {
        super();
        this.lato1 = _lato1;
        this.lato2 = _lato2;
        this.lato3 = _lato3;
    };
    //Getters
    getLato1(): number {
        return this.lato1;
    };
    getLato2(): number {
        return this.lato2;
    };
    getLato3(): number {
        return this.lato3;
    };
    //Setters
    setLato1(_newLato: number): void {
        this.lato1 = _newLato;
    };
    setLato2(_newLato: number): void {
        this.lato2 = _newLato;
    };
    setLato3(_newLato: number): void {
        this.lato3 = _newLato;
    };
    calcolaArea(): number {
        let semiperimetro = this.calcolaPerimetro() / 2;

        Math.sqrt((semiperimetro * (semiperimetro - this.lato1) * (semiperimetro - this.lato2) * (semiperimetro - this.lato3)));
        return 1;
    };
    calcolaPerimetro(): number {
        return this.lato1 + this.lato2 + this.lato3;
    };
};
class Quadrato extends FormaGeometrica {
    private lato: number;
    constructor(_lato: number) {
        super();
        this.lato = _lato;
    };
    getLato(): number {
        return this.lato;
    };
    setLato(_newLato: number): void {
        this.lato = _newLato;
    };

    calcolaArea(): number {
        return Math.pow(this.lato, 2);
    };
    calcolaPerimetro(): number {
        return this.lato * 4;
    };
};

let triangolo = new Triangolo(2, 4, 3);
let quadrato = new Quadrato(5);

console.log('\n\n-------------\n\n');
triangolo.stampaArea();
triangolo.stampaPerimetro();
console.log('\n\n-------------\n\n');
quadrato.stampaArea();
quadrato.stampaPerimetro();