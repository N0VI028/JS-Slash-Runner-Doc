import DefaultTheme from 'vitepress/theme';
import './styles/vars.css'
import './styles/main.css'
import './styles/custom.css'
import MyButton from './components/MyButton.vue'
import CustomTOC from './components/CustomTOC.vue'
import BackToTop from './components/BackToTop.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop)
    })
  },
  enhanceApp({ app }: { app: any }) {
    app.component('MyButton', MyButton)
    app.component('CustomTOC', CustomTOC)
  },
}

