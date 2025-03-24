interface Pet{
    name : string;
    // age : number; cannot be done
}

class dog{
    name : string;
    // age : number; // can be done
}

// let pet : Pet = {name : "Vaibhav", age:20}; // not allowed 
let pet : Pet;
pet = new dog(); // can be done

