var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter → Read the private field
        get: function () {
            return this._name;
        },
        // Setter → Update the private field
        set: function (value) {
            if (value.length > 0) {
                this._name = value;
            }
            else {
                console.log("Invalid name.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
            else {
                console.log("Invalid age.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Alice", 25);
// ✅ Accessing private fields using getters
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 25
// ✅ Modifying private fields using setters
person.name = "Bob";
person.age = 30;
console.log(person.name); // Output: Bob
console.log(person.age); // Output: 30
