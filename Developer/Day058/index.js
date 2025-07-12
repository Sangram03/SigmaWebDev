// function name(params) {
    
// }

function nice(name) {
    // string concatinate
    console.log("Hey "+ name +" you are nice!");
    console.log("Hey "+ name +" you are good!");
    console.log("Hey "+ name +" you t-shirt is nice!");
    console.log("Hey "+ name +" your course is good too!");
}

nice("Harry")

console.log("Hey Harry you are nice!");
console.log("Hey Harry you are good!");
console.log("Hey Harry you t-shirt is nice!");
console.log("Hey Harry your course is good too!");


function sum(a,b , c=3) {
    // console.log(a+b);
    console.log(a,b,c);
    // undefined
    
    return a + b + c;
    
}

result1 =sum(3)
//  output nan

result1 =sum(3,9)
result2 =sum(7,55)
result3 =sum(3444,9,2)

console.log("The sum is these numbers is: ", result1);
console.log("The sum is these numbers is: ", result2);
console.log("The sum is these numbers is: ", result3);

const func1 = (x) => {
    console.log("I am an arrow function" , x);
    
}
func1(34);
func1(66);
func1(84);

