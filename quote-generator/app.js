// selectors
let quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('#quote-text')
const quoteAuthor = document.querySelector('#quote-author')
const twitter = document.querySelector('#twitter')
const newQuote = document.querySelector('#new-quote')
let loader

// EventListener
twitter.addEventListener('click', (e) => {
  e.preventDefault()
  tweetQuote()
})

newQuote.addEventListener('click', (e) => {
  e.preventDefault()
  getQuote()
})

// onload
getQuote()
