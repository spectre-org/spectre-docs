import{_ as a,c as n,K as e,o as t}from"./chunks/framework.CNVy8nz3.js";const y=JSON.parse('{"title":"Installation","description":null,"frontmatter":{"title":"Installation","description":null,"order":2},"headers":[],"relativePath":"docs/get-started/installation.md","filePath":"docs/get-started/installation.md"}'),o={name:"docs/get-started/installation.md"};function l(p,s,c,r,i,d){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1> <p>You can install Spectre CSS from CDN, NPM or GitHub.</p> <h2 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;CDN&quot;">​</a></h2> <p>Link directly to the minified CSS:</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#6F42C1;"> rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span><span style="color:#6F42C1;"> href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/@spectre-org/spectre-css/dist/spectre.min.css&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#6F42C1;"> rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span><span style="color:#6F42C1;"> href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/@spectre-org/spectre-css/dist/spectre-exp.min.css&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#6F42C1;"> rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span><span style="color:#6F42C1;"> href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/@spectre-org/spectre-css/dist/spectre-icons.min.css&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>You can link to a specific version (for example <code>1.0.0</code>) by modifying the URL like so:</p> <div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span>https://unpkg.com/@spectre-org/spectre-css@1.0.0/dist/spectre.css</span></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2> <p>Install the CSS and SCSS sources:</p> <div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;"># from npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#032F62;"> i</span><span style="color:#005CC5;"> --save</span><span style="color:#032F62;"> @spectre-org/spectre-css</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># from github</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#032F62;"> i</span><span style="color:#005CC5;"> --save</span><span style="color:#032F62;"> spectre-org/spectre-css</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># from a github branch</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#032F62;"> i</span><span style="color:#005CC5;"> --save</span><span style="color:#032F62;"> spectre-org/spectre-css#branch-name</span></span></code></pre></div><p>For Yarn, use <code>yarn add ...</code>.</p> <h2 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-label="Permalink to &quot;Importing&quot;">​</a></h2> <p>Import into your JavaScript bundle (as required):</p> <div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#032F62;"> &#39;@spectre-org/spectre-css/dist/spectre.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#032F62;"> &#39;@spectre-org/spectre-css/dist/spectre-exp.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#032F62;"> &#39;@spectre-org/spectre-css/dist/spectre-icons.css&#39;</span></span></code></pre></div><p>For a custom or selective build, see the <a href="./build.html">custom build</a> section.</p>`,25)]))}const h=a(o,[["render",l]]);export{y as __pageData,h as default};