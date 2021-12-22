    window.addEventListener('load', () => {
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

