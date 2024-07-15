var _self=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var Prism=function(l){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,A=0,S={},i={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof w?new w(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++A}),e.__id},clone:function e(t,n){n=n||{};var a,r;switch(i.util.type(t)){case"Object":if(r=i.util.objId(t),n[r])return n[r];a={},n[r]=a;for(var u in t)t.hasOwnProperty(u)&&(a[u]=e(t[u],n));return a;case"Array":return r=i.util.objId(t),n[r]?n[r]:(a=[],n[r]=a,t.forEach(function(g,s){a[s]=e(g,n)}),a);default:return t}},getLanguage:function(e){for(;e;){var t=f.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(f,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:S,plaintext:S,text:S,txt:S,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var r=a[e],u={};for(var g in r)if(r.hasOwnProperty(g)){if(g==t)for(var s in n)n.hasOwnProperty(s)&&(u[s]=n[s]);n.hasOwnProperty(g)||(u[g]=r[g])}var y=a[e];return a[e]=u,i.languages.DFS(i.languages,function(x,z){z===y&&x!=e&&(this[x]=u)}),u},DFS:function e(t,n,a,r){r=r||{};var u=i.util.objId;for(var g in t)if(t.hasOwnProperty(g)){n.call(t,g,t[g],a||g);var s=t[g],y=i.util.type(s);y==="Object"&&!r[u(s)]?(r[u(s)]=!0,e(s,n,null,r)):y==="Array"&&!r[u(s)]&&(r[u(s)]=!0,e(s,n,g,r))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),i.hooks.run("before-all-elements-highlight",a);for(var r=0,u;u=a.elements[r++];)i.highlightElement(u,t===!0,a.callback)},highlightElement:function(e,t,n){var a=i.util.getLanguage(e),r=i.languages[a];i.util.setLanguage(e,a);var u=e.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(u,a);var g=e.textContent,s={element:e,language:a,grammar:r,code:g};function y(z){s.highlightedCode=z,i.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i.hooks.run("after-highlight",s),i.hooks.run("complete",s),n&&n.call(s.element)}if(i.hooks.run("before-sanity-check",s),u=s.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!s.code){i.hooks.run("complete",s),n&&n.call(s.element);return}if(i.hooks.run("before-highlight",s),!s.grammar){y(i.util.encode(s.code));return}if(t&&l.Worker){var x=new Worker(i.filename);x.onmessage=function(z){y(z.data)},x.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else y(i.highlight(s.code,s.grammar,s.language))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(i.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=i.tokenize(a.code,a.grammar),i.hooks.run("after-tokenize",a),w.stringify(i.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new o;return v(r,r.head,e),F(e,r,t,r.head,0),h(r)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(!(!n||!n.length))for(var a=0,r;r=n[a++];)r(t)}},Token:w};l.Prism=i;function w(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=(a||"").length|0}w.stringify=function e(t,n){if(typeof t=="string")return t;if(Array.isArray(t)){var a="";return t.forEach(function(y){a+=e(y,n)}),a}var r={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},u=t.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(r.classes,u):r.classes.push(u)),i.hooks.run("wrap",r);var g="";for(var s in r.attributes)g+=" "+s+'="'+(r.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+g+">"+r.content+"</"+r.tag+">"};function c(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var u=r[1].length;r.index+=u,r[0]=r[0].slice(u)}return r}function F(e,t,n,a,r,u){for(var g in n)if(!(!n.hasOwnProperty(g)||!n[g])){var s=n[g];s=Array.isArray(s)?s:[s];for(var y=0;y<s.length;++y){if(u&&u.cause==g+","+y)return;var x=s[y],z=x.inside,D=!!x.lookbehind,q=!!x.greedy,W=x.alias;if(q&&!x.pattern.global){var Z=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,Z+"g")}for(var j=x.pattern||x,k=a.next,$=r;k!==t.tail&&!(u&&$>=u.reach);$+=k.value.length,k=k.next){var L=k.value;if(t.length>e.length)return;if(!(L instanceof w)){var T=1,E;if(q){if(E=c(j,$,e,D),!E||E.index>=e.length)break;var I=E.index,B=E.index+E[0].length,_=$;for(_+=k.value.length;I>=_;)k=k.next,_+=k.value.length;if(_-=k.value.length,$=_,k.value instanceof w)continue;for(var C=k;C!==t.tail&&(_<B||typeof C.value=="string");C=C.next)T++,_+=C.value.length;T--,L=e.slice($,_),E.index-=$}else if(E=c(j,0,L,D),!E)continue;var I=E.index,H=E[0],M=L.slice(0,I),O=L.slice(I+H.length),P=$+L.length;u&&P>u.reach&&(u.reach=P);var R=k.prev;M&&(R=v(t,R,M),$+=M.length),m(t,R,T);var G=new w(g,z?i.tokenize(H,z):H,W,H);if(k=v(t,R,G),O&&v(t,k,O),T>1){var N={cause:g+","+y,reach:P};F(e,t,n,k.prev,$,N),u&&N.reach>u.reach&&(u.reach=N.reach)}}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function v(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function m(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}function h(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(!l.document)return l.addEventListener&&(i.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,a=t.code,r=t.immediateClose;l.postMessage(i.highlight(a,i.languages[n],n)),r&&l.close()},!1)),i;var d=i.util.currentScript();d&&(i.filename=d.src,d.hasAttribute("data-manual")&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var b=document.readyState;b==="loading"||b==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(_self);typeof module<"u"&&module.exports&&(module.exports=Prism),typeof global<"u"&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(f,A){var S={};S["language-"+A]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[A]},S.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:S}};i["language-"+A]={pattern:/[\s\S]+/,inside:Prism.languages[A]};var w={};w[f]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return f}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",w)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(l,f){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[f,"language-"+f],inside:Prism.languages[f]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(l){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+f.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var A=l.languages.markup;A&&(A.tag.addInlined("style","css"),A.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(typeof Prism>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading\u2026",f=function(d,p){return"\u2716 Error "+d+" while fetching file: "+p},A="\u2716 Error: File does not exist or is empty",S={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",w="loading",c="loaded",F="failed",o="pre[data-src]:not(["+i+'="'+c+'"]):not(['+i+'="'+w+'"])';function v(d,p,b){var e=new XMLHttpRequest;e.open("GET",d,!0),e.onreadystatechange=function(){e.readyState==4&&(e.status<400&&e.responseText?p(e.responseText):e.status>=400?b(f(e.status,e.statusText)):b(A))},e.send(null)}function m(d){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(p){var b=Number(p[1]),e=p[2],t=p[3];return e?t?[b,Number(t)]:[b,void 0]:[b,b]}}Prism.hooks.add("before-highlightall",function(d){d.selector+=", "+o}),Prism.hooks.add("before-sanity-check",function(d){var p=d.element;if(p.matches(o)){d.code="",p.setAttribute(i,w);var b=p.appendChild(document.createElement("CODE"));b.textContent=l;var e=p.getAttribute("data-src"),t=d.language;if(t==="none"){var n=(/\.(\w+)$/.exec(e)||[,"none"])[1];t=S[n]||n}Prism.util.setLanguage(b,t),Prism.util.setLanguage(p,t);var a=Prism.plugins.autoloader;a&&a.loadLanguages(t),v(e,function(r){p.setAttribute(i,c);var u=m(p.getAttribute("data-range"));if(u){var g=r.split(/\r\n?|\n/g),s=u[0],y=u[1]==null?g.length:u[1];s<0&&(s+=g.length),s=Math.max(0,Math.min(s-1,g.length)),y<0&&(y+=g.length),y=Math.max(0,Math.min(y,g.length)),r=g.slice(s,y).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(s+1))}b.textContent=r,Prism.highlightElement(b)},function(r){p.setAttribute(i,F),b.textContent=r})}}),Prism.plugins.fileHighlight={highlight:function(p){for(var b=(p||document).querySelectorAll(o),e=0,t;t=b[e++];)Prism.highlightElement(t)}};var h=!1;Prism.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}(),function(l){l.languages.typescript=l.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),l.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete l.languages.typescript.parameter,delete l.languages.typescript["literal-property"];var f=l.languages.extend("typescript",{});delete f["class-name"],l.languages.typescript["class-name"].inside=f,l.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:f}}}}),l.languages.ts=l.languages.typescript}(Prism),function(l){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+f.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var A=l.languages.markup;A&&(A.tag.addInlined("style","css"),A.tag.addAttribute("style","css"))}(Prism),function(){if(typeof Prism>"u"||typeof document>"u")return;var l="line-numbers",f=/\n(?!$)/g,A=Prism.plugins.lineNumbers={getLine:function(c,F){if(!(c.tagName!=="PRE"||!c.classList.contains(l))){var o=c.querySelector(".line-numbers-rows");if(o){var v=parseInt(c.getAttribute("data-start"),10)||1,m=v+(o.children.length-1);F<v&&(F=v),F>m&&(F=m);var h=F-v;return o.children[h]}}},resize:function(c){S([c])},assumeViewportIndependence:!0};function S(c){if(c=c.filter(function(o){var v=i(o),m=v["white-space"];return m==="pre-wrap"||m==="pre-line"}),c.length!=0){var F=c.map(function(o){var v=o.querySelector("code"),m=o.querySelector(".line-numbers-rows");if(!(!v||!m)){var h=o.querySelector(".line-numbers-sizer"),d=v.textContent.split(f);h||(h=document.createElement("span"),h.className="line-numbers-sizer",v.appendChild(h)),h.innerHTML="0",h.style.display="block";var p=h.getBoundingClientRect().height;return h.innerHTML="",{element:o,lines:d,lineHeights:[],oneLinerHeight:p,sizer:h}}}).filter(Boolean);F.forEach(function(o){var v=o.sizer,m=o.lines,h=o.lineHeights,d=o.oneLinerHeight;h[m.length-1]=void 0,m.forEach(function(p,b){if(p&&p.length>1){var e=v.appendChild(document.createElement("span"));e.style.display="block",e.textContent=p}else h[b]=d})}),F.forEach(function(o){for(var v=o.sizer,m=o.lineHeights,h=0,d=0;d<m.length;d++)m[d]===void 0&&(m[d]=v.children[h++].getBoundingClientRect().height)}),F.forEach(function(o){var v=o.sizer,m=o.element.querySelector(".line-numbers-rows");v.style.display="none",v.innerHTML="",o.lineHeights.forEach(function(h,d){m.children[d].style.height=h+"px"})})}}function i(c){return c?window.getComputedStyle?getComputedStyle(c):c.currentStyle||null:null}var w=void 0;window.addEventListener("resize",function(){A.assumeViewportIndependence&&w===window.innerWidth||(w=window.innerWidth,S(Array.prototype.slice.call(document.querySelectorAll("pre."+l))))}),Prism.hooks.add("complete",function(c){if(c.code){var F=c.element,o=F.parentNode;if(!(!o||!/pre/i.test(o.nodeName))&&!F.querySelector(".line-numbers-rows")&&Prism.util.isActive(F,l)){F.classList.remove(l),o.classList.add(l);var v=c.code.match(f),m=v?v.length+1:1,h,d=new Array(m+1).join("<span></span>");h=document.createElement("span"),h.setAttribute("aria-hidden","true"),h.className="line-numbers-rows",h.innerHTML=d,o.hasAttribute("data-start")&&(o.style.counterReset="linenumber "+(parseInt(o.getAttribute("data-start"),10)-1)),c.element.appendChild(h),S([o]),Prism.hooks.run("line-numbers",c)}}}),Prism.hooks.add("line-numbers",function(c){c.plugins=c.plugins||{},c.plugins.lineNumbers=!0})}();
