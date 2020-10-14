/**
 * 
 * I modificatori di accesso servono per marcare proprietà e metodi di una classe in modo che questi possano 
 * essere utilizzati o unicamente all'interno di essa o anche esternamente
 * 
 */

class Cerchio {
    private raggio: number;

    constructor(_raggio: number) {
        this.raggio = _raggio;
    };

    //Getter & Setter
    public setRaggio(_nuovoRaggio: number): void {
        this.raggio = _nuovoRaggio;
    };
    public getRaggio(): number {
        return this.raggio;
    };

    //Calcola Area del Cerchio
    public calcolaArea(): number {
        return Math.PI * Math.pow(this.raggio, 2);
    };

    //Calcola Circonferenza del Cerchio
    public calcolaCirconferenza(): number {
        return Math.PI * 2 * this.raggio;
    };

};

let cerchioDiAugusto = new Cerchio(3);
let area: number = cerchioDiAugusto.calcolaArea();
let circonferenza: number = cerchioDiAugusto.calcolaCirconferenza();

console.log(`Area: ${area}, Circonferenza: ${circonferenza}`);

cerchioDiAugusto.setRaggio(10);
area = cerchioDiAugusto.calcolaArea();
circonferenza = cerchioDiAugusto.calcolaCirconferenza();

console.log(`Area: ${area}, Circonferenza: ${circonferenza}`);

class CerchioMod {
    private raggio: number;

    constructor(_raggio: number) {
        this.raggio = _raggio;
    }

    private print(): void {
        console.log("ciao sono un cerchio");
        console.log(this.raggio);
    }
}
let cerchioNuovo = new CerchioMod(5);

class proprietaAutomatiche {
    constructor(public id: number, private nome: string) { };
    public print(): void {
        console.log(this.id, this.nome);
    }
};

console.log("\n\n=============\n\n");
let istanzaClasse = new proprietaAutomatiche(10, 'pippo');
istanzaClasse.print();
istanzaClasse.id = 90;
istanzaClasse.print();

class ClasseConAccessori {

    private id: number;
    private nome: string;

    constructor(_id: number, _nome: string) {
        this.id = _id;
        this.nome = _nome;
    };

    public getId(): number {
        return this.id;
    };
    public setId(_id: number): void {
        this.id = _id;
    };
    public getNome(): string {
        return this.nome;
    };
    public setNome(_nome: string): void {
        this.nome = _nome;
    };
}
let miaClasseConAccessori = new ClasseConAccessori(1, 'pippo');
miaClasseConAccessori.setId(6);

class ClasseStatica {
    static incremento: number = 0;
    readonly nomeClasse: string;

    constructor(_nomeClasse: string) {
        this.nomeClasse = _nomeClasse;
    }
    static stampaStringa(): void {
        console.log("\n\n\nCiao, sono un metodo statico");
    };
    static sommaNumeri(a: number, b: number): number {
        return a + b;
    }
    public incrementaIncremento(): void {
        ClasseStatica.incremento++;
    }
    public stampaIncremento(): void {
        console.log(ClasseStatica.incremento);
    }
};

ClasseStatica.stampaStringa();
console.log(ClasseStatica.sommaNumeri(1, 2));

let var1 = new ClasseStatica("a");
let var2 = new ClasseStatica("b");
let var3 = new ClasseStatica("c");
let var4 = new ClasseStatica("d");

var4.incrementaIncremento();
var3.incrementaIncremento();

console.log(`${ClasseStatica.incremento}`);
var4.stampaIncremento();
var3.stampaIncremento();
var2.stampaIncremento();
var1.stampaIncremento();

namespace PrimoNameSpace {
    class NonEsportabile {

    }
    export class Esportata {
        id: number
    }
}
namespace SecondoNameSpace {
    class NonEsportabile {

    }
    export class Esportata {
        id: number
    }
    let esempio2 = new NonEsportabile();
}

let esempio1 = new PrimoNameSpace.Esportata();
let esempio2 = new SecondoNameSpace.Esportata();

//Creare una classe Persona che abbia nome, cognome, eta, cod. fiscale
//Stampare il nome completo ( Nome + Cognome)
//Tutte le proprietà sono modificabili
class Persona {
    private nome: string;
    private cognome: string;
    private eta: number;
    private codFisc: string;

    constructor(_nome: string, _cognome: string, _eta: number, _codFisc: string) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
        this.codFisc = _codFisc;
    };

    //Setters
    public setNome(_nuovoNome: string): void {
        this.nome = _nuovoNome;
    };
    public setCognome(_nuovoCognome: string): void {
        this.cognome = _nuovoCognome;
    };
    public setEta(_nuovaEta: number): void {
        this.eta = _nuovaEta;
    };
    public setCodFisc(_nuovoCodFisc: string): void {
        this.codFisc = _nuovoCodFisc;
    };

    //Getters
    public getNome(): string{
        return this.nome;
    };

    public getCognome(): string{
        return this.cognome;
    };

    public getEta(): number{
        return this.eta;
    };

    public getCodFisc(): string{
        return this.codFisc;
    };

    public stampaNomeCompleto(): string{
        return this.nome + ' ' + this.cognome;
    };
    public stampaPersona(): string{
        return this.nome + ' ' + this.cognome + ' ' + this.codFisc + ' ' + this.eta +'\n\n';
    }
};

let saraGiannoni = new Persona("SARA", "GIANNONI", 19, 'qwertyuiopèasdfghj');
let persona = saraGiannoni.stampaPersona();
console.log(persona);
saraGiannoni.setCodFisc('qazwsxedcrfv1234');
persona = saraGiannoni.stampaPersona();
console.log(persona);
