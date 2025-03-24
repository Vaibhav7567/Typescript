var dog = /** @class */ (function () {
    function dog() {
    }
    dog.prototype.voice = function () {
        console.log("I am barking");
    };
    return dog;
}());
var d = new dog();
d.voice();
