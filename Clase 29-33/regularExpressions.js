/**
 * IDEM Terminal Linux
 * ¿Que son?
 * Son una secuencia de secuencia de caracteres que forma un patrón
 * de búsqueda principalmente utilizada para la 
 * búsqueda de patrones de cadenas de caracteres.
 */
let cadena = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus amet a cumque vel aspernatur qui, nihil provident consequatur repellat deserunt.";

//let expReg = new RegExp("Lorem","g"); //Bandera 'g' = Global
let expReg = new RegExp("Lorem","i"); //Bandera 'g' = Ignora mayusculas y minusculas (Igual que en terminal de Linux).
let expReg2 = /Lorem/ig; //ig son las banderas.

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));