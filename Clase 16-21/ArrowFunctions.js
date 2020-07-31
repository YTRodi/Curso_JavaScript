//Funciones anónimas expresadas.
//Las funciones expresadas las usamos cuando a una variable le asignamos una función anónima.

const saludo = () => {
    console.log("Hola!");
}

const saludo2 = (nombre) => console.log("Hola " + nombre + "!");

//Cuando una arrow function recibe un parámetro no hacen falta los paréntesis
const saludo3 = nombre => console.log("Hola " + nombre + "!");

const sum = function(a,b){
    return a + b;
}

const sum2 = (a,b) => a + b; //No hace falta el return.

saludo();
saludo2("Cami");
saludo3 ("Maggie");

console.log(sum(9,9));
console.log(sum2(9,9));

console.log("<------------------------------------------------->");

const numbers = [1,2,3,4,5];

numbers.forEach(function(element,index){
    console.log(`Elemento: ${element} está en la posición ${index}.`);
});

console.log("<-------Arrow Function---------->");

//Puedo hacerlo con una arrow function
numbers.forEach((element,index) => console.log(`Elemento: ${element} está en la posición ${index}.`));

console.log("<------'This' with arrow functions----->");

//This dentro de la función es el obj window.
/* NOTA: 
    Si usamos unas arrow function y dentro usamos 'this',
    va a hacer referencia al contexto global, no al objeto.
*/

const dog = {
    nombre: "Scott",
    ladrar: function(){
        console.log(this);
    },

    morder: () => console.log(this), //Esto hace referencia al contexto global del documento.

    dormir() {console.log(this)} //Si uso esta expresión, this hace referencia al objeto.
}

dog.ladrar();
dog.morder();
dog.dormir();