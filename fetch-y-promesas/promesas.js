//PROMESAS

//Creamos la función "verificar números", que toma como parámetro un número y retornará nuestra promesa.
//Para crear la promesa utilizamos el constructor "new Promise", que acepta una función callback con dos parámetros distintos llamados "resolve" y "reject".
//Dentro de la promesa tendremos una condición. En nuestro caso verificaremos si "num" es de tipo "number". Si es así, resolvemos la promesa de forma exitosa utilizando la función "resolve", y enviamos como argumento el resultado. Cuando llamamos a "resolve" recibimos su respuesta en el método llamado ".then" enlazado a la llamada de la función que contiene nuestra promesa. Este método a su vez acepta una función callback para poder realizar operaciones con el valor recibido.
//Pero si num no es un número, rechazamos la promesa utilizando "reject" y lo capturamos con el método "catch".

//Declaramos la función:

// function verificarNum(num) {
//   return new Promise((resolve, reject) => {
//     if (typeof num === "number") {
//       resolve("Es un número.");
//     } else {
//       reject("No es un número.");
//     }
//   });
// }

// //Instanciamos la función:

// verificarNum("j")
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//Esto sería lo mismo pero con ASYNC, AWAIT:


async function verificarNumAsync(num) {
  if (typeof num === "number") {
    return "Es un número.";
  } else {
    throw new Error("No es un número.");
  }
}

async function ejemploAsyncAwait() {
  try {
    const resultado = await verificarNumAsync("j");
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

ejemploAsyncAwait();



///////////////////////////////////////////////////////////////////////////////////////////////////////
//OTRO EJEMPLO PERO CON POKEMON:

//En este ejemplo, si captura exitosa es "true" devuelve el mensaje de éxito, sino, mensaje fallido.
//Se le ha añadido un setTimeout para que el mensaje tarde unos segundos en aparecer.

function capturarPokemon(capturaExitosa) {
  return new Promise((resolve, reject) => {
    // Simulamos un tiempo de espera para la captura
    setTimeout(() => {
      if (capturaExitosa) {
        resolve("¡Has capturado al Pokémon!");
      } else {
        reject("La captura ha fallado. El Pokémon se escapó.");
      }
    }, 2000); // Espera 2 segundos antes de resolver o rechazar la promesa
  });
}

// Intentamos capturar un Pokémon
capturarPokemon(true)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });

//Otro ejemplo pero con Harry Potter.
//En este caso se ha creado la variable "retrasoAleatorio" que nos devuelve un número random del 1 al 3.
//En la condición, si el numero es inferior a 2 segundos devuelve el caso exitoso (también le he concatenado un console.log con el número generado por random), y sinó, el caso fallido.

function recibirCarta() {
  return new Promise((resolve, reject) => {
    const retrasoAleatorio = Math.random() * 3000; // Simulamos un tiempo de espera aleatorio hasta 3 segundos
    setTimeout(() => {
      if (retrasoAleatorio < 2000) {
        resolve(
          "Has recibido una carta de Hogwarts.",
          console.log(retrasoAleatorio)
        );
      } else {
        reject("La lechuza mensajera se ha retrasado en la entrega.");
      }
    }, retrasoAleatorio);
  });
}

// Intentamos recibir una carta de Hogwarts
recibirCarta()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
