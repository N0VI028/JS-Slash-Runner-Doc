import DefaultTheme from 'vitepress/theme';
import './styles/vars.css'
import './styles/main.css'
import './styles/custom.css'
import MyButton from './components/MyButton.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('MyButton', MyButton)
  }
}

