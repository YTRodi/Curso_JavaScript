try {
    noExiste; //is not defined
} catch (error) {
    console.log(error);
}

try {
    //let number = 10;
    let number = "Hola"; //Produzco el error 

    if (isNaN(number)) {
        throw new Error("El caracter ingresado no es un número.");
    }else{
        console.log(number * number);
    }

} catch (error) {
    console.log(error);
}