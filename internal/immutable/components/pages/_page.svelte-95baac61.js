import{S as x,i as F,s as I,a as q,e as E,c as M,b as _,f as b,A as k,h as c,o as O,k as p,q as S,l as v,m as u,r as C,n as i,p as w,G as o,P as N,Q as V,E as h,F as m,X as G}from"../../chunks/index-a929a954.js";import{f as P}from"../../chunks/index-b8150889.js";const j=""+new URL("../../assets/small-8be2bec3.webp",import.meta.url).href,A=""+new URL("../../assets/smallmask-02ff86d1.webp",import.meta.url).href;function D(f){let r,t,s,a,e,l;return{c(){r=p("div"),t=p("a"),s=S("It is just a loading page for SEO. Click to go to the postlist."),a=q(),e=p("div"),l=p("div"),this.h()},l(n){r=v(n,"DIV",{class:!0});var d=u(r);t=v(d,"A",{href:!0,class:!0});var g=u(t);s=C(g,"It is just a loading page for SEO. Click to go to the postlist."),g.forEach(c),a=M(d),e=v(d,"DIV",{class:!0,style:!0});var y=u(e);l=v(y,"DIV",{class:!0,style:!0}),u(l).forEach(c),y.forEach(c),d.forEach(c),this.h()},h(){i(t,"href","/posts"),i(t,"class","svelte-h21a4r"),i(l,"class","water svelte-h21a4r"),w(l,"background-image","url('"+A+"')"),i(e,"class","background svelte-h21a4r"),w(e,"background-image","url('"+j+"')"),i(r,"class","container svelte-h21a4r")},m(n,d){_(n,r,d),o(r,t),o(t,s),o(r,a),o(r,e),o(e,l)},p:k,d(n){n&&c(r)}}}function T(f){let r,t;function s(l,n){return l[0]?R:L}let a=s(f),e=a(f);return{c(){r=p("div"),e.c()},l(l){r=v(l,"DIV",{});var n=u(r);e.l(n),n.forEach(c)},m(l,n){_(l,r,n),e.m(r,null)},p(l,n){a!==(a=s(l))&&(e.d(1),e=a(l),e&&(e.c(),e.m(r,null)))},i(l){t||N(()=>{t=V(r,P,{}),t.start()})},o:k,d(l){l&&c(r),e.d()}}}function L(f){let r,t,s,a;return{c(){r=h("svg"),t=h("filter"),s=h("feTurbulence"),a=h("feDisplacementMap"),this.h()},l(e){r=m(e,"svg",{});var l=u(r);t=m(l,"filter",{id:!0,x:!0,y:!0,width:!0,height:!0});var n=u(t);s=m(n,"feTurbulence",{id:!0,numOctaves:!0,seed:!0,baseFrequency:!0}),u(s).forEach(c),a=m(n,"feDisplacementMap",{scale:!0,in:!0}),u(a).forEach(c),n.forEach(c),l.forEach(c),this.h()},h(){i(s,"id","sea-filter"),i(s,"numOctaves","3"),i(s,"seed","2"),i(s,"baseFrequency","0.02 0.05"),i(a,"scale","20"),i(a,"in","SourceGraphic"),i(t,"id","turbulence"),i(t,"x","0"),i(t,"y","0"),i(t,"width","100%"),i(t,"height","100%")},m(e,l){_(e,r,l),o(r,t),o(t,s),o(t,a)},d(e){e&&c(r)}}}function R(f){let r,t,s,a,e;return{c(){r=h("svg"),t=h("filter"),s=h("feTurbulence"),a=h("feDisplacementMap"),e=h("animate"),this.h()},l(l){r=m(l,"svg",{});var n=u(r);t=m(n,"filter",{id:!0,x:!0,y:!0,width:!0,height:!0});var d=u(t);s=m(d,"feTurbulence",{id:!0,numOctaves:!0,seed:!0,baseFrequency:!0}),u(s).forEach(c),a=m(d,"feDisplacementMap",{scale:!0,in:!0}),u(a).forEach(c),e=m(d,"animate",{"xlink:href":!0,attributeName:!0,dur:!0,keyTimes:!0,values:!0,repeatCount:!0}),u(e).forEach(c),d.forEach(c),n.forEach(c),this.h()},h(){i(s,"id","sea-filter"),i(s,"numOctaves","3"),i(s,"seed","2"),i(s,"baseFrequency","0.02 0.05"),i(a,"scale","20"),i(a,"in","SourceGraphic"),G(e,"xlink:href","#sea-filter"),i(e,"attributeName","baseFrequency"),i(e,"dur","300s"),i(e,"keyTimes","0;0.5;1"),i(e,"values","0.02 0.06;0.04 0.08;0.02 0.06"),i(e,"repeatCount","indefinite"),i(t,"id","turbulence"),i(t,"x","0"),i(t,"y","0"),i(t,"width","100%"),i(t,"height","100%")},m(l,n){_(l,r,n),o(r,t),o(t,s),o(t,a),o(t,e)},d(l){l&&c(r)}}}function U(f){let r,t,s=f[1]&&D(),a=f[1]&&T(f);return{c(){s&&s.c(),r=q(),a&&a.c(),t=E()},l(e){s&&s.l(e),r=M(e),a&&a.l(e),t=E()},m(e,l){s&&s.m(e,l),_(e,r,l),a&&a.m(e,l),_(e,t,l)},p(e,[l]){e[1]?s?s.p(e,l):(s=D(),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null),e[1]?a?(a.p(e,l),l&2&&b(a,1)):(a=T(e),a.c(),b(a,1),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i(e){b(a)},o:k,d(e){s&&s.d(e),e&&c(r),a&&a.d(e),e&&c(t)}}}function $(f){return new Promise(r=>setTimeout(r,f))}function Q(f,r,t){let s=!1,a=!1;return O(async()=>{t(1,a=!0),await $(4e3),t(0,s=!0)}),[s,a]}class B extends x{constructor(r){super(),F(this,r,Q,U,I,{})}}export{B as default};
