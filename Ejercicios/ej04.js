console.log("<---- EJ 02 - START ---->");

function stringRepeat(data, repetitions) {

    if(!data){console.warn("No ingresaste una cadena de texto.");}
    if(repetitions === undefined) {console.warn("No ingresate el número de veces a repetir el texto.")}
    if(repetitions === 0) {console.error("El número de repeticiones no puede ser 0.")}
    if(Math.sign(repetitions) === -1) {console.error("El número de repeticiones no puede ser negativo.")}

    for (let i = 0; i <= repetitions; i++) {
        console.info(`${data} - ${i}`);
    }
}

stringRepeat("Hola mundo",0);
stringRepeat("Hola mundo",-10);
//stringRepeat("",3);
stringRepeat("Hola mundo");
stringRepeat("Hola mundo",3);

console.log("<---- EJ 02 - END ---->");