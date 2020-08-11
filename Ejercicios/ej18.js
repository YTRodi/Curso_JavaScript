const contarVocalesOConsonantes = (cadena = undefined) => {
    let countVowels = 0;
    let countConsonants = 0;

    if(cadena === undefined){
        return console.warn("Usted no ingreso una cadena de carácteres.");
    }
    if(typeof cadena === "number"){
        return console.warn(`El valor ingresado '${cadena}' no es una cadena de carácteres, es un número.`);
    }
    
    for(let i = 0; i < cadena.length; i++){
        if(cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u'){
            countVowels++;
        }
        else{
            countConsonants++;
        }
    }

    return console.log(`La palabra '${cadena}' posee: ${countVowels} vocales y ${countConsonants} consonantes.`);
};

console.log(contarVocalesOConsonantes("matrimonio"));
console.log(contarVocalesOConsonantes("pikachu"));
console.log(contarVocalesOConsonantes("aeiou"));
console.log(contarVocalesOConsonantes(123));
console.log(contarVocalesOConsonantes(123.50));