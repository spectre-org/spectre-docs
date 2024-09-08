import{_ as t,c as o,K as d,o as l}from"./chunks/framework.BD_IjLXb.js";const v=JSON.parse('{"title":"Responsive","description":null,"frontmatter":{"title":"Responsive","description":null,"order":1},"headers":[],"relativePath":"docs/layout/responsive.md","filePath":"docs/layout/responsive.md"}'),a={name:"docs/layout/responsive.md"};function e(i,s,c,n,r,p){return l(),o("div",null,s[0]||(s[0]=[d(`<h1 id="responsive" tabindex="-1">Responsive <a class="header-anchor" href="#responsive" aria-label="Permalink to &quot;Responsive&quot;">​</a></h1> <p>Spectre provides a neat responsive layout grid system and responsive visibility utilities.</p> <h2 id="modifiers" tabindex="-1">Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;Modifiers&quot;">​</a></h2> <p>The following class name modifiers can be applied to some class names:</p> <ul><li><code>xs</code> - <strong>480px</strong></li> <li><code>sm</code> - <strong>600px</strong></li> <li><code>md</code> - <strong>840px</strong></li> <li><code>lg</code> - <strong>960px</strong></li> <li><code>xl</code> - <strong>1280px</strong></li></ul> <p>On this page, the classes which will be affected by these modifiers are:</p> <ul><li><code>col-&lt;size&gt;-&lt;1-12&gt;</code> - columns</li> <li><code>grid-&lt;size&gt;</code> - containers</li> <li><code>hide-&lt;size&gt;</code> - hide below</li> <li><code>show-&lt;size&gt;</code> - show below</li></ul> <h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2> <p>The following markup combines columns and showing/hiding for different breakpoints.</p> <p>Resize the window to see:</p> <div class="vp-raw docs-demo columns"><div class="column col-8 col-lg-8 col-md-6 col-sm-4"><div class="bg-gray docs-block"><div class="text-primary">col-10 <small>(show)</small></div> <div class="hide-lg text-dark">col-lg-8 <small>(hide)</small></div> <div class="show-lg text-primary">col-lg-8 <small>(show)</small></div> <div class="hide-md text-dark">col-md-6 <small>(hide)</small></div> <div class="show-md text-primary">col-md-6 <small>(show)</small></div> <div class="hide-sm text-dark">col-sm-4 <small>(hide)</small></div> <div class="show-sm text-primary">col-sm-4 <small>(show)</small></div></div></div> <div class="column col-4 col-lg-4 col-md-6 col-sm-8"><div class="bg-gray docs-block"><div class="text-primary">col-2 <small>(show)</small></div> <div class="hide-lg text-dark">col-lg-4 <small>(hide)</small></div> <div class="show-lg text-primary">col-lg-4 <small>(show)</small></div> <div class="hide-md text-dark">col-md-6 <small>(hide)</small></div> <div class="show-md text-primary">col-md-6 <small>(show)</small></div> <div class="hide-sm text-dark">col-sm-8 <small>(hide)</small></div> <div class="show-sm text-primary">col-sm-8 <small>(show)</small></div></div></div></div> <p>Spectre also has a responsive testing tool which you can <a href="https://picturepan2.github.io/responsive-resizer/" target="_blank" rel="noreferrer">use online</a> or locally by cloning the <a href="https://github.com/picturepan2/responsive-resizer" target="_blank" rel="noreferrer">repo</a>.</p> <h2 id="columns" tabindex="-1">Columns <a class="header-anchor" href="#columns" aria-label="Permalink to &quot;Columns&quot;">​</a></h2> <p>The <code>column</code> and <code>col-*-*</code> classes create responsive columns for various breakpoints:</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;column col-xs-6&quot;</span><span style="color:#24292E;">&gt;col-xs-6&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;column col-xs-3&quot;</span><span style="color:#24292E;">&gt;col-xs-3&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;column col-xs-3&quot;</span><span style="color:#24292E;">&gt;col-xs-3&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>The base classes apply to columns for <strong>any</strong> window width:</p> <ul><li><code>col-&lt;1-12&gt;</code> all windows</li></ul> <p>The following 5 variants apply to columns when the window width is <strong>less than or equal to</strong>:</p> <ul><li><code>col-xs-&lt;1-12&gt;</code> - <strong>480px</strong></li> <li><code>col-sm-&lt;1-12&gt;</code> - <strong>600px</strong></li> <li><code>col-md-&lt;1-12&gt;</code> - <strong>840px</strong></li> <li><code>col-lg-&lt;1-12&gt;</code> - <strong>960px</strong></li> <li><code>col-xl-&lt;1-12&gt;</code> - <strong>1280px</strong></li></ul> <h2 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-label="Permalink to &quot;Container&quot;">​</a></h2> <p>The responsive layout also provides fixed-width containers:</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 100% width container with max-width set to grid-lg (960px) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;container grid-lg&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Add the following classes to the <code>.container</code> for a fixed-width container limited to <strong>specific max-widths</strong>:</p> <ul><li><code>grid-xs</code> - <strong>480px</strong></li> <li><code>grid-sm</code> - <strong>600px</strong></li> <li><code>grid-md</code> - <strong>840px</strong></li> <li><code>grid-lg</code> - <strong>960px</strong></li> <li><code>grid-xl</code> - <strong>1280px</strong></li></ul> <h2 id="visibility" tabindex="-1">Visibility <a class="header-anchor" href="#visibility" aria-label="Permalink to &quot;Visibility&quot;">​</a></h2> <p>The responsive visibility utilities help show and hide elements on specific viewport sizes.</p> <h3 id="hiding-content" tabindex="-1">Hiding content <a class="header-anchor" href="#hiding-content" aria-label="Permalink to &quot;Hiding content&quot;">​</a></h3> <div class="vp-raw docs-demo columns"><div class="column col-12"><table class="docs-table table table-striped text-center"><thead><tr><th></th> <th>size-xs</th> <th>size-sm</th> <th>size-md</th> <th>size-lg</th> <th>size-xl</th></tr></thead> <tbody><tr><td class="text-left">hide-xs</td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td></tr> <tr><td class="text-left">hide-sm</td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td></tr> <tr><td class="text-left">hide-md</td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td></tr> <tr><td class="text-left">hide-lg</td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td></tr> <tr><td class="text-left">hide-xl</td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td></tr></tbody></table></div></div> <p>The following 5 variants <strong>hide</strong> elements when the window width is <strong>less than or equal to</strong>:</p> <ul><li><code>hide-xs</code> - <strong>480px</strong></li> <li><code>hide-sm</code> - <strong>600px</strong></li> <li><code>hide-md</code> - <strong>840px</strong></li> <li><code>hide-lg</code> - <strong>960px</strong></li> <li><code>hide-xl</code> - <strong>1280px</strong></li></ul> <h3 id="showing-content" tabindex="-1">Showing content <a class="header-anchor" href="#showing-content" aria-label="Permalink to &quot;Showing content&quot;">​</a></h3> <div class="vp-raw docs-demo columns"><div class="column col-12"><table class="docs-table table table-striped text-center"><thead><tr><th></th> <th>size-xs</th> <th>size-sm</th> <th>size-md</th> <th>size-lg</th> <th>size-xl</th></tr></thead> <tbody><tr><td class="text-left">show-xs</td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td></tr> <tr><td class="text-left">show-sm</td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td></tr> <tr><td class="text-left">show-md</td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td></tr> <tr><td class="text-left">show-lg</td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-secondary docs-dot"></div></td></tr> <tr><td class="text-left">show-xl</td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td> <td><div class="bg-primary docs-dot"></div></td></tr></tbody></table></div></div> <p>The following 5 variants <strong>show</strong> elements when the window width is <strong>less than or equal to</strong>:</p> <ul><li><code>show-xs</code> - <strong>480px</strong></li> <li><code>show-sm</code> - <strong>600px</strong></li> <li><code>show-md</code> - <strong>840px</strong></li> <li><code>show-lg</code> - <strong>960px</strong></li> <li><code>show-xl</code> - <strong>1280px</strong></li></ul>`,65)]))}const h=t(a,[["render",e]]);export{v as __pageData,h as default};
