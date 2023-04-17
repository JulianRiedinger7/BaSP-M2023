console.log('--EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
// resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a');

function sum(num1, num2) {
  return num1 + num2;
}

var example = sum(5, 10);
console.log(example);


//b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
// no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error
// y retornar el valor NaN como resultado.

console.log('-Exercise 6.b');

function validatedSum(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    alert('Ambos parametros deben ser numericos (6.b)');
    return NaN;
  } 
  return num1 + num2;
}

example = validatedSum('hola',3);
console.log(example);

//c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es
// un número entero.

console.log('-Exercise 6.c');

function validateInteger(num) {
  return Math.floor(num) === num;
}

console.log(validateInteger(10));
console.log(validateInteger(10.5));

//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio
// 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error 
// y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d');

function validatedIntegerSum(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    alert('Ambos parametros deben ser numericos (6.d)');
    return NaN;
  } 
  if (!validateInteger(num1) || !validateInteger(num2)) {
    alert('Error: Ambos parametros deben ser enteros (6.d)');
    return Math.round(num1) + Math.round(num2);
  }
  return num1 + num2;
}

console.log(validatedIntegerSum(10, 20));
console.log(validatedIntegerSum('hola', 5));
console.log(validatedIntegerSum(10.5, 12));
console.log(validatedIntegerSum(5, 2.5));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función 
// probando que todo siga funcionando igual que en el apartado anterior.

console.log('-Exercise 6.e');

function validatedFloatSum(num1,num2) {
  if (!validateInteger(num1) || !validateInteger(num2)) {
    alert('Error: Ambos parametros deben ser enteros (6.e)');
    return Math.round(num1) + Math.round(num2);
  }
  return num1 + num2;
}

function exSum(num1,num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    alert('Ambos parametros deben ser numericos');
    return NaN;
  } 
  return validatedFloatSum(num1,num2);
}

console.log(exSum(15, 45));
console.log(exSum('chau', 5));
console.log(exSum(5.5, 12));
console.log(exSum(5, 7.5));

