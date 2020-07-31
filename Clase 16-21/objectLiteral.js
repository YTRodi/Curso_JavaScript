//A partir de EcmaScript 6, JS implementa los objetos literales.
let nombre = "Scott";
let edad = 7;

const perro = {
    nombre:nombre,
    edad:edad,
    
    ladrar: function(){
        console.log("Guau guau!");
    }
}

console.log(perro);
perro.ladrar();

//No hace falta asignarle un valor, usamos directamente la variable. (Nombre y edad)
const dog = {
    nombre,
    edad,
    raza: "Callejero",

    //Nueva forma de declarar métodos.
    ladrar(){
        console.log("Guau guau guau!!");
    }
}

console.log(dog);
dog.ladrar();