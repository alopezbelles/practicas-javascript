// let edad = prompt('Introduce tu edad');

// if(edad >= 18){
//     console.log("ya puedes conducir")
// } else {
//     console.log("Eres menor de edad")
// }

/////////////////////////////////

// let nota = parseFloat(prompt('Introduce una nota del 1 al 10'));

// switch (true) {
//     case nota >= 0 && nota <= 4:
//         console.log("La nota es INSUFICIENTE");
//         break;
//     case nota >= 5 && nota <= 6:
//         console.log("La nota es BIEN");
//     case nota >= 8 && nota <= 9:
//         console.log("La nota es NOTABLE");
//     case nota === 10:
//         console.log("La nota es SOBRESALIENTE");
//         break;
//     default:
//         console.log("La nota no es válida")

// }

//////////////////////////////

// let contador = 1;

// do {
//     console.log(contador);
//     contador ++;
// } while (contador <= 5);

//////////////////////////////

//pedir strings (cadenas de texto) hasta que se pulse CANCELAR. Al salir con cancelar, deben mostrarse todas las cadenas concatenadas con un guión.

// var cadenaConcatenada = ""; // Inicializamos la cadena vacía

// do {
//   var cadena = prompt("Introduce una palabra:");

//   if (cadena !== null) {
//     cadenaConcatenada += cadena + "-";
//   }
// } while (cadena !== null);

// console.log(cadenaConcatenada);

// if(cadenaConcatenada.length > 0) {
//     cadenaConcatenada = cadenaConcatenada.slice(0,-1)
// }
// console.log(cadenaConcatenada);

// let palabra = 123;
// palabra = palabra.toString();

// palabra = palabra.slice(0, -1);

// console.log(palabra)

//////////////////////////////////////

//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// var totalNumeros = 0;

// do {
//   var entrada = prompt("Introduce un número: ");

//   if (entrada === null ) {
//     break;
//   }

//   var numero = parseInt(entrada);

//   if (!isNaN(numero)) {
//     totalNumeros += numero;
//   } else {
//     alert("No has introducido un número válido");
//   }
// } while (true);

// console.log("La suma es: " + totalNumeros);

//////////////////////////////////////////////

//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma, usando doble bucle for:


// var i;
// var rep;

// // BUCLE FOR PARA RECORRER DE 1 A 30

// for(i=0; i<=30; i++){
//     //bucle interior para hacer las repeticiones
//     for(rep=0; rep<i; rep++) {
//         //imprimimos el numero i veces
//         document.write(i)
//     }
//     //imprimimos salto de línea
//     document.write("<br>")
// }


// var nombre = "Alexander";
// var nombre = "David";

// let nombre2 ="Jorge";
// // let nombre2 = "Juan";

// nombre2 = "Darío"

// console.log(nombre)
// console.log(nombre2)

// const number = 2;

// const myList = [];

// myList.push(["Hola", "Ejemplo"], [2,2], [3,3], ["Adios", "Adios"], [4,4])

// console.log(myList)


// function isLess(a, b) {
//     return a < b 
//   }
  
//   let resultado = isLess(10, 15);

//   console.log(resultado)

// const myObj = {
//     prop1: "val1",
//     prop2: "val2"
//   };
  
//   const prop1val = myObj.prop1;
//   const prop2val = myObj.prop2;

//   console.log(prop1val)
//   console.log(prop2val)

// const ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
//   };

//   ourDog["name"] = "Cambio";

//   console.log(ourDog)

//   ourDog.tails = 2;
//   console.log(ourDog)

//   ourDog.bark = "bow-bow";
//   console.log(ourDog)




// let num1 = 100;
// let num2 = 200;

// let condition = true;

// let array = []

// if(condition){
//     array.push(125)
// }else {
//     console.log ("Está mal")
// }


// console.log(condition);
// console.log(array)


// const myArr = [2, 3, 4, 5, 6];

// let total = 0;

// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i]; // Suma el valor de cada elemento al total
// }

// console.log(total); // Imprime el resultado de la suma en la consola

// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for( let i = 0; i< arr.length; i++){
//       for(let j = 0; j<arr[i].length; j++){
//         product *= arr[i][j]
//       }
//     }
  
  
//     // Only change code above this line
//     return product;
//   }
  
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Setup
// const myArray = [];
// let i = 10;

// // Only change code below this line

// do{
//   myArray.push(i);
//   i++;
// } while (i<11)

// console.log(i)
// console.log(myArray)

// function sum(arr, n) {
//     // Caso base: cuando n es 0, la suma es 0
//     if (n === 0) {
//       return 0;
//     }
    
//     // Llamada recursiva: suma el elemento en la posición n-1 y los primeros n-1 elementos
//     return sum(arr, n - 1) + arr[n - 1];
//   }
  
//   // Ejemplo de uso
//   const arr = [1, 2, 3, 4, 5];
//   const n = 3; // Sumar los primeros 3 elementos
//   const result = sum(arr, n);
  
//   console.log(result); // Debería imprimir 6 (1 + 2 + 3)

// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//       for(let i = 0; i<contacts.length; i++){
//         if(name === contacts[i].firstName){
//           if(contacts[i].hasOwnProperty(prop)){
//             return contacts[i][prop];
//           } else {
//             return "No such property";
//           }
//         }
//       }
//       return "No such contact";
//     // Only change code above this line
//   }
  
//   lookUpProfile("Akira", "likes");

// let number = Math.floor(Math.random() * 20);

// console.log(number)

// let number = "007";
// let numberTransform = parseInt(number)

// console.log(numberTransform)


// function rangeOfNumbers(startNum, endNum) {
//     // Base case: if startNum is greater than endNum, return an empty array
//     if (startNum > endNum) {
//       return [];
//     } else {
//       // Recursive case: call rangeOfNumbers with startNum + 1 and concatenate startNum to the result
//       const result = rangeOfNumbers(startNum + 1, endNum);
//       result.unshift(startNum); // Add startNum to the beginning of the array
//       return result;
//     }
//   }
  
//   // Example usage:
//   const rangeArray = rangeOfNumbers(1, 5);
//   console.log(rangeArray); 

function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  let result1 = palindrome("eye");
  let result2 = palindrome("oje");

  console.log(result1)
  console.log(result2)