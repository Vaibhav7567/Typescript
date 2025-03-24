"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayFirstElement(arr) {
    return arr[0];
}
var response = {
    data: {
        // name:"vaibhav"  this will give me an error because i havent specified it in the apiresponse
        status: 30 // not giving any error because already passed in the generic type
    },
    isError: true
};
function anyType(a) {
    return a;
}
var numBox = { value: 100 }; // Holds a number
var strBox = { value: "Hello" }; // Holds a string
var boolBox = { value: true }; // Holds a boolean
var v = { value: 900.2 };
function practice(arg) {
    console.log(arg.num);
    return arg;
}
console.log(practice({ num: 1, name: "Vaibhav" }));
