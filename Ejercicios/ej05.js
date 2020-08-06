console.log("<---- EJ 05 - START ---->");
/**
 *
 * @param {string} data
 */
function stringReverse(data) {
  let splitStr;
  let reverseArray;
  let joinArray;

  splitStr = data.split(""); //Separo el string en un array.
  reverseArray = splitStr.reverse();
  joinArray = reverseArray.join("");

  return joinArray;
}

console.log(stringReverse("HOLA HOLA"));
console.log(stringReverse("Chau"));
console.log(stringReverse("Cucaracha"));

console.log("<---- EJ 05 - END ---->");
