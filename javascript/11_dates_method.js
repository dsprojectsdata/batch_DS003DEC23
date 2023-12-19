// Date

const newDate = new Date();

// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.toString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleTimeString());

const fixDate = new Date("2021-12-23");

// YYYY/MM/DD
// MM/DD/YYYY
// YYYY-MM-DD

console.log(fixDate);
console.log(fixDate.toLocaleString());

console.log(fixDate.getDay());
console.log(fixDate.getDate());
console.log(fixDate.getMonth());
console.log(fixDate.getFullYear());

// 23Dec,2021
// 23,12,2021

const customTimeFormat = `${fixDate.getDate()},${fixDate.getMonth() + 1},${fixDate.getFullYear()}`
console.log(customTimeFormat);
console.log(newDate.getHours());

// Date -> 

// Arrays, Objects, functions