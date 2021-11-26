
/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

//operador ternario
 let number1 = parseInt(prompt("ingresa un número del 1 al 100"))
 number1%2==0?console.log("es par"):console.log("No es par")
*/
/**
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...

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
} */
/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2

let number1 = parseInt(prompt("ingresa 1er número"))
let number2 = parseInt(prompt("ingresa 2do número"))

number1<number2?console.log("número 1 es menor"):console.log("número 1 es mayor")//operador ternario

number2>number1?console.log("número 2 es mayor"):console.log("número 2 es menor")//operador ternario */
/////nueva clase


// 1. Estar en la rama class/class-two
// 2. Crear el archivo celsiusFahrenheit.js
// En el archivo...
// 3. pedir al usuario los grados actuales en su localidad 
// 4. Arrojar en un alert() con los ºC convertidos a ºF
/*
let temperatureCelsius = parseInt(prompt("ingresa el número de temperatura de tu localidad"))

if (!isNaN(temperatureCelsius) === false) {
	let Fahrenheit = (temperatureCelsius * 9/5)+ 32
	//console.log(Fahrenheit)
	alert (`La temperatura de tu localidad convertido a ºF es, ${Fahrenheit}`)
} else {
	console.error("Ingresa un dato válido")
}*/

/*
Estar en la rama de la clase
Crear el archivo is_largest.js
Pedir al usuario que ingrese 3 números
Imprimir en consola el mayor

Realizar un diagrama (si es necesario)


let numberOne = parseInt(prompt("ingresa el 1er número"))
let numberTwo = parseInt(prompt("ingresa el 2do número"))
let numberThree = parseInt(prompt("ingresa el 3er número"))

if (isNaN(numberOne) === false&&isNaN(numberTwo) === false&&isNaN(numberThree) === false) {
	if (numberOne>numberTwo&&numberOne>numberThree) {
		console.log("El número 1 es mayor que los otros 2 números")
	} else if (numberTwo>numberOne&&numberTwo>numberThree) {
		console.log("El número 2 es mayor que los otros 2 números")
	} else if (numberThree>numberOne&&numberThree>numberTwo) {
		console.log("El número 3 es mayor que los otros 2 números")
	}
} else {
	console.error("Ingresaste un dato inválido")
}
*/
/*
- Estar en la rama de la clase
- En el archivo weather.js
- Pedir al usuario que ingrese como esta el clima en su ciudad
--Opciones
---Soleado
---Lluvioso
---Nevando
---Nublado
-Pedir la temperatura aproximada en ºC
-Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
--P.ej: En tu ciudad, el día está "Soleado" con una temperatura de 100ºF
 */

let temperature = prompt("como está el clima en tu ciudad (Soleado,Lluvioso,Nevando o Nublado)")
console.log(temperature)
let temperatureCelsius = parseInt(prompt("ingresa el número de temperatura aprox. en ºC"))
console.log(temperatureCelsius)

if (!isNaN(temperatureCelsius) === false) {
	let Fahrenheit = (temperatureCelsius * 9/5)+ 32

	switch (temperature ) {
		case 'Soleado':
			console.log(`En tu ciudad, el día está "Soleado" con una temperatura de ${Fahrenheit} ºC" `)
			break;
		case 'Lluvioso':
			console.log(`En tu ciudad, el día está "Lluvioso" con una temperatura de  ${Fahrenheit} ºC" `)
			break;
		case 'Nevando':
			console.log(`En tu ciudad, el día está "Nevando" con una temperatura de  ${Fahrenheit} ºC" `)
			break;
		case 'Nublado':
			console.log(`En tu ciudad, el día está "Nublado" con una temperatura de  ${Fahrenheit} ºC" `)
			break;
		default:
			console.log("Opcion ingresada incorrecta")
			break;
	} 

} else {
	console.error("Ingresa un dato válido")
}

