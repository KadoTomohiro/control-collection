import{Lb as l,Q as m,Sa as d,T as x,W as h}from"./chunk-R7EF2H7L.js";import{a as u,e as a,f,g as p}from"./chunk-2RYEIVLG.js";var _=new x("ControlDemoProperties"),O=(()=>{var e;let t=class t{constructor(){f(this,e);p(this,e,d({})),this.controlDemoProperties=l(()=>a(this,e).call(this)),this.controlNames=l(()=>(console.log(a(this,e).call(this)),Object.keys(a(this,e).call(this)))),h(_).forEach(n=>this.register(n))}register(n){a(this,e).update(c=>Object.assign({},c,n))}};e=new WeakMap,t.\u0275fac=function(c){return new(c||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var w=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),T=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),A=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),I=/[^\p{L}\d]+/giu,C="$1\0$2",E="";function L(r){let e=r.trim();e=e.replace(w,C).replace(T,C),e=e.replace(I,"\0");let t=0,s=e.length;for(;e.charAt(t)==="\0";)t++;if(t===s)return[];for(;e.charAt(s-1)==="\0";)s--;return e.slice(t,s).split(/\0/g)}function b(r){let e=L(r);for(let t=0;t<e.length;t++){let s=e[t],n=A.exec(s);if(n){let c=n.index+(n[1]??n[2]).length;e.splice(t,1,s.slice(0,c),s.slice(c))}}return e}function j(r,e){let[t,s,n]=g(r,e);return t+s.map(P(e?.locale)).join(e?.delimiter??" ")+n}function $(r,e){let[t,s,n]=g(r,e),c=P(e?.locale),i=F(e?.locale);return t+s.map(S(c,i)).join(e?.delimiter??" ")+n}function X(r,e){return j(r,u({delimiter:"-"},e))}function P(r){return r===!1?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r)}function F(r){return r===!1?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r)}function S(r,e){return t=>`${e(t[0])}${r(t.slice(1))}`}function g(r,e={}){let t=e.split??(e.separateNumbers?b:L),s=e.prefixCharacters??E,n=e.suffixCharacters??E,c=0,i=r.length;for(;c<r.length;){let o=r.charAt(c);if(!s.includes(o))break;c++}for(;i>c;){let o=i-1,R=r.charAt(o);if(!n.includes(R))break;i=o}return[r.slice(0,c),t(r.slice(c,i)),r.slice(i)]}export{_ as a,O as b,$ as c,X as d};