import './_index.css'

loadIcons()

// https://material.io/resources/icons
function loadIcons() {
  const link = document.createElement('link')

  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap'
  link.rel = 'stylesheet'
  
  document.head.appendChild(link)
}
