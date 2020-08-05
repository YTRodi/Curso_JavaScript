import greet, { PI, Persona } from "./constants.js";
import { arithmetic } from "./arithmetic.js";
import Person from "./constants.js";

console.log(PI);
console.log(Persona);
console.log(arithmetic.sum(3,4));
console.log(arithmetic.substract(3,4));
//greet(); //Se auto completó en el import, ya que lo exportamos por default.

let itStudent = new Person("Yago",21);
console.log(`Hi! I'm ${itStudent.name} and I have ${itStudent.age} years old.\nNice to meet you!`);

console.log("Archivos del archivo modules.js");