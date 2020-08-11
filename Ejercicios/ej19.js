const validarSTR = (nombre = "") => {
    if (nombre === "") {
        return console.warn("Usted ingreso una cadena de carácteres vacia.");
    }
    if(typeof nombre === "number"){
        return console.warn(`El valor ingresado '${nombre}' no es una cadena de carácteres, es un número.`);
    }

    //i = No discrimina mayúsculas de minúsculas
    //g = global
    //m = multi line, inluye ^ y $ match (start/end de la línea)
    let expReg = /[a-zñÑáéíóúÁÉÍÓÚ]/igm;

    return (expReg.test(nombre))
    ? console.info(`${nombre} es un nombre válido.`)
    : console.error(`${nombre} no es un nombre válido.`)
};

console.log(validarSTR(""));
console.log(validarSTR(999));
console.log(validarSTR("Yago"));
console.log(validarSTR("Ñandú"));