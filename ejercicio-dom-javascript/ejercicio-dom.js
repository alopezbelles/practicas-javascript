//EJERCICIO CURSO JAVASCRIPT SOBRE DOM

//1-Formulario con los campos: nombre, apellidos, y edad.
//2-Botón para enviar el formulario: evento submit.
//3-Mostrar esos datos por pantalla.
//4-Validación de formulario.

let formulario = document.querySelector("#formulario");
let box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none";

formulario.addEventListener("submit", function () {
  console.log("Evento submit capturado.");

  var nombre = document.querySelector("#nombre").value;
  var apellidos = document.querySelector("#apellidos").value;
  var edad = parseInt(document.querySelector("#edad").value);

  let nameSpan = document.querySelector("#nameSpan")

  if (nombre.trim() == null || nombre.trim().length == 0) {
      alert("El nombre no es válido");
      nameSpan.innerHTML = "Por favor, ingrese el nombre.";
      nameSpan.style.color = "red"
    return false;
  } else {
    nameSpan.innerHTML = "";


  }
  if (apellidos.trim() == null || apellidos.trim().length == 0) {
    alert("Los apellidos no son válidos");
    return false;
  }
  if (edad == null || edad <= 0 || isNaN(edad)) {
    alert("La edad no es válida");
    return false;
  }

  box_dashed.style.display = "block";
  console.log(nombre, apellidos, edad);

  var p_nombre = document.querySelector("#p_nombre span");
  var p_apellidos = document.querySelector("#p_apellidos span");
  var p_edad = document.querySelector("#p_edad span");

  p_nombre.innerHTML = nombre;
  p_apellidos.innerHTML = apellidos;
  p_edad.innerHTML = edad;

  //   let datosUsuario = [nombre, apellidos, edad];
  //   let indice;
  //   for (indice in datosUsuario) {
  //     let parrafo = document.createElement("p");
  //     parrafo.append(datosUsuario[indice]);
  //     box_dashed.append(parrafo);
  //   }
});
