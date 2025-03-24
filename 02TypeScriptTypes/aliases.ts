/*

type user =  {
    name : string,
    email : string,
    age: number
}

function createUser(u : user)
{
    console.log(`User's name is ${u.name}, their email is ${u.email} and age is ${u.age}`);

}
let user1 = {
    name : "Vaibhav",
    email : "vaibhav7567@gmail.com",
    age : 42
}
createUser(user1)
*/

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    cardDetails? : number
}   

let myUser : User = {
    _id : "1234",
    name : "h",
    email : "vaibhav.m@gmail.com",
    isActive: false,
    
}

// myUser._id = "12332" // will throw error because it is marked as readonly  

type cardNumber = {
    cardnumber : string
}
type cardDate = {
    carddate:string
}

type sumUpCard = cardNumber & cardDate & {
    cvv : number
}

let cardUser : sumUpCard = {
    cardnumber:"",
    carddate:"",
    cvv:102
}


type ID = string;

type UserId = string;

let p1 : ID = "7567";
let p2 : UserId = "567";

p1 = p2;
p2 = p1;

type Person = {
    name : string,
    age : number
}

type Employee = {
    name : string,
    age : number
}

const p : Person = {name:"", age:1};
const e : Employee = {name:"", age:2};

let worker : Employee = p;
let employee : Person = e;

function printAll(strs: string | string[] | null) {
    if (typeof strs === "object")
    // if(Array.isArray(str)) this will not throw any error     
        {
      for (const s of strs) {
//   'strs' is possibly 'null'.

/* in javascript typeof of arrays are object and to your surprise typeof is also object
that's the reason we're facing error here
*/
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }
        

