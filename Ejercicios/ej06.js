console.log("<---- EJ 06 - START ---->");

/**
 *
 * @param {string} data String to analyze
 * @param {string} strFilter String to filter
 */
function stringCount(data, strFilter) {
	let count = 0;
	let resultArrayData = data.split(" ");

	try {
		if (!data && !strFilter) {
			console.error("No ingresaste una cadena a filtar ni una cadena a filtrar.");
		} else if (!data) {
			console.warn("No ingresaste una cadena a analizar.");
		} else if (!strFilter) {
			console.warn("Debe ingresar una cadena a filtrar.");
		} else {
			for (let i = 0; i < resultArrayData.length; i++) {
				console.count(`Ciclo for de resultArrayData: (Empiezo en 1 no en 0!) `);

				if (resultArrayData[i] === strFilter) {
					count++;
				}
			}
		}
	} catch (error) {
		console.error(error);
	}

	console.table(resultArrayData);
	return count;
}

console.log(stringCount("Hola mundo mundo mundo", "mundo"));
//console.log(stringCount("Hola mundo mundo",""));
//console.log(stringCount("","mundo"));
//console.log(stringCount("",""));

console.log("<---- EJ 06 - END ---->");
