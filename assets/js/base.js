
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
let arrCapitalizado = capitalizeWithMap(arr )
//console.log(arrCapitalizado)

////////filter
let arrayFilter =[1,2,3,4,5,6,7]

let arrForEach = arrayFilter.filter(element => {
	return element %2 ===0
});
//console.log(arrForEach)

/**
 * 
 * -> ['hola','mundo', 0, 5]
 * -> ['hola','mundo']
 * 1. funcion
 * 2. filtrar solo los que son de typo string
 */
let arrayFil = ['hola','mundo', 0, 5,'como']

let onlyString = arrayFil.filter(element => typeof element ==='string')
console.log(onlyString)
 
/////otro 
