import{_ as t}from"./chunks/avatar-1.239cdf62.js";import{_ as n,a as o}from"./chunks/avatar-3.96d59cd6.js";import{_ as r}from"./chunks/avatar-4.223b2c3f.js";import{_ as p,o as c,c as i,a,b as s,d as l}from"./chunks/framework.01789657.js";const e="/spectre-docs/img/avatar-5.png",N=JSON.parse('{"title":"Avatars","description":null,"frontmatter":{"title":"Avatars","description":null,"order":null},"headers":[],"relativePath":"docs/components/avatars.md","filePath":"docs/components/avatars.md"}'),u={name:"docs/components/avatars.md"},y=s("h1",{id:"avatars",tabindex:"-1"},[a("Avatars "),s("a",{class:"header-anchor",href:"#avatars","aria-label":'Permalink to "Avatars"'},"​")],-1),v=s("p",null,"Avatars are user profile pictures.",-1),d=l('<div class="vp-raw docs-demo columns"><div class="column col-6 col-xs-12"><figure class="avatar avatar-xl mr-2"><img src="'+t+'" alt="Avatar XL"></figure> <figure class="avatar avatar-lg mr-2"><img src="'+n+'" alt="Avatar LG"></figure> <figure class="avatar mr-2"><img src="'+o+'" alt="Avatar"></figure> <figure class="avatar avatar-sm mr-2"><img src="'+r+'" alt="Avatar SM"></figure> <figure class="avatar avatar-xs mr-2"><img src="'+e+'" alt="Avatar XS"></figure></div> <div class="column col-6 col-xs-12"><figure class="avatar avatar-xl mr-2" data-initial="YZ"></figure> <figure class="avatar avatar-lg mr-2" data-initial="YZ"></figure> <figure class="avatar mr-2" data-initial="YZ"></figure> <figure class="avatar avatar-sm mr-2" data-initial="YZ"></figure> <figure class="avatar avatar-xs mr-2" data-initial="YZ"></figure></div></div>',1),_=l("<p>Add the <code>avatar</code> class to <code>&lt;img&gt;</code> element. There are 4 additional sizes available, including <code>avatar-xl</code>(64px), <code>avatar-lg</code>(48px), <code>avatar-sm</code>(24px), and <code>avatar-xs</code>(16px). By default, the avatar size is 32px.</p>",1),g=s("p",null,[a("For users who don't have profile pictures, you may use their initials for avatars. Add the "),s("code",null,"avatar"),a(" class and avatar size class to "),s("code",null,"<div>"),a(" element. The "),s("code",null,"data-initial"),a(" attribute is the name appear inside the avatar.")],-1),m=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Basic avatar examples --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">figure</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar avatar-xl&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/avatar-1.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">figure</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar avatar-xl&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-initial</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;YZ&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;background-color: #5755d9;&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- Show initals when avatar image is unavailable or not fully loaded --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">figure</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar avatar-xl&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-initial</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;YZ&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;background-color: #5755d9;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/avatar-1.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="avatar-icons" tabindex="-1">Avatar icons <a class="header-anchor" href="#avatar-icons" aria-label="Permalink to &quot;Avatar icons&quot;">​</a></h2>`,2),E=l('<div class="vp-raw docs-demo columns"><div class="column col-6 col-xs-12"><figure class="avatar avatar-xl mr-2"><img src="'+t+'" alt="Avatar"><img class="avatar-icon" src="'+n+'" alt="Avatar"></figure> <figure class="avatar avatar-lg mr-2"><img src="'+n+'" alt="Avatar"><img class="avatar-icon" src="'+o+'" alt="Avatar"></figure> <figure class="avatar mr-2"><img src="'+o+'" alt="Avatar"><img class="avatar-icon" src="'+r+'" alt="Avatar"></figure> <figure class="avatar avatar-sm mr-2"><img src="'+r+'" alt="Avatar"><img class="avatar-icon" src="'+e+'" alt="Avatar"></figure> <figure class="avatar avatar-xs"><img src="'+e+'" alt="Avatar"><img class="avatar-icon" src="'+t+'" alt="Avatar"></figure></div></div>',1),f=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">figure</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar avatar-xl&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/avatar-1.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/avatar-5.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar-icon&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="avatar-presence" tabindex="-1">Avatar presence <a class="header-anchor" href="#avatar-presence" aria-label="Permalink to &quot;Avatar presence&quot;">​</a></h2>`,2),A=l('<div class="vp-raw docs-demo columns"><div class="column col-6 col-xs-12"><figure class="avatar avatar-xl mr-2" data-initial="YZ"><i class="avatar-presence online"></i></figure> <figure class="avatar avatar-lg mr-2" data-initial="YZ"><i class="avatar-presence busy"></i></figure> <figure class="avatar mr-2" data-initial="YZ"><i class="avatar-presence away"></i></figure> <figure class="avatar avatar-sm mr-2" data-initial="YZ"><i class="avatar-presence offline"></i></figure> <figure class="avatar avatar-xs mr-2" data-initial="YZ"><i class="avatar-presence online"></i></figure></div></div>',1),h=s("p",null,[a("Avatars support presence indicators. You can add an "),s("code",null,"<i>"),a(" element with the "),s("code",null,"avatar-presence"),a(" class, and add "),s("code",null,"online"),a(", "),s("code",null,"busy"),a(" or "),s("code",null,"away"),a(" class for different status colors. The default is gray which means offline.")],-1),q=l(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">figure</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar avatar-xl&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/avatar-1.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">i</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;avatar-presence online&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">i</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,1);function T(F,C,x,S,b,P){return c(),i("div",null,[y,a(),v,a(),d,a(),_,a(),g,a(),m,a(),E,a(),f,a(),A,a(),h,a(),q])}const k=p(u,[["render",T]]);export{N as __pageData,k as default};