

// Crear una nueva clase a raiz de una clase ya creada y que herede sus propiedades

class Pokemon {
    constructor(nombre, tipo, nivel, vida){
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.vida = vida;
    }

    // Método para mostrar la información del pokemon
    informacion(){
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}, Nivel: ${this.nivel}, Vida: ${this.vida} puntos de vida.`);
    }

    // Método para que el pokemon reciba daño
    recibirDaño(daño){
        this.vida -= daño;
        if(this.vida <= 0){
            console.log(`${this.nombre} ha sido derrotado. 😢`)
        } else {
            console.log(`${this.nombre} ha recibido ${daño} de daño. Su vida ahora es de ${this.vida} puntos de vida.`);
        }
    }

    // Método para subir de nivel
    subirNivel(){
        this.nivel ++;
        console.log(`${this.nombre} ha subido de nivel. Ahora tiene ${this.nivel}`);
    }
}

class pokemonLegendario extends Pokemon{
    constructor(nombre, tipo, nivel, vida){
        super(nombre, tipo, nivel, vida);
        this.superpoder = 'Ventisca';
    }

    superPoder(){
        console.log(`${this.nombre} ha usado su superpoder ${this.superpoder}`);
    }
}

let articuno = new pokemonLegendario('Articuno', 'Hielo', 100, 1000);

articuno.informacion();
articuno.superPoder('Ventisca');