let boxes = document.querySelectorAll(".container div")
console.log(boxes.length)

for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", cambiarColor, true)
}
function cambiarColor(e){
    let colorOption = document.getElementById("colors").value
    if (e.target.tagName ==="DIV"){
        e.target.style.backgroundColor = colorOption
    }
}
/*
function cambiarColor(){
    let colorOption = document.getElementById("colors")
    
        switch(colorOption){
            case "Azul":
                div.style.backgroundColor = "blue"
                break
            case "Amarillo":
                div.style.backgroundColor = "Yellow"
                break
            case "Rojo":
                div.style.backgroundColor = "red"
                break
            case "Verde":
                div.style.backgroundColor = "green"
                break
            case "Morado":
                div.style.backgroundColor = "purple"
                break
            case "Naranja":
                div.style.backgroundColor = "orange"
                break
            case "Cafe":
                div.style.backgroundColor = "brown"
                break
        }
    }
*/
/*

*/