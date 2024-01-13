// Callback Hell / Pyramid of dooms

// 1. Callback

function addNum_(callback, a, b){
    const result = a + b;
    callback(result)
    // if(result > 30){
    //     callback("Success", result)
    // }else{
    //     callback("Error", result)
    //     // callback(result)
    // }
}

addNum_((data) => {
    // console.log(status);
    // console.log(data);
}, 15, 10)

// 2. Callback Hell

function addNum(callback, num){
    setTimeout(() => {
        const result = num + 15;
        callback(result);
    }, 2000)
}

function multiplyNum(callback, num){
    setTimeout(() => {
        const result = num * 5
        callback(result)
    }, 2000)
}

function divideNum(callback, num){
    setTimeout(() => {
        const result = num/25
        callback(result)
    }, 2000)
}

// First callback
// addNum((response) => {
//     console.log("callback 1 >>",response);

//     // Second Callback
//     multiplyNum((data) => {

//         console.log("callback 2 >>",data);

//         // Third Callback
//         divideNum((response3) => {
//             console.log("callback 3 >>", response3);
//         }, data)

//     }, response)

// }, 10)

// 3. Callback Hell resolve with Promises

const addNumP = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = num + 15;
        resolve(result)
    }, 2000)
})

const multiplyNumP = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = num * 5;
        resolve(result)
    }, 2000)
})

const divideNumP = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = num/25
        resolve(result)
    }, 2000)
})

addNumP(10)
.then((response1) => {
    console.log(response1);
    return multiplyNumP(response1)
})
.then((response2) => {
    console.log(response2);
    return divideNumP(response2)
})
.then((response3) => {
    console.log(response3);
})