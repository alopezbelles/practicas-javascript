//Un formulario que nos permita añadir películas

function mostrarPeliculas() {
  const formPeliculas = document.getElementById("formpeliculas");

  formPeliculas.querySelectorAll('.pelicula').forEach(pelicula => pelicula.remove());

  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const pelicula = localStorage.getItem(clave);

    // Agregamos la película al contenido del formulario
    formPeliculas.innerHTML += `<div>${pelicula}</div>`;
  }
}

mostrarPeliculas();

let formulario = document.querySelector("#formpeliculas");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let titulo = document.querySelector("#addpelicula").value;

  if (titulo.length >= 1) {
    localStorage.setItem(titulo, titulo);
    mostrarPeliculas();
  } else {
    alert("Introduce una película. ");
  }
});

console.log(peliculas);
