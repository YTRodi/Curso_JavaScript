let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "50.0"

console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(c.toFixed(4));

console.log(parseInt(c));
console.log(parseFloat(c));

//Tipos de texto
console.log(typeof(c), typeof(d));
console.log((c + parseInt(d)).toFixed(5));
console.log(c + parseFloat(d));