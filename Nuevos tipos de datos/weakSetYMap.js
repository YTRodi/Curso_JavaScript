//Solo aceptan referencias débiles, es decir, objetos.

//WEAKSET (VALORES)
// const ws = new WeakSet();
// console.log(ws);

// let valor1 = { valor1: 1 };
// let valor2 = { valor2: 2 };
// let valor3 = { valor3: 3 };

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);
// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

// ws.delete(valor2);
// console.log(ws);

// setInterval(() => {
// 	console.log(ws);
// }, 1000);

////Algo parecido a lo que haría el garbage collector
// setTimeout(() => {
// 	valor1 = null;
// 	valor2 = null;
// 	valor3 = null;
// }, 5000);

//WEAKMAP (OBJETOS - REFERENCIA)
const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1)); //Output = true
console.log(wm.has(llave3)); //Output = false

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.set(llave2, 2);
wm.set(llave3, 3);

let intervaloTiempo = setInterval(() => {
	console.log(wm);
}, 1000);

// setInterval(() => {
// 	console.log(wm);
// }, 1000);

//A los 5 segundos vuelvo null todos los items del weakmap
setInterval(() => {
	llave1 = null;
	llave2 = null;
	llave3 = null;
	//clearInterval(intervaloTiempo); //para detener.
}, 5000);
