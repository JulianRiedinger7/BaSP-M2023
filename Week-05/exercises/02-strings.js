console.log('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a');

var fullName = 'julian riedinger';
var fullNameUppercase = fullName.toUpperCase();

console.log(fullName + " en mayusuculas es " + fullNameUppercase);

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b');

var favoriteFood = 'Hamburguesas con fritas';
var first5String = favoriteFood.substring(0, 5);

console.log('Los primeros 5 caracteres de ' + favoriteFood + ' son ' + first5String);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c');

var food = 'Milanesas con pure';
var last3String = food.substring(food.length, food.length - 3);

console.log('Los ultimos 3 caracteres de ' + food + ' son ' + last3String);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
// mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase
// , toLowerCase y el operador +).

console.log('\n-Exercise 2.d');

var greeting = 'hola Como Estas?';
var firstUppercase = greeting.substring(0,1).toUpperCase() + greeting.substring(1, greeting.length).toLowerCase();

console.log(firstUppercase); 

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
// del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n-Exercise 2.e');

var farewell = 'Hasta la proxima';
var firstBlankSpace = farewell.indexOf(' ');

console.log('El primer espacio en blanco esta en la posicion ', firstBlankSpace)

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
//  de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
//  toLowerCase y el operador +).

console.log('\n-Exercise 2.f');

var longString = 'elaBoraciOn hamburGuesaS';
var positionBlankSpace = longString.indexOf(' ');
var firstLetterUpper = longString.substring(0,1).toUpperCase() + longString.substring(1, positionBlankSpace + 1).toLowerCase()
                      + longString.substring(positionBlankSpace + 1, positionBlankSpace + 2).toUpperCase()
                      + longString.substring(positionBlankSpace + 2, longString.length).toLowerCase();

console.log(longString + ' = ' + firstLetterUpper);