import{S as it,i as rt,s as nt,e as h,t as N,k as x,c as f,a as m,h as D,d,m as F,b as s,M as $,g as Q,K as l,_ as ot,L as P,j as ct,N as ut,l as tt,U as dt,v as ht,$ as ft}from"./vendor-3129e329.js";import{i as et}from"./stores-40c4df82.js";function at(c,e,t){const a=c.slice();return a[4]=e[t],a}function st(c){let e,t,a,n,b,_,o,S,p,G,L,g,B,O,I,E,C=c[1]?"Small layout":"Big layout",M,R,y,k,U,j,T,q,K,z=c[2],u=[];for(let r=0;r<z.length;r+=1)u[r]=lt(at(c,z,r));return{c(){e=h("div"),t=h("h2"),a=N(`Buy
      `),n=h("span"),b=N("Figs Sveltekit Theme"),o=x(),S=h("span"),p=h("img"),L=x(),g=h("div"),B=h("ul");for(let r=0;r<u.length;r+=1)u[r].c();O=x(),I=h("div"),E=h("button"),M=N(C),R=x(),y=h("div"),k=h("a"),U=N("Features"),j=x(),T=h("form"),this.h()},l(r){e=f(r,"DIV",{class:!0});var v=m(e);t=f(v,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var i=m(t);a=D(i,`Buy
      `),n=f(i,"SPAN",{class:!0});var A=m(n);b=D(A,"Figs Sveltekit Theme"),A.forEach(d),o=F(i),S=f(i,"SPAN",{});var X=m(S);p=f(X,"IMG",{width:!0,height:!0,loading:!0,class:!0,src:!0,alt:!0}),X.forEach(d),i.forEach(d),L=F(v),g=f(v,"DIV",{class:!0,"data-sal":!0,"data-sal-duration":!0});var w=m(g);B=f(w,"UL",{});var Z=m(B);for(let H=0;H<u.length;H+=1)u[H].l(Z);Z.forEach(d),O=F(w),I=f(w,"DIV",{class:!0});var J=m(I);E=f(J,"BUTTON",{class:!0});var W=m(E);M=D(W,C),W.forEach(d),J.forEach(d),R=F(w),y=f(w,"DIV",{class:!0});var V=m(y);k=f(V,"A",{class:!0,href:!0});var Y=m(k);U=D(Y,"Features"),Y.forEach(d),j=F(V),T=f(V,"FORM",{id:!0}),m(T).forEach(d),V.forEach(d),w.forEach(d),v.forEach(d),this.h()},h(){s(n,"class",_=c[0].textColorScheme),s(p,"width","25"),s(p,"height","25"),s(p,"loading","lazy"),s(p,"class","lazyload inline-block ml-2 w-6"),$(p.src,G=c[0].touchIcon)||s(p,"src",G),s(p,"alt","Figs Sveltekit Theme"),s(t,"class","font-bold text-xl pb-3 mb-3 border-b"),s(t,"data-sal","slide-up"),s(t,"data-sal-duration","800"),s(E,"class","text-white rounded px-4 py-1 bg-green-500"),s(I,"class","my-2"),s(k,"class","block mb-4 underline text-blue-500 hover:text-blue-600"),s(k,"href","/blog/documentation/"),s(T,"id","rzp"),s(y,"class","max-w-xs"),s(g,"class","grid grid-cols-1 gap-4 py-3 items-center"),s(g,"data-sal","fade"),s(g,"data-sal-duration","800"),s(e,"class","cta")},m(r,v){Q(r,e,v),l(e,t),l(t,a),l(t,n),l(n,b),l(t,o),l(t,S),l(S,p),l(e,L),l(e,g),l(g,B);for(let i=0;i<u.length;i+=1)u[i].m(B,null);l(g,O),l(g,I),l(I,E),l(E,M),l(g,R),l(g,y),l(y,k),l(k,U),l(y,j),l(y,T),q||(K=ot(E,"click",c[3]),q=!0)},p(r,v){if(v&1&&_!==(_=r[0].textColorScheme)&&s(n,"class",_),v&1&&!$(p.src,G=r[0].touchIcon)&&s(p,"src",G),v&4){z=r[2];let i;for(i=0;i<z.length;i+=1){const A=at(r,z,i);u[i]?u[i].p(A,v):(u[i]=lt(A),u[i].c(),u[i].m(B,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=z.length}v&2&&C!==(C=r[1]?"Small layout":"Big layout")&&ct(M,C)},d(r){r&&d(e),ut(u,r),q=!1,K()}}}function lt(c){let e,t,a=c[4]+"",n,b;return{c(){e=h("li"),t=h("i"),n=N(a),b=x(),this.h()},l(_){e=f(_,"LI",{class:!0});var o=m(e);t=f(o,"I",{class:!0}),m(t).forEach(d),n=D(o,a),b=F(o),o.forEach(d),this.h()},h(){s(t,"class","fas fa-check-circle text-green-500 mr-2"),s(e,"class","italic text-gray-600")},m(_,o){Q(_,e,o),l(e,t),l(e,n),l(e,b)},p:P,d(_){_&&d(e)}}}function mt(c){let e,t=c[0].showBuyButton&&st(c);return{c(){t&&t.c(),e=tt()},l(a){t&&t.l(a),e=tt()},m(a,n){t&&t.m(a,n),Q(a,e,n)},p(a,[n]){a[0].showBuyButton?t?t.p(a,n):(t=st(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:P,o:P,d(a){t&&t.d(a),a&&d(e)}}}function _t(c,e,t){let a;dt(c,et,o=>t(1,a=o));let{mainSettings:n}=e;ht(()=>{const o=document.createElement("script"),S=document.getElementById("rzp");o.setAttribute("src","https://checkout.razorpay.com/v1/payment-button.js"),o.setAttribute("data-payment_button_id","pl_IGZXh2tQ3Q0G8R"),S.appendChild(o)});const b=["Server Side Rendered by default.","SEO optimized.","Blazing Fast.","Easy to customize.","3 months support.","Get assistance with reported bugs and issues.","Help with included 3rd party assets."],_=()=>ft(et,a=!a,a);return c.$$set=o=>{"mainSettings"in o&&t(0,n=o.mainSettings)},[n,a,b,_]}class vt extends it{constructor(e){super();rt(this,e,_t,mt,nt,{mainSettings:0})}}export{vt as C};
