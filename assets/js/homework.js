
/** 
 * Ejercicio 1
 * imprimir en consola todos los numeros pares entre 1 y 100
 * -> 2
 * -> 4
 * -> 100
*/
for (let i = 0; i <=100; i++) {
    if (i%2==0) {
        //console.log(`Número par entre 1 al 100 es ${i}`)
    }
}
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
 */
let phrase = prompt(`Ingresa una frase`).trim()
let newPhrase = phrase.replace(/ /gi, "-")
console.log(newPhrase)

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

let email =`corcinobrisset@gmail.com`

let emailMask = email.replace()