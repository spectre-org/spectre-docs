import{_ as e,B as r,c,j as s,a as l,G as n,w as t,a3 as p,o as i}from"./chunks/framework.DzIAwTRr.js";const q=JSON.parse('{"title":"Bars","description":null,"frontmatter":{"title":"Bars","description":null,"order":null},"headers":[],"relativePath":"docs/components/bars.md","filePath":"docs/components/bars.md"}'),y={name:"docs/components/bars.md"};function d(u,a,b,E,m,g){const o=r("ClientOnly");return i(),c("div",null,[a[2]||(a[2]=s("h1",{id:"bars",tabindex:"-1"},[l("Bars "),s("a",{class:"header-anchor",href:"#bars","aria-label":'Permalink to "Bars"'},"​")],-1)),a[3]||(a[3]=l()),a[4]||(a[4]=s("p",null,[l("Bars represent the progress of a task or the value within the known range. Bars are custom components for displaying HTML5 "),s("code",null,"<progress>"),l(", "),s("code",null,"<meter>"),l(" and input range elements.")],-1)),a[5]||(a[5]=l()),n(o,null,{default:t(()=>a[0]||(a[0]=[s("div",{class:"vp-raw docs-demo columns"},[s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar bar-sm"},[s("div",{class:"bar-item tooltip","data-tooltip":"25%",role:"progressbar",style:{width:"25%"}})])]),l(),s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar"},[s("div",{class:"bar-item tooltip","data-tooltip":"50%",role:"progressbar",style:{width:"50%"}})])]),l(),s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar"},[s("div",{class:"bar-item tooltip","data-tooltip":"25%",role:"progressbar",style:{width:"25%"}},"25%"),l(),s("div",{class:"bar-item tooltip","data-tooltip":"15%",role:"progressbar",style:{width:"15%",background:"#817fe3"}},"15%"),l(),s("div",{class:"bar-item tooltip","data-tooltip":"10%",role:"progressbar",style:{width:"10%",background:"#aaa9eb"}},"10%"),l(),s("div",{class:"bar-item tooltip","data-tooltip":"15%",role:"progressbar",style:{width:"15%"}},"15%")])])],-1)])),_:1}),a[6]||(a[6]=p(` <p>Add a container element with the <code>bar</code> class. And add child elements with the <code>bar-item</code> class. The width percentage value is needed for every <code>bar-item</code>.</p> <p>There is the <code>bar-sm</code> class for thinner Bars. Also, you could use <a href="#tooltips">Tooltips</a> for any <code>bar-item</code>.</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- normal bars --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar bar-sm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:25%;&quot;</span><span style="color:#6F42C1;"> aria-valuenow</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#6F42C1;"> aria-valuemin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#6F42C1;"> aria-valuemax</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- multi-bars --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item tooltip&quot;</span><span style="color:#6F42C1;"> data-tooltip</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25%&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:25%;&quot;</span><span style="color:#24292E;">&gt;25%&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:15%;background:#818bd5;&quot;</span><span style="color:#24292E;">&gt;15%&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="slider-bars" tabindex="-1">Slider bars <a class="header-anchor" href="#slider-bars" aria-label="Permalink to &quot;Slider bars&quot;">​</a></h2> `,8)),n(o,null,{default:t(()=>a[1]||(a[1]=[s("div",{class:"vp-raw docs-demo columns"},[s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar bar-slider"},[s("div",{class:"bar-item",role:"progressbar",style:{width:"50%"}},[s("button",{class:"bar-slider-btn btn tooltip","data-tooltip":"50%",role:"slider"})])])]),l(),s("div",{class:"column col-8 col-xs-12"},[s("div",{class:"bar bar-slider"},[s("div",{class:"bar-item",role:"progressbar",style:{width:"15%"}},[s("button",{class:"bar-slider-btn btn tooltip","data-tooltip":"25%",role:"slider"})]),l(),s("div",{class:"bar-item",role:"progressbar",style:{width:"65%"}},[s("button",{class:"bar-slider-btn btn tooltip","data-tooltip":"65%",role:"slider"})])])])],-1)])),_:1}),a[7]||(a[7]=p(` <p>You can add the <code>bar-slider</code> class to the Bars container. And add child elements with the <code>bar-item</code> class and <code>bar-slider-btn</code> inside bar-item. You need to set the <code>bar-item</code> width manually to have the slider point.</p> <p>See the experimental <a href="./../experimentals/sliders.html">Slider</a> component for an interactive version.</p> <p>If there are two <code>bar-item</code> divs in one bar-slider, you will have a range slider.</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- normal slider --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar bar-slider&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:25%;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-slider-btn btn&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- range slider --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar bar-slider&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:15%;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-slider-btn btn&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-item&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;progressbar&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:65%;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bar-slider-btn btn&quot;</span><span style="color:#6F42C1;"> role</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slider&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,8))])}const F=e(y,[["render",d]]);export{q as __pageData,F as default};