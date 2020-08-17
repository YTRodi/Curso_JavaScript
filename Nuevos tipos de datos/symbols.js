let id = Symbol("id1");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2); //Son tipos de datos primitivos.

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("funcSaludar");

const persona = {
	[NOMBRE]: "Yago",
	apellido: "Rodi"
};
console.log(persona);

//Se crea una nueva propiedad, no se sobreescribe el simbolo.
persona.NOMBRE = "Pikachu";

console.log(persona);
console.log(persona.NOMBRE); //Output = "Pikachu"
console.log(persona[NOMBRE]); //Output = "Yago" --> Para imprimir la propiedad del simbolo

//Forma de asignar un simbolo a un objeto
console.log("Hola!");
persona[SALUDAR] = () => {};

console.log(persona);
persona[SALUDAR]();

//Los simbolos son privados y no pueden recorrese con un for in.
for (let propiedad in persona) {
	console.log(propiedad);
	console.log(persona[propiedad]);
}

//Para listar los simbolos de un objecto usamos...
console.log(Object.getOwnPropertySymbols(persona));
