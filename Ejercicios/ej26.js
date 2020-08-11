/**
 * 26) Programa una función que dado un arreglo de números obtenga el promedio,
 *  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */
const averageArray = (arrayParam = []) => {
	let sumValues = 0;
	let lenArray = arrayParam.length;

	if (arrayParam.length === 0) {
		return console.warn("No se puede analizar un array vacío.");
	}
	if (typeof arrayParam === "string") {
		return console.warn("Debes ingresar un Array, no un string.");
	}
	if (typeof arrayParam === "number") {
		return console.warn("Debes ingresar un Array, no un number.");
	}

	for (let i = 0; i < arrayParam.length; i++) {
		sumValues += arrayParam[i];
	}

	return sumValues / lenArray;
};

//const arrayForTheTest = [15, 20, 50, 90];
const arrayForTheTest = [900, 1000, 450, 780];

console.log(averageArray([]));
console.log(averageArray(arrayForTheTest));
