// interface BusinessPartner {
//     name: string,
//     credit: number
// }
// interface Identity {
//     id: number,
//     credit: number
// }
// interface contact {
//     email: string,
//     phone?: string
// }
// type employee = Identity & contact;
// type customer = contact & BusinessPartner;
// type third = BusinessPartner & Identity
// let person1 : employee = {
//     id : 10,
//     credit : 20,
//     email : " ",
//     phone : " "
// }
// let person2 : third = {
//     name : "Vaibhav",
//     credit : 10,
//     id: 10
// }
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
var str = "vaibhav";
printAll(str);
