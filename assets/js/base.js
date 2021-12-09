
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
 * 
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 4. setter newProperty
 * 
 * 
 */


/**
 * Estudiar DOM 
 * CSS y HTML
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Agregar un metodo para calcular el IMC 
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


console.log(koder) 