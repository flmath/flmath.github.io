function N(){}const st=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function b(t){t.forEach(J)}function K(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Tt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ct(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Bt(t,e,n,r){if(t){const s=Q(t,e,n,r);return t[0](s)}}function Q(t,e,n,r){return t[1]&&r?lt(n.ctx.slice(),t[1](r(e))):n.ctx}function Lt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)u[c]=e.dirty[c]|s[c];return u}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,u){if(s){const i=Q(e,n,r,u);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Gt(t){return t==null?"":t}const W=typeof window<"u";let ut=W?()=>window.performance.now():()=>Date.now(),B=W?t=>requestAnimationFrame(t):N;const x=new Set;function U(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&B(U)}function at(t){let e;return x.size===0&&B(U),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function ft(){P=!0}function _t(){P=!1}function dt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:dt(1,s,a=>e[n[a]].claim_order,o))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const u=[],i=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);c>=l;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);u.reverse(),i.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<i.length;l++){for(;o<u.length&&i[l].claim_order>=u[o].claim_order;)o++;const _=o<u.length?u[o]:null;t.insertBefore(i[l],_)}}function mt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=X("style");return yt(V(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(P){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){P&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Kt(){return L(" ")}function Qt(){return L("")}function Wt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,r,s=!1){wt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Z(t,e,n,r){return Y(t,s=>s.nodeName===e,s=>{const u=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||u.push(c.name)}u.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Vt(t,e,n){return Z(t,e,n,X)}function Xt(t,e,n){return Z(t,e,n,bt)}function vt(t,e){return Y(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>L(e),!0)}function Yt(t){return vt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const M=new Map;let R=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:pt(e),rules:{}};return M.set(t,n),n}function H(t,e,n,r,s,u,i,c=0){const l=16.666/r;let o=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*u(p);o+=p*100+`%{${i(g,1-g)}}
`}const _=o+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Nt(_)}_${c}`,a=V(t),{stylesheet:d,rules:h}=M.get(a)||At(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,R+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),R-=s,R||kt())}function kt(){B(()=>{R||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let E;function v(t){E=t}function tt(){if(!E)throw new Error("Function called outside component initialization");return E}function ee(t){tt().$$.on_mount.push(t)}function ne(t){tt().$$.after_update.push(t)}const w=[],I=[],C=[],G=[],et=Promise.resolve();let z=!1;function nt(){z||(z=!0,et.then(it))}function ie(){return nt(),et}function O(t){C.push(t)}const D=new Set;let k=0;function it(){const t=E;do{for(;k<w.length;){const e=w[k];k++,v(e),Ct(e.$$)}for(v(null),w.length=0,k=0;I.length;)I.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];D.has(n)||(D.add(n),n())}C.length=0}while(w.length);for(;G.length;)G.pop()();z=!1,D.clear(),v(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let $;function jt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function T(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const j=new Set;let m;function re(){m={r:0,c:[],p:m}}function se(){m.r||b(m.c),m=m.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function le(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),m.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Rt={duration:0};function ce(t,e,n,r){let s=e(t,n),u=r?0:1,i=null,c=null,l=null;function o(){l&&St(t,l)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=st,tick:p=N,css:g}=s||Rt,q={start:ut()+d,b:a};a||(q.group=m,m.r+=1),i||c?c=q:(g&&(o(),l=H(t,u,a,h,d,y,g)),a&&p(0,1),i=_(q,h),O(()=>T(t,a,"start")),at(A=>{if(c&&A>c.start&&(i=_(c,h),c=null,T(t,i.b,"start"),g&&(o(),l=H(t,u,i.b,i.duration,0,y,s.css))),i){if(A>=i.end)p(u=i.b,1-u),T(t,i.b,"end"),c||(i.b?o():--i.group.r||b(i.group.c)),i=null;else if(A>=i.start){const rt=A-i.start;u=i.a+i.d*y(rt/i.duration),p(u,1-u)}}return!!(i||c)}))}return{run(a){K(s)?jt().then(()=>{s=s(),f(a)}):f(a)},end(){o(),i=c=null}}}function oe(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function Ot(t,e,n,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||O(()=>{const l=u.map(J).filter(K);i?i.push(...l):b(l),t.$$.on_mount=[]}),c.forEach(O)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,r,s,u,i,c=[-1]){const l=E;v(t);const o=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),_&&qt(t,f)),a}):[],o.update(),_=!0,b(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){ft();const f=$t(e.target);o.fragment&&o.fragment.l(f),f.forEach(xt)}else o.fragment&&o.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),_t(),it()}v(l)}class fe{$destroy(){Pt(this,1),this.$destroy=N}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{N as A,Bt as B,Gt as C,gt as D,Ft as E,Ht as F,Lt as G,lt as H,It as I,bt as J,Xt as K,Tt as L,st as M,Wt as N,O,ce as P,b as Q,I as R,fe as S,zt as T,Kt as a,Jt as b,Yt as c,se as d,Qt as e,Mt as f,re as g,xt as h,ae as i,ne as j,X as k,Vt as l,$t as m,Ut as n,ee as o,te as p,L as q,vt as r,Dt as s,le as t,Zt as u,oe as v,ue as w,Ot as x,Pt as y,ie as z};
