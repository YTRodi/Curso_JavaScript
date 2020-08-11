/**
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
 * pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

/**
 * 
 * @param {Date} fechaParam Fecha que ingresa el usuario.
 */
const determinarAnios = (fechaParam) => {
    
    //FALTA VALIDAR.

    let fechaHoy = new Date();
    let tiempoPasado = fechaHoy - fechaParam; //Lo da en milisegundos.
    let miliseconds = 1000*60*60*24*365;//Los milesegundos que tiene un año
    const valorFecha = tiempoPasado / miliseconds;
    const anio = Math.floor(valorFecha);

    return (Math.sign(anio)===-1) //Si el número es negativo Math.sign retorna -1
        ? console.info(`Faltan "${Math.abs(anio)-(1)}" años para el ${fechaParam.getFullYear()}`)
        : (anio===-1)
        ?console.info(`Estamos en el año actual ${fechaParam.getFullYear()}`)
        :console.info(`Han pasado "${anio+1}" años desde ${fechaParam.getFullYear()}`)

};

//Como es un array el obj Date, tengo que restarle 1 al mes.
console.log(determinarAnios(new Date(1998,8,7))); //Mi cumpleaños. //7-sep-1998
console.log(determinarAnios(new Date(1984,4,23))); //Fecha que está en la consigna.
console.log(determinarAnios(new Date(2020,7,10)));
console.log(determinarAnios(new Date(2022,7,10)));
console.log(determinarAnios(new Date(2030,7,10)));