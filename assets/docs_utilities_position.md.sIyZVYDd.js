import{_ as a,c as n,a3 as l,o}from"./chunks/framework.DzIAwTRr.js";const g=JSON.parse('{"title":"Position","description":null,"frontmatter":{"title":"Position","description":null,"order":null},"headers":[],"relativePath":"docs/utilities/position.md","filePath":"docs/utilities/position.md"}'),p={name:"docs/utilities/position.md"};function t(e,s,c,r,i,y){return o(),n("div",null,s[0]||(s[0]=[l(`<h1 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;Position&quot;">​</a></h1> <p>Position utilities are used for useful layout and position, including margin/padding, position, float and clear.</p> <h2 id="margin" tabindex="-1">Margin <a class="header-anchor" href="#margin" aria-label="Permalink to &quot;Margin&quot;">​</a></h2> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- m-1 {margin: 4px;} m-2 {margin: 8px;} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;m-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;m-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- margin in 4 directions. mt-1 {margin-top: 4px;} mt-2 {margin-top: 8px;} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mt-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mt-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- mx-1 {margin-left: 4px; margin-right: 4px;} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mx-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mx-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;my-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;my-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="padding" tabindex="-1">Padding <a class="header-anchor" href="#padding" aria-label="Permalink to &quot;Padding&quot;">​</a></h2> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- p-1 {padding: 4px;} p-2 {padding: 8px;} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- padding in 4 directions. pt-1 {padding-top: 4px;} pt-2 {padding-top: 8px;} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pt-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pt-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- px-1 {padding-left: 4px; padding-right: 4px;} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;px-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;px-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;py-1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;py-2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="position-1" tabindex="-1">Position <a class="header-anchor" href="#position-1" aria-label="Permalink to &quot;Position&quot;">​</a></h2> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- position: relative, absolute, fixed and sticky --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-relative&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-absolute&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-fixed&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-sticky&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- centered block --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-centered&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="floats" tabindex="-1">Floats <a class="header-anchor" href="#floats" aria-label="Permalink to &quot;Floats&quot;">​</a></h2> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- float: left and right --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;float-left&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;float-right&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- clear float --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;clearfix&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,16)]))}const E=a(p,[["render",t]]);export{g as __pageData,E as default};