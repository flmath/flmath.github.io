function v(){}const rt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function L(){return Object.create(null)}function E(t){t.forEach(J)}function K(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Tt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function lt(t){return Object.keys(t).length===0}function ct(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(ct(e,n))}function Bt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Gt(t){return t==null?"":t}const U=typeof window<"u";let ot=U?()=>window.performance.now():()=>Date.now(),T=U?t=>requestAnimationFrame(t):v;const y=new Set;function W(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&T(W)}function ut(t){let e;return y.size===0&&T(W),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let O=!1;function at(){O=!0}function ft(){O=!1}function _t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:_t(1,r,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function mt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=X("style");return pt(V(t),e),e.sheet}function pt(t,e){mt(t.head||t,e)}function yt(t,e){if(O){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){O&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Kt(){return z(" ")}function Qt(){return z("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Wt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:bt(t,e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,i,r=!1){wt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Z(t,e,n,i){return Y(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return Z(t,e,n,X)}function Xt(t,e,n){return Z(t,e,n,xt)}function vt(t,e){return Y(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Yt(t){return vt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const j=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:ht(e),rules:{}};return j.set(t,n),n}function At(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let h=0;h<=1;h+=l){const N=e+(n-e)*u(h);c+=h*100+`%{${s(N,1-N)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${o}`,_=V(t),{stylesheet:m,rules:d}=j.get(_)||kt(_,t);d[a]||(d[a]=!0,m.insertRule(`@keyframes ${a} ${f}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){T(()=>{M||(j.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),j.clear())})}let w;function $(t){w=t}function tt(){if(!w)throw new Error("Function called outside component initialization");return w}function ee(t){tt().$$.on_mount.push(t)}function ne(t){tt().$$.after_update.push(t)}const b=[],H=[],S=[],I=[],et=Promise.resolve();let D=!1;function nt(){D||(D=!0,et.then(it))}function ie(){return nt(),et}function R(t){S.push(t)}const q=new Set;let A=0;function it(){const t=w;do{for(;A<b.length;){const e=b[A];A++,$(e),Ct(e.$$)}for($(null),b.length=0,A=0;H.length;)H.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while(b.length);for(;I.length;)I.pop()();D=!1,q.clear(),$(t)}function Ct(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let x;function jt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function G(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function re(){p={r:0,c:[],p}}function se(){p.r||E(p.c),p=p.p}function Mt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function ce(t,e,n){let i=e(t,n),r=!1,u,s,o=0;function l(){u&&F(t,u)}function c(){const{delay:a=0,duration:_=300,easing:m=rt,tick:d=v,css:g}=i||Rt;g&&(u=At(t,0,1,_,a,m,g,o++)),d(0,1);const h=ot()+a,N=h+_;s&&s.abort(),r=!0,R(()=>G(t,!0,"start")),s=ut(P=>{if(r){if(P>=N)return d(1,0),G(t,!0,"end"),l(),r=!1;if(P>=h){const B=m((P-h)/_);d(B,1-B)}}return r})}let f=!1;return{start(){f||(f=!0,F(t),K(i)?(i=i(),jt().then(c)):c())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function oe(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||R(()=>{const l=u.map(J).filter(K);s?s.push(...l):E(l),t.$$.on_mount=[]}),o.forEach(R)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,i,r,u,s,o=[-1]){const l=w;$(t);const c=t.$$={fragment:null,ctx:null,props:u,update:v,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:L(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...m)=>{const d=m.length?m[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),f&&qt(t,a)),_}):[],c.update(),f=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){at();const a=$t(e.target);c.fragment&&c.fragment.l(a),a.forEach(gt)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),ft(),it()}$(l)}class fe{$destroy(){Pt(this,1),this.$destroy=v}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{v as A,xt as B,Xt as C,yt as D,rt as E,Bt as F,Gt as G,Ft as H,Ht as I,Lt as J,st as K,It as L,R as M,ce as N,Tt as O,Ut as P,E as Q,H as R,fe as S,zt as T,Wt as U,Kt as a,Jt as b,Yt as c,se as d,Qt as e,Mt as f,re as g,gt as h,ae as i,ne as j,X as k,Vt as l,$t as m,bt as n,ee as o,te as p,z as q,vt as r,Dt as s,le as t,Zt as u,oe as v,ue as w,Ot as x,Pt as y,ie as z};
