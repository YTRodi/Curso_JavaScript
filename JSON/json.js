const json = {
	cadena: "Yago",
	numero: "21",
	booleano: "true",
	arreglo: ["correr", "programar", "cocinar"],
	objeto: {
		twitter: "@rodiyago",
		email: "lele@gmail.com"
	},
	nulo: null
};

console.log(json);
console.log(JSON);
console.log("<------JSON.parse()------>");
//Objetos válidos
console.log(JSON.parse("{}")); //Lo parsea a Objeto.
console.log(JSON.parse("[1,2,3,[]]")); //Lo parsea a Array.
console.log(JSON.parse("true")); //Lo parsea a Boolean
console.log(JSON.parse("21")); //Lo parsea a Number
console.log(JSON.parse("null"));

//Objetos inválidos
//console.log(JSON.parse("Hola Mundo")); //Formato no válido de objeto
//console.log(JSON.parse("undefined")); //Formato no válido de objeto

console.log("<------JSON.stringify()------>");
//Lo convierte a notación JSON.
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify({ x: 2, y: 3 }));
console.log(
	JSON.parse(
		'{"cadena":"Yago","numero": "21","booleano": "true","arreglo": ["correr", "programar", "cocinar"],"objeto": {"twitter": "@rodiyago","email": "lele@gmail.com"},"nulo": null}'
	)
);

console.log(JSON.stringify(json));
