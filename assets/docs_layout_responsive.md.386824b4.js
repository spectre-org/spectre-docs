import{_ as s,o,c as t,a as l}from"./chunks/framework.fabb93b1.js";const g=JSON.parse('{"title":"Responsive","description":null,"frontmatter":{"title":"Responsive","description":null,"order":1},"headers":[],"relativePath":"docs/layout/responsive.md","filePath":"docs/layout/responsive.md"}'),a={name:"docs/layout/responsive.md"},e=l(`<h1 id="responsive" tabindex="-1">Responsive <a class="header-anchor" href="#responsive" aria-label="Permalink to &quot;Responsive&quot;">​</a></h1><p>Spectre provides a neat responsive layout grid system and responsive visibility utilities.</p><div class="docs-demo columns"><div class="column col-10 col-lg-8 col-md-6 col-sm-4"><div class="bg-gray docs-block"><div class="text-primary">col-10</div><div class="text-dark hide-lg">col-lg-8</div><div class="text-primary show-lg">col-lg-8</div><div class="text-dark hide-md">col-md-6</div><div class="text-primary show-md">col-md-6</div><div class="text-dark hide-sm">col-sm-4</div><div class="text-primary show-sm">col-sm-4</div></div></div><div class="column col-2 col-lg-4 col-md-6 col-sm-8"><div class="bg-gray docs-block"><div class="text-primary">col-2</div><div class="text-dark hide-lg">col-lg-4</div><div class="text-primary show-lg">col-lg-4</div><div class="text-dark hide-md">col-md-6</div><div class="text-primary show-md">col-md-6</div><div class="text-dark hide-sm">col-sm-8</div><div class="text-primary show-sm">col-sm-8</div></div></div></div><p>There are <code>col-xs-&lt;1-12&gt;</code>, <code>col-sm-&lt;1-12&gt;</code>, <code>col-md-&lt;1-12&gt;</code>, <code>col-lg-&lt;1-12&gt;</code> and <code>col-xl-&lt;1-12&gt;</code> available for flexible grid across mobile, tablet and desktop viewport usage.</p><ul><li><code>col-xs-&lt;1-12&gt;</code> apply to window width smaller than or equal to <strong>480px</strong>.</li><li><code>col-sm-&lt;1-12&gt;</code> apply to window width smaller than or equal to <strong>600px</strong>.</li><li><code>col-md-&lt;1-12&gt;</code> apply to window width smaller than or equal to <strong>840px</strong>.</li><li><code>col-lg-&lt;1-12&gt;</code> apply to window width smaller than or equal to <strong>960px</strong>.</li><li><code>col-xl-&lt;1-12&gt;</code> apply to window width smaller than or equal to <strong>1280px</strong>.</li><li><code>col-&lt;1-12&gt;</code> apply to all window width, including the width wider than <strong>1280px</strong>.</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;columns&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;column col-xs-6&quot;</span><span style="color:#E1E4E8;">&gt;col-xs-6&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;column col-xs-3&quot;</span><span style="color:#E1E4E8;">&gt;col-xs-3&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;column col-xs-3&quot;</span><span style="color:#E1E4E8;">&gt;col-xs-3&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;column col-xs-6&quot;</span><span style="color:#24292E;">&gt;col-xs-6&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;column col-xs-3&quot;</span><span style="color:#24292E;">&gt;col-xs-3&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;column col-xs-3&quot;</span><span style="color:#24292E;">&gt;col-xs-3&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="responsive-container" tabindex="-1">Responsive container <a class="header-anchor" href="#responsive-container" aria-label="Permalink to &quot;Responsive container&quot;">​</a></h2><p>The responsive layout also provides fixed-width containers. Use <code>grid-xs</code>(480px), <code>grid-sm</code>(600px), <code>grid-md</code>(840px), <code>grid-lg</code>(960px) or <code>grid-xl</code>(1280px) to the container for a fixed-width container with the specific max-width.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 100% width container with max-width set to grid-lg (960px) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container grid-lg&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;columns&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 100% width container with max-width set to grid-lg (960px) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;container grid-lg&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="responsive-visibility" tabindex="-1">Responsive visibility <a class="header-anchor" href="#responsive-visibility" aria-label="Permalink to &quot;Responsive visibility&quot;">​</a></h2><p>The responsive visibility utilities help show and hide elements on specific viewport sizes.</p><div class="docs-demo columns"><div class="column col-12"><table class="docs-table table table-striped text-center"><thead><tr><th></th><th>size-xs</th><th>size-sm</th><th>size-md</th><th>size-lg</th><th>size-xl</th></tr></thead><tbody><tr><td class="text-left">hide-xs</td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td></tr><tr><td class="text-left">hide-sm</td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td></tr><tr><td class="text-left">hide-md</td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td></tr><tr><td class="text-left">hide-lg</td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td></tr><tr><td class="text-left">hide-xl</td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td></tr></tbody></table></div></div><p>For hiding elements on specific viewport sizes, there are classes <code>hide-xs</code>, <code>hide-sm</code>, <code>hide-md</code>, <code>hide-lg</code> and <code>hide-xl</code> available.</p><ul><li><code>hide-xs</code> hides elements when the window width is smaller than or equal to <strong>480px</strong>.</li><li><code>hide-sm</code> hides elements when the window width is smaller than or equal to <strong>600px</strong>.</li><li><code>hide-md</code> hides elements when the window width is smaller than or equal to <strong>840px</strong>.</li><li><code>hide-lg</code> hides elements when the window width is smaller than or equal to <strong>960px</strong>.</li><li><code>hide-xl</code> hides elements when the window width is smaller than or equal to <strong>1280px</strong>.</li></ul><div class="docs-demo columns"><div class="column col-12"><table class="docs-table table table-striped text-center"><thead><tr><th></th><th>size-xs</th><th>size-sm</th><th>size-md</th><th>size-lg</th><th>size-xl</th></tr></thead><tbody><tr><td class="text-left">show-xs</td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td></tr><tr><td class="text-left">show-sm</td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td></tr><tr><td class="text-left">show-md</td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td></tr><tr><td class="text-left">show-lg</td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-secondary docs-dot"></div></td></tr><tr><td class="text-left">show-xl</td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td><td><div class="bg-primary docs-dot"></div></td></tr></tbody></table></div></div><p>For showing elements on specific viewport sizes, there are classes <code>show-xs</code>, <code>show-sm</code>, <code>show-md</code>, <code>show-lg</code> and <code>show-xl</code> available.</p><ul><li><code>show-xs</code> shows elements when the window width is smaller than or equal to <strong>480px</strong>.</li><li><code>show-sm</code> shows elements when the window width is smaller than or equal to <strong>600px</strong>.</li><li><code>show-md</code> shows elements when the window width is smaller than or equal to <strong>840px</strong>.</li><li><code>show-lg</code> shows elements when the window width is smaller than or equal to <strong>960px</strong>.</li><li><code>show-xl</code> shows elements when the window width is smaller than or equal to <strong>1280px</strong>.</li></ul><h2 id="responsive-resizer" tabindex="-1">Responsive Resizer <a class="header-anchor" href="#responsive-resizer" aria-label="Permalink to &quot;Responsive Resizer&quot;">​</a></h2><p>Spectre also has a responsive web test tool Responsive Resizer. You can clone the <a href="https://github.com/picturepan2/responsive-resizer" target="_blank" rel="noreferrer">GitHub Repo</a> to use it locally or use it online.</p><p><a href="https://picturepan2.github.io/responsive-resizer/" target="_blank" rel="noreferrer">Responsive Resizer</a></p>`,20),d=[e];function n(c,i,p,r,v,y){return o(),t("div",null,d)}const E=s(a,[["render",n]]);export{g as __pageData,E as default};
