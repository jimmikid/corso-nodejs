/*Esercizi su Classi e Oggetti:

1a.  Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters

1b.  La Classe Punto dovrà avere un controllo nel costruttore in cui si verifica 
    che entrambi i parametri del costruttore siano number, in caso negativo 
    bisogna lanciare un errore ( throw TypeError ) che impedisce di creare l'oggetto e ferma l'esecuzione del programma

1c.  La Classe Punto dovrà contenere un metodo per il calcolo della distanza euclidea fra due punti.
    La formula per il calcolo della distanza fra due punti è la seguente:
    d(p1, p2) = sqrt( pow((x2-x1),2) + pow((y2-y1),2) )
    Se non risultasse chiara potete trovare la formula al seguente indirizzo 
    https://www.youmath.it/formulari/formulari-di-geometria-analitica/426-distanza-tra-due-punti-nel-piano.html

    ATTENZIONE: il metodo che calcola la distanza fra due punti deve verificare che effettivamente stia operando su
    elementi di classe Punto!

2a. Creare una classe che rappresenta un Triangolo che prende in ingresso la lunghezza dei tre lati con relativi getters e setters

2b. La Classe Triangolo dovrà avere un controllo nel costruttore in cui si verifica che i lati passati in ingresso siano di 
    tipo number, in caso negativo bisogna lanciare un errore ( throw TypeError ) che impedisce di creare l'oggetto.
    Un Triangolo per esistere ha bisogno che la lunghezza di un lato non sia mai superiore alla somma delle lunghezze
    degli altri due: verificare nel costruttore anche questa eventualità; in caso contrario lanciare un errore generico (throw new Error('messaggio di errore'))

2c. Creare un metodo che restituisce se un Triangolo è scaleno, isoscele o equilatero

2d. Creare un metodo che calcola l'Area ( attenzione al tipo di Triangolo) ed il perimetro di un Triangolo.

Se ci fossero eventuali dubbi non esitate a contattarmi. Buon Lavoro!
*/

console.log('################');
console.log('ESERCIZI SU CALSSI E OGGETTI');
console.log('################');
console.log('\n\n\n');


console.log('################');
console.log('Esercizio 1a');
console.log('1a.  Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters')
console.log('################');

class Punto {
    //Construct
    constructor(private _x: number, private _y: number){};

    // Getter & Setter
    public getCoord() {
        console.log(`Coordinate: punto(${this._x} ${this._y})`);
    };

    public setCoord(_nuovoX: number, _nuovoY: number): void {
        this._x = _nuovoX;
        this._y = _nuovoY;
    };
};

console.log('# Test ex 1a');
let punto_1 = new Punto(4,6);
punto_1.getCoord();
console.log('Cambio coordinate');
punto_1.setCoord(5,5);
punto_1.getCoord();


console.log('\n\n\n');

console.log('################');
console.log('Esercizio 1b');
console.log('   La Classe Punto dovrà avere un controllo nel costruttore in cui si verifica \n che entrambi i parametri del costruttore siano number, in caso negativo bisogna lanciare un errore ( throw TypeError ) \n che impedisce di creare l oggetto e ferma l esecuzione del programma');
console.log('################');

class PuntoPlus {
    //Construct
    constructor(private _x: number, private _y: number){
        if(typeof _x !== "number" && typeof _y !== "number") {
            throw new TypeError('Insert numbers not strings bitch!');
    }
}
    // Getter & Setter
    public getCoord() {
        console.log(`Coordinate: punto(${this._x} ${this._y})`);
    };

    public setCoord(_nuovoX: number, _nuovoY: number): void {
       if(typeof _nuovoX === "number" && typeof _nuovoY === "number") {
        this._x = _nuovoX;
        this._y = _nuovoY;
       } else { throw new TypeError('Insert numbers not strings bitch!');}
       
    };
};

// let punto1 = new PuntoPlus('miao','bau');

console.log('\n\n\n');

console.log('################');
console.log('Esercizio 1c');
console.log(' La Classe Punto dovrà contenere un metodo per il calcolo della distanza euclidea fra due punti.')
console.log('################');



class PuntoPlus2 {
    //Construct
    constructor(private _x: number, private _y: number){
        if(typeof _x !== "number" && typeof _y !== "number") {
            throw new TypeError('Insert numbers not strings bitch!');
    }
}
    // Getter & Setter
    public getCoord() {
        console.log(`Coordinate: punto(${this._x} ${this._y})`);
    };

    public setCoord(_nuovoX: number, _nuovoY: number): void {
       if(typeof _nuovoX === "number" && typeof _nuovoY === "number") {
        this._x = _nuovoX;
        this._y = _nuovoY;
       } else { throw new TypeError('Insert numbers not strings bitch!');}
       
    };

    public calcolaDistPunti(_nuovoX1:number, _nuovoY1:number): void {
        if(typeof _nuovoX1 === "number" && typeof _nuovoY1 === "number") {
            console.log(`Distanza di due punti: p1(${this._x} ${this._y}) & p2(${_nuovoX1} ${_nuovoY1}) =  ${Math.sqrt( Math.pow((this._x-_nuovoX1),2) + Math.pow((this._y-_nuovoY1),2) )}`);


            // d(p1, p2) = sqrt( pow((x2-x1),2) + pow((y2-y1),2) )
            //this._x = _nuovoX;
            //this._y = _nuovoY;
           } else { throw new TypeError('Insert numbers not strings bitch!');}
    }
};

/*
let punto2 = new PuntoPlus2(7,9);
punto2.getCoord();
punto2.calcolaDistPunti(5,1);
*/

console.log('\n\n\n');

console.log('################');
console.log('Esercizio 2a');
console.log('################');

console.log('\n\n\n');

console.log('################');
console.log('Esercizio 2b');
console.log('################');

console.log('\n\n\n');

console.log('################');
console.log('Esercizio 2c');
console.log('################');

console.log('\n\n\n');

console.log('################');
console.log('Esercizio 2d');
console.log('################');

