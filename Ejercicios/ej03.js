console.log("<---- EJ 03 - START ---->");

const stringToArray = (data = "", separator = undefined) => 
    (!data)
        ? console.warn("No ingresaste una cadena de texto.") //if
        : (separator === undefined) //else 
            ? console.warn("No ingresaste el caracter separador.")
            : console.info(data.split(separator));

stringToArray(""," ");
stringToArray("Hola Mundo");
stringToArray("Hola Mundo"," ");
stringToArray("Hola soy Yago! y soy estudiante de sistemas."," ");
stringToArray("Hola soy Yago! y soy estudiante de sistemas.","!");

console.log("<---- EJ 03 - END ---->");