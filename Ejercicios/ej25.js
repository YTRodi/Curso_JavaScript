/**
 * 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 *  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */
//https://www.kuworking.com/blog/javascript-como-eliminar-duplicados-array
console.log("ejercicio 25");
const eliminarDuplicados = (arrayParam = []) => {
	const arrayFiltrado = Array.from(new Set(arrayParam));
	//const nuevoArray2 = [...new Set(arrayParam)]; //IDEM
	return arrayFiltrado;
};

const arrayForTheTest = ["x", 10, "x", 2, "10", 10, true, true];

console.log(`Array original: ${arrayForTheTest}`);
console.log(eliminarDuplicados(arrayForTheTest));
console.log("ejercicio 25 - FIN");
