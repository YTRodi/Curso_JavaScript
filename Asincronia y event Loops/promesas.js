function cuadradoPromise(value) {
	if (typeof value !== "number") {
		//Lo va a capturar el .catch()
		return Promise.reject(`Error! El valor "${value}" ingresado no es un número!`);
	}

	let miPromesa = new Promise((resolve, reject) => {
		setTimeout(() => {
			//El return positivo de la promesa en caso de que se cumpla.
			resolve({
				//Formo un objeto. (A retornar).
				//value: value, //Parámetro value, que me pasa el usuario para elevar al cuadrado.
				value, //Como la propiedad tiene el mismo nombre que el atributo, se puede escribir así.
				result: value * value
			});
		}, 0 | (Math.random() * 1500));
	});

	return miPromesa;
}

//.then = Parte verdadera - .catch = Parte falsa (Operadores ternarios).
//cuadradoPromise("a") //provoco el error.
cuadradoPromise(0)
	.then((obj) => {
		//El then recibe la parte positiva de la promesa, es decir, el result.
		console.log("Inicia Promise");
		console.log(`Promise ${obj.value}, ${obj.result}`);
		return cuadradoPromise(1);
		//console.log(obj);
	})
	.then((obj) => {
		console.log(`Promise ${obj.value}, ${obj.result}`);
		return cuadradoPromise(2);
	})
	.then((obj) => {
		console.log(`Promise ${obj.value}, ${obj.result}`);
		return cuadradoPromise(3);
	})
	.then((obj) => {
		console.log(`Promise ${obj.value}, ${obj.result}`);
		return cuadradoPromise(4);
	})
	.then((obj) => {
		console.log(`Promise ${obj.value}, ${obj.result}`);
		return cuadradoPromise(5);
	})
	.then((obj) => {
		console.log(`Promise ${obj.value}, ${obj.result}`);
		console.log("Fin Promise");
	})
	.catch((err) => console.error(err));
