"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeDate(monthOrTimestamp, day, year) {
    if (day !== undefined && year !== undefined) {
        return new Date(year, monthOrTimestamp, day);
    }
    else
        return new Date(monthOrTimestamp);
}
var date1 = makeDate(12345678);
var date2 = makeDate(5, 5, 5);
// const date3 = makeDate(5,5);
console.log(date1);
console.log(date2);
// function greet(greetings4:string, greetings5:string, greetings6: string, greetingss10?:string) : string{
//     if( greetings5 !==undefined && greetings6 !== undefined && greetingss10 !== undefined)
//     {
//         return greetings4 + greetings5 + greetings6;
//     }
//     else if (greetings5 !==undefined && greetings6 !== undefined)
//     {
//         return greetings5 + greetings6;
//     }
//     else{
//         return greetings4;
//     }
// }
function greet(greetings4, greetings5, greetings6) {
    if (greetings5 !== undefined && greetings6 !== undefined) {
        return greetings4 + greetings5 + greetings6;
    }
    else if (greetings4 !== undefined && greetings5 !== undefined) {
        return greetings4 + greetings5;
    }
    else {
        return greetings4;
    }
}
var person1 = greet("Hello");
var person2 = greet("Jay shree ram ", "Har har Mahadev ");
var person3 = greet("Hi ", "hello ", "namasate ");
console.log(person1);
console.log(person2);
console.log(person3);
