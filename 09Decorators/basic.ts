function Logger(target : Function)
{
    console.log("Doing Something");
}

@Logger
class User{
    name:string = "Vaibhav";
    age:number = 25;

    constructor(){
        console.log("User class constructor called");
    }
}
let u = new User();

export{}