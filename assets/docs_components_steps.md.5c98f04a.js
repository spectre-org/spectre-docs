import{_ as s,o as l,c as a,a as o}from"./chunks/framework.fabb93b1.js";const d=JSON.parse('{"title":"Steps","description":null,"frontmatter":{"title":"Steps","description":null,"order":null},"headers":[],"relativePath":"docs/components/steps.md","filePath":"docs/components/steps.md"}'),p={name:"docs/components/steps.md"},n=o(`<h1 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h1><p>Steps are progress indicators of a sequence of task steps.</p><div class="docs-demo columns"><div class="column col-12"><ul class="step"><li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 1 Tooltip"></a></li><li class="step-item active"><a class="tooltip" href="#steps" data-tooltip="Step 2 Tooltip"></a></li><li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 3 Tooltip"></a></li><li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 4 Tooltip"></a></li></ul></div><div class="column col-12"><ul class="step"><li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 1 Tooltip">Step 1</a></li><li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 2 Tooltip">Step 2</a></li><li class="step-item active"><a class="tooltip" href="#steps" data-tooltip="Step 3 Tooltip">Step 3</a></li><li class="step-item"><a class="tooltip" href="#steps" data-tooltip="Step 4 Tooltip">Step 4</a></li></ul></div></div><p>Add a container element with the <code>step</code> class. And add child elements with the <code>step-item</code> class. The <code>step-item</code> with the <code>active</code> class will be highlighted and indicate the current state of progress.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;step&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;step-item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tooltip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-tooltip</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Step 1&quot;</span><span style="color:#E1E4E8;">&gt;Step 1&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;step-item active&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tooltip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-tooltip</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Step 2&quot;</span><span style="color:#E1E4E8;">&gt;Step 2&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;step-item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tooltip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-tooltip</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Step 3&quot;</span><span style="color:#E1E4E8;">&gt;Step 3&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;step-item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tooltip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-tooltip</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Step 4&quot;</span><span style="color:#E1E4E8;">&gt;Step 4&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;step&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;step-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tooltip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-tooltip</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Step 1&quot;</span><span style="color:#24292E;">&gt;Step 1&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;step-item active&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tooltip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-tooltip</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Step 2&quot;</span><span style="color:#24292E;">&gt;Step 2&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;step-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tooltip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-tooltip</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Step 3&quot;</span><span style="color:#24292E;">&gt;Step 3&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;step-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tooltip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-tooltip</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Step 4&quot;</span><span style="color:#24292E;">&gt;Step 4&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,5),t=[n];function e(c,E,r,y,i,u){return l(),a("div",null,t)}const q=s(p,[["render",e]]);export{d as __pageData,q as default};