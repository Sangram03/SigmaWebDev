let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     alert("I was clicked");
// })


// list of all mouse events
// https://developer.mozilla.org/en-US/docs/web/API/Element#mouse_events



button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML =
    "<b> Yayy you were clicked </b> Enjoy your click!"
})


button.addEventListener("contextmenu", ()=>{
    alert("Donot Click us by Right click Please")
})



document.addEventListener("keydown", (e)=>{
    console.log(e.key , e.keyCode);
    
})