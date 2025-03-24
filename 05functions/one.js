"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a) {
    return a + 2;
}
// console.log(add(5))
function toUpper(name) {
    return name.toUpperCase();
}
// console.log(toUpper("2"))
function getValue(myVal) {
    if (myVal > 2)
        return true;
    else
        return "200 ok";
}
// console.log(getValue(2));
var getHello = function (s) {
    return "";
};
// const heros = ['thor', 'spiderman', 'ironman']
// // const heros = [1,2,3]
// heros.map(hero =>{
//     return `Heros ${heros.at(1)}`
// })
function consoleError(errmsg) {
    // console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
var greet = function (name) {
    console.log(name);
};
// greet.namee = "Vaibhav"
function person(name) {
    return "";
}
// person.name = "Vaibhav"; // allowed 
person("");
function printPerson(fn) {
    console.log(fn.namee + " " + fn(10));
}
function personAfterThree(pAge) {
    return pAge + 3;
}
personAfterThree.namee = "Vaibhav";
printPerson(personAfterThree);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
