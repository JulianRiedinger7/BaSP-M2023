console.log('--EXERCISE 5: FOR');

//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
// una alerta utilizando cada una de las palabras.

alert('-Exercise 5.a');

var array = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto'];

array.forEach(function(word) {
  alert(word);
});

//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
// modificada.

alert('-Exercise 5.b');

array.forEach(function(word) {
  var firstLetter = word[0];
  alert(firstLetter.toUpperCase() + word.substring(1, word.length)); 
});

//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
// bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
// cadena completa.

alert('-Exercise 5.c');

var sentence = '';

array.forEach(function(word) {
  sentence += word + " ";
});

alert(sentence);

//d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
// es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el
// número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log('-Exercise 5.d');

var exArray = [];

for (var i = 0; i < 10; i += 1) {
  exArray.push(i);
};

console.log(exArray);