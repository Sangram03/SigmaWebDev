

// Array :-

// Collections of Multiple Data Types

let arr = [1,2,4,5,7]
// index   0,1,2,3,4


// elements will be added in the end
arr.push(23);

// we can added a string here also in the int arr
arr.push("Sangram");

// remove the first elements in the array
arr.shift();

// delete the element of the arr througn the index
delete arr[4]


// add elements in the first 
arr.unshift("das");

// last elements are removed 
console.log(arr.pop(arr));


// add another elements in the beginning.
arr[0] = 5666;

// when delete an elements in the array the index value will be un defined
arr[6]

//array will be changed and it can be mutuable
console.log(arr , typeof arr);

// type of arr is a object


console.log(arr.length);

console.log(arr[0]);
console.log(arr[4]);
console.log(arr[7]);

console.log(arr.toString());

console.log(arr.join(" and "));



// in case of string it caanot be possible (immutable property)


let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

// combine three elements in the single array
console.log(a1.concat (a2,a3));


let f1= [23,34,36]
// sort all the elements
console.log(f1.sort());

let numbers = [1,2,3,4,5]
// delete  the index which given to you
numbers.slice(1,2)

// added the elements like this
numbers.splice(1,3,222,333)
