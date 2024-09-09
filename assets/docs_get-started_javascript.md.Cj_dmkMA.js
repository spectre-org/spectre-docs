import{_ as a,c as e,K as o,o as l}from"./chunks/framework.CNVy8nz3.js";const m=JSON.parse('{"title":"JavaScript","description":null,"frontmatter":{"title":"JavaScript","description":null,"order":4},"headers":[],"relativePath":"docs/get-started/javascript.md","filePath":"docs/get-started/javascript.md"}'),n={name:"docs/get-started/javascript.md"};function t(p,s,c,r,i,d){return l(),e("div",null,s[0]||(s[0]=[o(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1> <p>Spectre CSS is primarily a CSS framework, which means most of its features and interactivity <strong>do not</strong> require JavaScript. This is one of its strengths; it provides solid interactivity through CSS trickery alone.</p> <p>This interactivity is simulated using a combination of CSS pseudo-classes and selectors, for example:</p> <ul><li><a href="./../elements/forms.html">Checkboxes</a> – the <code>:checked</code> and <code>:before</code> pseudo-classes style the checkbox element</li> <li><a href="./../components/accordions.html">Accordions</a> – the <code>:checked</code> and <code>~</code> sibling-selector show and hide the accordion elements</li> <li><a href="./../components/modals.html">Modals</a> – the <code>:target</code> pseudo-class and location <code>#hash</code> display the specific modal element</li> <li><a href="./../experimentals/carousels.html">Carousels</a> – the <code>:checked</code> and <code>~</code> sibling-selector show the specific slide element</li> <li><a href="./../experimentals/parallax.html">Parallax</a> – the <code>:hover</code> and <code>~</code> sibling-selector tilt the image container</li></ul> <p>However, there are cases where JavaScript can or <em>must</em> be used to enhance functionality:</p> <ul><li>toggling <strong>classes</strong> – such as adding an <code>active</code> class to show or hide a specific <a href="./../components/modals.html">modal</a> element</li> <li>toggling <strong>elements</strong> – such as showing <a href="./../components/tabs.html">tab</a> <em>content</em> in response to a tab <strong>item</strong> click</li> <li>modifying <strong>attributes</strong> – such as setting a <code>data-tooltip</code> attribute to show a slider&#39;s current value</li> <li>updating <strong>elements</strong> – such as interacting with elements in an <a href="./../experimentals/autocomplete.html">autocomplete</a> component</li></ul> <p>Essentially, Spectre CSS is a CSS-<em>first</em> framework where:</p> <ul><li>CSS can be used for the vast majority of use-cases and interaction</li> <li>JavaScript can be used where it might be more flexible or pragmatic</li></ul> <p>To clarify JavaScript usage, main menu items will be tagged with:</p> <ul><li><small class="label label-primary">JS</small> – where JavaScript is required</li> <li><small class="label label-secondary">JS</small> – where JavaScript is optional</li> <li>no tag – for CSS-only</li></ul> <h2 id="spa-compatibility" tabindex="-1">SPA Compatibility <a class="header-anchor" href="#spa-compatibility" aria-label="Permalink to &quot;SPA Compatibility&quot;">​</a></h2> <p>For some of its CSS-only element toggling (for example <a href="./../components/modals.html">Modal</a> and <a href="./../experimentals/off-canvas.html">Off-Canvas</a>) Spectre CSS leverages the <code>id</code> and <code>:target</code> pseudo-selector in combination with location <code>#hash</code> changes.</p> <p>Whilst this works great for non-JavaScript pages, it can be problematic with JavaScript frameworks&#39; routing mechanisms, and either prevent Spectre CSS from working the way it should, or result in unpredictable routing behaviour.</p> <p>When using these components in JavaScript frameworks, you should prefer toggling visibility using the <code>active</code> class, and can remove the <code>id</code> and <code>href</code> links from the components.</p> <p>For example, rather than a CSS-only solution:</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- button trigger --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-primary&quot;</span><span style="color:#6F42C1;"> href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#modal-1&quot;</span><span style="color:#24292E;">&gt;Open Modal&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- modal container --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal&quot;</span><span style="color:#6F42C1;"> id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal-1&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#6F42C1;"> href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#close&quot;</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal-overlay&quot;</span><span style="color:#6F42C1;"> aria-label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Close&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span></code></pre></div><p>Use JavaScript explicitly to add or remove classes:</p> <div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">&lt;!-- button trigger --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-primary&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">   onclick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">document</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#032F62;">(&#39;modal-1&#39;).</span><span style="color:#24292E;">classList</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">add</span><span style="color:#032F62;">(&#39;active&#39;)&quot;</span><span style="color:#24292E;">&gt;Open Modal&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- modal container --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal&quot;</span><span style="color:#6F42C1;"> id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal-1&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">a</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal-overlay&quot;</span><span style="color:#6F42C1;"> aria-label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Close&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">     onclick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">document</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#032F62;">(&#39;modal-1&#39;).</span><span style="color:#24292E;">classList</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">remove</span><span style="color:#032F62;">(&#39;active&#39;)&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#6F42C1;"> class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modal-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span></code></pre></div><p>See Spectre&#39;s own <a href="https://github.com/spectre-org/spectre-docs/blob/main/docs/components/modals.md?plain=1#L15-L20" target="_blank" rel="noreferrer">Modal docs</a> for an example using Vue&#39;s <code>ref</code> and <code>@click</code> handlers.</p>`,35)]))}const h=a(n,[["render",t]]);export{m as __pageData,h as default};