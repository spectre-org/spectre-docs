import{_ as l,c as o,K as a,o as i}from"./chunks/framework.CNVy8nz3.js";const u=JSON.parse('{"title":"Variables","description":null,"frontmatter":{"title":"Variables","description":null,"order":5},"headers":[],"relativePath":"docs/get-started/variables.md","filePath":"docs/get-started/variables.md"}'),c={name:"docs/get-started/variables.md"};function e(n,s,t,r,d,p){return i(),o("div",null,s[0]||(s[0]=[a(`<h1 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h1> <p>Spectre CSS is designed with consistent design language, and is supported by a <a href="https://github.com/spectre-org/spectre-css/blob/main/src/_variables.scss" target="_blank" rel="noreferrer">core list</a> of variables:</p> <p><a href="#colors">Colors</a>:</p> <ul><li>primary and secondary</li> <li>grays</li> <li>borders</li> <li>background</li> <li>controls</li> <li>formatting</li></ul> <p><a href="./../layout/responsive.html#responsive-visibility">Units</a>:</p> <ul><li>breakpoints</li> <li>layout spacing</li> <li>border radius</li> <li>control sizes</li> <li>control-padding</li> <li>control icon size</li> <li>control width</li> <li>z-index</li></ul> <p><a href="./../elements/typography.html">Fonts</a>:</p> <ul><li>base</li> <li>mono</li> <li>fallback</li> <li>asian</li> <li>size</li></ul> <p>All variables include the <code>!default</code> flag, allowing you to <a href="./build.html#user-variables">override</a> as needed.</p> <h2 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-label="Permalink to &quot;Colors&quot;">​</a></h2> <div class="vp-raw docs-demo"><div class="columns"><div class="column col-2 col-md-6"><div class="docs-color" style="background:#5755d9;color:#fff;"><div class="color-title">#5755d9</div> <div class="color-subtitle">Primary</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#f1f1fc;color:#5755d9;"><div class="color-title">#f1f1fc</div> <div class="color-subtitle">Secondary</div></div></div></div> <div class="columns"><div class="column col-2 col-md-6"><div class="docs-color" style="background:#32b643;color:#fff;"><div class="color-title">#32b643</div> <div class="color-subtitle">Success</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#ffb700;color:#fff;"><div class="color-title">#ffb700</div> <div class="color-subtitle">Warning</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#e85600;color:#fff;"><div class="color-title">#e85600</div> <div class="color-subtitle">Error</div></div></div></div> <div class="columns"><div class="column col-2 col-md-6"><div class="docs-color" style="background:#303742;color:#fff;"><div class="color-title">#303742</div> <div class="color-subtitle">Dark</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#66758c;color:#fff;"><div class="color-title">#66758c</div> <div class="color-subtitle">Gray dark</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#bcc3ce;color:#fff;"><div class="color-title">#bcc3ce</div> <div class="color-subtitle">Gray</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#f7f8f9;color:#66758c;"><div class="color-title">#f7f8f9</div> <div class="color-subtitle">Gray light</div></div></div> <div class="column col-2 col-md-6"><div class="docs-color" style="background:#fff;color:#bcc3ce;"><div class="color-title">#fff</div> <div class="color-subtitle">Light</div></div></div></div></div> <h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;Sizes&quot;">​</a></h2> <p>The default REM (root em) size in Spectre CSS is <code>20px</code>.</p> <p>Please note in the Chinese/Japanese/Korean version, Chrome uses 12px as default minimum font size. That is why Spectre sets rem default html font size to <code>20px</code>, which is relatively easy to calculate.</p> <p>Spectre uses <code>4px</code> as the unit size. Sizes of components are based on the unit size.</p> <h2 id="button-mixins" tabindex="-1">Button mixins <a class="header-anchor" href="#button-mixins" aria-label="Permalink to &quot;Button mixins&quot;">​</a></h2> <p>There are 2 button variant mixins in <code>_mixins.scss</code> to generate different color variants.</p> <div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#6F42C1;"> button-variant</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$color</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$primary-color</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#6F42C1;"> button-outline-variant</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$color</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$primary-color</span><span style="color:#24292E;">)</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// filled button with the success color</span></span>
<span class="line"><span style="color:#6F42C1;">.btn-success</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  @include</span><span style="color:#6F42C1;"> button-variant</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$success-color</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// outlined button with the success color</span></span>
<span class="line"><span style="color:#6F42C1;">.btn-outline-success</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  @include</span><span style="color:#6F42C1;"> button-outline-variant</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$success-color</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,36)]))}const b=l(c,[["render",e]]);export{u as __pageData,b as default};
