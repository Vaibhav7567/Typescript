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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.display = function () {
        console.log("Animal : ".concat(this.name));
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    dog.prototype.display = function () {
        console.log("Dog : ".concat(this.name, ", breed : ").concat(this.breed));
    };
    return dog;
}(animal));
var d = new dog("String", "Labra");
d.display();
