var Te=Object.defineProperty;var Ce=(a,e,n)=>e in a?Te(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var ce=(a,e,n)=>(Ce(a,typeof e!="symbol"?e+"":e,n),n);import{S as Ne,i as Ve,s as qe,a as ze,e as D,c as Be,b as V,g as F,t as I,d as G,f as j,h as N,j as Ke,o as pe,k as Je,l as We,m as He,n as fe,p as K,q as Fe,r as Ge,u as Me,v as q,w as ee,x as z,y as B,z as Re}from"./chunks/index-c530ad4b.js";import{g as Se,f as Pe,a as Oe,s as H,b as he,i as Ye,c as Xe}from"./chunks/singletons-1ca32662.js";import"./chunks/index-73784d98.js";class re{constructor(e,n){ce(this,"name","HttpError");ce(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ae{constructor(e,n){this.status=e,this.location=n}}function Ze(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Qe(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}class xe extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function et(a){let e=5381,n=a.length;if(typeof a=="string")for(;n;)e=e*33^a.charCodeAt(--n);else for(;n;)e=e*33^a[--n];return(e>>>0).toString(36)}const _e=window.fetch;function tt(a,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${et(e.body)}"]`);const r=document.querySelector(i);if(r&&r.textContent){const{body:u,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(u,t))}return _e(a,e)}const nt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function rt(a){const e=[],n=[];let i=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,o)=>{const d=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(p)return e.push(p[1]),n.push(p[2]),"(?:/(.*))?";const m=t===o.length-1;return d&&"/"+d.split(/\[(.+?)\]/).map((v,O)=>{if(O%2){const b=nt.exec(v);if(!b)throw new Error(`Invalid param: ${v}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,Y,X]=b;return e.push(Y),n.push(X),A?"(.*?)":"([^/]+?)"}return m&&v.includes(".")&&(i=!1),v.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:n}}function at(a,e,n,i){const r={};for(let u=0;u<e.length;u+=1){const t=e[u],o=n[u],d=a[u+1]||"";if(o){const p=i[o];if(!p)throw new Error(`Missing "${o}" param matcher`);if(!p(d))return}r[t]=d}return r}function st(a,e,n){return Object.entries(e).map(([i,[r,u,t,o]])=>{const{pattern:d,names:p,types:m}=rt(i),v={id:i,exec:O=>{const b=d.exec(O);if(b)return at(b,p,m,n)},errors:r.map(O=>a[O]),layouts:u.map(O=>a[O]),leaf:a[t],uses_server_data:!!o};return v.errors.length=v.layouts.length=Math.max(v.errors.length,v.layouts.length),v})}function it(a,e){return new re(a,e)}function ot(a){let e,n,i;var r=a[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return r&&(e=new r(u(a))),{c(){e&&q(e.$$.fragment),n=D()},l(t){e&&ee(e.$$.fragment,t),n=D()},m(t,o){e&&z(e,t,o),V(t,n,o),i=!0},p(t,o){const d={};if(o&2&&(d.data=t[1]),o&16&&(d.errors=t[4]),r!==(r=t[0][0])){if(e){F();const p=e;I(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),q(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function lt(a){let e,n,i;var r=a[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[dt]},$$scope:{ctx:t}}}}return r&&(e=new r(u(a))),{c(){e&&q(e.$$.fragment),n=D()},l(t){e&&ee(e.$$.fragment,t),n=D()},m(t,o){e&&z(e,t,o),V(t,n,o),i=!0},p(t,o){const d={};if(o&2&&(d.data=t[1]),o&1053&&(d.$$scope={dirty:o,ctx:t}),r!==(r=t[0][0])){if(e){F();const p=e;I(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),q(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function ct(a){let e,n,i;var r=a[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return r&&(e=new r(u(a))),{c(){e&&q(e.$$.fragment),n=D()},l(t){e&&ee(e.$$.fragment,t),n=D()},m(t,o){e&&z(e,t,o),V(t,n,o),i=!0},p(t,o){const d={};if(o&4&&(d.data=t[2]),o&16&&(d.errors=t[4]),r!==(r=t[0][1])){if(e){F();const p=e;I(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),q(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function ft(a){let e,n,i;var r=a[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[ut]},$$scope:{ctx:t}}}}return r&&(e=new r(u(a))),{c(){e&&q(e.$$.fragment),n=D()},l(t){e&&ee(e.$$.fragment,t),n=D()},m(t,o){e&&z(e,t,o),V(t,n,o),i=!0},p(t,o){const d={};if(o&4&&(d.data=t[2]),o&1033&&(d.$$scope={dirty:o,ctx:t}),r!==(r=t[0][1])){if(e){F();const p=e;I(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),q(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function ut(a){let e,n,i;var r=a[0][2];function u(t){return{props:{data:t[3]}}}return r&&(e=new r(u(a))),{c(){e&&q(e.$$.fragment),n=D()},l(t){e&&ee(e.$$.fragment,t),n=D()},m(t,o){e&&z(e,t,o),V(t,n,o),i=!0},p(t,o){const d={};if(o&8&&(d.data=t[3]),r!==(r=t[0][2])){if(e){F();const p=e;I(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),q(e.$$.fragment),j(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&I(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function dt(a){let e,n,i,r;const u=[ft,ct],t=[];function o(d,p){return d[0][2]?0:1}return e=o(a),n=t[e]=u[e](a),{c(){n.c(),i=D()},l(d){n.l(d),i=D()},m(d,p){t[e].m(d,p),V(d,i,p),r=!0},p(d,p){let m=e;e=o(d),e===m?t[e].p(d,p):(F(),I(t[m],1,1,()=>{t[m]=null}),G(),n=t[e],n?n.p(d,p):(n=t[e]=u[e](d),n.c()),j(n,1),n.m(i.parentNode,i))},i(d){r||(j(n),r=!0)},o(d){I(n),r=!1},d(d){t[e].d(d),d&&N(i)}}}function Ue(a){let e,n=a[6]&&De(a);return{c(){e=Je("div"),n&&n.c(),this.h()},l(i){e=We(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=He(e);n&&n.l(r),r.forEach(N),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(i,r){V(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=De(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&N(e),n&&n.d()}}}function De(a){let e;return{c(){e=Fe(a[7])},l(n){e=Ge(n,a[7])},m(n,i){V(n,e,i)},p(n,i){i&128&&Me(e,n[7])},d(n){n&&N(e)}}}function pt(a){let e,n,i,r,u;const t=[lt,ot],o=[];function d(m,v){return m[0][1]?0:1}e=d(a),n=o[e]=t[e](a);let p=a[5]&&Ue(a);return{c(){n.c(),i=ze(),p&&p.c(),r=D()},l(m){n.l(m),i=Be(m),p&&p.l(m),r=D()},m(m,v){o[e].m(m,v),V(m,i,v),p&&p.m(m,v),V(m,r,v),u=!0},p(m,[v]){let O=e;e=d(m),e===O?o[e].p(m,v):(F(),I(o[O],1,1,()=>{o[O]=null}),G(),n=o[e],n?n.p(m,v):(n=o[e]=t[e](m),n.c()),j(n,1),n.m(i.parentNode,i)),m[5]?p?p.p(m,v):(p=Ue(m),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(m){u||(j(n),u=!0)},o(m){I(n),u=!1},d(m){o[e].d(m),m&&N(i),p&&p.d(m),m&&N(r)}}}function ht(a,e,n){let{stores:i}=e,{page:r}=e,{components:u}=e,{data_0:t=null}=e,{data_1:o=null}=e,{data_2:d=null}=e,{errors:p}=e;Ke(i.page.notify);let m=!1,v=!1,O=null;return pe(()=>{const b=i.page.subscribe(()=>{m&&(n(6,v=!0),n(7,O=document.title||"untitled page"))});return n(5,m=!0),b}),a.$$set=b=>{"stores"in b&&n(8,i=b.stores),"page"in b&&n(9,r=b.page),"components"in b&&n(0,u=b.components),"data_0"in b&&n(1,t=b.data_0),"data_1"in b&&n(2,o=b.data_1),"data_2"in b&&n(3,d=b.data_2),"errors"in b&&n(4,p=b.errors)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[u,t,o,d,p,m,v,O,i,r]}class _t extends Ne{constructor(e){super(),Ve(this,e,ht,pt,qe,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const mt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),gt=function(a,e){return new URL(a,e).href},Ie={},J=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=gt(r,i),r in Ie)return;Ie[r]=!0;const u=r.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=u?"stylesheet":mt,u||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),u)return new Promise((d,p)=>{o.addEventListener("load",d),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},wt={},ae=[()=>J(()=>import("./chunks/0-cbe8d794.js"),["chunks/0-cbe8d794.js","components/pages/_layout.svelte-2d95d5c3.js","assets/+layout-11d4b148.css","chunks/index-c530ad4b.js","chunks/index-2d83249c.js"],import.meta.url),()=>J(()=>import("./chunks/1-ccf9c920.js"),["chunks/1-ccf9c920.js","components/error.svelte-b8924eee.js","chunks/index-c530ad4b.js","chunks/singletons-1ca32662.js","chunks/index-73784d98.js"],import.meta.url),()=>J(()=>import("./chunks/2-8c5d1714.js"),["chunks/2-8c5d1714.js","components/pages/_page.svelte-da15d6be.js","assets/+page-58c8194e.css","chunks/index-c530ad4b.js","chunks/index-2d83249c.js"],import.meta.url),()=>J(()=>import("./chunks/3-3d394fe1.js"),["chunks/3-3d394fe1.js","components/pages/curriculum_vitae/_page.svelte-1717a701.js","assets/+page-e37dbdb1.css","chunks/index-c530ad4b.js"],import.meta.url),()=>J(()=>import("./chunks/4-65fc9351.js"),["chunks/4-65fc9351.js","components/pages/exit_page/_page.svelte-e86ddb42.js","assets/+page-5dcdba52.css","chunks/index-c530ad4b.js"],import.meta.url),()=>J(()=>import("./chunks/5-11af5a40.js"),["chunks/5-11af5a40.js","components/pages/posts/_page.svelte-1eb8fa3d.js","assets/+page-21da3d60.css","chunks/index-c530ad4b.js","chunks/index-73784d98.js"],import.meta.url),()=>J(()=>import("./chunks/6-ab2e28d3.js"),["chunks/6-ab2e28d3.js","components/pages/posts/ErlangDBG/_page.svelte-b8914310.js","chunks/index-c530ad4b.js"],import.meta.url),()=>J(()=>import("./chunks/7-eb726b2e.js"),["chunks/7-eb726b2e.js","components/pages/posts/interpolation/_page.svelte-3e93bc43.js","chunks/index-c530ad4b.js"],import.meta.url)],bt={"":[[1],[0],2],curriculum_vitae:[[1],[0],3],exit_page:[[1],[0],4],posts:[[1],[0],5],"posts/ErlangDBG":[[1],[0],6],"posts/interpolation":[[1],[0],7]},je="sveltekit:scroll",W="sveltekit:index",ue=st(ae,bt,wt),vt=ae[0](),yt=ae[1]();let x={};try{x=JSON.parse(sessionStorage[je])}catch{}function de(a){x[a]=he()}function kt({target:a,base:e,trailing_slash:n}){var Ee;const i=[],r={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},o=!1,d=!0,p=!1,m=1,v=null,O,b=!0,A=(Ee=history.state)==null?void 0:Ee[W];A||(A=Date.now(),history.replaceState({...history.state,[W]:A},"",location.href));const Y=x[A];Y&&(history.scrollRestoration="manual",scrollTo(Y.x,Y.y));let X=!1,se,me;async function ge(s,{noscroll:h=!1,replaceState:g=!1,keepfocus:l=!1,state:c={}},$){if(typeof s=="string"&&(s=new URL(s,Se(document))),b)return oe({url:s,scroll:h?he():null,keepfocus:l,redirect_chain:$,details:{state:c,replaceState:g},accepted:()=>{},blocked:()=>{}});await Z(s)}async function we(s){const h=ke(s);if(!h)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=ye(h),r.id=h.id,r.promise}async function be(s,h,g,l){var y,P,R;const c=ke(s),$=me={};let _=c&&await ye(c);if(!_&&s.origin===location.origin&&s.pathname===location.pathname&&(_=await ne({status:404,error:new Error(`Not found: ${s.pathname}`),url:s,routeId:null})),!_)return await Z(s),!1;if(s=(c==null?void 0:c.url)||s,me!==$)return!1;if(i.length=0,_.type==="redirect")if(h.length>10||h.includes(s.pathname))_=await ne({status:500,error:new Error("Redirect loop"),url:s,routeId:null});else return b?ge(new URL(_.location,s).href,{},[...h,s.pathname]):await Z(new URL(_.location,location.href)),!1;else((P=(y=_.props)==null?void 0:y.page)==null?void 0:P.status)>=400&&await H.updated.check()&&await Z(s);if(p=!0,g&&g.details){const{details:S}=g,E=S.replaceState?0:1;S.state[W]=A+=E,history[S.replaceState?"replaceState":"pushState"](S.state,"",s)}if(o?(t=_.state,_.props.page&&(_.props.page.url=s),O.$set(_.props)):ve(_),g){const{scroll:S,keepfocus:E}=g;if(!E){const w=document.body,f=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var k;(k=getSelection())==null||k.removeAllRanges()}),f!==null?w.setAttribute("tabindex",f):w.removeAttribute("tabindex")}if(await Re(),d){const w=s.hash&&document.getElementById(s.hash.slice(1));S?scrollTo(S.x,S.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Re();r.promise=null,r.id=null,d=!0,_.props.page&&(se=_.props.page);const L=_.state.branch[_.state.branch.length-1];b=((R=L==null?void 0:L.node.shared)==null?void 0:R.router)!==!1,l&&l(),p=!1}function ve(s){t=s.state;const h=document.querySelector("style[data-sveltekit]");if(h&&h.remove(),se=s.props.page,O=new _t({target:a,props:{...s.props,stores:H},hydrate:!0}),b){const g={from:null,to:new URL(location.href)};u.after_navigate.forEach(l=>l(g))}o=!0}async function te({url:s,params:h,branch:g,status:l,error:c,routeId:$,validation_errors:_}){const L=g.filter(Boolean),y={type:"loaded",state:{url:s,params:h,branch:g,error:c,session_id:m},props:{components:L.map(E=>E.node.component),errors:_}};let P={},R=!1;for(let E=0;E<L.length;E+=1)P={...P,...L[E].data},(R||!t.branch.some(w=>w===L[E]))&&(y.props[`data_${E}`]=P,R=!0);if(!t.url||s.href!==t.url.href||t.error!==c||R){y.props.page={error:c,params:h,routeId:$,status:l,url:s,data:P};const E=(w,f)=>{Object.defineProperty(y.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${f}`)}})};E("origin","origin"),E("path","pathname"),E("query","searchParams")}return y}async function ie({node:s,parent:h,url:g,params:l,routeId:c,server_data:$}){var S,E;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function L(...w){for(const f of w){const{href:k}=new URL(f,g);_.dependencies.add(k)}}let y=null;s.server&&(_.dependencies.add(g.href),_.url=!0);const P={};for(const w in l)Object.defineProperty(P,w,{get(){return _.params.add(w),l[w]},enumerable:!0});const R=new xe(g);if((S=s.shared)!=null&&S.load){const w={routeId:c,params:P,data:$,get url(){return _.url=!0,R},async fetch(f,k){let U;typeof f=="string"?U=f:(U=f.url,k={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...k});const T=new URL(U,g).href;return L(T),o?_e(T,k):tt(U,k)},setHeaders:()=>{},depends:L,get parent(){return _.parent=!0,h}};Object.defineProperties(w,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),y=(E=await s.shared.load.call(null,w))!=null?E:null}return{node:s,data:y||$,uses:_}}async function ye({id:s,url:h,params:g,route:l}){if(r.id===s&&r.promise)return r.promise;const{errors:c,layouts:$,leaf:_}=l,L=t.url&&{url:s!==t.url.pathname+t.url.search,params:Object.keys(g).filter(f=>t.params[f]!==g[f])};[...c,...$,_].forEach(f=>f==null?void 0:f().catch(()=>{}));const y=[...$,_],P=[];for(let f=0;f<y.length;f++)if(!y[f])P.push(!1);else{const k=t.branch[f],U=!k||L.url&&k.uses.url||L.params.some(T=>k.uses.params.has(T))||Array.from(k.uses.dependencies).some(T=>i.some(Q=>Q(T)))||k.uses.parent&&P.includes(!0);P.push(U)}let R=null;if(l.uses_server_data){try{const f=await _e(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`);if(R=await f.json(),!f.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const S=R==null?void 0:R.nodes,E=y.map(async(f,k)=>Promise.resolve().then(async()=>{var M;if(!f)return;const U=await f(),T=t.branch[k];if(P[k]||!T||U!==T.node){const C=S==null?void 0:S[k];if(C!=null&&C.status)throw it(C.status,C.message);if(C!=null&&C.error)throw C.error;return await ie({node:U,url:h,params:g,routeId:l.id,parent:async()=>{var Le;const $e={};for(let le=0;le<k;le+=1)Object.assign($e,(Le=await E[le])==null?void 0:Le.data);return $e},server_data:(M=C==null?void 0:C.data)!=null?M:null})}else return T}));for(const f of E)f.catch(()=>{});const w=[];for(let f=0;f<y.length;f+=1)if(y[f])try{w.push(await E[f])}catch(k){const U=k;if(U instanceof Ae)return{type:"redirect",location:U.location};const T=k instanceof re?k.status:500;for(;f--;)if(c[f]){let Q,M=f;for(;!w[M];)M-=1;try{return Q={node:await c[f](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await te({url:h,params:g,branch:w.slice(0,M+1).concat(Q),status:T,error:U,routeId:l.id})}catch{continue}}return await ne({status:T,error:U,url:h,routeId:l.id})}else w.push(void 0);return await te({url:h,params:g,branch:w,status:200,error:null,routeId:l.id})}async function ne({status:s,error:h,url:g,routeId:l}){const c={},$=await ie({node:await vt,url:g,params:c,routeId:l,parent:()=>Promise.resolve({}),server_data:null}),_={node:await yt,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await te({url:g,params:c,branch:[$,_],status:s,error:h,routeId:l})}function ke(s){if(s.origin!==location.origin||!s.pathname.startsWith(e))return;const h=decodeURI(s.pathname.slice(e.length)||"/");for(const g of ue){const l=g.exec(h);if(l){const c=new URL(s.origin+Ze(s.pathname,n)+s.search+s.hash);return{id:c.pathname+c.search,route:g,params:Qe(l),url:c}}}}async function oe({url:s,scroll:h,keepfocus:g,redirect_chain:l,details:c,accepted:$,blocked:_}){const L=t.url;let y=!1;const P={from:L,to:s,cancel:()=>y=!0};if(u.before_navigate.forEach(R=>R(P)),y){_();return}de(A),$(),o&&H.navigating.set({from:t.url,to:s}),await be(s,l,{scroll:h,keepfocus:g,details:c},()=>{const R={from:L,to:s};u.after_navigate.forEach(S=>S(R)),H.navigating.set(null)})}function Z(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{pe(()=>(u.after_navigate.push(s),()=>{const h=u.after_navigate.indexOf(s);u.after_navigate.splice(h,1)}))},before_navigate:s=>{pe(()=>(u.before_navigate.push(s),()=>{const h=u.before_navigate.indexOf(s);u.before_navigate.splice(h,1)}))},disable_scroll_handling:()=>{(p||!o)&&(d=!1)},goto:(s,h={})=>ge(s,h,[]),invalidate:s=>{if(s===void 0){for(const h of t.branch)h==null||h.uses.dependencies.add("");i.push(()=>!0)}else if(typeof s=="function")i.push(s);else{const{href:h}=new URL(s,location.href);i.push(g=>g===h)}return v||(v=Promise.resolve().then(async()=>{await be(new URL(location.href),[]),v=null})),v},prefetch:async s=>{const h=new URL(s,Se(document));await we(h)},prefetch_routes:async s=>{const g=(s?ue.filter(l=>s.some(c=>l.exec(c))):ue).map(l=>Promise.all([...l.layouts,l.leaf].map(c=>c==null?void 0:c())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{let c=!1;const $={from:t.url,to:null,cancel:()=>c=!0};u.before_navigate.forEach(_=>_($)),c?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(A);try{sessionStorage[je]=JSON.stringify(x)}catch{}}});const s=l=>{const c=Pe(l);c&&c.href&&c.hasAttribute("sveltekit:prefetch")&&we(Oe(c))};let h;const g=l=>{clearTimeout(h),h=setTimeout(()=>{var c;(c=l.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",l=>{if(!b||l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const c=Pe(l);if(!c||!c.href)return;const $=c instanceof SVGAElement,_=Oe(c);if(!$&&!(_.protocol==="https:"||_.protocol==="http:"))return;const L=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||L.includes("external")||c.hasAttribute("sveltekit:reload")||($?c.target.baseVal:c.target))return;const[y,P]=_.href.split("#");if(P!==void 0&&y===location.href.split("#")[0]){X=!0,de(A),H.page.set({...se,url:_}),H.page.notify();return}oe({url:_,scroll:c.hasAttribute("sveltekit:noscroll")?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault()})}),addEventListener("popstate",l=>{if(l.state&&b){if(l.state[W]===A)return;oe({url:new URL(location.href),scroll:x[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=l.state[W]},blocked:()=>{const c=A-l.state[W];history.go(c)}})}}),addEventListener("hashchange",()=>{X&&(X=!1,history.replaceState({...history.state,[W]:++A},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&H.navigating.set(null)})},_hydrate:async({status:s,error:h,node_ids:g,params:l,routeId:c})=>{const $=new URL(location.href);let _;try{const L=(S,E)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):E},y=L("server_data",[]),P=L("validation_errors",void 0),R=g.map(async(S,E)=>{var w;return ie({node:await ae[S](),url:$,params:l,routeId:c,parent:async()=>{const f={};for(let k=0;k<E;k+=1)Object.assign(f,(await R[k]).data);return f},server_data:(w=y[E])!=null?w:null})});_=await te({url:$,params:l,branch:await Promise.all(R),status:s,error:h!=null&&h.__is_http_error?new re(h.status,h.message):h,validation_errors:P,routeId:c})}catch(L){const y=L;if(y instanceof Ae){await Z(new URL(L.location,location.href));return}_=await ne({status:y instanceof re?y.status:500,error:y,url:$,routeId:c})}ve(_)}}}function St(a){}async function Pt({paths:a,target:e,route:n,spa:i,trailing_slash:r,hydrate:u}){const t=kt({target:e,base:a.base,trailing_slash:r});Ye({client:t}),Xe(a),u&&await t._hydrate(u),n&&(i&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{St as set_public_env,Pt as start};
