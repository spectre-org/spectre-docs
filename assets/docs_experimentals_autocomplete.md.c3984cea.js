import{_ as l}from"./chunks/avatar-1.239cdf62.js";import{_ as n}from"./chunks/avatar-4.223b2c3f.js";import{_ as o,o as p,c as t,b as s,d as a,a as e}from"./chunks/framework.4ee0251f.js";const A=JSON.parse('{"title":"Autocomplete","description":null,"frontmatter":{"title":"Autocomplete","description":null,"order":null},"headers":[],"relativePath":"docs/experimentals/autocomplete.md","filePath":"docs/experimentals/autocomplete.md"}'),c={name:"docs/experimentals/autocomplete.md"},r=s("h1",{id:"autocomplete",tabindex:"-1"},[a("Autocomplete "),s("a",{class:"header-anchor",href:"#autocomplete","aria-label":'Permalink to "Autocomplete"'},"​")],-1),E=s("p",null,"Autocomplete form component provides suggestions while you type. It is often used for tags and contacts input.",-1),y=s("div",{class:"docs-demo columns"},[s("div",{class:"column col-9 col-xs-12"},[s("div",{class:"form-group"},[s("div",{class:"form-autocomplete"},[s("div",{class:"form-autocomplete-input form-input"},[s("span",{class:"chip"},"Bruce Banner"),s("div",{class:"chip"},[s("img",{class:"avatar avatar-sm",src:l,alt:"Avatar"}),a("Thor Odinson")]),s("div",{class:"chip"},[s("img",{class:"avatar avatar-sm",src:n,alt:"Avatar"}),a("Steve Rogers")]),s("div",{class:"chip"},[s("figure",{class:"avatar avatar-sm","data-initial":"TS",style:{"background-color":"#5755d9"}}),a("Tony Stark ")]),s("span",{class:"chip active"},"Natasha Romanoff"),s("input",{class:"form-input",type:"text",placeholder:""})])])])]),s("div",{class:"column col-9 col-xs-12"},[s("div",{class:"form-group"},[s("div",{class:"form-autocomplete"},[s("div",{class:"form-autocomplete-input form-input is-focused"},[s("span",{class:"chip"},[a("Bruce Banner"),s("a",{class:"btn btn-clear",href:"#","aria-label":"Close",role:"button"})]),s("span",{class:"chip"},[s("img",{class:"avatar avatar-sm",src:l,alt:"Thor Odinson"}),a("Thor Odinson"),s("a",{class:"btn btn-clear",href:"#","aria-label":"Close",role:"button"})]),s("div",{class:"has-icon-left"},[s("input",{class:"form-input",type:"text",placeholder:"",value:"S"}),s("i",{class:"form-icon loading"})])]),s("ul",{class:"menu"},[s("li",{class:"menu-item"},[s("a",{href:"#autocomplete"},[s("div",{class:"tile tile-centered"},[s("div",{class:"tile-icon"},[s("img",{class:"avatar avatar-sm",src:n,alt:"Steve Rogers"})]),s("div",{class:"tile-content"},[s("mark",null,"S"),a("teve Roger "),s("mark",null,"s")])])])]),s("li",{class:"menu-item"},[s("a",{href:"#autocomplete"},[s("div",{class:"tile tile-centered"},[s("div",{class:"tile-icon"},[s("figure",{class:"avatar avatar-sm","data-initial":"TS",style:{"background-color":"#5755d9"}})]),s("div",{class:"tile-content"},[a("Tony "),s("mark",null,"S"),a("tark ")])])])])])])])])],-1),i=e('<p>Add a container element with the <code>form-autocomplete</code> class. There are 2 parts of it, one is <code>form-autocomplete-input</code>, another is <code>menu</code> component. You may add the <code>is-focused</code> class to <code>form-autocomplete-input</code> to make it appear as focus state.</p><p>Spectre.css does NOT include JavaScript code, you will need to implement your JS to interact with the autocomplete. The autocomplete HTML structure is exampled below.</p><div class="docs-demo columns"><div class="column col-9 col-xs-12"><div class="form-group"><div class="form-autocomplete autocomplete-oneline"><div class="form-autocomplete-input form-input"><span class="chip">Bruce Banner</span><div class="chip"><img class="avatar avatar-sm" src="'+l+'" alt="Avatar">Thor Odinson</div><div class="chip"><img class="avatar avatar-sm" src="'+n+`" alt="Avatar">Steve Rogers</div><div class="chip"><figure class="avatar avatar-sm" data-initial="TS" style="background-color:#5755d9;"></figure>Tony Stark </div><span class="chip active">Natasha Romanoff</span><input class="form-input" type="text" placeholder=""></div></div></div></div></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form-autocomplete&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- autocomplete input container --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form-autocomplete-input form-input&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- autocomplete chips --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chip&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/img/avatar-1.png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;avatar avatar-sm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Thor Odinson&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Thor Odinson</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-clear&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Close&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">role</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- autocomplete real input box --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;form-input&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;typing here&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- autocomplete suggestion list --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- menu list items --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu-item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tile tile-centered&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tile-icon&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ...</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tile-content&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ...</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form-autocomplete&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- autocomplete input container --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form-autocomplete-input form-input&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- autocomplete chips --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chip&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/avatar-1.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar avatar-sm&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Thor Odinson&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Thor Odinson</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-clear&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">aria-label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Close&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- autocomplete real input box --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;form-input&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">placeholder</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;typing here&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- autocomplete suggestion list --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menu&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- menu list items --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menu-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile tile-centered&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-icon&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            ...</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tile-content&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            ...</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),u=[r,E,y,i];function d(m,v,g,F,q,h){return p(),t("div",null,u)}const _=o(c,[["render",d]]);export{A as __pageData,_ as default};