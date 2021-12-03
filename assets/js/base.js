
// Pedir el usuario 1 numero entre 1 y 100
// sumar todos los numeros entre el 1 y este numero
// Mandar un alert con el  total

// 10
// 1+2+3+4+5+6+7+8+9+10
// total -> ?
/*
let letter = parseInt(prompt("Ingresa un número del 1 al 10"));

if (!isNaN(letter) === false && letter >= 0 && letter<=100) {
	for (let i = 1; i <= 10; i++) {
		letter += i	
	}
	console.log(`La Suma es ${letter}`)
} else {
	console.log(" Solo números del 1 al 100")
}
*/
// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo
/*
let letter = prompt("Ingresa un palabra");
let phrase = []
console.log(letter.length)
for (let i = letter.length; i >= 0; i--) {
	console.log(letter[i])
	phrase.concat(letter[i])
}
console.log(phrase)*/

/*Ivon,Brisset,Jose y Leo */
/*
	Pedir al usuario una palabra
	Devolver la palabra capitalizada
	p.ej. 'galAxiA'
	Ouput -> 'Galaxia'

let word = prompt("Ingresa una palabra").toLowerCase()*/
/*
let wordInicial = word.charAt(0).toUpperCase()
let palabra = word.length
let result = word.slice(1,palabra);
let ultimo = wordInicial.concat(result)
console.log(ultimo)*/

/*
	Pedir al usuario una oración (permitir espacios)
	Capitalizar cada una de las palabras de la oración
	p.ej. 'En una galaxia muy muy lejana'
	Ouput -> 'En Una Galaxia Muy Muy Lejana'



let text = prompt("Ingresa una Frase").toLowerCase().trim()

text = `${text[0].toUpperCase()}${text.substring(1)}`
//console.log(text)


for (let i = 0; i < text.length; i++) {
	
	if (text[i]==" ") {
		text[i+1]
	}
	console.log(text[i])
	
}


let text = prompt('introduce una oración: ').toLowerCase()


 text = text[0].toUpperCase() + text.substring(1)

for (let i = 0; i < text.length; i++) {
 
  if (text[i] === ' ') {

    text= text.substring(0,i+1) + text[i+1].toUpperCase() + text.substring(i+2)
    //En Una galaxia muy muy lejana
  }

}*/

// text = En Una galaxia muy muy lejana
// text = En Una + G + alaxia muy muy lejana
// text = En Una Galaxia + M + uy muy lejana
/*
	Pedir al usuario cuantas materias tiene actualmente
	Pedir al usuario la calificacion de cada una de esas N materias
	Arrojar el promedio en un alert
*/

/////////nueva clase 29-11-21


/*
// funcion sin parametros
function suma() {
	return 2 +  2
}

// funcion con parametros

// let celsiusGradesReturned = toCelsius(100)
// console.log(celsiusGradesReturned)
function toCelsius(fahrenheit) {
	let celsiusGrades = (5 / 9) * (fahrenheit - 32)	

	// retorno de la funcion
	return celsiusGrades
}
*/
// funcion que pida el nombre al usuario
// y lo imprima en consola

/*
function newName() {
	let names = prompt("Ingresa tu nombre")
	console.log(names)
	
}
newName()

/**
 * Funcion que reciba una palabra
 * y la retorne al revés


function word() {
	let word = prompt(`Ingresa una palabra`).trim()
	let wordBackward = ""
	console.log(word)
	for (let i = word.length-1; i >=0; i--) {
		wordBackward += word[i]
	}
	console.log(wordBackward)
}
word() */

//brisset, imael job
/*
Función 1:
Imprimir en consola las tablas de multiplicar del 1 al 10 */

function tables(){ 
	for(i = 1; i <= 10; i++){ 
		for(j = 1; j <= 10; j++){ 
			console.log(`${i} x ${j} = ${i * j}`) 
		} 
	} 
} 
//tables()
/*
Función 2:
Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
let numberUser = parseInt(prompt('Dame un numero entre 1 y 100'))*/
let suma = 0

function sum(number) {
	if(!isNaN(number)){
		for( i = 1; i <= number; i++){
		suma += i
		}
	} else {
		console.log('No es un numero valido')
	}
	console.log(suma)
	//return suma
}
//sum(numberUser)

/*
Función 3:
Imprimir en consola si una oración es un palindromo (puede contener espacios)
anita lava la tina -> True*/


function checkPalindrome(string) { 
	const arrayValues = string.split(''); 
	const reverseArrayValues = arrayValues.reverse(); 
	const reverseString = reverseArrayValues.join(''); 
	if(string == reverseString) { console.log('True'); } 
	else { console.log('False'); 
	}
} 
const string = prompt('Ingresa una string: '); checkPalindrome(string); 
/*
Función 4:
Imprimir en consola la suma total de todos los digitos de una cantidad 
p.ej. "1234" -> 10*/

let numberUser = parseInt(prompt('Dame un numero con mas de 1 dígitos'))
let suma = 0
let sumaDigitos = 0

function sum(number) {
	if(!isNaN(number)){
		for( i = 1; i <= numberUser; i++){
			suma += i
		}
	} else {
		console.log('No es un numero valido')
	}
	console.log(suma)
	//return suma
}
sum(numberUser)
/*
Función 5:
Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
-> 233168*/	

//alberto brisset miguel leo

