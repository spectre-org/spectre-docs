---
title: Code
description: 
order: 
---

# Code

Code is used for styling inline and multiline code snippets.

## Inline code

```html
<!-- inline code -->
<code>code</code>

```

For inline code, you can use the `<code>` element. 

## Code snippet

For multiline code snippet blocks, you can use `<pre>` with the `code` class as a container, and add `<code>` inside it. The `data-lang` attribute is rendered as the language name in the top right.

```html
<!-- code snippets -->
<button class="btn">
  Submit
</button>

```

```html
<pre class="code" data-lang="HTML"><code><span class="com">&lt;!-- code snippets --&gt;</span>
&lt;<span class="tag">button</span> <span class="atn">class</span>=<span class="atv">&quot;btn&quot;</span>&gt;
  Submit
&lt;<span class="tag">/button</span>&gt;
</code></pre>
```