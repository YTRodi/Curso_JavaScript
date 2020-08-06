console.log(console);
console.error("Esto es un error");
console.warn("Esto es un warning");
console.info("Esto es un mensaje informativo");
console.log("Log es un registor de lo que pasó en nuestra app");

let nombre = "Yago",
	apellido = "Rodi",
	edad = 21;

//Modificadores de formato igual que el lenguaje C.
console.log("Hola mi nombre es %s %s y tengo %d años.", nombre, apellido, edad);

console.clear();
console.log(window);
console.log(document); // Representación del documento HTML a través de JS.
console.dir(window);
console.groupEnd();

console.table(Object.entries(console));
console.table(Object.entries(console).sort()); //Ordeno alfabéticamente

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];

console.log("<---------------------------------------->");
console.table(numeros);
console.table(vocales);

console.log("<---------------------------------------->");
const perro = {
	nombre: "Scott",
	raza: "Callejero",
	color: "Gris",
};
console.table(perro);

console.log("<----PARA VER CUANTO TIEMPO TARDA EN EJECUTARSE UN BLOQUE DE CÓDIGO.---->");
console.time("Cuánto tiempo tarda en ejecutarse mi código?"); //ALIAS
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
	arreglo[i] = i;
}

console.timeEnd("Cuánto tiempo tarda en ejecutarse mi código?");

console.log("<---------------------------------------->");
console.log("<------PARA CONTAR------>");
for (let i = 0; i <= 100; i++) {
	console.count("Código for:");
	console.log("LOG: " + i);
}

console.log("<----UNIT TEST----->");
let x = 2;
let y = 2;
let pruebaXY = "Se espera que X siempre sea menor que Y";

//Si no aparece nada en la consola, es que se ejecutó correctamente.
console.assert(x < y, { x, y, pruebaXY });
