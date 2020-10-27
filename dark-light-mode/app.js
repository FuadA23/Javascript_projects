// Selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

// Functions

// Image theme
const imageTheme = (color) => {
  image1.src = `img/undraw_code_review_${color}.svg`
  image2.src = `img/undraw_static_website_${color}.svg`
  image3.src = `img/undraw_on_the_office_${color}.svg`
}

// Switch theme throght Dark Light Mode
const toggleDarkLightMode = (isDark) => {
    nav.style.backgroundColor =  isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = isDark ? 'Dark mode ' : 'light mode'
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  
    isDark ? imageTheme('dark') : imageTheme('light')
}

// Switching through Modes
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    toggleDarkLightMode(true)
} else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    toggleDarkLightMode(false)
  }
}
// Events
toggleSwitch.addEventListener('change', switchTheme)

// Checking the localStorage
const currentTheme = () => {
    let storage = localStorage.getItem('theme')

    if (storage) {
        document.documentElement.setAttribute('data-theme', storage)
        
        if (storage === 'dark') {
            toggleSwitch.checked = true
            toggleDarkLightMode(true)
        }
    } else {
        document.documentElement.setAttribute('data-theme', storage)
        
        if (storage === 'light') {
            toggleSwitch.checked = false
            toggleDarkLightMode(false)
        }
    }
}

// onload
currentTheme()
