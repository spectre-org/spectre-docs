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

// sort
const order = [
  '/docs/getting-started/',
  '/docs/layout/',
  '/docs/elements/',
  '/docs/components/',
  '/docs/experimentals/',
  '/docs/utilities/',
]
sidebar[0].items.sort((a, b) => {
  a = order.indexOf(a.link)
  b = order.indexOf(b.link)
  return a < b
    ? -1
    : a > b
      ? 1
      : 0
})

function stylesheet (href): HeadConfig {
  const id = href.split('/').pop().split('.').shift()
  return ['link', { rel: 'stylesheet', id, href }]
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Spectre CSS',

  description: 'A lightweight, responsive and modern CSS framework',

  base: '/spectre-docs/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // stylesheet('/css/docs.css'),
    // stylesheet('/css/spectre.css'),
    // stylesheet('/css/spectre-exp.css'),
    // stylesheet('/css/spectre-icons.css'),
    // stylesheet('/css/spectre-rtl.css'),
  ],

  themeConfig: {
    sidebar: sidebar[0].items,

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
