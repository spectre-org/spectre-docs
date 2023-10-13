---
title: Custom build
description: 
order: 3
---

# Custom build

This section assumes you are using a modern bundling setup.

There are two main ways to customise the output:

- [user variables](#user-variables) – to customise the look and feel
- [selective imports](#selective-imports) – to include only the classes you need

## User variables

Override Spectre's [variables](variables.md) before you import the Spectre source: 

```scss
$primary-color: #2e5bec;
$dark-color: #3e396b;

@import "node_modules/@spectre-org/spectre-css/src/spectre";
```

In your project's entry point, import this file:

```js
import './styles.scss'  
```


If you have a lot of variables, you can place them in a partial, such as `_variables.scss`:

```scss
@import "./variables.scss";
@import "node_modules/@spectre-org/spectre-css/src/spectre";
```

## Selective imports

If you only want to use some of Spectre CSS, you can just import only what you need:

```scss
@import "node_modules/@spectre-org/spectre-css/src/buttons";
@import "node_modules/@spectre-org/spectre-css/src/forms";
@import "node_modules/@spectre-org/spectre-css/src/...";
```

The full list of files can be found [here](https://github.com/spectre-org/spectre-css/tree/main/src).

#### Shortening the paths

If you intend to import a lot of files, these long paths can become unwieldy.

You might consider using a library like [Alias HQ](https://github.com/davestewart/alias-hq) which will allow you to alias the `src` folder:

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
// styles.scss
@import "@spectre/forms";
@import "@spectre/buttons";
@import "@spectre/...";
```

<!--

This technique seems to no longer work under Node 14+ due to circular dependency issues

## Prefixing

If you want to prefix all classes, you will need to clone the [spectre-css](https://github.com/spectre-org/spectre-css) repository and build from source.

You can use [gulp-css-prefix](https://www.npmjs.com/package/gulp-css-prefix) plugin and add a new Gulp task to enable it.

```bash
npm install gulp-css-prefix
```

The following example adds `s-` to all classes.

```js
// gulpfile.js
var cssPrefix = require('gulp-css-prefix');

function prefix() {
  return gulp
    .src('./dist/*.css')
    .pipe(cssPrefix('s-'))
    .pipe(gulp.dest('./dist'));
}

exports.prefix = prefix;
```

After you compile your version of Spectre in the `/dist` folder, run `gulp prefix` in the directory of Spectre.

-->