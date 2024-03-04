import '!style-loader!css-loader!../components/global.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

loadIcons()

// https://material.io/resources/icons
function loadIcons() {
  const link = document.createElement('link')

  link.href = 'https://fonts.googleapis.com/css?family=Material+Icons&display=block'
  link.rel = 'stylesheet'

  document.head.appendChild(link)
}
