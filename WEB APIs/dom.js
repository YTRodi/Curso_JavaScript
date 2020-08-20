console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("cards"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre")); //Nombre en el atributo name...

//getElementById devuelve una colección de HTML
console.log(document.getElementById("que-es"));
console.log(document.getElementById("menu"));

//querySelector devuelve un NodeList (NO un Array).
//querySelector (es más lento que el getElementByID, porque tiene que analizar primero que tipo de selector es) hace referencia que va a recibir un selector válido de CSS.
//No sabe si va a recibir un ID o un Name
//NOTA: Sólo te trae el primer selector que hayas especificado que encontró en el HTML.
console.log(document.querySelector("#que-es"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el)); //Por cada elemento, imprimilo en consola.

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
document.querySelectorAll(".card").forEach((el) => console.log(el));
//document.querySelectorAll(".cards").forEach((el) => console.log(el));

//Imprimo la tarjeta people...
console.log(document.querySelectorAll(".card")[2]);

//Que me traiga solamente las li que estan dentro de menu
console.log(document.querySelector("#menu li")); //Sólo trae la primer apareción.
console.log(document.querySelectorAll("#menu li"));

console.log("<--------------------CLASE 63 (Atributos y Data-Attributes------------------------->");

//GET (Atributo)
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href")); //Solo me trae el valor que estaba escrito en el atributo href de ese enlace

document.documentElement.lang = "en";
console.log(document.documentElement.lang);

//SET (Atributo)
document.documentElement.setAttribute("lang", "es-AR");
console.log(document.documentElement.lang);

//-----------------------------------------------------------------
console.log("<--------------------GUARDAR ELEMENTO DEL DOM EN UNA VARIABLE------------------------>");

//Para guardar un elemento del DOM en una variable anteponemos el signo '$'
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank"); //Le agrego este atributo

//**Buena práctica para evitar "hackeos" o inseguridad (Evito que la nueva pestaña no tenga una dependencia entre la ventana que estamos abriendo y la ventana origen).
$linkDOM.setAttribute("rel", "noopener");

$linkDOM.setAttribute("href", "http://youtube.com");

console.log($linkDOM.hasAttribute("rel")); //true

// * REMOVER ATRIBUTO
$linkDOM.removeAttribute("rel");

console.log($linkDOM.hasAttribute("rel")); //false

// * Data-Attributes
console.log($linkDOM.getAttribute("data-description")); //Output = Document Object Model

$linkDOM.setAttribute("data-pepito", "Hola pepito");
console.log($linkDOM.dataset); //DOMStringMap {description: "Document Object Model", pepito: "juejue"}
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.pepito);

$linkDOM.dataset.description = "Hola don pepito";
console.log($linkDOM.dataset.description);
