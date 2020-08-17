let aleatorio = Math.round(Math.random() * 100 + 3); //+3 aśi no se repiten los id.

const objUsuarios = {
	//#2 Forma de asignar propiedades dinámicamente.
	[`id_${aleatorio}`]: "Valor aleatorio"
};

console.log(objUsuarios);

const usuarios = ["Maggie", "Cami", "Yago"];

//#1 Forma de asignar propiedades dinámicamente
usuarios.forEach((user, index) => (objUsuarios[`id_${index}`] = user));

console.log(objUsuarios);
