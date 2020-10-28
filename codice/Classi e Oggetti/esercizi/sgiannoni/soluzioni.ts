console.log("1a.  Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters\n");
console.log("\n 1b.  La Classe Punto dovrà avere un controllo nel costruttore in cui si verifica che entrambi \n i parametri del costruttore siano number, in caso negativo bisogna lanciare un errore \n( throw TypeError ) che impedisce di creare l'oggetto e ferma l'esecuzione del programma)\n");
console.log("\n 1c.  La Classe Punto dovrà contenere un metodo per il calcolo della distanza euclidea fra due punti. \n La formula per il calcolo della distanza fra due punti è la seguente:\n d(p1, p2) = sqrt( pow((x2-x1),2) + pow((y2-y1),2) ) \n Se non risultasse chiara potete trovare la formula al seguente indirizzo \n https://www.youmath.it/formulari/formulari-di-geometria-analitica/426-distanza-tra-due-punti-nel-piano.html\n\n");

class Punto {
    private coordX: number;
    private coordY: number;

    constructor(_coordX, _coordY) {
        if (typeof _coordX === 'number' && typeof _coordY === 'number') {
            this.coordX = _coordX;
            this.coordY = _coordY;
        } else {
            throw new TypeError();
        }
    };

    //Getter e Setter
    public setCoordX(_nuovaCoordX: number): void{
        this.coordX = _nuovaCoordX;
    };
    public setCoordY(_nuovaCoordY: number): void{
        this.coordY = _nuovaCoordY;
    };
    public getCoordX(): number{
        return this.coordX;
    };
    public getCoordY(): number{
        return this.coordY;
    }; 
    public calcolaDistanza(punto): number {
        if (punto instanceof Punto) {
            return Math.sqrt(Math.pow((punto.getCoordX() - this.coordX), 2) + Math.pow((punto.getCoordY() - this.coordY), 2));
        } else {
            throw new TypeError();
        }
    };
}

let puntoA = new Punto (1,2)
let puntoB = new Punto (3,4)
let distanzaAB: number = puntoA.calcolaDistanza(puntoB);
console.log(puntoA);
console.log(puntoB);
console.log(`Distanza tra A e B: ${distanzaAB}`);

