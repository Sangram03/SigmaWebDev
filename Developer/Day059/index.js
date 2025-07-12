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


let a = parseFloat (prompt("Enter Your first Number"));

let c = prompt("Enter the oprator any single  oprator 1)+ 2)- 3)/ 4)*");

let b = parseFloat(prompt("enter second number"));



// for input details enter the parse function

switch(c){
    case "+":
        // alert(${a} + ${b} = ${a + b});
        alert(`${a} + ${b} = ${a + b}`);
        break;
    case "-":

        alert(`${a} + ${b} = ${a + b}`);
        break;
    case "*":
        alert(`${a} + ${b} = ${a + b}`);

        break;
    case "/":
        alert(`${a} + ${b} = ${a + b}`);

        break;
    default:
        alert("Error : invalid Systax")
}


// if( c == +) {
//     console.log("sum is", a-b);
// }

