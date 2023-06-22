function init() {
    class Figure {
        constructor(units = 'cm') {
            this._unit = units;
        }

        get area() {
            return this.calculateArea();
        }

        changeUnits(units) {
            this._unit = units;
        }

        get unit() {
            return this._unit;
        }

        set unit(value) {
            this._unit = value;
        }

        calculateArea() {
            return 0;
        }

        toString() {
            return `Figures units: ${this.unit}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        calculateArea() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.unit} Area: ${this.calculateArea()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, length, unit) {
            super(unit);
            this.width = width;
            this.length = length;
        }

        calculateArea() {
            let area = this.width * this.length;
            // if (this.unit === 'cm') {

            // }
            if(this.unit === "mm"){
                area *= 100;
            }
            return area;
        }

        toString() {
            let area = this.calculateArea();
            if (this.unit === 'mm') {
                return `Figures units: ${this.unit} Area: ${area} - width: ${this.width * 10}, height: ${this.length * 10}`;
            } else if (this.unit === 'cm') {
                return `Figures units: ${this.unit} Area: ${area} - width: ${this.width}, height: ${this.length}`;
            }
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}

let { Figure, Circle, Rectangle } = init();
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12