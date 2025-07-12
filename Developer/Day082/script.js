async function sleep(params) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(45);
    }, 1000);
  });
}

function sum(a,b,c){
    return a+b+c;
}

(async function main() {
    console.log(a1);
    //undefined after used var 
    
//   let a = await sleep();
//   console.log(a);
  
//   let b = await sleep();
//   console.log(b);

//   let [x,y, ...rest] = [1,5 ,7 ,8,9,10]
//   console.log(x,y,rest);

  let obj = {
    a:1,
    b:2,
    c:3

  }

  let {a,b} = obj

  console.log(a,b);
  
  let arr = [1,4,6]
//   console.log(arr[0] + arr [1] + arr[2]);
  console.log(arr[0] , arr [1] , arr[2]);
  console.log(sum(...arr));
  
  
  var a1 =6;
  // hosting var a1 go to top not go a1=6
  // 
})();
