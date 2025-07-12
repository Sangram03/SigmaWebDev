// Definination of a factorial
// The factorial of a number is the multiplication of all the number between ONE and number itself

// write a program to calculate factorial of a number using reduce and using for loops.
// 5
// base case 0! = 0
// base case 1! = 1
// 5*4*3*2*1 = ?

// let a = prompt("Enter a number");


// using for loop
let a = 3;

let b = 1;
for (let index = 1; index <= a; index++) {
    
    b *=index;
    
    
}
console.log(b);


// using reduce state

function factorial(n) {
    if(n===0 || n ===1) return 1;
    return Array.from({length:n},(_,i) => i+1).reduce((acc,val)=> acc*val ,1)

}

console.log(factorial(5));
