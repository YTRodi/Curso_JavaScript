console.log(console);
console.error("Esto es un error");
console.warn("Esto es un warning");
console.info("Esto es un mensaje informativo");
console.log("Log es un registor de lo que pasó en nuestra app");

let nombre = "Yago",
    apellido = "Rodi",
    edad = 21;

//Modificadores de formato igual que el lenguaje C.
console.log("Hola mi nombre es %s %s y tengo %d años.",nombre,apellido,edad);

console.clear();
console.log(window);
console.log(document); // Representación del documento HTML a través de JS.
console.dir(window)
console.groupEnd();

console.table(Object.entries(console));
console.table(Object.entries(console).sort()); //Ordeno alfabéticamente


