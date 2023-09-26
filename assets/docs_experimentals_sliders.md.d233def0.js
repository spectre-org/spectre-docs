import{_ as o,o as a,c as n,b as s,d as l,a as p}from"./chunks/framework.11f09f6f.js";const B=JSON.parse('{"title":"Sliders","description":null,"frontmatter":{"title":"Sliders","description":null,"order":null},"headers":[],"relativePath":"docs/experimentals/sliders.md","filePath":"docs/experimentals/sliders.md"}'),t={name:"docs/experimentals/sliders.md"},e=s("h1",{id:"sliders",tabindex:"-1"},[l("Sliders "),s("a",{class:"header-anchor",href:"#sliders","aria-label":'Permalink to "Sliders"'},"​")],-1),c=s("p",null,"The Sliders are for selecting values from ranges.",-1),r=s("p",null,[l("You can add the class "),s("code",null,"tooltip"),l(" to have tooltip labels. If no "),s("code",null,"data-tooltip"),l(" is set, the "),s("code",null,"value"),l(" will be used instead.")],-1),y=s("div",{class:"docs-demo columns"},[s("div",{class:"column col-6 col-xs-12"},[s("input",{class:"slider tooltip",type:"range",min:"0",max:"100",value:"50",oninput:"this.setAttribute('value', this.value);"})]),s("div",{class:"column col-6 col-xs-12"},[s("input",{class:"slider",type:"range",min:"0",max:"100",value:"50",disabled:""})])],-1),E=p(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Sliders --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;slider&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;range&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- Sliders with tooltips --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;slider tooltip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;range&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">oninput</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#9ECBFF;">(&#39;value&#39;, </span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">);&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Sliders --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;range&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- Sliders with tooltips --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider tooltip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;range&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">oninput</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#032F62;">(&#39;value&#39;, </span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">);&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1),i=[e,c,r,y,E];function u(d,F,q,h,C,_){return a(),n("div",null,i)}const v=o(t,[["render",u]]);export{B as __pageData,v as default};