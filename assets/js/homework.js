
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
//console.log(resultado)
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
//////////////////////////////////////////////////////Clase 01-12-21/////////////////////////////////////////

// 1. Generar una function
// que reciba un array como parametro
// y devuelva solo los items que son pares
// p.ej. onlyEvenValues( [1, 2, 3, 4] )
// -> [2, 4]
// Aplicar el metodo .forEach()
// hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

const onlyEvenValues = arrNumbers => {
    // codigo aquí
}



// 2. function que reciba como parametro una array de strings
// y devuelva la primer y ultima letra del string
// de cada uno de los items del array 
// -> firstAndLast (['hola', 'mundo'] )
// -> ['ha', 'mo']
// .forEach() o .map()

const firstAndLast = arrStrings => {
    // codigo aquí

}

/**
 * 3. Funcion que reciba un array de numeros
 * y devuelva el promedio
 * -> getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (arr) => {

}


//  4. funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// convertLeapYear( [1990, 2000, 2001, 2020] )
// -> [2000,2020]
// .forEach()
// hint: https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year

const convertLeapYear = arr => {
    
}


