// Creare una classe che rappresenta un punto del piano con coordinate ( x,y ) con relativi getters e setters
class Point {
    constructor(private _x, private _y) {
        if (Number(_x) && Number(_y)) {
            this._x = _x
            this._y =_y
        } else {
            throw new TypeError("Properties should be of type number.")
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
        return Math.sqrt(Math.pow( (point2.x - this.x) , 2) + Math.pow((point2.y - this.y), 2) )
    }
}

console.log("==================Exercise_1========================")
let point1 = new Point(1, 2)
let point2 = new Point(2, 3)
console.log(`Distance between two points: point1(${point1.x}, ${point1.y}) and point2(${point2.x}, ${point2.y}) is ${point1.calculateDistance(point2)}`)

//Creare una classe che rappresenta un Triangolo che prende in ingresso la lunghezza dei tre lati con relativi getters e setters
class Triangle {
    private readonly EQUILATERAL = 1
    private readonly SCALENE = 2
    private readonly ISOSCELES = 3
    private typeTriangle: number = null
    constructor(private _part1: number, private _part2: number, private _part3: number) {
        if(Number(_part1) && Number(_part2) && Number(_part3)) {
            this._part1 = _part1
            this._part2 = _part2
            this._part3 = _part3
            if(this.controllTriangleLength()) {
                throw new Error("Dead triangle =)")
            } 
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
            this.typeTriangle = this.EQUILATERAL
            console.log("Triangle is equilateral")
        } else if (this._part1 !== this._part2 && this._part2 !== this._part3) {
            this.typeTriangle = this.SCALENE
            console.log("Triangle is scalene")
        } else {
            this.typeTriangle = this.ISOSCELES
            console.log("Triangle is isosceles")
        }
    }

    public calculateArea(): void {
        if(this.typeTriangle === null) {
            this.checkRectangleType()
        } 
        if(this.typeTriangle === this.EQUILATERAL) {
            // Through height
            console.log(`Rectangle is equilateral. Area: ${Math.pow(this._part1, 2) * Math.sqrt(3) / 4}`)
        } else { 
            // Geron formula
            let p = 0.5 * (this._part1 + this._part2 + this._part3)
            console.log(`Rectangle is scalene. Area: ${Math.sqrt(p * (p-this._part1) * (p - this._part2) * (p-this._part3))}`)
        }
    }
}
console.log("==================Exercise_2========================")
let triangleEquilateral = new Triangle(3, 3, 3)
let triangleScalene = new Triangle(6, 4, 3)
let triangleIsosceles = new Triangle(6, 6, 3)

triangleEquilateral.checkRectangleType()
triangleScalene.checkRectangleType()
triangleIsosceles.checkRectangleType()

triangleEquilateral.calculateArea()
triangleScalene.calculateArea()
triangleIsosceles.calculateArea()