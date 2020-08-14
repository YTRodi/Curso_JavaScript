function cuadradoCallback(value, callback) {
	setTimeout(() => {
		callback(value, value * value);
	}, 0 | (Math.random() * 1500));
}

cuadradoCallback(0, (value, result) => {
	console.log("Inicia el Callback");
	console.log(`Callback ${value},${result}`);

	//Adentro del callback, llamo de nuevo a la función 'cuadradoCallback()' ---> CALLBACK HELL!
	cuadradoCallback(1, (value, result) => {
		console.log(`Callback ${value},${result}`);

		cuadradoCallback(2, (value, result) => {
			console.log(`Callback ${value},${result}`);

			cuadradoCallback(3, (value, result) => {
				console.log(`Callback ${value},${result}`);

				cuadradoCallback(4, (value, result) => {
					console.log(`Callback ${value},${result}`);

					cuadradoCallback(5, (value, result) => {
						console.log(`Callback ${value},${result}`);

						cuadradoCallback(6, (value, result) => {
							console.log(`Callback ${value},${result}`);

							console.log("Termina el Callback");
						});
					});
				});
			});
		});
	});
});
