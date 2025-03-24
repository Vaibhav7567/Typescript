class Base{
    greet()
    {
        console.log("I am Base class");
    }
}

class Child extends Base{
    greet(name?:string){
        if(name === undefined)
            super.greet();

        else
            console.log("I am dervied class");
    }
}

let child = new Child();
child.greet("")
child.greet("Vaibhav")