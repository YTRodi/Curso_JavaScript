/**
 * NOTA:
 * -Patrón que fue importante en el tiempo de la libreria Jquery.
 * Se llaman funciones anónimas autoejecutables porque no solamente las definimos, sino que también las estamos
 * ejecutando en el momento de crearlas y no tienen nombre.
 */

(function (){
    console.log("My first IIFE");
})();

(function (d,w,c){ //ALIAS
    console.log("My secondly IIFE");
    console.log(d); //Acá está en objeto Document
    console.log(w); //Acá está en objeto Window
    console.log(c); //Acá está en objeto Console
    c.log("Esto es un console.log()");
})(document,window,console);

/*             Diferentes formas de declarar funciones anónimas autoejecutables         */
//Clásica
(function(){
    console.log("Versión clásica.");
})();

//La Crockford (JavaScript The God Parts) - Agrupa todo.
((function(){
    console.log("Versión Crockford.");
})());

//Unaria
+function(){
    console.log("Versión Unaria.");
}();

//Facebook
!function(){
    console.log("Versión Facebook.");
}();