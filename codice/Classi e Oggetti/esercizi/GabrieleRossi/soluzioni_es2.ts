/**
 * 2a. Creare una classe che rappresenta un Triangolo che prende in ingresso la lunghezza dei tre lati con relativi getters e setters
 * 
 * 2b. La Classe Triangolo dovrà avere un controllo nel costruttore in cui si verifica che i lati passati in ingresso siano di 
 * tipo number, in caso negativo bisogna lanciare un errore ( throw TypeError ) che impedisce di creare l'oggetto.
 * Un Triangolo per esistere ha bisogno che la lunghezza di un lato non sia mai superiore alla somma delle lunghezze
 * degli altri due: verificare nel costruttore anche questa eventualità; in caso contrario lanciare un errore generico (throw new Error('messaggio di errore'))
 * 
 * 2c. Creare un metodo che restituisce se un Triangolo è scaleno, isoscele o equilatero
 * 
 * 2d. Creare un metodo che calcola l'Area ( attenzione al tipo di Triangolo) ed il perimetro di un Triangolo.
 */

interface ITriangle {
    sideA: any;
    sideB: any;
    sideC: any;

    getSideA(): number;
    setSideA(_sideA: number): void;
    getSideB(): number;
    setSideB(_sideB: number): void;
    getSideC(): number;
    setSideC(_sideC: number): void;
    calculatePerimeter(): number;
    calculateArea(): number;
};

class Triangle implements ITriangle {
    sideA: any;
    sideB: any;
    sideC: any;

    constructor(_sideA: any, _sideB: any, _sideC: any) {
        if (typeof _sideA === "number" && typeof _sideB === "number" && typeof _sideC === "number") {
            if ((_sideA < (_sideB + _sideC)) && (_sideB < (_sideA + _sideC)) && (_sideC < (_sideA + _sideB))) {
                this.sideA = _sideA;
                this.sideB = _sideB;
                this.sideC = _sideC;
            } else {
                throw new Error('La lunghezza di uno dei lati del triangolo non può essere superiore alla somma degli altri due!');
            }
        } else {
            throw TypeError('I valori immessi per definire i lati del triangolo devono essere di tipo numerico.');
        }
    };

    getSideA(): number {
        return this.sideA;
    };
    setSideA(_sideA: number): void {
        this.sideA = _sideA;
    };
    getSideB(): number {
        return this.sideB;
    };
    setSideB(_sideB: number): void {
        this.sideB = _sideB;
    };
    getSideC(): number {
        return this.sideC;
    };
    setSideC(_sideC: number): void {
        this.sideC = _sideC;
    };

    printTriangleType(): void {
        if (this.sideA === this.sideB && this.sideA === this.sideC) {
            console.log('Ciao, sono un triangolo equilatero.');
        } else if (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideA !== this.sideC) {
            console.log('Ciao, sono un triangolo scaleno.');
        } else {
            console.log('Ciao, sono un triangolo equilatero.');
        }
    };

    calculatePerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    };

    calculateArea(): number {
        let height: number;
        if (this.sideA === this.sideB && this.sideA === this.sideC) {
            height = this.sideA * (Math.sqrt(3));
            return (this.sideA * height) / 2;
        } else if (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideA !== this.sideC) {
            let halfPerimeter = this.sideA + this.sideB + this.sideC;
            return Math.sqrt((halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter * this.sideC)));
        } else {
            if (this.sideA === this.sideB) {
                height = Math.sqrt((Math.pow(this.sideA, 2) + Math.pow((this.sideC / 2), 2)));
                return (this.sideC * height) / 2;
            } else if (this.sideB === this.sideC) {
                height = Math.sqrt((Math.pow(this.sideB, 2) + Math.pow((this.sideA / 2), 2)));
                return (this.sideA * height) / 2;
            } else {
                height = Math.sqrt((Math.pow(this.sideA, 2) + Math.pow((this.sideB / 2), 2)));
                return (this.sideB * height) / 2;
            }
        }
    }
};

let triangle1 = new Triangle(4, 4, 4);
let triangle2 = new Triangle(4, 3, 5);
let triangle3 = new Triangle(3, 2, 3);

triangle1.printTriangleType();
triangle2.printTriangleType();
triangle3.printTriangleType();

console.log(`Triangolo 1\n\nPerimetro: ${triangle1.calculatePerimeter()}, Area: ${triangle1.calculateArea()}\n\n`);
console.log(`Triangolo 2\n\nPerimetro: ${triangle2.calculatePerimeter()}, Area: ${triangle2.calculateArea()}\n\n`);
console.log(`Triangolo 3\n\nPerimetro: ${triangle3.calculatePerimeter()}, Area: ${triangle3.calculateArea()}\n\n`);