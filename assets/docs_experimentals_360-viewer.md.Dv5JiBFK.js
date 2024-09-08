import{_ as e,c as a,K as o,o as n}from"./chunks/framework.BD_IjLXb.js";const d=JSON.parse('{"title":"360-Degree Viewer","description":null,"frontmatter":{"title":"360-Degree Viewer","description":null,"order":1},"headers":[],"relativePath":"docs/experimentals/360-viewer.md","filePath":"docs/experimentals/360-viewer.md"}'),l={name:"docs/experimentals/360-viewer.md"};function t(p,s,r,c,i,y){return n(),a("div",null,s[0]||(s[0]=[o(` <p>Photo credits: <a href="https://microsoft.msafflnk.net/c/1272791/433017/7593?u=https://www.microsoft.com/en-us/p/surface-studio-2/8SBJXM0M58T4" target="_blank" rel="noreferrer">Microsoft Xbox One X</a></p> <p>You will need to use your own product image sprite (all angle of photos in one image) and set the attribute <code>max</code> to the image numbers to use this component.</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewer-360&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewer-slider slider&quot;</span><span style="color:#6F42C1;"> type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;range&quot;</span><span style="color:#6F42C1;"> min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#6F42C1;"> max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;36&quot;</span><span style="color:#6F42C1;"> value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#6F42C1;"> oninput</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#032F62;">(&#39;value&#39;, </span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">);&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">figure</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewer-image&quot;</span><span style="color:#6F42C1;"> style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;background-image:url(&#39;...&#39;);&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>The default image numbers in CSS are <code>36</code>. You can copy the mixin and add more numbers in <code>_viewer-360.scss</code> and re-compiling the CSS.</p> <div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">@include</span><span style="color:#6F42C1;"> viewer-slider-size</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">36</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">@include</span><span style="color:#6F42C1;"> viewer-slider-size</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">);</span></span></code></pre></div>`,9)]))}const m=e(l,[["render",t]]);export{d as __pageData,m as default};
