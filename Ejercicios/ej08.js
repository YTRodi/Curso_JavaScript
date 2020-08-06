console.log("<---- EJ 08 - START ---->");

const deletePattern = (str = "", patternToDelete = "") => {
	let regExp = new RegExp(patternToDelete, "ig"); //Global e ignora mayúsculas y minúsculas.
	let result = str.replace(regExp, ""); //Donde haya un "xyz" que lo remplace por un string vacío.

	//Puedo poner que en donde esté el patrón "xyz", lo remplace por que el que yo quiera.
	//let result = str.replace(regExp, "pepe");

	return result;
};

console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
console.log(deletePattern("uuu1, www2, uuu3, uuu4 y kkk5", "uuu")); //output = 1, www2, 3, 4 y kkk5

console.log("<---- EJ 08 - END ---->");
