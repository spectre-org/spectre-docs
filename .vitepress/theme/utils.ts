import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

/**
 * Automatically open menu groups to the active section
 *
 * @usage
 *
 * Add `useMenu()` in Layout.vue
 */
export function useMenu (init = true) {
  function getGroups () {
    return Array.from(document.querySelectorAll('.VPSidebarItem.level-0.collapsible'))
  }

  function getOpen () {
    return getGroups().filter(e => !e.classList.contains('collapsed'))
  }

  function getClosed () {
    return getGroups().filter(e => e.classList.contains('collapsed'))
  }

  function getCurrent () {
    const matches = location.href.match(/^.+\/docs\/\w+\//)
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

  if (init) {
    onMounted(showCurrent)
    const route = useRoute()
    watch(() => route.path, path => {
      console.log(path)
      showCurrent()
    })
  }

  return {
    getOpen,
    getClosed,
    getCurrent,
    closeAll,
    openAll,
    showCurrent,
  }
}
