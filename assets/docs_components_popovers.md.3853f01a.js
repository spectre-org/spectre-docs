import{_ as n,o as l,c as t,a as s,b as a,d as o}from"./chunks/framework.01789657.js";const f=JSON.parse('{"title":"Popovers","description":null,"frontmatter":{"title":"Popovers","description":null,"order":null},"headers":[],"relativePath":"docs/components/popovers.md","filePath":"docs/components/popovers.md"}'),e={name:"docs/components/popovers.md"},p=a("h1",{id:"popovers",tabindex:"-1"},[s("Popovers "),a("a",{class:"header-anchor",href:"#popovers","aria-label":'Permalink to "Popovers"'},"​")],-1),r=a("p",null,"Popovers are small overlay content containers. Popovers component is built entirely in CSS.",-1),c=o('<div class="docs-demo columns"><div class="column col-3 col-sm-6"><div class="popover"><a class="btn btn-primary" href="#popovers">top popover</a> <div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div> <div class="card-subtitle text-gray">Software and hardware</div></div> <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div> <div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div> <div class="column col-3 col-sm-6"><div class="popover popover-right"><a class="btn btn-primary" href="#popovers">right popover</a> <div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div> <div class="card-subtitle text-gray">Software and hardware</div></div> <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div> <div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div> <div class="column col-3 col-sm-6"><div class="popover popover-bottom"><a class="btn btn-primary" href="#popovers">bottom popover</a> <div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div> <div class="card-subtitle text-gray">Software and hardware</div></div> <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div> <div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div> <div class="column col-3 col-sm-6"><div class="popover popover-left"><a class="btn btn-primary" href="#popovers">left popover</a> <div class="popover-container"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div> <div class="card-subtitle text-gray">Software and hardware</div></div> <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div> <div class="card-footer"><button class="btn btn-primary">Buy</button></div></div></div></div></div></div>',1),d=a("p",null,[s("Wrap an element by a container with the "),a("code",null,"popover"),s(" class. And add a container with the "),a("code",null,"popover-container"),s(" next to the element. You can use "),a("a",{href:"#cards"},"Cards"),s(" component inside the "),a("code",null,"popover-container"),s(".")],-1),i=a("p",null,[s("Also, you can add the "),a("code",null,"popover-right"),s(", "),a("code",null,"popover-bottom"),s(" or "),a("code",null,"popover-left"),s(" class to define the position. By default, the popovers appear above the element.")],-1),v=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;popover popover-right&quot;</span><span style="color:#24292E;">&gt;</span></span>
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
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1);function y(u,h,m,b,E,_){return l(),t("div",null,[p,s(),r,s(),c,s(),d,s(),i,s(),v])}const A=n(e,[["render",y]]);export{f as __pageData,A as default};
