import{_ as s,o as a,c as o,a as n}from"./chunks/framework.11f09f6f.js";const u=JSON.parse('{"title":"Popovers","description":null,"frontmatter":{"title":"Popovers","description":null,"order":null},"headers":[],"relativePath":"docs/components/popovers.md","filePath":"docs/components/popovers.md"}'),l={name:"docs/components/popovers.md"},p=n(`<h1 id="popovers" tabindex="-1">Popovers <a class="header-anchor" href="#popovers" aria-label="Permalink to &quot;Popovers&quot;">​</a></h1><p>Popovers are small overlay content containers. Popovers component is built entirely in CSS.</p><div class="docs-demo columns"><div class="column col-3 col-sm-6"><div class="popover"><a class="btn btn-primary" href="#popovers">top popover</a><div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div><div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div><div class="column col-3 col-sm-6"><div class="popover popover-right"><a class="btn btn-primary" href="#popovers">right popover</a><div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div><div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div><div class="column col-3 col-sm-6"><div class="popover popover-bottom"><a class="btn btn-primary" href="#popovers">bottom popover</a><div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div><div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div><div class="column col-3 col-sm-6"><div class="popover popover-left"><a class="btn btn-primary" href="#popovers">left popover</a><div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div><div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div></div><p>Wrap an element by a container with the <code>popover</code> class. And add a container with the <code>popover-container</code> next to the element. You can use <a href="#cards">Cards</a> component inside the <code>popover-container</code>.</p><p>Also, you can add the <code>popover-right</code>, <code>popover-bottom</code> or <code>popover-left</code> class to define the position. By default, the popovers appear above the element.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;popover popover-right&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-primary&quot;</span><span style="color:#E1E4E8;">&gt;right popover&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;popover-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;card&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;card-header&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;card-body&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;card-footer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ...</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;popover popover-right&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-primary&quot;</span><span style="color:#24292E;">&gt;right popover&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;popover-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-header&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        ...</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-body&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        ...</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-footer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        ...</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,6),t=[p];function e(c,r,i,d,E,y){return a(),o("div",null,t)}const h=s(l,[["render",e]]);export{u as __pageData,h as default};