
/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/
/*
//let number1 = parseInt(prompt("ingresa 1er número"))
//let number2 = parseInt(prompt("ingresa 2do número"))

if (number1>number2 ) {
    console.log('Division',number1/number2)
} if (number1<number2 ) {
    console.log('Suma',number1+number2)
} else if (number1===number2){
    console.log('Multiplicar',number1*number2)
}
*/
/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/
//operador ternario
 let number1 = parseInt(prompt("ingresa un número del 1 al 100"))
 number1%2==0?console.log("es par"):console.log("No es par")

/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
let day = prompt("ingresa un dia de la semana")
switch (day) {
	case 'Lunes':
		console.log('dia Nº 1')
		break;
	case 'Martes':
		console.log('dia Nº 2')
		break;
	case 'Miercoles':
		console.log('dia Nº 3')
		break;
	case 'Jueves':
		console.log('dia Nº 4')
		break;
	case 'Viernes':
		console.log('dia Nº 5')
		break;
	case 'Sábado':
		console.log('dia Nº 6')
		break;
	case 'Domingo':
		console.log('dia Nº 7')
		break;
	default:
		break;
}
/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
let number1 = parseInt(prompt("ingresa 1er número"))
let number2 = parseInt(prompt("ingresa 2do número"))

number1<number2?console.log("número 1 es menor"):console.log("número 1 es mayor")//operador ternario

number2>number1?console.log("número 2 es mayor"):console.log("número 2 es menor")//operador ternario