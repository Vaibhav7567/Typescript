var value;
value = "101";
console.log(value);
value = 100;
console.log(value);
// value = true; will throw us an error 
function printId(id) {
    // console.log(id.toUpperCase()); // will throw error 
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else if (typeof id === "number")
        return id + 2;
    return 0;
}
printId("Vaibhav");
