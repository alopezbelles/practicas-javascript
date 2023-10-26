//////////////////////////Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.

// let phrase = prompt("Escribe una frase: ").toLowerCase();
// let phraseArray = phrase.split("");

// let count = 0;

// console.log(phrase);
// console.log(phraseArray);

// function finder() {
//   for (let i = 0; i < phraseArray.length; i++) {
//     if (phraseArray[i] === "a") {
//       count += 1;
//     }
//   }
//   console.log("La letra A aparece: " + count + " veces.");
// }

// finder();

/////////////////////////FUNCIÓN COMPACTADA:

// let phrase = prompt("Escribe una frase: ").toLowerCase();
// let count = 0;

// function finder() {
//   for (let i = 0; i < phrase.length; i++) {
//     if (phrase[i] === "a") {
//       count += 1;
//     }
//   }
//   console.log("La letra A aparece: " + count + " veces.");
// }

// finder();

////////////////////Escribe un programa que pida una frase y escriba las vocales que aparecen:

// let phrase = prompt("Escribe una frase: ").toLowerCase();
// let vocals = ["a", "e", "i", "o", "u"];
// let myarray = [];
// let count = 0;

// for (let i = 0; i < phrase.length; i++) {
//   let isVowel = false; // Variable para verificar si es vocal
//   for (let j = 0; j < vocals.length; j++) {
//     if (phrase[i] === vocals[j]) {
//       isVowel = true; // Es una vocal
//       break; // No necesitamos verificar más, ya sabemos que es vocal
//     }
//   }

//   if (isVowel && !myarray.includes(phrase[i])) {
//     myarray.push(phrase[i]);
//     count++;
//   }
// }

// console.log(
//   "Aparecen " +
//     count +
//     " vocales. Las vocales que aparecen son: " +
//     myarray.join(", ")
// );

//////////////////////////Escribir un programa que escriba en pantalla los divisores de un número dado.

// let num = parseInt(prompt("Escribe un número: "));

// let divisores = [];

// for (let i = 0; i <= num; i++) {
//   if (num % i == 0) {
//     divisores.push(i);
//   }
// }

// console.log("Los números divisores son: " + divisores);

//////////////////Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.

// let num1 = parseInt(prompt("Escribe el primer número..."));
// let num2 = parseInt(prompt("Escribe el segundo número..."));

// let divisores1 = [];
// let divisores2 = [];

// for (let i = 0; i <= num1; i++) {
//   if (num1 % i == 0) {
//     divisores1.push(i);
//   }
// }
// console.log(divisores1);

// for (let j = 0; j <= num2; j++) {
//   if (num2 % j == 0) {
//     divisores2.push(j);
//   }
// }
// console.log(divisores2);

// //Ordeno los arrays. El metodo sort() ordena de menos a más los números, y alfabéticamente los strings.
// divisores1.sort((a, b) => a - b);  // Ordena numéricamente
// divisores2.sort((a, b) => a - b);  // Ordena numéricamente

// const coincidentes = [];

// let i = 0;
// let j = 0;

// while (i < divisores1.length && j < divisores2.length) {
//   if (divisores1[i] === divisores2[j]) {
//     coincidentes.push(divisores1[i]);
//     i++;
//     j++;
//   } else if (divisores1[i] < divisores2[j]) {
//     i++;
//   } else {
//     j++;
//   }
// }

// console.log("Elementos coincidentes:", coincidentes);

/////////////////Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// let num = parseInt(prompt("Introduce un número..."));
// let esPrimo = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     esPrimo = false;
//     break;
//   }
// }

// if(esPrimo){
//   console.log("El número SÍ es primo.")
// }else{
//   console.log("El número NO es primo.")
// }

///////////////Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

// let string = prompt("Introduce tu palabra: ")

// let split = string.split("");
// let charac = split[0]

// if(isNaN(charac)){
//   console.log("La palabra empieza por LETRA")
// }else{
//   console.log("La palabra empieza por NÚMERO")
// }

///////////Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

// let numRamdom = Math.floor(Math.random() * 11);
// let numUser = parseInt(prompt("Introduce un número: "));

// console.log("Calculando...");

// setTimeout(() => {
//   if (numRamdom === numUser) {
//     console.log("Eres un mago! Has acertado!");
//   } else {
//     console.log("Has fallado, prueba de nuevo. ");
//   }
// }, 2000);

//////////////////////////Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

// let num1 = parseInt(prompt("Ingresa el primer número"));
// let num2 = parseInt(prompt("Ingresa el segundo número"));

// let pares1 = [];
// let pares2 = [];

// for (let i = 1; i <= num1; i++) {
//   if (i % 2 === 0) {
//     pares1.push(i);
//   }
// }

// for (let i = 1; i <= num2; i++) {
//   if (i % 2 === 0) {
//     pares2.push(i);
//   }
// }

// let sumaParesNum1 = 0;
// let sumaParesNum2 = 0;

// for (let i = 0; i < pares1.length; i++) {
//   sumaParesNum1 += pares1[i];
// }

// for (let i = 0; i < pares2.length; i++) {
//   sumaParesNum2 += pares2[i];
// }

// console.log("Números pares hasta " + num1 + ":", pares1);
// console.log("Números pares hasta " + num2 + ":", pares2);

// console.log(
//   "La suma total de los pares de los dos números es: " +
//     (sumaParesNum1 + sumaParesNum2)
// );

//////LO MISMO pero reorganizando el código en funciones:

// function obtenerPares(num) {
//   let pares = [];
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       pares.push(i);
//     }
//   }
//   return pares;
// }

// function sumarPares(pares) {
//   let sumaPares = 0;
//   for (let i = 0; i < pares.length; i++) {
//     sumaPares += pares[i];
//   }
//   return sumaPares;
// }

// function mostrarResultado(num1, num2, pares1, pares2) {
//   console.log("Números pares hasta " + num1 + ":", pares1);
//   console.log("Números pares hasta " + num2 + ":", pares2);
//   console.log(
//     "La suma total de los pares de los dos números es: " +
//       (sumarPares(pares1) + sumarPares(pares2))
//   );
// }

// let num1 = parseInt(prompt("Ingresa el primer número"));
// let num2 = parseInt(prompt("Ingresa el segundo número"));

// let pares1 = obtenerPares(num1);
// let pares2 = obtenerPares(num2);

// mostrarResultado(num1, num2, pares1, pares2);

//////////////Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

// let num;

// while (true) {
//   num = parseInt(prompt("Ingresa un número mayor o igual a 2: "));
//   if (num < 2) {
//     alert("El número debe ser mayor o igual a 2!!!");
//   } else {
//     break;
//   }
// }

// if(num % 2 == 0){
//   console.log("El número NO es primo")
// }else{
//   console.log("El número SÍ es primo")
// }

//////////Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

// let num = parseInt(prompt("Introduce un número mayor que 0: "));

// let divisores = [];
// let suma = 0;

// for (let i = 0; i < num; i++) {
//   if (num % i === 0) {
//     divisores.push(i);
//   }
// }
// console.log(divisores);

//El método "reduce" sirve para sumar todos los números dentro del array.
// let total = divisores.reduce((a, b) => a + b, 0);

// console.log(total);

// if (total === num) {
//   console.log("El número es perfecto!!");
// } else {
//   console.log("El número no es perfecto.");
// }

/////////////////Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

// function entero(num){
//   if(isNaN(num)){
//     console.log("Introduce un número válido")
//   }else{
//     console.log("El número es correcto. ")
//   }
// }

// entero(4);
// entero("j");

/////////////////Crear una función autoejecutable que muestre "muuu" en pantalla

// (function(){
//   console.log("MUUUUUUUUUU")
// })();

////////////////Dado un array, Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

// let numeros = [1, 2, 3, 4, 5, 6];
// let i = 0;

// while (i < numeros.length) {
//   console.log(numeros[i]);
//   i++;
// }

////////Lo mismo con un bucle FOR:

// let numeros = [1, 2, 3, 4, 5, 6];

// for(let i = 0; i<numeros.length; i++){
//   console.log(numeros[i])
// }

////////Lo mismo con un forEach:

// let numeros = [1, 2, 3, 4, 5, 6];

// numeros.forEach(element => {
//   console.log(element)

// });

/////Generar una copia del array pero con todos los elementos incrementado en 1.

// let numeros = [1, 2, 3, 4, 5, 6];

// let sumados = numeros.map(function(e){
//   return e+1
// })

// console.log(sumados)

/////////Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

// let numeros = [];

// for(let i = 0; i< 20; i++){
//   numeros.push(Math.floor(Math.random()*101))
// }

// console.log(numeros)

/////////Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

// let numeros = [];

// let tope = parseInt(prompt("Introduce un número: "));

// for(let i = 0; i<tope; i++){
//   numeros.push(Math.floor(Math.random()*101))
// }

// console.log(numeros)

/////////////Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

// let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

// let colorUser = prompt("Introduce un color: ")

// let solucion = colores.filter(color => color === colorUser)

// if(solucion.length>0) {
//   console.log("El color " + colorUser + " está en el array.")
// }else{
//   console.log("El color " + colorUser + " NO está en el array.")

// }

///////Existen dos arrays, haz un nuevo array con los elementos comunes

// let arr1 = [1,2,4,7]
// let arr2 = [1,2,5,7]

// let newArr = []

// for(let i = 0; i<arr1.length; i++){
//   if(arr1[i]===arr2[i]){
//     newArr.push(arr1[i])
//   }
// }

// console.log(newArr)

////////////El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.

// let num1 = prompt("Ingresa la primera cadena de números: ")
// let num2 = prompt("Ingresa la segunda cadena de números: ")

// // console.log(num1)
// let cadena1 = num1.split(",").map(num=>parseInt(num))
// let cadena2 = num2.split(",").map(num=>parseInt(num))
// // console.log(cadena)

// if(cadena1.length == cadena2.length){
//   console.log("Las cadenas tienen la misma longitud. ")
// }else{
//   console.log("Las cadenas son diferentes. ")
// }

//////El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

// let num1 = prompt("Ingresa la primera cadena de números: ")
// let num2 = prompt("Ingresa la segunda cadena de números: ")

// let cadena1 = num1.split(",").map(num=>parseInt(num))
// let cadena2 = num2.split(",").map(num=>parseInt(num))
// let arrayTotal = [];

// if(cadena1.length == cadena2.length){
//   for(let i = 0; i<cadena1.length; i++ ){
//       let num = cadena1[i] + cadena2[i];
//       arrayTotal.push(num);
//     }
//   }else{
//     console.log("Las dos cadenas son diferentes.")
//   }

//   console.log("Las dos cadenas son iguales y la suma es: " + arrayTotal)

///////////////Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga solo las palabras que empiezan con una vocal.

// function palabras(array){
//   let vocales = [];
//   let vowelRegex = '^[aieouAIEOU].*'
//   for(let i =0; i<array.length; i++){
//     let firstCharact = array[i][0]
//     if(firstCharact.match(vowelRegex)){
//       vocales.push(array[i])
//     }
//   }
//   console.log(array);
//   console.log(vocales);
// }

// palabras(["naranja", "obeja", "nave", "arbol", "elefante", "consola"])

//////////Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de menor a mayor, (sin ocupar el método .sort)

/////////Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias.

// function tortilla(personas) {
//   let patatas = 200 * personas;
//   let huevos = 1 * personas;
//   let cebolla = 60 * personas;

//   console.log(
//     "Las cantidades para hacer una tortilla para " +
//       personas +
//       " persona/s son: " +
//       patatas +
//       "g de patatas, " +
//       huevos +
//       " huevo/s, y " +
//       cebolla +
//       "g de cebolla"
//   );
// }

// tortilla(1)
// tortilla(2)
// tortilla(3)

//////////////OPERADORES TERNARIOS Y DOBLE ANIDAMIENTO EN LAS CONDICIONES:

// const condition = false;
// const secondCondition = false;

// const c = condition? "Hola mundo" : "adiós mundo"
// console.log(c)

// const d = condition? "Hola mundo" : (secondCondition? "Adiós mundo" : "Menuda rallada");
// console.log(d)

//Ejercicio: imprimir una lista de números, del 1 al diez, con la particularidad de que si el numero es multiplo de 3, se imprime la palabra FIZZ, si es de 5, BUZZ y si es de 3 y de 5, FIZZBUZZ.

function fizzBuzz(){
    
}

for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + "-" + "FIZZBUZZ");
  } else if (i % 5 === 0) {
    console.log(i + "-" + "BUZZ");
  } else if (i % 3 === 0) {
    console.log(i + "-" + "FIZZ");
  }
}
