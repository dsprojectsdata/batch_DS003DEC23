// Variables

const price = 500
let name = "Debugger Solutions"

var isLoggedIn = true
// email = "nikhilesh"

// email = "sharma@google.com"

let email;

// isLoggedIn = false
// name = "DS"
// price = 1200

// let name = "DS"
var isLoggedIn = false

// console.log(price)
// console.log(name)
// console.log(isLoggedIn)

{
    var isLoggedIn = "Haa"
    let name = "DS";

    console.log("function scope >>", name);
}

console.log(name);


/*

Variables => variables are container for value

const
    -> value can not be changed
    -> can not declare again with the same name in blocked scope

let 
    -> value can be chaneged
    -> can not be declare again with same name in blocked scope
    
var 
    -> value can be changed
    -> can be declare again with same name

*/