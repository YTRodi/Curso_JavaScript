//El yield es lo mismo que el await de las funciones asincronas pero para iterables.

function* iterable() {
	//Si no hay más yield, la propiedad done será = true.
	//Entre yield y yield, se pueden poner tantas líneas de código como quisiera.
	yield "hola"; //Es como el return de las funciones convencionales.
	console.log("Hola consola!");

	yield "hola 2";
	console.log("Seguimos con más instrucciones de nuestro código");
	console.log("Hasta que haya otro yield esto no va a parar");

	yield "hola 3";

	yield "hola 4";
}

let iterador = iterable();

// console.log(iterador.next()); //{value: "hola", done: false}
// console.log(iterador.next()); //Hola consola! {value: "hola 2", done: false}
// console.log(iterador.next()); //Seguimos con más instrucciones de nuestro código, {value: "hola 3", done: false}
// console.log(iterador.next()); //{value: "hola 4", done: false}
// console.log(iterador.next()); //{value: undefined, done: true}!!!!! (DONE = TRUE).

//Por cada yield que tenga en la variable iterador, imprimir en la consola el yield.
for (let yd of iterador) {
	console.log("YIELD: " + yd);
}

//Para recolectar los yields y después trabajarlos, puedo almacenarlos en un array.
//Uso spreadOperator, por cada ejecución de iterable (por cada yield), los guardo en un array.
const arr = [...iterable()];
console.log(arr);

//OTRO EJEMPLO.
function cuadrado(value) {
	setTimeout(() => {
		console.log({ value: value, result: value * value });
	}, Math.random() * 1000);
}

function* generador() {
	console.log("Inicia generador");
	yield cuadrado(0);
	yield cuadrado(1);
	yield cuadrado(2);
	yield cuadrado(3);
	yield cuadrado(4);
	yield cuadrado(5);
	console.log("Termina generador");
}

let gen = generador();

//Como tiene un setTimeOut() el resultado por consola no saldrá en orden.
for (const yd of gen) {
	console.log(yd);
}
