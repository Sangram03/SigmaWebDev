/*
* Create a faulty calculator using JavaScript
* This faculty calculator does following :
1. It takes two numbers as input form the user
2. It performs wrong operations as follows:


+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times
*/


let   random = Math.random()
console.log(random);
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter  operation")

let obj = {
    "+" : "-",
    "*" :"+",
    "-" :"/",
    "/":"**"
}





if (random>0.1) {
    // perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    // eval is used as calculator
} else {
    // perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}



