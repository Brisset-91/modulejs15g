
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
} */


//  pedir al usuario un string
//  contar las vocales y las consonantes
// imprimir en consola
// 2 vocales y 2 consonantes
/*let letter = prompt("Ingresa alguna palabra")
let vocales = 0
let consonantes = 0
for(let y = 0; y < letter.length; y++ ) {
	if (letter[y]=="a" || letter[y]=="e" || letter[y]=="i" || letter[y]=="o" || letter[y]=="u" ) {
		vocales += 1
	} else {
		consonantes += 1
	}
}

console.log(`Son ${vocales} vocales y ${consonantes} consonantes`)*/

// pedir una palanbra con espacio al inicio y al final
// contar las letras "a" y "e", 
// Contar numero de espacios, sin contar los espacios
// al inicio y al final
/*
let letter = prompt("Ingresa alguna palabra con espacio al inicio y final").trim().toLowerCase() ;
let vocalA = 0
let vocalE = 0
let vacios = 0
if (letter.length>0) {
	for(let y = 0; y < letter.length; y++ ) {
		if (letter[y]=="a" || letter[y]=="á" ) {
			vocalA += 1
		} 
		else if (letter[y]=="e" || letter[y]=="é"){
			vocalE += 1
		}
		else if (letter[y]==" "){
			vacios += 1
		}
	}
} else {
	console.log("ingresa un texto")
}

console.log(letter)
console.log(`contiene ${vocalA} vocales "a", contiene ${vocalE} vocales "e" y ${vacios} vacios intermedios`)*/

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
*/
let word = prompt("Ingresa una palabra").toLowerCase()
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
*/


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

}

// text = En Una galaxia muy muy lejana
// text = En Una + G + alaxia muy muy lejana
// text = En Una Galaxia + M + uy muy lejana
/*
	Pedir al usuario cuantas materias tiene actualmente
	Pedir al usuario la calificacion de cada una de esas N materias
	Arrojar el promedio en un alert
*/


