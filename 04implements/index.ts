interface animal{
    name : string,
    voice() : void;
}

class dog implements animal{
    name : "Labra";
    voice()
    {
        console.log("Dog am barking");
    }
}

let d = new dog();
d.voice();