//const iterable = [1, 2, 3, 4, 5]; //Array iterator
//const iterable = "Hola mundo"; //String iterator
//const iterable = new Set([1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8]); //Set iterator
const iterable = new Map([
	["nombre", "Yago"],
	["edad", 21]
]); //Map iterator

//Accedemos al iterador del iterable.
const iterador = iterable[Symbol.iterator](); //Propiedad especial de un array.

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next()); //value: undefined y done: true (Es el final? done = true)

let next = iterador.next();

while (!next.done) {
	console.log(next.value);
	next = iterador.next();
}
