// selectors
const quoteText = document.querySelector('#quote-text')
const quoteAuthor = document.querySelector('#quote-author')
const twitter = document.querySelector('#twitter')
const newQuote = document.querySelector('#new-quote')

// functions
// create the Elements for desplay the quote
const creatElement = async (data) => {
    // create <span> quote
    const spanQuote = document.createElement('span')
    spanQuote.setAttribute('id', 'quote')
    spanQuote.innerHTML = data.quoteText
    quoteText.appendChild(spanQuote)
    
    // if the quote text is long, add class long-quote
    if (data.quoteText.length > 120) {
        spanQuote.classList.add('long-quote')
    }else {
        spanQuote.classList.remove('long-quote')
    }
    
    // create <span> author
    const spanAuthor = document.createElement('span')
    spanAuthor.setAttribute('id', 'author')
    quoteAuthor.appendChild(spanAuthor)

    // if the author is blank, add Unknown
    if (data.quoteAuthor === '') {
        quoteAuthor.innerHTML = 'Unknown'
    }else {
        spanAuthor.innerHTML = data.quoteAuthor
    }
}

// Get the Api
const getQuote = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    const response = await fetch(proxyUrl + apiUrl)

    if(response.status === 200) {
        const data = await response.json()
        console.log(data)        
        creatElement(data)
    }else {
        throw new Error ('Ooops,unable to fetch data')
    }
}

const tweetQuote = () => {
    const quote = quoteText.innerText
    const author = quoteAuthor.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`
    window.open(twitterUrl, '_blank')
}

// EventListener
twitter.addEventListener('click', (e) => {
    e.preventDefault()
    tweetQuote()
})

newQuote.addEventListener('click',(e) => {
    e.preventDefault()
    getQuote()
})

// onload
getQuote()