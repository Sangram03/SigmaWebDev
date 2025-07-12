let boxes = document.getElementsByClassName("box");
for (let index = 0; index < boxes.length; index++) {
    boxes[index].style.border = "2px solid black";
    boxes[index].style.height = "100px";
    boxes[index].style.width = "100px";
    boxes[index].style.backgroundColor = getRandomColor();
    
}

// document.getElementById("box1").style.backgroundColor = "blue";
// document.getElementById("box2").style.backgroundColor = "green";
// document.getElementById("box3").style.backgroundColor = "yellow";
// document.getElementById("box4").style.backgroundColor = "red";
// document.getElementById("box5").style.backgroundColor = "black";


function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let j=0;j<6;j++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
