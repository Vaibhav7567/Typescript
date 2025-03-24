var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (type1, type2) {
        if (typeof type1 === "number" && typeof type2 === 'number') {
            return type1 + type2;
        }
        else {
            return type1.toString() + type2.toString();
        }
    };
    return Calculator;
}());
var cal = new Calculator();
console.log(cal.add(1, 2));
console.log(cal.add("hello", " world"));
