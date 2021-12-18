// Peticiones multiples
// https://jsonplaceholder.typicode.com/posts/1 {}  
// https://jsonplaceholder.typicode.com/posts/1/comments [{},{}]

/*
const getData = (url, callback) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "GET" , url, true)

    xhttp.onload = function(data) {
        if(data.target.status === 200) {
            let objResp = JSON.parse(data.target.response)
            // callback
            callback(objResp)

        }
    }

    xhttp.send()
}

const printCardPost = (post) => {
    console.log(post)
    let templatePost = `
    <div class="col-12 col-md-12 text-center">
        <div class="card bg-light" >
            <div class="card-body text-left">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
                <p class="card-text">${post.body}</p>
                <h2>Comments</h2>
                <div class="ctn__comments">
                    <ul class="list-group list-group-flush list__comments">

                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector('.grid__posts').innerHTML = templatePost
}

const printCommentsPost = (arrComments) => {

    let templateComments = ''
    arrComments.forEach( (comment) => {
        templateComments +=  `
            <li class="list-group-item">
                <strong>${comment.name}</strong>
                <span class="comment__body">${comment.body}</span>  
            </li>
        `
    })
    console.log(templateComments)
    document.querySelector('.list__comments').innerHTML = templateComments
}

getData('https://jsonplaceholder.typicode.com/posts/1', printCardPost)
getData('https://jsonplaceholder.typicode.com/posts/1/comments', printCommentsPost)



// GET
// VERbost http (POST, PUT, PATCH,  GET,DELETE)

// POST crear post
const xhttp = new XMLHttpRequest()
xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data)
    }
}

let objNewPost =  {
    author: 'Corcino Paz',
    title: 'foo',
    body: 'bar lorem',
}

//xhttp.send( JSON.stringify(objNewPost) )

// PATCH actualizar datos
const updateUser =  (objUpdate, idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUpdate) )
}

let objUpdatePost =  {
    author: 'Brisset Luzmila Corcino Paz',
}

//updateUser(objUpdatePost, '-Mr56occcQWZQSCKAP3Z')

// DELETE Eliminar datos
const deleteUser =  (idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send()
}
deleteUser('-Mr56occcQWZQSCKAP3Z')


// POST crear datos
const createUser =  (objUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST" , "https://proy-briss-default-rtdb.firebaseio.com/.json", true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
}*/

//let objNewPost =  {
    //author: 'Jorge luis',
    //title: 'foo',
  //  body: 'bar lorem',

//}

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

if (title== '' 0 && author.length<0 && timetoread.length<0 && resume.length<0 ) {
    alert("te falta un dato por ingresar")
} else {
    let send__post = document.querySelector('#send__post')
    send__post.addEventListener('click', () => {
        
        let title = document.querySelector('#title').value
        let author = document.querySelector('#author').value
        let timetoread = document.querySelector('#timetoread').value
        let resume = document.querySelector('#resume').value
        
        // console.log(title, author, timetoread, resume)
    
        let objNewPost = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
    
        createUser(objNewPost)
    })
    
}





// let objNewPost =  {
//     author: 'Jorge luis',
//     title: 'foo',
//     body: 'bar lorem',
// }