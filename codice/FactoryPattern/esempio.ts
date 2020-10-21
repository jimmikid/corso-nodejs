/**
 * 
 * Requisiti: 
 * 
 * 1 - Categorizzare delle persone conoscendo la data di nascita, in tre sottogruppi : Infante, Bambino, Adulto
 * 2 - Indicare con true o false se possiedono l'eta anagrafica giusta per firmare un contratto
 * 3 - Una persona si definisce Infante quando la sua età è minore di 2
 * 4 - Un Infante non può firmare contratti di alcun genere
 * 5 - Una persona si definisce Bambino quanto la sua età è minore di 18
 * 6 - Un Bambino non può firmare contratti di alcun genere
 * 7 - Una persona si definisce Adulto quando la sua età è maggiore di 18
 * 8 - Un Adulto può firmare contratti
 * 
 * Ogni Persona deve poter stampare le proprie caratteristiche che sono : Data di Nascita, Categoria, Puo Firmare Contratti
 * 
 */

enum CategoriaPersona {
    Infante,
    Bambino,
    Adulto,
    Undefined
};

interface IPersona {
    Categoria: CategoriaPersona;
    puoFirmareContratti(): boolean;
    stampaDettagliPersona(): void;
};

abstract class Persona implements IPersona {
    Categoria: CategoriaPersona;
    private dataDiNascita: Date;

    constructor(_dataDiNascita: Date) {
        this.dataDiNascita = _dataDiNascita;
        this.Categoria = CategoriaPersona.Undefined;
    }

    abstract puoFirmareContratti(): boolean;
    stampaDettagliPersona(): void {
        console.log(`Persona`);
        console.log(`Data di Nascita: ${this.dataDiNascita.toLocaleDateString()}`);
        console.log(`Categoria: ${CategoriaPersona[this.Categoria]}`);
        console.log(`Puo Firmare Contratti ? ${this.puoFirmareContratti()}`);
    };
};

class Infante extends Persona {
    constructor(_dataDiNascita: Date) {
        super(_dataDiNascita);
        this.Categoria = CategoriaPersona.Infante;
    };

    puoFirmareContratti(): boolean {
        return false;
    };
};
class Bambino extends Persona {
    constructor(_dataDiNascita: Date) {
        super(_dataDiNascita);
        this.Categoria = CategoriaPersona.Bambino;
    };

    puoFirmareContratti(): boolean {
        return false;
    };
};
class Adulto extends Persona {
    constructor(_dataDiNascita: Date) {
        super(_dataDiNascita);
        this.Categoria = CategoriaPersona.Adulto;
    };

    puoFirmareContratti(): boolean {
        return true;
    };
};

class PersonaFactory {
    getPerson(dataDiNascita: Date): IPersona {
        let dataOdierna = new Date() //Per default restituisce now.
        let mese = dataOdierna.getMonth() + 1;
        let dataCorrente = dataOdierna.getDate();

        let dueAnniFa = new Date(
            dataOdierna.getFullYear() - 2,
            mese,
            dataCorrente
        );

        let diciottoAnniFa = new Date(
            dataOdierna.getFullYear() - 18,
            mese,
            dataCorrente
        );

        if (dataDiNascita >= dueAnniFa) {
            return new Infante(dataDiNascita);
        }
        if (dataDiNascita >= diciottoAnniFa) {
            return new Bambino(dataDiNascita);
        }
        return new Adulto(dataDiNascita);
    }
}

let factory = new PersonaFactory();
let persona1 = factory.getPerson(new Date(2017, 0, 20));
persona1.stampaDettagliPersona();
console.log("\n");
let persona2 = factory.getPerson(new Date(2010, 0, 20));
persona2.stampaDettagliPersona();
console.log("\n");
let persona3 = factory.getPerson(new Date(1980, 0, 20));
persona3.stampaDettagliPersona();
console.log("\n");