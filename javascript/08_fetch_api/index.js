// Fetch API

// const getProducts = () => {

// }

// getProducts();


// (() => {
//     fetch("https://dummyjson.com/products")
//     .then((response) => {
//         console.log("response >>", response)
//         return response.json();
//     })
//     .then((data) => {
//         console.log("data >>", data);
//     })
//     .catch((error) => {
//         console.log("error >>", error)
//     })
// })()

const getProducts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        console.log(response);
        
        const data = await response.text();
        
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProducts();