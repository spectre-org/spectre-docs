import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

/**
 * Prevent VitePress from intercepting hash links and preventing Spectre from working properly
 *
 * @usage
 *
 *  Merge with theme layout rendering in Layout: `h({ ...Theme.Layout, mounted: fixClicks })`
 *
 *  @see https://vitepress.dev/guide/extending-default-theme#layout-slots
 *
 */
export function fixClicks () {
  document.querySelector('main')?.addEventListener('click', e => {
    const target: HTMLElement = e.target as HTMLElement
    const href = target?.getAttribute('href')
    if (href?.startsWith('#')) {
      const el = document.getElementById(href.substring(1))
      if (!el || el.tagName === 'H1') {
        e.preventDefault()
      }
    }
  }, { capture: true })
}

/**
 * Automatically open menu groups to the active section
 *
 * @parameter init  Initialize for use in components
 *
 * @usage
 *
 *  Run in a route handler in enhanceAll() or in a component setup function
 */
export function useMenu (options: { watch?: boolean, initial?: boolean } = {}) {
  function getGroups () {
    return Array.from(document.querySelectorAll('.VPSidebarItem.level-1.collapsible'))
  }

  function getOpen () {
    return getGroups().filter(e => !e.classList.contains('collapsed'))
  }

  function getClosed () {
    return getGroups().filter(e => e.classList.contains('collapsed'))
  }

  function getCurrent () {
    const matches = location.href.match(/^.+\/docs\/[^/]+\//)
    if (matches) {
      const section = matches[0]
      return getGroups().find(e => {
        return e.querySelector('a').href.startsWith(section)
      })
    }
  }

  function toggle (e) {
    e?.querySelector('.caret').click()
  }

  function closeAll () {
    getOpen().forEach(e => toggle(e))
  }

  function openAll () {
    getClosed().forEach(e => toggle(e))
  }

  function showCurrent () {
    closeAll()
    const current = getCurrent()
    if (current) {
      toggle(current)
    }
  }

  // run in component
  if (options.watch) {
    onMounted(showCurrent)
    const route = useRoute()
    watch(() => route.path, showCurrent)
  }

  // run in route handler
  else if (options.initial) {
    showCurrent()
  }

  return {
    getOpen,
    getClosed,
    getCurrent,
    closeAll,
    openAll,
    showCurrent
  }
}
