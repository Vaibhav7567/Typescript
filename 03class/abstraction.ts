/*
abstract class human{
    name : string;

    abstract age : number
   
    display(){
        console.log(`${this.name}'s age is ${this.age}`)
    };
}

class person1 extends human{
    age = 10;
    name = "Vaibhav"
}
let p = new person1();
p.display()
*/

abstract class Shape{
    abstract area() : number ;
    abstract perimeter() : number;
    
    describe () : void{
        console.log(`Area: ${this.area()} Perimeter : ${this.perimeter()}`);
    }
}

class Circle extends Shape{
    constructor(private radius : number)
    {
        super();
    }
    area() : number{
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius; 
    }       
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10,20);

circle.describe();
rectangle.describe();

