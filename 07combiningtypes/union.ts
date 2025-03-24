let value : string | number;

value = "101"
console.log(value);

value = 100;
console.log(value);

// value = true; will throw us an error 

function printId(id:number | string) : number
{
    // console.log(id.toUpperCase()); // will throw error 
    if(typeof id === "string")
        console.log(id.toUpperCase());

    else if(typeof id === "number")
        return id + 2;   

    return 0;
        
}

printId("Vaibhav")

const data : number[] = [1,2,3];
const data1 : string[] = ["1", "2"];
const data2 : (string | number)[] = [1,2,'3'];

export{}