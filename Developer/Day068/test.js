console.log("Harry");


// let boxes = document.getElementsByClassName("box")
// console.log(boxes);


// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"));


// it returns only html arrayCollection
// document.querySelectorAll(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "red"
})
