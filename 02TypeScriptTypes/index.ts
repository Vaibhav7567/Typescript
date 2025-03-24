// boolean

/*
let isTrue: boolean = true;
let isFalse: boolean = true;

console.log(isTrue);
*/

// number
/*
for(let i : number = 0; i <10; i++)
{
    console.log(i);
}
*/

// string
/*
let name : string = "Vaibhav Maheshwari"
console.log(name);
*/

// void 

/*
function sayHello() : void{
    console.log("Nothing will get printed");
}
sayHello();
*/

/*
function doNothing() : void{
    return;
}



console.log(doNothing());
*/

// NULL and UNdefined 
/*
function getLengthSafe(str : string | null | undefined) : number
{
    if(str===null || str===undefined)
    {
        return 0;
    }
        

    return str.length;
}
console.log(getLengthSafe("Vaibhav"))
*/



export{}
