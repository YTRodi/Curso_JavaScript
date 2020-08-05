/**
 * NOTA:
 * -Las únicas que pueden contener la etiqueta "export default" en su declaración, son las funciones.
 * -Las demás deben hacerse fuera de su declaración, example: const password.
 */

export const Persona = {
    nombre: "Yago",
    apellido: "Rodi",
    edad: 21,
    estadoCivil: "Soltero"
}

export const PI = Math.PI;

const password = "qwerty";
//export default password;

const hello = () => console.log("Hi!");

// //Sólo puede exportarse una sola cosa por default
// export default function greet() { //Función declarada
//     console.log("Hi modules +ES6 !! (ECMAScript 6)");
// }

//Sólo puede exportarse una sola cosa por default
export function greet() { //Función declarada
    console.log("Hi modules +ES6 !! (ECMAScript 6)");
}

export default class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}