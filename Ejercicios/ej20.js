/**
 * Función para válidar un mail (IDEM Materia Arquitectura y Sistemas Operativos).
 * @param {string} mail
 */
const validarMail = (mail = "") => {
	if (mail === "") {
		return console.warn("Usted ingreso una cadena de carácteres vacia.");
	}
	if (typeof mail === "number") {
		return console.warn(`El valor ingresado '${mail}' no es una cadena de carácteres, es un número.`);
	}

	//i = No discrimina mayúsculas de minúsculas
	//g = global
	//m = multi line, inluye ^ y $ match (start/end de la línea)
	let expReg = new RegExp("[a-zA-Z0-9._%+-]+@[a-z-A-Z0-9]+[a-z]{2,3}.[a-z]{2,3}", "igm");

	return expReg.test(mail)
		? console.info(`${mail} es un mail válido.`)
		: console.error(`${mail} no es un mail válido.`);
};

//Mails inválidos
console.log(validarMail(""));
console.log(validarMail(999999));
console.log(validarMail("yagorodi@@@@"));
console.log(validarMail("yagorodigmail"));
console.log(validarMail("yagorodi@@gmail.com"));

//Mails válidos
console.log(validarMail("yagorodi@gmail.com"));
console.log(validarMail("Pepito-juan%Gabriel@gmail.com"));
console.log(validarMail(""));
