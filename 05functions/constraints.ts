/*
function longest(a  , b )
{
    if(a.length >= b.length)
        return a;

    else{
        return b;
    }
}
*/

// console.log(longest(12, 21));

function longest <Type extends{length:number}> (a : Type, b: Type)
{

    if(a.length >= b.length)
        return a;
    else
        return b;
}

const longArray = longest([1, 2], [1,2,3]);

// const longNumber = longest()

function nameee(){}