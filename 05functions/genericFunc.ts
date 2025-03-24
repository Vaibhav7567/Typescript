function arrayFirstElement(arr: any[])
{
    return arr[0];
}

// function arrayFirstElement will have return type any

/*
function arrayFirstElementt(arr: any[])
{
    return arr[2];
}
*/

/*
const num  = ["vaibhav", true, 1];

console.log(typeof arrayFirstElement(num));



function firstElement<Type>(arr:Type[]) : Type | undefined{
        return arr[1];
}

console.log(typeof firstElement(num));

*/

/*
function mapping<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }
   
const parsed = mapping(["1", "2", "3"], (n) => parseInt(n));


console.log(parsed);  
*/


/*
type ApiResponse <DATA>= {
    data : DATA,
    isError : boolean
}


type userResponse = ApiResponse<{name:string, age:number}>
const response : userResponse ={
    data:{
        name : "XYZ",
        age : 28
    } ,
    isError: true
}
response.data.age = 30;
let age = response.data.age
console.log(age);
*/
type ApiResponse <DATA = {status:number}>= {
    data : DATA,
    isError : boolean
}

const response : ApiResponse ={
    data:{
        // name:"vaibhav"  this will give me an error because i havent specified it in the apiresponse
        status:30 // not giving any error because already passed in the generic type
    } ,
    isError: true
}

function anyType<Type>(a : Type){
    return a;
}

interface Box<T> {
    value: T;
}

const numBox: Box<number> = { value: 100 };       // Holds a number
const strBox: Box<string> = { value: "Hello" };   // Holds a string
const boolBox: Box<boolean> = { value: true };    // Holds a boolean
const v : Box<number> = {value : 900.2}


interface lengthWise{
    num : number;
}
function practice <Type extends lengthWise>(arg:Type) : Type{
    console.log(arg.num);
    return arg;
}

console.log(practice({num : 1, name:"Vaibhav"}));





export{}