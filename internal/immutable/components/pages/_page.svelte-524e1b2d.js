import{S as O,i as x,s as F,a as q,e as E,c as M,b as h,f as b,A as k,h as c,o as I,k as p,q as S,l as v,m as u,r as C,n as i,p as w,G as o,O as N,P as V,E as m,F as _,X as G}from"../../chunks/index-c530ad4b.js";import{f as P}from"../../chunks/index-2d83249c.js";const j=""+new URL("../../assets/small-8be2bec3.webp",import.meta.url).href,A=""+new URL("../../assets/smallmask-02ff86d1.webp",import.meta.url).href;function D(f){let a,t,s,r,e,l;return{c(){a=p("div"),t=p("a"),s=S("It is just a loading page for SEO. Click to go to the postlist."),r=q(),e=p("div"),l=p("div"),this.h()},l(n){a=v(n,"DIV",{class:!0});var d=u(a);t=v(d,"A",{href:!0,class:!0});var g=u(t);s=C(g,"It is just a loading page for SEO. Click to go to the postlist."),g.forEach(c),r=M(d),e=v(d,"DIV",{class:!0,style:!0});var y=u(e);l=v(y,"DIV",{class:!0,style:!0}),u(l).forEach(c),y.forEach(c),d.forEach(c),this.h()},h(){i(t,"href","/posts"),i(t,"class","svelte-d6rdd4"),i(l,"class","water svelte-d6rdd4"),w(l,"background-image","url('"+A+"')"),i(e,"class","background svelte-d6rdd4"),w(e,"background-image","url('"+j+"')"),i(a,"class","container svelte-d6rdd4")},m(n,d){h(n,a,d),o(a,t),o(t,s),o(a,r),o(a,e),o(e,l)},p:k,d(n){n&&c(a)}}}function T(f){let a,t;function s(l,n){return l[0]?R:L}let r=s(f),e=r(f);return{c(){a=p("div"),e.c()},l(l){a=v(l,"DIV",{});var n=u(a);e.l(n),n.forEach(c)},m(l,n){h(l,a,n),e.m(a,null)},p(l,n){r!==(r=s(l))&&(e.d(1),e=r(l),e&&(e.c(),e.m(a,null)))},i(l){t||N(()=>{t=V(a,P,{}),t.start()})},o:k,d(l){l&&c(a),e.d()}}}function L(f){let a,t,s,r;return{c(){a=m("svg"),t=m("filter"),s=m("feTurbulence"),r=m("feDisplacementMap"),this.h()},l(e){a=_(e,"svg",{});var l=u(a);t=_(l,"filter",{id:!0,x:!0,y:!0,width:!0,height:!0});var n=u(t);s=_(n,"feTurbulence",{id:!0,numOctaves:!0,seed:!0,baseFrequency:!0}),u(s).forEach(c),r=_(n,"feDisplacementMap",{scale:!0,in:!0}),u(r).forEach(c),n.forEach(c),l.forEach(c),this.h()},h(){i(s,"id","sea-filter"),i(s,"numOctaves","3"),i(s,"seed","2"),i(s,"baseFrequency","0.02 0.05"),i(r,"scale","20"),i(r,"in","SourceGraphic"),i(t,"id","turbulence"),i(t,"x","0"),i(t,"y","0"),i(t,"width","100%"),i(t,"height","100%")},m(e,l){h(e,a,l),o(a,t),o(t,s),o(t,r)},d(e){e&&c(a)}}}function R(f){let a,t,s,r,e;return{c(){a=m("svg"),t=m("filter"),s=m("feTurbulence"),r=m("feDisplacementMap"),e=m("animate"),this.h()},l(l){a=_(l,"svg",{});var n=u(a);t=_(n,"filter",{id:!0,x:!0,y:!0,width:!0,height:!0});var d=u(t);s=_(d,"feTurbulence",{id:!0,numOctaves:!0,seed:!0,baseFrequency:!0}),u(s).forEach(c),r=_(d,"feDisplacementMap",{scale:!0,in:!0}),u(r).forEach(c),e=_(d,"animate",{"xlink:href":!0,attributeName:!0,dur:!0,keyTimes:!0,values:!0,repeatCount:!0}),u(e).forEach(c),d.forEach(c),n.forEach(c),this.h()},h(){i(s,"id","sea-filter"),i(s,"numOctaves","3"),i(s,"seed","2"),i(s,"baseFrequency","0.02 0.05"),i(r,"scale","20"),i(r,"in","SourceGraphic"),G(e,"xlink:href","#sea-filter"),i(e,"attributeName","baseFrequency"),i(e,"dur","300s"),i(e,"keyTimes","0;0.5;1"),i(e,"values","0.02 0.06;0.04 0.08;0.02 0.06"),i(e,"repeatCount","indefinite"),i(t,"id","turbulence"),i(t,"x","0"),i(t,"y","0"),i(t,"width","100%"),i(t,"height","100%")},m(l,n){h(l,a,n),o(a,t),o(t,s),o(t,r),o(t,e)},d(l){l&&c(a)}}}function U(f){let a,t,s=f[1]&&D(),r=f[1]&&T(f);return{c(){s&&s.c(),a=q(),r&&r.c(),t=E()},l(e){s&&s.l(e),a=M(e),r&&r.l(e),t=E()},m(e,l){s&&s.m(e,l),h(e,a,l),r&&r.m(e,l),h(e,t,l)},p(e,[l]){e[1]?s?s.p(e,l):(s=D(),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null),e[1]?r?(r.p(e,l),l&2&&b(r,1)):(r=T(e),r.c(),b(r,1),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i(e){b(r)},o:k,d(e){s&&s.d(e),e&&c(a),r&&r.d(e),e&&c(t)}}}function $(f){return new Promise(a=>setTimeout(a,f))}function X(f,a,t){let s=!1,r=!1;return I(async()=>{t(1,r=!0),await $(4e3),t(0,s=!0)}),[s,r]}class H extends O{constructor(a){super(),x(this,a,X,U,F,{})}}export{H as default};
