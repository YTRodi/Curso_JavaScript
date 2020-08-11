/**
 * 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
 * primero almacena los números pares y en el segundo los impares,
 *  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */
const objArray = {
	pares: [],
	impares: []
};

const arrayParYImpar = (arrayParam) => {
	if (typeof arrayParam === "string") {
		return console.warn("Debes ingresar un Array, no un string.");
	}
	if (typeof arrayParam === "number") {
		return console.warn("Debes ingresar un Array, no un number.");
	}

	if (objArray !== null) {
		for (let i = 0; i < arrayParam.length; i++) {
			if (arrayParam[i] % 2 === 0) {
				objArray.pares.push(arrayParam[i]);
			} else {
				objArray.impares.push(arrayParam[i]);
			}
		}
	}

	return objArray;
};

const arrayForTheTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Posibles errores validados.
console.log(arrayParYImpar(""));
console.log(arrayParYImpar(123));

//Prueba de la función
console.log(arrayParYImpar(arrayForTheTest));
