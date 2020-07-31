//JS es un lenguaje de programación orientado a objetos (Pero no a clases, sino que a prototipos).

// const animal = {
//     nombre: "Snoopy",
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo.");
//     }
// }

// console.log(animal);

//Función constructora.
// versión #1
// function Animal(nombre,genero){
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //Métodos
//     this.sonar = function(){
//         console.log("Hago sonidos porque estoy vivo.");
//     };

//     this.saludar = function(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     };
// }

//Función constructora donde asignamos los métodos al prototipo.
function Animal(nombre,genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Métodos (En el prototipo).
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo.");
};

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
};


const perro = new Animal("Scott","Macho");
const gato = new Animal("Lola","Hembra");

console.log(perro);
console.log(gato);

perro.sonar();
perro.saludar();

gato.sonar();
gato.saludar();