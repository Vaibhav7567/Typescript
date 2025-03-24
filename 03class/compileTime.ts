class Calculator{
    add(number1 : number, number2: number);
    add(word1: string, word2 : string);

    add(type1 : any, type2 : any) : any
    {
        if(typeof type1 === "number" && typeof type2 === 'number')
        {
            return type1 + type2;
        }
        else{
            return type1.toString() + type2.toString();
        }
    }
}

const cal = new Calculator();
console.log(cal.add(1,2));
console.log(cal.add("hello", " world"));
