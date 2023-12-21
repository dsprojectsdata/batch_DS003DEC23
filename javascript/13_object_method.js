// Object

const locations = "country"

const obj1 = {
    "name": "Nikhilesh",
    "age": 18,
    hobbies: ["Cricket", "Chess", "Dance"],
    isLoggedin: false,
    "full name": "Nikhilesh Sharma",
    [locations]: "Jaipur"
}

// console.log(obj1.name);
// console.log(obj1.hobbies);
// console.log(obj1["full name"]);
// console.log(obj1[locations]);

// obj1.age = 20
// obj1.name = "NIKHIL"
// console.log(obj1);
// Object.freeze(obj1)

// obj1.isLoggedin = true

obj1.nameFunction = function(){
    console.log("function is called");
}

// console.log(obj1);
// console.log(obj1.nameFunction());

// Object Nesting
// const obj2 = {
//     companyName: "Debugger Solutions",
//     fullName: {
//         userFullName: {
//             firstName: "Nikhilesh",
//             lastName: "Sharam",
//             hobbies: ["Cricket", "Chess"]
//         }
//     }
// }

// console.log(obj2.fullName.userFullName.firstName);
// console.log(obj2.fullName.userFullName.hobbies[1]);

// Merge Object
// const targetObj = {1: "a", 2: "b"}
// const sourceObj1 = {3: "c", 4: "d"}
// const sourceObj2 = {5: "e", 6: "f"}

// // console.log(Object.assign(targetObj, sourceObj1, sourceObj2));
// console.log(Object.assign({}, targetObj, sourceObj1, sourceObj2));
// console.log(targetObj);
// console.log(sourceObj1);

// Spread Operator
// const mergedObj = {
//     ...targetObj,
//     ...sourceObj1,
//     ...sourceObj2,
//     name: "NIkhilesh"
// }

// console.log(mergedObj);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));


// const api = {
//     products: [
//         {
//             title: "Product 1"
//         },
//         {
//             title: "Product 2"
//         },
//         {
//             title: "Product 3"
//         }
//     ],
//     length: 3
// }