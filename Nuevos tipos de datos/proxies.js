//Obj base. (objeto literal).
const persona = {
	nombre: "",
	apellido: "",
	edad: 0
};

const handlerPerson = {
	set(obj, prop, value) {
		//Aca podemos establecer todo tipo de validaciones
		if (Object.keys(obj).indexOf(prop) === -1) {
			//Si el indexOf retorna -1 -> esa propiedad no existe en el obj.
			return console.error(`La propiedad "${prop}" no existe en el objeto Persona.`);
		}

		// '\s' son los espacios en blanco.
		if ((prop === "nombre" || prop === "apellido") && !/^[a-zÑñáÁéÉíÍóÓúÚ\s]+$/gim.test(value)) {
			console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco.`);
		}

		obj[prop] = value;
	}
};

const yago = new Proxy(persona, handlerPerson);

yago.nombre = "Yago"; //Se ejecuta el handler
yago.apellido = "Rodi"; //Se ejecuta el handler
yago.edad = 21; //Se ejecuta el handler

//Provocación de errores.
//yago.twitter = "@rodiyago"; //Se ejecuta el handler y sale error (debido a la validación de propiedades).
//yago.apellido = "Rodi----"; //Error por la regular expression

console.log(yago);
console.log(persona);
