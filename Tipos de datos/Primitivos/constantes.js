/*Errores de sintaxis:
    const NUEVE; //(Siempre hay que asignarle un valor)
    PI = 15; // Inmutable.
*/
const TEXTO = "Hola Mundo"
const PI = 3.1416;

console.log(PI);
console.log(TEXTO);

console.log("<--------------------------------------------------------------->");

//Objeto
let mi_obj = {
    nombre: "Yago",
    edad: 21
}

//Array
let colores = ["Blanco", "Negro","Azul"]

console.log(mi_obj);
console.log(colores);

//Agrego datos:
mi_obj.correo = "correo@gmail.com";
colores.push("Naranja");

console.log(mi_obj);
console.log(colores);