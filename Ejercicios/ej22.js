/**
 * 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
 *  pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

const arrayNumMaxYMin = (arrayParam = []) => {
	let min = 0,
		max = 0,
		control = 0;
	const arrayToReturn = [];

	if (typeof arrayParam === "string") {
		return console.warn("Debes ingresar un Array, no un string.");
	}
	if (typeof arrayParam === "number") {
		return console.warn("Debes ingresar un Array, no un number.");
	}

	for (let i = 0; i < arrayParam.length; i++) {
		if (control === 0) {
			min = arrayParam[i];
			max = arrayParam[i];
			control++;
		} else if (min > arrayParam[i]) {
			min = arrayParam[i];
		} else if (max < arrayParam[i]) {
			max = arrayParam[i];
		}
	}

	arrayToReturn.push(min, max);

	return arrayToReturn;
};

const arrayForTheTest = [10, 20, 100, 5, 950];

//Posibles errores validados.
console.log(arrayNumMaxYMin(""));
console.log(arrayNumMaxYMin(123));

//Prueba de la función
console.log("Array que uso para el test:");
for (let i = 0; i < arrayForTheTest.length; i++) {
	console.log(arrayForTheTest[i]);
}
console.log(arrayNumMaxYMin(arrayForTheTest));
