// Promises

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I am promise 1")
//         resolve()
//     }, 1000)
// });

// promise1.then(() => {
//     console.log("promise 1 fulfilled")
// })

// ------------PROMISE 2-----------------------

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I am promise 2")
//         // resolve("Nikhilesh Sharma")
//         resolve({ name: "Nikhilesh Sharma", age: 18 })
//     }, 1000)
// });

// promise2.then((data) => {
//     console.log("promise 2 fulfilled")
//     console.log(data.age)
// })


// ------------PROMISE 3-----------------------

// new Promise((resolve, reject) => {
//     // network call, db calls
//     setTimeout(() => {
//         console.log("I am promise3");
//         resolve({ city: "jaipur" })
//     }, 1000)
// }).then((data) => {
//     console.log(data.city);
// })

// ------------PROMISE 4-----------------------

// const promise4 = new Promise((resolve, reject) => {
//     // network call, db calls
//     setTimeout(() => {

//         let name = "Nik"

//         if(name.length > 4){
//             reject({ error: 400, message: "Name can not be greate than 4 char" })
//         }else{
//             resolve({ name: name, message: "Success" })
//         }
        
//         // let error = true;

//         // if(error){
//         //     reject({ error: 400, message: "Something went wrong" })
//         // }

//     }, 1000)
// })

// promise4.then((data) => {
//     console.log("promise 4 >>",data);
// }).catch((error) => {
//     console.log("promise 4 error", error);
// })

// promise4.then((data) => {
//     console.log("promise 4 >>",data);
//     return data.name
// }).then((myName) => {
//     console.log(myName);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("finally called!!")
// })

// ------------PROMISE 5-----------------------

const promise4 = new Promise((resolve, reject) => {
    // network call, db calls
    setTimeout(() => {

        let name = "Nik"

        if(name.length > 4){
            reject({ error: 400, message: "Name can not be greate than 4 char" })
        }else{
            resolve({ name: name, message: "Success" })
        }
        
    }, 1000)
})

// async await

async function consumePromise(){
    

    try {
        const response = await promise4;
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally{
        console.log("finally called!!!");
    }
}

consumePromise()