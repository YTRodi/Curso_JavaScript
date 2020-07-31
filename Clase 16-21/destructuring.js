const numbers = [1,2,3,4];

//Sin destructuración
let one = numbers[0],
    two = numbers[1],
    three = numbers[2];

console.log(one,two,three);

//Con destructuración
//Las guardo dinámicamente en las variables 'uno, dos y tres'
const [uno, dos, tres] = numbers;
console.log(uno, dos, tres);

const person = {
    nombre: "Yago",
    apellido: "Rodi",
    edad: 21
}

//Destructuración en obj.
//Para destructurar con éxito, las variables se tienen que llamar igual que los atributos.
let {nombre, apellido, edad} = person;
console.log(nombre, apellido, edad);