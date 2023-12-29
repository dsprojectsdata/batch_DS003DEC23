// filter, map, find, reduce

// ----filter----
// 1. It does return some values
// 2. It gives value if the return is true
// 3. It return all the true values

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

const numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mapValues = numArr1.map((num) => {
    return num * 10
})

// console.log(mapValues);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const filteredBook = books.filter((book) => book.publish < 2000 && book.edition < 2000)

// console.log(filteredBook);

const numArr2 = [2,4,6,8,10]

const evenValues = numArr2.map((evenNum) => {
    return evenNum * 10
})

const evenValuesForeach = numArr2.forEach((evenNum) => {
    return evenNum * 10
})

// console.log(evenValues);
// console.log(evenValuesForeach);

// Reduce
// Add all numbers from array
const array1 = [1, 2, 3, 4];

const reduceValue = array1.reduce((acc, currValue) => {
    // console.log(acc);
    // console.log(currValue);
    return acc + currValue
}, 0)

// console.log(reduceValue);

