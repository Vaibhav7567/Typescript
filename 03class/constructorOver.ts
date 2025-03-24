class Person{
    name: string;
    age:number;
    email?:string

    constructor(name:string, age:number);
    constructor(name:string, age:number, email:string);
    constructor(name:string, age:number, email?:string)
    {
        this.name = name;
        this.age = age;
        if(email){
            this.email = email;
        }
    }
}

const person1 = new Person("Vaibhav", 21);
const person2 = new Person("Vaibhav", 21, "vaibhav@gmail.com");

