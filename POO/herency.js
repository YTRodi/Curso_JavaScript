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

//Herencia prototipica
function Perro(nombre,genero,tamanio){
    this.super = Animal; //Con esto le digo que su padre es Animal.
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

//Perro hereda de Animal.
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del prototipo padre
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido.");
}

Perro.prototype.ladrar = function(){ //Función propia de Perro
    console.log("Guau guau!");
}

const perro = new Animal("Scott","Macho");
const gato = new Animal("Lola","Hembra");

console.log(perro);
console.log(gato);

perro.sonar();
perro.saludar();

gato.sonar();
gato.saludar();


const scott = new Perro("Scott","Macho","Mediano");

console.log(scott);
console.log(scott.sonar());
console.log(scott.saludar());