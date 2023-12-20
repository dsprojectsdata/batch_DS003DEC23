// Date

const newDate = new Date();

// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.toString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleTimeString());

// const fixDate = new Date("2021-12-23");

// YYYY/MM/DD
// MM/DD/YYYY
// YYYY-MM-DD

// console.log(fixDate);
// console.log(fixDate.toLocaleString());

// console.log(fixDate.getDay());
// console.log(fixDate.getDate());
// console.log(fixDate.getMonth());
// console.log(fixDate.getFullYear());

// 23Dec,2021
// 23,12,2021

// const customTimeFormat = `${fixDate.getDate()},${fixDate.getMonth() + 1},${fixDate.getFullYear()}`
// console.log(customTimeFormat);
// console.log(newDate.getHours());

// const fixDate = new Date("2023-12-19");
// const fixTimestamp = fixDate.getTime()

// console.log(newDate.getSeconds());
// console.log(fixDate.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Date.now()/1000/60);
// console.log(Date.now()/1000/60/60);

// console.log();


console.log(newDate.toLocaleString("default", {
    // weekday: "short",
    // year: "numeric",
    // month: "long",
    timeZone: "America/Argentina/Cordoba"
}));