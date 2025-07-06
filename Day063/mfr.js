let arr = [1,13,5,7,11]
// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }


let newArr = arr.map((e, index, arr) =>{
     return e**2
})

console.log(newArr);

// const greaterThanSeven = (e) => {
//     if(e>7){
//         return true
//     }
//     else{
//         return false
//     }
    
// }

// console.log(newArr.filter(greaterThanSeven));

// used below function is a or function of above function

// console.log(arr.filter((e)=>{
//     if (e>7) {
//         return true
//     } else {
//         return false
//     }
// }));

let arr2 = [1,2,3,4,5,6]

const red = (a,b) => {
    return a*b;
}


console.log(arr2.reduce(red));

let arr65 = array.form("Harry")

console.log(arr65);



