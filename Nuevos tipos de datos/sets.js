const miSet = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLA"]);
console.log(miSet);
console.log(`Tamaño del set: ${miSet.size}`); //No permite repetir elementos.

const miSet2 = new Set();
miSet2.add(1);
miSet2.add(2);
miSet2.add(2);
miSet2.add(3);
miSet2.add(true);
miSet2.add(false);
miSet2.add(true);
miSet2.add({});
miSet2.add({});
miSet2.add({});

console.log(miSet2);
console.log(`Tamaño del set: ${miSet2.size}`); //No permite repetir elementos.

console.log("<-------------------------------------------------------------------->");

console.log("<-------------> Recorriendo miSet (For of)");
//Como recorrer estos elementos...
//Ciclo for of
for (item of miSet) {
	console.log(item);
}

console.log("<-------------> Recorriendo miSet2 (forEach)");
miSet2.forEach((item) => console.log(item));

let setToArray = Array.from(miSet);
console.log(setToArray);

//Eliminar item de un Set
miSet.delete("HOLA");
console.log(miSet);

//Verificar si un Set posee un dato en la colección
console.log(miSet.has("Chau")); //output = false
console.log(miSet.has("hola")); //output = true

//Limpiar un Set
miSet2.clear();
console.log(miSet2);
