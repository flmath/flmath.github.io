function N(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(B)}function H(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(G(n,e))}function ot(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,s){if(r){const c=L(n,e,i,s);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){return t==null?"":t}let w=!1;function J(){w=!0}function K(){w=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:W(1,r,y=>n[e[y]].claim_order,u))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const s=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(c[l],f)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){Z(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function O(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function gt(t,n,e){return O(t,n,e,V)}function xt(t,n,e){return O(t,n,e,X)}function tt(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function bt(t){return tt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function P(){if(!m)throw new Error("Function called outside component initialization");return m}function vt(t){P().$$.on_mount.push(t)}function Et(t){P().$$.after_update.push(t)}const d=[],M=[],x=[],k=[],q=Promise.resolve();let v=!1;function z(){v||(v=!0,q.then(D))}function Nt(){return z(),q}function E(t){x.push(t)}const $=new Set;let g=0;function D(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),nt(n.$$)}for(h(null),d.length=0,g=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];$.has(e)||($.add(e),e())}x.length=0}while(d.length);for(;k.length;)k.pop()();v=!1,$.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const b=new Set;let _;function St(){_={r:0,c:[],p:_}}function At(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&(b.delete(t),t.i(n))}function jt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ct(t){t&&t.c()}function Mt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:c,after_update:o}=t.$$;r&&r.m(n,e),i||E(()=>{const l=s.map(B).filter(H);c?c.push(...l):p(l),t.$$.on_mount=[]}),o.forEach(E)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function kt(t,n,e,i,r,s,c,o=[-1]){const l=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:N,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...A)=>{const j=A.length?A[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&ct(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const a=Y(n.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),D()}h(l)}class Bt{$destroy(){rt(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{N as A,ot as B,X as C,xt as D,_t as E,R as F,at as G,ft as H,st as I,pt as J,p as K,M as L,ut as M,Bt as S,ht as a,dt as b,bt as c,At as d,mt as e,et as f,St as g,U as h,kt as i,Et as j,V as k,gt as l,Y as m,yt as n,vt as o,$t as p,S as q,tt as r,lt as s,jt as t,wt as u,Ct as v,Mt as w,it as x,rt as y,Nt as z};
