//JSON: JavaScript Object Notation.
//Un objeto es una colección de propiedades.

var pelicula = {
  titulo: "Batman vs Superman",
  year: 2017,
  pais: "USA",
};

// console.log(pelicula);
// console.log(pelicula.titulo);
// console.log(pelicula.year);
// console.log(pelicula.pais);

var peliculas = [
  {
    titulo: "Harry Potter",
    year: 2001,
    pais: "United Kingdom",
  },
  {
    titulo: "El señor de los anillos",
    year: 2005,
    pais: "New Zealand",
  },

  {
    titulo: "El quinto elemento",
    year: 2009,
    pais: "El cairo",
  },
];

// console.log(peliculas[0].titulo)
// console.log(peliculas[1].year)
// console.log(peliculas[2].pais)

for(var i = 0; i < peliculas.length; i++){
    console.log(peliculas[i].titulo)
}