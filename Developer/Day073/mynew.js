// For .container
const container = document.getElementsByClassName('.container');
container.style.display = "flex";
container.style.position= "relative";

// For .container > span
const span = container.querySelector('span');
span.style.position = "absolute";
span.style.border = "2px solid red" ;
span.style.top = "113px" ;
span.style.left = "210px";
span.style.color = "white";

// For .container img 
const img = container.querySelector('img');
img.style.height = "144px";
img.style.width = "260px";

// For .container4
const container4 = document.querySelector('.container4');
container4.style.display = "flex";
container4.style.gap ="23px";
container4.style.padding ="12px";
container4.style.fontWeight = "700"

// Media query eqivalent for min-width :850px
function applyResponsiveStyles() {
    if (window.innerWidth >= 850) {
        span.style.top = "115px";
        span.style.left = "181px";
    } else {
        span.style.top = "113px";
        span.style.left = "210px"
    }
}

applyResponsiveStyles()

window.addEventListener("resize",
    applyResponsiveStyles
)

