
// arr.forEach()

// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el  valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

const mostBigger = (arr) => {
	let biggest = arr[0]
	arr.forEach( (value, index, array) => {
		if(biggest < value){
			biggest = value
		}
	})
	return biggest
}


const smallerNumber = (arr) => {
	let smaller = arr[0]
	
	arr.forEach( (value) => {
		if(smaller > value){
			smaller = value
		}
	})

	return smaller
}
// console.log( smallerNumber( [5,7, 3, 4, 10] ) )


// arr.map()
const arrExample = [11,2,3,10,5]
const resultado = arrExample.map( (val) => {
	return val * 2
})
// console.log(resultado)

// dado un array de numeros,
// retornar un array con los numeros convertidos a string
// Entrada : [11,2,3,10,5]
// Salida : ['11','2','3','10','5']

const numberToString = arr => {
	arr.map( element => {
		return element.toString() 
	})
}

// const numberToString = arr => arr.map( element => element.toString() )




// .map()
// función
// Dado un array como parametro 
// capitalizar todos los elementos que sean strings
// typeof variable

// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]

const capitalizeArr = (arr) => {

	let arrCapitalized =  []
	arrCapitalized = arr.map( (element) => {
			if(typeof element === 'string') {
				let stringCap = `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
				return stringCap
			} else {
				return element
			}
    	}
	)
	
	return arrCapitalized
} 

let arrToCap = ['hOlA', 'mundo', 5, [3,4], 'otro']
let resultCap = capitalizeArr(arrToCap)
// console.log(resultCap)




// arr.filter()
const arrayCitys = ['colima','CDMX','Monterrey', 'Guadalajara']

// del array anterior
// filtrar solo las ciudades que empiecen con C
let resultFilter = arrayCitys.filter( (cv,index, arr) => {

	if(cv.toLowerCase().slice(0,1) === 'c'){
		return cv
	}

})

//console.log(resultFilter)

//////////////////clase-8 02-12-21/////////

// ['hOla','munDo']
// -> ['Hola','Mundo']

const capitalizeWithMap = (arr) => {
	let arrMap =  []
	arrMap= arr.map( (element) => {	
		let string = `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
		return string
	
    })
	return arrMap
}


let arr = ['hOlA', 'mUNdo','cOMo','eStaS']
let arrCapitalizado = capitalizeArr(arr )
console.log(arrCapitalizado)
