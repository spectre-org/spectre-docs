import{_ as a,a as t}from"./chunks/avatar-3.BR9z89SZ.js";import{_ as l}from"./chunks/avatar-1.Df2cquJf.js";import{_ as e}from"./chunks/avatar-4.Bc7LGgfR.js";import{_ as n,c as o,a3 as i,o as c}from"./chunks/framework.DzIAwTRr.js";const E=JSON.parse('{"title":"Panels","description":null,"frontmatter":{"title":"Panels","description":null,"order":null},"headers":[],"relativePath":"docs/components/panels.md","filePath":"docs/components/panels.md"}'),p={name:"docs/components/panels.md"};function r(d,s,v,u,b,y){return c(),o("div",null,s[0]||(s[0]=[i('<h1 id="panels" tabindex="-1">Panels <a class="header-anchor" href="#panels" aria-label="Permalink to &quot;Panels&quot;">​</a></h1> <p>Panels are flexible view container with auto-expand content section.</p> <div class="vp-raw docs-demo columns"><div class="column col-6 col-xs-12"><div class="panel"><div class="panel-header text-center"><figure class="avatar avatar-lg"><img src="'+a+'" alt="Avatar"></figure> <div class="panel-title h5 mt-10">Bruce Banner</div> <div class="panel-subtitle">THE HULK</div></div> <nav class="panel-nav"><ul class="tab tab-block"><li class="tab-item active"><a href="#panels">Profile</a></li> <li class="tab-item"><a href="#panels">Files</a></li> <li class="tab-item"><a href="#panels">Tasks</a></li></ul></nav> <div class="panel-body"><div class="tile tile-centered"><div class="tile-content"><div class="tile-title text-bold">E-mail</div> <div class="tile-subtitle">bruce.banner@hulk.com</div></div> <div class="tile-action"><button class="btn btn-link btn-action btn-lg tooltip tooltip-left" data-tooltip="Edit E-mail"><i class="icon icon-edit"></i></button></div></div> <div class="tile tile-centered"><div class="tile-content"><div class="tile-title text-bold">Skype</div> <div class="tile-subtitle">bruce.banner</div></div> <div class="tile-action"><button class="btn btn-link btn-action btn-lg"><i class="icon icon-edit"></i></button></div></div> <div class="tile tile-centered"><div class="tile-content"><div class="tile-title text-bold">Location</div> <div class="tile-subtitle">Dayton, Ohio</div></div> <div class="tile-action"><button class="btn btn-link btn-action btn-lg"><i class="icon icon-edit"></i></button></div></div></div> <div class="panel-footer"><button class="btn btn-primary btn-block">Save</button></div></div></div> <div class="column col-6 col-xs-12"><div class="panel"><div class="panel-header"><div class="panel-title h6">Comments</div></div> <div class="panel-body"><div class="tile"><div class="tile-icon"><figure class="avatar"><img src="'+l+'" alt="Avatar"></figure></div> <div class="tile-content"><p class="tile-title text-bold">Thor Odinson</p> <p class="tile-subtitle">Earth&#39;s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p></div></div> <div class="tile"><div class="tile-icon"><figure class="avatar"><img src="'+a+'" alt="Avatar"></figure></div> <div class="tile-content"><p class="tile-title text-bold">Bruce Banner</p> <p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p></div></div> <div class="tile"><div class="tile-icon"><figure class="avatar" data-initial="TS"></figure></div> <div class="tile-content"><p class="tile-title text-bold">Tony Stark</p> <p class="tile-subtitle">Earth&#39;s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p></div></div> <div class="tile"><div class="tile-icon"><figure class="avatar"><img src="'+e+'" alt="Avatar"></figure></div> <div class="tile-content"><p class="tile-title text-bold">Steve Rogers</p> <p class="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p></div></div> <div class="tile"><div class="tile-icon"><figure class="avatar"><img src="'+t+`" alt="Avatar"></figure></div> <div class="tile-content"><p class="tile-title text-bold">Natasha Romanoff</p> <p class="tile-subtitle">Earth&#39;s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p></div></div></div> <div class="panel-footer"><div class="input-group"><input class="form-input" type="text" placeholder="Hello"> <button class="btn btn-primary input-group-btn">Send</button></div></div></div></div></div> <p>Add a container element with the <code>panel</code> class. And add child elements with the <code>panel-header</code>, <code>panel-nav</code>, <code>panel-body</code> and/or <code>panel-footer</code> classes. The <code>panel-body</code> can be auto expanded and vertically scrollable.</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;panel&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;panel-header&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;panel-title&quot;</span><span style="color:#24292E;">&gt;Comments&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;panel-nav&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- navigation components: tabs, breadcrumbs or pagination --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;panel-body&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- contents --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;panel-footer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- buttons or inputs --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,9)]))}const A=n(p,[["render",r]]);export{E as __pageData,A as default};
