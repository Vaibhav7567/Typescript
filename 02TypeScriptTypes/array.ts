const numbers : number[] = [1,2,3];


for(let i  = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}

type User = {
    name : string,
    isActive : boolean
}

const allUsers : User[] = [];

allUsers.push({name:"Vaibhav", isActive:false})

const MLMODELS : number[][] = [
    [255, 255, 255]
]