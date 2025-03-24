/*
interface Person{
    name : string,
    age? : number // optional properties
  }
  function greet(person : Person)
  {
    return "Hello " + person.name;
  }
  
  let person1 : Person = {
    name : "Vaibhav",
    // age: 21
  }
  
  console.log(greet(person1))

*/
/*
interface Shape{
  name : String,
  color : String
}

function getShape(): Shape {
  return { name: "Circle", color: "Red" };
}

interface paintOptions{
  shape : Shape,
  xPos? : number,
  yPOs? : number
}


function paintShape(opts : paintOptions)
{
  let xPos = opts.xPos ?? 0 ;
  let yPos = opts.yPOs ;

  console.log(`Painting ${opts.shape.color} at X : ${xPos}, Y : ${yPos}, Color ${opts.shape.color}`);
}

const shape = getShape();

paintShape({shape})
*/

/*

interface Shape{
  name : String,
  color : String
}

interface Paintoptions{
  shape : Shape,
  xPos? : number,
  yPos? : number
}

function paintShape(opts:Paintoptions)
{
  let xPos = opts.xPos ?? 0
  let yPos = opts.yPos ?? 0 

  console.log(`Painting a ${opts.shape.name} at X: ${xPos}, at Y ${yPos}, color : ${opts.shape.color}`)
}

function paintCircle(xPos? : number, yPos?:number)
{
  paintShape({shape: {name :"Circle", color :"Green"}, xPos, yPos})
}

paintCircle();

*/


interface user{
    email:string,
    userID : number,
    googleID?:string,
    readonly dbID : number;
}

interface user{
  cardNumber? : number;
} // can be opened again to add new properties

const vaibhav : user = {
    email : "",
    userID : 1,
    dbID : 10
}
vaibhav.cardNumber = 101;


type person  = {
  age : number;
}

// type person = {
//   DOB : Date;
// }  not possible to reopen the type in TS




export{}