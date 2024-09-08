import{a as l,_ as n}from"./chunks/avatar-3.BR9z89SZ.js";import{_ as a,c as t,K as o,o as e}from"./chunks/framework.BD_IjLXb.js";const g=JSON.parse('{"title":"Tiles","description":null,"frontmatter":{"title":"Tiles","description":null,"order":null},"headers":[],"relativePath":"docs/components/tiles.md","filePath":"docs/components/tiles.md"}'),p={name:"docs/components/tiles.md"};function c(i,s,r,y,d,E){return e(),t("div",null,s[0]||(s[0]=[o('<h1 id="tiles" tabindex="-1">Tiles <a class="header-anchor" href="#tiles" aria-label="Permalink to &quot;Tiles&quot;">​</a></h1> <p>Tiles are repeatable or embeddable information blocks.</p> <div class="vp-raw docs-demo columns"><div class="column col-9 col-sm-12"><div class="tile"><div class="tile-icon"><figure class="avatar avatar-lg"><img src="'+l+'" alt="Avatar"></figure></div> <div class="tile-content"><p class="tile-title">The Avengers</p> <p class="tile-subtitle">Earth&#39;s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p></div> <div class="tile-action"><button class="btn btn-primary">Join</button> <button class="btn">Contact</button></div></div></div> <div class="column col-9 col-sm-12"><div class="tile"><div class="tile-icon"><figure class="avatar avatar-lg"><img src="'+n+`" alt="Avatar"></figure></div> <div class="tile-content"><p class="tile-title">The S.H.I.E.L.D.</p> <p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p> <p><button class="btn btn-primary btn-sm">Join</button> <button class="btn btn-sm">Contact</button></p></div></div></div></div> <p>Add a container with the <code>tile</code> class. And add child elements with the <code>tile-icon</code>, <code>tile-content</code> or/and <code>tile-action</code> classes. The <code>tile-icon</code> and <code>tile-action</code> are optional.</p> <p>There are <code>tile-title</code> and <code>tile-subtitle</code> classes for title and subtitle text styles.</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-icon&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;example-tile-icon&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-file centered&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-content&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-title&quot;</span><span style="color:#24292E;">&gt;The Avengers&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-subtitle&quot;</span><span style="color:#24292E;">&gt;Earth&#39;s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-action&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-primary&quot;</span><span style="color:#24292E;">&gt;Join&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="compact-tiles" tabindex="-1">Compact tiles <a class="header-anchor" href="#compact-tiles" aria-label="Permalink to &quot;Compact tiles&quot;">​</a></h2> <p>There is compact version of Tiles component, which is often used as contact and file info blocks.</p> <p>Add the <code>tile-centered</code> class to the container <code>tile</code>. The <code>tile-icon</code>, <code>tile-content</code> and <code>tile-action</code> will be vertically centered.</p> <div class="vp-raw docs-demo columns"><div class="column col-6 col-md-9 col-xs-12"><div class="tile tile-centered"><div class="tile-icon"><div class="example-tile-icon"><i class="icon icon-mail centered"></i></div></div> <div class="tile-content"><div class="tile-title">spectre-docs.pdf</div><small class="tile-subtitle text-gray">14MB · Public · 1 Jan, 2017</small></div> <div class="tile-action"><button class="btn btn-link btn-action"><i class="icon icon-more-vert"></i></button></div></div></div></div> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile tile-centered&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-icon&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;example-tile-icon&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-file centered&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-content&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-title&quot;</span><span style="color:#24292E;">&gt;spectre-docs.pdf&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">small</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-subtitle text-gray&quot;</span><span style="color:#24292E;">&gt;14MB · Public · 1 Jan, 2017&lt;/</span><span style="color:#22863A;">small</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-action&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-link&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-more-vert&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,20)]))}const m=a(p,[["render",c]]);export{g as __pageData,m as default};
