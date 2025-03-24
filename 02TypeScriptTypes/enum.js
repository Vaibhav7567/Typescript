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
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["Notfound"] = 404] = "Notfound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
var s = Status;
console.log(s.Success);
console.log(Status[200]);
var E;
(function (E) {
    E[E["up"] = 1] = "up";
    E[E["down"] = 2] = "down";
    E[E["right"] = 10] = "right";
    E[E["forward"] = 11] = "forward";
})(E || (E = {}));
console.log(E.forward);
