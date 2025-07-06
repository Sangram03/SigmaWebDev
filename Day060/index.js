console.log("This is strings tutorial");

let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// undefined
console.log(a[5]);

console.log(a.length);

let real_name = "Harry"
let friend = "Rohan"

console.log("His name is " + real_name + "and his friends name is" + friend);

// this is known as String interpolation
console.log(`His name is ${real_name} and his friends name is ${friend} `);


let b = "Shivam";
console.log(b.toUpperCase);
console.log(b.toLowerCase);
console.log(b.length);


// Output Shiv
console.log(b.slice(1,4));

// Output hivam
console.log(b.slice(1));


console.log(b.replace("Sh", "77"));

let b1 = "Shivam";
// only First one will be changed
console.log(b1.replace("Sh", "77"));

console.log(b.concat(a , "Aishwariya" , "Rahul" , "Priya"));

// string is immutable
console.log(b);

b2 = "Rohan"
b2.charAt(0);
b2.charAt(110)
b2.indexOf("ha")

b2.indexOf("zz")








