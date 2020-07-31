/*
    Operador ternario en condicional "if"
 */
let edad = 18;
let sosMayor = (edad >= 18)
    ?"Sos mayor de edad" //if
    :"Sos menos de edad"; //else

console.log(sosMayor);

//LOOPS
let count = 0
while (count < 10) {
    console.log("While: " + count);
    count++;
}

let numbers = [10,20,30,40,50,60,70];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

//For para objetos
const programador = {
    nombre: "Yago",
    apellido: "Rodi",
    edad: 21
}

//"forin" me permite recorrer todas las propiedades de un obj (No usamos el operador punto '.')
for(const propiedad in programador){
    console.log("Key: " + propiedad + " - Value: " + programador[propiedad]);
}

//"forof" Nos permite recorrer todos los obj que sean iterables
for (const element of numbers) {
    console.log("array numbers: " + element);
}

let str = "Hola mundo!";
let i = 0;
for (const character of str) {
    console.log("i: " + i + " - " +character);
    i++;
}