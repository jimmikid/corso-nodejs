// Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters

class Point {
    constructor(private _x, private _y) {
        if (Number(_x) && Number(_y)) {
            this._x = _x
            this._y =_y
        } else {
            throw new TypeError("Properties should be of type number.");
        }
    }
    
    get x(): number {
        return this._x
    }

    get y(): number {
        return this._y
    }

    set x(x: number) {
        this._x = x
    }

    set y(y: number) {
        this._y = y
    }

    public calculateDistance(point2: Point): number {
        return Math.sqrt( Math.pow( (point2.x - this.x) , 2) + Math.pow((point2.y - this.y), 2) )
    }
}

let point1 = new Point(1, 2);
let point2 = new Point(2, 3);
console.log(point1.calculateDistance(point2));

//Creare una classe che rappresenta un Triangolo che prende in ingresso la lunghezza dei tre lati con relativi getters e setters

class Triangle {
    private readonly EQUILATERAL = 1
    private readonly SCALENE = 2
    private readonly ISOSCELES = 3
    private base: number;
    private typetreangle: number = null
    constructor(private _part1: number, private _part2: number, private _part3: number) {
        if(Number(_part1) && Number(_part1) && Number(_part1)) {
            this._part1 = _part1
            this._part2 = _part2
            this._part3 = _part3
        } else if(this.controllTriangleLength()) {
            throw new Error("Dead triangle =)")
        } else {
            throw new TypeError("Properties should be of type number.")
        }

    }
    private controllTriangleLength(): boolean {
        if(this._part1 > (this._part2 + this._part3) || this._part2 > (this._part1 + this._part3) || this._part3 > (this._part1 + this._part2) ) {
            return true
        } else {
            return false
        }
    }
    public checkRectangleType(): void {
        if(this._part1 === this._part2 && this._part2 === this._part3 ) {
            this.typetreangle = this.EQUILATERAL
            console.log("Treangle is equilateral");
        } else if (this._part1 !== this._part2 && this._part2 !== this._part3) {
            this.typetreangle = this.SCALENE
            console.log("Treangle is scalene");
        } else {
            this.typetreangle = this.ISOSCELES
            console.log("Treangle is isosceles");
        }
    }

    private findBase(): number {
        let base;
        if (this._part1 != this._part2 && this._part1 != this._part3) {
            base = this._part1
            this.base = 1
        } else if (this._part2 != this._part1 && this._part2 != this._part3) {
            base = this._part2
            this.base = 2
        } else {
            base = this._part3  
            this.base = 3
        }
        if (base) {
           return base 
        } else {
            throw new Error("Not an isosceles treangle")
        }
    }

    public calculateArea(): void {
        if(this.typetreangle === null) {
            this.checkRectangleType()
        } 
        if(this.typetreangle === this.EQUILATERAL) {
            let altezza = this._part1 * Math.sqrt(3) / 2
            console.log(`Rectangle is equilateral. Area: ${Math.pow(this._part1, 2) * Math.sqrt(3) / 4}`);
        } else if(this.typetreangle === this.SCALENE) {
            console.log(`Rectangle is scalene. Area: ${0.5 * this._part1 * this._part2 * Math.sin(this._part1)}`);
        } else {
            let base = this.findBase();
            if (this.base === 1) {
                console.log(`Rectangle is isosceles. Area: ${0.5 * Math.pow(this._part2, 2) * Math.sin(this._part1)}`);
            } else if (this.base === 2) {
                console.log(`Rectangle is isosceles. Area: ${0.5 * Math.pow(this._part1, 2) * Math.sin(this._part2)}`);
            } else {
                console.log(`Rectangle is isosceles. Area: ${0.5 * Math.pow(this._part1, 2) * Math.sin(this._part3)}`);
            }
        }
        
    }
}

let triangleEquilateral = new Triangle(3, 3, 3)
let triangleScalene = new Triangle(3, 2, 1)
let triangleIsosceles = new Triangle(3, 3, 8)

triangleEquilateral.checkRectangleType()
triangleScalene.checkRectangleType()
triangleIsosceles.checkRectangleType()
