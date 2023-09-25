// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import Theme from 'vitepress/theme'
import Theme from './neutral/client'

// styles
import './styles/style.css'
import './styles/custom.scss'

// components
import Card from './components/Card.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Card', Card)
  },
}
