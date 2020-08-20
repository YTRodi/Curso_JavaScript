// console.log(window);
// console.log(document);

// let texto = "No mames wey, estoy hablando";

// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);
console.log("******* Elementos del Documento *******");
console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
	//Después de 3 segundos, va a mostrar lo que seleccioné en el documento.
	console.log(document.getSelection().toString());
}, 3000);

//document.write("<h2>Hola Mundo desde el DOM</h2>");
