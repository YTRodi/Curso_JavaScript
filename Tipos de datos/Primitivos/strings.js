console.log("<--------------------------------------------------------------->");
let nombre = "Yago";
let apellido = "Rodi";
let saludo = new String("Hola!");
let lorem = "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, sit.   ";

console.log(nombre,apellido,saludo);
console.log(nombre.length,apellido.length,saludo.length);
console.log(nombre.toUpperCase(),apellido.toLowerCase());
console.log(nombre.includes("g"), lorem.includes("ipsum"), lorem.includes("Rodi"));
console.log(lorem);
console.log(lorem.trim()); //Quita los espacios en blanco
console.log(lorem.split(" ")); //Genera un array, separando la cadena cuando haya un espacio.
console.log(lorem.split(",")); //Genera un array, separando la cadena cuando haya una coma.

console.log("<--------------------------------------------------------------->");

//Concatenación:
saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log("Concatenación: " + saludo);

//Interpolación de variables:
//Template strings
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.` //Alt + 96 (ASCII)
console.log("Template strings: " + saludo2);
