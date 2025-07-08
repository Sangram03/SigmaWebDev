let a = 6;


function factorial (number){
    let arr = Array.from(Array(number+1).keys())
   
    // let c =arr.slice(1,).reduce((a,b)=>{
    //     return a*b;
    // })
     let c =arr.slice(1,).reduce((a,b)=>  a*b
    );
    
    return c;
    
}

function facFor(number) {
    let fac =1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
        
    }

    return fac
}

console.log(facFor(a));
console.log(factorial(a));

