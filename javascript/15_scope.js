// Scope

// 1. Global scope
// 2. local scope

// let a = 10
// const b = 20
// var c = 30

// var username = "Nikhilesh"
// let userCount = 12

// {
//     // let a = 10
//     // const b = 20
//     var username = "Rahul"
//     let userCount = 50

//     console.log(userCount);
// }

// // reviewingScope()


// // console.log(a);
// // console.log(b);
// console.log(userCount);


// function one(){
//     const username = "Nikhilesh"

//     function two(){
//         const email = "nikhil@google.com"
//         console.log("two >>", username);
//         console.log("two >>", email);
//     }

//     // two()

//     console.log("one >>", username);
//     console.log("one >>", email);
// }

// one()

// Hoisting

// one()

// function one(){
//     console.log("This is function one");
// }

// two()

// const two = function(){
//     console.log("This is function two");
// }

// console.log(a);
let a = 10

{
    let b = 20
    console.log(a);
}


console.log(b);
