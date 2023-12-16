/* Primitive Data Type (Call by value)

7 type =>
- String
- BigInt
- Number
- Boolean
- null
- Symbol
- undefined




*/

// let num1 = 12
// let num2 = num1
// num2 = 15

// console.log(num1)
// console.log(num2)

/* Reference Type (Call by reference/address)

- Object
- Array
- Function


*/

let obj1 = {
    name: "Nikhilesh",
    age: 18
}

let obj2 = obj1

// let obj2 = {
//     name: obj1.name,
//     age: obj1.age
// }

obj2.age = 20

console.log(obj1)
console.log(obj2)

// let obj3 = {
//     location: "jaipur"
// }



/*

Stack -> Primitive Data Type



Heap -> Reference Data Type

*/