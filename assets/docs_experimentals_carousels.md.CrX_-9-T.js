import{a as l,_ as a,b as o}from"./chunks/osx-el-capitan-2.CFM_o1A-.js";import{_ as n}from"./chunks/osx-yosemite-2.B_xlLojA.js";import{_ as p,c as t,K as e,o as c}from"./chunks/framework.BD_IjLXb.js";const m=JSON.parse('{"title":"Carousels","description":null,"frontmatter":{"title":"Carousels","description":null,"order":null},"headers":[],"relativePath":"docs/experimentals/carousels.md","filePath":"docs/experimentals/carousels.md"}'),r={name:"docs/experimentals/carousels.md"};function y(i,s,u,E,d,q){return c(),t("div",null,s[0]||(s[0]=[e('<h1 id="carousels" tabindex="-1">Carousels <a class="header-anchor" href="#carousels" aria-label="Permalink to &quot;Carousels&quot;">​</a></h1> <p>CSS ONLY</p> <p>Carousels are slideshows for cycling images. It is built in pure CSS.</p> <div class="vp-raw docs-demo columns"><div class="column col-12"><div class="carousel"><input class="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden="" checked=""> <input class="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden=""> <input class="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden=""> <input class="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden=""> <div class="carousel-container"><figure class="carousel-item"><label class="item-prev btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-left"></i></label> <label class="item-next btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="'+l+'" alt="macOS Yosemite Wallpaper"></figure> <figure class="carousel-item"><label class="item-prev btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-left"></i></label> <label class="item-next btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="'+n+'" alt="macOS Yosemite Wallpaper"></figure> <figure class="carousel-item"><label class="item-prev btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-left"></i></label> <label class="item-next btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="'+a+'" alt="macOS El Capitan Wallpaper"></figure> <figure class="carousel-item"><label class="item-prev btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-left"></i></label> <label class="item-next btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-right"></i></label><img class="img-responsive rounded" src="'+o+`" alt="macOS El Capitan Wallpaper"></figure></div> <div class="carousel-nav"><label class="nav-item text-hide c-hand" for="slide-1">1</label> <label class="nav-item text-hide c-hand" for="slide-2">2</label> <label class="nav-item text-hide c-hand" for="slide-3">3</label> <label class="nav-item text-hide c-hand" for="slide-4">4</label></div></div></div></div> <p>The default image number of Carousels is <code>8</code>. You can add more images by changing the variable <code>$carousel-number</code> in <code>_carousels.scss</code> and re-compiling the CSS.</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- carousel locator --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-locator&quot;</span><span style="color:#6F42C1;"> id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-1&quot;</span><span style="color:#6F42C1;"> type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#6F42C1;"> name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-radio&quot;</span><span style="color:#6F42C1;"> hidden</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#6F42C1;"> checked</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-locator&quot;</span><span style="color:#6F42C1;"> id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-2&quot;</span><span style="color:#6F42C1;"> type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#6F42C1;"> name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-radio&quot;</span><span style="color:#6F42C1;"> hidden</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-locator&quot;</span><span style="color:#6F42C1;"> id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-3&quot;</span><span style="color:#6F42C1;"> type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#6F42C1;"> name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-radio&quot;</span><span style="color:#6F42C1;"> hidden</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-locator&quot;</span><span style="color:#6F42C1;"> id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-4&quot;</span><span style="color:#6F42C1;"> type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#6F42C1;"> name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-radio&quot;</span><span style="color:#6F42C1;"> hidden</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- carousel container --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;!-- carousel item --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">figure</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-prev btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-4&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-left&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-next btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-2&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-right&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive rounded&quot;</span><span style="color:#6F42C1;"> src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-yosemite.jpg&quot;</span><span style="color:#6F42C1;"> alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;macOS Yosemite Wallpaper&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">figure</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-prev btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-1&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-left&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-next btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-3&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-right&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive rounded&quot;</span><span style="color:#6F42C1;"> src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-yosemite-2.jpg&quot;</span><span style="color:#6F42C1;"> alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;macOS Yosemite Wallpaper&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">figure</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-prev btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-2&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-left&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-next btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-4&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-right&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive rounded&quot;</span><span style="color:#6F42C1;"> src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-el-capitan.jpg&quot;</span><span style="color:#6F42C1;"> alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;macOS El Capitan Wallpaper&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">figure</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-prev btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-3&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-left&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item-next btn btn-action btn-lg&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-1&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">i</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon icon-arrow-right&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive rounded&quot;</span><span style="color:#6F42C1;"> src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-el-capitan-2.jpg&quot;</span><span style="color:#6F42C1;"> alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;macOS El Capitan Wallpaper&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">  &lt;!-- carousel navigation --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;carousel-nav&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nav-item text-hide c-hand&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-1&quot;</span><span style="color:#24292E;">&gt;1&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nav-item text-hide c-hand&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-2&quot;</span><span style="color:#24292E;">&gt;2&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nav-item text-hide c-hand&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-3&quot;</span><span style="color:#24292E;">&gt;3&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">label</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nav-item text-hide c-hand&quot;</span><span style="color:#6F42C1;"> for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;slide-4&quot;</span><span style="color:#24292E;">&gt;4&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,11)]))}const C=p(r,[["render",y]]);export{m as __pageData,C as default};
