console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
	console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("HOLA", "Cami");

const obj = {
	lugar: "Contexto Objeto!"
};

/**
 * * La diferencia entre estos dos métodos es:
 * * Es como reciben los parámetros con los que voy a trabajar.
 */
saludar.call(obj, "Hola", "Yago"); //output = "Contexto Objeto!"
saludar.call(null, "Hola", "Yago"); //Si pongo null, hago referencia al contexto global.
saludar.apply(obj, ["Adios", "Maggie"]); //output = "Contexto Objeto!"
saludar.apply(null, ["Adios", "Maggie"]); //Si pongo null, hago referencia al contexto global.

this.nombre = "Window";

const persona = {
	nombre: "Yago",
	saludar: function () {
		console.log(`Hola ${this.nombre}`);
	}
};

persona.saludar();

const otraPersona = {
	//saluadr: persona.saludar.bind(this) //Enlazo el contexto de Persona.
	saludar: persona.saludar.bind(persona) //Enlazo el contexto de Persona.
};

otraPersona.saludar();
