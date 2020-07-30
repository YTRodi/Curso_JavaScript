let a = new String("Hola");

//Objeto
/* Usamos constantes para crear objetos, porque así evitamos cambios a lo largo del programa. */
const b = {

}
console.log(b);

//Clave - Valor
const estudiante = {
    nombre: "Yago",
    apellido: "Rodi",
    edad: 21,
    pasatiempos: ["CS:GO","Estudiar programación"],
    estadoCivil: false,
    contacto: {
        email: "yagorodi@gmail.com",
        twitter: "YTRodi",
        celular: 1199999999
    },
    saludar:function(){
        console.log("Hola :D");
    },
    decirNombreEstudiante: function(){
        console.log("Hola me llamo " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años");
    }
}

//Acceso a datos con corchetes.
console.log(estudiante);
console.log(estudiante["nombre"]);
console.log(estudiante["apellido"]);

//Accecso a datos mediante el operador punto.
console.log(estudiante.contacto.twitter);
console.log(estudiante.pasatiempos[0]);
console.log(estudiante.pasatiempos.length);
estudiante.saludar();
estudiante.decirNombreEstudiante();

//Propiedades del objeto en JS
console.log(Object.keys(estudiante));
console.log(Object.values(estudiante));
console.log(estudiante.hasOwnProperty("nombre")); //En el obj estudiante adentro posee la propiedad "nombre"