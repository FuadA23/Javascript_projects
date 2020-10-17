// selectors
const loader = document.querySelector('#loader')
const imageContainer = document.querySelector('#image-container')

// variables
const imageCount = 5
const apiKey = 'ADD_YOUR_KEY'
const apiurl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${imageCount}`

let photoArry = []

let imageLoad = 0
let ready = false
let totalImage = 0  
// function

// Check if the Image are loaded
const imageLoaded = () => {
  imageLoad++
  if (imageLoad === totalImage) {
    ready = true
    loader.hidden = true
  }
}

// Using the setAttributs
const setAttributes = (element, attribute) => {
  for (let key in attribute) {
    element.setAttribute(key, attribute[key])
  }
}

// Create Elements for the photos
const printPhotos = async () => {
  imageLoad = 0
  totalImage = photoArry.length
  photoArry.forEach((photo) => {
    // create <a> the parent of <img>
    const container = document.createElement('a')
    setAttributes(container, {
      href: photo.links.html,
      target: '_blank',
    })

    // create <img> to insert the photos
    const img = document.createElement('img')
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })
    img.addEventListener('load', imageLoaded)
    container.appendChild(img)
    imageContainer.appendChild(container)
  })
}

// Get photos from the API
const getPhotos = async () => {
  const response = await fetch(apiurl)
  if (response.status === 200) {
    photoArry = await response.json()
    printPhotos()
  }
}

// Event listeners
window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 && ready) {
    ready = false
    getPhotos()
  }
})
// onload
getPhotos()
