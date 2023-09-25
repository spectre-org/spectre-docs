// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import Theme from 'vitepress/theme'
import Theme from './neutral/client'

import './style.css'
import './custom.scss'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
