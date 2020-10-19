/*
2a. Creare una classe che rappresenta un Triangolo che prende in ingresso la lunghezza dei tre lati con relativi getters e setters
*/
class Triangolo {
    private lato1: number;
    private lato2: number;
    private lato3: number;

    /*
    2b. La Classe Triangolo dovrà avere un controllo nel costruttore in cui si verifica che i lati passati in ingresso siano di 
    tipo number, in caso negativo bisogna lanciare un errore ( throw TypeError ) che impedisce di creare l'oggetto.
          
    Un Triangolo per esistere ha bisogno che la lunghezza di un lato non sia mai superiore alla somma delle lunghezze
    degli altri due: verificare nel costruttore anche questa eventualità; in caso contrario lanciare un errore generico 
    (throw new Error('messaggio di errore'))
    */

    constructor(_lato1, _lato2, _lato3) {

        if (typeof _lato1 === 'number' && typeof _lato2 === 'number' && typeof _lato3 === 'number') {
            if (_lato1 <= _lato2 + _lato3 && _lato2 <= _lato1 + _lato3 && _lato3 <= _lato1 + _lato2) {
                this.lato1 = _lato1;
                this.lato2 = _lato2;
                this.lato3 = _lato3;
            } else {
                throw new Error('Attenzione la lunghezza di un lato è maggiore della somma degli altri due');
            }
        } else {
            throw new TypeError();
        };

    };

    public setLato1(_nuovoLato1: number): void {
        this.lato1 = _nuovoLato1;
    };
    public setLato2(_nuovoLato2: number): void {
        this.lato2 = _nuovoLato2;
    };
    public setLato3(_nuovoLato3: number): void {
        this.lato3 = _nuovoLato3;
    };

    public getLato1(): number {
        return this.lato1;
    };
    public getLato2(): number {
        return this.lato2;
    };
    public getLato3(): number {
        return this.lato3;
    };
    /*
    2c. Creare un metodo che restituisce se un Triangolo è scaleno, isoscele o equilatero
    */
    public tipoTriangolo(): string {
        if (this.lato1 != this.lato2 && this.lato1 != this.lato3 && this.lato2 != this.lato3) {
            return 'Questo è un triangolo scaleno!';
        } else if (this.lato1 == this.lato2 && this.lato2 == this.lato3) {
            return 'Questo è un triangolo equilatero!';
        } else {
            return 'Questo è un triangolo isoscele!';
        }
    }
    /*
    2d. Creare un metodo che calcola l'Area ( attenzione al tipo di Triangolo) ed il perimetro di un Triangolo.
    */
    public calcolaPerimetro(): number {
        return this.lato1 + this.lato2 + this.lato3;
    };

    public calcolaArea(): number {
        let semiPerimetro = this.calcolaPerimetro() / 2;
        let erone = semiPerimetro * (semiPerimetro - this.lato1) * (semiPerimetro - this.lato2) * (semiPerimetro - this.lato3);
        return Math.sqrt(erone);
    }
};

let nuovoTriangolo: Triangolo = new Triangolo(6, 6, 6);
console.log('Perimetro: ' + nuovoTriangolo.calcolaPerimetro());
console.log('Area: ' + nuovoTriangolo.calcolaArea());
console.log('Tipo di triangolo: ' + nuovoTriangolo.tipoTriangolo());