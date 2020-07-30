//Función declarada:
function miFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

function unaFuncQueDevuelveValor(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");

    return "La función ha retornado un " + typeof("");
}

//Asigno función a una variable
let valorDeFunc = unaFuncQueDevuelveValor();
console.log(valorDeFunc);

console.log("<------------------------------------------------->");

//Undefined...
function saludar(nombre, edad){
    console.log("Hola mi nombre es " + nombre + " y tengo " + edad);
}

//Puedo asignar valores a los parámetros de entrada de la función
function saludar2(nombre = "Desconocido", edad = 0){
    console.log("Hola mi nombre es " + nombre + " y tengo " + edad);
}

saludar();
saludar2();

console.log("<-------FUNCIONES DECLARADAS VS EXPRESADAS-------->");

funcionDeclarada();
//Funciones declaradas VS Funciones expresadas
function funcionDeclarada(){
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
}

funcionDeclarada();

//Función flecha
const arrowFunction = () => {
    console.log("Hola, soy una función anónima.");
}

//Función anónima (No tiene nombre)
//No puede usarse antes de declarala.   
const funcionExpresada = function(){
    console.log("Esto es un función expresada, que se le asigno como valor a una variable. Si invocamos esta función antes de su definición, JS nos dirá...");    
}

funcionExpresada();
arrowFunction();