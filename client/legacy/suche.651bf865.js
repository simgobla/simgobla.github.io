import{_ as t,a as e,i as s,s as n,b as a,S as r,e as c,c as l,t as o,d as i,f as u,g as f,h,j as v,k as d,l as p,m,n as y,G as g,q as b,E as k,p as E,u as L,o as D,v as I,w,x as S,y as V,z as j,O as x}from"./client.25bc178a.js";import{g as M}from"./_helper.bb50a30b.js";import{F as R}from"./fuse.esm.2381972e.js";function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var T=j.document;function z(t,e,s){var n=t.slice();return n[8]=e[s],n}function A(t){var e,s,n,a,r,b,k,E,L,D,I,w,S=t[8].item.title+"",V=M(t[8].item.group)+"";return{c:function(){e=c("li"),s=c("a"),n=c("div"),a=c("div"),r=l(),b=c("div"),k=o(V),E=l(),L=i("svg"),D=i("path"),I=l(),this.h()},l:function(t){e=u(t,"LI",{class:!0});var c=f(e);s=u(c,"A",{rel:!0,href:!0,class:!0});var l=f(s);n=u(l,"DIV",{class:!0});var o=f(n);a=u(o,"DIV",{class:!0}),f(a).forEach(h),r=v(o),b=u(o,"DIV",{class:!0});var i=f(b);k=d(i,V),i.forEach(h),o.forEach(h),E=v(l),L=u(l,"svg",{class:!0,width:!0,height:!0,fill:!0},1);var p=f(L);D=u(p,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0,class:!0},1),f(D).forEach(h),p.forEach(h),I=v(l),l.forEach(h),c.forEach(h),this.h()},h:function(){p(a,"class","entry-title svelte-1k1ybnv"),p(b,"class","entry-descr svelte-1k1ybnv"),p(n,"class","flex-grow svelte-1k1ybnv"),p(D,"fill-rule","evenodd"),p(D,"clip-rule","evenodd"),p(D,"fill","currentColor"),p(D,"d","M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"),p(D,"class","svelte-1k1ybnv"),p(L,"class","arrow svelte-1k1ybnv"),p(L,"width","16"),p(L,"height","16"),p(L,"fill","none"),p(s,"rel","prefetch"),p(s,"href",w="./"+t[8].item.slug),p(s,"class","svelte-1k1ybnv"),p(e,"class","svelte-1k1ybnv")},m:function(t,c){m(t,e,c),y(e,s),y(s,n),y(n,a),a.innerHTML=S,y(n,r),y(n,b),y(b,k),y(s,E),y(s,L),y(L,D),y(s,I)},p:function(t,e){4&e&&S!==(S=t[8].item.title+"")&&(a.innerHTML=S),4&e&&V!==(V=M(t[8].item.group)+"")&&g(k,V),4&e&&w!==(w="./"+t[8].item.slug)&&p(s,"href",w)},d:function(t){t&&h(e)}}}function C(t){for(var e,s,n,a,r,o,i,d,g,w=t[2],S=[],V=0;V<w.length;V+=1)S[V]=A(z(t,w,V));return{c:function(){e=l(),s=c("div"),n=c("div"),a=c("input"),r=l(),o=c("div"),i=c("div"),d=c("ul");for(var t=0;t<S.length;t+=1)S[t].c();this.h()},l:function(t){b('[data-svelte="svelte-d3pou1"]',T.head).forEach(h),e=v(t),s=u(t,"DIV",{id:!0,class:!0});var c=f(s);n=u(c,"DIV",{class:!0});var l=f(n);a=u(l,"INPUT",{placeholder:!0,autocomplete:!0,autocorrect:!0,autocapitalize:!0,spellcheck:!0,class:!0}),l.forEach(h),c.forEach(h),r=v(t),o=u(t,"DIV",{id:!0,class:!0});var p=f(o);i=u(p,"DIV",{class:!0});var m=f(i);d=u(m,"UL",{class:!0});for(var y=f(d),g=0;g<S.length;g+=1)S[g].l(y);y.forEach(h),m.forEach(h),p.forEach(h),this.h()},h:function(){T.title="Suchen",p(a,"placeholder","Suche..."),p(a,"autocomplete","off"),p(a,"autocorrect","off"),p(a,"autocapitalize","off"),p(a,"spellcheck","false"),p(a,"class","svelte-1k1ybnv"),p(n,"class","wrapper-inner svelte-1k1ybnv"),p(s,"id","headline"),p(s,"class","svelte-1k1ybnv"),p(d,"class","svelte-1k1ybnv"),p(i,"class","wrapper-inner svelte-1k1ybnv"),p(o,"id","content"),p(o,"class","svelte-1k1ybnv")},m:function(c,l,u){m(c,e,l),m(c,s,l),y(s,n),y(n,a),k(a,t[1]),t[7](a),m(c,r,l),m(c,o,l),y(o,i),y(i,d);for(var f=0;f<S.length;f+=1)S[f].m(d,null);u&&g(),g=E(a,"input",t[6])},p:function(t,e){var s=L(e,1)[0];if(2&s&&a.value!==t[1]&&k(a,t[1]),4&s){var n;for(w=t[2],n=0;n<w.length;n+=1){var r=z(t,w,n);S[n]?S[n].p(r,s):(S[n]=A(r),S[n].c(),S[n].m(d,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=w.length}},i:D,o:D,d:function(n){n&&h(e),n&&h(s),t[7](null),n&&h(r),n&&h(o),I(S,n),g()}}}function q(t){t.params,t.query;return this.fetch("suche.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function H(t,e,s){var n,a=e.posts;w((function(){document.documentElement.setAttribute("data-theme","search"),setTimeout((function(){n.focus()}),100)}));var r,c={isCaseSensitive:!1,findAllMatches:!1,includeMatches:!1,includeScore:!1,useExtendedSearch:!1,minMatchCharLength:1,shouldSort:!0,threshold:.6,location:0,distance:100,keys:["title","html","group"]},l=new R(a,c),o="";return t.$set=function(t){"posts"in t&&s(3,a=t.posts)},t.$$.update=function(){2&t.$$.dirty&&s(2,r=l.search(o))},[n,o,r,a,c,l,function(){o=this.value,s(1,o)},function(t){x[t?"unshift":"push"]((function(){s(0,n=t)}))}]}var P=function(c){t(i,r);var l,o=(l=i,function(){var t,e=S(l);if($()){var s=S(this).constructor;t=Reflect.construct(e,arguments,s)}else t=e.apply(this,arguments);return V(this,t)});function i(t){var r;return e(this,i),r=o.call(this),s(a(r),t,H,C,n,{posts:3}),r}return i}();export default P;export{q as preload};
