// 1.Que pida 6 numeros por pantalla y los meta en un array.
// 2.Tiene que mostrar el array entero en el cuerpo de la página y en la consola.
// 3.Tiene que sacarlo ordenado y mostrarlo
// 4. Invertir su orden y mostrarlo
// 5.Mostrar cuantos elementos tiene el array
// 6.Hacer una búsuqeda de un valor introducido por el usuario y que nos diga si está en el array y que nos diga su posición.

let numerosUsuario = [];

// function mostrarResultados(numerosUsuario, elements) {
//   console.log(numerosUsuario);
//   document.write(numerosUsuario.join(" ,") + "<br>");
//   console.log(`El array tiene un total de ${elements} elementos. `);
//   document.write(`El array tiene un total de ${elements} elementos. `);
// }

// function conseguirArray() {
//   for (let i = 0; i < 6; i++) {
//     let numero = parseInt(prompt("Introduce un número: "));
//     numerosUsuario.push(numero);
//   }
// }

// function busqueda() {
//   let busqueda = parseInt(prompt("Introduce el elemento que quieras buscar: "));
//   let index = numerosUsuario.find((element) => element == busqueda);

//   if (index !== -1) {
//     console.log(`True, y su index es: ${index}`);
//   } else {
//     console.log("False");
//   }
// }

// function operacionFinal() {
//   conseguirArray();
//   numerosUsuario = numerosUsuario.sort((a, b) => a - b).reverse();

//   let elements = numerosUsuario.length;

//   mostrarResultados(numerosUsuario, elements);
//   busqueda();
// }

// operacionFinal();
