// Your code here
const films = document.getElementById('films')
const filmTitle = document.getElementById('film-item')
const posterDiv = document.getElementById('four-wide-column')
const img1 = document.getElementById('poster')
const showing = document.getElementById('showing')
const movieTitle = document.getElementById('title')
const movieRuntime = document.getElementById('runtime')
const movieInfo = document.getElementById('film-info')
const showtime = document.getElementById('showtime')
const ticketNumber = document.getElementById('ticket-num')
const buy = document.getElementById('buy-ticket')

buy.addEventListener('click', (e) => {
    alert('OUT OF SERVICE!')
})

let request = async () => {
    let req = await fetch(`http://localhost:3000/films`)
    let res = await req.json()
    console.log(res)
    res.forEach((film,i) => {
        poster.src = film.poster
        poster.alt = film.title
        let li = document.createElement('li')
        li.innerText = film.title
        films.appendChild(li)
        movieTitle.innerText = film.title
        movieRuntime.innerText = film.runtime + "min"
        movieInfo.innerText = film.description
        showtime.innerText = film.showtime
        ticketNumber.innerText = 3
    })


}
request()