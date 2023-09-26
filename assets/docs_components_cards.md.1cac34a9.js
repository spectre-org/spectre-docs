import{_ as s,a}from"./chunks/osx-yosemite.ce65a1ce.js";import{_ as o}from"./chunks/macos-sierra-2.0d2d533b.js";import{_ as l}from"./chunks/osx-el-capitan-2.df80d7e0.js";import{_ as n}from"./chunks/osx-yosemite-2.26b03051.js";import{_ as t,o as c,c as e,a as r}from"./chunks/framework.4ee0251f.js";const p="/spectre-docs/img/macos-sierra.jpg",x=JSON.parse('{"title":"Cards","description":null,"frontmatter":{"title":"Cards","description":null,"order":null},"headers":[],"relativePath":"docs/components/cards.md","filePath":"docs/components/cards.md"}'),d={name:"docs/components/cards.md"},i=r('<h1 id="cards" tabindex="-1">Cards <a class="header-anchor" href="#cards" aria-label="Permalink to &quot;Cards&quot;">​</a></h1><p>Cards are flexible content containers.</p><div class="docs-demo columns"><div class="column col-6 col-xs-12"><div class="card"><div class="card-image"><img class="img-responsive" src="'+s+'" alt="OS X El Capitan"></div><div class="card-header"><div class="card-title h5">Microsoft</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">Empower every person and every organization on the planet to achieve more.</div><div class="card-footer"><a class="btn btn-primary" href="#cards">Do</a></div></div></div><div class="column col-6 col-xs-12"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div><div class="card-subtitle text-gray">Hardware and software</div></div><div class="card-image"><img class="img-responsive" src="'+a+'" alt="OS X Yosemite"></div><div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div><div class="card-footer"><div class="btn-group btn-group-block"><button class="btn btn-primary">Buy</button><button class="btn">Buy</button><button class="btn">Buy</button></div></div></div></div><div class="column col-6 col-xs-12"><div class="card"><div class="card-image"><img class="img-responsive" src="'+o+'" alt="macOS Sierra"></div><div class="card-header"><button class="btn btn-primary float-right"><i class="icon icon-plus"></i></button><div class="card-title h5">Google I/O</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.</div></div></div><div class="column col-6 col-xs-12"><div class="card"><div class="card-image"><img class="img-responsive" src="'+l+'" alt="OS X El Capitan"></div><div class="card-footer"><a class="btn btn-primary" href="#cards">Buy</a><a class="btn btn-link" href="#cards">Share</a></div><div class="card-body"><strong>Surface Studio</strong>. Turn your desk into a Studio. Surface Studio is designed for the creative process.</div></div></div><div class="column col-6 col-xs-12"><div class="card"><div class="card-header"><div class="card-title h5">Apple</div><div class="card-subtitle text-gray">Hardware and software</div></div><div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div><div class="card-image"><img class="img-responsive" src="'+p+'" alt="macOS Sierra"></div></div></div><div class="column col-6 col-xs-12"><div class="card"><div class="card-header"><div class="card-title h5">Google</div><div class="card-subtitle text-gray">Software and hardware</div></div><div class="card-body">Organize the world’s information and make it universally accessible and useful.</div><div class="card-image"><img class="img-responsive" src="'+n+`" alt="OS X Yosemite"></div><div class="card-footer"><a class="btn btn-primary" href="#cards">Search</a><a class="btn btn-link" href="#cards">Share</a></div></div></div></div><p>Add a container element with the <code>card</code> class. And add child elements with the <code>card-image</code>, <code>card-header</code>, <code>card-body</code> and/or <code>card-footer</code> classes. The <code>card-image</code> can be placed in any position.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-image&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-el-capitan.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-header&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-title h5&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-subtitle text-gray&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-body&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-footer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-primary&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,5),y=[i];function v(m,u,g,h,b,E){return c(),e("div",null,y)}const C=t(d,[["render",v]]);export{x as __pageData,C as default};
