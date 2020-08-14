//LINK PARA PROBAR LOOPS
//http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

/*Código Síncrono Bloqueante. */
//Función anónima autoejecutable.
(() => {
	console.log("Código Síncrono");
	console.log("Inicio");

	function dos() {
		console.log("dos");
	}

	function uno() {
		console.log("uno");
		dos();
		console.log("tres");
	}

	uno(); //Después de que se ejecutan las 3 log (Uno, dos y tres), la función uno() libera el thread.
	console.log("Fin");
})();

//<--------------------------------------------------------------------->

/*Código Asíncrono No Bloqueante.*/

(() => {
	//No reconocé arrow functions (en los setTimeOut()) la página loupe
	console.log("Código Asíncrono");
	console.log("Inicio");

	function dos() {
		setTimeout(function () {
			console.log("dos");
		}, 1000);
	}

	function uno() {
		setTimeout(function () {
			console.log("uno");
		}, 0);

		dos();

		console.log("tres");
	}

	uno();

	console.log("Fin");
})();
