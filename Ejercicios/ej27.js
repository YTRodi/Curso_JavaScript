/**
 * 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, 
año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
        7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
        - Apartir de un arreglo con la información de 3 películas genera 3 
            instancias de la clase de forma automatizada e imprime la ficha técnica 
            de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */
class Pelicula {
	constructor(id, titulo, director, anioEstreno, paisOPaises, genero, calificacion) {
		this.id = id;
		this.titulo = titulo;
		this.director = director;
		this.anioEstreno = anioEstreno;
		this.paisOPaises = paisOPaises;
		this.genero = genero;
		this.calificacion = calificacion;

		this.validarIMDB(this.id);
		this.validarTitulo(this.titulo);
		this.validarDirector(this.director);
		this.validarAnioEstreno(this.anioEstreno);
		this.validarPaisOPaises(this.paisOPaises);
		this.validarGenero(this.genero);
		this.validarCalificacion(this.calificacion);
	}

	//Métodos estáticos
	static generosAceptados() {
		return [
			"Action",
			"Adult",
			"Adventure",
			"Animation",
			"Biography",
			"Comedy",
			"Crime",
			"Documentary",
			"Drama",
			"Family",
			"Fantasy",
			"Film Noir",
			"Game-Show",
			"History",
			"Horror",
			"Musical",
			"Music",
			"Mystery",
			"News",
			"Reality-TV",
			"Romance",
			"Sci-Fi",
			"Short",
			"Sport",
			"Talk-Show",
			"Thriller",
			"War",
			"Western"
		];
	}

	//Métodos para imprimir información
	fichaTecnica() {
		console.info(
			`Ficha Técnica:\n
            Titulo: "${this.titulo}"\n
            Director: "${this.director}"\n
            Año: "${this.anioEstreno}"\n
            País: "${this.paisOPaises}"\n
            Géneros: "${this.genero.join(",")}"\n
            Calificación: "${this.calificacion}"`
		);
	}

	//Validaciones de tipos de datos, longitudes
	validarStr(propiedad, valor) {
		if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
		if (typeof valor !== "string")
			return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de caracteres.`);

		return true;
	}

	validarNumber(propiedad, valor) {
		if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número.`);

		return true;
	}

	validarLongitud(propiedad, valor, longitudMax) {
		if (valor.length > longitudMax) {
			return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (MAX ${longitudMax}).`);
		}

		return true;
	}

	esArray(propiedad, valor) {
		// //IDEM!
		// if (!valor instanceof Array) {
		// 	return console.error(`${propiedad} "${valor}" no es un Array.`);
		// }

		if (!Array.isArray(valor)) {
			return console.error(`${propiedad} "${valor}" no es un Array.`);
		}

		if (valor.length === 0) {
			return console.error("No puede ingresar un array vacío.");
		}

		return true;
	}

	//Validaciones de atributos
	validarIMDB(id) {
		if (this.validarStr("IMDB id", id)) {
			//Expresión regular
			if (!/([a-z]){2}([0-9]){7}/gim.test(id)) {
				return console.error(
					`IMDB id ${id} NO es válido. Debe tener 9 caracteres, los primeros 2 sean letras y los 7 restantes números.`
				);
			}
		}
	}

	validarTitulo(titulo) {
		if (this.validarStr("Titulo de la película", titulo)) {
			if (this.validarLongitud("Titulo de la pelicula", titulo, 100)) {
				console.log("lo logré!");
			}
		}
	}

	validarDirector(director) {
		if (this.validarStr("Director de la pelicula", director)) {
			if (this.validarLongitud("Director de la pelicula", director, 50)) {
				console.log("Validé bien el nombre del director!");
			}
		}
	}

	validarAnioEstreno(anioEstreno) {
		if (this.validarNumber("Año de estreno", anioEstreno)) {
			if (anioEstreno.toString().length < 4) {
				return console.error("ERROR anio estreno.");
			}
		}
	}

	validarPaisOPaises(paisOPaises) {
		if (this.esArray("Pais o Paises", paisOPaises)) {
			console.log("pais y paises validado!");
		}
	}

	/**
	 *
	 * @param {Array} generos
	 */
	validarGenero(generos) {
		let generosAceptados = Pelicula.generosAceptados();

		if (this.esArray("Género de la película", generos)) {
			//Nos permite recorrer objs iterables
			for (let generoQueVoyAIterar of generos) {
				if (!generosAceptados.includes(generoQueVoyAIterar)) {
					console.error(`Generos incorrectos "${generos.join(", ")}"`);
					console.warn(`Los generos aceptados son: ${Pelicula.generosAceptados()}`);
				}
				//console.log(generoQueVoyAIterar, generosAceptados.includes(generoQueVoyAIterar));
			}
		}
	}

	validarCalificacion(calificacion) {
		if (this.validarNumber("Calificación de la película", calificacion)) {
			if (calificacion < 0 || calificacion > 10) {
				console.error(
					`La calificación debe estár entre 0 y 10\nLa clasificación que usted ingreso es "${calificacion}"`
				);
			}
		}
	}
}

//const miPeli = new Pelicula("Hp3456789");
//"aABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ" //Son 100 caracteres
//"ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ" //Son 50 caracteres
// 70
//console.clear();
const miPeli = new Pelicula(
	"Hp3456789",
	"ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ",
	"ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ",
	7070,
	["Argentina", "Chile"],
	["Western", "Fantasy", "Action"],
	5
);

console.log(miPeli);
console.log(miPeli.fichaTecnica());
