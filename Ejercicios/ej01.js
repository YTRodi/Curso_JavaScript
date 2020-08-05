import { Person } from "./constants.js";

console.log("<---- EJ 01 - START ---->");
/**
 * 
 * @param {string} data character numbers to return
 */
function stringCounter(data) {
    if(isNaN(data)){
        return `La cadena ${data} tiene ${data.length} caracteres.`;
    }else{
        return "El dato no es un string.";
    }
}

console.log(stringCounter("Hola mundo")); //10
console.log(stringCounter("Yago Tobias Rodi")); //16
console.log(stringCounter(789)); //"El dato no es un string."
console.log(stringCounter(Person)); //undefined
console.log(stringCounter(Person.name)); //4

console.log("<---- EJ 01 - END ---->");