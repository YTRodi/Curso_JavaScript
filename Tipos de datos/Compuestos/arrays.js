const miArray = [];
console.log(miArray);

console.log("<------------------------------------------------->");

const miArray2 = [1,true,"Chauu",["A","B","C"]]
console.log(miArray2);
console.log(miArray2.length); //Propiedad 'length'
console.log(miArray2[3]);
console.log(miArray2[3][2]); //Solo imprimo la letra "C"

console.log("<------------------------------------------------->");

//Array.of = Nos permite llenar elementos.
const miArray3 = Array.of("X","Y","Z",9,8,7);
console.log(miArray3);

console.log("<------------------------------------------------->");

const miArray4 = Array(100).fill(false);
console.log(miArray4);

console.log("<------------------------------------------------->");

const colores = ["Rojo","Verde","Azul"];
console.log(colores);
colores.push("Negro"); //Agrego elemento(Push lo pone al final).
console.log(colores);
colores.pop();
console.log(colores); //.pop = quita el último elemento del array.

console.log("<------------------------------------------------->");

//Método funcional
colores.forEach(function(elemento){
    console.log("<li>" + elemento + "</li>");
});