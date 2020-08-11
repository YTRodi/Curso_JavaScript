/**
 * 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
 * pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */

//Hacer un math.pow en cada iteracion del for, elevarlo al cuadrado y eso lo guardo en otro array que voy a retornar.

const numbersToSquare = (arrayParam = []) => {
	const arrayToReturn = [];

	for (let i = 0; i < arrayParam.length; i++) {
		arrayToReturn.push(Math.pow(arrayParam[i], 2));
	}

	return arrayToReturn;
};

const arrayOfNumber = [1, 4, 5, 100];

console.log(numbersToSquare(arrayOfNumber)); //[1, 16, 25, 10000]
