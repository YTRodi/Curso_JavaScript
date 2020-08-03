/*
    NOTAS:
    Libreria para el manejo de los tiempos en JS:
    -Moment.js
    https://momentjs.com/
*/

console.log(Date());

let fecha = new Date(); //Constructor Date
console.log(fecha);
console.log("Día en el mes: " + fecha.getDate());
console.log("Día de la semana: " + fecha.getDay()); //D L M M J V S -> 0 1 2 3 4 5 6
console.log("Mes del año: " + fecha.getMonth()); // Empieza de cero, como un array. (Mes del año - 1)
console.log("Año: " + fecha.getFullYear());

console.log("<------------------------->");
console.log(`Horas: ${fecha.getHours()} - Minutos: ${fecha.getMinutes()} - Segundos: ${fecha.getSeconds()} - Milisegundos: ${fecha.getMilliseconds()}`);
console.log(`Método 'ToString()': ${fecha.toString()}`);
console.log(`Método 'toDateString()': ${fecha.toDateString()}`);
console.log(`Método 'toLocaleDateString()': ${fecha.toLocaleDateString()}`); //Sólo fecha.
console.log(`Método 'fecha.getTimezoneOffset()': ${fecha.getTimezoneOffset()}`);
console.log(`Método 'Date.now()': ${Date.now()}`); //Fecha timeStamp (Cuantos segundos pasaron desde el 1 enero de 1970 al presente);

console.log("<------------------------->");
let cumpleaniosMio = new Date(1998,08,7); //Es un array.
console.log(cumpleaniosMio);
console.log(cumpleaniosMio.toDateString()); //Sin la hora.