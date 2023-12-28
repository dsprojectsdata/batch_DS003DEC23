// filter, map, find, reduce

// ----filter----
// 1. It does return some values
// 2. It gives value if the return is true
// 3. It return all the true values

const numArr = [1,2,3,4,5,6,7,8,9,10]

// numArr.filter(function(){

// })

const allNumbers = numArr.filter((num) => {
    return num < 5
})

// const filterNum = numArr.filter((num) => (num > 2 && num < 6))

// console.log("filter ",allNumbers);

// ----find----
// It return only a single value

const filterNum = numArr.find((num) => {
    return num < 5
})

// console.log("find ",filterNum);

// ----map----
// 1. It will always return a value
// 2. Can modify the iteration

const numArr1 = [1,2,3,4,5,6,7,8,9,10]

const mapValues = numArr1.map((num) => {
    return num * 10
})

console.log(mapValues);

// Reduce