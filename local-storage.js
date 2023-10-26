//LOCAL STORAGE
//Se puede guardar información en nuestro navegador web a modo de sesión y que esta información persista y esté presente a lo largo de la navegación de nuestra página o aplicación web. Se suele usar en apps de javascript, angular, aunq se puede aplicar en cualquier proyecto web.

//Esto se puede utilizar para ver si en nuestro navegador el local storage está disponible:

if (typeof Storage !== "undefined") {
  console.log("El LocalStorage está disponible");
} else {
  console.log("El LocalStorage NO está disponible");
}

//Esto sirve para guardar información al localStorage y recuperarla. setItem(para subir), getItem(para bajar).

let nombre = "Alejandro";
let apellido = "Lopez";

localStorage.setItem("nombre", nombre);
localStorage.setItem("apellido", apellido);

let nombreStorage = localStorage.getItem("nombre");
let apellidoStorage = localStorage.getItem("apellido");

console.log(nombreStorage);
console.log(apellidoStorage)


//Guardar objetos json en localStorage. Suele ser necesario convertir los datos en un string. Hay que convertir el json de javascript en un string normal (objeto json en formato de string. ) 
//La forma correcta de hacerlo es, primero convertir el objeto en un string (JSON.stringify(obj)), para después, al obtener el string volver a convertirlo en un objeto (JSON.parse(obj)).

var usuario = {
    nombre: "alex", 
    email: "alopezbelles@gmail.com ",
    web: "www.alocreativo.es"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar el objeto string. 

let userJs = JSON.parse(localStorage.getItem("usuario"));

console.log(userJs)

//Para borrar la información del localStorage

localStorage.clear(); //borrará toda la información del localStorage incluidas las variables que hemos estado haciendo y que ya se habían pintado en el dom

localStorage.removeItem("usuario")//borrará la información con el key de usuario en el localStorage, pero los objetos del dom en cascada que ya hayan recogido los datos sí que los seguirá mostrando. 
