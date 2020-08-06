console.log("<---- EJ 12 - START ---->");

const isCousin = (numero = undefined) => {
	if (numero === undefined) return console.warn("No ingresaste un numero");
	if (typeof numero !== "number")
		return console.error(`el valor ${numero} no es un número`);
	if (numero === 0) return console.error("El numero no puede ser cero");
	if (numero === 1) return console.error("El numero no puede ser 1");
	if (Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

	let divisible = false;
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			divisible = true;
			break;
		}
	}
	return divisible ? `${numero} no es un número primo` : `${numero} es un número primo`;
};

console.log(isCousin(17));
console.log(isCousin(27));

console.log("<---- EJ 12 - END ---->");
