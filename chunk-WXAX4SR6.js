import{b as I}from"./chunk-S44R5VWY.js";import{e as j,m as B}from"./chunk-BEK37RSL.js";import{k as R}from"./chunk-IL7J6EYP.js";import{$ as s,Ba as i,Ja as C,Ra as m,Sa as v,Ua as y,Va as E,Wa as b,X as g,Xa as l,Ya as c,bb as p,cb as f,db as S,eb as D,fb as F,gb as u,hb as M,ib as _,kb as d,mb as x,qa as a}from"./chunk-56PMHGSL.js";var P=["*"],Q=(()=>{let e=class e{constructor(){this.hasError=a.required()}get invalid(){return this.hasError()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-control-decorator"]],hostVars:2,hostBindings:function(t,r){t&2&&v("app-control-decorator-has-error",r.invalid)},inputs:{hasError:[1,"hasError"]},standalone:!0,features:[d],ngContentSelectors:P,decls:1,vars:0,template:function(t,r){t&1&&(p(),f(0))},styles:[`.app-control-decorator-has-error *{color:#ff6969;border-color:#ff6969}
`],encapsulation:2});let o=e;return o})();var V=["*"],q=o=>({error:o});function H(o,e){if(o&1&&(l(0,"span",2),u(1),c()),o&2){let T=e.$implicit;i(),M(T)}}var Z=(()=>{let e=class e{constructor(){this.label=a(""),this.messages=C([]),this.messageService=g(I)}get hasError(){return(this.controlRef?.touched&&this.controlRef?.invalid)??!1}ngAfterContentInit(){this.controlRef.control?.events.subscribe(()=>{let n=this.controlRef.errors;this.messages.set(this.messageService.getMessage(n))})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-control-field"]],contentQueries:function(t,r,w){if(t&1&&S(w,j,5),t&2){let h;D(h=F())&&(r.controlRef=h.first)}},inputs:{label:[1,"label"]},standalone:!0,features:[d],ngContentSelectors:V,decls:6,vars:5,consts:[["appLabel","",3,"ngClass"],[3,"hasError"],["appLabel","",1,"error"]],template:function(t,r){t&1&&(p(),l(0,"label",0),u(1),c(),l(2,"app-control-decorator",1),f(3),c(),E(4,H,2,1,"span",2,y)),t&2&&(m("ngClass",x(3,q,r.hasError)),i(),_(" ",r.label(),`
`),i(),m("hasError",r.hasError),i(2),b(r.messages()))},dependencies:[B,Q,R],styles:["[_nghost-%COMP%]{display:inline-flex;flex-direction:column}.error[_ngcontent-%COMP%]{color:#ff6969}"]});let o=e;return o})();export{Z as a};