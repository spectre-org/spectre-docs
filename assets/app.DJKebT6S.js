import{R as i}from"./chunks/theme.DiE3yesA.js";import{Q as o,Y as u,Z as l,$ as c,a0 as f,a1 as d,a2 as m,a3 as h,a4 as g,a5 as A,a6 as P,d as v,u as w,i as y,p as C,a7 as R,a8 as b,a9 as E,X as S}from"./chunks/framework.BD_IjLXb.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=w();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=$(),a=_();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function _(){return g(T)}function $(){let e=o,a;return A(t=>{let n=P(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};
