let miMapa = new Map();

//Agregar valores
miMapa.set("nombre", "Yago");
miMapa.set("apellido", "Rodi");
miMapa.set("edad", 21);

console.log(miMapa);
console.log(`Números de elementos ${miMapa.size}`);
console.log(miMapa.has("correo")); //output = false.
console.log(miMapa.has("nombre")); //output = true;

//Obtener valores
console.log(miMapa.get("nombre"));
console.log(miMapa.get("apellido"));

//Loquisimo (Puedo crear keys con...)
miMapa.set(19, "diecinueve"); //Key = number
miMapa.set(false, "falso"); //Key = boolean
miMapa.set({}, {}); //Key = Object

//Eliminar valores
//miMapa.delete("nombre"); //Me pide la key a eliminar.

//Recorrer con for of
//Solo imprime el valor de `key`
for (let [key] of miMapa) {
	console.log(key);
}

//Imprime todas las propiedades en forma de array.
for (let key of miMapa) {
	console.log(key);
}

//Imprime key y value
for (let [key, value] of miMapa) {
	console.log(`Key: ${key}, Value: ${value}`);
}

//Asignarle keys y values a un Map
const miMapa2 = new Map([
	["nombre", "Scott"],
	["edad", "13"],
	["animal", "perro"],
	[null, "nulo"] //Key = null (Loquisimo, no usar).
]);

console.log(miMapa2);

const llavesMiMapa2 = [...miMapa2.keys()];
const valoresMiMapa2 = [...miMapa2.values()];

console.log(llavesMiMapa2, valoresMiMapa2);
