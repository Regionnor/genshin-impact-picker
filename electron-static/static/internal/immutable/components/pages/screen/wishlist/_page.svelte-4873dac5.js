import{S as $,i as b,s as v,k as D,l as w,m as y,h as u,n as k,b as E,f as l,t as i,d as S,E as W,o as C,v as M,w as P,x as R,y as q,g as x}from"../../../../chunks/index-c0d078cd.js";import{p as A}from"../../../../chunks/stores-83193870.js";import{g as I}from"../../../../chunks/navigation-0fbaa773.js";import{d as N,a as O}from"../../../../chunks/outfit-f75a67f0.js";import{W as T,d as j}from"../../../../chunks/WishResult-d3231aab.js";function f(r){let t,a;return t=new T({props:{list:r[0],skip:!0,standalone:!0}}),{c(){M(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){R(t,e,s),a=!0},p(e,s){const n={};s&1&&(n.list=e[0]),t.$set(n)},i(e){a||(l(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}function z(r){let t,a,e=r[0].length>1&&f(r);return{c(){t=D("section"),e&&e.c(),this.h()},l(s){t=w(s,"SECTION",{class:!0});var n=y(t);e&&e.l(n),n.forEach(u),this.h()},h(){k(t,"class","svelte-1bfm8fx")},m(s,n){E(s,t,n),e&&e.m(t,null),a=!0},p(s,[n]){s[0].length>1?e?(e.p(s,n),n&1&&l(e,1)):(e=f(s),e.c(),l(e,1),e.m(t,null)):e&&(x(),i(e,1,1,()=>{e=null}),S())},i(s){a||(l(e),a=!0)},o(s){i(e),a=!1},d(s){s&&u(t),e&&e.d()}}}function B(r,t,a){let e;W(r,A,o=>a(1,e=o));let s=[];const{url:n}=e,p=o=>o.map(m=>{const{type:_,name:g}=m,h=(_==="character"?N:O).find(d=>d.name===g);return{...m,...h}});return C(()=>{try{const o=n.searchParams.get("a");if(!o)throw new Error("no Data");const c=j.multi(o);a(0,s=p(c)||[])}catch(o){console.error("something Wrong",o),I("/")}}),[s]}class U extends ${constructor(t){super(),b(this,t,B,z,v,{})}}export{U as default};
