import{_ as o,o as n,c as l,a as s,b as e,d as a}from"./chunks/framework.01789657.js";const V=JSON.parse('{"title":"Build","description":null,"frontmatter":{"title":"Build","description":null,"order":3},"headers":[],"relativePath":"docs/introduction/build.md","filePath":"docs/introduction/build.md"}'),t={name:"docs/introduction/build.md"},p=e("h1",{id:"build",tabindex:"-1"},[s("Build "),e("a",{class:"header-anchor",href:"#build","aria-label":'Permalink to "Build"'},"​")],-1),c=e("p",null,"This section assumes you are using a modern bundling setup.",-1),r=e("p",null,"There are two main ways to customise the build output:",-1),i=e("ul",null,[e("li",null,[e("a",{href:"#user-variables"},"user variables"),s(" – to customise the look and feel")]),s(),e("li",null,[e("a",{href:"#selective-imports"},"selective imports"),s(" – to include only the classes you need")])],-1),u=e("h2",{id:"user-variables",tabindex:"-1"},[s("User variables "),e("a",{class:"header-anchor",href:"#user-variables","aria-label":'Permalink to "User variables"'},"​")],-1),d=e("p",null,[s("Create a new file, for example "),e("code",null,"assets/spectre.scss"),s(".")],-1),_=e("p",null,[s("In this file, override Spectre's "),e("a",{href:"./variables.html"},"variables"),s(" then import Spectre's SCSS source:")],-1),h=a(`<div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#E36209;">$primary-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#2e5bec</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$dark-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#3e396b</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/spectre&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>If you have a lot of variables, you can move them to a partial, e.g. <code>_variables.scss</code>:</p>`,2),y=a(`<div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./variables&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/spectre&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>Finally, in your project&#39;s entry point, import your modified version of Spectre:</p>`,2),m=a('<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./assets/spectre.scss&#39;</span></span></code></pre></div><h2 id="selective-imports" tabindex="-1">Selective imports <a class="header-anchor" href="#selective-imports" aria-label="Permalink to &quot;Selective imports&quot;">​</a></h2>',2),b=e("p",null,"If you only want to use some of Spectre's features, you can import just the partials you need:",-1),g=a(`<div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/buttons&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/forms&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/...&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>The full list of partials can be found at:</p>`,2),E=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/spectre-org/spectre-css/tree/main/src",target:"_blank",rel:"noreferrer"},"https://github.com/spectre-org/spectre-css/tree/main/src")])],-1),f=e("h4",{id:"shortening-the-paths",tabindex:"-1"},[s("Shortening the paths "),e("a",{class:"header-anchor",href:"#shortening-the-paths","aria-label":'Permalink to "Shortening the paths"'},"​")],-1),v=e("p",null,"If you intend to import many partials, these long paths can become unwieldy.",-1),T=e("p",null,[s("You might consider using a library like "),e("a",{href:"https://github.com/davestewart/alias-hq",target:"_blank",rel:"noreferrer"},"Alias HQ"),s(" which will allow you to alias Spectre's "),e("code",null,"src"),s(" folder:")],-1),q=a(`<div class="language-json5"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;@spectre/*&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">&quot;node_modules/@spectre-org/spectre-css/src/*&quot;</span><span style="color:#24292E;"> ],</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6A737D;">// assets/spectre.scss</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@spectre/forms&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@spectre/buttons&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@spectre/...&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div>`,2);function S(A,C,D,k,P,F){return n(),l("div",null,[p,s(),c,s(),r,s(),i,s(),u,s(),d,s(),_,s(),h,s(),y,s(),m,s(),b,s(),g,s(),E,s(),f,s(),v,s(),T,s(),q])}const w=o(t,[["render",S]]);export{V as __pageData,w as default};