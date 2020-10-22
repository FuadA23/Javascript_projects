// Selectors
const audio = document.querySelector('#audio')
const button = document.querySelector('#button')

// Functions

// Disabled/Enabled Button
const toggleButton = () => {
  button.disabled = !button.disabled
}
// Get the text-to-speech API
const tellMe = (joke) => {
  VoiceRSS.speech({
    key: '<API_KEY>',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  })
}

// Get the joke API
const getJoke = async () => {
  let joke = ''
  const apiUrl =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist'
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`
    } else {
      joke = `${data.joke}`
    }

    // text-to-speech
    tellMe(joke)

    // Disable Button
    toggleButton()
  } catch (error) {
    console.log('Ooops', error)
  }
}

// Events
button.addEventListener('click', getJoke)
audio.addEventListener('ended', toggleButton)

