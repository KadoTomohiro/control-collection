import{b as He,c as re,e as Be,f as Ge,g as A,h as q,i as L,j as ge,k as Ue,l as k,m as $e,n as Je,o as M,p as oe,q as ie,r as T,s as qe,t as Ke,u as se,v as _,w as ze}from"./chunk-TOWT7TXX.js";import{b as Ve,c as Qe,e as Xe,f as Ze,h as We}from"./chunk-WIWX7MJU.js";import{k as ne,n as je,t as j,u as Ye,v as et}from"./chunk-ZTNM5ZC5.js";import{$a as pe,Ab as we,Bb as Ne,Jb as Ae,Ka as d,Ob as te,Pb as fe,Q as W,Qb as Le,Sa as x,T as Se,Ta as N,Ua as ke,W as D,_ as v,_a as me,ab as h,bb as Re,cb as de,db as Me,eb as G,fb as U,ga as be,gb as l,h as Ce,hb as a,ia as xe,ib as y,ja as ye,ka as Ee,kb as _e,lb as P,ma as Oe,mb as K,nb as Y,oa as Fe,ob as ee,pa as O,pb as De,qb as Pe,rb as Ie,sb as b,tb as $,ub as H,vb as I,wb as C,yb as J,zb as Te}from"./chunk-H4IH76LH.js";import{a as ce,b as ue,c as ve,d as Mt,e as m,f as g,g as u,h as B}from"./chunk-2RYEIVLG.js";var pt=ve((exports,module)=>{"use strict";(function(root){var performance=(typeof window=="object"?window:eval("require('perf_hooks')")).performance,BREAK=`\r
`,SPACE=" ",OPTIONS={indent:2,isExpand:!0,isStrict:!1,isEscape:!1,isUnscape:!1,keyQtMark:'"',valQtMark:'"'},ESCAPES_MAP=[{ptn:/\r\n/gm,str:""},{ptn:/\n\r/gm,str:""},{ptn:/\n/gm,str:"\\n"},{ptn:/\r/gm,str:"\\r"},{ptn://gm,str:"\\b"},{ptn://gm,str:"\\v"},{ptn:/\f/gm,str:"\\f"},{ptn:/\t/gm,str:"\\t"}],MESSAGES_MAP={err:function e(){return"Parse Error, an excessive abnormal Json!"},war:function e(t){return"Formated ".concat(t," lines, abnormal JSON source!")},scc:function e(t){return"Success formated ".concat(t," lines!")},val:function e(t){return"Invalid value in line: ".concat(t)},ost:function e(t){return"Expect a string in line: ".concat(t)},col:function e(t){return"Expect a colon in line: ".concat(t)},end:function e(t,n){return'Expect a comma or a "'.concat(n,'" in line: ').concat(t)}};function fmt2json(source,options){var startTime=performance.now(),fmtSource=source,curLevel=0,curIndex=1,exceptType="",exceptSign="",signsQueue="",baseIndent="",isSrcValid=!0,isFmtError=!1,withDetails=!1,fmtResult="",fmtType="info",fmtSign="",fmtLines=0,message="",errFormat=!1,errNear="",errIndex=NaN,errExpect="",fmtOptions=Object.assign({},OPTIONS);options&&(typeof options.withDetails=="boolean"&&(withDetails=options.withDetails),typeof options.expand=="boolean"&&(fmtOptions.isExpand=options.expand),typeof options.strict=="boolean"&&(fmtOptions.isStrict=options.strict),typeof options.escape=="boolean"&&(fmtOptions.isEscape=options.escape),typeof options.unscape=="boolean"&&(fmtOptions.isUnscape=options.unscape),typeof options.indent=="number"&&options.indent>0&&(fmtOptions.indent=options.indent),["'",'"',""].indexOf(options.keyQtMark)>-1&&(fmtOptions.keyQtMark=options.keyQtMark),["'",'"'].indexOf(options.valQtMark)>-1&&(fmtOptions.valQtMark=options.valQtMark)),baseIndent=getBaseIndent();try{try{fmtSource!==""&&eval("fmtSource = ".concat(fmtSource)),fmtSource===""||["object","boolean"].indexOf(typeof fmtSource)>-1?doNormalFormat(fmtSource):(fmtOptions.isUnscape&&(fmtSource=fmtSource.replace(/\\"/gm,'"').replace(/\\\\/gm,"\\")),doSpecialFormat())}catch(e){fmtOptions.isUnscape&&(fmtSource=fmtSource.replace(/\\"/gm,'"').replace(/\\\\/gm,"\\")),doSpecialFormat()}}catch(e){isFmtError=!0}finally{return setFmtStatus(),withDetails?{result:fmtResult,fmtType,fmtSign,fmtLines,fmtTime:performance.now()-startTime,message,errFormat,errIndex,errNear,errExpect}:fmtResult}function doNormalFormat(e){if([!0,!1,null,""].indexOf(e)>-1)return fmtResult+=String(e);fmtOptions.isStrict&&(e=JSON.parse(JSON.stringify(e))),e instanceof Array?arrayHandler(e):objectHandler(e)}function arrayHandler(e){var t;if(e.length>0){fmtResult+=brkLine4Normal("["),curLevel++;for(var n=0;n<e.length;n++)t=fmtOptions.isExpand?getCurIndent():"",fmtResult+=t,valueHandler(e[n]),fmtResult+=brkLine4Normal(n<e.length-1?",":"");curLevel--,t=fmtOptions.isExpand?getCurIndent():"",fmtResult+=t+"]"}else fmtResult+="[]"}function objectHandler(e){var t=Object.keys(e);if(t.length>0){var n,o=0;fmtResult+=brkLine4Normal("{"),curLevel++;for(var r in e){o++;var i=quoteNormalStr(r,fmtOptions.keyQtMark);n=fmtOptions.isExpand?getCurIndent():"",fmtResult+=n,fmtResult+=i,fmtResult+=fmtOptions.isExpand?": ":":",valueHandler(e[r]),fmtResult+=brkLine4Normal(o<t.length?",":"")}curLevel--,n=fmtOptions.isExpand?getCurIndent():"",fmtResult+=n+"}"}else fmtResult+="{}"}function valueHandler(e){switch(typeof e){case"undefined":case"function":return fmtResult+=String(e);case"number":case"boolean":return fmtResult+=e;case"object":return doNormalFormat(e);case"string":return fmtResult+=quoteNormalStr(e,fmtOptions.valQtMark)}}function doSpecialFormat(){if(fmtSource=fmtSource.replace(/^\s*/,""),fmtSource.length!==0){var e=!1;switch(fmtSource[0]){case"'":case'"':e=!0,quotaHandler();break;case":":e=!0,colonHandler();break;case",":e=!0,commaHandler();break;case"{":e=!0,objPreHandler();break;case"}":e=!0,objEndHandler();break;case"[":e=!0,arrPreHandler();break;case"]":e=!0,arrEndHandler();break;case"(":e=!0,tupPreHandler();break;case")":e=!0,tupEndHandler();break}if(!e){var t=fmtSource.match(/^u(\s)?'|^u(\s)?"/);t&&(e=!0,unicHandler(t[0]))}if(!e){var n=fmtSource.match(/^(-?[0-9]+\.?[0-9]*|0[xX][0-9a-fA-F]+)/);n&&(e=!0,numbHandler(n[0]))}if(!e){var o=fmtSource.match(/^(true|false|True|False)/);o&&(e=!0,boolHandler(o[0]))}if(!e){var r=fmtSource.match(/^(null|undefined|None|NaN)/);r&&(e=!0,nullHandler(r[0]))}return e||otheHandler(),doSpecialFormat()}}function quotaHandler(){var e=getSrcRest(),t=getNextQuotaIndex(fmtSource[0],e);chkFmtExpect(fmtSource[0]);var n=fmtSource.substr(0,1),o=exceptType==="ost",r="";t>-1?(r=fmtSource.substr(1,t),fmtResult+=quoteSpecialStr(r,n,o),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest(t+2)):(r=fmtSource.substr(1),fmtResult+=quoteSpecialStr(r,n,o),setFmtExpect("!"),fmtSource="")}function colonHandler(){fmtResult+=fmtOptions.isExpand?": ":":",chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function commaHandler(){var e=getCurIndent();fmtOptions.isExpand&&curIndex++,fmtResult+=fmtOptions.isExpand?",".concat(BREAK+e):",",chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest(),fmtSource.replace(/(\r)?\n|\s/gm,"")===""&&setFmtError("val")}function objPreHandler(){chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource[1]&&fmtSource[1]==="}"?(fmtResult+="{}",setFmtExpect("}"),fmtSource=getSrcRest(2)):(curLevel++,fmtResult+="{",brkLine4Special(),fmtSource=getSrcRest())}function objEndHandler(){curLevel--,brkLine4Special("}"),chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function arrPreHandler(){chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource[1]&&fmtSource[1]==="]"?(fmtResult+="[]",setFmtExpect("]"),fmtSource=getSrcRest(2)):(curLevel++,fmtResult+="[",brkLine4Special(),fmtSource=getSrcRest())}function arrEndHandler(){curLevel--,brkLine4Special("]"),chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function tupPreHandler(){chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource[1]&&fmtSource[1]===")"?(fmtResult+=fmtOptions.isStrict?"[]":"()",setFmtExpect(")"),fmtSource=getSrcRest(2)):(curLevel++,fmtResult+=fmtOptions.isStrict?"[":"(",brkLine4Special(),fmtSource=getSrcRest())}function tupEndHandler(){curLevel--,brkLine4Special(fmtOptions.isStrict?"]":")"),chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function unicHandler(e){var t=getSrcRest(e.length),n=e.indexOf("'")>-1?getNextQuotaIndex("'",t):getNextQuotaIndex('"',t);chkFmtExpect("u");var o=exceptType==="ost",r="";if(n>-1){var i=n+e.length+1;r=fmtSource.substr(e.length,i-e.length-1),fmtResult+=quoteSpecialStr(r,e,o),setFmtExpect("u"),fmtSource=getSrcRest(i)}else r=fmtSource.substr(e.length),fmtResult+=quoteSpecialStr(r,e,o),setFmtExpect("!"),fmtSource=""}function numbHandler(e){fmtResult+=e,chkFmtExpect("n"),setFmtExpect("n"),fmtSource=getSrcRest(e.length)}function boolHandler(e){fmtResult+=fmtOptions.isStrict?e.toLowerCase():e,chkFmtExpect("b"),setFmtExpect("b"),fmtSource=getSrcRest(e.length)}function nullHandler(e){fmtResult+=fmtOptions.isStrict?"null":e,chkFmtExpect("N"),setFmtExpect("N"),fmtSource=getSrcRest(e.length)}function otheHandler(){var e=fmtSource.match(/^[^\{\}\[\]\(\):,]*/),t=e&&e[0]||"";t&&(fmtResult+=t,chkFmtExpect("!"),fmtSource=getSrcRest(t.length))}function chkFmtExpect(e){if(isSrcValid)switch(exceptType){case"val":":,}])!".indexOf(e)>-1&&setFmtError("val");break;case"ost":`'"unbN`.indexOf(e)===-1&&setFmtError("ost");break;case"end":var t=getBracketPair(exceptSign);[",",t].indexOf(e)===-1&&setFmtError("end",t);break;case"col":e!==":"&&setFmtError("col");break}}function setFmtExpect(e){switch(e){case":":exceptType="val";break;case",":exceptSign==="{"?exceptType="ost":exceptType="val";break;case"{":exceptSign=e,signsQueue+=e,exceptType="ost";break;case"}":signsQueue=signsQueue.substr(0,signsQueue.length-1),exceptSign=signsQueue.substr(-1),exceptType="end";break;case"[":exceptSign=e,signsQueue+=e,exceptType="val";break;case"]":signsQueue=signsQueue.substr(0,signsQueue.length-1),exceptSign=signsQueue.substr(-1),exceptType="end";break;case"(":exceptSign=e,signsQueue+=e,exceptType="val";break;case")":signsQueue=signsQueue.substr(0,signsQueue.length-1),exceptSign=signsQueue.substr(-1),exceptType="end";break;case"u":case"n":case"b":case"N":case'"':case"'":exceptType==="ost"?exceptType="col":exceptType="end";break}}function setFmtError(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";switch(e){case"war":fmtType="warning";break;case"scc":fmtType="success";break;default:fmtType="danger";break}if(["ost","col","val","end"].indexOf(e)>-1){errFormat=!0,isSrcValid=!1,errExpect=t,errIndex=curIndex;var n=fmtResult.substr(-20).replace(/^(\s|\n|\r\n)*/,"").replace(/(\n|\r\n)/gm,"\\n"),o=fmtSource.substr(0,10).replace(/(\s|\n|\r\n)*$/,"").replace(/(\n|\r\n)/gm,"\\n");errNear="...".concat(n,">>>>>>").concat(o)}fmtSign=e,message=MESSAGES_MAP[e](curIndex,t)}function setFmtStatus(){if(isFmtError&&!errIndex)setFmtError("err"),errFormat=!0;else if(isSrcValid)if(signsQueue){var e=getBracketPair(signsQueue.substr(-1));setFmtError("end",e)}else setFmtError("scc");fmtLines=curIndex}function brkLine4Normal(e){return fmtOptions.isExpand?(curIndex++,e+BREAK):e}function brkLine4Special(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(!fmtOptions.isExpand)return fmtResult+=e;curIndex++,fmtResult+=BREAK+getCurIndent()+e}function quoteNormalStr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=fmtOptions.isEscape&&fmtOptions.keyQtMark==='"'&&t==='"'&&(!n||fmtOptions.isStrict);e=n?e.replace(/(?!\\[b|f|n|\\|r|t|x|v|'|"|0])\\/gm,"\\\\"):e.replace(/\\/gm,"\\\\"),ESCAPES_MAP.forEach(function(i){return e=e.replace(i.ptn,i.str)});var r=o?"\\".concat(t):t;switch(o&&(e=e.replace(/\\/gm,"\\\\")),t){case'"':return e=o?e.replace(/"/gm,'\\\\\\"'):e.replace(/"/gm,'\\"'),r+e+r;case"'":return e=e.replace(/'/gm,"\\'"),r+e+r;default:return e}}function quoteSpecialStr(e,t,n){var o=n?fmtOptions.keyQtMark:fmtOptions.valQtMark;return e=e.replace(/(?!\\[b|f|n|\\|r|t|x|v|'|"|0])\\/gm,""),e=e.replace(/\\\"/gm,'"'),e=e.replace(/\\\'/gm,"'"),e=quoteNormalStr(e,o,!0),!fmtOptions.isStrict&&t.length>1&&(e=t.substr(0,t.length-1)+e),e}function getSrcRest(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return fmtSource.length>e?fmtSource.substr(e):""}function getNextQuotaIndex(e,t){for(var n=0;n<t.length;n++)if(t[n]===e&&(n===0||t[n-1]!=="\\"||t[n-1]==="\\"&&t[n-2]==="\\"&&t[n-3]!=="\\"))return n;return-1}function getBaseIndent(){for(var e="",t=0;t<fmtOptions.indent;t++)e+=SPACE;return e}function getCurIndent(){for(var e="",t=0;t<curLevel;t++)e+=baseIndent;return e}function getBracketPair(e){var t=["{","[","("],n=["}","]",")"],o=t.indexOf(e),r=n.indexOf(e);return o>-1?n[o]:t[r]}}typeof define=="function"&&define.amd?define(function(){return fmt2json}):typeof exports=="object"?module.exports=fmt2json:root.fmt2json=fmt2json})(exports)});var ft=ve((ir,dt)=>{"use strict";dt.exports=pt()});var tt=[{path:"",loadComponent:()=>import("./chunk-C6NIW5K5.js").then(e=>e.TopPageComponent)},{path:"controls/:control",loadComponent:()=>import("./chunk-RKHGGQO3.js").then(e=>e.ControlPageComponent),children:[{path:"",loadChildren:()=>import("./chunk-XPFBBTDX.js").then(e=>e.controlPageRoute)}]}];var ae=new Se("APP_VALIDATION_MESSAGES"),nt=(()=>{var t,n;let o=class o{constructor(){g(this,t);g(this,n,(i,s)=>Object.assign(i,s));let i=D(ae);u(this,t,i.reduce(m(this,n),{}))}getMessage(i){return i===null?[]:Object.entries(i).map(([S,c])=>{let p=m(this,t)[S];return typeof p=="string"?p:p(c)})}};t=new WeakMap,n=new WeakMap,o.\u0275fac=function(s){return new(s||o)},o.\u0275prov=W({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();var rt={min:e=>`${e.min}\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`,max:e=>`${e.max}\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`,required:"\u5FC5\u9808\u5165\u529B\u3067\u3059",email:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u5F62\u5F0F\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",minLength:e=>`${e.requiredLength}\u6587\u5B57\u4EE5\u4E0A\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`,maxLength:e=>`${e.requiredLength}\u6587\u5B57\u4EE5\u4E0B\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`,pattern:e=>`\u30D1\u30BF\u30FC\u30F3${e.requiredPattern}\u306B\u4E00\u81F4\u3055\u305B\u3066\u304F\u3060\u3055\u3044`,nullValidator:e=>""};var ot={jsonSyntax:e=>"Json\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"};function z(e){return e!=null}function V(e,t){!t?.injector&&be(V);let n=t?.injector??D(Oe),o=new Ce(1),r=Le(()=>{let i;try{i=e()}catch(s){fe(()=>o.error(s));return}fe(()=>o.next(i))},{injector:n,manualCleanup:!0});return n.get(Fe).onDestroy(()=>{r.destroy(),o.complete()}),o.asObservable()}var le=(()=>{var t,n,o;let r=class r{constructor(){g(this,t);g(this,n);g(this,o);this.value=N(0),this.disabled=x(!1),this.touched=x(!1),this.increment=O(1),this.min=O(),this.max=O(),u(this,t,s=>{}),u(this,n,()=>{}),u(this,o,()=>{}),V(this.min).subscribe(m(this,o)),V(this.max).subscribe(m(this,o))}registerOnChange(s){u(this,t,s)}registerOnTouched(s){u(this,n,s)}registerOnValidatorChange(s){u(this,o,s)}setDisabledState(s){this.disabled.set(s)}writeValue(s){this.value.set(s)}onIncrease(){this.markAsDirty();let s=this.max();z(s)&&this.value()>=s||this.disabled()||(this.value.update(S=>S+this.increment()),m(this,t).call(this,this.value()))}onReduce(){if(this.markAsDirty(),this.disabled())return;let s=this.min();z(s)&&this.value()<=s||(this.value.update(S=>S-this.increment()),m(this,t).call(this,this.value()))}markAsDirty(){this.touched()||m(this,n).call(this)}validate(s){let S=this.min(),c=z(S)?ge.min(S)(s):null,p=this.max(),F=z(p)?ge.max(p)(s):null;return c||F}};t=new WeakMap,n=new WeakMap,o=new WeakMap,r.\u0275fac=function(S){return new(S||r)},r.\u0275cmp=v({type:r,selectors:[["app-counter"]],inputs:{value:[1,"value"],increment:[1,"increment"],min:[1,"min"],max:[1,"max"]},outputs:{value:"valueChange"},standalone:!0,features:[I([{provide:A,useExisting:r,multi:!0},{provide:L,useExisting:r,multi:!0}]),C],decls:6,vars:3,consts:[[3,"click","disabled"]],template:function(S,c){S&1&&(l(0,"button",0),P("click",function(){return c.onReduce()}),b(1,"-"),a(),l(2,"output"),b(3),a(),l(4,"button",0),P("click",function(){return c.onIncrease()}),b(5,"+"),a()),S&2&&(h("disabled",c.disabled()),d(3),$(c.value()),d(),h("disabled",c.disabled()))},styles:["output[_ngcontent-%COMP%]{display:inline-block;min-width:3rem;text-align:center}"]});let e=r;return e})();var _t=["*"],it=(()=>{let t=class t{constructor(){this.hasError=O.required()}get invalid(){return this.hasError()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-control-decorator"]],hostVars:2,hostBindings:function(r,i){r&2&&Re("app-control-decorator-has-error",i.invalid)},inputs:{hasError:[1,"hasError"]},standalone:!0,features:[C],ngContentSelectors:_t,decls:1,vars:0,template:function(r,i){r&1&&(Y(),ee(0))},styles:[`.app-control-decorator-has-error *{color:#ff6969;border-color:#ff6969}
`],encapsulation:2});let e=t;return e})();var Dt=["*"],Pt=e=>({error:e});function It(e,t){if(e&1&&b(0),e&2){let n=K();H(" ",n.controlRef.value," ")}}function Tt(e,t){e&1&&ee(0)}function wt(e,t){e&1&&(l(0,"div",2),y(1,"span")(2,"span")(3,"span"),a())}function Nt(e,t){if(e&1&&(l(0,"span",3),b(1),a()),e&2){let n=t.$implicit;d(),$(n)}}var w=(()=>{let t=class t{constructor(){this.label=O(""),this.readonly=O(!1),this.messages=x([]),this.messageService=D(nt)}get hasError(){return(this.controlRef?.touched&&this.controlRef?.invalid)??!1}get loading(){return this.controlRef?.pending??!1}ngAfterContentInit(){this.controlRef.control?.events.subscribe(()=>{let o=this.controlRef.errors;this.messages.set(this.messageService.getMessage(o))})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-control-field"]],contentQueries:function(r,i,s){if(r&1&&De(s,Ue,5),r&2){let S;Pe(S=Ie())&&(i.controlRef=S.first)}},inputs:{label:[1,"label"],readonly:[1,"readonly"]},standalone:!0,features:[C],ngContentSelectors:Dt,decls:8,vars:7,consts:[["appLabel","",3,"ngClass"],[3,"hasError"],[1,"loader"],["appLabel","",1,"error"]],template:function(r,i){r&1&&(Y(),l(0,"label",0),b(1),a(),l(2,"app-control-decorator",1),me(3,It,1,1)(4,Tt,1,0),a(),me(5,wt,4,0,"div",2),G(6,Nt,2,1,"span",3,Me)),r&2&&(h("ngClass",J(5,Pt,i.hasError)),d(),H(" ",i.label(),`
`),d(),h("hasError",i.hasError),d(),de(i.readonly()?3:4),d(2),de(i.loading?5:-1),d(),U(i.messages()))},dependencies:[ze,it,ne,_],styles:["[_nghost-%COMP%]{display:inline-flex;flex-direction:column}.error[_ngcontent-%COMP%]{color:#ff6969}.loader[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;gap:.2rem;margin:.2rem 0}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:.5rem;height:.5rem;background-color:#333;border-radius:50%;animation:_ngcontent-%COMP%_loading 1s ease-in-out infinite}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}@keyframes _ngcontent-%COMP%_loading{0%{background-color:#333c}50%{background-color:#3333334d}to{background-color:#3339}}"]});let e=t;return e})();var st="fieldset[_ngcontent-%COMP%]{width:fit-content;padding:.5rem}",At=(()=>{let t=class t extends le{constructor(){super(...arguments),this.control=new M(0)}};t.\u0275fac=(()=>{let o;return function(i){return(o||(o=Ee(t)))(i||t)}})(),t.\u0275cmp=v({type:t,selectors:[["app-counter-doc"]],standalone:!0,features:[ke,C],decls:2,vars:3,consts:[["label","Counter"],[3,"formControl","min","max"]],template:function(r,i){r&1&&(l(0,"app-control-field",0),y(1,"app-counter",1),a()),r&2&&(d(),h("formControl",i.control)("min",i.min())("max",i.max()))},dependencies:[le,_,k,T,w],styles:[st]});let e=t;return e})(),Lt=(()=>{let t=class t{constructor(){this.control=new M(0),this.setting=new Je({min:new M(0,{nonNullable:!0}),max:new M(10,{nonNullable:!0})})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-counter-doc"]],standalone:!0,features:[C],decls:9,vars:4,consts:[["label","Counter"],[3,"formControl","min","max"],[3,"formGroup"],["label","min"],["type","number","formControlName","min"],["label","max"],["type","number","formControlName","max"]],template:function(r,i){r&1&&(l(0,"app-control-field",0),y(1,"app-counter",1),a(),l(2,"fieldset",2)(3,"legend"),b(4,"Settings"),a(),l(5,"app-control-field",3),y(6,"input",4),a(),l(7,"app-control-field",5),y(8,"input",6),a()()),r&2&&(d(),h("formControl",i.control)("min",i.setting.value.min)("max",i.setting.value.max),d(),h("formGroup",i.setting))},dependencies:[le,_,q,ie,k,$e,T,qe,Ke,w],styles:[st]});let e=t;return e})(),jt={counter:[{title:"\u30C7\u30E2",component:At},{title:"\u5165\u529B\u7BC4\u56F2\u3092\u5236\u9650\u3059\u308B",component:Lt}]},at={provide:j,useValue:jt,multi:!0};var Q=class{static equal(t,n){return t.integer===n.integer&&t.fraction===n.fraction}constructor(t){this.integer=t.integer,this.fraction=t.fraction}toNumber(){return Number.parseFloat(this.toString())}toString(){return`${this.integer}.${this.fraction}`}toJSON(){let{integer:t,fraction:n}=this;return{integer:t,fraction:n}}};function lt(e){let t={},{value:n}=e,{integer:o,fraction:r}=n,i=[];return Number.isInteger(o)||i.push("integer"),Number.isInteger(r)||i.push("fraction"),i.length>0&&Object.assign(t,{decimalTypeError:i}),r<0&&Object.assign(t,{decimalRangeError:"fraction"}),Object.keys(t).length>0?t:null}var ct=(()=>{var t,n,o,r,ut;let s=class s{constructor(){g(this,r);g(this,t);g(this,n);g(this,o);this.value=N(new Q({integer:0,fraction:0})),u(this,t,te(()=>this.value(),{equal:Q.equal})),this.placeholder=O(),this.placeholders=te(()=>B(this,r,ut).call(this,this.placeholder())),u(this,n,c=>{}),u(this,o,()=>{}),this.touched=x(!1),this.disabled=x(!1)}registerOnChange(c){u(this,n,c)}registerOnTouched(c){u(this,o,c)}registerOnValidatorChange(c){}setDisabledState(c){this.disabled.set(c)}validate(c){return lt(c)}writeValue(c){this.value.set(new Q(c))}markAsTouch(){this.touched()||(m(this,o).call(this),this.touched.set(!0))}onFocus(){this.markAsTouch()}onChangeInteger(c){this.disabled()||(this.value.update(p=>new Q(ue(ce({},p),{integer:c}))),m(this,n).call(this,m(this,t).call(this)))}onChangeFraction(c){this.disabled()||(this.value.update(p=>new Q(ue(ce({},p),{fraction:c}))),m(this,n).call(this,m(this,t).call(this)))}};t=new WeakMap,n=new WeakMap,o=new WeakMap,r=new WeakSet,ut=function(c){if(!c)return;let[p,F]=c.split(/\s/);return{integer:p,fraction:F}},s.\u0275fac=function(p){return new(p||s)},s.\u0275cmp=v({type:s,selectors:[["app-decimal-input"]],inputs:{value:[1,"value"],placeholder:[1,"placeholder"]},outputs:{value:"valueChange"},standalone:!0,features:[I([{provide:A,useExisting:s,multi:!0},{provide:L,useExisting:s,multi:!0}]),C],decls:3,vars:6,consts:[["type","number",1,"integer",3,"focus","ngModelChange","ngModel","disabled"],["type","number",1,"fraction",3,"focus","ngModelChange","ngModel","disabled"]],template:function(p,F){if(p&1&&(l(0,"input",0),P("focus",function(){return F.onFocus()})("ngModelChange",function(E){return F.onChangeInteger(E)}),a(),b(1,"."),l(2,"input",1),P("focus",function(){return F.onFocus()})("ngModelChange",function(E){return F.onChangeFraction(E)}),a()),p&2){let f,E;h("ngModel",F.value().integer)("disabled",F.disabled()),pe("placeholder",(f=F.placeholders())==null?null:f.integer),d(2),h("ngModel",F.value().fraction)("disabled",F.disabled()),pe("placeholder",(E=F.placeholders())==null?null:E.fraction)}},dependencies:[se,q,ie,k,oe],styles:["input[_ngcontent-%COMP%]{width:4rem}.integer[_ngcontent-%COMP%]{text-align:right}.fraction[_ngcontent-%COMP%]{text-align:left}"]});let e=s;return e})();var Vt=(()=>{let t=class t{constructor(){this.control=new M({integer:0,fraction:0})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-decimal-input-demo"]],standalone:!0,features:[C],decls:2,vars:1,consts:[[3,"formControl"]],template:function(r,i){r&1&&(l(0,"app-control-field"),y(1,"app-decimal-input",0),a()),r&2&&(d(),h("formControl",i.control))},dependencies:[ct,_,k,T,w],encapsulation:2});let e=t;return e})(),Qt={decimalInput:[{title:"\u30C7\u30E2",component:Vt}]},mt={provide:j,useValue:Qt,multi:!0};var gt=Mt(ft());var ht=(()=>{var t,n,o,r,i,vt,Ct,St;let p=class p{constructor(){g(this,i);g(this,t);g(this,n);g(this,o);g(this,r);this.rows=O(5),this.value=N(null),this.stringifyValue=x(""),this.disabled=x(!1),u(this,t,x(!1)),u(this,n,x(!0)),u(this,o,f=>{}),u(this,r,()=>{}),V(this.value).subscribe(()=>{m(this,n).call(this)&&this.stringifyValue.set(B(this,i,St).call(this,this.value()))})}registerOnChange(f){u(this,o,f)}registerOnTouched(f){u(this,r,f)}setDisabledState(f){this.disabled.set(f)}writeValue(f){this.value.set(f)}validate(f){return f?m(this,n).call(this)?null:{jsonSyntax:!0}:null}onModelChange(f){if(this.disabled())return;B(this,i,vt).call(this);let E=B(this,i,Ct).call(this,f);this.value.set(E),m(this,o).call(this,this.value())}};t=new WeakMap,n=new WeakMap,o=new WeakMap,r=new WeakMap,i=new WeakSet,vt=function(){m(this,t).call(this)||(m(this,r).call(this),m(this,t).set(!0))},Ct=function(f){console.log(f);try{let E=JSON.parse(f);return m(this,n).set(!0),E}catch{return m(this,n).set(!1),null}},St=function(f){return(0,gt.default)(JSON.stringify(f))},p.\u0275fac=function(E){return new(E||p)},p.\u0275cmp=v({type:p,selectors:[["app-json-input"]],inputs:{rows:[1,"rows"],value:[1,"value"]},outputs:{value:"valueChange"},standalone:!0,features:[I([{provide:A,useExisting:p,multi:!0},{provide:L,useExisting:p,multi:!0}]),C],decls:1,vars:3,consts:[[3,"ngModelChange","ngModel","disabled","rows"]],template:function(E,Z){E&1&&(l(0,"textarea",0),P("ngModelChange",function(Rt){return Z.onModelChange(Rt)}),a()),E&2&&h("ngModel",Z.stringifyValue())("disabled",Z.disabled())("rows",Z.rows())},dependencies:[se,q,k,oe],styles:["textarea[_ngcontent-%COMP%]{font-family:Menlo,Monaco,Courier New,monospace}"]});let e=p;return e})();var Ht=(()=>{let t=class t{constructor(){this.control=new M({foo:"bar"})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-json-input-demo"]],standalone:!0,features:[C],decls:4,vars:4,consts:[[3,"formControl"]],template:function(r,i){r&1&&(l(0,"app-control-field"),y(1,"app-json-input",0),a(),b(2),we(3,"json")),r&2&&(d(),h("formControl",i.control),d(),H(" ",Ne(3,2,i.control.value)," "))},dependencies:[ht,_,k,T,w,je],encapsulation:2});let e=t;return e})(),Bt={jsonInput:[{title:"\u30C7\u30E2",component:Ht}]},bt={provide:j,useValue:Bt,multi:!0};var Gt=(e,t)=>t.value,Ut=e=>({disabled:e}),$t=(e,t)=>({selected:e,disabled:t});function Jt(e,t){if(e&1){let n=_e();l(0,"div",2),P("click",function(){let r=xe(n).$implicit,i=K();return ye(i.onSelected(r.value))}),b(1),a()}if(e&2){let n=t.$implicit,o=K();h("ngClass",Te(2,$t,o.isSelected(n.value),o.disabled())),d(),H(" ",n.label," ")}}var xt=(()=>{var t,n,o;let r=class r{constructor(){g(this,t);g(this,n);g(this,o);this.list=O.required(),this.value=N(),this.disabled=x(!1),this.touched=x(!1),u(this,t,s=>{}),u(this,n,()=>{}),u(this,o,()=>{}),V(this.list).subscribe(m(this,o))}registerOnChange(s){u(this,t,s)}registerOnTouched(s){u(this,n,s)}registerOnValidatorChange(s){u(this,o,s)}setDisabledState(s){this.disabled.set(s)}validate(s){if(!s||!s.value)return null;let S=this.value();return this.list().map(p=>p.value).includes(S)?null:{optionRange:S}}writeValue(s){this.value.set(s)}isSelected(s){return this.value()===s}onSelected(s){this.disabled()||(this.markAsDirty(),this.value.set(s),m(this,t).call(this,this.value()))}markAsDirty(){this.touched()||(this.touched.set(!0),m(this,n).call(this))}};t=new WeakMap,n=new WeakMap,o=new WeakMap,r.\u0275fac=function(S){return new(S||r)},r.\u0275cmp=v({type:r,selectors:[["app-toggle-button"]],inputs:{list:[1,"list"],value:[1,"value"]},outputs:{value:"valueChange"},standalone:!0,features:[I([{provide:A,useExisting:r,multi:!0},{provide:L,useExisting:r,multi:!0}]),C],decls:3,vars:3,consts:[[1,"button-case",3,"ngClass"],[1,"option",3,"ngClass"],[1,"option",3,"click","ngClass"]],template:function(S,c){S&1&&(l(0,"div",0),G(1,Jt,2,5,"div",1,Gt),a()),S&2&&(h("ngClass",J(1,Ut,c.disabled())),d(),U(c.list()))},dependencies:[ne],styles:[".button-case[_ngcontent-%COMP%]{display:inline-block;border:1px solid #555555;border-radius:3px}.option[_ngcontent-%COMP%]{display:inline-block;padding:.5rem}.option[_ngcontent-%COMP%]:not(:first-child){border-left:1px solid #555555}.option[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#ddd}.option.selected[_ngcontent-%COMP%]{color:#fff;background-color:#555}.option.disabled[_ngcontent-%COMP%]{color:#eee;background-color:#ddd}.option.disabled[_ngcontent-%COMP%]:hover{cursor:not-allowed}"]});let e=r;return e})();var qt=(()=>{let t=class t{constructor(){this.options=[{label:"option1",value:1},{label:"option2",value:2}],this.control=new M(1)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-toggle-button-demo"]],standalone:!0,features:[C],decls:2,vars:2,consts:[[3,"list","formControl"]],template:function(r,i){r&1&&(l(0,"app-control-field"),y(1,"app-toggle-button",0),a()),r&2&&(d(),h("list",i.options)("formControl",i.control))},dependencies:[xt,_,k,T,w],encapsulation:2});let e=t;return e})(),Kt={toggleButton:[{title:"\u30C7\u30E2",component:qt}]},yt={provide:j,useValue:Kt,multi:!0};var zt=[at,mt,bt,yt];function Et(){return zt}var Ot={providers:[Ae(),Be(tt),Ve(),We({clipboardOptions:{provide:Ze,useValue:{buttonComponent:Xe}}}),Et(),{provide:ae,useValue:rt,multi:!0},{provide:ae,useValue:ot,multi:!0}]};var he=(()=>{var t;let n=class n{constructor(){g(this,t);u(this,t,D(Ye))}getPageList(){return m(this,t).controlNames().map(r=>({path:r,label:et(r)})).filter(r=>!!r.path).sort()}};t=new WeakMap,n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=W({token:n,factory:n.\u0275fac});let e=n;return e})();var Xt=(e,t)=>t.path,Zt=e=>["controls",e];function Wt(e,t){if(e&1&&(l(0,"li")(1,"a",0),b(2),a()()),e&2){let n=t.$implicit;d(),h("routerLink",J(2,Zt,n.path)),d(),$(n.label)}}var Ft=(()=>{var t;let n=class n{constructor(){g(this,t);u(this,t,D(he)),this.list=x(m(this,t).getPageList())}};t=new WeakMap,n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=v({type:n,selectors:[["app-control-list-page"]],standalone:!0,features:[I([he]),C],decls:5,vars:0,consts:[[3,"routerLink"]],template:function(i,s){i&1&&(l(0,"h3"),b(1,` \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u4E00\u89A7
`),a(),l(2,"ul"),G(3,Wt,3,4,"li",null,Xt),a()),i&2&&(d(3),U(s.list()))},dependencies:[Ge,re],styles:["h3[_ngcontent-%COMP%]{font-size:.8rem}li[_ngcontent-%COMP%]{list-style:none;padding-left:.5rem}"]});let e=n;return e})();var kt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=v({type:t,selectors:[["app-root"]],standalone:!0,features:[C],decls:13,vars:0,consts:[["routerLink","/"],[1,"main"],[1,"content"]],template:function(r,i){r&1&&(l(0,"header")(1,"h1")(2,"a",0),b(3,"Control catalog"),a()(),l(4,"p"),b(5,"Angular Custom Control idea catalogs."),a()(),l(6,"nav")(7,"h2"),b(8,"Menu"),a(),y(9,"app-control-list-page"),a(),l(10,"main",1)(11,"div",2),y(12,"router-outlet"),a()())},dependencies:[He,Ft,re],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:10rem auto;grid-template-rows:5rem auto}header[_ngcontent-%COMP%]{grid-column:1/3;background-color:#555;color:#fff}header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}h1[_ngcontent-%COMP%]{margin:0}nav[_ngcontent-%COMP%]{padding:1rem;text-underline:none}nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem}"]});let e=t;return e})();Qe(kt,Ot).catch(e=>console.error(e));
