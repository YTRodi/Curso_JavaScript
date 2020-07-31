//Parámetros REST
//Parámetros que puede ser o no infinito
//(DEBUGGEAR)
function sumar(a,b,...c){
    let result = a + b;

    //Func anónima
    c.forEach(function (n) {
        result += n;
    });

    return result;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));


//Operador de propagación (spread operator = '...' (3 puntos suspensivos))
//Cuando tengamos que guardar multiples argumentos o elementos, podemos agregarle cosas a los arrays
const array01 = [1,2,3,4,5];
const array02 = [6,7,8,9,0];

console.log(array01, array02);

console.log("<-----Sin Spread operator----->");
//Creo un tercer array unificando los dos arreglos con el operador 'spread'
const array03 = [array01,array02];
console.log(array03);

console.log("<-----Con Spread operator----->");
const array04 = [...array01,...array02];
console.log(array04);