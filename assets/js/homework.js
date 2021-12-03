
/** 
 * Ejercicio 1
 * imprimir en consola todos los numeros pares entre 1 y 100
 * -> 2
 * -> 4
 * -> 100

for (let i = 0; i <=100; i++) {
    if (i%2==0) {
        //console.log(`Número par entre 1 al 100 es ${i}`)
    }
}*/
/**
 * Ejercicio 2
 * Pedir al usuario un string
 * Invertir el orden e imprimir en consola
 * Entrada: "reverse"
 * Salida: -> esrever
 * hint: https://www.w3schools.com/jsref/jsref_length_string.asp
*/
//let word = prompt(`Ingresa una palabra`).trim()
/*
console.log(word.length)
let wordBackward = ""
console.log(word)
for (let i = word.length-1; i >=0; i--) {
    wordBackward += word[i]
}
console.log(wordBackward)*/

/**
 * Ejercicio 3 
 * Declarar un string de al menos 2 palabras
 * Imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 * hint: https://www.w3schools.com/jsref/jsref_replace.asp
 
let phrase = prompt(`Ingresa una frase`).trim()
let newPhrase = phrase.replace(/ /gi, "-")
console.log(newPhrase)*/

/**
 * Ejercicio 4
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 * 
 * hint: https://www.w3schools.com/jsref/jsref_slice_string.asp
 * hint: https://www.w3schools.com/jsref/jsref_indexof.asp
 */



// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10 

//arrow function
const multiplicar = (a,b=10) =>{
    if (!isNaN(a) && a > 0 &&  a <= 100 || !isNaN(b) && b> 0 &&  b <= 100 ) {
        for (a; a <= b; a++) {

            for(j = 1; j <= 10; j++){ 
                console.log(`${a} x ${j} = ${a * j}`) 
            } 
        }
    }
    else {
        console.log('No es un numero valido')
    }    
}

//multiplicar(1,5)

/*
function multiplicar(a,b=10) {
    if (!isNaN(a) && a > 0 &&  a <= 100 || !isNaN(b) && b> 0 &&  b <= 100 ) {
        for (a; a <= b; a++) {

            for(j = 1; j <= 10; j++){ 
                console.log(`${a} x ${j} = ${a * j}`) 
            } 
        }
    }
    else {
        console.log('No es un numero valido')
    }    
}
//multiplicar(1,5)*/


// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100

function sumar(a,b=10) {
    let suma = 0
    if (!isNaN(a) && a > 0 &&  a <= 100 || !isNaN(b) && b> 0 &&  b <= 100 ) {
        for( a; a <= b; a++){
            suma += a
        }
    }  
    else {
		console.log('No es un numero valido')
	} 
    console.log(suma)
}

//sumar (5,7)

// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10
function totalAmount(a) {
    
    if (!isNaN(a)) {
        console.log(a)
        console.log(a.length)
        let aLength = a.split()
        console.log(aLength)
        for (a; a <= a.length; a++) {
            console.log(a)
            console.log(a.length)
        }
    } 
    else {
        console.log('No es un numero valido')
    }
}
totalAmount(12345)
// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario 
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168


// invertigar Arrow functions


/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * hint: https://www.w3schools.com/jsref/jsref_join.asp
 */

// large solution
const reverseSentence = (sentence ) => {
    let newSentence = ''
    newSentence = sentence.split('').reverse().join('')
    return newSentence
}
// middle solution
// const reverseSentence = (sentence ) => {
//     return sentence.split('').reverse().join('')
// }

// one line solution
// const reverseSentence = sentence => sentence.split('').reverse().join('')



/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
// large
const isPalindrome = (sentence) => {
    let sentenceNormalized = sentence.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    let sentenceWithoutSpaces = sentenceNormalized.replace(/\s/g,'')
    let sentenceReversed = sentenceWithoutSpaces.split('').reverse().join('')
    if(sentenceWithoutSpaces === sentenceReversed) {
        return true
    } else {
        return false
    }
}
// short
// const isPalindrome = sentence => {
//     let sentenceNormalized = sentence.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g,'')
//     let sentenceReversed = sentenceNormalized.split('').reverse().join('')
//     return sentenceNormalized === sentenceReversed ? true : false
// }

/**
 * Escribir un arrow function que tome como parametro 2 arrays, 
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2]) 
 * -> 13
 * 
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
*/
const arrayReduce = (arrOne, arrTwo) => {
    let newArr = arrOne.concat(arrTwo)
    let arrAdd = 0
    
    // funcion tradicional
    // newArr.forEach( function (item) {
    //     arrAdd += item
    // })

    // arrow function
    newArr.forEach( value => {
        arrAdd = arrAdd + value
    })

    // newArr.forEach( value => arrAdd += value )
    return arrAdd
}


let resultado = arrayReduce( [1,2], [3] )
console.log(resultado)
// middle
// const arrayReduce = (arrOne, arrTwo) => {
//     let arrAdd =  0
//     arrOne.concat(arrTwo).forEach( item => arrAdd += item )
//     return arrAdd
// }

// short
// const arrayReduce = (arrOne, arrTwo) => {
//     let arrAdd =  0
//     return arrOne.concat(arrTwo).forEach( item => arrAdd += item )
// }

// one line solution
// const arrayReduce = (arrOne, arrTwo) => arrOne.concat(arrTwo).reduce( (acc, cv) => acc += cv )

/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array 
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]). 
 * -> [1,2]
*/

// large
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let concatArr = arrOne.concat(arrTwo)
//     let arrRepeated = []
//     concatArr.forEach((element, index) =>  {
//         // console.log( concatArr.indexOf(element), index)
//         if( concatArr.indexOf(element) !== index ) {
//             arrRepeated.push(element)
//         }
//     })
//     return arrRepeated
// }

// middle
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let arrRepeated = []
//     arrOne.concat(arrTwo).forEach((element, index) =>  {
//         concatArr.indexOf(element) !== index ? arrRepeated.push(element) : ''
//     })
//     return arrRepeated
// }


// Large filter
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let arrRepeated = []
//     arrRepeated = arrOne.concat(arrTwo).filter((element, index, arr) =>  {
//         if( arr.indexOf(element) !== index ) {
//             return element
//         }
//     })

//     return arrRepeated
// }

// short filter
// const getRepeatItems = (arrOne, arrTwo) => {
//     return arrOne.concat(arrTwo).filter((element, index,arr) =>  {
//         return arr.indexOf(element) !== index ? element : ''
//     })
// }

// one line -- not recomended
//const getRepeatItems = (arrOne, arrTwo) => arrOne.concat(arrTwo).filter((item, index,arr) => arr.indexOf(item) !== index ? item : '')