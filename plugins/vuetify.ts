// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'


const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#F3F2EC',
    surface: '#F3F2EC',
    'surface-bright': '#F3F2EC',
    'surface-light': '#EEEEEE',
    'surface-variant': '#74642F',
    'on-surface-variant': '#EEEEEE',
    primary: '#9A8F68',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    earth1: '#F3F2EC',
    earth2: '#D3CFBD',
    earth3: '#B4AB8E',
    earth4: '#94885E',
    earth5: '#74642F',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
