"use strict";
// as
Object.defineProperty(exports, "__esModule", { value: true });
/*
let name : unknown = "Vaibhav"

// method 1
let strlen1 : number = (name as string).length

// method 2
let strlen2 : number = (<string>name).length

console.log(strlen1);
console.log(strlen2);
*/
/*
function getID() : number | string{
    return Math.random() > 0.5 ? 42 : "Forty Two";
}

let id = getID();
console.log((id as string).toUpperCase);


let value : unknown = "Minall"

let len = (value as string).length
*/
// as const
/*
let arr = [1,2,3,4] as const

arr.push(1); // not possible

console.log(arr);
*/
// let name : string | null = "Vaibhav"
// console.log(name.toUpperCase());
// name = null;
// console.log(name.toUpperCase) // will throw compile time error
/*
type playlist = {
    id?:string,
    name : string
}

function validateId(pl : playlist)
{
    if(!pl.id)
    {
        throw Error("No id found");
    }
}
const myp1 : playlist = {name  : "Vaibhav", id:"101"}
validateId(myp1)
const id : string= myp1.id!;

console.log(id);
*/
var reg_no = new Map([
    ['Vaibhav', 101],
    ['Minall', 102]
]);
var trackNumber = reg_no.get('Minall');
console.log(trackNumber);
