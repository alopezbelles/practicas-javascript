////////////////////// EVENTOS
//Los eventos son funciones que se ejecutan cada vez que sucede algo (mover raton, hacer click, escribir en imput, redimensionar, etc.).

//Eventos del ratón.

// var boton = document.querySelector('#boton');

function cambiarColor() {
  console.log("me has dado click");
  let bg = boton.style.background;
  if (bg == "green") {
    boton.style.background = "red";
  } else {
    boton.style.background = "green";
  }
  return true;
}

//ADD EVENT LISTENER (para no meter los eventos directamente en HTML, sino dejarlo todo en javascript)
var boton = document.getElementById("boton");

// boton.addEventListener("click", function(){
//     cambiarColor();
// })

//MOUSE HOVER

// boton.addEventListener("mouseover", function(){
//     cambiarColor();
// })

//FOCUS
var input = document.querySelector("input");
input.addEventListener("focus", function () {
  console.log("Estás haciendo foco en el input");
});

//BLUR
input.addEventListener("blur", function () {
  console.log("Estás fuera del input");
});

//KEYDOWN
let string = "";
input.addEventListener("keydown", function (event) {
  string += event.key;
  console.log("Texto ingresado: ", string);
});

//KEYPRESS

//KEYUP
