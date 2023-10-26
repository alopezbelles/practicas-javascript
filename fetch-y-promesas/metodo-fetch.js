//Como utilizar "fetch" para obtener datos de una API de forma facil y rápida.

//Escribimos "fetch" e insertamos como parámetro la URL sobre la cual queremos obtener los datos.
//Fetch devuelve una promesa, por lo que utilizaremos el método "then" y "catch" para capturar el objeto respuesta o para capturar posibles errores. Cabe destacar que "fetch" siempre devuelve su promesa de forma satisfactoria, por lo que para manejar posibles errores, utilizaremos primero una condición.
//Si la propiedad "OK" de la respuesta no es "OK", lanzaremos una excepción mediante el "throw new Error()". Esto detendrá inmediatamente la ejecución en ese punto, y pasará el control al bloque "catch".
//En cambio si la respuesta es "OK", convertiremos la respuesta a formato .json para poder leerla y retornaremos el resultado.
//El método JSON devuelve también una promesa, por lo que acudiremos de nuevo al método "then" para capturar el resultado, y poder trabajar, ahora ya, con el valor final.

fetch("url")
  .then((res) => {
    if (!res.ok) {
      throw new Error("X");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log(err);
  });

//EJEMPLO CON POKEMON:

const pokemonId = 1; // ID del Pokémon que queremos obtener

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("No se pudo obtener la información del Pokémon.");
    }
    return res.json();
  })
  .then((pokemonData) => {
    console.log("Información del Pokémon:");
    console.log("Nombre:", pokemonData.name);
    console.log("Altura:", pokemonData.height);
    console.log("Peso:", pokemonData.weight);
    console.log(
      "Habilidades:",
      pokemonData.abilities.map((ability) => ability.ability.name)
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Explicación:

//Utilizamos fetch para hacer una solicitud a la PokeAPI para obtener información sobre un Pokémon específico (cuyo ID es 1 en este caso).
//Verificamos si la respuesta es exitosa (res.ok). Si no es exitosa, lanzamos un error.
//Si la respuesta es exitosa, convertimos la respuesta a formato JSON con res.json().
//Después, trabajamos con los datos del Pokémon en el segundo .then.
//Imprimimos en la consola el nombre, altura, peso y habilidades del Pokémon.
//En caso de cualquier error, lo manejamos en el bloque .catch y mostramos un mensaje de error.
