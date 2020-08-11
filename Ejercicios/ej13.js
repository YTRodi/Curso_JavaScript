console.log("<---- EJ 13 - START ---->");

const isPair = (number) => {
	if (isNaN(number)) {
		return "No ingresaste un número.";
	} else {
		if (number % 2 === 0) {
			return `El número ${number} es par!`;
		} else {
			return `El número ${number} es impar!`;
		}
	}
};

console.log(isPair("pepe"));
console.log(isPair(2));
console.log(isPair(3));
console.log(isPair(4));
console.log(isPair(5));

console.log("<---- EJ 13 - END ---->");
