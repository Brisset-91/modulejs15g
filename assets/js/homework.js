
/**
 * 
 * Tarea 1
 * Estudiar promesas JS
 * https://www.freecodecamp.org/espanol/news/promesas-en-javascript-es6/
 * Esdutiar el api fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * 
 */

/**
 * Tarea 2
 * Metodos (verbos http)
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 * GET
 * 
 * POST, PUT, PATCH, DELETE
 */


/**
 * Tarea 3
 * Crear una cuenta en firebase
 */


/**
 * 
 * Tarea 4
 * Generar un grid de todos los usuarios 
 * https://jsonplaceholder.typicode.com/users
 * 
 */


// POST crear datos
// POST crear datos
const createUser =  (objPost) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST" , "https://proy-briss-default-rtdb.firebaseio.com/.json", true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#timetoread').value = ''
            document.querySelector('#resume').value = ''
            let res = JSON.parse(data.target.response )
            let idPost = res.name
            document.getElementById('post__id').innerText = idPost
            document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send( JSON.stringify(objPost) )
}


let send__post = document.querySelector('#send__post')
send__post.addEventListener('click', () => {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value

    // console.log(title, author, timetoread, resume)
    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== ''
    ){
        let objNewPost = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
        createUser(objNewPost)
    } else {
        alert('Algunos datos estan vacios')
    }

})


