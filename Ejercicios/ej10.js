console.log("<---- EJ 10 - START ---->");

//Arrow function
/**
 *
 * @param {number} number Number to analyze whether or not it's capicua.
 */
const numberCapicua = (number) => {
	const arrayNumber = [];
	let numberStr = number.toString();
	let reversedNumberStr = "";

	if (isNaN(number)) {
		console.warn("No puede ingresar una cadena de texto.");
	} else {
		for (let i = 0; i < numberStr.length; i++) {
			arrayNumber.push(numberStr[i]);
		}

		//Revierto el array, y vuelvo a unificarlo con el método '.join'
		reversedNumberStr = arrayNumber.reverse().join("");

		if (numberStr === reversedNumberStr) {
			return `Si es capicua! Número original: ${number} - Número al revés: ${reversedNumberStr}`;
		} else {
			return `El número ${number} no es capicua.`;
		}
	}
};

console.log(numberCapicua("HOLA"));
console.log(numberCapicua(150.5));
console.log(numberCapicua(102201));
console.log(numberCapicua(501));
console.log(numberCapicua(2002));
console.log(numberCapicua(100000001));
console.log(numberCapicua(3003));

console.log("<---- EJ 10 - END ---->");
