class Person {
    private _name: string;         // Private field
    private _age: number;          // Private field

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter → Read the private field
    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    // Setter → Update the private field
    set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        } else {
            console.log("Invalid name.");
        }
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Invalid age.");
        }
    }
}

const person = new Person("Alice", 25);

// ✅ Accessing private fields using getters
console.log(person.name);   // Output: Alice
console.log(person.age);    // Output: 25

// ✅ Modifying private fields using setters
person.name = "Bob";        
person.age = 30;

console.log(person.name);   // Output: Bob
console.log(person.age);    // Output: 30
