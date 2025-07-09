let a = promt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not allowed")
}

// take mdn refernce for it 


let sum = parseInt(a)+parseInt(b);

function main() {
    
    let x = 1;
    try {
        console.log("The sum is",sum * x);
        return true
    } catch (error) {
        console.log("Error aa gaya bhai");
        return false
        
    }
      // used in function otherwise it is not only write like console.log
    finally{
        console.log("files are being closed and db connection is being closed");
        
    }
}


let c = main();

