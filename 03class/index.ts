/*
class point{
    x : number;
    y : number;

    constructor(x: number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    display()
    {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
}

let p = new point(10,20);
p.display();

*/
// super keyword

class animal{
    name : string;

    constructor(name : string)
    {
        this.name = name;
    }

    display()
    {
        console.log(`Animal : ${this.name}`);
    }
}

class dog extends animal{
    breed : string;
    constructor(name:string, breed:string)
    {
        super(name);
        this.breed = breed;
    }

    display() : void{
        console.log(`Dog : ${this.name}, breed : ${this.breed}`);
    }
}

let d = new dog("String", "Labra");
d.display()
