import{a as J,b as O,c as V,d as y,e as N,f as B,h as T,i as j,j as w,k as I,m as P}from"./chunk-YTJ3EFLQ.js";import"./chunk-UPCZSPI7.js";import{$ as C,Ba as A,Ja as g,Ka as x,Ra as F,Wa as s,Xa as r,Ya as b,_a as E,c as n,d as f,e as o,f as v,fb as p,ib as M,jb as S}from"./chunk-U5N35PSW.js";var R=(()=>{var t,u,a,i,c,l,_,k,G;let d=class d{constructor(){f(this,l);f(this,t);f(this,u);f(this,a);f(this,i);f(this,c);this.value=x({}),this.stringifyValue=g(""),this.disabled=g(!1),o(this,t,g(!1)),o(this,u,g(!0)),o(this,a,e=>{}),o(this,i,()=>{}),o(this,c,()=>{}),I(this.value).subscribe(()=>{n(this,u).call(this)&&this.stringifyValue.set(v(this,l,G).call(this,this.value())),n(this,a).call(this,this.value())})}registerOnChange(e){o(this,a,e)}registerOnTouched(e){o(this,i,e)}registerOnValidatorChange(e){o(this,c,e)}setDisabledState(e){this.disabled.set(e)}writeValue(e){this.value.set(e)}validate(e){return e?n(this,u).call(this)?null:{jsonSyntax:!1}:null}onChange(e){if(this.disabled())return;v(this,l,_).call(this);let m=v(this,l,k).call(this,e);this.value.set(m)}};t=new WeakMap,u=new WeakMap,a=new WeakMap,i=new WeakMap,c=new WeakMap,l=new WeakSet,_=function(){n(this,t).call(this)||(n(this,i).call(this),n(this,t).set(!0))},k=function(e){try{let m=JSON.parse(e);return n(this,u).set(!0),m}catch{return n(this,u).set(!1),null}},G=function(e){return JSON.stringify(e)},d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=C({type:d,selectors:[["app-json-input"]],inputs:{value:[1,"value"]},outputs:{value:"valueChange"},standalone:!0,features:[M([{provide:J,useExisting:d,multi:!0},{provide:V,useExisting:d,multi:!0}]),S],decls:1,vars:2,consts:[[3,"ngModelChange","ngModel","disabled"]],template:function(m,D){m&1&&(s(0,"textarea",0),E("ngModelChange",function(L){return D.onChange(L)}),r()),m&2&&F("ngModel",D.stringifyValue())("disabled",D.disabled())},dependencies:[j,O,y,B]});let h=d;return h})();var te=(()=>{let t=class t{constructor(){this.control=new N({foo:"bar"})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=C({type:t,selectors:[["app-json-input-page"]],standalone:!0,features:[S],decls:18,vars:1,consts:[[1,"title"],[1,"description"],[1,"type"],[1,"validation"],[3,"formControl"]],template:function(i,c){i&1&&(s(0,"app-control-page-template")(1,"div",0),p(2,"Json Input"),r(),s(3,"div",1),p(4,"Json\u3092\u30D1\u30FC\u30B9\u3059\u308B\u3002"),r(),s(5,"div",2),p(6," \u5165\u529B\u306FJSON like\u306A"),s(7,"code"),p(8,"string"),r(),p(9,"\u3002"),b(10,"br"),p(11," value\u306F\u30D1\u30FC\u30B9\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002\u30D1\u30FC\u30B9\u3067\u304D\u306A\u3044\u5834\u5408\u306Fnull\u3002 "),r(),s(12,"div",3)(13,"ul")(14,"li"),p(15," Json\u30D1\u30FC\u30B9\u3067\u304D\u306A\u3044\u5834\u5408\u30A8\u30E9\u30FC\u3002 "),r()()(),s(16,"div"),b(17,"app-json-input",4),r()()),i&2&&(A(17),F("formControl",c.control))},dependencies:[P,R,w,y,T]});let h=t;return h})();export{te as JsonInputPageComponent};
