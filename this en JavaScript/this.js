//IDEM
console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(window);
console.log(this.nombre);

function imprimir() {
	console.log(this.nombre);
}

imprimir(); //output = "Contexto global".

const obj = {
	nombre: "Contexto Objeto!",
	//Func anónima
	imprimir: function () {
		console.log(this.nombre);
	}
};

obj.imprimir(); //output = "Contexto Objeto!".

const obj2 = {
	nombre: "Contexto Objeto 2!",
	imprimir
};

//whaaaaaaaaat
obj2.imprimir(); //output = "Contexto Objeto 2!".

const obj3 = {
	nombre: "Contexto Objeto 3!",
	imprimir: () => {
		console.log(this.nombre);
	}
};

obj3.imprimir(); //output = "Contexto Global".!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Func constructora
function Persona(nombre) {
	this.nombre = nombre;

	//return console.log(this.nombre); //output = "Yago"

	/**
	 * ! Esta nueva función crea un nuevo scope.
	 ** No tiene ninguna propiedad nombre, asi que va a
	 ** leer el this del contexto global.
	 */
	return () => {
		console.log(this.nombre); //output = "Contexto Global" WHAAT
	};
}

let yago = new Persona("Yago");
yago(); //Output = "Yago"!!!!
