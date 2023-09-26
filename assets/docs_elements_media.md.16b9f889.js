import{_ as e,a as l}from"./chunks/osx-yosemite.ce65a1ce.js";import{_ as o}from"./chunks/osx-yosemite-2.26b03051.js";import{_ as n,o as t,c as p,a,b as s}from"./chunks/framework.4ee0251f.js";const b=JSON.parse('{"title":"Media","description":null,"frontmatter":{"title":"Media","description":null,"order":6},"headers":[],"relativePath":"docs/elements/media.md","filePath":"docs/elements/media.md"}'),c={name:"docs/elements/media.md"},r=a('<h1 id="media" tabindex="-1">Media <a class="header-anchor" href="#media" aria-label="Permalink to &quot;Media&quot;">​</a></h1><p>Media includes responsive images, figures and video classes.</p><h2 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h2><p>Add the <code>img-responsive</code> class to <code>&lt;img&gt;</code> elements. The images will scale with the parent sizes.</p><div class="docs-demo columns"><div class="column col-12"><img class="img-responsive rounded" src="'+e+'" alt="macOS El Capitan Wallpaper"></div></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-el-capitan.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive ...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Add the <code>img-fit-contain</code> or <code>img-fit-cover</code> class to <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code> elements. The media will crop itself to fit inside the element (and you don&#39;t need another container). This feature can replace the classic background image trick. Microsoft Edge support <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/status/objectfitandobjectposition/" target="_blank" rel="noreferrer">is shipped</a> with Build Number 16299+.</p><div class="docs-demo columns"><div class="column col-6 col-xs-12"><figure class="figure"><img class="img-fit-contain rounded" src="'+l+'" alt="macOS Yosemite Wallpaper" style="background:#f8f9fa;height:10rem;width:100%;"><figcaption class="figure-caption text-center">img-fit-contain</figcaption></figure></div><div class="column col-6 col-xs-12"><figure class="figure"><img class="img-fit-cover rounded" src="'+o+`" alt="macOS Yosemite Wallpaper" style="background:#f8f9fa;height:10rem;width:100%;"><figcaption class="figure-caption text-center">img-fit-cover</figcaption></figure></div></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-el-capitan.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-fit-contain ...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-el-capitan.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-fit-cover ...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="figure" tabindex="-1">Figure <a class="header-anchor" href="#figure" aria-label="Permalink to &quot;Figure&quot;">​</a></h2><p>You can use the element <code>&lt;figure&gt;</code> for an image with a caption. Add the <code>figure</code> class to <code>&lt;figure&gt;</code> element. The images with the <code>img-responsive</code> class will be responsive. And the included class <code>figure-caption</code> will provide basic style for caption. Also, you can use <code>text-left</code>, <code>text-center</code> and <code>text-right</code> for caption alignment.</p><div class="docs-demo columns"><div class="column col-12"><figure class="figure"><img class="img-responsive rounded" src="`+o+`" alt="macOS Yosemite Wallpaper"><figcaption class="figure-caption text-center">macOS Yosemite wallpaper</figcaption></figure></div></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">figure</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;figure&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;img-responsive ...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/osx-yosemite-2.jpg&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;macOS Yosemite Wallpaper&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">figcaption</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;figure-caption text-center&quot;</span><span style="color:#24292E;">&gt;macOS Yosemite wallpaper&lt;/</span><span style="color:#22863A;">figcaption</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to &quot;Video&quot;">​</a></h2><p>For responsive video, add a container with the <code>video-responsive</code> class. Insert any YouTube, Youku or other iframe/embed video inside the container. The ratio is 16:9 by default. You may add <code>video-responsive-4-3</code> for 4:3 ratio video container or <code>video-responsive-1-1</code> for 1:1 ratio.</p>`,15),i=s("div",{class:"docs-demo columns"},[s("div",{class:"column col-12"},[s("div",{class:"video-responsive"},[s("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/7DbslbKsQSk",allowfullscreen:""})])])],-1),d=a(`<p>For responsive <code>&lt;video&gt;</code> elements, you can add the <code>video-responsive</code> class directly.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;video-responsive video-responsive-4-3&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">frameborder</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">allowfullscreen</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">video</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;video-responsive&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">video</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,2),y=[r,i,d];function u(g,m,h,f,E,v){return t(),p("div",null,y)}const C=n(c,[["render",u]]);export{b as __pageData,C as default};
