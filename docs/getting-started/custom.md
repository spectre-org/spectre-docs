---
title: Custom version
description: 
order: 3
---

# Custom version

You can customize your version of Spectre.css by editing Sass files in `/src` directory or removing unneeded components from `.scss` source files.

[Sass Source Code](https://github.com/picturepan2/spectre/)

## Compiling CSS

Spectre uses [Gulp](http://gulpjs.com/) for compiling CSS. Firstly you need to [install NPM](https://www.npmjs.com/get-npm), which is used to manage Gulp and other dependencies.

Then, you can build the CSS file from the command line:

1. Navigate to the root directory of Spectre.
2. Run `npm install`. NPM will install all dev dependencies as listed in package.json.
3. When completed, run `gulp build` task to compile Sass to CSS and minify files.
4. You can find compiled CSS files in `/dist` directory.

All available Gulp tasks:

* `gulp build` \- compile Sass to CSS and minify files (default)
* `gulp docs` \- compile Docs related files
* `gulp watch` \- watch file changes and re-compile CSS files

## Importing Sass

It is recommended to customize Spectre by importing Sass source files to your projects. In this way, you can keep Spectre up to date without conflicts, since Spectre code and your custom code are separate.

* First, create your own project and install Spectre via [NPM or other package managers](#installation).
* Then create your `project-name.scss` file in the root folder. You can use `project-name.scss` to define your variables.
* Compile the Sass file to CSS to get the custom version of Spectre.

```sass
// Example of project-name.scss
// Define variables to override default ones
$primary-color: #2e5bec;
$dark-color: #3e396b;

// Import full Spectre source code
@import "node_modules/spectre.css/src/spectre";

```

Alternatively, you can create custom `_variables.scss` and import it to `project-name.scss`.

```sass
// Example of project-name.scss
@import "variables";

// Import only the needed components
@import "node_modules/spectre.css/src/buttons";
@import "node_modules/spectre.css/src/forms";

```

## Folder structure

```
spectre/
├── dist/                           // Build folder
│   ├── spectre-exp.css
│   ├── spectre-exp.min.css
│   ├── spectre-icons.css
│   ├── spectre-icons.min.css
│   ├── spectre.css
│   └── spectre.min.css
│
├── docs/
│   ├── dist/                       // Pre-built CSS folder
│   │   ├── spectre-exp.css
│   │   ├── spectre-exp.min.css
│   │   ├── spectre-icons.css
│   │   ├── spectre-icons.min.css
│   │   ├── spectre.css
│   │   └── spectre.min.css
|   ├── css/                        // Docs CSS files
│   │   └── docs.css
|   ├── src/
│   │   ├── scss                    // Docs Sass files
│   │   │   └── docs.scss
│   │   ├── index.pug               // Docs Pug files
│   │   └── ...
│   ├── examples/                   // Example tempalte
│   │   └── starter
│   ├── ../
│   ├── index
│   └── ...
│
├── src/                            // Source Sass files
│   ├── spectre.scss
│   ├── spectre-icons.scss
│   ├── spectre-exp.scss
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── ...
│
├── gulpfile.js
├── package.json
└── ...

```

## Variables

Spectre.css is designed with consistent design language. You can use your own variables to create your new or match existing design. All variables in `_variables.scss` include `!default` flag. You can redefine the variables to override the values.

## Variables - Colors

 
<div class="docs-demo">
  <div class="columns">
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#5755d9;color:#fff;">
        <div class="color-title">#5755d9</div>
        <div class="color-subtitle">Primary</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#f1f1fc;color:#5755d9;">
        <div class="color-title">#f1f1fc</div>
        <div class="color-subtitle">Secondary</div>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#32b643;color:#fff;">
        <div class="color-title">#32b643</div>
        <div class="color-subtitle">Success</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#ffb700;color:#fff;">
        <div class="color-title">#ffb700</div>
        <div class="color-subtitle">Warning</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#e85600;color:#fff;">
        <div class="color-title">#e85600</div>
        <div class="color-subtitle">Error</div>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#303742;color:#fff;">
        <div class="color-title">#303742</div>
        <div class="color-subtitle">Dark</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#66758c;color:#fff;">
        <div class="color-title">#66758c</div>
        <div class="color-subtitle">Gray dark</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#bcc3ce;color:#fff;">
        <div class="color-title">#bcc3ce</div>
        <div class="color-subtitle">Gray</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#f7f8f9;color:#66758c;">
        <div class="color-title">#f7f8f9</div>
        <div class="color-subtitle">Gray light</div>
      </div>
    </div>
    <div class="column col-2 col-md-6">
      <div class="docs-color" style="background:#fff;color:#bcc3ce;">
        <div class="color-title">#fff</div>
        <div class="color-subtitle">Light</div>
      </div>
    </div>
  </div>
</div>

## Variables - Button mixins

There are 2 button variant mixins in `_mixins.scss` to generate different color variants.

* @mixin button-variant(`$color`: $primary-color);
* @mixin button-outline-variant(`$color`: $primary-color);

```sass
<!-- filled button with the success color -->
.btn-success {
  @include button-variant($success-color);
}

<!-- outlined button with the success color -->
.btn-outline-success {
  @include button-outline-variant($success-color);
}

```

## Variables - Sizes

The default REM (root em) size in Spectre.css is `20px`.

Please note in the Chinese/Japanese/Korean version, Chrome uses 12px as default minimum font size. That is why Spectre sets rem default html font size to `20px`, which is relatively easy to calculate.

Spectre uses `4px` as the unit size. Sizes of components are based on the unit size.

## Variables - Custom prefix

There is also a way to add custom prefix to all CSS classes. You can use [gulp-css-prefix](https://www.npmjs.com/package/gulp-css-prefix) plugin and add a new Gulp task to enable it.

```bash
npm install gulp-css-prefix

```

To add `spectre-` to all classes, you can add the Gulp task to `gulpfile.js` file.

```
var cssPrefix = require('gulp-css-prefix');

function prefix() {
  return gulp
    .src('./dist/*.css')
    .pipe(cssPrefix('spectre-'))
    .pipe(gulp.dest('./dist'));
}

exports.prefix = prefix;
```

After you compile your version of Spectre in the /dist, run `gulp prefix` in the directory of Spectre.