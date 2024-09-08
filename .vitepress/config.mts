import { defineConfig, HeadConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://github.com/jooy2/vitepress-sidebar
const sidebar = generateSidebar({
  documentRootPath: '/',
  scanStartPath: '/docs/',
  resolvePath: '/docs/',
  useTitleFromFileHeading: true,
  // useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  // hyphenToSpace: true,
  // underscoreToSpace: true,
  collapsed: true,
  collapseDepth: 0,
  // sortMenusByName: false,
  sortMenusByFrontmatterOrder: true,
  // sortMenusOrderByDescending: false,
  // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
  // excludeFiles: ['first.md', 'secret.md'],
  // excludeFolders: [],
  // includeDotFiles: false,
  // includeRootIndexFile: false,
  // includeFolderIndexFile: false,
  // includeEmptyFolder: false,
  // rootGroupText: 'Contents',
  // rootGroupLink: 'https://github.com/jooy2',
  rootGroupCollapsed: false,
  // convertSameNameSubFileToGroupIndexPage: false,
  // folderLinkNotIncludesFileName: false,
  // keepMarkdownSyntaxFromTitle: false,
  // debugPrint: false,
})

// add links
sidebar[0].items.forEach(item => {
  if (item.link?.endsWith('/')) {
    item.link = `/${item.link}`
  }
})

function stylesheet (href): HeadConfig {
  const id = href.split('/').pop().split('.').shift()
  return ['link', { rel: 'stylesheet', id, href }]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Spectre CSS',

  description: 'A lightweight, responsive and modern CSS framework',

  // https://vuepress.vuejs.org/config/#base
  base: '/spectre-docs/',

  // https://vuepress.vuejs.org/config/#head
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // stylesheet('https://unpkg.com/spectre-css/dist/spectre-css'),
    // stylesheet('https://unpkg.com/spectre-css/dist/spectre-exp.css'),
    // stylesheet('https://unpkg.com/spectre-css/dist/spectre-icons.css'),
    // stylesheet('https://unpkg.com/spectre-css/dist/spectre-rtl.css'),
  ],

  // remove dark mode toggle
  appearance: false,

  // ensure code only uses light theme
  markdown: {
    theme: 'github-light',
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
    sidebar: sidebar[0].items,

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
