// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from './neutral/client'

// lib
import './styles/spectre/docs.css'
import './styles/spectre/spectre.min.css'
import './styles/spectre/spectre-exp.min.css'
import './styles/spectre/spectre-icons.min.css'

// styles
import './styles/style.css'
import './styles/custom.scss'

// components
import Card from './components/Card.vue'

// utils
import { fixClicks } from './utils'

// theme
export default {
  extends: Theme,
  Layout: () => {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
    return h({ ...Theme.Layout, mounted: fixClicks })
  },
  enhanceApp ({ app, router, siteData }) {
    app.component('Card', Card)
  }
}
