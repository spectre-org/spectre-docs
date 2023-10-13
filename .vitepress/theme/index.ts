// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from './neutral/client'

// lib
import './styles/spectre/docs.css'
import '@spectre-org/spectre-css/dist/spectre.min.css'
import '@spectre-org/spectre-css/dist/spectre-exp.min.css'
import '@spectre-org/spectre-css/dist/spectre-icons.min.css'
// import './styles/spectre/spectre-rtl.css'

// styles
import './styles/style.css'
import './styles/custom.scss'

// components
import Card from './components/Card.vue'

// theme
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
