/**
 * 1a.  Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters
 *
 * 1b.  La Classe Punto dovrà avere un controllo nel costruttore in cui si verifica
 * che entrambi i parametri del costruttore siano number, in caso negativo
 * bisogna lanciare un errore ( throw TypeError ) che impedisce di creare l'oggetto e ferma l'esecuzione del programma
 * 
 * 1c.  La Classe Punto dovrà contenere un metodo per il calcolo della distanza euclidea fra due punti.
 * La formula per il calcolo della distanza fra due punti è la seguente:
 * d(p1, p2) = sqrt( pow((x2-x1),2) + pow((y2-y1),2) )
 * Se non risultasse chiara potete trovare la formula al seguente indirizzo
 * https://www.youmath.it/formulari/formulari-di-geometria-analitica/426-distanza-tra-due-punti-nel-piano.html
 * 
 * ATTENZIONE: il metodo che calcola la distanza fra due punti deve verificare che effettivamente stia operando su elementi di classe Punto!
 */

class Point {
    private x: number;
    private y: number;

    public getX(): number {
        return this.x;
    };

    public setX(_x: number): void {
        this.x = _x;
    };
    public getY(): number {
        return this.y;
    };
    public setY(_y: number): void {
        this.y = _y;
    };

    constructor(_x: any, _y: any) {
        try {
            if (typeof _x === "number" && typeof _y === "number") {
                this.x = _x;
                this.y = _y;
            } else {
                throw 'I valori immessi per definire le coordinate del punto devono essere di tipo numerico.';
            }
        } catch (error) {
            throw new TypeError(error);
        }
    }

    static calculateDistance(p1: any, p2: any): number {
        let distance: number;
        try {
            if (p1 instanceof Point && p2 instanceof Point) {
                distance = Math.sqrt(Math.pow((p2.getX() - p1.getX()), 2) + Math.pow((p2.getY() - p1.getY()), 2));
                return distance;
            } else {
                throw 'I valori immessi per calcolare la distanza non sono l\'istanza di un PUNTO.';
            }
        } catch (error) {
            throw new TypeError(error);
        }
    }
}

let p1 = new Point(1, 2);
let p2 = new Point(2, 5);
let distance: number = Point.calculateDistance(p1, p2);

console.log(`\n\n\nDistanza euclidea tra i due punti: ${distance}\n\n\n`);