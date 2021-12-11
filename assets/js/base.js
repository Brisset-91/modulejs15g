/*
let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },
////Ejercicios
    get averageKoder() {
        let sum =  this.average.reduce((acc, cv) => acc += cv, 0)
        let total =  this.average.length
        let av = sum / total
        return av
    },
    set averageKoder(average) {
        this.average = average
    },

    get IMCKoder() {
        this.peso = 57 
        this.altura = 1.50 
        return this.IMC = this.peso/this.altura**2 
    },
    set IMCKoder(IMC) {
        this.IMC = IMC
    },


}

// Metodos
console.log( koder.getAge() )

// getters
console.log('Edad inicial: ', koder.ageKoder)
console.log('Nombre completo: ', koder.fullName)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']

// getter y setter de 
/**
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 4. setter newProperty
*/


/**
 * Estudiar DOM 
 * CSS y HTML
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Agregar un metodo para calcular el IMC 
/*
koder.setGetIMC = function () { 
    this.peso = 57 
    this.altura = 1.50 
    this.IMC = this.peso/this.altura**2 
} 
koder.setGetIMC() 

// Agregar un metodo para Agregar un nuevo promedio 
koder.setNewAve = function () { 
    this.average.push(10) 
} 
koder.setNewAve() 
// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function (key,value) { 
    this[key] = value 
} 
koder.addNewProperty('nationality','Mexican') 


console.log(koder) */
////////////////////////////////////////////////////////////////////

/**
 * Selecionar elementos
 * 
 * 1. Selecionar por ID
 */

//  1. Selecionar por ID
document.getElementById('head__title') 
document.getElementsByTagName('li')
document.getElementsByClassName('link__menu')

document.querySelector('#head__title')
document.querySelector('li')
document.querySelector('.link__menu')
document.querySelectorAll('.link__menu')
// document.querySelectorAll('')

/**
 * Obtener atributos
 * Setear atributos
 */

// get
let title = document.querySelector('#head__title').getAttribute('data-title')
let level = document.querySelector('#head__title').getAttribute('data-level')
//console.log(level)

// set
document.querySelector('#head__title').setAttribute('data-custom','random')
// reemplazando clases 
document.querySelector('#head__title').setAttribute('class','trees cuatro')

// Agregar clases
document.querySelector('#head__title').classList.add('clase3')
// remover clases
document.querySelector('#head__title').classList.remove('clase2')

// comprobar si existe un atributo
document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"


 document.querySelector('#head__title').hasAttribute('clase1 clase2')
// get
let title1 = document.querySelector('#head__title').ghasAttribut('clase1') === true ? console.log('si tiene'): console.log('No tiene')

let title2 = document.querySelector('#head__title').ghasAttribut('clase2') === true? console.log('si tiene'): console.log('No tiene')

let title3 = document.querySelector('#head__title').getAttribute('otra') === true? console.log('si tiene'): console.log('No tiene')


if (document.querySelector('#head__title').hasAttribute('class') === true) {
    if (document.querySelector('#head__title').getAttribute('class-clase2') === true && document.querySelector('#head__title').getAttribute('class-otra') === true) {
        
    } else {
        
    }
}
 */


// data attributes
// propiedades personalizadas



/**
 * Seleccionar padres e hijos (traversing)
 */


/**
 * Manipular elementos del DOM
 */
/*
let ulExample = document.createElement('li')
ulExample.classList.add('menu')

let ulElementNew = document.createElement('ul')
ulElementNew.classList.add('menu')


let liFirstNew = document.createElement('li')
liFirstNew.classList.add('menu')
liFirstNew.textContent = 'Home'

ulElementNew.appendChild(liFirstNew)

let secondNew = document.createElement('li')
secondNew.classList.add('menu')
secondNew.textContent = 'Products'

ulElementNew.appendChild(secondNew)


document.getElementsByTagName('body')[0].appendChild(ulElementNew)*/

function reverseUser() {
    let nameOriginal = document.querySelector('#username').value;
    let nameReveced = nameOriginal.split("").reverse().join("")
    document.getElementById('usernamereversed').value=nameReveced
    console.log(nameReveced)
}


let cities = ['colima', 'colombia','Estado de mexico']

const filterCity = () => {
    // filtrar ciudades
    let citySearch = document.querySelector('#name__city').value
    let citiesFiltered = cities.filter( (city) => {
        if(city.includes(citySearch) === true){
            return city
        }
    })

    // creo el layout con las ciudades filtradas
    let lista = ''
    citiesFiltered.forEach( (value) => {
        lista += `<li>${value}</li>`
    })

    // agrego el layout
    document.querySelector('#listCity').innerHTML = lista
}

/////Search ejercice

let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'Brisset',
        age: 30,
        city: 'Lima'
    }
]

//koders.forEach(element => {

    const filterKoder = () => {
        // filtrar koders
        let koderSearch = document.querySelector('#name__koder').value.toLowerCase()
        //koderSearch=koderSearch.toLowerCase()
        let koderFiltered = koders.filter( (koder) => {
            
            if(koder.name.toLowerCase().includes(koderSearch)){
                //console.log(koder)
                return koder
            }
        })

        // creo el layout con las ciudades filtradas
        let lista = ''
        koderFiltered.forEach( (value) => {
            console.log(value)
            lista += `<li><strong>${value.name}</strong>
            <span>${value.age}</span>
            <span>${value.city}</span></li>
            `
        })

        // agrego el layout
        document.querySelector('#listKoders').innerHTML = lista
    }

//});