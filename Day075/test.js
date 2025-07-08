console.log("Harry is a hacker");
console.log("Rohan is a hecker");


setTimeout(() => {
    console.log("I am inside settimeout");
    
},0);



setTimeout(() => {
    console.log("I am inside settimeout 2");
    
},0);



console.log("The End");


const loadScript1 =  ()=> {

}

// anfn  for used as a arrow function
// const loadScript2 = (src, callback) => { 
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = () => {

//     }
//  }




const fn = ()=>{
    console.log("Nothing");
    fn();
    
}




const callback = (arg ,fn) => {
    console.log(arg);
    fn();
    
}

// cdn js  library  (prism)


const loadScript2 = (src, callback) => { 
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry")
    document.head.append(sc)
 }


loadScript2("https://cdnjs.cloudfare.com/ajax/prism/9000.0.1/prism.min.js", (arg ,fn) => {
    console.log(arg);
    fn("firstarg", () =>{
        ddg("secondary" ,()=>{
            
        })
    });
    
})



