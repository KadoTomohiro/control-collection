import{a as y,c as R,d as O,g as N,k as I,q as Q,t as H}from"./chunk-QELWJTH3.js";import{La as l,Ma as x,Ta as h,Za as v,_a as b,ba as S,bb as E,c as g,d as _,e as c,f as m,g as f,h as p,lb as k,mb as F}from"./chunk-4SLXKAUT.js";var T=g((exports,module)=>{"use strict";(function(root){var performance=(typeof window=="object"?window:eval("require('perf_hooks')")).performance,BREAK=`\r
`,SPACE=" ",OPTIONS={indent:2,isExpand:!0,isStrict:!1,isEscape:!1,isUnscape:!1,keyQtMark:'"',valQtMark:'"'},ESCAPES_MAP=[{ptn:/\r\n/gm,str:""},{ptn:/\n\r/gm,str:""},{ptn:/\n/gm,str:"\\n"},{ptn:/\r/gm,str:"\\r"},{ptn://gm,str:"\\b"},{ptn://gm,str:"\\v"},{ptn:/\f/gm,str:"\\f"},{ptn:/\t/gm,str:"\\t"}],MESSAGES_MAP={err:function e(){return"Parse Error, an excessive abnormal Json!"},war:function e(t){return"Formated ".concat(t," lines, abnormal JSON source!")},scc:function e(t){return"Success formated ".concat(t," lines!")},val:function e(t){return"Invalid value in line: ".concat(t)},ost:function e(t){return"Expect a string in line: ".concat(t)},col:function e(t){return"Expect a colon in line: ".concat(t)},end:function e(t,r){return'Expect a comma or a "'.concat(r,'" in line: ').concat(t)}};function fmt2json(source,options){var startTime=performance.now(),fmtSource=source,curLevel=0,curIndex=1,exceptType="",exceptSign="",signsQueue="",baseIndent="",isSrcValid=!0,isFmtError=!1,withDetails=!1,fmtResult="",fmtType="info",fmtSign="",fmtLines=0,message="",errFormat=!1,errNear="",errIndex=NaN,errExpect="",fmtOptions=Object.assign({},OPTIONS);options&&(typeof options.withDetails=="boolean"&&(withDetails=options.withDetails),typeof options.expand=="boolean"&&(fmtOptions.isExpand=options.expand),typeof options.strict=="boolean"&&(fmtOptions.isStrict=options.strict),typeof options.escape=="boolean"&&(fmtOptions.isEscape=options.escape),typeof options.unscape=="boolean"&&(fmtOptions.isUnscape=options.unscape),typeof options.indent=="number"&&options.indent>0&&(fmtOptions.indent=options.indent),["'",'"',""].indexOf(options.keyQtMark)>-1&&(fmtOptions.keyQtMark=options.keyQtMark),["'",'"'].indexOf(options.valQtMark)>-1&&(fmtOptions.valQtMark=options.valQtMark)),baseIndent=getBaseIndent();try{try{fmtSource!==""&&eval("fmtSource = ".concat(fmtSource)),fmtSource===""||["object","boolean"].indexOf(typeof fmtSource)>-1?doNormalFormat(fmtSource):(fmtOptions.isUnscape&&(fmtSource=fmtSource.replace(/\\"/gm,'"').replace(/\\\\/gm,"\\")),doSpecialFormat())}catch(e){fmtOptions.isUnscape&&(fmtSource=fmtSource.replace(/\\"/gm,'"').replace(/\\\\/gm,"\\")),doSpecialFormat()}}catch(e){isFmtError=!0}finally{return setFmtStatus(),withDetails?{result:fmtResult,fmtType,fmtSign,fmtLines,fmtTime:performance.now()-startTime,message,errFormat,errIndex,errNear,errExpect}:fmtResult}function doNormalFormat(e){if([!0,!1,null,""].indexOf(e)>-1)return fmtResult+=String(e);fmtOptions.isStrict&&(e=JSON.parse(JSON.stringify(e))),e instanceof Array?arrayHandler(e):objectHandler(e)}function arrayHandler(e){var t;if(e.length>0){fmtResult+=brkLine4Normal("["),curLevel++;for(var r=0;r<e.length;r++)t=fmtOptions.isExpand?getCurIndent():"",fmtResult+=t,valueHandler(e[r]),fmtResult+=brkLine4Normal(r<e.length-1?",":"");curLevel--,t=fmtOptions.isExpand?getCurIndent():"",fmtResult+=t+"]"}else fmtResult+="[]"}function objectHandler(e){var t=Object.keys(e);if(t.length>0){var r,n=0;fmtResult+=brkLine4Normal("{"),curLevel++;for(var s in e){n++;var o=quoteNormalStr(s,fmtOptions.keyQtMark);r=fmtOptions.isExpand?getCurIndent():"",fmtResult+=r,fmtResult+=o,fmtResult+=fmtOptions.isExpand?": ":":",valueHandler(e[s]),fmtResult+=brkLine4Normal(n<t.length?",":"")}curLevel--,r=fmtOptions.isExpand?getCurIndent():"",fmtResult+=r+"}"}else fmtResult+="{}"}function valueHandler(e){switch(typeof e){case"undefined":case"function":return fmtResult+=String(e);case"number":case"boolean":return fmtResult+=e;case"object":return doNormalFormat(e);case"string":return fmtResult+=quoteNormalStr(e,fmtOptions.valQtMark)}}function doSpecialFormat(){if(fmtSource=fmtSource.replace(/^\s*/,""),fmtSource.length!==0){var e=!1;switch(fmtSource[0]){case"'":case'"':e=!0,quotaHandler();break;case":":e=!0,colonHandler();break;case",":e=!0,commaHandler();break;case"{":e=!0,objPreHandler();break;case"}":e=!0,objEndHandler();break;case"[":e=!0,arrPreHandler();break;case"]":e=!0,arrEndHandler();break;case"(":e=!0,tupPreHandler();break;case")":e=!0,tupEndHandler();break}if(!e){var t=fmtSource.match(/^u(\s)?'|^u(\s)?"/);t&&(e=!0,unicHandler(t[0]))}if(!e){var r=fmtSource.match(/^(-?[0-9]+\.?[0-9]*|0[xX][0-9a-fA-F]+)/);r&&(e=!0,numbHandler(r[0]))}if(!e){var n=fmtSource.match(/^(true|false|True|False)/);n&&(e=!0,boolHandler(n[0]))}if(!e){var s=fmtSource.match(/^(null|undefined|None|NaN)/);s&&(e=!0,nullHandler(s[0]))}return e||otheHandler(),doSpecialFormat()}}function quotaHandler(){var e=getSrcRest(),t=getNextQuotaIndex(fmtSource[0],e);chkFmtExpect(fmtSource[0]);var r=fmtSource.substr(0,1),n=exceptType==="ost",s="";t>-1?(s=fmtSource.substr(1,t),fmtResult+=quoteSpecialStr(s,r,n),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest(t+2)):(s=fmtSource.substr(1),fmtResult+=quoteSpecialStr(s,r,n),setFmtExpect("!"),fmtSource="")}function colonHandler(){fmtResult+=fmtOptions.isExpand?": ":":",chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function commaHandler(){var e=getCurIndent();fmtOptions.isExpand&&curIndex++,fmtResult+=fmtOptions.isExpand?",".concat(BREAK+e):",",chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest(),fmtSource.replace(/(\r)?\n|\s/gm,"")===""&&setFmtError("val")}function objPreHandler(){chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource[1]&&fmtSource[1]==="}"?(fmtResult+="{}",setFmtExpect("}"),fmtSource=getSrcRest(2)):(curLevel++,fmtResult+="{",brkLine4Special(),fmtSource=getSrcRest())}function objEndHandler(){curLevel--,brkLine4Special("}"),chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function arrPreHandler(){chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource[1]&&fmtSource[1]==="]"?(fmtResult+="[]",setFmtExpect("]"),fmtSource=getSrcRest(2)):(curLevel++,fmtResult+="[",brkLine4Special(),fmtSource=getSrcRest())}function arrEndHandler(){curLevel--,brkLine4Special("]"),chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function tupPreHandler(){chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource[1]&&fmtSource[1]===")"?(fmtResult+=fmtOptions.isStrict?"[]":"()",setFmtExpect(")"),fmtSource=getSrcRest(2)):(curLevel++,fmtResult+=fmtOptions.isStrict?"[":"(",brkLine4Special(),fmtSource=getSrcRest())}function tupEndHandler(){curLevel--,brkLine4Special(fmtOptions.isStrict?"]":")"),chkFmtExpect(fmtSource[0]),setFmtExpect(fmtSource[0]),fmtSource=getSrcRest()}function unicHandler(e){var t=getSrcRest(e.length),r=e.indexOf("'")>-1?getNextQuotaIndex("'",t):getNextQuotaIndex('"',t);chkFmtExpect("u");var n=exceptType==="ost",s="";if(r>-1){var o=r+e.length+1;s=fmtSource.substr(e.length,o-e.length-1),fmtResult+=quoteSpecialStr(s,e,n),setFmtExpect("u"),fmtSource=getSrcRest(o)}else s=fmtSource.substr(e.length),fmtResult+=quoteSpecialStr(s,e,n),setFmtExpect("!"),fmtSource=""}function numbHandler(e){fmtResult+=e,chkFmtExpect("n"),setFmtExpect("n"),fmtSource=getSrcRest(e.length)}function boolHandler(e){fmtResult+=fmtOptions.isStrict?e.toLowerCase():e,chkFmtExpect("b"),setFmtExpect("b"),fmtSource=getSrcRest(e.length)}function nullHandler(e){fmtResult+=fmtOptions.isStrict?"null":e,chkFmtExpect("N"),setFmtExpect("N"),fmtSource=getSrcRest(e.length)}function otheHandler(){var e=fmtSource.match(/^[^\{\}\[\]\(\):,]*/),t=e&&e[0]||"";t&&(fmtResult+=t,chkFmtExpect("!"),fmtSource=getSrcRest(t.length))}function chkFmtExpect(e){if(isSrcValid)switch(exceptType){case"val":":,}])!".indexOf(e)>-1&&setFmtError("val");break;case"ost":`'"unbN`.indexOf(e)===-1&&setFmtError("ost");break;case"end":var t=getBracketPair(exceptSign);[",",t].indexOf(e)===-1&&setFmtError("end",t);break;case"col":e!==":"&&setFmtError("col");break}}function setFmtExpect(e){switch(e){case":":exceptType="val";break;case",":exceptSign==="{"?exceptType="ost":exceptType="val";break;case"{":exceptSign=e,signsQueue+=e,exceptType="ost";break;case"}":signsQueue=signsQueue.substr(0,signsQueue.length-1),exceptSign=signsQueue.substr(-1),exceptType="end";break;case"[":exceptSign=e,signsQueue+=e,exceptType="val";break;case"]":signsQueue=signsQueue.substr(0,signsQueue.length-1),exceptSign=signsQueue.substr(-1),exceptType="end";break;case"(":exceptSign=e,signsQueue+=e,exceptType="val";break;case")":signsQueue=signsQueue.substr(0,signsQueue.length-1),exceptSign=signsQueue.substr(-1),exceptType="end";break;case"u":case"n":case"b":case"N":case'"':case"'":exceptType==="ost"?exceptType="col":exceptType="end";break}}function setFmtError(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";switch(e){case"war":fmtType="warning";break;case"scc":fmtType="success";break;default:fmtType="danger";break}if(["ost","col","val","end"].indexOf(e)>-1){errFormat=!0,isSrcValid=!1,errExpect=t,errIndex=curIndex;var r=fmtResult.substr(-20).replace(/^(\s|\n|\r\n)*/,"").replace(/(\n|\r\n)/gm,"\\n"),n=fmtSource.substr(0,10).replace(/(\s|\n|\r\n)*$/,"").replace(/(\n|\r\n)/gm,"\\n");errNear="...".concat(r,">>>>>>").concat(n)}fmtSign=e,message=MESSAGES_MAP[e](curIndex,t)}function setFmtStatus(){if(isFmtError&&!errIndex)setFmtError("err"),errFormat=!0;else if(isSrcValid)if(signsQueue){var e=getBracketPair(signsQueue.substr(-1));setFmtError("end",e)}else setFmtError("scc");fmtLines=curIndex}function brkLine4Normal(e){return fmtOptions.isExpand?(curIndex++,e+BREAK):e}function brkLine4Special(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(!fmtOptions.isExpand)return fmtResult+=e;curIndex++,fmtResult+=BREAK+getCurIndent()+e}function quoteNormalStr(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=fmtOptions.isEscape&&fmtOptions.keyQtMark==='"'&&t==='"'&&(!r||fmtOptions.isStrict);e=r?e.replace(/(?!\\[b|f|n|\\|r|t|x|v|'|"|0])\\/gm,"\\\\"):e.replace(/\\/gm,"\\\\"),ESCAPES_MAP.forEach(function(o){return e=e.replace(o.ptn,o.str)});var s=n?"\\".concat(t):t;switch(n&&(e=e.replace(/\\/gm,"\\\\")),t){case'"':return e=n?e.replace(/"/gm,'\\\\\\"'):e.replace(/"/gm,'\\"'),s+e+s;case"'":return e=e.replace(/'/gm,"\\'"),s+e+s;default:return e}}function quoteSpecialStr(e,t,r){var n=r?fmtOptions.keyQtMark:fmtOptions.valQtMark;return e=e.replace(/(?!\\[b|f|n|\\|r|t|x|v|'|"|0])\\/gm,""),e=e.replace(/\\\"/gm,'"'),e=e.replace(/\\\'/gm,"'"),e=quoteNormalStr(e,n,!0),!fmtOptions.isStrict&&t.length>1&&(e=t.substr(0,t.length-1)+e),e}function getSrcRest(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return fmtSource.length>e?fmtSource.substr(e):""}function getNextQuotaIndex(e,t){for(var r=0;r<t.length;r++)if(t[r]===e&&(r===0||t[r-1]!=="\\"||t[r-1]==="\\"&&t[r-2]==="\\"&&t[r-3]!=="\\"))return r;return-1}function getBaseIndent(){for(var e="",t=0;t<fmtOptions.indent;t++)e+=SPACE;return e}function getCurIndent(){for(var e="",t=0;t<curLevel;t++)e+=baseIndent;return e}function getBracketPair(e){var t=["{","[","("],r=["}","]",")"],n=t.indexOf(e),s=r.indexOf(e);return n>-1?r[n]:t[s]}}typeof define=="function"&&define.amd?define(function(){return fmt2json}):typeof exports=="object"?module.exports=fmt2json:root.fmt2json=fmt2json})(exports)});var C=g((V,L)=>{"use strict";L.exports=T()});var w=_(C());var $=(()=>{var t,r,n,s,o,P,j,A;let i=class i{constructor(){m(this,o);m(this,t);m(this,r);m(this,n);m(this,s);this.value=x(null),this.stringifyValue=l(""),this.disabled=l(!1),f(this,t,l(!1)),f(this,r,l(!0)),f(this,n,a=>{}),f(this,s,()=>{}),H(this.value).subscribe(()=>{c(this,r).call(this)&&this.stringifyValue.set(p(this,o,A).call(this,this.value()))})}registerOnChange(a){f(this,n,a)}registerOnTouched(a){f(this,s,a)}setDisabledState(a){this.disabled.set(a)}writeValue(a){this.value.set(a)}validate(a){return a?c(this,r).call(this)?null:{jsonSyntax:!0}:null}onModelChange(a){if(this.disabled())return;p(this,o,P).call(this);let u=p(this,o,j).call(this,a);this.value.set(u),c(this,n).call(this,this.value())}};t=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,o=new WeakSet,P=function(){c(this,t).call(this)||(c(this,s).call(this),c(this,t).set(!0))},j=function(a){console.log(a);try{let u=JSON.parse(a);return c(this,r).set(!0),u}catch{return c(this,r).set(!1),null}},A=function(a){return(0,w.default)(JSON.stringify(a))},i.\u0275fac=function(u){return new(u||i)},i.\u0275cmp=S({type:i,selectors:[["app-json-input"]],inputs:{value:[1,"value"]},outputs:{value:"valueChange"},standalone:!0,features:[k([{provide:y,useExisting:i,multi:!0},{provide:O,useExisting:i,multi:!0}]),F],decls:1,vars:2,consts:[[3,"ngModelChange","ngModel","disabled"]],template:function(u,d){u&1&&(v(0,"textarea",0),E("ngModelChange",function(M){return d.onModelChange(M)}),b()),u&2&&h("ngModel",d.stringifyValue())("disabled",d.disabled())},dependencies:[Q,R,N,I],styles:["textarea[_ngcontent-%COMP%]{font-family:Menlo,Monaco,Courier New,monospace}"]});let e=i;return e})();export{$ as a};