// async function getData(){
//   simulate getting data from a server
//      return new Promise ((reslove , reject) =>{
//         setTimeout(()=>{
//           reslove(455)
//         },1000)
//      })
// }


async function getData(){
    // simulate getting data from a server
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(Response => Response.json())
    // .then(json => console.log(json));

    let data = await x.json

    // console.log(data);
    // return 455;
    return data ;
    
    
}


// json placeholder api

async function main() {
    
console.log("Loading modules");
console.log("Do something else");


console.log("LOad Data");

let data = await getData()


console.log(data);
     
    console.log("process data");
    
    
    console.log("task 2");

}

main()

// data.then((v)=>{
//     console.log(data);
    
    
    
//     console.log("process data");
    
    
//     console.log("task 2");

// })


// settle means reslove or reject


// reslove means promise has settled successfully
// reject means promise has not settled successfully


// Example POST method implementations

async function postData(url = "", data = {}){
    //Default opition are marked with *
  const response = await fetch (url , {
    method: "POST", 
    headers: {
        "Content-Type":"aplication/json",
        
    },
    body:JSON.stringify(data), 
  });
  return response.json();
}
postData("https://example.com/answer",{ answer: 42}).then((data)=>{
    console.logh(data);
});








