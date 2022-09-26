import{_ as U}from"./chunks/preload-helper-0ffe6af8.js";import{S as He,i as We,s as Xe,a as Ye,e as N,c as Qe,b as J,g as Y,t as V,d as Q,f as q,h as G,j as Ze,o as be,k as xe,l as et,m as tt,n as we,p as H,q as nt,r as rt,u as at,v as F,w as re,x as K,y as z,z as Ce}from"./chunks/index-57c1f8f9.js";import{g as Be,f as Ge,s as X,a as ve,b as ot,i as it}from"./chunks/singletons-931a59a3.js";function st(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function lt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(r,e){const t=new URL(r);for(const i of ct){let o=t[i];Object.defineProperty(t,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(i,o,d)=>d(r,o),ut(t),t}function ut(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;fe.delete(i)}return Re(r,e)};const fe=new Map;function dt(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${pt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:n,...l}=JSON.parse(d.textContent),u=d.getAttribute("data-ttl");return u&&fe.set(e,{body:n,init:l,ttl:1e3*Number(u)}),Promise.resolve(new Response(n,l))}return Re(r,t)}function ht(r,e){const t=fe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);fe.delete(r)}return Re(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function mt(r){const e=[],t=[];let i=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(gt).map((d,n,l)=>{const u=decodeURIComponent(d),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===l.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((S,D)=>{if(D%2){const v=_t.exec(S);if(!v)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,B,M,C]=v;return e.push(M),t.push(C),B?"(.*?)":"([^/]+?)"}return g&&S.includes(".")&&(i=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:t}}function gt(r){return!/^\([^)]+\)$/.test(r)}function wt(r,e,t,i){const o={};for(let d=0;d<e.length;d+=1){const n=e[d],l=t[d],u=r[d+1]||"";if(l){const h=i[l];if(!h)throw new Error(`Missing "${l}" param matcher`);if(!h(u))return}o[n]=u}return o}function yt(r,e,t,i){const o=new Set(e);return Object.entries(t).map(([l,[u,h,g]])=>{const{pattern:S,names:D,types:v}=mt(l),B={id:l,exec:M=>{const C=S.exec(M);if(C)return wt(C,D,v,i)},errors:[1,...g||[]].map(M=>r[M]),layouts:[0,...h||[]].map(n),leaf:d(u)};return B.errors.length=B.layouts.length=Math.max(B.errors.length,B.layouts.length),B});function d(l){const u=l<0;return u&&(l=~l),[u,r[l]]}function n(l){return l===void 0?l:[o.has(l),r[l]]}}function bt(r){let e,t,i;var o=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&re(e.$$.fragment,n),t=N()},m(n,l){e&&K(e,n,l),J(n,t,l),i=!0},p(n,l){const u={};if(l&4&&(u.data=n[2]),l&2&&(u.form=n[1]),o!==(o=n[0][0])){if(e){Y();const h=e;V(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(n)),F(e.$$.fragment),q(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else o&&e.$set(u)},i(n){i||(e&&q(e.$$.fragment,n),i=!0)},o(n){e&&V(e.$$.fragment,n),i=!1},d(n){n&&G(t),e&&z(e,n)}}}function vt(r){let e,t,i;var o=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Rt]},$$scope:{ctx:n}}}}return o&&(e=new o(d(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&re(e.$$.fragment,n),t=N()},m(n,l){e&&K(e,n,l),J(n,t,l),i=!0},p(n,l){const u={};if(l&4&&(u.data=n[2]),l&1051&&(u.$$scope={dirty:l,ctx:n}),o!==(o=n[0][0])){if(e){Y();const h=e;V(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(n)),F(e.$$.fragment),q(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else o&&e.$set(u)},i(n){i||(e&&q(e.$$.fragment,n),i=!0)},o(n){e&&V(e.$$.fragment,n),i=!1},d(n){n&&G(t),e&&z(e,n)}}}function Et(r){let e,t,i;var o=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&re(e.$$.fragment,n),t=N()},m(n,l){e&&K(e,n,l),J(n,t,l),i=!0},p(n,l){const u={};if(l&8&&(u.data=n[3]),l&2&&(u.form=n[1]),o!==(o=n[0][1])){if(e){Y();const h=e;V(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(n)),F(e.$$.fragment),q(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else o&&e.$set(u)},i(n){i||(e&&q(e.$$.fragment,n),i=!0)},o(n){e&&V(e.$$.fragment,n),i=!1},d(n){n&&G(t),e&&z(e,n)}}}function kt(r){let e,t,i;var o=r[0][1];function d(n){return{props:{data:n[3],$$slots:{default:[$t]},$$scope:{ctx:n}}}}return o&&(e=new o(d(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&re(e.$$.fragment,n),t=N()},m(n,l){e&&K(e,n,l),J(n,t,l),i=!0},p(n,l){const u={};if(l&8&&(u.data=n[3]),l&1043&&(u.$$scope={dirty:l,ctx:n}),o!==(o=n[0][1])){if(e){Y();const h=e;V(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(n)),F(e.$$.fragment),q(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else o&&e.$set(u)},i(n){i||(e&&q(e.$$.fragment,n),i=!0)},o(n){e&&V(e.$$.fragment,n),i=!1},d(n){n&&G(t),e&&z(e,n)}}}function $t(r){let e,t,i;var o=r[0][2];function d(n){return{props:{data:n[4],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&re(e.$$.fragment,n),t=N()},m(n,l){e&&K(e,n,l),J(n,t,l),i=!0},p(n,l){const u={};if(l&16&&(u.data=n[4]),l&2&&(u.form=n[1]),o!==(o=n[0][2])){if(e){Y();const h=e;V(h.$$.fragment,1,0,()=>{z(h,1)}),Q()}o?(e=new o(d(n)),F(e.$$.fragment),q(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else o&&e.$set(u)},i(n){i||(e&&q(e.$$.fragment,n),i=!0)},o(n){e&&V(e.$$.fragment,n),i=!1},d(n){n&&G(t),e&&z(e,n)}}}function Rt(r){let e,t,i,o;const d=[kt,Et],n=[];function l(u,h){return u[0][2]?0:1}return e=l(r),t=n[e]=d[e](r),{c(){t.c(),i=N()},l(u){t.l(u),i=N()},m(u,h){n[e].m(u,h),J(u,i,h),o=!0},p(u,h){let g=e;e=l(u),e===g?n[e].p(u,h):(Y(),V(n[g],1,1,()=>{n[g]=null}),Q(),t=n[e],t?t.p(u,h):(t=n[e]=d[e](u),t.c()),q(t,1),t.m(i.parentNode,i))},i(u){o||(q(t),o=!0)},o(u){V(t),o=!1},d(u){n[e].d(u),u&&G(i)}}}function Je(r){let e,t=r[6]&&Fe(r);return{c(){e=xe("div"),t&&t.c(),this.h()},l(i){e=et(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=tt(e);t&&t.l(o),o.forEach(G),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(i,o){J(i,e,o),t&&t.m(e,null)},p(i,o){i[6]?t?t.p(i,o):(t=Fe(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&G(e),t&&t.d()}}}function Fe(r){let e;return{c(){e=nt(r[7])},l(t){e=rt(t,r[7])},m(t,i){J(t,e,i)},p(t,i){i&128&&at(e,t[7])},d(t){t&&G(e)}}}function Lt(r){let e,t,i,o,d;const n=[vt,bt],l=[];function u(g,S){return g[0][1]?0:1}e=u(r),t=l[e]=n[e](r);let h=r[5]&&Je(r);return{c(){t.c(),i=Ye(),h&&h.c(),o=N()},l(g){t.l(g),i=Qe(g),h&&h.l(g),o=N()},m(g,S){l[e].m(g,S),J(g,i,S),h&&h.m(g,S),J(g,o,S),d=!0},p(g,[S]){let D=e;e=u(g),e===D?l[e].p(g,S):(Y(),V(l[D],1,1,()=>{l[D]=null}),Q(),t=l[e],t?t.p(g,S):(t=l[e]=n[e](g),t.c()),q(t,1),t.m(i.parentNode,i)),g[5]?h?h.p(g,S):(h=Je(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(q(t),d=!0)},o(g){V(t),d=!1},d(g){l[e].d(g),g&&G(i),h&&h.d(g),g&&G(o)}}}function St(r,e,t){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:l=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;Ze(i.page.notify);let g=!1,S=!1,D=null;return be(()=>{const v=i.page.subscribe(()=>{g&&(t(6,S=!0),t(7,D=document.title||"untitled page"))});return t(5,g=!0),v}),r.$$set=v=>{"stores"in v&&t(8,i=v.stores),"page"in v&&t(9,o=v.page),"components"in v&&t(0,d=v.components),"form"in v&&t(1,n=v.form),"data_0"in v&&t(2,l=v.data_0),"data_1"in v&&t(3,u=v.data_1),"data_2"in v&&t(4,h=v.data_2)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(o)},[d,n,l,u,h,g,S,D,i,o]}class Pt extends He{constructor(e){super(),We(this,e,St,Lt,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const It={},ue=[()=>U(()=>import("./chunks/0-b69a1fcd.js"),["chunks/0-b69a1fcd.js","chunks/_layout-5bead24a.js","components/pages/_layout.svelte-fd2b51b0.js","assets/_layout-31720baa.css","chunks/index-57c1f8f9.js","chunks/index-9678ea77.js","chunks/stores-8bdfa184.js","chunks/singletons-931a59a3.js","chunks/index-a3c86569.js"],import.meta.url),()=>U(()=>import("./chunks/1-e44a607c.js"),["chunks/1-e44a607c.js","components/pages/_error.svelte-0e4e99c8.js","assets/_error-5ba6092a.css","chunks/index-57c1f8f9.js","chunks/stores-8bdfa184.js","chunks/singletons-931a59a3.js","chunks/index-a3c86569.js"],import.meta.url),()=>U(()=>import("./chunks/2-e93beabb.js"),["chunks/2-e93beabb.js","chunks/_layout-a54b6abc.js"],import.meta.url),()=>U(()=>import("./chunks/3-79a5cc62.js"),["chunks/3-79a5cc62.js","components/pages/exit_page/_layout.svelte-8261eddd.js","assets/_layout-984ab1c7.css","chunks/index-57c1f8f9.js"],import.meta.url),()=>U(()=>import("./chunks/4-3637ec1e.js"),["chunks/4-3637ec1e.js","components/pages/_page.svelte-0a3745bb.js","assets/_page-c53f0b1d.css","chunks/index-57c1f8f9.js","chunks/index-9678ea77.js"],import.meta.url),()=>U(()=>import("./chunks/5-408fdbb4.js"),["chunks/5-408fdbb4.js","components/pages/curriculum_vitae/_page.svelte-3f00e49e.js","assets/_page-2052f221.css","chunks/index-57c1f8f9.js","chunks/preload-helper-0ffe6af8.js","chunks/index-9678ea77.js"],import.meta.url),()=>U(()=>import("./chunks/6-c453e884.js"),["chunks/6-c453e884.js","components/pages/exit_page/_page.svelte-306393f7.js","assets/_page-b150f600.css","chunks/index-57c1f8f9.js"],import.meta.url),()=>U(()=>import("./chunks/7-fa0c629d.js"),["chunks/7-fa0c629d.js","components/pages/posts/_page.svelte-0708e1a8.js","assets/_page-64855329.css","chunks/index-57c1f8f9.js","chunks/index-a3c86569.js"],import.meta.url),()=>U(()=>import("./chunks/8-ee63ced9.js"),["chunks/8-ee63ced9.js","components/pages/posts/ErlangDBG/_page.svelte-a4ee9bbd.js","assets/_page-4f638416.css","chunks/index-57c1f8f9.js"],import.meta.url),()=>U(()=>import("./chunks/9-993a2171.js"),["chunks/9-993a2171.js","components/pages/posts/jupyter/EmpiricalGrowthTesting/_page.svelte-7a1d99c7.js","assets/_page-d17f105b.css","chunks/preload-helper-0ffe6af8.js","chunks/index-57c1f8f9.js"],import.meta.url),()=>U(()=>import("./chunks/10-ef24f084.js"),["chunks/10-ef24f084.js","components/pages/posts/jupyter/GrowthProjections/_page.svelte-76e3d35c.js","assets/_page-d17f105b.css","chunks/preload-helper-0ffe6af8.js","chunks/index-57c1f8f9.js"],import.meta.url),()=>U(()=>import("./chunks/11-6a200dde.js"),["chunks/11-6a200dde.js","components/pages/posts/jupyter/Interpolation/_page.svelte-00dfe2ae.js","assets/_page-d17f105b.css","chunks/preload-helper-0ffe6af8.js","chunks/index-57c1f8f9.js"],import.meta.url),()=>U(()=>import("./chunks/12-a071c081.js"),["chunks/12-a071c081.js","components/pages/posts/jupyter/MatricesInErlang/_page.svelte-cd542e14.js","assets/_page-d17f105b.css","chunks/preload-helper-0ffe6af8.js","chunks/index-57c1f8f9.js"],import.meta.url)],Ot=[],At={"":[4],curriculum_vitae:[5,[2]],exit_page:[6,[3]],posts:[7],"posts/ErlangDBG":[8],"posts/jupyter/EmpiricalGrowthTesting":[9],"posts/jupyter/GrowthProjections":[10],"posts/jupyter/Interpolation":[11],"posts/jupyter/MatricesInErlang":[12]},jt={handleError:({error:r})=>{console.error(r)}};class Ee{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(e,t){this.status=e,this.location=t}}const Tt="/__data.js";async function Dt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,o])=>[i,await o])));return r}const Me="sveltekit:scroll",W="sveltekit:index",se=yt(ue,Ot,At,It),ke=ue[0],$e=ue[1];ke();$e();let ne={};try{ne=JSON.parse(sessionStorage[Me])}catch{}function ye(r){ne[r]=ve()}function Ut({target:r,base:e,trailing_slash:t}){var Ne;const i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},l=!1,u=!1,h=!0,g=!1,S=!1,D,v=(Ne=history.state)==null?void 0:Ne[W];v||(v=Date.now(),history.replaceState({...history.state,[W]:v},"",location.href));const B=ne[v];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let M=!1,C,Le,ae;async function Se(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),f=_e(a,!0);o=null,await Ie(f,a,[])}async function pe(a,{noscroll:f=!1,replaceState:p=!1,keepfocus:s=!1,state:c={}},_,m){return typeof a=="string"&&(a=new URL(a,Be(document))),me({url:a,scroll:f?ve():null,keepfocus:s,redirect_chain:_,details:{state:c,replaceState:p},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const f=_e(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:f.id,promise:je(f)},o.promise}async function Ie(a,f,p,s,c={},_){var k,E;Le=c;let m=a&&await je(a);if(m||(m=await Ue(f,null,te(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Le!==c)return!1;if(m.type==="redirect")if(p.length>10||p.includes(f.pathname))m=await oe({status:500,error:te(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return pe(new URL(m.location,f).href,{},[...p,f.pathname],c),!1;else((E=(k=m.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await X.updated.check()&&await ie(f);if(i.length=0,S=!1,g=!0,s&&s.details){const{details:y}=s,b=y.replaceState?0:1;y.state[W]=v+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",f)}if(o=null,u){n=m.state,m.props.page&&(m.props.page.url=f);const y=ce();D.$set(m.props),y()}else Oe(m);if(s){const{scroll:y,keepfocus:b}=s;if(!b){const R=document.body,P=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),P!==null?R.setAttribute("tabindex",P):R.removeAttribute("tabindex")}if(await Ce(),h){const R=f.hash&&document.getElementById(f.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();h=!0,m.props.page&&(C=m.props.page),_&&_(),g=!1}function Oe(a){var c,_;n=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),C=a.props.page;const p=ce();D=new Pt({target:r,props:{...a.props,stores:X},hydrate:!0}),p();const s={from:null,to:le("to",{params:n.params,routeId:(_=(c=n.route)==null?void 0:c.id)!=null?_:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(s)),u=!0}async function x({url:a,params:f,branch:p,status:s,error:c,route:_,form:m}){var P;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:f,branch:p,error:c,route:_},props:{components:k.map(I=>I.node.component)}};m!==void 0&&(E.props.form=m);let y={},b=!C;for(let I=0;I<k.length;I+=1){const j=k[I];y={...y,...j.data},(b||!n.branch.some(T=>T===j))&&(E.props[`data_${I}`]=y,b=b||Object.keys((P=j.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(C.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==c||m!==void 0||b){E.props.page={error:c,params:f,routeId:_&&_.id,status:s,url:a,form:m,data:b?y:C.data};const I=(j,T)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return E}async function de({loader:a,parent:f,url:p,params:s,routeId:c,server_data_node:_}){var y,b,R,P,I;let m=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let j=function(...L){for(const w of L){const{href:$}=new URL(w,p);k.dependencies.add($)}};const T={routeId:c,params:new Proxy(s,{get:(L,w)=>(k.params.add(w),L[w])}),data:(b=_==null?void 0:_.data)!=null?b:null,url:ft(p,()=>{k.url=!0}),async fetch(L,w){let $;L instanceof Request?($=L.url,w={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...w}):$=L;const A=new URL($,p).href;return j(A),u?ht(A,w):dt($,A,w)},setHeaders:()=>{},depends:j,parent(){return k.parent=!0,f()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(R=await E.shared.load.call(null,T))!=null?R:null,m=m?await Dt(m):null}return{node:E,loader:a,server:_,shared:(P=E.shared)!=null&&P.load?{type:"data",data:m,uses:k}:null,data:(I=m!=null?m:_==null?void 0:_.data)!=null?I:null}}function Ae(a,f,p,s){if(S)return!0;if(!p)return!1;if(p.parent&&f||p.url&&a)return!0;for(const c of p.params)if(s[c]!==n.params[c])return!0;for(const c of p.dependencies)if(i.some(_=>_(new URL(c))))return!0;return!1}function he(a,f){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function je({id:a,invalidating:f,url:p,params:s,route:c}){var L;if((o==null?void 0:o.id)===a)return o.promise;const{errors:_,layouts:m,leaf:k}=c,E=[...m,k];_.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const b=n.url?a!==n.url.pathname+n.url.search:!1,R=E.reduce((w,$,A)=>{var ee;const O=n.branch[A],Z=!!($!=null&&$[0])&&((O==null?void 0:O.loader)!==$[1]||Ae(b,w.some(Boolean),(ee=O.server)==null?void 0:ee.uses,s));return w.push(Z),w},[]);if(R.some(Boolean)){try{y=await ze(p,R)}catch(w){return oe({status:500,error:te(w,{url:p,params:s,routeId:c.id}),url:p,routeId:c.id})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let I=!1;const j=E.map(async(w,$)=>{var ee;if(!w)return;const A=n.branch[$],O=P==null?void 0:P[$];if((!O||O.type==="skip")&&w[1]===(A==null?void 0:A.loader)&&!Ae(b,I,(ee=A.shared)==null?void 0:ee.uses,s))return A;if(I=!0,(O==null?void 0:O.type)==="error")throw O;return de({loader:w[1],url:p,params:s,routeId:c.id,parent:async()=>{var qe;const Ve={};for(let ge=0;ge<$;ge+=1)Object.assign(Ve,(qe=await j[ge])==null?void 0:qe.data);return Ve},server_data_node:he(O===void 0&&w[0]?{type:"skip"}:O!=null?O:null,A==null?void 0:A.server)})});for(const w of j)w.catch(()=>{});const T=[];for(let w=0;w<E.length;w+=1)if(E[w])try{T.push(await j[w])}catch($){if($ instanceof Ke)return{type:"redirect",location:$.location};let A=500,O;P!=null&&P.includes($)?(A=(L=$.status)!=null?L:A,O=$.error):$ instanceof Ee?(A=$.status,O=$.body):O=te($,{params:s,url:p,routeId:c.id});const Z=await Te(w,T,_);return Z?await x({url:p,params:s,branch:T.slice(0,Z.idx).concat(Z.node),status:A,error:O,route:c}):await Ue(p,c.id,O,A)}else T.push(void 0);return await x({url:p,params:s,branch:T,status:200,error:null,route:c,form:f?void 0:null})}async function Te(a,f,p){for(;a--;)if(p[a]){let s=a;for(;!f[s];)s-=1;try{return{idx:s+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:f,url:p,routeId:s}){var y;const c={},_=await ke();let m=null;if(_.server)try{const b=await ze(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(y=b.nodes[0])!=null?y:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||l)&&await ie(p)}const k=await de({loader:ke,url:p,params:c,routeId:s,parent:()=>Promise.resolve({}),server_data_node:he(m)}),E={node:await $e(),loader:$e,shared:null,server:null,data:null};return await x({url:p,params:c,branch:[k,E],status:a,error:f,route:null})}function _e(a,f){if(De(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of se){const c=s.exec(p);if(c){const _=new URL(a.origin+st(a.pathname,t)+a.search+a.hash);return{id:_.pathname+_.search,invalidating:f,route:s,params:lt(c),url:_}}}}function De(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function me({url:a,scroll:f,keepfocus:p,redirect_chain:s,details:c,type:_,delta:m,nav_token:k,accepted:E,blocked:y}){var j,T,L,w;let b=!1;const R=_e(a,!1),P={from:le("from",{params:n.params,routeId:(T=(j=n.route)==null?void 0:j.id)!=null?T:null,url:n.url}),to:le("to",{params:(L=R==null?void 0:R.params)!=null?L:null,routeId:(w=R==null?void 0:R.route.id)!=null?w:null,url:a}),type:_};m!==void 0&&(P.delta=m);const I={...P,cancel:()=>{b=!0}};if(d.before_navigate.forEach($=>$(I)),b){y();return}ye(v),E(),u&&X.navigating.set(P),await Ie(R,a,s,{scroll:f,keepfocus:p,details:c},k,()=>{d.after_navigate.forEach($=>$(P)),X.navigating.set(null)})}async function Ue(a,f,p,s){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await oe({status:s,error:p,url:a,routeId:f}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const f=d.after_navigate.indexOf(a);d.after_navigate.splice(f,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const f=d.before_navigate.indexOf(a);d.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(g||!u)&&(h=!1)},goto:(a,f={})=>pe(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:f}=new URL(a,location.href);i.push(p=>p.href===f)}return Se()},invalidateAll:()=>(S=!0,Se()),prefetch:async a=>{const f=new URL(a,Be(document));await Pe(f)},prefetch_routes:async a=>{const p=(a?se.filter(s=>a.some(c=>s.exec(c))):se).map(s=>Promise.all([...s.layouts,s.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:s}=n;if(!s)return;const c=await Te(n.branch.length,p,s.errors);if(c){const _=await x({url:f,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:s});n=_.state;const m=ce();D.$set(_.props),m()}}else if(a.type==="redirect")pe(a.location,{},[]);else{const f={form:a.data,page:{...C,form:a.data,status:a.status}},p=ce();D.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,k;let c=!1;const _={from:le("from",{params:n.params,routeId:(k=(m=n.route)==null?void 0:m.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};d.before_navigate.forEach(E=>E(_)),c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(v);try{sessionStorage[Me]=JSON.stringify(ne)}catch{}}});const a=s=>{const{url:c,options:_}=Ge(s);if(c&&_.prefetch){if(De(c))return;Pe(c)}};let f;const p=s=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=s.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:c,url:_,options:m}=Ge(s);if(!c||!_)return;const k=c instanceof SVGAElement;if(!k&&!(_.protocol==="https:"||_.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||m.reload||(k?c.target.baseVal:c.target))return;const[y,b]=_.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){M=!0,ye(v),n.url=_,X.page.set({...C,url:_}),X.page.notify();return}me({url:_,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[W]===v)return;const c=s.state[W]-v;me({url:new URL(location.href),scroll:ne[s.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=s.state[W]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[W]:++v},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&X.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:s,routeId:c,data:_,form:m})=>{var y;l=!0;const k=new URL(location.href);let E;try{const b=p.map(async(R,P)=>{const I=_[P];return de({loader:ue[R],url:k,params:s,routeId:c,parent:async()=>{const j={};for(let T=0;T<P;T+=1)Object.assign(j,(await b[T]).data);return j},server_data_node:he(I)})});E=await x({url:k,params:s,branch:await Promise.all(b),status:a,error:f,form:m,route:(y=se.find(R=>R.id===c))!=null?y:null})}catch(b){if(b instanceof Ke){await ie(new URL(b.location,location.href));return}E=await oe({status:b instanceof Ee?b.status:500,error:te(b,{url:k,params:s,routeId:c}),url:k,routeId:c})}Oe(E)}}}let Nt=1;async function ze(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Tt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Nt++)),await U(()=>import(t.href),[],import.meta.url);const i=window.__sveltekit_data;return delete window.__sveltekit_data,i}function te(r,e){var t;return r instanceof Ee?r.body:(t=jt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Vt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const t of Vt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ce(){return()=>{}}async function Gt({env:r,hydrate:e,paths:t,target:i,trailing_slash:o}){ot(t);const d=Ut({target:i,base:t.base,trailing_slash:o});it({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Gt as start};
