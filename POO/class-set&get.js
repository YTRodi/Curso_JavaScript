/* 
NOTA:
    -No existen los modificadores de acceso.
    -Las clases son básicamente "azúcar sintáctica",
     por más que trabajemos con clases, 
     JS sigue trabajando con los prototipos.
*/
class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo.");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    } 
}

//Perro hereda de Animal.
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //LLama al constructor de la clase padre.
        super(nombre,genero);
        this.tamanio = tamanio;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido.");
    }

    ladrar(){
        console.log("Guau guau!");
    }

    //Método estático
    static queEres(){
        console.log("Somos los animales mamíferos que pertenecemos a la familia de los caninos.");
    }

    //Propiedades get y set.
    get getRaza(){return this.raza;}
    set setRaza(value){this.raza = value;}
}

const scott = new Perro("Scott","Macho","Mediano");
const maggie = new Animal("Maggie","Hembra");

console.log(scott);
scott.sonar();
scott.saludar();
scott.ladrar();
Perro.queEres();

console.log(scott.getRaza); //null
scott.setRaza = "Callejero";
console.log(`Raza de ${scott.nombre}: ${scott.getRaza}`);

// console.log(maggie);
// maggie.sonar();
// maggie.saludar();