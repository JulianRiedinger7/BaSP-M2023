console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en 
// una 3er variable.


console.log('-Exercise 1.a');

var num1 = 3;
var num2 = 5;
var num3 = num1 + num2;

console.log("El resultado de " +num1+ " + "+num2+ " es ",num3);


//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('\n-Exercise 1.b');


var nombre = 'Julian';
var apellido = 'Riedinger';
var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando
//  el resultado de la suma en una 3er variable (utilizar length).

console.log('\n-Exercise 1.c');

var nombre = 'Julian';
var apellido = 'Riedinger';
var longitudNombreApellido = nombre.length + apellido.length;

console.log('Longitud de nombre + longitud de apellido ', longitudNombreApellido);