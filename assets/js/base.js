// Peticiones multiples
// https://jsonplaceholder.typicode.com/posts/1 {}  
// https://jsonplaceholder.typicode.com/posts/1/comments [{},{}]

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

