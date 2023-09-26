import{_ as s,o as a,c as n,a as e}from"./chunks/framework.11f09f6f.js";const v=JSON.parse('{"title":"Custom version","description":null,"frontmatter":{"title":"Custom version","description":null,"order":3},"headers":[],"relativePath":"docs/setup/custom.md","filePath":"docs/setup/custom.md"}'),l={name:"docs/setup/custom.md"},o=e(`<h1 id="custom-version" tabindex="-1">Custom version <a class="header-anchor" href="#custom-version" aria-label="Permalink to &quot;Custom version&quot;">​</a></h1><p>You can customize your version of Spectre.css by editing Sass files in <code>/src</code> directory or removing unneeded components from <code>.scss</code> source files.</p><p><a href="https://github.com/picturepan2/spectre/" target="_blank" rel="noreferrer">Sass Source Code</a></p><h2 id="compiling-css" tabindex="-1">Compiling CSS <a class="header-anchor" href="#compiling-css" aria-label="Permalink to &quot;Compiling CSS&quot;">​</a></h2><p>Spectre uses <a href="http://gulpjs.com/" target="_blank" rel="noreferrer">Gulp</a> for compiling CSS. Firstly you need to <a href="https://www.npmjs.com/get-npm" target="_blank" rel="noreferrer">install NPM</a>, which is used to manage Gulp and other dependencies.</p><p>Then, you can build the CSS file from the command line:</p><ol><li>Navigate to the root directory of Spectre.</li><li>Run <code>npm install</code>. NPM will install all dev dependencies as listed in package.json.</li><li>When completed, run <code>gulp build</code> task to compile Sass to CSS and minify files.</li><li>You can find compiled CSS files in <code>/dist</code> directory.</li></ol><p>All available Gulp tasks:</p><ul><li><code>gulp build</code> - compile Sass to CSS and minify files (default)</li><li><code>gulp docs</code> - compile Docs related files</li><li><code>gulp watch</code> - watch file changes and re-compile CSS files</li></ul><h2 id="importing-sass" tabindex="-1">Importing Sass <a class="header-anchor" href="#importing-sass" aria-label="Permalink to &quot;Importing Sass&quot;">​</a></h2><p>It is recommended to customize Spectre by importing Sass source files to your projects. In this way, you can keep Spectre up to date without conflicts, since Spectre code and your custom code are separate.</p><ul><li>First, create your own project and install Spectre via <a href="#installation">NPM or other package managers</a>.</li><li>Then create your <code>project-name.scss</code> file in the root folder. You can use <code>project-name.scss</code> to define your variables.</li><li>Compile the Sass file to CSS to get the custom version of Spectre.</li></ul><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Example of project-name.scss</span></span>
<span class="line"><span style="color:#6A737D;">// Define variables to override default ones</span></span>
<span class="line"><span style="color:#E1E4E8;">$primary-color: </span><span style="color:#79B8FF;">#2e5bec</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">$dark-color: </span><span style="color:#79B8FF;">#3e396b</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Import full Spectre source code</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#79B8FF;"> &quot;node_modules/spectre.css/src/spectre&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Example of project-name.scss</span></span>
<span class="line"><span style="color:#6A737D;">// Define variables to override default ones</span></span>
<span class="line"><span style="color:#24292E;">$primary-color: </span><span style="color:#005CC5;">#2e5bec</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">$dark-color: </span><span style="color:#005CC5;">#3e396b</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Import full Spectre source code</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#005CC5;"> &quot;node_modules/spectre.css/src/spectre&quot;;</span></span></code></pre></div><p>Alternatively, you can create custom <code>_variables.scss</code> and import it to <code>project-name.scss</code>.</p><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Example of project-name.scss</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#79B8FF;"> &quot;variables&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Import only the needed components</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#79B8FF;"> &quot;node_modules/spectre.css/src/buttons&quot;;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#79B8FF;"> &quot;node_modules/spectre.css/src/forms&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Example of project-name.scss</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#005CC5;"> &quot;variables&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Import only the needed components</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#005CC5;"> &quot;node_modules/spectre.css/src/buttons&quot;;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#005CC5;"> &quot;node_modules/spectre.css/src/forms&quot;;</span></span></code></pre></div><h2 id="folder-structure" tabindex="-1">Folder structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spectre/</span></span>
<span class="line"><span style="color:#e1e4e8;">├── dist/                           // Build folder</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre-exp.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre-exp.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre-icons.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre-icons.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── spectre.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├── docs/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── dist/                       // Pre-built CSS folder</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── spectre-exp.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── spectre-exp.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── spectre-icons.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── spectre-icons.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── spectre.css</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── spectre.min.css</span></span>
<span class="line"><span style="color:#e1e4e8;">|   ├── css/                        // Docs CSS files</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── docs.css</span></span>
<span class="line"><span style="color:#e1e4e8;">|   ├── src/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── scss                    // Docs Sass files</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   │   └── docs.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   ├── index.pug               // Docs Pug files</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── examples/                   // Example tempalte</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── starter</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── ../</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── index</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├── src/                            // Source Sass files</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre-icons.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── spectre-exp.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── _mixins.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── _variables.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├── gulpfile.js</span></span>
<span class="line"><span style="color:#e1e4e8;">├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">└── ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spectre/</span></span>
<span class="line"><span style="color:#24292e;">├── dist/                           // Build folder</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre-exp.css</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre-exp.min.css</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre-icons.css</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre-icons.min.css</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre.css</span></span>
<span class="line"><span style="color:#24292e;">│   └── spectre.min.css</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├── docs/</span></span>
<span class="line"><span style="color:#24292e;">│   ├── dist/                       // Pre-built CSS folder</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── spectre-exp.css</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── spectre-exp.min.css</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── spectre-icons.css</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── spectre-icons.min.css</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── spectre.css</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── spectre.min.css</span></span>
<span class="line"><span style="color:#24292e;">|   ├── css/                        // Docs CSS files</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── docs.css</span></span>
<span class="line"><span style="color:#24292e;">|   ├── src/</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── scss                    // Docs Sass files</span></span>
<span class="line"><span style="color:#24292e;">│   │   │   └── docs.scss</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── index.pug               // Docs Pug files</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── ...</span></span>
<span class="line"><span style="color:#24292e;">│   ├── examples/                   // Example tempalte</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── starter</span></span>
<span class="line"><span style="color:#24292e;">│   ├── ../</span></span>
<span class="line"><span style="color:#24292e;">│   ├── index</span></span>
<span class="line"><span style="color:#24292e;">│   └── ...</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├── src/                            // Source Sass files</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre.scss</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre-icons.scss</span></span>
<span class="line"><span style="color:#24292e;">│   ├── spectre-exp.scss</span></span>
<span class="line"><span style="color:#24292e;">│   ├── _mixins.scss</span></span>
<span class="line"><span style="color:#24292e;">│   ├── _variables.scss</span></span>
<span class="line"><span style="color:#24292e;">│   └── ...</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├── gulpfile.js</span></span>
<span class="line"><span style="color:#24292e;">├── package.json</span></span>
<span class="line"><span style="color:#24292e;">└── ...</span></span></code></pre></div><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><p>Spectre.css is designed with consistent design language. You can use your own variables to create your new or match existing design. All variables in <code>_variables.scss</code> include <code>!default</code> flag. You can redefine the variables to override the values.</p><h2 id="variables-colors" tabindex="-1">Variables - Colors <a class="header-anchor" href="#variables-colors" aria-label="Permalink to &quot;Variables - Colors&quot;">​</a></h2><div class="docs-demo"><div class="columns"><div class="column col-2 col-md-6"><div class="docs-color" style="background:#5755d9;color:#fff;"><div class="color-title">#5755d9</div><div class="color-subtitle">Primary</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#f1f1fc;color:#5755d9;"><div class="color-title">#f1f1fc</div><div class="color-subtitle">Secondary</div></div></div></div><div class="columns"><div class="column col-2 col-md-6"><div class="docs-color" style="background:#32b643;color:#fff;"><div class="color-title">#32b643</div><div class="color-subtitle">Success</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#ffb700;color:#fff;"><div class="color-title">#ffb700</div><div class="color-subtitle">Warning</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#e85600;color:#fff;"><div class="color-title">#e85600</div><div class="color-subtitle">Error</div></div></div></div><div class="columns"><div class="column col-2 col-md-6"><div class="docs-color" style="background:#303742;color:#fff;"><div class="color-title">#303742</div><div class="color-subtitle">Dark</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#66758c;color:#fff;"><div class="color-title">#66758c</div><div class="color-subtitle">Gray dark</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#bcc3ce;color:#fff;"><div class="color-title">#bcc3ce</div><div class="color-subtitle">Gray</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#f7f8f9;color:#66758c;"><div class="color-title">#f7f8f9</div><div class="color-subtitle">Gray light</div></div></div><div class="column col-2 col-md-6"><div class="docs-color" style="background:#fff;color:#bcc3ce;"><div class="color-title">#fff</div><div class="color-subtitle">Light</div></div></div></div></div><h2 id="variables-button-mixins" tabindex="-1">Variables - Button mixins <a class="header-anchor" href="#variables-button-mixins" aria-label="Permalink to &quot;Variables - Button mixins&quot;">​</a></h2><p>There are 2 button variant mixins in <code>_mixins.scss</code> to generate different color variants.</p><ul><li>@mixin button-variant(<code>$color</code>: $primary-color);</li><li>@mixin button-outline-variant(<code>$color</code>: $primary-color);</li></ul><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;!</span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">filled</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.btn-success</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@include</span><span style="color:#79B8FF;"> button-variant</span><span style="color:#B392F0;">(</span><span style="color:#E1E4E8;">$success-color</span><span style="color:#B392F0;">)</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&lt;!</span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">outlined</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.btn-outline-success</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@include</span><span style="color:#79B8FF;"> button-outline-variant</span><span style="color:#B392F0;">(</span><span style="color:#E1E4E8;">$success-color</span><span style="color:#B392F0;">)</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;!</span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">filled</span><span style="color:#24292E;"> </span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">with</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">the</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">success</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">color</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.btn-success</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@include</span><span style="color:#005CC5;"> button-variant</span><span style="color:#6F42C1;">(</span><span style="color:#24292E;">$success-color</span><span style="color:#6F42C1;">)</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&lt;!</span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">outlined</span><span style="color:#24292E;"> </span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">with</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">the</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">success</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">color</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.btn-outline-success</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@include</span><span style="color:#005CC5;"> button-outline-variant</span><span style="color:#6F42C1;">(</span><span style="color:#24292E;">$success-color</span><span style="color:#6F42C1;">)</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="variables-sizes" tabindex="-1">Variables - Sizes <a class="header-anchor" href="#variables-sizes" aria-label="Permalink to &quot;Variables - Sizes&quot;">​</a></h2><p>The default REM (root em) size in Spectre.css is <code>20px</code>.</p><p>Please note in the Chinese/Japanese/Korean version, Chrome uses 12px as default minimum font size. That is why Spectre sets rem default html font size to <code>20px</code>, which is relatively easy to calculate.</p><p>Spectre uses <code>4px</code> as the unit size. Sizes of components are based on the unit size.</p><h2 id="variables-custom-prefix" tabindex="-1">Variables - Custom prefix <a class="header-anchor" href="#variables-custom-prefix" aria-label="Permalink to &quot;Variables - Custom prefix&quot;">​</a></h2><p>There is also a way to add custom prefix to all CSS classes. You can use <a href="https://www.npmjs.com/package/gulp-css-prefix" target="_blank" rel="noreferrer">gulp-css-prefix</a> plugin and add a new Gulp task to enable it.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp-css-prefix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp-css-prefix</span></span></code></pre></div><p>To add <code>spectre-</code> to all classes, you can add the Gulp task to <code>gulpfile.js</code> file.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var cssPrefix = require(&#39;gulp-css-prefix&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function prefix() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return gulp</span></span>
<span class="line"><span style="color:#e1e4e8;">    .src(&#39;./dist/*.css&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    .pipe(cssPrefix(&#39;spectre-&#39;))</span></span>
<span class="line"><span style="color:#e1e4e8;">    .pipe(gulp.dest(&#39;./dist&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">exports.prefix = prefix;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var cssPrefix = require(&#39;gulp-css-prefix&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function prefix() {</span></span>
<span class="line"><span style="color:#24292e;">  return gulp</span></span>
<span class="line"><span style="color:#24292e;">    .src(&#39;./dist/*.css&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    .pipe(cssPrefix(&#39;spectre-&#39;))</span></span>
<span class="line"><span style="color:#24292e;">    .pipe(gulp.dest(&#39;./dist&#39;));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">exports.prefix = prefix;</span></span></code></pre></div><p>After you compile your version of Spectre in the /dist, run <code>gulp prefix</code> in the directory of Spectre.</p>`,35),p=[o];function c(t,r,i,d,y,u){return a(),n("div",null,p)}const f=s(l,[["render",c]]);export{v as __pageData,f as default};
