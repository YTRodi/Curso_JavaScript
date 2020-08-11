const convertirGrados= (numero = undefined, grados = "") =>{

    if(numero===undefined) return console.warn("no ingresaste cuantos grados convertir");
    if(typeof numero !== "number") return console.warn(`"${numero}" no son numeros Celsius o Farenheit`)
    if(!grados) return console.warn("no ingresaste si lo convertiras a Celsius o Fahrenheit");
    if(typeof grados !== "string") return console.error(`"${grados}" no es una unidad C o F`);

    (grados.toUpperCase()==="C")

        ? console.info(`${numero}° Celsius son ${(numero*(9/5))+32} Fahrenheit.`)

        : (grados.toUpperCase()==="F")

            ?console.info(`${numero}° Fahrenheit son ${((numero - 32)*(5/9)).toFixed(3)} Celsius.`)

            :console.warn("no ingreses otro valor que no sea C o F")

}

convertirGrados(0,"C");
convertirGrados(150,"C");
convertirGrados(34,"F");