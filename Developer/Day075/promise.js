// alert('');
// console.log('Harry is Good');



let prom1 = new Promise((reslove, reject)=>{
    let a = Math.random();
    if (a< 0.5) {
        reject("No random number was not supporting you")
    }
    else{

    
    setTimeout(() => {
        console.log("Yes I am done");
        reslove("Harry")
    }, 3000)
}
})


let prom2 = new Promise((reslove, reject)=>{
    let a = Math.random();
    if (a<0.5) {
        reject("No random number was not supporting you 2")
    }
    else{

    
    setTimeout(() => {
        console.log("Yes I am done 2");
        reslove("Harry 2")
    }, 1000)
}
})


let p3 = Promise.race[prom1,prom2]

p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
 })

// prom1.then((a) => {
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })