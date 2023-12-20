// Array

// [1,2,3,"Nikhilesh", true]

// const arr1 = [1, 3, 5]
// const arr2 = arr1 // Shallow Copy

// [1, 2, "Name", true, null, ["marvel", "DC"], {}]

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const arr2 = ["Nikhilesh", "Sharma", true]

// [1, 2, 3, 4, 5, 6, 7, 8, ["Nikhilesh", "Sharma", true] ]

// const arr3 = new Array(1, 2, 3);

// console.log(arr1.length);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(arr1)
// arr1.push(5)
// console.log(arr1)
// arr1.pop()
// console.log(arr1);

// console.log(arr1)
// arr1.unshift(10)
// console.log(arr1)
// arr1.shift()
// arr1.shift()
// console.log(arr1)

// console.log(arr1);
// console.log(arr1.includes(10));

// console.log(arr2.indexOf("Sharma"));

// console.log(arr1.join());

// slice & splice

// console.log(arr1);
// console.log(arr1.slice(1, 4)); // Return new array
// console.log(arr1);
// console.log(arr1.splice(1, 4)); // manipulate the same arr
// console.log(arr1);

// arr1.push(arr2)

// console.log(arr1.concat(arr2));

/*

const arr1 = [1,2,3]
const arr2 = [4,5,6]

*/

// const newArr1 = ["Nikhilesh", "Sharma"]
// const newArr2 = ["Debugger", "Solutions"]
// const newArr3 = ["Training", "Center"]

// console.log(newArr1.concat(newArr2).concat(newArr3));

// Spread Operator

// const mergedArr = [...newArr1, ...newArr2, ...newArr3];

// console.log(mergedArr);

// const unknown = "Nikhilesh"
const unknown = ["Nikhilesh"]

console.log(Array.isArray(unknown));