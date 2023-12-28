// Loops/Iteration

// ----For Loop----

for (let index = 0; index <= 10; index++) {
    // console.log(index);
}

const superheros = ["Ironman", "batman", "superman", "antman"]

for (let index = 0; index < superheros.length; index++) {
    // console.log(superheros[index]);
}

const numArr = [1,2,3,4,5,6,7,8,9,10]

// continue
// break

for (let index = 0; index <= numArr.length; index++) {
    if(index == 5){
        // console.log("We are at 5 num");
        continue;
    }
    // if(index == 5){
    //     break;
    // }
    // console.log(index);
}

// ----While Loop----

let num = 1

while (num < 10) {
    // console.log(num);
    num++
}

// ----do while loop----

let num2 = 15

do {
    // console.log(num2);
    num2++;
} while (num2 <= 10);

// ----forof----

const num2Arr = [1,2,3,4,5,6,7,8,9,10]

for (const num of num2Arr) {
    // console.log(num);
}

const name = "Nikhilesh Sharma"

for (const stringChar of name) {
    // console.log(`Char is ${stringChar}`);
}

// ----forin----

const userData = {
    firstName: "Nikhilesh",
    lastName: "Sharma",
    age: 18,
    city: "Jaipur"
}

for (const userKey in userData) {
    // console.log(`value of ${userKey} is ${userData[userKey]}`);
}

for (const numKey in num2Arr) {
    // console.log(`${numKey} => ${num2Arr[numKey]}`);
}

for (const superKey in superheros) {
    // console.log(`${superKey} => ${superheros[superKey]}`);
    // console.log(superKey);
}

// ----foreach----
// It does not return any value

const num3Arr = [2,4,6,8,10]

// Callback Function

num3Arr.forEach(function(num){
    // console.log(num);
});

num3Arr.forEach((num) => {
    // console.log(`The number is ${num}`);
});

const displayNum = (num) => {
    // console.log(`The number is ${num}`);
}

// console.log(displayNum);

num3Arr.forEach(displayNum)

// const numMethod = (numHere) => {
//     console.log(numHere);
// }

const allNumber = num3Arr.forEach((numHere, i, wholeArr) => {
    // console.log(`First => ${numHere}, Second => ${i}`);
    // console.log(`Third => ${wholeArr}`);
    // console.log(wholeArr);
    return numHere
});

console.log(allNumber);