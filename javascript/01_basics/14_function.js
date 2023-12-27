// Function

// function userInfo(){
//     console.log("Nikhilesh");
//     console.log("Sharam");
//     console.log(18);
//     console.log("Jaipur");
// }

// console.log(userInfo);
// console.log(userInfo());

// Function Definition (num1, num2) => parameters
// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
//     console.log("ABCD");
// }

// function addNum(num1 = 5, num2 = 10){
//     // if(num2 === undefined){
//     //     console.log("Please add second number");
//     //     return;
//     // }
//     const count = num1 + num2
//     // console.log("This is count -> ", count);
//     return count
// }

// // Function execution (4, 8) => arguments
// // addTwoNum(4, 8)
// const addOutput = addNum()
// console.log(addOutput);

// Rest Operator
// function getUserData(firstName, lastName, ...userData){
//     console.log(firstName);
//     console.log(lastName);
//     console.log(userData);
// }

// getUserData("Nikhilesh", "Sharma", "Jaipur", 20, "React JS");


const userData = {
    firstName: "Nikhilesh",
    lastname: "Sharma",
    age: 18
}

// const usersData = [{
//     name: "Nikhilesh",
//     age: 18
// },{
//     name: "Aakash",
//     age: 18
// },{
//     name: "Nitesh",
//     age: 20
// }];

function getUserData(user){
    // console.log(user.firstName);
    // console.log(user.age);
    console.log(user[0].firstName);

}
getUserData([{ firstName: "Nikhilesh", age: 18 }])

// // JSON ->

// {
//     "firstName": "Nikhilesh",
//     "lastname": "Sharma",
//     "age": 18
// }