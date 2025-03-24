function add(a: number) {
    return a + 2;
}

// console.log(add(5))

function toUpper(name: string) {
    return name.toUpperCase();
}

// console.log(toUpper("2"))


function getValue(myVal: number): boolean | string {
    if (myVal > 2)
        return true;

    else
        return "200 ok";
}

// console.log(getValue(2));

const getHello = (s: string): string => {
    return ""
};

// const heros = ['thor', 'spiderman', 'ironman']
// // const heros = [1,2,3]
// heros.map(hero =>{
//     return `Heros ${heros.at(1)}`
// })


function consoleError(errmsg: string): void {
    // console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}


const greet: (name: string) => void = (name) => {
    console.log(name);
}

// greet.namee = "Vaibhav"
function person(name: string): string {
    return "";
}
// person.name = "Vaibhav"; // allowed 
person("");

type Person = {
    namee : string,
    (age:number) : number,
}

function printPerson(fn : Person)
{
    console.log(fn.namee + " " + fn(10));
}

function personAfterThree(pAge : number)
{
    return pAge + 3;
}

personAfterThree.namee = "Vaibhav";

printPerson(personAfterThree);





export { }