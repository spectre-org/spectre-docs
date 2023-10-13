import{_ as s,o as a,c as e,a as o}from"./chunks/framework.05eef085.js";const m=JSON.parse('{"title":"Custom build","description":null,"frontmatter":{"title":"Custom build","description":null,"order":3},"headers":[],"relativePath":"docs/introduction/build.md","filePath":"docs/introduction/build.md"}'),n={name:"docs/introduction/build.md"},l=o(`<h1 id="custom-build" tabindex="-1">Custom build <a class="header-anchor" href="#custom-build" aria-label="Permalink to &quot;Custom build&quot;">​</a></h1><p>This section assumes you are using a modern bundling setup.</p><p>There are two main ways to customise the output:</p><ul><li><a href="#user-variables">user variables</a> – to customise the look and feel</li><li><a href="#selective-imports">selective imports</a> – to include only the classes you need</li></ul><h2 id="user-variables" tabindex="-1">User variables <a class="header-anchor" href="#user-variables" aria-label="Permalink to &quot;User variables&quot;">​</a></h2><p>Override Spectre&#39;s <a href="./variables.html">variables</a> before you import the Spectre source:</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#E36209;">$primary-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#2e5bec</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$dark-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#3e396b</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/spectre&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>In your project&#39;s entry point, import this file:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./styles.scss&#39;</span></span></code></pre></div><p>If you have a lot of variables, you can place them in a partial, such as <code>_variables.scss</code>:</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./variables.scss&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/spectre&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="selective-imports" tabindex="-1">Selective imports <a class="header-anchor" href="#selective-imports" aria-label="Permalink to &quot;Selective imports&quot;">​</a></h2><p>If you only want to use some of Spectre CSS, you can just import only what you need:</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/buttons&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/forms&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/...&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>The full list of files can be found <a href="https://github.com/spectre-org/spectre-css/tree/main/src" target="_blank" rel="noreferrer">here</a>.</p><h4 id="shortening-the-paths" tabindex="-1">Shortening the paths <a class="header-anchor" href="#shortening-the-paths" aria-label="Permalink to &quot;Shortening the paths&quot;">​</a></h4><p>If you intend to import a lot of files, these long paths can become unwieldy.</p><p>You might consider using a library like <a href="https://github.com/davestewart/alias-hq" target="_blank" rel="noreferrer">Alias HQ</a> which will allow you to alias the <code>src</code> folder:</p><div class="language-json5"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;@spectre/*&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/*&quot;</span><span style="color:#24292E;"> ],</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">// styles.scss</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@spectre/forms&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@spectre/buttons&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@spectre/...&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div>`,20),t=[l];function p(c,r,i,u,d,y){return a(),e("div",null,t)}const b=s(n,[["render",p]]);export{m as __pageData,b as default};