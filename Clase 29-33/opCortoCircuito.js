/*
    NOTA:
    Sería como la sobrecarga de métodos.
 */

/**
 * 
 * @param {string} nombre Nombre de la persona.
 */
function saludar(nombre) {
    //Si ingresan el nombre, se setea. Si no asignan nada, se pone por defecto el valor "Desconocido".
    nombre = nombre || "Desconocido"; //Operador de cortocircuito
    console.log(`Hola ${nombre}!`);
}

saludar("Pepe");
saludar();

//OR
//Se ejecuta lo de la izquierda.
console.log("<-------------OR-------------->");
console.log("Cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");

//Se ejecuta lo de la derecha.
console.log(false || "Valor de la derecha"); 
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha"); 
console.log("" || "Valor de la derecha"); 

//AND
console.log("<-------------AND-------------->");
console.log(false && "Valor de la derecha"); 
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha"); 
console.log("" && "Valor de la derecha"); 