// We have grab the count-el element ,store it in the countEl variable..
// This is the model of HTML document that is written in javasript 
let countEl = document.getElementById("count-el")
// initialize the variable
let count = 0

// update the value of count variable 
function increment(){
    count+=1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
