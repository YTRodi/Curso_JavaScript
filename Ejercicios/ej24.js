/**
 * 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 *  el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
 *  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

const objArray = {
	asc: [],
	desc: []
};

const arrayAscYDesc = (arrayParam = []) => {
	if (arrayParam.length === 0) {
		return console.warn("No se puede analizar un array vacío.");
	}

	if (typeof arrayParam === "string") {
		return console.warn("Debes ingresar un Array, no un string.");
	}
	if (typeof arrayParam === "number") {
		return console.warn("Debes ingresar un Array, no un number.");
	}

	if (objArray !== null) {
		for (let i = 0; i < arrayParam.length; i++) {
			//Ordenamiento ascendete.
			objArray.asc.push(arrayParam[i]);
			objArray.asc.sort((a, b) => a - b); //Así se ordena por valor de número y no por caracter Unicode.

			//Ordenamiento descendente.
			objArray.desc.push(arrayParam[i]);
			objArray.desc.sort((a, b) => a - b);
			objArray.desc.reverse();
		}
	}

	return objArray;
};

const arrayForTheTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayForTheTest2 = [15, 900, 100, 60, 78, 40];

//console.log(arrayAscYDesc(arrayForTheTest));
console.log(arrayAscYDesc(arrayForTheTest2));
