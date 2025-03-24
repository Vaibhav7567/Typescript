/*

enum Direction{
    up,
    down,
    right,
    left
}

console.log(Direction.down);
console.log(Direction.up);
console.log(Direction.right);
console.log(Direction.left);

*/

// reverse mapping "possible only in numerice enums"

enum Status{
    Success = 200,
    Notfound = 404,
    ServerError = 500 
}

let s = Status
console.log(s.Success);
console.log(Status[200]);


enum E{
    up  = 1,
    down,
    right = 10,
    forward
}

console.log(E.forward);

