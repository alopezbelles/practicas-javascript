//programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales:

// let num1 = parseInt(prompt("Introduce el primer número:"));
// let num2 = parseInt(prompt("Introduce el segundo número:"));

// if(num1>num2){
//     console.log(num1 + " es el número mayor")
// } else if(num1<num2){
//     console.log(num2 + " es el número mayor")
// } else{
//     console.log("Los números son iguales")
// }

//Al programa anterior: si los numeros no son un número o son menores o iguales a cero, nos los vuelva a pedir

// let num1, num2 ;

// while (true) {
//     num1 = parseInt(prompt("Introduce el primer número:"))
//   if (!isNaN(num1) && num1>0) {
//     break;
//   } else {
//     window.alert("Introduce un número válido");
//   }
// }

// while (true) {
//     num2 =  parseInt(prompt("Introduce el segundo número:"));
//   if (!isNaN(num2)&& num2>0) {
//     break;
//   } else {
//     window.alert("Introduce un número válido");
//   }
// }

// if (num1 > num2) {
//   console.log(num1 + " es el número mayor");
// } else if (num1 < num2) {
//   console.log(num2 + " es el número mayor");
// } else {
//   console.log("Los números son iguales");
// }

//Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado.

// let totalNumeros = [];
// let suma = 0;

// while (true) {
//   let numero = parseInt(prompt("Introduce un número:"));
//   if (numero >= 0) {
//     totalNumeros.push(numero);
//     suma += numero;
//   } else {
//     break;
//   }
// }

// if(totalNumeros.length>0){
//     const media = suma / totalNumeros.length;
//     console.log("La suma total es: " + suma);
//     console.log("La media total es: " + media)
// }

//Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

// let num1 = parseInt(prompt("Introduce el primer número"));
// let num2 = parseInt(prompt("Introduce el segundo número"));

// let totalNumeros=[];

// for(let i = num1; i<=num2; i++){
//     totalNumeros.push(i);

// }

// console.log(totalNumeros)

//Mostrar todos los números impares que hay entre dos números introducidos por el usuario

// let num1 = parseInt(prompt("Introduce el primer número"));
// let num2 = parseInt(prompt("Introduce el segundo número"));

// let numerosImpares = [];

// for (let i = num1; i <= num2; i++) {
//     if(i%2 !== 0){
//         numerosImpares.push(i);
//     }
// }

// console.log(numerosImpares)

//Programa que nos muestre todos los numeros divisores de un numero que metes por prompt.

// let num = parseInt(prompt("Introduce el número"));

// let totalNumeros = [];
// let totalDivisores = [];

// for (let i = 0; i <= num; i++) {
//   totalNumeros.push(i);
// }

// for (let j = 0; j <= num; j++) {
//     if (num % j === 0) {
//       totalDivisores.push(j);
//     }
//   }

// // console.log(totalNumeros);
// console.log(totalDivisores);

//Programa que nos diga si un número es PAR o IMPAR. Introducido por PROMPT. Si el número introducido por promt es una letra, mesaje de alerta, Introduce un numero valido.

// let num = parseInt(prompt("Introduce un número:"));

// while (isNaN(num)) {
//   window.alert("Introduce un número válido.");
//   num = parseInt(prompt("Introduce un número:"));
// }

// while (num === 0) {
//   window.alert("El número introducido es 0. Introduce otro número.");
//   num = parseInt(prompt("Introduce un número:"));
// }

// if (num % 2 == 0) {
//   console.log("El número introducido es PAR.");
// } else {
//   console.log("El número introducido es IMPAR.");
// }

//Tabla de multiplicar de un número introducido por pantalla.

// let num = parseInt(prompt("Introduce un número:"))

// for(let i = 1; i<=10; i++){
//     console.log(num+"x"+i+"="+i*num)
// }

/////////////////////////CALCULADORA. Hacer una calculadora que pida dos números por pantalla.
//Si metemos mal alguno de los números, que los vuelva a pedir.
//Mostrar el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
//Dividirlo todo en funciones reutilizables.

// //Función para realizar los cálculos:

// function realizarCalculos(num1, num2) {
//   let suma = num1 + num2;
//   let resta = num1 - num2;
//   let multiplicar = num1 * num2;
//   let dividir = num1 / num2;

//   return { suma, resta, multiplicar, dividir };
// }

// module.exports = {
//     realizarCalculos,
//   };

// //Función para pedir los números por prompt

// function pedirNumero(mensaje) {
//   let num = parseInt(prompt(mensaje));
//   while (isNaN(num)) {
//     window.alert("Introduce un número válido.");
//     num = parseInt(prompt(mensaje));
//   }
//   return num;
// }

// //Función calculadora

// function calculadora() {
//   let num1 = pedirNumero("Introduce el primer número.");
//   let num2 = pedirNumero("Introduce el segundo número.");

//   let resultados = realizarCalculos(num1, num2);

//   console.log("La suma de los números es: " + resultados.suma);
//   console.log("La resta de los números es: " + resultados.resta);
//   console.log("La multiplicación de los números es: " + resultados.multiplicar);
//   console.log("La división de los números es: " + resultados.dividir);
// }

// calculadora();

//////////////////Programa que pida 6 números por pantalla y los meta en un array.

// let total = [];

// for (let i = 1; i <= 6; i++) {
//   let num = parseInt(prompt("Introduce el número " + i + ":"));

//   while (isNaN(num)) {
//     window.alert("Introduce un número válido.");
//     num = parseInt(prompt("Introduce el número " + i + ":"));
//   }

//   total.push(num);
// }

// console.log("Los números ingresados son: " + total.join(", "));

/////////////Mostrar el array anterior entero (todos sus elementos) en el cuadro de la página y en la consola (usando funciones)

// let total = [];

// for (let i = 1; i <= 6; i++) {
//   let num = parseInt(prompt("Introduce el número " + i + ":"));

//   while (isNaN(num)) {
//     window.alert("Introduce un número válido.");
//     num = parseInt(prompt("Introduce el número " + i + ":"));
//   }

//   total.push(num);
// }

// document.body.innerHTML= ("Los números ingresados son: " + total.join(", "));

// function multiplicar (x,y){
//     return x*y
// }

// module.exports = {multiplicar}

////////PRUEBA TÉCNICA - PALÍNDROMO //////////////////

// function palindromoFunciones(text){
//     let invertida = text.split("").reverse().join("");
//     return (invertida == text)
// }

// console.log(palindromoFunciones("otto")),
// palindromoFunciones("antonio");

// PALÍNDROMO USANDO CÓDIGO, SIN FUNCIONES PROPIAS DE JS

// function palindromo(palabra) {
//     //Dividir la palabra en un array de letras
//     let letras = [];

//     for(let i = 0; i<palabra.length; i++) {
//         letras.push(palabra[i]);
//     }

//     // Invertir el array con un bucle
//     let letrasInvertidas = []

//     for(let i = letras.length -1; i>=0; i--){
//         letrasInvertidas.push(letras[i]);
//     }

//     //Unir todas las letras del array con un bucle y guardar el resultado en variable
//     let palabraInvertida = "";
//     for(let i = 0; i<letrasInvertidas.length; i++){
//         palabraInvertida += letrasInvertidas[i];
//     }

//     //devolver resultado

//     return  palabraInvertida === palabra;
// }

// let resultado = palindromo("juan");
// let resultado2 = palindromo("otto");

// console.log(resultado)
// console.log(resultado2)

// function mostrarResultados(x,y){
//     console.log("El primer número es: " + x);
//     console.log("El segundo número es: " + y);
// }

// function comparacion(x,y){
//     return (console.log(x>y))

// }

// function suma(num1, num2){
//     mostrarResultados(num1, num2);
//     comparacion(num1, num2);
//     return num1 + num2;
// }

// suma(8, 4)
// suma(8, 4)

// function mostrar(x, y, cond = false){

//     if(!cond){
//         console.log(x+y);
//         console.log(x*y);
//         console.log(x/y);
//     }else{
//         console.log("vas mal encaminado")
//     }

// }

// mostrar(6,3)

// const saludar = nombre => "¡Hola, " + nombre + "!";

//   console.log(saludar("Juan")); // Imprimirá "¡Hola, Juan!"

// let texto = "Hola MUndo"

// let mayus = texto.toUpperCase();
// let minus = texto.toLowerCase()
// console.log(mayus)
// console.log(texto)
// console.log(minus)

// let numero = 44444;

// let numeroString = numero.toString();

// console.log(numeroString)
// console.log(numero)

// console.log("Despues de transformarlos...")

// numero = numero.toString();
// console.log(numero)

// let nombre ="Alex";
// let nombre2 = "Hugo";
// let numero = 222;

// let textoTotal = nombre + nombre2

// let array = ["Hola", "Alejandro", "como", "estás"]

// console.log(nombre)
// console.log(numero)
// console.log(nombre.length)
// console.log(array.length)
// console.log(textoTotal)

// function sumar(x,y){
//     return x+y
// }

// function restar(x,y){
//     return x-y
// }

// function calculos(x,y){
//     let cal1=sumar(x,y);
//     let cal2=restar(x,y);
//     return {cal1,cal2}
// }

// calculos(2,2)

// let respuesta = calculos(2,2);
// console.log(respuesta.cal1)
// console.log(respuesta.cal2)

// let texto1 = "Hola, me llamo Alejandro";

// console.log(texto1);

// texto1 = texto1.replace("Alejandro", "Enrique");

// console.log(texto1);

// let nombre = prompt("Introduce tu nombre: ");
// let apellido = prompt("Introduce tu apellido: ");

// let texto = `
//     <h1>Hola, cómo estás?</h1>
//     <h3>Mi nombre es: ${nombre}</h3>
//     <h3>Mi apellido es: ${apellido}</h3>

// `

// document.write(texto)

// let array = new Array("Alex", "Kike", "Mama", "Papa")

// console.log(array)

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// var intToRoman = function(num) {
//     switch(num){
//         case 1:
//             return "I";
//             break;
//         case 5:
//             return "V";
//             break;
//         case 10:
//             return "X";
//             break;
//         case 50:
//             return "L";
//             break;
//         case 100:
//             return "C";
//             break;
//         case 500:
//             return "D";
//             break;
//         case 1000:
//             return "M";
//             break;
//         default:
//             return "Introduce a valid number"
//     }

//     let dividedNum = num.toString().split("");
// };

//CONVERSOR DE NÚMERO A NÚMERO ROMANO

// function numRom(num) {
//   let dividedNum = num.toString().split("");
//   let realNum = dividedNum.map(Number);

//   let values = [];

//   for (let i = realNum.length - 1; i >= 0; i--) {
//     values.push(realNum[i] * Math.pow(10, realNum.length - 1 - i));
//   }

//   console.log("Los valores son:");
//   for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
//   }
// }

// numRom(123)
// numRom(150)

// console.log(1234 % 1000)

// let prueba = 1235;
// let resultPrueba = prueba-prueba % 100;

// console.log(resultPrueba)


// let array = ["Kike", "Alex", "Dolores", "Enrique", "Karma", "Gaia", "Leyre", "Troya", "Manolin", "Sansa"];

// let elemento = parseInt(prompt("Introduce el número que quieras comprobar: "));


// if (elemento >= array.length) {
//     alert("Introduce un número inferior a "+ array.length)
// }else{
//     alert(array[elemento])
// }

// const frutas = ["manzana", "banana", "cereza", "uva"];

// frutas.forEach(function(fruta, index, arr){
//     console.log(`Indice: ${index} - ${fruta}` )
//     if(index >= arr.length - 1){
//         console.log("Ya no hay más elementos en el array")
//     }
// })

// frutas.map(function(fruta, index, arr){
//     console.log(`Indice: ${index} - ${fruta}`)
// })

// const frutas = ["manzana", "banana", "cereza", "uva"];
// const verduras = ["zanahoria", "berenjena", "pimiento"];

// const alimentos = [frutas, verduras];

// let cambio = alimentos.join(" ");

// console.log(cambio)

// let cadena = "Texto1, Texto2, Texto3";
// let cadena_array = cadena.split(" ,");

// console.log(cadena_array)

// const frutas = ["manzana", "banana", "cereza", "uva"];

// let busqueda = frutas.find(elemento => elemento == "manzana")

// console.log(busqueda)

// main.js

// let alumno = {
//     nombre: "Carlos", 
//     edad: 35,
//     casado: true
// }

// console.log(alumno.nombre)
// console.log(alumno.nombre)
// console.log(alumno.nombre)

class Pokemon {
    constructor(nombre, tipo, nivel) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.nivel = nivel;
    }
  
    saludar() {
      console.log(`¡Hola! Soy ${this.nombre}, un Pokémon de tipo ${this.tipo} y nivel ${this.nivel}.`);
    }
  
    atacar(otroPokemon) {
      console.log(`${this.nombre} ataca a ${otroPokemon.nombre} con un poderoso ataque.`);
    }
  }

const pikachu = new Pokemon("Pikachu", "Eléctrico", 10);
const bulbasaur = new Pokemon("Bulbasaur", "Planta", 8);


pikachu.saludar(); // Pikachu saluda
bulbasaur.saludar(); // Bulbasaur saluda

pikachu.atacar(bulbasaur); // Pikachu ataca a Bulbasaur