/*
Esercizi su Classi e Oggetti:
*/

/*
1a.  Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters
*/

class Punto {
    private coordX: number;
    private coordY: number;

    /*
    1b.  La Classe Punto dovrà avere un controllo nel costruttore in cui si verifica 
        che entrambi i parametri del costruttore siano number, in caso negativo 
        bisogna lanciare un errore ( throw TypeError ) che impedisce di creare l'oggetto e ferma l'esecuzione del programma
    */

    constructor(_coordX, _coordY) {
        if (typeof _coordX === 'number' && typeof _coordY === 'number') {
            this.coordX = _coordX;
            this.coordY = _coordY;
        } else {
            throw new TypeError();
        }
    };
    // definisco i setter
    public setCoordX(_nuovaCoordX: number): void {
        this.coordX = _nuovaCoordX;
    };
    public setCoordY(_nuovaCoordY: number): void {
        this.coordY = _nuovaCoordY;
    };

    // definisco i getter
    public getCoordX(): number {
        return this.coordX;
    };

    public getCoordY(): number {
        return this.coordY;
    };
    /*
    1c.  La Classe Punto dovrà contenere un metodo per il calcolo della distanza euclidea fra due punti.
        La formula per il calcolo della distanza fra due punti è la seguente:
        d(p1, p2) = sqrt( pow((x2-x1),2) + pow((y2-y1),2) )
        Se non risultasse chiara potete trovare la formula al seguente indirizzo
        https://www.youmath.it/formulari/formulari-di-geometria-analitica/426-distanza-tra-due-punti-nel-piano.html
    
    
        ATTENZIONE: il metodo che calcola la distanza fra due punti deve verificare che effettivamente stia operando su
        elementi di classe Punto!
    */


    public calcoloDistanza(punto): number {
        if (punto instanceof Punto) {
            return Math.sqrt(Math.pow((punto.getCoordX() - this.coordX), 2) + Math.pow((punto.getCoordY() - this.coordY), 2));
        } else {
            throw new TypeError();
        }
    };
}

let punto1: Punto = new Punto(4, 8);
let punto2: Punto = new Punto(7, 10);
console.log(punto1);
console.log(punto2);
console.log('la distanza tra i due punti é: ' + punto1.calcoloDistanza(punto2));