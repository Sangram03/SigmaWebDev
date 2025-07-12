function createCard(title , cName , views , monthsOld,duration , thumbnail){
    // Finish this function
    let viewStr 

    if (views<1000000) {
        
        viewStr = views/1000 +"K";
    }
    else if (views<1000000) {
        
        viewStr = views/100000 +"M";
    }
    else{
        
        let viewStr = views/1000 +"K";
    }
    let html = `<div class="container">
      <img src="${thumbnail}" alt="" />
      <span>${duration}</span>
      <div class="container3">
        <h1>Introduction to Backend | Sigma Web Dev video #2</h1>
        <div class="container4">
          <span>${title}</span>
          <span>${views}</span>
          <span>${monthsOld}</span>
        </div>
      </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000 , 7 , "31:22" ,"#link")