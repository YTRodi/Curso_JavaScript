import { Person } from "./constants.js";

console.log("<---- EJ 02 - START ---->");

function stringCut(data, lengthCut) {

    let element = "";

    if (isNaN(data)) {
        for (let i = 0; i < lengthCut; i++) {
            element += data[i];
        }
    }else{
        element = `El dato no es un string, es del tipo ${typeof(data)}.`;
    }
    
    return element;
}

console.log(stringCut("Hola mundo", 4)); //Hola
console.log(stringCut("Hola mundo", 6)); //Hola m
console.log(stringCut("Hola mundo", 7)); //Hola mu
console.log(stringCut("Hola mundo", 8)); //Hola mun
console.log(stringCut("Hola mundo", 9)); //Hola mund
console.log(stringCut("Hola mundo", 10)); //Hola mundo

console.log(stringCut(789,2));
console.log(stringCut(900.50,2));
console.log(stringCut(Person));
console.log(stringCut(Person.name,3));

console.log("<---- EJ 02 - END ---->");