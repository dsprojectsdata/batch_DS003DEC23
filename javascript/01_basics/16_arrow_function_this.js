// Arrow Function (Fat arrow function)

// function one() {
//     console.log("This is a function");
// }

// const one = function(){
//     console.log("This is a function");
// }

// const one = () => {
//     console.log("This is a function");
// }

// one()

// const arrowFn = (...userData) => {
//     // console.log(arguments);
//     console.log(userData);
// }

// Explicit return
// const arrowFn = (firstName, lastName) => {
//     return firstName
// }

// Implicit Return
const arrowFn = (...userData) => ("Nikhilesh")

const users = arrowFn("Nikhilesh", "Sharma")
// console.log(users);

function simpleFn(){
    // console.log(arguments);
}

simpleFn("Nikhilesh", "Sharma")

// ---------------This---------------------
// It refers to current context

const obj = {
    firstName: "Nikhilesh",
    lastName: "Sharma",
    age: 18,
    getName: function(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }
}

// obj.getName();

// console.log(this);

function one(){
    console.log(this);
}

const two = () => {
    console.log(this);
}

two()

// one();