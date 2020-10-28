/* Esercizi su Classi e Oggetti:

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

2d. Creare un metodo che calcola l'Area ( attenzione al tipo di Triangolo) ed il perimetro di un Triangolo. */

console.log('\n========Esercizio 1========\n')

//Creare una classe che rappresenta un punto del piano con coordinate ( x,y )----1a
class Punto {
    private x: number;
    private y: number;
    
// Definisco il costruttore ----1b
    constructor(_x,  _y) {
       if(typeof _x === 'number' && typeof _y === 'number') {
        this.x = _x;
        this.y = _y;
       } else {
        throw new TypeError();
       } 
    };

    //Setters
    public setx(_newx: number): void {
        this.x = _newx;
    };
    public sety(_newy: number): void {
        this.y = _newy;
    };
    

    //Getters
    public getx(): number{
        return this.x;
    };

    public gety(): number{
        return this.y;
    };



//  Metodo per il calcolo della distanza euclidea fra due punti---1c

public Distanza(punto): number {
    if (punto instanceof Punto) {
        return Math.sqrt(Math.pow((punto.getx() - this.x), 2) + Math.pow((punto.gety() - this.y), 2));
    } else {
        throw new TypeError();
    }  
  };

};
console.log('Coordinate A e B')
let puntoA = new Punto(2, 6);
let puntoB = new Punto(10, 24);
console.log(puntoA);
console.log(puntoB);
console.log('La distanza tra A e B: ' + puntoA.Distanza(puntoB));


console.log('\n\n=========================================================================')


console.log('\n\n========Esercizio 2========')

//Creare una classe che rappresenta un Triangolo che prende in ingresso la lunghezza dei tre lati----2a
class Triangolo {
    private a: number;
    private b: number;
    private c: number;

// Definisco il costruttore ----2b
    constructor(_a, _b, _c) {
 
        if (typeof _a === 'number' && typeof _b === 'number' && typeof _c === 'number') {
            if (_a <= _b + _c && _b <= _a + _c && _c <= _a + _b) {
                this.a = _a;
                this.b = _b;
                this.c = _c;
            } else {
                throw new Error('Errore: lunghezza di un lato maggiore della somma degli altri due');
            }
        } else {
            throw new TypeError();
        };
 
    };

    //Setters
    public seta(_newa: number): void {
        this.a = _newa;
    };
    public setb(_newb: number): void {
        this.b = _newb;
    };
    public setc(_newc: number): void {
        this.c = _newc;
    };

    //Getters
    public geta(): number{
        return this.a;
    };

    public getb(): number{
        return this.b;
    };

    public getc(): number{
        return this.c;
    };

//Creare un metodo che restituisce se un Triangolo è scaleno, isoscele o equilatero----2c

   public tipoTriangolo(): string {
    if (this.a != this.b && this.a != this.c && this.b != this.c) {
        return 'Triangolo Scaleno.';
    } else if (this.a == this.b && this.b == this.c) {
        return 'Triangolo Equilatero.';
    } else {
        return 'Triangolo Isoscele.';
    }
}

//Creare un metodo che calcola l'Area ( attenzione al tipo di Triangolo) ed il perimetro di un Triangolo----2d

public calcolaPerimetro(): number {
    return this.a + this.b + this.c;
};

public calcolaArea(): number {
    let semiPerimetro = this.calcolaPerimetro() / 2;
    let areaAlQuadrato = semiPerimetro * (semiPerimetro - this.a) * (semiPerimetro - this.b) * (semiPerimetro - this.c);
    return Math.sqrt(areaAlQuadrato);
}

};

console.log('\n\nTriangolo1\n')
let Triangolo1: Triangolo = new Triangolo(5, 4, 6);
console.log('Perimetro: ' + Triangolo1.calcolaPerimetro());
console.log('Area: ' + Triangolo1.calcolaArea());
console.log('Tipo: ' + Triangolo1.tipoTriangolo());


console.log('\n\nTriangolo2\n')
let Triangolo2: Triangolo = new Triangolo(5, 5, 8);
console.log('Perimetro: ' + Triangolo2.calcolaPerimetro());
console.log('Area: ' + Triangolo2.calcolaArea());
console.log('Tipo: ' + Triangolo2.tipoTriangolo());


console.log('\n\nTriangolo3\n')
let Triangolo3: Triangolo = new Triangolo(5, 5, 5);
console.log('Perimetro: ' + Triangolo3.calcolaPerimetro());
console.log('Area: ' + Triangolo3.calcolaArea());
console.log('Tipo: ' + Triangolo3.tipoTriangolo());


console.log('\n\nTriangolo4\n')
let Triangolo4: Triangolo = new Triangolo(5, 5, 15);
console.log('Perimetro: ' + Triangolo4.calcolaPerimetro());
console.log('Area: ' + Triangolo4.calcolaArea());
console.log('Tipo: ' + Triangolo4.tipoTriangolo());