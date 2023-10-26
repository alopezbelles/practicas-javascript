//FECHAS
//Objeto date

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth() + 1;
var date = fecha.getDate();
const time = `${fecha.getHours()}:${fecha
  .getMinutes()
  .toString()
  .padStart(2, "0")}:${fecha.getSeconds().toString().padStart(2, "0")}`;

var textoHora = `El año es: ${year} 
y la hora es ${time}. 
El mes es: ${month}. 
El día es: ${date}`;

console.log(fecha);
console.log(textoHora);


////////////////OPERADORES MATEMÁTICOS.

console.log(Math.random()) // Esto muestra un número random entre 0 y 0.99
console.log(Math.random()*10) //Al multiplicarlo por 10 saldrá un número hasta el 9.99 (entre 1 y 10 sin llegar a 10)
console.log(Math.floor(Math.random()*10)) //Con el math.floor, lo redondeamos HACIA ABAJO y conseguimos un numero entero sin decimales. 
console.log(Math.ceil(Math.random()*10)) //Con el math.floor, lo redondeamos HACIA ARRIBA y conseguimos un numero entero sin decimales. 
