export function log (...values: unknown[]) {
  const output = values.map(value => {
    return value && typeof value === 'object'
      ? JSON.stringify(value, null, '  ')
        .replace(/\\'/g, "\\'")
        .replace(/"/g, "'")
        .replace(/'(\w+)': /g, '$1: ')
      : value
  })
  console.log(...output)
}

export function walk (el: any, callback: (value: any, key: string | number, parent: any) => any | void, key: string | number, parent: any) {
  if (el) {
    if (Array.isArray(el)) {
      for (let i = 0; i < el.length; i++) {
        walk(el[i], callback, i, el)
      }
    }
    else if (typeof el === 'object') {
      Object.keys(el).forEach(key => {
        walk(el[key], callback, key, el)
      })
    }
    else {
      const value = callback(el, key, parent)
      if (value !== undefined) {
        parent[key] = value
      }
    }
  }
}
