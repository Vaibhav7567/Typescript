function createUser(u) {
    console.log("User's name is ".concat(u.name, ", their email is ").concat(u.email, " and age is ").concat(u.age));
}
var user1 = {
    name: "Vaibhav",
    email: "vaibhav7567@gmail.com",
    age: 42
};
createUser(user1);
