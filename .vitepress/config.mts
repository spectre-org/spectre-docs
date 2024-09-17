import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { log, walk } from './theme/utils'

// @see https://github.com/jooy2/vitepress-sidebar/issues/179
const sidebar = generateSidebar([
  {
    // folders
    documentRootPath: '/',
    scanStartPath: 'docs/',
    resolvePath: '/docs/',

    // titles
    useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    // hyphenToSpace: true,
    // underscoreToSpace: true,

    // structure
    collapsed: true,
    collapseDepth: 0,
    // sortMenusByName: false,
    sortMenusByFrontmatterOrder: true,
    // sortMenusOrderByDescending: false,
    // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],

    // includes
    // excludeFiles: ['first.md', 'secret.md'],
    // excludeFolders: [],
    // includeDotFiles: false,
    // includeRootIndexFile: false,
    // includeFolderIndexFile: false,
    // includeEmptyFolder: false,

    // indices
    // rootGroupText: 'Contents',
    // rootGroupLink: 'https://github.com/jooy2',
    rootGroupCollapsed: false,
    // convertSameNameSubFileToGroupIndexPage: false,
    // folderLinkNotIncludesFileName: false,
    // keepMarkdownSyntaxFromTitle: false,

    // debug
    // debugPrint: true
  }
])

// fix links
/*
walk(sidebar, (value, key, parent) => {
  if (key === 'link') {
    return `/${value}`
  }
})
*/

// add js badge; use ! for "required"
const links = [
  // introduction
  'javascript!',

  // elements
  'forms',

  // components
  'accordions',
  'menu',
  'modals',
  'steps',
  'tabs',

  // experimental
  'autocomplete!',
  'calendars',
  'off-canvas',
  '360-viewer!',
  'sliders'
].map(text => {
  return {
    page: '/' + text.split('!').at(0),
    class: text.includes('!') ? 'primary' : 'secondary'
  }
})

walk(sidebar, (value, key, item) => {
  if (key === 'link') {
    const link = links.find(link => item.link.endsWith(link.page))
    if (link) {
      item.text += ` <small class="label label-${link.class}">JS</small>`
    }
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Spectre CSS',

  description: 'A lightweight, responsive and modern CSS framework',

  // https://vuepress.vuejs.org/config/#base
  base: '/spectre-docs/',

  // https://vuepress.vuejs.org/config/#head
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // remove dark mode toggle
  appearance: false,

  // ensure code only uses light theme
  markdown: {
    theme: 'github-light'
  },

  // prevents inline HTML code examples running elements together
  vue: {
    template: {
      compilerOptions: {
        whitespace: 'preserve'
      }
    }
  },

  // https://vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    sidebar,

    outline: 'deep',

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/index.html' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spectre-org/spectre-css' }
    ]
  }
})
