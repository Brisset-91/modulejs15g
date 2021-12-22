

// ir por los datos del post
window.addEventListener('load', () => {
    // const xhttp = new XMLHttpRequest()
    // let idPost = location.search.slice(8)
    // xhttp.open( "GET" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    // xhttp.onload = function(data) {
    //     if(data.target.status === 200) {
    //         let objResp = JSON.parse(data.target.response)

    //         document.querySelector('#title').value = objResp.title
    //         document.querySelector('#author').value = objResp.author
    //         document.querySelector('#timetoread').value = objResp.timetoread
    //         document.querySelector('#resume').value = objResp.resume

    //     }
    // }
    // xhttp.send()
    // fetch('url', objOptions)

    let idPost = location.search.slice(8)
    console.log(idPost)
    fetch(
        `https://proy-briss-default-rtdb.firebaseio.com/${idPost}.json`,
        {
            method: 'GET',
        }
    )
    .then( (response) => {
        return response.json()
    })
    .then( (post) => {
        document.querySelector('#title').value = post.title
        document.querySelector('#author').value = post.author
        document.querySelector('#timetoread').value = post.timetoread
        document.querySelector('#resume').value = post.resume
    })
    .catch((err) => {
        console.log(err)
    })
})

/*
// PATCH actualizar datos XHR
const updateUser =  (objPost, idPost) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://proy-briss-default-rtdb.firebaseio.com/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send( JSON.stringify(objPost) )
}
*/
// PATCH actualizar datos Fetch
const updateUserFetch =  (objPost, idPost) => {
    fetch(
        `https://proy-briss-default-rtdb.firebaseio.com/${idPost}.json`, 
        {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(objPost)
        }
    ).then( (res)=> {
        return res.json()
    }).then ( (res) => {
        console.log(res)
        document.querySelector('#alert__response').classList.remove('d-none')
    })
}


let update__post = document.querySelector('#update__post')
update__post.addEventListener('click', () => {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value

    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== ''
    ){
        let idPost = location.search.slice(8)
        let postToUpdate = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
    
        // updateUser(postToUpdate, idPost )
        updateUserFetch(postToUpdate, idPost )
    } else {
        alert('Algunos datos estan vacios')
    }

})

// DELETE eliminar post
/*
let delete__post = document.getElementById('delete__post')
delete__post.addEventListener('click', () => {
    let idPost = location.search.slice(8)
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://proy-briss-default-rtdb.firebaseio.com/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            location.replace('http://127.0.0.1:5500/')
            // document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send() 
})*/

//DELETE eliminar post con FETCH
const DeleteFetch =  (objPost, idPost) => {
    fetch(
        `https://proy-briss-default-rtdb.firebaseio.com/${idPost}.json`, 
        {
            method: 'DELETE',
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify(objPost)
        }
    ).then( (res)=> {
        return res.json()
    }).then((redir)=>{
        location.replace('http://127.0.0.1:5501/')
    })
}

let delete__postFetch = document.getElementById('delete__post')
delete__postFetch.addEventListener('click', () => {
    let  idPost = location.search.slice(8)
    let postDeleted = {
        title: title,
        author: author,
        timetoread: timetoread,
        resume: resume
    }

    DeleteFetch(postDeleted,idPost)

})

