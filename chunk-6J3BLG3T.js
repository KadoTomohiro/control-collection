import{a as B,b as J,c as O,f as D,g as V,h as N,j as T,k as j,l as w,n as I,p as P}from"./chunk-BEK37RSL.js";import"./chunk-IL7J6EYP.js";import{$ as C,$a as x,Ba as A,Ja as g,Ka as E,Ra as F,Xa as n,Ya as o,Za as b,c as u,d as f,e as s,f as v,gb as r,jb as M,kb as S}from"./chunk-56PMHGSL.js";var R=(()=>{var t,a,l,i,c,d,_,k,G;let m=class m{constructor(){f(this,d);f(this,t);f(this,a);f(this,l);f(this,i);f(this,c);this.value=E({}),this.stringifyValue=g(""),this.disabled=g(!1),s(this,t,g(!1)),s(this,a,g(!0)),s(this,l,e=>{}),s(this,i,()=>{}),s(this,c,()=>{}),I(this.value).subscribe(()=>{u(this,a).call(this)&&this.stringifyValue.set(v(this,d,G).call(this,this.value())),u(this,l).call(this,this.value())})}registerOnChange(e){s(this,l,e)}registerOnTouched(e){s(this,i,e)}registerOnValidatorChange(e){s(this,c,e)}setDisabledState(e){this.disabled.set(e)}writeValue(e){this.value.set(e)}validate(e){return e?u(this,a).call(this)?null:{jsonSyntax:!1}:null}onChange(e){if(this.disabled())return;v(this,d,_).call(this);let p=v(this,d,k).call(this,e);this.value.set(p)}};t=new WeakMap,a=new WeakMap,l=new WeakMap,i=new WeakMap,c=new WeakMap,d=new WeakSet,_=function(){u(this,t).call(this)||(u(this,i).call(this),u(this,t).set(!0))},k=function(e){try{let p=JSON.parse(e);return u(this,a).set(!0),p}catch{return u(this,a).set(!1),null}},G=function(e){return JSON.stringify(e)},m.\u0275fac=function(p){return new(p||m)},m.\u0275cmp=C({type:m,selectors:[["app-json-input"]],inputs:{value:[1,"value"]},outputs:{value:"valueChange"},standalone:!0,features:[M([{provide:B,useExisting:m,multi:!0},{provide:O,useExisting:m,multi:!0}]),S],decls:1,vars:2,consts:[[3,"ngModelChange","ngModel","disabled"]],template:function(p,y){p&1&&(n(0,"textarea",0),x("ngModelChange",function(L){return y.onChange(L)}),o()),p&2&&F("ngModel",y.stringifyValue())("disabled",y.disabled())},dependencies:[j,J,D,N]});let h=m;return h})();var te=(()=>{let t=class t{constructor(){this.control=new V({foo:"bar"})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=C({type:t,selectors:[["app-json-input-page"]],standalone:!0,features:[S],decls:21,vars:1,consts:[["alert",""],[1,"title"],[1,"description"],[1,"alert"],[1,"type"],[1,"validation"],[3,"formControl"]],template:function(i,c){i&1&&(n(0,"app-control-page-template")(1,"div",1),r(2,"Json Input"),o(),n(3,"div",2),r(4,"Json\u3092\u30D1\u30FC\u30B9\u3059\u308B\u3002"),o(),n(5,"div",3,0),r(7," \u5165\u529B\u4E2D\u306B\u6574\u5F62\u304C\u6D88\u3055\u308C\u308B\u3002 "),o(),n(8,"div",4),r(9," \u5165\u529B\u306FJSON like\u306A"),n(10,"code"),r(11,"string"),o(),r(12,"\u3002"),b(13,"br"),r(14," value\u306F\u30D1\u30FC\u30B9\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002\u30D1\u30FC\u30B9\u3067\u304D\u306A\u3044\u5834\u5408\u306Fnull\u3002 "),o(),n(15,"div",5)(16,"ul")(17,"li"),r(18," Json\u30D1\u30FC\u30B9\u3067\u304D\u306A\u3044\u5834\u5408\u30A8\u30E9\u30FC\u3002 "),o()()(),n(19,"div"),b(20,"app-json-input",6),o()()),i&2&&(A(20),F("formControl",c.control))},dependencies:[P,R,w,D,T]});let h=t;return h})();export{te as JsonInputPageComponent};
