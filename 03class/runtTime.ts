class Animal{
    makeSound() : void{
        console.log("Make some sound");
    }
}

class Dog extends Animal{
    makeSound() : void
    {
        console.log("Woof");
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log("Meow")
    }
}

function AnimalSpeak(animal : Animal) : void{
    animal.makeSound();
}

AnimalSpeak(new Cat());
AnimalSpeak(new Dog());