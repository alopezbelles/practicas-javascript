//DOM, Document Object Model

var caja = document.getElementById("miCaja");

caja.innerHTML = "Nuevo texto en la caja";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// console.log(caja)

// //Conseguir todos los divs
// var todosLosDivs = document.getElementsByTagName("div");
// var contenido = todosLosDivs[1];

// contenido.innerHTML = "Otro texto para el div por inner";
// // console.log(contenido.textContent);

// // console.log(todosLosDivs);

///////////CONSEGUIR ELEMENTO POR SU CLASE

var divsRojos = document.getElementsByClassName("rojo");

console.log(divsRojos);

Array.from(divsRojos).forEach(div=>{
    div.classList.remove("rojo");
    div.classList.add("amarillo");
})

var divsRojosQuery = document.querySelector("div")

console.log(divsRojosQuery);

