//Clase 44.
//Una manera de ejecutar a posterior funciones en JS, lo hacemos mediante temporizadores.
//SetTimeOut = Recibe una callback y recibe un tiempo expresado en milisegundos

// console.log("Inicio");

// setTimeout(() => {
// 	console.log("Ejecutando un setTimeOut()\nEsto se ejecuta una sola vez.");
// }, 3000);

// //Para ejecutar acciones en un intervalo de tiempo, tenemos el setInterval.
// setInterval(() => {
// 	console.log("Ejecutando un setInterval()\nEsto se ejecuta indefinidamente cada cierto intervalo de tiempo.");
// }, 2000);

//<---------------------------------------------------------------->

// //RELOJ EN TIEMPO REAL.
// setInterval(() => {
// 	console.log(`Hora en tiempo real: ${new Date().toLocaleTimeString()}`);
// }, 1000);

//<---------------------------------------------------------------->

//Para cancelar un setTimeOut, uso 'clearTimeOut()', pero primero debo guardarlo en una variable.
// let temporizador = setTimeout(() => {
// 	console.log(`Hora en tiempo real: ${new Date().toLocaleTimeString()}`);
// }, 1000);

// clearTimeout(temporizador);
// console.log("Después del clearTimeOut().");

//<---------------------------------------------------------------->

//Para cancelar un setInterval, uso 'clearTimeOut()', pero primero debo guardarlo en una variable.
let temporizador = setInterval(() => {
	console.log(`Hora en tiempo real: ${new Date().toLocaleTimeString()}`);
}, 1000);

clearInterval(temporizador);
console.log("Después del clearInterval().");
