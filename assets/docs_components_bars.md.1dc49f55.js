import{_ as o,o as n,c as t,a,b as s,d as l}from"./chunks/framework.01789657.js";const w=JSON.parse('{"title":"Bars","description":null,"frontmatter":{"title":"Bars","description":null,"order":null},"headers":[],"relativePath":"docs/components/bars.md","filePath":"docs/components/bars.md"}'),p={name:"docs/components/bars.md"},e=s("h1",{id:"bars",tabindex:"-1"},[a("Bars "),s("a",{class:"header-anchor",href:"#bars","aria-label":'Permalink to "Bars"'},"​")],-1),r=s("p",null,[a("Bars represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 "),s("code",null,"<progress>"),a(", "),s("code",null,"<meter>"),a(" and input range elements.")],-1),c=s("div",{class:"vp-raw docs-demo columns"},[s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar bar-sm"},[s("div",{class:"bar-item tooltip","data-tooltip":"25%",role:"progressbar",style:{width:"25%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})])]),a(),s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar"},[s("div",{class:"bar-item tooltip","data-tooltip":"50%",role:"progressbar",style:{width:"50%"}})])]),a(),s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar"},[s("div",{class:"bar-item tooltip","data-tooltip":"25%",role:"progressbar",style:{width:"25%"}},"25%"),a(),s("div",{class:"bar-item tooltip","data-tooltip":"15%",role:"progressbar",style:{width:"15%",background:"#817fe3"}},"15%"),a(),s("div",{class:"bar-item tooltip","data-tooltip":"10%",role:"progressbar",style:{width:"10%",background:"#aaa9eb"}},"10%"),a(),s("div",{class:"bar-item tooltip","data-tooltip":"15%",role:"progressbar",style:{width:"15%"}},"15%")])])],-1),i=s("p",null,[a("Add a container element with the "),s("code",null,"bar"),a(" class. And add child elements with the "),s("code",null,"bar-item"),a(" class. The width percentage value is needed for every "),s("code",null,"bar-item"),a(".")],-1),y=s("p",null,[a("There is the "),s("code",null,"bar-sm"),a(" class for thinner Bars. Also, you could use "),s("a",{href:"#tooltips"},"Tooltips"),a(" for any "),s("code",null,"bar-item"),a(".")],-1),d=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- normal bars --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar bar-sm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:25%;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">aria-valuenow</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">aria-valuemin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">aria-valuemax</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- multi-bars --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item tooltip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-tooltip</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25%&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:25%;&quot;</span><span style="color:#24292E;">&gt;25%&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:15%;background:#818bd5;&quot;</span><span style="color:#24292E;">&gt;15%&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="slider-bars" tabindex="-1">Slider bars <a class="header-anchor" href="#slider-bars" aria-label="Permalink to &quot;Slider bars&quot;">​</a></h2>`,2),u=s("div",{class:"vp-raw docs-demo columns"},[s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar bar-slider"},[s("div",{class:"bar-item",role:"progressbar",style:{width:"50%"}},[s("button",{class:"bar-slider-btn btn tooltip","data-tooltip":"50%",role:"slider"})])])]),a(),s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar bar-slider"},[s("div",{class:"bar-item",role:"progressbar",style:{width:"15%"}},[s("button",{class:"bar-slider-btn btn tooltip","data-tooltip":"25%",role:"slider"})]),a(),s("div",{class:"bar-item",role:"progressbar",style:{width:"65%"}},[s("button",{class:"bar-slider-btn btn tooltip","data-tooltip":"65%",role:"slider"})])])])],-1),b=s("p",null,[a("You can add the "),s("code",null,"bar-slider"),a(" class to the Bars container. And add child elements with the "),s("code",null,"bar-item"),a(" class and "),s("code",null,"bar-slider-btn"),a(" inside bar-item. You need to set the "),s("code",null,"bar-item"),a(" width manually to have the slider point.")],-1),E=s("p",null,[a("If there are two "),s("code",null,"bar-item"),a(" divs in one bar-slider, you will have a range slider.")],-1),h=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- normal slider --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar bar-slider&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:25%;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-slider-btn btn&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- range slider --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar bar-slider&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:15%;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-slider-btn btn&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:65%;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-slider-btn btn&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1);function m(g,q,v,F,_,A){return n(),t("div",null,[e,a(),r,a(),c,a(),i,a(),y,a(),d,a(),u,a(),b,a(),E,a(),h])}const f=o(p,[["render",m]]);export{w as __pageData,f as default};