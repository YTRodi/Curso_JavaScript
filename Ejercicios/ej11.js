console.log("<---- EJ 11 - START ---->");

const factorial = (number) => {
	let factorial = 1;

	if (isNaN(number)) {
		return "No se puede calcular el factorial de una cadena de texto"; //O si se puede...??? mmmm conversiones...
	} else if (number > 0) {
		for (let i = 1; i <= number; i++) {
			factorial = factorial * i;
		}
	}

	return factorial;
};

console.log("Factoriales:");
console.log("Factorial de 2: " + factorial(2)); //2
console.log("Factorial de 3: " + factorial(3)); //6
console.log("Factorial de 4: " + factorial(4)); //24
console.log("Factorial de 5: " + factorial(5)); //120 (5 * 4 * 3 * 2 * 1)
console.log("Factorial de 6: " + factorial(6)); //720 (6 * 5 * 4 * 3 * 2 * 1)
console.log("Factorial de 7: " + factorial(7)); //5040

console.log("<---- EJ 11 - END ---->");
