---
title: Installation
description: 
order: 2
---

# Installation

You can install Spectre CSS from CDN, NPM or GitHub.

## CDN

Link directly to the minified CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@spectre-org/spectre-css/dist/spectre.min.css">
<link rel="stylesheet" href="https://unpkg.com/@spectre-org/spectre-css/dist/spectre-exp.min.css">
<link rel="stylesheet" href="https://unpkg.com/@spectre-org/spectre-css/dist/spectre-icons.min.css">
```

You can link to a specific version (for example `1.0.0`) by modifying the URL like so:

```
https://unpkg.com/@spectre-org/spectre-css@1.0.0/dist/spectre.css
```

## Source

Install the CSS and SCSS sources:

```bash
# from npm
npm i --save @spectre-org/spectre-css

# from github
npm i --save spectre-org/spectre-css

# from a github branch
npm i --save spectre-org/spectre-css#branch-name
```

For Yarn, use `yarn add ...`.

## Importing

Import into your JavaScript bundle (as required):

```js
import '@spectre-org/spectre-css/dist/spectre.css'
import '@spectre-org/spectre-css/dist/spectre-exp.css'
import '@spectre-org/spectre-css/dist/spectre-icons.css'
```

For a custom or selective build, see the [custom build](build.md) section.
