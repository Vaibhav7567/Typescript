

function makeDate(timestamp : number) : Date;
function makeDate(day:number, month:number, year:number ) : Date;
function makeDate(monthOrTimestamp:number, day?:number, year?:number) :Date{
    if(day!==undefined && year!== undefined)
    {
        return new Date(year, monthOrTimestamp, day);
    }
    else
        return new Date(monthOrTimestamp);
}

const date1 = makeDate(12345678);

const date2 = makeDate(5,5,5);
// const date3 = makeDate(5,5);

console.log(date1);
console.log(date2);


/*
function name(name1, name2)
{
    return name1 + name2;
}

function name(name1, name2, name3)
{
    return name1 + name2 + name3;
}

name("vaibhav", "maheshwari");
This is not allowed in typescript due to javascript nature
that is the reason we need to implement function signature
*/


function greet(greetings1: string) : string;

function greet(greetings2 : string, greetings3:string) : string;

function greet(greetings7 : string, greetings8:string, greetings9:string) : string;

function greet(greetings4:string, greetings5?:string, greetings6?: string) : string{
    if( greetings5 !==undefined && greetings6 !== undefined)
    {
        return greetings4 + greetings5 + greetings6;
    }
    else if (greetings5 !== undefined)
    {
        return greetings4 + greetings5;
    }

    return greetings4;
}

const person1 = greet("Hello");
const person2 = greet("Jay shree ram ", "Har har Mahadev ")
const person3 = greet("Hi ", "hello ", "namasate ");
console.log(person1);
console.log(person2);
console.log(person3);
export{}