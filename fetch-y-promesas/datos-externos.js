// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("X");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     const usersDiv = document.getElementById("datosUsuario");

//     // Recorre cada usuario y crea un elemento para mostrar su información
//     data.forEach((user) => {
//       const userElement = document.createElement("div");
//       userElement.textContent = `Nombre: ${user.name} Email: ${user.email}`;

//       // Agrega el elemento al div de usuarios
//       usersDiv.appendChild(userElement);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/////OTRO EJEMPLO DE FECTH. ¡OJO! En este ejemplo no hay validaciones de errores.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((data) => {
//     usuarios = data;
//     console.log(usuarios);

//     usuarios.map((element, index) => {
//       const usersDiv = document.getElementById("datosUsuario");
//       const userElement = document.createElement("div");
//       usersDiv.appendChild(userElement);
//       userElement.textContent = `${index} - Nombre: ${element.name} Email: ${element.email}`;
//     });
//   });

//Esto es lo mismo que arriba pero sacando del fetch el mapeo de los usuarios y encapsulándolo en una función:

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((data) => {
//     usuarios = data;
//     console.log(usuarios);
//     listadoUsuarios(usuarios)
//   });

// function listadoUsuarios(usuarios) {

//   usuarios.map((element, index) => {
//     const usersDiv = document.getElementById("datosUsuario");
//     const userElement = document.createElement("div");
//     usersDiv.appendChild(userElement);
//     userElement.textContent = `${index} - Nombre: ${element.name} Email: ${element.email}`;
//   });
// }

//Seguimos encapsulando:

getUsuarios()
  .then((data) => data.json())
  .then((data) => {
    usuarios = data;
    // console.log(usuarios)
    listadoUsuarios(usuarios);
    return getClementine();  // Esperamos a que getClementine() se complete
  })
  .then(data=>data.json())
  .then((user) => {
    mostrarClementine(user, 3);  // Pasando el índice 3 para mostrar a Clementine
  })
  .catch((error) => console.error('Error:', error));

function getUsuarios() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}
function getClementine() {
  return fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((clementine) => {
      console.log(clementine);
      return clementine;  // Devolvemos los datos correctamente
    })
    .catch((error) => console.error('Error fetching Clementine:', error));
}

function listadoUsuarios(usuarios) {
  usuarios.map((element, index) => {
    const usersDiv = document.getElementById("datosUsuario");
    const userElement = document.createElement("div");
    usersDiv.appendChild(userElement);
    userElement.textContent = `${index} - Nombre: ${element.name} Email: ${element.email}`;
  });
}
function mostrarClementine(element, index) {
  console.log(element);

  const clementineDiv = document.getElementById("datosUsuario");
  const clementineElement = document.createElement("div");
  clementineDiv.appendChild(clementineElement);
  clementineElement.textContent = `${index} - Nombre: ${element.name} Email: ${element.email}`;
}
