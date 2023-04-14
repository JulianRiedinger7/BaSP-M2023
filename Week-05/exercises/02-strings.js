console.log('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a');

var nombreCompleto = 'julian riedinger';
var nombreCompletoMayusculas = nombreCompleto.toUpperCase();

console.log(nombreCompleto + " en mayusuculas es " + nombreCompletoMayusculas);

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b');

var comidaFavorita = 'Hamburguesas con fritas';
var primeros5Cadena = comidaFavorita.substring(0, 5);

console.log('Los primeros 5 caracteres de ' + comidaFavorita + ' son ' + primeros5Cadena);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c');

var comida = 'Milanesas con pure';
var ultimos3Cadena = comida.substring(comida.length, comida.length - 3);

console.log('Los ultimos 3 caracteres de ' + comida + ' son ' + ultimos3Cadena);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
// mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase
// , toLowerCase y el operador +).

console.log('\n-Exercise 2.d');

var saludo = 'hola Como Estas?';
var primerMayuscula = saludo.substring(0,1).toUpperCase() + saludo.substring(1, saludo.length).toLowerCase();

console.log(primerMayuscula); 

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
// del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n-Exercise 2.e');

var despedida = 'Hasta la proxima';
var primerEspacioBlanco = despedida.indexOf(' ');

console.log('El primer espacio en blanco esta en la posicion ', primerEspacioBlanco)

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
//  de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
//  toLowerCase y el operador +).

console.log('\n-Exercise 2.f');

var cadenaLarga = 'elaBoraciOn hamburGuesaS';
var posicionEspacioBlanco = cadenaLarga.indexOf(' ');
var primerLetraMayus = cadenaLarga.substring(0,1).toUpperCase() + cadenaLarga.substring(1, posicionEspacioBlanco + 1).toLowerCase()
                      + cadenaLarga.substring(posicionEspacioBlanco + 1, posicionEspacioBlanco + 2).toUpperCase()
                      + cadenaLarga.substring(posicionEspacioBlanco + 2, cadenaLarga.length).toLowerCase();

console.log(cadenaLarga + ' = ' + primerLetraMayus);