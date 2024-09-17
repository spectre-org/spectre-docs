---
title: Build
description: 
order: 3
outline: deep
---

# Build

This section assumes you are using a modern bundling setup.

There are various ways to customise the build output:

- [user variables](#user-variables) – to customise the look and feel
- [selective imports](#selective-imports) – to include only the classes you need
- [isolating classes](#isolating-classes) – to make Spectre play nice with other frameworks 

## User variables

Create a new file, for example `assets/spectre.scss`.

In this file, override Spectre's [variables](customisation) then import Spectre's SCSS source: 

```scss
$primary-color: #2e5bec;
$dark-color: #3e396b;

@import "node_modules/@spectre-org/spectre-css/src/spectre";
```

If you have a lot of variables, you can move them to a partial, e.g. `_variables.scss`:

```scss
@import "./variables";
@import "node_modules/@spectre-org/spectre-css/src/spectre";
```

Finally, in your project's entry point, import your modified version of Spectre:

```js
import './assets/spectre.scss'  
```

## Selective imports

If you only want to use some of Spectre's features, you can import just the partials you need:

```scss
@import "node_modules/@spectre-org/spectre-css/src/buttons";
@import "node_modules/@spectre-org/spectre-css/src/forms";
@import "node_modules/@spectre-org/spectre-css/src/...";
```

The full list of partials can be found at:

- https://github.com/spectre-org/spectre-css/tree/main/src

#### Shortening the paths

If you intend to import many partials, these long paths can become unwieldy.

You might consider using a library like [Alias HQ](https://github.com/davestewart/alias-hq) which will allow you to alias Spectre's `src` folder:

```json5
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@spectre/*": [ "node_modules/@spectre-org/spectre-css/src/*" ],
    }
  }
}
```

```scss
// assets/spectre.scss
@import "@spectre/forms";
@import "@spectre/buttons";
@import "@spectre/...";
```

## Isolating classes

There are times when you need to isolate Spectre CSS's classes from other frameworks to prevent collisions, or constrain Spectre CSS to a specific area of the page, for example in documentation sites.

Spectre CSS offers two approaches, namespacing and prefixing.

#### Approaches

**Namespacing** ensures Spectre CSS classes can only be used under a specific selector:

```scss
// applies only under <article class="docs">
.docs .label { ... }

// applies anywhere but <article class="docs">
:not(.docs) .label { ... }
```

**Prefixing** changes the name of Spectre CSS classes, so you'll have to prefix them to use them:

```scss
// applies only to <label class="s-label">
.s-label { ... }
```

#### Setup

To use this in your own projects, you'll need to clone the repo and build the files from source.

Spectre uses [Gulp](https://gulpjs.com/) to build its files, and actually uses namespacing to build the stylesheets for these very docs, ensuring Spectre CSS classes only work under the `.vp-docs` div.

You should be able to copy the existing `gulpfile.js` scripts to configure namespacing or prefixing as required:

```js
// namespace under `main` and generate new files in `./dist/namespace/`
export function namespace () {
  return isolate('namespace', 'main')
}

// prefix with `sp-` and generate a minified version of `spectre.css` in `./dist/lib/`
export function prefix () {
  return isolate('prefix', 'sp-', {
    names: 'spectre',
    output: './dist/lib/',
    minOnly: true,
  })
}
```

The full options to pass to the `isolate()` helper are:

- `names` – One (`string`) or more (`string[]`) names of files to prefix, defaults to `"*"` (all files)
- `output` – The output folder, defaults to `./dist/<type>`
- `minOnly` – Output minified files only, defaults to `false`

You can then run these scripts from the command line with:

```
gulp namespace
gulp prefix
```
