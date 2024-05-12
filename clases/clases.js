

console.log('Estás en el js de las clases.')
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

let pikachu = new Pokemon('Pikachu', 'Electrico', 50, 200);

pikachu.informacion();
pikachu.recibirDaño(20);
pikachu.recibirDaño(30);
pikachu.subirNivel();
pikachu.subirNivel();
pikachu.subirNivel();

let mewTwo = new Pokemon('MewTwo', 'Psíquico', 100, 1000);
mewTwo.informacion();
mewTwo.recibirDaño(30);
mewTwo.subirNivel();



