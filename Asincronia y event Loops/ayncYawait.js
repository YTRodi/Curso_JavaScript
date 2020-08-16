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

async function funcionAsincronaDeclarada() {
	try {
		console.log("Inicia Async function DECLARADA");
		let obj = await cuadradoPromise(0);
		console.log(`Async Function DECLARADA: ${obj.value}, ${obj.result}`);
		/*NOTA: Al tener el setTimeOut() la función cuadradoPromise, todavía no nos devuelve el objeto, por eso sale todo undefined. */

		obj = await cuadradoPromise(1);
		console.log(`Async Function DECLARADA: ${obj.value}, ${obj.result}`);

		//obj = await cuadradoPromise("A");
		obj = await cuadradoPromise(2);
		console.log(`Async Function DECLARADA: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(3);
		console.log(`Async Function DECLARADA: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(4);
		console.log(`Async Function DECLARADA: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(5);
		console.log(`Async Function DECLARADA: ${obj.value}, ${obj.result}`);

		console.log("Fin Async Function DECLARADA");
	} catch (err) {
		console.error(err);
	}
}

const funcionAsincronaExpresada = async () => {
	try {
		console.log("Inicia Async function EXPRESADA");
		let obj = await cuadradoPromise(6);
		console.log(`Async Function EXPRESADA: ${obj.value}, ${obj.result}`);
		/*NOTA: Al tener el setTimeOut() la función cuadradoPromise, todavía no nos devuelve el objeto, por eso sale todo undefined. */

		obj = await cuadradoPromise(7);
		console.log(`Async Function EXPRESADA: ${obj.value}, ${obj.result}`);

		//obj = await cuadradoPromise("A");
		obj = await cuadradoPromise(8);
		console.log(`Async Function EXPRESADA: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(9);
		console.log(`Async Function EXPRESADA: ${obj.value}, ${obj.result}`);

		obj = await cuadradoPromise(10);
		console.log(`Async Function EXPRESADA: ${obj.value}, ${obj.result}`);

		console.log("Fin Async Function EXPRESADA");
	} catch (err) {
		console.error(err);
	}
};

funcionAsincronaDeclarada();
funcionAsincronaExpresada();
