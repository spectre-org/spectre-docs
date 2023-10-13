const Path = require('path')
const Fs = require('fs')
const chokidar = require('chokidar');
const cheerio = require('cheerio')
const { globSync } = require('glob')
const { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } = require('node-html-markdown')

const fsOptions = { encoding: 'utf8' }

function makeFrontmatter (obj) {
  const lines = Object.entries(obj)
    .map(([key, value]) => {
      return `${key}: ${value}`
    })
  return `---\n${lines.join('\n')}\n---\n\n`
}

/**
 * Remove the indent from demo html
 */
function formatDemo (html) {
  const lines = html.split('\n')
  const matches = lines[1].match(/^\s+/)
  if (matches) {
    const indent = matches[0]
    const rx = new RegExp(`^${indent.substring(0, indent.length - 2)}`)
    return lines.map(line => line.replace(rx, '')).join('\n')
  }
  return html
}

const mdOptions = {
  ignore: [
    // '<div class="docs-demo columns">'
  ]
}

function makeMarkdown (html) {
  // get html
  const $ = cheerio.load(html)

  // apply classes to code blocks
  $('pre[data-lang]').each((i, el) => {
    const $el = $(el)
    const lang = $el.prop('data-lang').toLowerCase()
    $el.find('code').prop('class', `language-${lang}`)
  })

  // remove header anchors
  $('h1 a, h2 a, h3 a, h4 a, h5 a').remove()

  // meta
  // const title = $('title').text().replace(' - Spectre CSS Framework', '')

  // grab demo elements
  const demos = $('.docs-demo')
  const PLACEHOLDER = 'DEMOCONTENTHERE'

  // grab html of elements
  const sources = demos
    .toArray()
    .map(el => $.html(el))
    .map(formatDemo)

  // replace with placeholder
  demos
    .replaceWith(PLACEHOLDER)

  // console.log(sources)

  // augment html
  html = $('#content > .container, .container').html()
    .replace(/\.html/g, '')

  // convert
  let i = 0
  let output = NodeHtmlMarkdown
    .translate(html, mdOptions)

    // update demos
    .replaceAll(PLACEHOLDER, () => {
      return '\n' + sources[i++]
    })

    // fix titles
    .replaceAll(/^##/gm, '')

    // fix images
    .replaceAll('src="../img/', 'src="/img/')
    .replaceAll('src="img/', 'src="/img/')

    // trim code
    .replaceAll(/```(\w+[\s\S]+)```/g, (match, text) => {
      return '```' + text.trim() + '\n```'
    })

  // variables
  const matches = output.match(/# (.+)/)
  const title = matches
    ? matches[1]
    : ''

  // front matter
  const order = $('meta[name="order"]').prop('content') || ''
  output = makeFrontmatter({
    title,
    description: '',
    order,
  }) + output

  // return
  return output
}

// get files
function process (paths) {
  console.clear()
  console.log('')
  paths.forEach((src, index) => {
    // variables
    const trg = src
      .replace('.docs/', 'docs/')
      .replace('.html', '.md')
    const dir = Path.dirname(trg)

    // debug
    console.log(`Processing:\n- ${src}\n- ${trg}`)

    // process
    const html = Fs.readFileSync(src, fsOptions)
    const md = makeMarkdown(html)

    // write
    if (md) {
      Fs.mkdirSync(dir, { recursive: true })
      Fs.writeFileSync(trg, md, fsOptions)
    }
  })
}


// process all files
const pattern = './.docs/**/*.html'
const paths = globSync(pattern)
process(paths)

// watch for changes
chokidar.watch(pattern).on('all', (event, path) => {
  if (event === 'change') {
    process([path]);
  }
})


