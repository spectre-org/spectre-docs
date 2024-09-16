import { h } from 'vue'
import Theme from 'vitepress/theme'

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
import { fixClicks, useMenu } from './utils/app'

// theme
export default {
  extends: Theme,
  Layout: () => {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
    return h({
      ...Theme.Layout,
      mounted () {
        fixClicks()
        useMenu()
      }
    })
  },
  enhanceApp ({ app, router, siteData }) {
    app.component('Card', Card)
    if (typeof document !== 'undefined') {
      router.onAfterRouteChanged = (to: string) => {
        useMenu({ initial: true })
      }
    }
  }
}
