---
title: Code
description: 
order: 7
---

# Code

Code is used for styling inline and multiline code snippets.

## Inline code

```html
<code>...</code>
```

For inline code, you can use the `<code>` element. 

## Snippets

For multiline code snippet blocks, you can use `<pre>` with the `code` class as a container, and add `<code>` inside it. The `data-lang` attribute is rendered as the language name in the top right.

```js
const content = document.querySelector('#content')
```

```html
<pre class="code" data-lang="js">
  <code>
    const content = document.querySelector('#content')
  </code>
</pre>
```

