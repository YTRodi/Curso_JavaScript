console.log("<---- EJ 07 - START ---->");

/**
 *
 * @param {string} word Word to analyze whether or not it's palindrome.
 */
//Función
function strPalindrome(word) {
	const arrayWord = [];
	let reversedWord = "";

	//if (word != "") {
	if (!word) {
		console.warn("No puede ingresar una cadena de texto vacía.");
	} else {
		for (let i = 0; i < word.length; i++) {
			arrayWord.push(word[i]);
		}

		//Revierto el array, y vuelvo a unificarlo con el método '.join'
		reversedWord = arrayWord.reverse().join("");

		if (word === reversedWord) {
			return `Si es palindromo! Palabra original: ${word} - Palabra al revés: ${reversedWord}`;
		} else {
			return `La palabra ${word} no es un palindromo.`;
		}
	}
}

//Arrow function
const arrowStrPalindrome = (word) => {
	const arrayWord = [];
	let reversedWord = "";

	//if (word != "") {
	if (!word) {
		console.warn("No puede ingresar una cadena de texto vacía.");
	} else {
		for (let i = 0; i < word.length; i++) {
			arrayWord.push(word[i]);
		}

		//Revierto el array, y vuelvo a unificarlo con el método '.join'
		reversedWord = arrayWord.reverse().join("");

		if (word === reversedWord) {
			return `Si es palindromo! Palabra original: ${word} - Palabra al revés: ${reversedWord}`;
		} else {
			return `La palabra ${word} no es un palindromo.`;
		}
	}
};

// console.log(strPalindrome("ojo"));
// console.log(strPalindrome("neuquen"));
// console.log(strPalindrome("salas"));
// console.log(strPalindrome("pepe"));
// console.log(strPalindrome("zapatos"));

console.log(numberCapicua("ojo"));
console.log(numberCapicua("neuquen"));
console.log(numberCapicua("salas"));
console.log(numberCapicua("pepe"));
console.log(numberCapicua("zapatos"));

console.log("<---- EJ 07 - END ---->");
