/**
 * 
 * Una classe è un particolare costrutto che ci permette di definire un oggetto e le operazioni che può effettuare
 * In termini pratici, si può immaginare una classe come una sorta di scheletro, un blueprint
 * 
 * Per dichiarare una classe viene usata la parola chiave riservata class e per convenzione il nome di una classe inizia
 * con lettera maiuscola. 
 * 
 * Classi e Interfacce sono dei concetti chiave della programmazione ad oggetti
 * 
 */

class Automobile {
    nome: string;
    colore: string;
    cilindrata: number;
    marca: string;

    suonaClacson(): void {
        console.log('beep');
    }
    giraADestra(): void {
        console.log('sto girando a destra');
    }
    giraASinistra(): void {
        console.log('sto girando a sinistra');
    }
    stampaColore(): void {
        console.log(this.colore);
    }
    stampaMarca(): void {
        console.log(this.marca);
    }
};

//Per utilizzare un oggetto di una determinata classe bisogna utilizzare la parola chiave riservata new seguita dal nome della classe
let panda = new Automobile();
let golf = new Automobile();
let troc = new Automobile();

//Per accedere ai campi di una classe di usa l'operatore .
panda.colore = 'rosso';
panda.giraADestra();
panda.stampaColore();
console.log('\n==============\n');
golf.colore = 'grigio';
golf.suonaClacson();
golf.stampaColore();
console.log('\n==============\n');
troc.marca = 'volkswagen';
troc.stampaMarca();
troc.giraASinistra();
console.log('\n==============\n');


//Si può definire anche il costruttore di una classe, ovvero un metodo particolare che permette di passare dei parametri quando
//viene istanziato un oggetto di una classe. Per creare un costruttore si usa la parola chiave riservata constructor
class AutomobileAvanzata {
    nome: string;
    colore: string;
    cilindrata: number;
    marca: string;

    //Per convenzione i nomi dei parametri in ingresso sono preceduti dall'_ ( underscore )
    constructor(_nome: string, _colore: string, _cilindrata: number, _marca: string) {
        this.nome = _nome;
        this.colore = _colore;
        this.cilindrata = _cilindrata;
        this.marca = _marca;
    };

    printInfo(): void {
        console.log(this.nome, this.colore, this.cilindrata, this.marca);
    };
};
let punto1 = new AutomobileAvanzata('Grande Punto', 'blu', 1200, 'Fiat');
let punto2 = new AutomobileAvanzata('Grande Punto', 'nera', 1200, 'Fiat');
let punto3 = new AutomobileAvanzata('Grande Punto', 'gialla', 1200, 'Fiat');
punto1.printInfo();
punto2.printInfo();
punto3.printInfo();