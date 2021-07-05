let box = document.querySelector(".container")

function changeColor(e){
    let colorOption = document.getElementById("colors").value
    if (e.target.tagName ==="DIV"){
        e.target.style.backgroundColor = colorOption
    }
}
box.addEventListener("click", changeColor, true)