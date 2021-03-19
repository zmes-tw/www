
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
(function(){
var m = Math,
vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
(/firefox/i).test(navigator.userAgent) ? 'Moz' :
'opera' in window ? 'O' : '',
has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
hasTouch = 'ontouchstart' in window,
hasTransform = vendor + 'Transform' in document.documentElement.style,
isAndroid = (/android/gi).test(navigator.appVersion),
isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
isPlaybook = (/playbook/gi).test(navigator.appVersion),
hasTransitionEnd = isIDevice || isPlaybook,
nextFrame = (function() {
return window.requestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.oRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(callback) { return setTimeout(callback, 1); }
})(),
cancelFrame = (function () {
return window.cancelRequestAnimationFrame
|| window.webkitCancelRequestAnimationFrame
|| window.mozCancelRequestAnimationFrame
|| window.oCancelRequestAnimationFrame
|| window.msCancelRequestAnimationFrame
|| clearTimeout
})(),
RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
START_EV = hasTouch ? 'touchstart' : 'mousedown',
MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
END_EV = hasTouch ? 'touchend' : 'mouseup',
CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel',
trnOpen = 'translate' + (has3d ? '3d(' : '('),
trnClose = has3d ? ',0)' : ')',
iScroll = function (el, options) {
var that = this,
doc = document,
i;
that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
that.wrapper.style.overflow = 'hidden';
that.scroller = that.wrapper.children[0];
that.options = {
hScroll: true,
vScroll: true,
bounce: true,
bounceLock: false,
momentum: true,
lockDirection: true,
useTransform: true,
useTransition: false,
checkDOMChanges: false,
hScrollbar: true,
vScrollbar: true,
fixedScrollbar: isAndroid,
hideScrollbar: isIDevice,
fadeScrollbar: isIDevice && has3d,
scrollbarClass: '',
zoom: false,
zoomMin: 1,
zoomMax: 4,
doubleTapZoom: 2,
wheelAction: 'scroll',
snap: false,
snapThreshold: 1,
onRefresh: null,
onBeforeScrollStart: function (e) { e.preventDefault(); },
onScrollStart: null,
onBeforeScrollMove: null,
onScrollMove: null,
onBeforeScrollEnd: null,
onScrollEnd: null,
onTouchEnd: null,
onDestroy: null,
onZoomStart: null,
onZoom: null,
onZoomEnd: null
};
for (i in options) that.options[i] = options[i];
that.options.useTransform = hasTransform ? that.options.useTransform : false;
that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
that.options.zoom = that.options.useTransform && that.options.zoom;
that.options.useTransition = hasTransitionEnd && that.options.useTransition;
that.scroller.style[vendor + 'TransitionProperty'] = that.options.useTransform ? '-' + vendor.toLowerCase() + '-transform' : 'top left';
that.scroller.style[vendor + 'TransitionDuration'] = '0';
that.scroller.style[vendor + 'TransformOrigin'] = '0 0';
if (that.options.useTransition) that.scroller.style[vendor + 'TransitionTimingFunction'] = 'cubic-bezier(0.33,0.66,0.66,1)';
if (that.options.useTransform) that.scroller.style[vendor + 'Transform'] = trnOpen + '0,0' + trnClose;
else that.scroller.style.cssText += ';position:absolute;top:0;left:0';
if (that.options.useTransition) that.options.fixedScrollbar = true;
that.refresh();
that._bind(RESIZE_EV, window);
that._bind(START_EV);
if (!hasTouch) {
that._bind('mouseout', that.wrapper);
that._bind(WHEEL_EV);
}
if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
that._checkDOMChanges();
}, 500);
};
iScroll.prototype = {
enabled: true,
x: 0,
y: 0,
steps: [],
scale: 1,
currPageX: 0, currPageY: 0,
pagesX: [], pagesY: [],
aniTime: null,
wheelZoomCount: 0,
handleEvent: function (e) {
var that = this;
switch(e.type) {
case START_EV:
if (!hasTouch && e.button !== 0) return;
that._start(e);
break;
case MOVE_EV: that._move(e); break;
case END_EV:
case CANCEL_EV: that._end(e); break;
case RESIZE_EV: that._resize(); break;
case WHEEL_EV: that._wheel(e); break;
case 'mouseout': that._mouseout(e); break;
case 'webkitTransitionEnd': that._transitionEnd(e); break;
}
},
_checkDOMChanges: function () {
if (this.moved || this.zoomed || this.animating ||
(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;
this.refresh();
},
_scrollbar: function (dir) {
var that = this,
doc = document,
bar;
if (!that[dir + 'Scrollbar']) {
if (that[dir + 'ScrollbarWrapper']) {
if (hasTransform) that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = '';
that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
that[dir + 'ScrollbarWrapper'] = null;
that[dir + 'ScrollbarIndicator'] = null;
}
return;
}
if (!that[dir + 'ScrollbarWrapper']) {
bar = doc.createElement('div');
if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');
bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:opacity;-' + vendor + '-transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');
that.wrapper.appendChild(bar);
that[dir + 'ScrollbarWrapper'] = bar;
bar = doc.createElement('div');
if (!that.options.scrollbarClass) {
bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-' + vendor + '-background-clip:padding-box;-' + vendor + '-box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';-' + vendor + '-border-radius:3px;border-radius:3px';
}
bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:-' + vendor + '-transform;-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-' + vendor + '-transition-duration:0;-' + vendor + '-transform:' + trnOpen + '0,0' + trnClose;
if (that.options.useTransition) bar.style.cssText += ';-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';
that[dir + 'ScrollbarWrapper'].appendChild(bar);
that[dir + 'ScrollbarIndicator'] = bar;
}
if (dir == 'h') {
that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
} else {
that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
}
that._scrollbarPos(dir, true);
},
_resize: function () {
var that = this;
setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
},
_pos: function (x, y) {
x = this.hScroll ? x : 0;
y = this.vScroll ? y : 0;
if (this.options.useTransform) {
this.scroller.style[vendor + 'Transform'] = trnOpen + x + 'px,' + y + 'px' + trnClose + ' scale(' + this.scale + ')';
} else {
x = m.round(x);
y = m.round(y);
this.scroller.style.left = x + 'px';
this.scroller.style.top = y + 'px';
}
this.x = x;
this.y = y;
this._scrollbarPos('h');
this._scrollbarPos('v');
},
_scrollbarPos: function (dir, hidden) {
var that = this,
pos = dir == 'h' ? that.x : that.y,
size;
if (!that[dir + 'Scrollbar']) return;
pos = that[dir + 'ScrollbarProp'] * pos;
if (pos < 0) {
if (!that.options.fixedScrollbar) {
size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
if (size < 8) size = 8;
that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
}
pos = 0;
} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
if (!that.options.fixedScrollbar) {
size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
if (size < 8) size = 8;
that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
} else {
pos = that[dir + 'ScrollbarMaxScroll'];
}
}
that[dir + 'ScrollbarWrapper'].style[vendor + 'TransitionDelay'] = '0';
that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = trnOpen + (dir == 'h' ? pos + 'px,0' : '0,' + pos + 'px') + trnClose;
},
_start: function (e) {
var that = this,
point = hasTouch ? e.touches[0] : e,
matrix, x, y,
c1, c2;
if (!that.enabled) return;
if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);
if (that.options.useTransition || that.options.zoom) that._transitionTime(0);
that.moved = false;
that.animating = false;
that.zoomed = false;
that.distX = 0;
that.distY = 0;
that.absDistX = 0;
that.absDistY = 0;
that.dirX = 0;
that.dirY = 0;
if (that.options.zoom && hasTouch && e.touches.length > 1) {
c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);
that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;
if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
}
if (that.options.momentum) {
if (that.options.useTransform) {
matrix = getComputedStyle(that.scroller, null)[vendor + 'Transform'].replace(/[^0-9-.,]/g, '').split(',');
x = matrix[4] * 1;
y = matrix[5] * 1;
} else {
x = getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
y = getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '') * 1;
}
if (x != that.x || y != that.y) {
if (that.options.useTransition) that._unbind('webkitTransitionEnd');
else cancelFrame(that.aniTime);
that.steps = [];
that._pos(x, y);
}
}
that.absStartX = that.x;
that.absStartY = that.y;
that.startX = that.x;
that.startY = that.y;
that.pointX = point.pageX;
that.pointY = point.pageY;
that.startTime = e.timeStamp || (new Date()).getTime();
if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);
that._bind(MOVE_EV);
that._bind(END_EV);
that._bind(CANCEL_EV);
},
_move: function (e) {
var that = this,
point = hasTouch ? e.touches[0] : e,
deltaX = point.pageX - that.pointX,
deltaY = point.pageY - that.pointY,
newX = that.x + deltaX,
newY = that.y + deltaY,
c1, c2, scale,
timestamp = e.timeStamp || (new Date()).getTime();
if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);
if (that.options.zoom && hasTouch && e.touches.length > 1) {
c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
that.touchesDist = m.sqrt(c1*c1+c2*c2);
that.zoomed = true;
scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;
if (scale < that.options.scaleMin) scale = 0.5 * that.options.scaleMin * Math.pow(2.0, scale / that.options.scaleMin);
else if (scale > that.options.scaleMax) scale = 2.0 * that.options.scaleMax * Math.pow(0.5, that.options.scaleMax / scale);
that.lastScale = scale / this.scale;
newX = this.originX - this.originX * that.lastScale + this.x,
newY = this.originY - this.originY * that.lastScale + this.y;
this.scroller.style[vendor + 'Transform'] = trnOpen + newX + 'px,' + newY + 'px' + trnClose + ' scale(' + scale + ')';
if (that.options.onZoom) that.options.onZoom.call(that, e);
return;
}
that.pointX = point.pageX;
that.pointY = point.pageY;
if (newX > 0 || newX < that.maxScrollX) {
newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
}
if (newY > 0 || newY < that.maxScrollY) {
newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= 0 || that.maxScrollY >= 0 ? 0 : that.maxScrollY;
}
if (that.absDistX < 6 && that.absDistY < 6) {
that.distX += deltaX;
that.distY += deltaY;
that.absDistX = m.abs(that.distX);
that.absDistY = m.abs(that.distY);
return;
}
if (that.options.lockDirection) {
if (that.absDistX > that.absDistY + 5) {
newY = that.y;
deltaY = 0;
} else if (that.absDistY > that.absDistX + 5) {
newX = that.x;
deltaX = 0;
}
}
that.moved = true;
that._pos(newX, newY);
that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
if (timestamp - that.startTime > 300) {
that.startTime = timestamp;
that.startX = that.x;
that.startY = that.y;
}
if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
},
_end: function (e) {
if (hasTouch && e.touches.length != 0) return;
var that = this,
point = hasTouch ? e.changedTouches[0] : e,
target, ev,
momentumX = { dist:0, time:0 },
momentumY = { dist:0, time:0 },
duration = (e.timeStamp || (new Date()).getTime()) - that.startTime,
newPosX = that.x,
newPosY = that.y,
distX, distY,
newDuration,
scale;
that._unbind(MOVE_EV);
that._unbind(END_EV);
that._unbind(CANCEL_EV);
if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);
if (that.zoomed) {
scale = that.scale * that.lastScale;
scale = Math.max(that.options.zoomMin, scale);
scale = Math.min(that.options.zoomMax, scale);
that.lastScale = scale / that.scale;
that.scale = scale;
that.x = that.originX - that.originX * that.lastScale + that.x;
that.y = that.originY - that.originY * that.lastScale + that.y;
that.scroller.style[vendor + 'TransitionDuration'] = '200ms';
that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + that.scale + ')';
that.zoomed = false;
that.refresh();
if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
return;
}
if (!that.moved) {
if (hasTouch) {
if (that.doubleTapTimer && that.options.zoom) {
clearTimeout(that.doubleTapTimer);
that.doubleTapTimer = null;
if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
} else {
that.doubleTapTimer = setTimeout(function () {
that.doubleTapTimer = null;
target = point.target;
while (target.nodeType != 1) target = target.parentNode;
if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
ev = document.createEvent('MouseEvents');
ev.initMouseEvent('click', true, true, e.view, 1,
point.screenX, point.screenY, point.clientX, point.clientY,
e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
0, null);
ev._fake = true;
target.dispatchEvent(ev);
}
}, that.options.zoom ? 250 : 0);
}
}
that._resetPos(200);
if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
return;
}
if (duration < 300 && that.options.momentum) {
momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;
newPosX = that.x + momentumX.dist;
newPosY = that.y + momentumY.dist;
if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
if ((that.y > 0 && newPosY > 0) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
}
if (momentumX.dist || momentumY.dist) {
newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);
if (that.options.snap) {
distX = newPosX - that.absStartX;
distY = newPosY - that.absStartY;
if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
else {
snap = that._snap(newPosX, newPosY);
newPosX = snap.x;
newPosY = snap.y;
newDuration = m.max(snap.time, newDuration);
}
}
that.scrollTo(newPosX, newPosY, newDuration);
if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
return;
}
if (that.options.snap) {
distX = newPosX - that.absStartX;
distY = newPosY - that.absStartY;
if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
else {
snap = that._snap(that.x, that.y);
if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
}
if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
return;
}
that._resetPos(200);
if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
},
_resetPos: function (time) {
var that = this,
resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
resetY = that.y >= 0 || that.maxScrollY > 0 ? 0 : that.y < that.maxScrollY ? that.maxScrollY : that.y;
if (resetX == that.x && resetY == that.y) {
if (that.moved) {
that.moved = false;
if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
}
if (that.hScrollbar && that.options.hideScrollbar) {
if (vendor == 'webkit') that.hScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
that.hScrollbarWrapper.style.opacity = '0';
}
if (that.vScrollbar && that.options.hideScrollbar) {
if (vendor == 'webkit') that.vScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
that.vScrollbarWrapper.style.opacity = '0';
}
return;
}
that.scrollTo(resetX, resetY, time || 0);
},
_wheel: function (e) {
var that = this,
duration,
wheelDeltaX, wheelDeltaY,
deltaX, deltaY,
deltaScale;
if ('wheelDeltaX' in e) {
wheelDeltaX = e.wheelDeltaX / 12;
wheelDeltaY = e.wheelDeltaY / 12;
} else if ('detail' in e) {
wheelDeltaX = wheelDeltaY = -e.detail * 3;
} else {
wheelDeltaX = wheelDeltaY = -e.wheelDelta;
}
if (that.options.wheelAction == 'zoom') {
deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
if (wheelDeltaY < that.options.zoomMin) wheelDeltaY = that.options.zoomMin;
if (wheelDeltaY > that.options.zoomMax) wheelDeltaY = that.options.zoomMax;
if (wheelDeltaY != that.scale) {
if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
that.wheelZoomCount++;
that.zoom(e.pageX, e.pageY, wheelDeltaY, 400);
setTimeout(function() {
that.wheelZoomCount--;
if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
}, 400);
}
return;
}
deltaX = that.x + wheelDeltaX;
deltaY = that.y + wheelDeltaY;
if (deltaX > 0) deltaX = 0;
else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;
if (deltaY > 0) deltaY = 0;
else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;
that.scrollTo(deltaX, deltaY, 0);
},
_mouseout: function (e) {
var t = e.relatedTarget;
if (!t) {
this._end(e);
return;
}
while (t = t.parentNode) if (t == this.wrapper) return;
this._end(e);
},
_transitionEnd: function (e) {
var that = this;
if (e.target != that.scroller) return;
that._unbind('webkitTransitionEnd');
that._startAni();
},
_startAni: function () {
var that = this,
startX = that.x, startY = that.y,
startTime = (new Date).getTime(),
step, easeOut;
if (that.animating) return;
if (!that.steps.length) {
that._resetPos(400);
return;
}
step = that.steps.shift();
if (step.x == startX && step.y == startY) step.time = 0;
that.animating = true;
that.moved = true;
if (that.options.useTransition) {
that._transitionTime(step.time);
that._pos(step.x, step.y);
that.animating = false;
if (step.time) that._bind('webkitTransitionEnd');
else that._resetPos(0);
return;
}
(function animate () {
var now = (new Date).getTime(),
newX, newY;
if (now >= startTime + step.time) {
that._pos(step.x, step.y);
that.animating = false;
if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);
that._startAni();
return;
}
now = (now - startTime) / step.time - 1;
easeOut = m.sqrt(1 - now * now);
newX = (step.x - startX) * easeOut + startX;
newY = (step.y - startY) * easeOut + startY;
that._pos(newX, newY);
if (that.animating) that.aniTime = nextFrame(animate);
})();
},
_transitionTime: function (time) {
time += 'ms';
this.scroller.style[vendor + 'TransitionDuration'] = time;
if (this.hScrollbar) this.hScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
if (this.vScrollbar) this.vScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
},
_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
var deceleration = 0.0006,
speed = m.abs(dist) / time,
newDist = (speed * speed) / (2 * deceleration),
newTime = 0, outsideDist = 0;
if (dist > 0 && newDist > maxDistUpper) {
outsideDist = size / (6 / (newDist / speed * deceleration));
maxDistUpper = maxDistUpper + outsideDist;
speed = speed * maxDistUpper / newDist;
newDist = maxDistUpper;
} else if (dist < 0 && newDist > maxDistLower) {
outsideDist = size / (6 / (newDist / speed * deceleration));
maxDistLower = maxDistLower + outsideDist;
speed = speed * maxDistLower / newDist;
newDist = maxDistLower;
}
newDist = newDist * (dist < 0 ? -1 : 1);
newTime = speed / deceleration;
return { dist: newDist, time: m.round(newTime) };
},
_offset: function (el) {
var left = -el.offsetLeft,
top = -el.offsetTop;
while (el = el.offsetParent) {
left -= el.offsetLeft;
top -= el.offsetTop;
}
if (el != this.wrapper) {
left *= this.scale;
top *= this.scale;
}
return { left: left, top: top };
},
_snap: function (x, y) {
var that = this,
i, l,
page, time,
sizeX, sizeY;
page = that.pagesX.length - 1;
for (i=0, l=that.pagesX.length; i<l; i++) {
if (x >= that.pagesX[i]) {
page = i;
break;
}
}
if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
x = that.pagesX[page];
sizeX = m.abs(x - that.pagesX[that.currPageX]);
sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
that.currPageX = page;
page = that.pagesY.length-1;
for (i=0; i<page; i++) {
if (y >= that.pagesY[i]) {
page = i;
break;
}
}
if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
y = that.pagesY[page];
sizeY = m.abs(y - that.pagesY[that.currPageY]);
sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
that.currPageY = page;
time = m.round(m.max(sizeX, sizeY)) || 200;
return { x: x, y: y, time: time };
},
_bind: function (type, el, bubble) {
(el || this.scroller).addEventListener(type, this, !!bubble);
},
_unbind: function (type, el, bubble) {
(el || this.scroller).removeEventListener(type, this, !!bubble);
},
destroy: function () {
var that = this;
that.scroller.style[vendor + 'Transform'] = '';
that.hScrollbar = false;
that.vScrollbar = false;
that._scrollbar('h');
that._scrollbar('v');
that._unbind(RESIZE_EV, window);
that._unbind(START_EV);
that._unbind(MOVE_EV);
that._unbind(END_EV);
that._unbind(CANCEL_EV);
if (that.options.hasTouch) {
that._unbind('mouseout', that.wrapper);
that._unbind(WHEEL_EV);
}
if (that.options.useTransition) that._unbind('webkitTransitionEnd');
if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);
if (that.options.onDestroy) that.options.onDestroy.call(that);
},
refresh: function () {
var that = this,
offset,
pos = 0,
page = 0;
if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
that.wrapperW = that.wrapper.clientWidth || 1;
that.wrapperH = that.wrapper.clientHeight || 1;
that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
that.scrollerH = m.round(that.scroller.offsetHeight * that.scale);
that.maxScrollX = that.wrapperW - that.scrollerW;
that.maxScrollY = that.wrapperH - that.scrollerH;
that.dirX = 0;
that.dirY = 0;
that.hScroll = that.options.hScroll && that.maxScrollX < 0;
that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);
that.hScrollbar = that.hScroll && that.options.hScrollbar;
that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;
offset = that._offset(that.wrapper);
that.wrapperOffsetLeft = -offset.left;
that.wrapperOffsetTop = -offset.top;
if (typeof that.options.snap == 'string') {
that.pagesX = [];
that.pagesY = [];
els = that.scroller.querySelectorAll(that.options.snap);
for (i=0, l=els.length; i<l; i++) {
pos = that._offset(els[i]);
pos.left += that.wrapperOffsetLeft;
pos.top += that.wrapperOffsetTop;
that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
}
} else if (that.options.snap) {
that.pagesX = [];
while (pos >= that.maxScrollX) {
that.pagesX[page] = pos;
pos = pos - that.wrapperW;
page++;
}
if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];
pos = 0;
page = 0;
that.pagesY = [];
while (pos >= that.maxScrollY) {
that.pagesY[page] = pos;
pos = pos - that.wrapperH;
page++;
}
if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
}
that._scrollbar('h');
that._scrollbar('v');
if (!that.zoomed) {
that.scroller.style[vendor + 'TransitionDuration'] = '0';
that._resetPos(200);
}
},
scrollTo: function (x, y, time, relative) {
var that = this,
step = x,
i, l;
that.stop();
if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];
for (i=0, l=step.length; i<l; i++) {
if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
}
that._startAni();
},
scrollToElement: function (el, time) {
var that = this, pos;
el = el.nodeType ? el : that.scroller.querySelector(el);
if (!el) return;
pos = that._offset(el);
pos.left += that.wrapperOffsetLeft;
pos.top += that.wrapperOffsetTop;
pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
pos.top = pos.top > 0 ? 0 : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;
that.scrollTo(pos.left, pos.top, time);
},
scrollToPage: function (pageX, pageY, time) {
var that = this, x, y;
if (that.options.snap) {
pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;
pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;
that.currPageX = pageX;
that.currPageY = pageY;
x = that.pagesX[pageX];
y = that.pagesY[pageY];
} else {
x = -that.wrapperW * pageX;
y = -that.wrapperH * pageY;
if (x < that.maxScrollX) x = that.maxScrollX;
if (y < that.maxScrollY) y = that.maxScrollY;
}
that.scrollTo(x, y, time || 400);
},
disable: function () {
this.stop();
this._resetPos(0);
this.enabled = false;
this._unbind(MOVE_EV);
this._unbind(END_EV);
this._unbind(CANCEL_EV);
},
enable: function () {
this.enabled = true;
},
stop: function () {
if (this.options.useTransition) this._unbind('webkitTransitionEnd');
else cancelFrame(this.aniTime);
this.steps = [];
this.moved = false;
this.animating = false;
},
zoom: function (x, y, scale, time) {
var that = this,
relScale = scale / that.scale;
if (!that.options.useTransform) return;
that.zoomed = true;
time = time === undefined ? 200 : time;
x = x - that.wrapperOffsetLeft - that.x;
y = y - that.wrapperOffsetTop - that.y;
that.x = x - x * relScale + that.x;
that.y = y - y * relScale + that.y;
that.scale = scale;
that.refresh();
that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
that.y = that.y > 0 ? 0 : that.y < that.maxScrollY ? that.maxScrollY : that.y;
that.scroller.style[vendor + 'TransitionDuration'] = time + 'ms';
that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + scale + ')';
that.zoomed = false;
},
isReady: function () {
return !this.moved && !this.zoomed && !this.animating;
}
};
if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;
})();
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
(function($) {
$.fn.iphoneSlide = function(method) {
var defaults = {
handler: null,
pageHandler : null,
slideHandler : null,
direction : 'horizontal',
maxShiftPage : 5,
nextPageHandler : '.nextPage',
prevPageHandler : '.prevPage',
draglaunch: 0.5,
friction : 0.325,
sensitivity : 20,
extrashift : 800,
touchduring : 800,
easing: "swing",
bounce: true,
pageshowfilter : false,
onMoving : 0,
goTo : '',
onShiftComplete : function() {}
};
var settings = {};
var methods = {
jqipslide2page: function(page, effect) {
var workspace = $(this), workData = $(this).data("workData"), opts = $(this).data("options");
if (workData.initIphoneSlide) {
var page = page, __animate = {}, effect = (typeof effect === "boolean") ? effect : true,
handler = $(opts.handler, workspace),
pageElem = (opts.pageshowfilter ? handler.children(opts.pageHandler).filter('visible') : handler.children(opts.pageHandler)),
shift = { "X": 0, "Y": 0 },
outerWidthBoundary = workspace.width(),
outerHeightBoundary = workspace.height(),
nowPageElem = pageElem.eq(page-1);
if (page <= 0 || page > workData.totalPages) {
return false;
}
workspace.data("workData", $.extend({}, workData, {"nowPage" : page }));
var __animate = helpers.slide_to_page.call(this, page);
if(effect) {
$(handler).animate(__animate.after, 300, ($.easing[opts.easing]!==undefined ? opts.easing : "swing"), function() {
helpers.slide_callback.call(this);
});
} else {
$(handler).css(__animate.after);
helpers.slide_callback.call(this);
}
} else {
alert ('Your target is not iPhone-Slide workspace.');
return false;
}
},
jqipblank2page: function(content, jump2page, callback) {
var workspace = $(this), workData = $(this).data("workData"), opts = $(this).data("options"),
content = $.isArray(content) ? content : (typeof content === "string" ? [content] : []),
jump2page = (typeof jump2page === "boolean") ? jump2page : false,
callback = (typeof jump2page === "function") ? jump2page : (typeof callback === "function") ? callback : function() { return false; };
if (workData.initIphoneSlide && content.length > 0) {
var totalAddPage = content.length,
handler = $(opts.handler, workspace),
nowPage = (jump2page) ? workData.totalPages+1 : workData.nowPage,
firstElem = (opts.pageshowfilter ? handler.children(opts.pageHandler).filter('visible').eq(0) : handler.children(opts.pageHandler)).eq(0);
$.each(content, function(index, html) {
firstElem.clone().removeAttr("style")
.html(html).appendTo(handler);
if(index === totalAddPage-1) {
workspace.iphoneSlide(opts, callback).jqipslide2page(nowPage, false);
}
});
} else {
alert ('Your target is not iPhone-Slide workspace.');
return false;
}
},
init: function(options, callback) {
var opts = $.extend({}, defaults, options),
callback = (typeof callback === "function") ? callback : function() { return this; };
helpers.options = opts;
helpers.callback = callback;
return $(this).each(function() {
var workspace = $(this), workData = workspace.data("workData"),
handler = $(opts.handler, workspace),
dragAndDrop = $.extend({}, { origX:0, origY:0, X:0, Y:0 }),
startEventData, moveEventData,
totalPages = matrixRow = matrixColumn = 0,
nowPage = 1,
__preventClickEvent = __mouseStarted = __touchesDevice = false,
pageElem = (opts.pageshowfilter ? handler.children(opts.pageHandler).filter('visible') : handler.children(opts.pageHandler));
if (workspace.children().length>1) {
alert('The Selector('+workspace.attr('id')+')\'s page handler can not more than one element.');
return this;
}
if (opts.handler === null || typeof opts.handler !== "string") {
opts.handler = ".iphone-slide-page-handler";
workspace.children(':first').addClass('iphone-slide-page-handler');
}
if ($(opts.handler, workspace).children().length==0) {
alert('You have no page(s) context.');
return this;
}
if (opts.pageHandler === null || typeof opts.pageHandler !== "string") {
switch(handler.attr('tagName').toLowerCase()) {
case "ul":
case "ol":
opts.pageHandler = 'li';
break;
default:
opts.pageHandler = handler.children(':first').attr('tagName').toLowerCase();
}
}
handler.unbind(".jqiphoneslide");
$(opts.prevPageHandler).unbind("click.jqiphoneslide", __slidePrevPage, false);
$(opts.nextPageHandler).unbind("click.jqiphoneslide", __slideNextPage, false);
var __slideNextPage = function(event) {
var workData = workspace.data("workData"),
nowPage = parseInt(workData.nowPage),
totalPages = parseInt(workData.totalPages);
nowPage++;
if (nowPage <= totalPages) {
__mouseStarted = true;
var __animate = helpers.slide_to_page.call(workspace, nowPage, 0);
handler.animate(__animate.after, 300, ((opts.bounce && $.easing[opts.easing]!==undefined) ? opts.easing : "swing"), function() {
__mouseStarted = false;
helpers.slide_callback.call(this);
});
} else {
nowPage = totalPages;
}
workspace.data("workData", $.extend({}, workData, { "nowPage": nowPage }));
return true;
};
var __slidePrevPage = function(event) {
var workData = workspace.data("workData"),
nowPage = parseInt(workData.nowPage),
totalPages = parseInt(workData.totalPages);
nowPage--;
if(nowPage>0) {
__mouseStarted = true;
var __animate = helpers.slide_to_page.call(workspace, nowPage, 0);
handler.animate(__animate.after, 300, ((opts.bounce && $.easing[opts.easing]!==undefined) ? opts.easing : "swing"), function() {
__mouseStarted = false;
helpers.slide_callback.call(this);
});
} else {
nowPage = 1;
}
workspace.data("workData", $.extend({}, workData, { "nowPage": nowPage }));
return true;
};
var __mouseDown = function(event) {
if (__mouseStarted) return false;
event.preventDefault();
__mouseStarted = true;
var __touches = event.originalEvent.touches || event.originalEvent.targetTouches || event.originalEvent.changedTouches,
__startEvent =  __touches === undefined ? event : __touches[0];
startEventData = moveEventData = $.extend({}, __startEvent, { timeStamp: event.timeStamp });
if (__touches !== undefined) __touchesDevice = true;
dragAndDrop.origX = dragAndDrop.X = $(this).position().left;
dragAndDrop.origY = dragAndDrop.Y = $(this).position().top;
if (opts.slideHandler === null || typeof opts.slideHandler !== "string") {
handler.bind("mousemove.jqiphoneslide touchmove.jqiphoneslide", __mouseMove, false)
.bind("mouseleave.jqiphoneslide mouseup.jqiphoneslide touchend.jqiphoneslide touchcancel.jqiphoneslide MozTouchUp.jqiphoneslide", __mouseUp, false);
} else {
handler.filter(opts.slideHandler).bind("mousemove.jqiphoneslide touchmove.jqiphoneslide", __mouseMove, false)
.bind("mouseleave.jqiphoneslide mouseup.jqiphoneslide touchend.jqiphoneslide touchcancel.jqiphoneslide MozTouchUp.jqiphoneslide", __mouseUp, false);
}
return !__mouseStarted;
};
var __mouseMove = function(event) {
onMoving =1;
if ($.browser.msie && !event.button) return __mouseUp(event);
if (__mouseStarted) {
event.preventDefault();
var __touches = event.originalEvent.touches || event.originalEvent.targetTouches || event.originalEvent.changedTouches,
__eventTouches =  __touches === undefined ? event : __touches[0],
__mouseDownEvent = startEventData;
moveEventData = $.extend({}, __eventTouches, { timeStamp: event.timeStamp });
switch(opts.direction) {
case "matrix":
dragAndDrop.X = parseInt(__eventTouches.pageX - __mouseDownEvent.pageX);
dragAndDrop.Y = parseInt(__eventTouches.pageY - __mouseDownEvent.pageY);
handler.css({
top: (dragAndDrop.origY + dragAndDrop.Y) + "px",
left: (dragAndDrop.origX + dragAndDrop.X) + "px"
});
break;
case "vertical":
dragAndDrop.Y = parseInt(__eventTouches.pageY - __mouseDownEvent.pageY);
handler.css({
top: (dragAndDrop.origY + dragAndDrop.Y) + "px"
});
break;
case "horizontal":
default:
dragAndDrop.X = parseInt(__eventTouches.pageX - __mouseDownEvent.pageX);
handler.css({
left: (dragAndDrop.origX + dragAndDrop.X) + "px"
});
}
}
return !__mouseStarted;
};
var __mouseUp = function(event) {
event.preventDefault();
if (opts.slideHandler === null || typeof opts.slideHandler !== "string") {
handler.unbind("mousemove.jqiphoneslide touchmove.jqiphoneslide MozTouchMove.jqiphoneslide", __mouseMove, false);
} else {
handler.filter(opts.slideHandler).unbind("mousemove.jqiphoneslide touchmove.jqiphoneslide MozTouchMove.jqiphoneslide", __mouseMove, false);
}
var workData = $(this).parent().data("workData"),
totalPages = parseInt(workData.totalPages),
nowPage = parseInt(workData.nowPage),
matrixRow = parseInt(workData.matrixRow),
matrixColumn = parseInt(workData.matrixColumn),
__eventTouches,
__touches = event.originalEvent.touches || event.originalEvent.targetTouches || event.originalEvent.changedTouches,
__mouseDownEvent = startEventData;
if (__touches === undefined) {
__eventTouches = __touchesDevice ? moveEventData : event;
} else {
__eventTouches = __touches[0] === undefined ? moveEventData : __touches[0];
}
if (__mouseStarted) __preventClickEvent = (event.target == __mouseDownEvent.target);
if (Math.max(
Math.abs(__mouseDownEvent.pageX - __eventTouches.pageX),
Math.abs(__mouseDownEvent.pageY - __eventTouches.pageY)
) >= parseInt(opts.sensitivity)
) {
__preventClickEvent = false;
var timeStamp = Math.abs(moveEventData.timeStamp - startEventData.timeStamp);
var workerBounce = { "width": workspace.outerWidth(), "height": workspace.outerHeight() };
var thisPage = pageElem.eq(nowPage-1),
thisPageSize = {
"width": thisPage.outerWidth(true),
"height": thisPage.outerHeight(true)
},
thisMove = {
"X": helpers.get_moving_data.call(null, workerBounce.width, __mouseDownEvent.pageX, __eventTouches.pageX, timeStamp),
"Y": helpers.get_moving_data.call(null, workerBounce.height, __mouseDownEvent.pageY, __eventTouches.pageY, timeStamp)
},
shift = {
"X": 0,
"Y": 0,
"shift": Math.max(thisMove.X.shift , thisMove.Y.shift),
"speed": Math.max(thisMove.X.speed , thisMove.Y.speed)
},
easing = {
"X": Math.min(__eventTouches.pageX-__mouseDownEvent.pageX , thisPageSize.width),
"Y": Math.min(__eventTouches.pageY-__mouseDownEvent.pageY , thisPageSize.height)
},
pages = {
"X": (Math.abs(dragAndDrop.X) >= workerBounce.width*opts.draglaunch || Math.abs(dragAndDrop.Y) >= workerBounce.height*opts.draglaunch) ? 0 : (timeStamp>opts.touchduring) ? 1 : Math.ceil(thisMove.X.speed*thisMove.X.shift/thisPageSize.width),
"Y": (Math.abs(dragAndDrop.X) >= workerBounce.width*opts.draglaunch || Math.abs(dragAndDrop.Y) >= workerBounce.height*opts.draglaunch) ? 0 : (timeStamp>opts.touchduring) ? 1 : Math.ceil(thisMove.Y.speed*thisMove.Y.shift/thisPageSize.height)
};
during = Math.min(300, opts.touchduring , Math.max(1/shift.speed*Math.abs(opts.extrashift), Math.abs(opts.extrashift)*0.5));
switch(opts.direction) {
case "matrix":
var pageColumn = Math.ceil(nowPage/matrixRow);
pages.X = (pages.X>matrixRow) ? matrixRow : ((Math.abs(dragAndDrop.X) >= thisPageSize.width*opts.draglaunch) ? 1 : ((Math.floor(Math.abs(easing.Y/easing.X))>2) ? 0 : pages.X));
pages.X = (easing.X > 0) ? (Math.min(pages.X, (nowPage-matrixRow*(pageColumn-1)-1))) : (Math.min(pages.X, (matrixRow*pageColumn-nowPage)));
pages.Y = (pages.Y>matrixColumn) ? matrixColumn : ((Math.abs(dragAndDrop.Y) >= thisPageSize.height*opts.draglaunch) ? 1 : ((Math.floor(Math.abs(easing.X/easing.Y))>2) ? 0 : pages.Y));
pages.Y = (easing.Y > 0) ? (Math.min(pages.Y, (pageColumn-1))) : (((matrixRow*pages.Y+nowPage)>totalPages) ? (matrixColumn-pageColumn) : pages.Y);
nowPage = (easing.X > 0) ? (((nowPage-pages.X)<1) ? 1 : nowPage-pages.X) : ((nowPage+pages.X>totalPages) ? totalPages : nowPage+pages.X);
nowPage = (easing.Y > 0) ? (((nowPage-pages.Y*matrixRow)<1) ? 1 : nowPage-pages.Y*matrixRow) : ((pages.Y*matrixRow>totalPages) ? totalPages : nowPage+pages.Y*matrixRow);
break;
case "vertical":
pages.X = 0;
pages.Y = (pages.Y==0) ? 1 : ((pages.Y>opts.maxShiftPage) ? opts.maxShiftPage : pages.Y);
pages.Y = (easing.Y>0) ? (((nowPage-pages.Y)<1) ? nowPage-1 : pages.Y) : (((nowPage + pages.Y)>totalPages) ? totalPages - nowPage : pages.Y);
nowPage = (easing.Y>0) ? (((nowPage-pages.Y)<1) ? 1 : nowPage-pages.Y) : (((nowPage + pages.Y)>totalPages) ? totalPages : nowPage+pages.Y);
break;
case "horizontal":
default:
pages.Y = 0;
pages.X = (pages.X==0) ? 1 : ((pages.X>opts.maxShiftPage) ? opts.maxShiftPage : pages.X);
pages.X = (easing.X > 0) ? (((nowPage-pages.X)<1) ? nowPage-1 : pages.X) : (((nowPage + pages.X)>totalPages) ? totalPages - nowPage : pages.X);
nowPage = (easing.X > 0) ? (((nowPage-pages.X)<1) ? 1 : nowPage-pages.X) : (((nowPage + pages.X)>totalPages) ? totalPages : nowPage+pages.X);
}
var __animate = (opts.bounce === true) ? helpers.slide_to_page.call(this, nowPage, easing) : helpers.slide_to_page.call(this, nowPage, 0);
if (opts.bounce === true) $(this).animate(__animate.before, during);
$(this).animate(__animate.after, during, ($.easing[opts.easing]!==undefined ? opts.easing : "swing"), function() {
__mouseStarted = false;
helpers.slide_callback.call(this);
});
} else {
$(this).css({ 'top': dragAndDrop.origY, 'left': dragAndDrop.origX });
__mouseStarted = false;
}
if (opts.slideHandler === null || typeof opts.slideHandler !== "string") {
$(this).unbind("mouseleave.jqiphoneslide mouseup.jqiphoneslide touchend.jqiphoneslide MozTouchUp.jqiphoneslide", __mouseUp, false);
} else {
$(this).filter(opts.slideHandler).unbind("mouseleave.jqiphoneslide mouseup.jqiphoneslide touchend.jqiphoneslide MozTouchUp.jqiphoneslide", __mouseUp, false);
}
workspace.data("workData", $.extend({}, workData, { "nowPage": nowPage }));
return !__mouseStarted;
};
var __click = function(event) {
var currentTag = event.currentTarget.nodeName.toLowerCase();
if (currentTag === 'a' || currentTag === 'button' || currentTag === 'input' || currentTag === 'img') {
return true;
}
return __preventClickEvent;
};
var __click2 = function(event) {
var currentTag = event.currentTarget.nodeName.toLowerCase();
if (currentTag === 'a') {
onMoving = 0;
goTo = $.trim(event.currentTarget.href);
}
}
var __click3 = function(event) {
var currentTag = event.currentTarget.nodeName.toLowerCase();
if (currentTag === 'a' && onMoving==0) {
if(goTo != '' && goTo == $.trim(event.currentTarget.href)){
window.location.href = event.currentTarget.href;
}
}
}
if(opts.slideHandler === null || typeof opts.slideHandler !== "string") {
handler
.bind("mousedown.jqiphoneslide touchstart.jqiphoneslide MozTouchDown.jqiphoneslide", __mouseDown, false)
.bind("click.jqiphoneslide", __click, false);
} else {
handler.filter(opts.slideHandler)
.bind("mousedown.jqiphoneslide touchstart.jqiphoneslide MozTouchDown.jqiphoneslide", __mouseDown, false)
.bind("click.jqiphoneslide", __click, false);
}
$(opts.nextPageHandler).bind("click.jqiphoneslide", __slideNextPage, false);
$(opts.prevPageHandler).bind("click.jqiphoneslide", __slidePrevPage, false);
$('a, button, input[type=button], input[type=reset], input[type=submit]', handler)
.bind('touchstart.jqiphoneslide', __click2, false)
.bind('touchend.jqiphoneslide', __click3, false);
helpers.init_pages.call(this);
return this;
});
}
};
var helpers = {
options: null,
callback: function() { return this; },
logs: function(logs) {
var t = new Date(), log = $('#log');
log.html(t.toUTCString()+': '+logs+'<br />'+log.html());
return true;
},
get_moving_data: function(w, s, e, t) {
var v = 0, ex = 0, w = w*1, s = s*1, e = e*1, t = t*1, opts = helpers.options;
v = (Math.abs(s - e) / Math.abs(t));
ex = Math.floor(Math.pow((v/12), 2)*Math.abs(opts.extrashift) / (2*(9.80665/12)*Math.abs(opts.friction))*0.01);
ex = (s>w/2) ? Math.floor(w/3) : s;
return {"speed":v, "shift":ex};
},
init_pages: function() {
var totalPages, opts = helpers.options, workspace = $(this),
handler = $(opts.handler, workspace),
pagesHandler = (!opts.pageshowfilter) ? handler.children(opts.pageHandler) : handler.children(opts.pageHandler).filter(':visible'),
matrixRow = matrixColumn = pagesOuterWidth = pagesOuterHeight = maxWidthPage = maxHeightPage = 0;
totalPages = pagesHandler.length;
maxWidthPage = workspace.width();
maxHeightPage = workspace.height();
switch(opts.direction) {
case "matrix":
matrixRow = Math.ceil(Math.sqrt(totalPages));
matrixColumn = Math.ceil(totalPages / matrixRow);
pagesHandler.each(function(i, elem) {
maxWidthPage = ($(elem).outerWidth(true) >= maxWidthPage) ? $(elem).outerWidth(true) : maxWidthPage;
maxHeightPage = ($(elem).outerHeight(true) >= maxHeightPage) ? $(elem).outerHeight(true) : maxHeightPage;
});
pagesOuterWidth = maxWidthPage * matrixRow;
pagesOuterHeight = maxHeightPage * matrixColumn;
handler.width(pagesOuterWidth).height(pagesOuterHeight);
pagesHandler.each(function(i, elem) {
if ($(elem).outerWidth() < maxWidthPage) {
$(elem).css({
'margin-left': (maxWidthPage - $(elem).outerWidth())/2,
'margin-right': (maxWidthPage - $(elem).outerWidth())/2
});
}
if ($(elem).outerHeight() < maxHeightPage) {
$(elem).css({
'margin-top': (maxHeightPage - $(elem).outerHeight())/2,
'margin-bottom': (maxHeightPage - $(elem).outerHeight())/2
});
}
});
for(var i=matrixColumn; i>1; i--) {
$('<br class="matrix-break-point" style="clear:both;" />').insertAfter(pagesHandler.eq((i-1)*matrixRow-1));
}
break;
case "vertical":
pagesHandler.each(function(i, elem) {
pagesOuterHeight += $(elem).outerHeight(true);
maxWidthPage = ($(elem).outerWidth(true) >= maxWidthPage) ? $(elem).outerWidth(true) : maxWidthPage;
maxHeightPage = ($(elem).outerHeight(true) >= maxHeightPage) ? $(elem).outerHeight(true) : maxHeightPage;
});
pagesHandler.each(function(i, elem) {
if ($(elem).outerWidth() < maxWidthPage) {
$(elem).css('margin-left', (maxWidthPage - $(elem).outerWidth())/2);
}
});
pagesOuterWidth = maxWidthPage;
handler.height(pagesOuterHeight).width(pagesOuterWidth).css('top', (maxHeightPage - pagesHandler.eq(0).outerHeight(true))/2);
break;
case "horizontal":
default:
pagesHandler.each(function(i, elem) {
pagesOuterWidth += $(elem).outerWidth(true);
maxWidthPage = ($(elem).outerWidth(true) >= maxWidthPage) ? $(elem).outerWidth(true) : maxWidthPage;
maxHeightPage = ($(elem).outerHeight(true) >= maxHeightPage) ? $(elem).outerHeight(true) : maxHeightPage;
});
pagesHandler.each(function(i, elem) {
if ($(elem).outerHeight() < maxHeightPage) {
$(elem).css('margin-top', (maxHeightPage - $(elem).outerHeight())/2);
}
});
pagesOuterHeight = maxHeightPage;
handler.width(pagesOuterWidth).height(pagesOuterHeight).css('left', (maxWidthPage - pagesHandler.eq(0).outerWidth(true))/2);
}
pagesHandler.css({ 'display' : 'block' });
workspace.width(maxWidthPage).height(maxHeightPage)
.data("workData", $.extend({},
{
'totalPages': totalPages,
'matrixRow': matrixRow,
'matrixColumn': matrixColumn,
'pagesOuterWidth': pagesOuterWidth,
'pagesOuterHeight': pagesOuterHeight,
'nowPage': 1,
'initIphoneSlide': true
})
).data("options", opts);
handler.attr("data-target", "handler");
helpers.callback.call(this);
},
slide_callback: function() {
var workspace = ($(this).attr("data-target")==="handler") ? $(this).parent() : $(this),
workData = workspace.data("workData"), nowPage = workData.nowPage,
opts = helpers.options || workspace.data("options"),
handler = $(opts.handler, workspace).children(opts.pageHandler);
if(opts.pageshowfilter) {
opts.onShiftComplete.call(workspace, handler.filter(':visible').eq(nowPage-1), nowPage);
} else {
opts.onShiftComplete.call(workspace, handler.eq(nowPage-1), nowPage);
}
},
slide_to_page: function(page, easing) {
var page = page,
workspace = ($(this).attr("data-target")==="handler") ? $(this).parent() : $(this),
opts = helpers.options || workspace.data("options"), handler = $(opts.handler, workspace),
easing = easing || { "X":0, "Y": 0},
pageElem = (opts.pageshowfilter ? handler.children(opts.pageHandler).filter('visible') : handler.children(opts.pageHandler)),
shift = { "X": 0, "Y": 0 },
__animate = { 'before': {}, 'after': {} },
outerWidthBoundary = workspace.width(),
outerHeightBoundary = workspace.height(),
nowPageElem = pageElem.eq(page-1);
switch(opts.direction) {
case "matrix":
shift.X = nowPageElem.position().left;
shift.X -= (outerWidthBoundary - nowPageElem.outerWidth(true))/2;
shift.Y = nowPageElem.position().top;
shift.Y -= (outerHeightBoundary - nowPageElem.outerHeight(true))/2;
__animate = {
'before': { 'top': -1*shift.Y+easing.Y, 'left': -1*shift.X+easing.X },
'after': { 'top': -1*shift.Y, 'left': -1*shift.X }
};
break;
case "vertical":
shift.Y = nowPageElem.position().top;
shift.Y -= (outerHeightBoundary - nowPageElem.outerHeight(true))/2;
__animate = {
'before': { 'top': -1*shift.Y+easing.Y },
'after': { 'top': -1*shift.Y }
};
break;
case "horizontal":
default:
shift.X = nowPageElem.position().left;
shift.X -= (outerWidthBoundary - nowPageElem.outerWidth(true))/2;
__animate = {
'before': { 'left': -1*shift.X+easing.X },
'after': { 'left': -1*shift.X }
};
}
return __animate;
}
};
if (methods[method] && method.toLowerCase() != 'init') {
return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
} else if (typeof method === "object" || !method) {
return methods.init.apply(this, arguments);
} else {
$.error( 'Method "' +  method + '" does not exist in iPhoneSlide plugin!');
}
};
})(jQuery);
$(function(){
jQuery.hajaxSubmit=function(url, data, scallback) {
$.ajax({
type: "post",
data: data,
url: url,
beforeSend:function(){
showLoading();
},
success: function(d){
hideLoading();
var p = eval("("+d+")");
if(scallback) scallback(p);
else{
showPopTips(p.content);
}
}
});
};
jQuery.hajaxOpenUrl=function (url,obj,data,scallback){
$.post(url,data,function(d){
$(obj).html(d);
if(scallback){
scallback(d);
}
});
};
});
function HvPagelist(){};
HvPagelist.prototype.init = function(p_option){
this.pageMode = p_option.pageMode;
this.currentPage = p_option.currentPage;
this.flag = p_option.flag;
this.over = p_option.over;
this.url = p_option.url;
this.urlPrefix = p_option.urlPrefix;
this.totalPage = p_option.totalPage;
this.Op = p_option.Op;
this.param = p_option.param
this.pageListObj = p_option.pageListObj;
this.nextPageObj = p_option.nextPageObj;
}
HvPagelist.prototype.nextPage = function(){
if(this.over==1) return;
if(this.flag==1) return;
if(this.currentPage>=this.totalPage) return;
this.currentPage++;
this.flag = 1;
$('#loading').show();
this.param.push({name:'Op',value:this.Op});
this.param.push({name:'Page',value:this.currentPage});
$.ajax({
url : this.url,
type : "POST",
context : this,
data : this.param,
success :
function(data){
var d = eval("("+data+")");
if(d.stat == 'over'){
$(this.nextPageObj).hide();
this.over=1;
}
$(this.pageListObj).append(d.content);
$('#loading').hide();
this.flag=0;
this.param.pop();
this.param.pop();
if(this.pageMode==0)
this.loadPage();
}
});
}
HvPagelist.prototype.loadPage = function(){
var pos = $(document).scrollTop()+$(window).height();
var btm = $(document.body).height();
if(pos>=btm-150) this.nextPage();
}
HvPagelist.prototype.goPrePage = function(){
if(this.currentPage<=1) return;
var page = this.currentPage-1;
this.goPage(page);
}
HvPagelist.prototype.goNextPage = function(){
if(this.currentPage>=this.totalPage) return;
var page = this.currentPage+1;
this.goPage(page);
}
HvPagelist.prototype.goPage = function(p_page){
var url = this.urlPrefix.replace('PAGE',p_page);
window.location.href = url;
}
if (!('scrollingElement' in document)) (function() {
function computeStyle(element) {
if (window.getComputedStyle) {
return getComputedStyle(element, null);
}
return element.currentStyle;
}
function isBodyElement(element) {
if (window.HTMLBodyElement) {
return element instanceof HTMLBodyElement;
}
return /body/i.test(element.tagName);
}
function getNextBodyElement(frameset) {
var current = frameset;
while (current = current.nextSibling) {
if (current.nodeType == 1 && isBodyElement(current)) {
return current;
}
}
return null;
}
var isCompliantCached;
var isCompliant = function() {
var isStandardsMode = /^CSS1/.test(document.compatMode);
if (!isStandardsMode) {
return false;
}
if (isCompliantCached === void 0) {
var iframe = document.createElement('iframe');
iframe.style.height = '1px';
(document.body || document.documentElement || document).appendChild(iframe);
var doc = iframe.contentWindow.document;
doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
doc.close();
isCompliantCached = doc.documentElement.scrollHeight > doc.body.scrollHeight;
iframe.parentNode.removeChild(iframe);
}
return isCompliantCached;
};
function isRendered(style) {
return style.display != 'none' && !(style.visibility == 'collapse' &&
/^table-(.+-group|row|column)$/.test(style.display));
}
function isScrollable(body) {
var bodyStyle = computeStyle(body);
var htmlStyle = computeStyle(document.documentElement);
return bodyStyle.overflow != 'visible' && htmlStyle.overflow != 'visible' &&
isRendered(bodyStyle) && isRendered(htmlStyle);
}
var scrollingElement = function() {
if (isCompliant()) {
return document.documentElement;
}
var body = document.body;
var isFrameset = body && !/body/i.test(body.tagName);
body = isFrameset ? getNextBodyElement(body) : body;
return body && isScrollable(body) ? null : body;
};
if (Object.defineProperty) {
Object.defineProperty(document, 'scrollingElement', {
'get': scrollingElement
});
} else if (document.__defineGetter__) {
document.__defineGetter__('scrollingElement', scrollingElement);
} else {
document.scrollingElement = scrollingElement();
document.attachEvent && document.attachEvent('onpropertychange', function() {
if (window.event.propertyName == 'activeElement') {
document.scrollingElement = scrollingElement();
}
});
}
}());
var myScroll = [];
var ModalHelper = (function(bodyCls) {
var scrollTop;
return {
afterOpen: function() {
scrollTop = document.scrollingElement.scrollTop;
document.body.classList.add(bodyCls);
document.body.style.top = -scrollTop + 'px';
},
beforeClose: function() {
document.body.classList.remove(bodyCls);
document.scrollingElement.scrollTop = scrollTop;
}
};
})('iosScroll');
function loadWrapper(tag,hs,vs,cc,ld,mm,bn,sn) {
myScroll[tag] = new iScroll(tag,{
hScrollbar:hs,
vScrollbar:vs,
checkDOMChanges:cc,
momentum:mm,
bounce: bn,
snap:sn,
useTransform: false,
onBeforeScrollStart: function (e) {
var target = e.target;
while (target.nodeType != 1) target = target.parentNode;
if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
e.preventDefault();
},
onScrollEnd: function(e) {
var inc = $("#"+tag).nextAll('ul.indicator');
if(inc.length<=0) return false;
var ind = this.currPageX;
if(ind >= $(inc).find('li').length) ind = $(inc).find('li').length-1;
$(inc).find('li').removeClass('active');
$(inc).find('li').eq(ind).addClass('active');
}
});
}
function doResize() {
for(var tag in myScroll) {
myScroll[tag].refresh();
}
}
var getRandom = (function(){
var today = new Date();
var seed = today.getTime();
function rnd(){
seed = ( seed * 9301 + 49297 ) % 233280;
return seed / ( 233280.0 );
};
return function getRandom(number){
return Math.floor(rnd(seed) * number);
};
})();
function genRandomID() {
var randnum="";
for(var i=0;i<16;i++) {
randnum+=getRandom(10);
}
return randnum;
}
$(function(){
$(window).resize(function(){
doResize();
mobResizeWrapHeight();
});
$(".listmenu").find("li").click(function(){
location.href=$(this).find(".button-text").children("a").attr("href");
});
if ($(".slidewrap")) {
$.each($(".slidewrap"),function(i,item){
var rnum = genRandomID();
wrapID = "slidewrap_" + rnum;
pagesID = "slidepages_" + rnum;
wrapEl = "#" + wrapID;
pagesEl = "#" + pagesID;
$(item).attr("id",wrapID);
$(item).children(".slidepages").attr("id",pagesID);
hs = ($(item).attr("hs")==1)?true:false;
vs = ($(item).attr("vs")==1)?true:false;
cc = ($(item).attr("cc")==0)?false:true;
ld = ($(item).attr("lc")==0)?false:true;
bn = ($(item).attr("bn")==1)?true:false;
mm = false;
sn = true;
loadWrapper(wrapID,hs,vs,cc,ld,mm,bn,sn);
var pageWidth = 0;
if($("#"+pagesID).children("div").length>0){
if($("#"+pagesID).children("div:first").width())
pageWidth = $("#"+pagesID).children("div:first").width() * $("#"+pagesID).children("div").length;
}
if(pageWidth>0) $("#"+pagesID).width(pageWidth+"px");
$(item).next().find('#prevpage').attr('el',wrapID).click(function(){
var tag = $(this).attr('el');
myScroll[tag].scrollToPage('prev',0);
});
$(item).next().find('#nextpage').attr('el',wrapID).click(function(){
var tag = $(this).attr('el');
myScroll[tag].scrollToPage('next',0);
});
});
}
$("body").append('<div id="overlay"></div><div id="loading" class="corner-all"><i class="icon icon-loading spin">&nbsp;</i><div>Loading...</div></div>');
$(".button").bind("mousedown",function(){
$(this).addClass("button-down");
}).bind("mouseup",function(){
$(this).removeClass("button-down");
}).bind("touchstart",function(){
$(this).addClass("button-down");
}).bind("touchend",function(){
$(this).removeClass("button-down");
});
if ($(".iwrapper")) {
$.each($(".iwrapper"),function(i,item){
var rnum = genRandomID();
wrapID = "iwrapper_" + rnum;
wrapEl = "#" + wrapID;
$(item).attr("id",wrapID);
hs = ($(item).attr("hs")==1)?true:false;
vs = ($(item).attr("vs")==1)?true:false;
cc = ($(item).attr("cc")==0)?false:true;
ld = ($(item).attr("lc")==0)?false:true;
bn = ($(item).attr("bn")==1)?true:false;
mm = ($(item).attr("mm")==0)?false:true;
sn = ($(item).attr("sn"))?$(item).attr("sn"):false;
if ($(item).hasClass("hwrapper")) {
loadWrapper(wrapID,hs,vs,cc,ld,mm,bn,sn);
} else if ($(item).hasClass("vwrapper")) {
loadWrapper(wrapID,hs,vs,cc,ld,mm,bn,sn);
}
});
}
});
function chkVote(p_form,p_cnt) {
if(typeof p_cnt=='undefined' ) p_cnt=0;
var elements = p_form.elements;
var len = elements.length;
var elements = p_form.elements;
var voteName= "";
var votedName= "";
var preName = "";
var preVote ="";
var vName ="";
var votedCnt = 0;
for(var i=0;i<len;i++){
vName = elements[i].name;
if(elements[i].type){
switch(elements[i].type){
case "checkbox":
if(vName!=preName) { preName = vName;  voteName +=","+vName; }
if(elements[i].checked){
if(preVote!=vName) votedName +=","+vName;
preVote = vName;
votedCnt++;
}
break;
case "radio":
if(vName!=preName) { preName = vName;  voteName +=","+vName; }
if(elements[i].checked){
votedName +=","+vName;
preVote = vName;
};
break;
}
}
}
if(voteName!=votedName) return -1;
else if(p_cnt>0 && votedCnt>p_cnt) return -2;
else return 1;
}
function frm_mobileFormPreview(p_form,p_prefix,p_formnbr) {
var dispDiv = $("#"+'_Form_Section_'+p_formnbr);
var reviewDiv = $("#"+'_Form_PreviewSection_'+p_formnbr);
var reviewGroup = $(reviewDiv).children("#formpreview_"+p_formnbr).eq(0).children(".previewFormGroup").eq(0);
var elm ;
var name;
var sepField = new Array();
var sepField_max = new Array();
var sepCounter=0;
frmElements = new Object();
for(i=0;i<p_form.elements.length;i++){
elm = p_form.elements[i];
name = elm.name;
if(name.indexOf("\[\]")>0) name = name.substr(0,name.indexOf("\[\]"));
if(elm.type=='checkbox' || elm.type=='radio') {
if(elm.checked) {
frmElements[name] = ((typeof(frmElements[name])=='undefined')?'':frmElements[name]+"\n")+elm.nextSibling.nodeValue;
};
}
else if(elm.type=='select-one') {
if(elm.selectedIndex > -1 && elm.options[elm.selectedIndex].text)
frmElements[name] = elm.options[elm.selectedIndex].text;
else
frmElements[name] = elm.value;
}
else {
frmElements[name] = elm.value;
}
if(name.indexOf("SepMax")>0) {
sepField[sepCounter] = name.substr(10);
sepField_max[sepCounter++] = elm.value;
}
}
if(typeof(sepField) !== "undefined"){
for(i=0;i<sepField.length;i++) {
var val = "";
seq = sepField[i];
max = sepField_max[i];
var Symbol = eval('p_form.FrmSepSymbol_'+seq+'.value');
for(j=1;j<max;j++) {
val+=Symbol+eval('p_form.FrmSep_'+seq+'_'+j+'.value');
}
name = p_prefix+seq;
frmElements[name] = ((typeof(frmElements[name])=='undefined')?'':frmElements[name])+val;
}
}
$(reviewGroup).children(".form-group").each(function(){
var reviewPart = $(this).children("div.col-sm-9").eq(0);
var fieldIndex = reviewPart.attr('field-index');
name = p_prefix+fieldIndex;
if(typeof(frmElements[name])=="undefined") frmElements[name] = "";
$(reviewPart).html("<p class='form-control-static'>"+strUtil.prototype.directShowInput(frmElements[name])+"&nbsp;</p>");
});
$(dispDiv).hide();
$(reviewDiv).show();
}
function frm_mobileCancelSubmit(p_formnbr){
var dispDiv = $("#"+'_Form_Section_'+p_formnbr);
var reviewDiv = $("#"+'_Form_PreviewSection_'+p_formnbr);
$(dispDiv).show();
$(reviewDiv).hide();
}
function getFormVal(p_form){
var keys = new Array();
var values = new Array();
var a = new Array();
var frm;
if(typeof(p_form)=='object') frm = p_form;
else frm = eval("document."+p_form);
var elements = frm.elements;
var len = elements.length;
for(var i=0;i<len;i++){
if(elements[i].type){
switch(elements[i].type){
case "checkbox":
if(elements[i].checked){
keys[i]=elements[i].name;
values[i]=(elements[i].value);
a.push({name:keys[i],value:values[i]});
}
break;
case "radio":
if(elements[i].checked){
keys[i]=elements[i].name;
values[i]=(elements[i].value);
a.push({name:keys[i],value:values[i]});
};
break;
default:
keys[i]=elements[i].name;
values[i]=(elements[i].value);
a.push({name:keys[i],value:values[i]});
break;
}
}
else{
keys[i] = elements[i].name;
values[i] = (elements[i].value);
a.push({name:keys[i],value:values[i]});
}
}
return a;
}
function formateNumber(p_num,p_decimal){
var num = p_num || 0,decimal = p_decimal || '.';
if (typeof num === "number") return num;
var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
unformatted = parseFloat(
("" + num)
.replace(regex, '')
.replace(decimal, '.')
);
return !isNaN(unformatted) ? unformatted : 0;
}
function toFixedNum(p_prec,p_num,p_len){
var len = p_len ? p_len : parseInt(p_prec,10),
power = Math.pow(10, len);
return (Math.round(formateNumber(p_num) * power) / power).toFixed(len);
}
function toFormateNum(p_prec,p_num,p_len,p_thousand,p_decimal){
var   num = formateNumber(p_num),
len = p_len ? p_len : parseInt(p_prec,10),
thousand = p_thousand ? p_thousand : ',',
decimal = p_decimal ? p_decimal : '.',
base = parseInt(toFixedNum(p_prec,Math.abs(num || 0), len), 10) + "",
mod = base.length > 3 ? base.length % 3 : 0;
return (mod ? base.substr(0, mod) + thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (len ? decimal + toFixedNum(p_prec,Math.abs(num), len).split('.')[1] : "");
}
function toFormateNum2(p_prec,p_num,p_len,p_decimal){
var   num = formateNumber(p_num),
len = p_len ? p_len : parseInt(p_prec,10),
thousand ="",
decimal = p_decimal ? p_decimal : '.',
base = parseInt(toFixedNum(p_prec,Math.abs(num || 0), len), 10) + "",
mod = base.length > 3 ? base.length % 3 : 0;
return (mod ? base.substr(0, mod) + thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (len ? decimal + toFixedNum(p_prec,Math.abs(num), len).split('.')[1] : "");
}
function isDate(p_date){
var dt = p_date.split('-');
if(dt.length!=3) return false;
var y = dt[0];
var m = dt[1];
var d = dt[2];
if(isNaN(y) || y>9999 || y<1000)return false;
if(isNaN(m) || m>12 || m<1)return false;
if(isNaN(d) || d>31 || d<1)return false;
return true;
}
function drawCanvas(rwd, full,obj){
var w = $(window).width();
var canvas=obj[0];
var ctx=canvas.getContext("2d");
var img=new Image();
img.src =obj.attr("src");
img.onload = function(){
canvas.height = img.height;
if (w < rwd | w == rwd) {
canvas.width = rwd;
centerLeft = -(img.width - rwd) /2;
ctx.drawImage(img, centerLeft, 0);
} else {
canvas.width = full;
centerLeft = -(img.width - full) /2;
ctx.drawImage(img, centerLeft, 0);
}
}
}
function showPopDiv(p_obj,p_boxobj){
$(p_boxobj).removeClass("animated fadeOutDown");
$(p_obj).show()
var margin_left = 0-Math.floor($(p_boxobj).innerWidth()/2);
var margin_top = 0-Math.floor($(p_boxobj).innerHeight()/2);
$(p_boxobj).addClass("animated fadeInUp");
$(p_boxobj).css('margin-left',margin_left);
$(p_boxobj).css('margin-top',margin_top);
ModalHelper.afterOpen();
}
function hidePopDiv(p_obj,p_boxobj){
$(p_boxobj).removeClass("animated fadeInUp");
$(p_boxobj).addClass("animated fadeOutDown")
$(p_obj).delay(1000).hide(1);
ModalHelper.beforeClose();
}
function showPopTips(p_boxcont){
var boxobj = $("#_pop_tips").find('.mbox');
$(boxobj).html(p_boxcont);
$('#_pop_tips').fadeIn(20,function(){
var tipboxW = $(boxobj).innerWidth();
$(boxobj).css({'bottom': '10%','opacity': '1','margin-left': -1*(tipboxW/2)});
}).delay(2500).fadeOut(20,function(){
$(boxobj).css({'bottom':'-100%','opacity':'0'});
});
}
function showLoading(p_over){
$('#loading').show();
if(p_over) return;
$('#overlay').addClass("show");
}
function hideLoading(p_over){
$('#loading').hide();
if(p_over) return;
$('#overlay').removeClass("show");
}
function mCallBack(p_data){
hideLoading();
var d = eval("("+p_data+")");
showPopTips(d.content);
}
function showPopDialog(p_cont,p_btnname,p_callback,p_calcelname,p_cancelback){
var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if(isiOS) ModalHelper.afterOpen();
$("#_pop_dialog .mdialog-foot .mbtn-c").unbind("click");
$("#_pop_dialog .mdialog-foot .mbtn-s").unbind("click");
btnname="OK";
calcelname="Cancel";
$('#_pop_dialog .mcont').html(p_cont);
if(p_btnname) btnname=p_btnname;
$('#_pop_dialog .mdialog-foot .mbtn-s').html(btnname);
if(p_calcelname){
calcelname=p_calcelname;
$('#_pop_dialog .mdialog-foot .mbtn-c').show();
}else $('#_pop_dialog .mdialog-foot .mbtn-c').hide();
$('#_pop_dialog .mdialog-foot .mbtn-c').html(calcelname);
$('#_pop_dialog').show();
$('#_pop_dialog .mdialog-foot .mbtn-s').focus();
$("#_pop_dialog .mdialog-foot .mbtn-s").click(function(){
$('#_pop_dialog').hide();
if(p_callback)p_callback();
if(isiOS) ModalHelper.beforeClose();
});
$("#_pop_dialog .mdialog-foot .mbtn-c").click(function(){
$('#_pop_dialog').hide();
if(p_cancelback)p_cancelback();
if(isiOS) ModalHelper.beforeClose();
});
}
function HvCloseClick(p_obj,p_objparent){
$(p_obj).click(function(){
$(this).parents(p_objparent).removeClass('open');
$('html').removeClass('offscroll');
$('#overlay').removeClass('show');
});
}
function mobResizeWrapHeight(){
var wrapHeight = 0;
$("*[fixBtmLevel=1]").each(function(){
if($(this).attr("fixBtmHeightFun")){
wrapHeight = eval($(this).attr("fixBtmHeightFun")+"()");
}
else{
wrapHeight = $(this).height();
}
});
$("*[fixBtmLevel=2]").each(function(){
if($(this).attr("fixBtmHeightFun")){
wrapHeight += eval($(this).attr("fixBtmHeightFun")+"("+wrapHeight+")");
}
else{
wrapHeight += $(this).height();
}
});
$("*[fixBtmLevel=3]").each(function(){
if($(this).attr("fixBtmHeightFun")){
wrapHeight += eval($(this).attr("fixBtmHeightFun")+"("+wrapHeight+")");
}
else{
wrapHeight += $(this).height();
}
});
$("*[fixBtmLevel=4]").each(function(){
if($(this).attr("fixBtmHeightFun")){
wrapHeight += eval($(this).attr("fixBtmHeightFun")+"("+wrapHeight+")");
}
else{
wrapHeight += $(this).height();
}
});
$('body>.wrap').css("padding-bottom",wrapHeight);
}
function menuDropAct()
{
$(".dropdown-toggle").parent().off("click mouseenter mouseleave");
var flag=0;
var dropShowing=0;
$(".dropdown-toggle").parent().on("mouseenter",function(){
if(!$(this).hasClass('open'))
$(this).addClass('open');
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
if($(this).hasClass('open')){
dropShowing = 1;
setTimeout(function(){ dropShowing=0;}, 300);
}
}
});
$(".dropdown-toggle").parent().on("mouseleave",function(){
$(this).removeClass('open');
flag = 0;
});
$('.dropdown-toggle').parent().on("click",function(event){
event.stopPropagation();
});
$(".dropdown-toggle").parent().on("click",function(){//首选单点击不跳转
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
if(flag==1)
$(this).toggleClass('open');
flag=1;
if($(this).hasClass('open')){
dropShowing = 1;
setTimeout(function(){ dropShowing=0;}, 300);
}
}
return false;
});
$(".dropdown-toggle").parent().children('.dropdown-menu').find('a').on("click",function(){
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
if(dropShowing){
flag = 1;
return false;
}
}
})
$("body").on("click",function(){
if($(".dropdown-toggle").parent().hasClass('open')){
$('.dropdown-toggle').parent().removeClass('oyen');
}
flag= 0;
});
$('.list-group').on("click",function(event){
event.stopPropagation();
});
$('.dropdown-menu').on("click",function(event){
event.stopPropagation();
});
if($('.form_date').length){
$('.form_date').datetimepicker({
format: 'yyyy-mm-dd',
autoclose: 1,
todayBtn:  1,
language:  getCookie('PageLang'),
minView: 2
});
}
}
function appendGridItem(randId, moCount, first){
var count = moCount||1;
var moContent = [];
if(first){//第一个加载的页面初始化瀑布流
$.each($('.grid_'+randId+' .grid-item'), function(index, item){
if($(this).html().trim().length <= 0){
$(this).remove();
}
});
var $grid = $('.grid_'+randId).masonry({
itemSelector: '.grid_'+randId+'>.grid-item',
horizontalOrder: true,
percentPosition: true,
resize: true
});
window['grid_'+randId] = $grid;
if($('.grid_'+randId+' img')){
$grid.imagesLoaded().progress(function() {
$grid.masonry();
});
}
}
var appendFunc = function(str, moDivId){//用于往瀑布流添加元素
var moStr = str||'';
var itemStr = '';
if(!first && moStr){
var moduleClassName = $('.grid_'+randId+" ."+moDivId).parent().prop("className");
moContent[moDivId] = '<div class="'+moduleClassName+'">'+moStr+'</div>';
}
if(!first && count==1){
var container = $('.grid_'+randId).parent().children('.grid').eq(0);
var reg = /\bgrid_\w+\b/;
var className = container.prop("className");
var gridId = reg.exec(className);
var $grid = window[gridId[0]];
var items = $('.grid_'+randId+' .grid-item');
if(items.length>0){
$.each(items, function(index, item){
if($(item).hasClass('d-item')){
itemStr += $(item).prop("outerHTML");
}else{
var module = $(item).children("div").eq(0);
if(module.length>0 && module.html().trim().length>0){//获取内容不为空的模组,加入瀑布流
var id = $(item).children("div").eq(0).attr('class');
if(typeof moContent[id] != 'undefined'){
itemStr += moContent[id];
}
}
}
});
if(itemStr.length<=0){
return;
}
$('.grid_'+randId).remove();
content = $(itemStr);
$grid.append( content ).masonry( 'appended', content );
$grid.imagesLoaded().progress(function(){
$grid.masonry();
});
}
}
if(first){
window['grid_'+randId].masonry();
window['grid_'+randId].imagesLoaded().progress(function() {
window['grid_'+randId].masonry();
});
}
count--;
}
if(first || moCount ==0){
appendFunc();
}
return appendFunc;
}
$(document).ready(function(){
menuDropAct();
$('.mpopbg').click(function(){
$('.mpopdiv .mbox').removeClass("animated fadeInUp");
$('.mpopdiv .mbox').addClass("animated fadeOutDown");
$('.mpopdiv').delay(1000).hide(1);
});
$('#_pop_dialog .mdialog-foot .mbtn').click(function(){
$('#_pop_dialog').hide();
})
})
function dataCheck() {
this.ErrMsg = new Array();
this.ErrMsg[2] = "Please Input Something!";
this.ErrMsg[1] = "Error1!";
return this;
}
dataCheck.prototype.setField = function(p_field) {
this.screenField = p_field;
}
dataCheck.prototype.setName = function(p_name) {
this.screenName = p_name;
}
dataCheck.prototype.setNull = function(p_null) {
this.screenNull = p_null;
}
dataCheck.prototype.setType = function(p_type) {
this.screenType = p_type;
}
dataCheck.prototype.getObj = function(p_form,p_name,p_prefix) {
var obj ;
if(typeof(p_form)=='object') {
obj = eval("p_form."+p_prefix+p_name);
}
else {
obj = eval("document."+p_form+"."+p_prefix+p_name);
}
if(!obj) return false;
return obj;
}
dataCheck.prototype.setMsg = function(p_msg) {
this.ErrMsg = p_msg;
}
dataCheck.prototype.datavalid = function(p_form,p_prefix)  {
var end=" \n";
if(typeof popAlert==="function") end="<br>";
var msg = "";
var focusobj ;
var flag = 1;
var f_length = this.screenField.length;
var strUtl = new strUtil('');
for(var i=0;i<f_length;i++)  {
if(typeof(this.screenName[i])=='undefined') continue;
if(this.screenType[i]=="l") {
if(this.screenNull[i]=='1')  continue;
obj = this.getObj(p_form,this.screenField[i],p_prefix);
if(!obj) continue;
if(obj.checked) continue;
var l_len = obj.length;
var chk = false;
for(j=0;j<l_len;j++) {
obj = this.getObj(p_form,this.screenField[i]+"["+j+"]",p_prefix);
if(obj.checked) { chk = true;  break; }
}
if(chk) continue;
msg = msg + this.screenName[i]+" : "+this.ErrMsg[1]+end;
if(flag) {
focusobj = obj;
flag = 0;
}
continue;
}
if(this.screenType[i]=="x") {
if(this.screenNull[i]=='1')  continue;
var chk = false;
if(typeof(p_form)=='object') {
if($(p_form).find("input[name='"+p_prefix+this.screenField[i]+"[]']").length==0) continue;
$(p_form).find("input[name='"+p_prefix+this.screenField[i]+"[]']").each(function() {
if($(this).prop("checked")==true || $(this).prop("checked")=='checked'){
chk = true;
return false;
}
});
}else{
if($("form[name="+p_form+"]").find("input[name='"+p_prefix+this.screenField[i]+"[]']").length==0) continue;
$("form[name="+p_form+"]").find("input[name='"+p_prefix+this.screenField[i]+"[]']").each(function() {
if($(this).prop("checked")==true || $(this).prop("checked")=='checked'){
chk = true;
return false;
}
});
}
if(chk) continue;
msg = msg + this.screenName[i]+" : "+this.ErrMsg[1]+end;
continue;
}
obj = this.getObj(p_form,this.screenField[i],p_prefix);
if(!obj) continue;
if(!this.screenNull[i] && strUtl.trim(obj.value) == "") {
msg =msg +  this.screenName[i]+ " : "+this.ErrMsg[1]+end;
if(flag) { focusobj = obj;  flag = 0; }
}
switch(this.screenType[i]){
case "d":
if(obj.value != "" && !dateUtil.prototype.isDates(obj.value)) {
msg +=  this.screenName[i]+ " : " + this.ErrMsg[3] +end;
if(flag) { focusobj = obj;  flag = 0; }
}
break;
case "i":
if(obj.value != "" && !strUtl.isInteger(obj.value)) {
msg +=  this.screenName[i]+ " : "+ this.ErrMsg[2]+end;
if(flag) { focusobj = obj;  flag = 0; }
}
break;
case "n":
if(obj.value != "" && isNaN(obj.value)) {
msg += this.screenName[i]+ " : "+ this.ErrMsg[4]+end;
if(flag) { focusobj = obj;  flag = 0; }
}
break;
case "f":
if(obj.value != "" && isNaN(obj.value)) {
msg += this.screenName[i]+ " : " + this.ErrMsg[4] +end;
if(flag) { focusobj = obj;  flag = 0; }
}
break;
case "l":
if(obj.value != "" && !strUtl.isInteger(obj.value))  {
msg += this.screenName[i]+ " : " + this.ErrMsg[2]+end;
if(flag) { focusobj = obj;  flag = 0; }
}
break;
case "e":
if(obj.value != "" && !strUtl.isEmail(obj.value))  {
msg += this.screenName[i]+ " : " + this.ErrMsg[5]+end;
if(flag) { focusobj = obj;  flag = 0; }
}
break;
}
}
if(!strUtl.isEmpty(msg))  {
if(typeof popAlert==="function") popAlert(msg,this.ErrMsg[0]);
else if(typeof showPopDialog==="function") showPopDialog(msg,this.ErrMsg[0],function(){try {if(!flag)focusobj.focus();}catch(e){}});
else {
msg = this.ErrMsg[0] + " :"+end+msg ;
alert(msg);
}
return false;
}
return true;
}
function dateUtil() {
return this;
}
dateUtil.prototype.monthdays = function (p_year,p_month) {
if(p_month==1 || p_month==3 || p_month==5 || p_month==7 || p_month==8 ||p_month==10 || p_month==12 )
return 31;
if(p_month==4 || p_month==6 || p_month==9 || p_month==11 )
return 30;
if(p_month==2 && ((p_year%4==0 && p_year%100!=0) || p_year%400==0 ))
return 29;
return 28;
}
dateUtil.prototype.nextmonth = function(p_year,p_month) {
p_month=parseInt(p_month);
if(p_month<12)  {p_month +=1; }
else  {
p_year +=1;
p_month =1;
}
return(p_year+"-"+p_month);
}
dateUtil.prototype.nextdate = function(p_year,p_month,p_day)  {
if(p_day<this.monthdays(p_year,p_month)) {p_day +=1; }
else{
if(p_month<12) {
p_month +=1;
p_day = 1;
}
else {
p_year +=1;
p_month =1;
p_day   =1;
}
}
return(p_year+"-"+p_month+"-"+p_day);
}
dateUtil.prototype.validdate = function (p_year,p_month,p_day){
if(!(!isNaN(p_year) && p_year>1000 && p_year<=9999))
return false;
if(!(!isNaN(p_month) && p_month>=1 && p_month<=12))
return false;
if(!(!isNaN(p_day) && p_day>=1 && p_day<=this.monthdays(p_year,p_month)))
return false;
return true;
}
dateUtil.prototype.isDates = function(p_date) {
deli ='';
for(i=0;i<=p_date.length;i++){
c=p_date.substring(i,i+1);
switch (c) {
case '-' : deli = '-'
break;
case '/' : deli = '/'
break;
case ':' : deli = ':'
break;
case '.' : deli = '.'
break;
case ',' : deli = ','
break;
case "'" : deli = "'"
break;
}
if (deli!="") break;
}
if(deli=="") return false;
l_date=p_date.split(deli);
if(l_date.length>3) return false;
try {
if(!this.validdate(l_date[0],l_date[1],l_date[2]))
return false;
}catch(e){return false;}
return true;
}
function strUtil(p_str) {
if(typeof(p_str)=='undefined') p_str = "";
this.String = p_str;
return this;
}
strUtil.prototype.length = function() {
a=strUtil.prototype.length.arguments;
if(typeof(a[0])!='undefined') p_in = a[0];
else p_in = this.String;
return p_in.length;
}
strUtil.prototype.isInteger = function() {
a=strUtil.prototype.isInteger.arguments;
if(typeof(a[0])!='undefined') p_in = a[0];
else p_in = this.String;
var p_val = p_in.toString();
for(var i=0;i<p_val.length; i++)  {
var oneChar = p_val.charAt(i);
if(i==0 && oneChar =="-")       continue;
if(oneChar<"0" || oneChar>"9")  return false;
}
return true;
}
strUtil.prototype.isPosInteger = function() {
a=strUtil.prototype.isPosInteger.arguments;
if(typeof(a[0])!='undefined') p_in = a[0];
else p_in = this.String;
var p_val = p_in.toString();
for(var i=0;i<p_val.length; i++)  {
var oneChar = p_val.charAt(i);
if(oneChar<"0" || oneChar>"9")  return false;
}
return true;
}
strUtil.prototype.isEmpty = function () {
a=strUtil.prototype.isEmpty.arguments;
if(typeof(a[0])!='undefined') p_in = a[0];
else p_in = this.String;
p_val = this.trim(p_in);
if(p_val == null || p_val=="")  return true;
if(p_val.length==0) return true;
return false;
}
strUtil.prototype.isEmail = function(){
a=strUtil.prototype.isEmail.arguments;
if(typeof(a[0])!='undefined') p_in = a[0];
else p_in = this.String;
var reg = new RegExp("^[_\\.0-9a-zA-Z-]+@([0-9a-zA-Z-]+\\.)+[a-zA-Z]{2,3}$");
if(p_in.search(reg)!=-1)
return true;
else
return false;
}
strUtil.prototype.isCode = function()  {
a=strUtil.prototype.isCode.arguments;
if(typeof(a[0])!='undefined') p_in = a[0];
else p_in = this.String;
var  reg =new RegExp(/^[a-z\d\_]+$/i);
if(p_in.search(reg)!=-1)
return true;
else
return false;
}
strUtil.prototype.ltrim = function(p_str)  {
a=strUtil.prototype.ltrim.arguments;
if(typeof(a[0])!='undefined') p_str = a[0];
else p_str = this.String;
return p_str.replace(/(^\s*)/g, "");
}
strUtil.prototype.trim = function(p_str)
{
a=strUtil.prototype.trim.arguments;
if(typeof(a[0])!='undefined') p_str = a[0];
else p_str = this.String;
return p_str.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.trim = function()
{
return this.replace(/(^[\n\s]*)|([\s\n]*$)/g, "");
}
strUtil.prototype.rtrim = function(p_str)  {
a=strUtil.prototype.rtrim.arguments;
if(typeof(a[0])!='undefined') p_str = a[0];
else p_str = this.String;
return p_str.replace(/(\s*$)/g, "");
}
strUtil.prototype.wipeTag = function(p_str,p_tag)  {
var reg = new RegExp("<"+p_tag+"[^>]*>([\\s|\\S]*?)<\\/"+p_tag+"\\s*>","i");
p_str = p_str.replace(reg,"");
return p_str;
}
strUtil.prototype.wipeScript = function(p_str)  {
if(typeof p_str=="undefined" || p_str==null) return ;
var reg1 = /<script[^>]*>([\s|\S]*?)<\/script\s*>/i;
var reg2 = /<iframe[^>]*>([\s|\S]*?)<\/iframe\s*>/i;
var reg3 = /<frameset[^>]*>([\s|\S]*?)<\/frameset\s*>/i;
var reg4 = /<a\s*href=[\s\S]*javascript[^>]*>([\s|\S]*?)<\/a\s*>/i;
p_str = p_str.replace(reg1,"");
p_str = p_str.replace(reg2,"");
p_str = p_str.replace(reg3,"");
p_str = p_str.replace(reg4,"");
return p_str;
}
strUtil.prototype.striptags = function(p_str)  {
if(typeof p_str=="undefined" || p_str==null) return ;
var reg1 = /<[^>]*>/ig;
var reg2 = /<\/[^>]*>/ig;
var reg3 = /&nbsp;/ig;
p_str = p_str.replace(reg1,"");
p_str = p_str.replace(reg2,"");
p_str = p_str.replace(reg3,"");
return p_str;
}
strUtil.prototype.wipeForm = function(p_str)  {
if(typeof p_str=="undefined" || p_str==null) return ;
var reg1 = /<form[^>]*>/i;
var reg2 = /<\/form[^>]*>/i;
p_str = p_str.replace(reg1,"");
p_str = p_str.replace(reg2,"");
return p_str;
}
strUtil.prototype.addslashes = function (str) {
if(typeof str=="undefined" || str==null) return ;
str=str.replace(/\'/g,'\\\'');
str=str.replace(/\"/g,'\\"');
str=str.replace(/\\/g,'\\\\');
str=str.replace(/\0/g,'\\0');
return str;
}
strUtil.prototype.stripslashes = function (str) {
if(typeof str=="undefined" || str==null) return ;
str=str.replace(/\\'/g,'\'');
str=str.replace(/\\"/g,'"');
str=str.replace(/\\\\/g,'\\');
str=str.replace(/\\0/g,'\0');
return str;
}
strUtil.prototype.nl2br = function (str) {
if(typeof str=="undefined" || str==null) return ;
return str.replace(/(\r\n)|(\n\r)|\r|\n/g,"<BR>");
}
strUtil.prototype.directShowInput = function (str) {
return strUtil.prototype.nl2br(strUtil.prototype.htmlspecialchars(strUtil.prototype.stripslashes(str)));
}
strUtil.prototype.htmlspecialchars = function(str)  {
if(typeof str=="undefined" || str==null) return ;
str = str.replace(/\</g,"&lt;");
str = str.replace(/\>/g,"&gt;");
str = str.replace(/\"/g,"&quot;");
return str;
}
strUtil.prototype.reversespecialchars = function(str)  {
if(typeof str=="undefined" || str==null) return ;
str = str.replace(/&lt;/g,"<");
str = str.replace(/&gt;/g,">");
str = str.replace(/&quot;/g,"\"");
str = str.replace(/&amp;/g,"&");
return str;
}
strUtil.prototype.markIp = function () {
a=strUtil.prototype.markIp.arguments;
ip = a[0];
if(typeof(a[1])!='undefined') part = a[1];
else part = 3;
if(part>4) return ip;
ret = ip.split(".");
str="";
for(i=0;i<ret.length;i++) {
if(i+1<part) str+=ret[i]+".";
else str+="X.";
}
return str.substring(0,str.length-1);
}
function Cookie(path,domain,duration,secure) {
this.defPath = path;
this.defDomain = domain;
this.defDuration = duration;
this.defSecure = secure;
return this;
}
Cookie.prototype.setCookie = function (name, value, duration, path, domain, secure) {
if(!duration && this.defDuration) duration = this.defDuration;
if(!path && this.defPath) path = this.defDuration;
if(!domain && this.defDomain) domain = this.defDomain;
if(!secure && this.defSecure) secure = this.defSecure;
if(duration){
var expires = new Date();
var curTime = new Date().getTime();
expires.setTime(curTime + (1000 * 60 * duration));
}
this.setCookieDT(name, value, expires, path, domain, secure);
}
Cookie.prototype.setGroupCookie = function (cookiename,name, value, duration, path, domain, secure) {
var val = this.getCookie(cookiename);
if(typeof val=="undefined" || val=="") {
return this.setCookie(cookiename,name+":"+value,duration, path, domain, secure);
}
var arr = val.split(";;");
var acookie;
var found=false;
var i;
for(i=0;i<arr.length;i++) {
acookie = arr[i].split(":");
if(acookie[0]==name) {
arr[i] = name+":"+value;
found = true;
}
}
if(!found) {
arr[i] = name+":"+value;
}
var str = arr.join(";;");
return this.setCookie(cookiename,str,duration, path, domain, secure);
}
Cookie.prototype.getGroupCookie = function (cookiename,name) {
var val = this.getCookie(cookiename);
if(typeof val=="undefined" || val=="") return "";
var arr = val.split(";;");
var acookie;
var found=false;
for(var i=0;i<arr.length;i++) {
acookie = arr[i].split(":");
if(acookie[0]==name) {
return acookie[1];
}
}
return "";
}
Cookie.prototype.delGroupCookie = function (cookiename,name,duration, path, domain, secure) {
var val = this.getCookie(cookiename);
if(typeof val=="undefined" || val=="") return "";
var arr = val.split(";;");
var acookie;
var res = new Array();
var j=0;
for(var i=0;i<arr.length;i++) {
acookie = arr[i].split(":");
if(acookie[0]==name) continue;
res[j++] = arr[i];
}
var str = res.join(";;")
return this.setCookie(cookiename,str,duration, path, domain, secure);
}
Cookie.prototype.setCookieDT = function (name, value, expires, path, domain, secure) {
document.cookie =
name+"="+encodeURIComponent(value)+
(expires ? "; expires="+expires.toGMTString() : "")+
(path    ? "; path="   +path   : "")+
(domain  ? "; domain=" +domain : "")+
(secure  ? "; secure" : "");
}
Cookie.prototype.getCookie = function (name) {
cookie = " "+document.cookie;
offset = cookie.indexOf(" "+name+"=");
if (offset == -1) return undefined;
offset += name.length+2;
end     = cookie.indexOf(";", offset)
if (end == -1) end = cookie.length;
return decodeURIComponent(cookie.substring(offset, end));
}
Cookie.prototype.existCookie = function (name) {
var cookieVal = new strUtil(Cookie.prototype.getCookie(name));
cookieVal.trim(' ');
if(cookieVal.length()==0) return false;
return true;
}
Cookie.prototype.delCookie = function (name,path,domain) {
if (this.getCookie(name)) {
var date = new Date("January 01, 2000 00:00:01");
this.setCookieDT(name, "", date, path, domain);
}
}
!function(a,b){function j(a,b){function c(){}c[e]=this[e];var d=this,g=new c,h=f(a),j=h?a:this,k=h?{}:a,l=function(){this.initialize?this.initialize.apply(this,arguments):(b||h&&d.apply(this,arguments),j.apply(this,arguments))};l.methods=function(a){i(g,a,d),l[e]=g;return this},l.methods.call(l,k).prototype.constructor=l,l.extend=arguments.callee,l[e].implement=l.statics=function(a,b){a=typeof a=="string"?function(){var c={};c[a]=b;return c}():a,i(this,a,d);return this};return l}function i(a,b,d){for(var g in b)b.hasOwnProperty(g)&&(a[g]=f(b[g])&&f(d[e][g])&&c.test(b[g])?h(g,b[g],d):b[g])}function h(a,b,c){return function(){var d=this.supr;this.supr=c[e][a];var f=b.apply(this,arguments);this.supr=d;return f}}function g(a){return j.call(f(a)?a:d,a,1)}var c=/xyz/.test(function(){xyz})?/\bsupr\b/:/.*/,d=function(){},e="prototype",f=function(a){return typeof a===b};if(typeof module!="undefined"&&module.exports)module.exports=g;else{var k=a.klass;g.noConflict=function(){a.klass=k;return this},a.klass=g}}(this,"function")
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;(function($, window, document, undefined) {
function Owl(element, options) {
this.settings = null;
this.options = $.extend({}, Owl.Defaults, options);
this.$element = $(element);
this._handlers = {};
this._plugins = {};
this._supress = {};
this._current = null;
this._speed = null;
this._coordinates = [];
this._breakpoint = null;
this._width = null;
this._items = [];
this._clones = [];
this._mergers = [];
this._widths = [];
this._invalidated = {};
this._pipe = [];
this._drag = {
time: null,
target: null,
pointer: null,
stage: {
start: null,
current: null
},
direction: null
};
this._states = {
current: {},
tags: {
'initializing': [ 'busy' ],
'animating': [ 'busy' ],
'dragging': [ 'interacting' ]
}
};
$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
this._handlers[handler] = $.proxy(this[handler], this);
}, this));
$.each(Owl.Plugins, $.proxy(function(key, plugin) {
this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
= new plugin(this);
}, this));
$.each(Owl.Workers, $.proxy(function(priority, worker) {
this._pipe.push({
'filter': worker.filter,
'run': $.proxy(worker.run, this)
});
}, this));
this.setup();
this.initialize();
}
Owl.Defaults = {
items: 3,
loop: false,
center: false,
rewind: false,
checkVisibility: true,
mouseDrag: true,
touchDrag: true,
pullDrag: true,
freeDrag: false,
margin: 0,
stagePadding: 0,
merge: false,
mergeFit: true,
autoWidth: false,
startPosition: 0,
rtl: false,
smartSpeed: 250,
fluidSpeed: false,
dragEndSpeed: false,
responsive: {},
responsiveRefreshRate: 200,
responsiveBaseElement: window,
fallbackEasing: 'swing',
slideTransition: '',
info: false,
nestedItemSelector: false,
itemElement: 'div',
stageElement: 'div',
refreshClass: 'owl-refresh',
loadedClass: 'owl-loaded',
loadingClass: 'owl-loading',
rtlClass: 'owl-rtl',
responsiveClass: 'owl-responsive',
dragClass: 'owl-drag',
itemClass: 'owl-item',
stageClass: 'owl-stage',
stageOuterClass: 'owl-stage-outer',
grabClass: 'owl-grab'
};
Owl.Width = {
Default: 'default',
Inner: 'inner',
Outer: 'outer'
};
Owl.Type = {
Event: 'event',
State: 'state'
};
Owl.Plugins = {};
Owl.Workers = [ {
filter: [ 'width', 'settings' ],
run: function() {
this._width = this.$element.width();
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(cache) {
cache.current = this._items && this._items[this.relative(this._current)];
}
}, {
filter: [ 'items', 'settings' ],
run: function() {
this.$stage.children('.cloned').remove();
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(cache) {
var margin = this.settings.margin || '',
grid = !this.settings.autoWidth,
rtl = this.settings.rtl,
css = {
'width': 'auto',
'margin-left': rtl ? margin : '',
'margin-right': rtl ? '' : margin
};
!grid && this.$stage.children().css(css);
cache.css = css;
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(cache) {
var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
merge = null,
iterator = this._items.length,
grid = !this.settings.autoWidth,
widths = [];
cache.items = {
merge: false,
width: width
};
while (iterator--) {
merge = this._mergers[iterator];
merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
cache.items.merge = merge > 1 || cache.items.merge;
widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
}
this._widths = widths;
}
}, {
filter: [ 'items', 'settings' ],
run: function() {
var clones = [],
items = this._items,
settings = this.settings,
view = Math.max(settings.items * 2, 4),
size = Math.ceil(items.length / 2) * 2,
repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
append = '',
prepend = '';
repeat /= 2;
while (repeat > 0) {
clones.push(this.normalize(clones.length / 2, true));
append = append + items[clones[clones.length - 1]][0].outerHTML;
clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
repeat -= 1;
}
this._clones = clones;
$(append).addClass('cloned').appendTo(this.$stage);
$(prepend).addClass('cloned').prependTo(this.$stage);
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function() {
var rtl = this.settings.rtl ? 1 : -1,
size = this._clones.length + this._items.length,
iterator = -1,
previous = 0,
current = 0,
coordinates = [];
while (++iterator < size) {
previous = coordinates[iterator - 1] || 0;
current = this._widths[this.relative(iterator)] + this.settings.margin;
coordinates.push(previous + current * rtl);
}
this._coordinates = coordinates;
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function() {
var padding = this.settings.stagePadding,
coordinates = this._coordinates,
css = {
'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
'padding-left': padding || '',
'padding-right': padding || ''
};
this.$stage.css(css);
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(cache) {
var iterator = this._coordinates.length,
grid = !this.settings.autoWidth,
items = this.$stage.children();
if (grid && cache.items.merge) {
while (iterator--) {
cache.css.width = this._widths[this.relative(iterator)];
items.eq(iterator).css(cache.css);
}
} else if (grid) {
cache.css.width = cache.items.width;
items.css(cache.css);
}
}
}, {
filter: [ 'items' ],
run: function() {
this._coordinates.length < 1 && this.$stage.removeAttr('style');
}
}, {
filter: [ 'width', 'items', 'settings' ],
run: function(cache) {
cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
this.reset(cache.current);
}
}, {
filter: [ 'position' ],
run: function() {
this.animate(this.coordinates(this._current));
}
}, {
filter: [ 'width', 'position', 'items', 'settings' ],
run: function() {
var rtl = this.settings.rtl ? 1 : -1,
padding = this.settings.stagePadding * 2,
begin = this.coordinates(this.current()) + padding,
end = begin + this.width() * rtl,
inner, outer, matches = [], i, n;
for (i = 0, n = this._coordinates.length; i < n; i++) {
inner = this._coordinates[i - 1] || 0;
outer = Math.abs(this._coordinates[i]) + padding * rtl;
if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
matches.push(i);
}
}
this.$stage.children('.active').removeClass('active');
this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
this.$stage.children('.center').removeClass('center');
if (this.settings.center) {
this.$stage.children().eq(this.current()).addClass('center');
}
}
} ];
Owl.prototype.initializeStage = function() {
this.$stage = this.$element.find('.' + this.settings.stageClass);
if (this.$stage.length) {
return;
}
this.$element.addClass(this.options.loadingClass);
this.$stage = $('<' + this.settings.stageElement + '>', {
"class": this.settings.stageClass
}).wrap( $( '<div/>', {
"class": this.settings.stageOuterClass
}));
this.$element.append(this.$stage.parent());
};
Owl.prototype.initializeItems = function() {
var $items = this.$element.find('.owl-item');
if ($items.length) {
this._items = $items.get().map(function(item) {
return $(item);
});
this._mergers = this._items.map(function() {
return 1;
});
this.refresh();
return;
}
this.replace(this.$element.children().not(this.$stage.parent()));
if (this.isVisible()) {
this.refresh();
} else {
this.invalidate('width');
}
this.$element
.removeClass(this.options.loadingClass)
.addClass(this.options.loadedClass);
};
Owl.prototype.initialize = function() {
this.enter('initializing');
this.trigger('initialize');
this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
if (this.settings.autoWidth && !this.is('pre-loading')) {
var imgs, nestedSelector, width;
imgs = this.$element.find('img');
nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
width = this.$element.children(nestedSelector).width();
if (imgs.length && width <= 0) {
this.preloadAutoWidthImages(imgs);
}
}
this.initializeStage();
this.initializeItems();
this.registerEventHandlers();
this.leave('initializing');
this.trigger('initialized');
};
Owl.prototype.isVisible = function() {
return this.settings.checkVisibility
? this.$element.is(':visible')
: true;
};
Owl.prototype.setup = function() {
var viewport = this.viewport(),
overwrites = this.options.responsive,
match = -1,
settings = null;
if (!overwrites) {
settings = $.extend({}, this.options);
} else {
$.each(overwrites, function(breakpoint) {
if (breakpoint <= viewport && breakpoint > match) {
match = Number(breakpoint);
}
});
settings = $.extend({}, this.options, overwrites[match]);
if (typeof settings.stagePadding === 'function') {
settings.stagePadding = settings.stagePadding();
}
delete settings.responsive;
if (settings.responsiveClass) {
this.$element.attr('class',
this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
);
}
}
this.trigger('change', { property: { name: 'settings', value: settings } });
this._breakpoint = match;
this.settings = settings;
this.invalidate('settings');
this.trigger('changed', { property: { name: 'settings', value: this.settings } });
};
Owl.prototype.optionsLogic = function() {
if (this.settings.autoWidth) {
this.settings.stagePadding = false;
this.settings.merge = false;
}
};
Owl.prototype.prepare = function(item) {
var event = this.trigger('prepare', { content: item });
if (!event.data) {
event.data = $('<' + this.settings.itemElement + '/>')
.addClass(this.options.itemClass).append(item)
}
this.trigger('prepared', { content: event.data });
return event.data;
};
Owl.prototype.update = function() {
var i = 0,
n = this._pipe.length,
filter = $.proxy(function(p) { return this[p] }, this._invalidated),
cache = {};
while (i < n) {
if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
this._pipe[i].run(cache);
}
i++;
}
this._invalidated = {};
!this.is('valid') && this.enter('valid');
};
Owl.prototype.width = function(dimension) {
dimension = dimension || Owl.Width.Default;
switch (dimension) {
case Owl.Width.Inner:
case Owl.Width.Outer:
return this._width;
default:
return this._width - this.settings.stagePadding * 2 + this.settings.margin;
}
};
Owl.prototype.refresh = function() {
this.enter('refreshing');
this.trigger('refresh');
this.setup();
this.optionsLogic();
this.$element.addClass(this.options.refreshClass);
this.update();
this.$element.removeClass(this.options.refreshClass);
this.leave('refreshing');
this.trigger('refreshed');
};
Owl.prototype.onThrottledResize = function() {
window.clearTimeout(this.resizeTimer);
this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
};
Owl.prototype.onResize = function() {
if (!this._items.length) {
return false;
}
if (this._width === this.$element.width()) {
return false;
}
if (!this.isVisible()) {
return false;
}
this.enter('resizing');
if (this.trigger('resize').isDefaultPrevented()) {
this.leave('resizing');
return false;
}
this.invalidate('width');
this.refresh();
this.leave('resizing');
this.trigger('resized');
};
Owl.prototype.registerEventHandlers = function() {
if ($.support.transition) {
this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
}
if (this.settings.responsive !== false) {
this.on(window, 'resize', this._handlers.onThrottledResize);
}
if (this.settings.mouseDrag) {
this.$element.addClass(this.options.dragClass);
this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
}
if (this.settings.touchDrag){
this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
}
};
Owl.prototype.onDragStart = function(event) {
var stage = null;
if (event.which === 3) {
return;
}
if ($.support.transform) {
stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
stage = {
x: stage[stage.length === 16 ? 12 : 4],
y: stage[stage.length === 16 ? 13 : 5]
};
} else {
stage = this.$stage.position();
stage = {
x: this.settings.rtl ?
stage.left + this.$stage.width() - this.width() + this.settings.margin :
stage.left,
y: stage.top
};
}
if (this.is('animating')) {
$.support.transform ? this.animate(stage.x) : this.$stage.stop()
this.invalidate('position');
}
this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
this.speed(0);
this._drag.time = new Date().getTime();
this._drag.target = $(event.target);
this._drag.stage.start = stage;
this._drag.stage.current = stage;
this._drag.pointer = this.pointer(event);
$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
var delta = this.difference(this._drag.pointer, this.pointer(event));
$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
return;
}
event.preventDefault();
this.enter('dragging');
this.trigger('drag');
}, this));
};
Owl.prototype.onDragMove = function(event) {
var minimum = null,
maximum = null,
pull = null,
delta = this.difference(this._drag.pointer, this.pointer(event)),
stage = this.difference(this._drag.stage.start, delta);
if (!this.is('dragging')) {
return;
}
event.preventDefault();
if (this.settings.loop) {
minimum = this.coordinates(this.minimum());
maximum = this.coordinates(this.maximum() + 1) - minimum;
stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
} else {
minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
}
this._drag.stage.current = stage;
this.animate(stage.x);
};
Owl.prototype.onDragEnd = function(event) {
var delta = this.difference(this._drag.pointer, this.pointer(event)),
stage = this._drag.stage.current,
direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
$(document).off('.owl.core');
this.$element.removeClass(this.options.grabClass);
if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
this.invalidate('position');
this.update();
this._drag.direction = direction;
if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
this._drag.target.one('click.owl.core', function() { return false; });
}
}
if (!this.is('dragging')) {
return;
}
this.leave('dragging');
this.trigger('dragged');
};
Owl.prototype.closest = function(coordinate, direction) {
var position = -1,
pull = 30,
width = this.width(),
coordinates = this.coordinates();
if (!this.settings.freeDrag) {
$.each(coordinates, $.proxy(function(index, value) {
if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
position = index;
} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
position = index + 1;
} else if (this.op(coordinate, '<', value)
&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
position = direction === 'left' ? index + 1 : index;
}
return position === -1;
}, this));
}
if (!this.settings.loop) {
if (this.op(coordinate, '>', coordinates[this.minimum()])) {
position = coordinate = this.minimum();
} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
position = coordinate = this.maximum();
}
}
return position;
};
Owl.prototype.animate = function(coordinate) {
var animate = this.speed() > 0;
this.is('animating') && this.onTransitionEnd();
if (animate) {
this.enter('animating');
this.trigger('translate');
}
if ($.support.transform3d && $.support.transition) {
this.$stage.css({
transform: 'translate3d(' + coordinate + 'px,0px,0px)',
transition: (this.speed() / 1000) + 's' + (
this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
)
});
} else if (animate) {
this.$stage.animate({
left: coordinate + 'px'
}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
} else {
this.$stage.css({
left: coordinate + 'px'
});
}
};
Owl.prototype.is = function(state) {
return this._states.current[state] && this._states.current[state] > 0;
};
Owl.prototype.current = function(position) {
if (position === undefined) {
return this._current;
}
if (this._items.length === 0) {
return undefined;
}
position = this.normalize(position);
if (this._current !== position) {
var event = this.trigger('change', { property: { name: 'position', value: position } });
if (event.data !== undefined) {
position = this.normalize(event.data);
}
this._current = position;
this.invalidate('position');
this.trigger('changed', { property: { name: 'position', value: this._current } });
}
return this._current;
};
Owl.prototype.invalidate = function(part) {
if ($.type(part) === 'string') {
this._invalidated[part] = true;
this.is('valid') && this.leave('valid');
}
return $.map(this._invalidated, function(v, i) { return i });
};
Owl.prototype.reset = function(position) {
position = this.normalize(position);
if (position === undefined) {
return;
}
this._speed = 0;
this._current = position;
this.suppress([ 'translate', 'translated' ]);
this.animate(this.coordinates(position));
this.release([ 'translate', 'translated' ]);
};
Owl.prototype.normalize = function(position, relative) {
var n = this._items.length,
m = relative ? 0 : this._clones.length;
if (!this.isNumeric(position) || n < 1) {
position = undefined;
} else if (position < 0 || position >= n + m) {
position = ((position - m / 2) % n + n) % n + m / 2;
}
return position;
};
Owl.prototype.relative = function(position) {
position -= this._clones.length / 2;
return this.normalize(position, true);
};
Owl.prototype.maximum = function(relative) {
var settings = this.settings,
maximum = this._coordinates.length,
iterator,
reciprocalItemsWidth,
elementWidth;
if (settings.loop) {
maximum = this._clones.length / 2 + this._items.length - 1;
} else if (settings.autoWidth || settings.merge) {
iterator = this._items.length;
if (iterator) {
reciprocalItemsWidth = this._items[--iterator].width();
elementWidth = this.$element.width();
while (iterator--) {
reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
if (reciprocalItemsWidth > elementWidth) {
break;
}
}
}
maximum = iterator + 1;
} else if (settings.center) {
maximum = this._items.length - 1;
} else {
maximum = this._items.length - settings.items;
}
if (relative) {
maximum -= this._clones.length / 2;
}
return Math.max(maximum, 0);
};
Owl.prototype.minimum = function(relative) {
return relative ? 0 : this._clones.length / 2;
};
Owl.prototype.items = function(position) {
if (position === undefined) {
return this._items.slice();
}
position = this.normalize(position, true);
return this._items[position];
};
Owl.prototype.mergers = function(position) {
if (position === undefined) {
return this._mergers.slice();
}
position = this.normalize(position, true);
return this._mergers[position];
};
Owl.prototype.clones = function(position) {
var odd = this._clones.length / 2,
even = odd + this._items.length,
map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
if (position === undefined) {
return $.map(this._clones, function(v, i) { return map(i) });
}
return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
};
Owl.prototype.speed = function(speed) {
if (speed !== undefined) {
this._speed = speed;
}
return this._speed;
};
Owl.prototype.coordinates = function(position) {
var multiplier = 1,
newPosition = position - 1,
coordinate;
if (position === undefined) {
return $.map(this._coordinates, $.proxy(function(coordinate, index) {
return this.coordinates(index);
}, this));
}
if (this.settings.center) {
if (this.settings.rtl) {
multiplier = -1;
newPosition = position + 1;
}
coordinate = this._coordinates[position];
coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
} else {
coordinate = this._coordinates[newPosition] || 0;
}
coordinate = Math.ceil(coordinate);
return coordinate;
};
Owl.prototype.duration = function(from, to, factor) {
if (factor === 0) {
return 0;
}
return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
};
Owl.prototype.to = function(position, speed) {
var current = this.current(),
revert = null,
distance = position - this.relative(current),
direction = (distance > 0) - (distance < 0),
items = this._items.length,
minimum = this.minimum(),
maximum = this.maximum();
if (this.settings.loop) {
if (!this.settings.rewind && Math.abs(distance) > items / 2) {
distance += direction * -1 * items;
}
position = current + distance;
revert = ((position - minimum) % items + items) % items + minimum;
if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
current = revert - distance;
position = revert;
this.reset(current);
}
} else if (this.settings.rewind) {
maximum += 1;
position = (position % maximum + maximum) % maximum;
} else {
position = Math.max(minimum, Math.min(maximum, position));
}
this.speed(this.duration(current, position, speed));
this.current(position);
if (this.isVisible()) {
this.update();
}
};
Owl.prototype.next = function(speed) {
speed = speed || false;
this.to(this.relative(this.current()) + 1, speed);
};
Owl.prototype.prev = function(speed) {
speed = speed || false;
this.to(this.relative(this.current()) - 1, speed);
};
Owl.prototype.onTransitionEnd = function(event) {
if (event !== undefined) {
event.stopPropagation();
if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
return false;
}
}
this.leave('animating');
this.trigger('translated');
};
Owl.prototype.viewport = function() {
var width;
if (this.options.responsiveBaseElement !== window) {
width = $(this.options.responsiveBaseElement).width();
} else if (window.innerWidth) {
width = window.innerWidth;
} else if (document.documentElement && document.documentElement.clientWidth) {
width = document.documentElement.clientWidth;
} else {
console.warn('Can not detect viewport width.');
}
return width;
};
Owl.prototype.replace = function(content) {
this.$stage.empty();
this._items = [];
if (content) {
content = (content instanceof jQuery) ? content : $(content);
}
if (this.settings.nestedItemSelector) {
content = content.find('.' + this.settings.nestedItemSelector);
}
content.filter(function() {
return this.nodeType === 1;
}).each($.proxy(function(index, item) {
item = this.prepare(item);
this.$stage.append(item);
this._items.push(item);
this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
}, this));
this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
this.invalidate('items');
};
Owl.prototype.add = function(content, position) {
var current = this.relative(this._current);
position = position === undefined ? this._items.length : this.normalize(position, true);
content = content instanceof jQuery ? content : $(content);
this.trigger('add', { content: content, position: position });
content = this.prepare(content);
if (this._items.length === 0 || position === this._items.length) {
this._items.length === 0 && this.$stage.append(content);
this._items.length !== 0 && this._items[position - 1].after(content);
this._items.push(content);
this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
} else {
this._items[position].before(content);
this._items.splice(position, 0, content);
this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
}
this._items[current] && this.reset(this._items[current].index());
this.invalidate('items');
this.trigger('added', { content: content, position: position });
};
Owl.prototype.remove = function(position) {
position = this.normalize(position, true);
if (position === undefined) {
return;
}
this.trigger('remove', { content: this._items[position], position: position });
this._items[position].remove();
this._items.splice(position, 1);
this._mergers.splice(position, 1);
this.invalidate('items');
this.trigger('removed', { content: null, position: position });
};
Owl.prototype.preloadAutoWidthImages = function(images) {
images.each($.proxy(function(i, element) {
this.enter('pre-loading');
element = $(element);
$(new Image()).one('load', $.proxy(function(e) {
element.attr('src', e.target.src);
element.css('opacity', 1);
this.leave('pre-loading');
!this.is('pre-loading') && !this.is('initializing') && this.refresh();
}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
}, this));
};
Owl.prototype.destroy = function() {
this.$element.off('.owl.core');
this.$stage.off('.owl.core');
$(document).off('.owl.core');
if (this.settings.responsive !== false) {
window.clearTimeout(this.resizeTimer);
this.off(window, 'resize', this._handlers.onThrottledResize);
}
for (var i in this._plugins) {
this._plugins[i].destroy();
}
this.$stage.children('.cloned').remove();
this.$stage.unwrap();
this.$stage.children().contents().unwrap();
this.$stage.children().unwrap();
this.$stage.remove();
this.$element
.removeClass(this.options.refreshClass)
.removeClass(this.options.loadingClass)
.removeClass(this.options.loadedClass)
.removeClass(this.options.rtlClass)
.removeClass(this.options.dragClass)
.removeClass(this.options.grabClass)
.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
.removeData('owl.carousel');
};
Owl.prototype.op = function(a, o, b) {
var rtl = this.settings.rtl;
switch (o) {
case '<':
return rtl ? a > b : a < b;
case '>':
return rtl ? a < b : a > b;
case '>=':
return rtl ? a <= b : a >= b;
case '<=':
return rtl ? a >= b : a <= b;
default:
break;
}
};
Owl.prototype.on = function(element, event, listener, capture) {
if (element.addEventListener) {
element.addEventListener(event, listener, capture);
} else if (element.attachEvent) {
element.attachEvent('on' + event, listener);
}
};
Owl.prototype.off = function(element, event, listener, capture) {
if (element.removeEventListener) {
element.removeEventListener(event, listener, capture);
} else if (element.detachEvent) {
element.detachEvent('on' + event, listener);
}
};
Owl.prototype.trigger = function(name, data, namespace, state, enter) {
var status = {
item: { count: this._items.length, index: this.current() }
}, handler = $.camelCase(
$.grep([ 'on', name, namespace ], function(v) { return v })
.join('-').toLowerCase()
), event = $.Event(
[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
$.extend({ relatedTarget: this }, status, data)
);
if (!this._supress[name]) {
$.each(this._plugins, function(name, plugin) {
if (plugin.onTrigger) {
plugin.onTrigger(event);
}
});
this.register({ type: Owl.Type.Event, name: name });
this.$element.trigger(event);
if (this.settings && typeof this.settings[handler] === 'function') {
this.settings[handler].call(this, event);
}
}
return event;
};
Owl.prototype.enter = function(name) {
$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
if (this._states.current[name] === undefined) {
this._states.current[name] = 0;
}
this._states.current[name]++;
}, this));
};
Owl.prototype.leave = function(name) {
$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
this._states.current[name]--;
}, this));
};
Owl.prototype.register = function(object) {
if (object.type === Owl.Type.Event) {
if (!$.event.special[object.name]) {
$.event.special[object.name] = {};
}
if (!$.event.special[object.name].owl) {
var _default = $.event.special[object.name]._default;
$.event.special[object.name]._default = function(e) {
if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
return _default.apply(this, arguments);
}
return e.namespace && e.namespace.indexOf('owl') > -1;
};
$.event.special[object.name].owl = true;
}
} else if (object.type === Owl.Type.State) {
if (!this._states.tags[object.name]) {
this._states.tags[object.name] = object.tags;
} else {
this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
}
this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
return $.inArray(tag, this._states.tags[object.name]) === i;
}, this));
}
};
Owl.prototype.suppress = function(events) {
$.each(events, $.proxy(function(index, event) {
this._supress[event] = true;
}, this));
};
Owl.prototype.release = function(events) {
$.each(events, $.proxy(function(index, event) {
delete this._supress[event];
}, this));
};
Owl.prototype.pointer = function(event) {
var result = { x: null, y: null };
event = event.originalEvent || event || window.event;
event = event.touches && event.touches.length ?
event.touches[0] : event.changedTouches && event.changedTouches.length ?
event.changedTouches[0] : event;
if (event.pageX) {
result.x = event.pageX;
result.y = event.pageY;
} else {
result.x = event.clientX;
result.y = event.clientY;
}
return result;
};
Owl.prototype.isNumeric = function(number) {
return !isNaN(parseFloat(number));
};
Owl.prototype.difference = function(first, second) {
return {
x: first.x - second.x,
y: first.y - second.y
};
};
$.fn.owlCarousel = function(option) {
var args = Array.prototype.slice.call(arguments, 1);
return this.each(function() {
var $this = $(this),
data = $this.data('owl.carousel');
if (!data) {
data = new Owl(this, typeof option == 'object' && option);
$this.data('owl.carousel', data);
$.each([
'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
], function(i, event) {
data.register({ type: Owl.Type.Event, name: event });
data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
if (e.namespace && e.relatedTarget !== this) {
this.suppress([ event ]);
data[event].apply(this, [].slice.call(arguments, 1));
this.release([ event ]);
}
}, data));
});
}
if (typeof option == 'string' && option.charAt(0) !== '_') {
data[option].apply(data, args);
}
});
};
$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var AutoRefresh = function(carousel) {
this._core = carousel;
this._interval = null;
this._visible = null;
this._handlers = {
'initialized.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.autoRefresh) {
this.watch();
}
}, this)
};
this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
this._core.$element.on(this._handlers);
};
AutoRefresh.Defaults = {
autoRefresh: true,
autoRefreshInterval: 500
};
AutoRefresh.prototype.watch = function() {
if (this._interval) {
return;
}
this._visible = this._core.isVisible();
this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
};
AutoRefresh.prototype.refresh = function() {
if (this._core.isVisible() === this._visible) {
return;
}
this._visible = !this._visible;
this._core.$element.toggleClass('owl-hidden', !this._visible);
this._visible && (this._core.invalidate('width') && this._core.refresh());
};
AutoRefresh.prototype.destroy = function() {
var handler, property;
window.clearInterval(this._interval);
for (handler in this._handlers) {
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var Lazy = function(carousel) {
this._core = carousel;
this._loaded = [];
this._handlers = {
'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
if (!e.namespace) {
return;
}
if (!this._core.settings || !this._core.settings.lazyLoad) {
return;
}
if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
var settings = this._core.settings,
n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
i = ((settings.center && n * -1) || 0),
position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
clones = this._core.clones().length,
load = $.proxy(function(i, v) { this.load(v) }, this);
if (settings.lazyLoadEager > 0) {
n += settings.lazyLoadEager;
if (settings.loop) {
position -= settings.lazyLoadEager;
n++;
}
}
while (i++ < n) {
this.load(clones / 2 + this._core.relative(position));
clones && $.each(this._core.clones(this._core.relative(position)), load);
position++;
}
}
}, this)
};
this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
this._core.$element.on(this._handlers);
};
Lazy.Defaults = {
lazyLoad: false,
lazyLoadEager: 0
};
Lazy.prototype.load = function(position) {
var $item = this._core.$stage.children().eq(position),
$elements = $item && $item.find('.owl-lazy');
if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
return;
}
$elements.each($.proxy(function(index, element) {
var $element = $(element), image,
url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');
this._core.trigger('load', { element: $element, url: url }, 'lazy');
if ($element.is('img')) {
$element.one('load.owl.lazy', $.proxy(function() {
$element.css('opacity', 1);
this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
}, this)).attr('src', url);
} else if ($element.is('source')) {
$element.one('load.owl.lazy', $.proxy(function() {
this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
}, this)).attr('srcset', url);
} else {
image = new Image();
image.onload = $.proxy(function() {
$element.css({
'background-image': 'url("' + url + '")',
'opacity': '1'
});
this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
}, this);
image.src = url;
}
}, this));
this._loaded.push($item.get(0));
};
Lazy.prototype.destroy = function() {
var handler, property;
for (handler in this.handlers) {
this._core.$element.off(handler, this.handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var AutoHeight = function(carousel) {
this._core = carousel;
this._previousHeight = null;
this._handlers = {
'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.autoHeight) {
this.update();
}
}, this),
'changed.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
this.update();
}
}, this),
'loaded.owl.lazy': $.proxy(function(e) {
if (e.namespace && this._core.settings.autoHeight
&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
this.update();
}
}, this)
};
this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
this._core.$element.on(this._handlers);
this._intervalId = null;
var refThis = this;
$(window).on('load', function() {
if (refThis._core.settings.autoHeight) {
refThis.update();
}
});
$(window).resize(function() {
if (refThis._core.settings.autoHeight) {
if (refThis._intervalId != null) {
clearTimeout(refThis._intervalId);
}
refThis._intervalId = setTimeout(function() {
refThis.update();
}, 250);
}
});
};
AutoHeight.Defaults = {
autoHeight: false,
autoHeightClass: 'owl-height'
};
AutoHeight.prototype.update = function() {
var start = this._core._current,
end = start + this._core.settings.items,
lazyLoadEnabled = this._core.settings.lazyLoad,
visible = this._core.$stage.children().toArray().slice(start, end),
heights = [],
maxheight = 0;
$.each(visible, function(index, item) {
heights.push($(item).height());
});
maxheight = Math.max.apply(null, heights);
if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
maxheight = this._previousHeight;
}
this._previousHeight = maxheight;
this._core.$stage.parent()
.height(maxheight)
.addClass(this._core.settings.autoHeightClass);
};
AutoHeight.prototype.destroy = function() {
var handler, property;
for (handler in this._handlers) {
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] !== 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var Video = function(carousel) {
this._core = carousel;
this._videos = {};
this._playing = null;
this._handlers = {
'initialized.owl.carousel': $.proxy(function(e) {
if (e.namespace) {
this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
}
}, this),
'resize.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
e.preventDefault();
}
}, this),
'refreshed.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.is('resizing')) {
this._core.$stage.find('.cloned .owl-video-frame').remove();
}
}, this),
'changed.owl.carousel': $.proxy(function(e) {
if (e.namespace && e.property.name === 'position' && this._playing) {
this.stop();
}
}, this),
'prepared.owl.carousel': $.proxy(function(e) {
if (!e.namespace) {
return;
}
var $element = $(e.content).find('.owl-video');
if ($element.length) {
$element.css('display', 'none');
this.fetch($element, $(e.content));
}
}, this)
};
this._core.options = $.extend({}, Video.Defaults, this._core.options);
this._core.$element.on(this._handlers);
this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
this.play(e);
}, this));
};
Video.Defaults = {
video: false,
videoHeight: false,
videoWidth: false
};
Video.prototype.fetch = function(target, item) {
var type = (function() {
if (target.attr('data-vimeo-id')) {
return 'vimeo';
} else if (target.attr('data-vzaar-id')) {
return 'vzaar'
} else {
return 'youtube';
}
})(),
id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
width = target.attr('data-width') || this._core.settings.videoWidth,
height = target.attr('data-height') || this._core.settings.videoHeight,
url = target.attr('href');
if (url) {
id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
if (id[3].indexOf('youtu') > -1) {
type = 'youtube';
} else if (id[3].indexOf('vimeo') > -1) {
type = 'vimeo';
} else if (id[3].indexOf('vzaar') > -1) {
type = 'vzaar';
} else {
throw new Error('Video URL not supported.');
}
id = id[6];
} else {
throw new Error('Missing video URL.');
}
this._videos[url] = {
type: type,
id: id,
width: width,
height: height
};
item.attr('data-video', url);
this.thumbnail(target, this._videos[url]);
};
Video.prototype.thumbnail = function(target, video) {
var tnLink,
icon,
path,
dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
customTn = target.find('img'),
srcType = 'src',
lazyClass = '',
settings = this._core.settings,
create = function(path) {
icon = '<div class="owl-video-play-icon"></div>';
if (settings.lazyLoad) {
tnLink = $('<div/>',{
"class": 'owl-video-tn ' + lazyClass,
"srcType": path
});
} else {
tnLink = $( '<div/>', {
"class": "owl-video-tn",
"style": 'opacity:1;background-image:url(' + path + ')'
});
}
target.after(tnLink);
target.after(icon);
};
target.wrap( $( '<div/>', {
"class": "owl-video-wrapper",
"style": dimensions
}));
if (this._core.settings.lazyLoad) {
srcType = 'data-src';
lazyClass = 'owl-lazy';
}
if (customTn.length) {
create(customTn.attr(srcType));
customTn.remove();
return false;
}
if (video.type === 'youtube') {
path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
create(path);
} else if (video.type === 'vimeo') {
$.ajax({
type: 'GET',
url: '//vimeo.com/api/v2/video/' + video.id + '.json',
jsonp: 'callback',
dataType: 'jsonp',
success: function(data) {
path = data[0].thumbnail_large;
create(path);
}
});
} else if (video.type === 'vzaar') {
$.ajax({
type: 'GET',
url: '//vzaar.com/api/videos/' + video.id + '.json',
jsonp: 'callback',
dataType: 'jsonp',
success: function(data) {
path = data.framegrab_url;
create(path);
}
});
}
};
Video.prototype.stop = function() {
this._core.trigger('stop', null, 'video');
this._playing.find('.owl-video-frame').remove();
this._playing.removeClass('owl-video-playing');
this._playing = null;
this._core.leave('playing');
this._core.trigger('stopped', null, 'video');
};
Video.prototype.play = function(event) {
var target = $(event.target),
item = target.closest('.' + this._core.settings.itemClass),
video = this._videos[item.attr('data-video')],
width = video.width || '100%',
height = video.height || this._core.$stage.height(),
html,
iframe;
if (this._playing) {
return;
}
this._core.enter('playing');
this._core.trigger('play', null, 'video');
item = this._core.items(this._core.relative(item.index()));
this._core.reset(item.index());
html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
html.attr( 'height', height );
html.attr( 'width', width );
if (video.type === 'youtube') {
html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
} else if (video.type === 'vimeo') {
html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
} else if (video.type === 'vzaar') {
html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
}
iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));
this._playing = item.addClass('owl-video-playing');
};
Video.prototype.isInFullScreen = function() {
var element = document.fullscreenElement || document.mozFullScreenElement ||
document.webkitFullscreenElement;
return element && $(element).parent().hasClass('owl-video-frame');
};
Video.prototype.destroy = function() {
var handler, property;
this._core.$element.off('click.owl.video');
for (handler in this._handlers) {
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var Animate = function(scope) {
this.core = scope;
this.core.options = $.extend({}, Animate.Defaults, this.core.options);
this.swapping = true;
this.previous = undefined;
this.next = undefined;
this.handlers = {
'change.owl.carousel': $.proxy(function(e) {
if (e.namespace && e.property.name == 'position') {
this.previous = this.core.current();
this.next = e.property.value;
}
}, this),
'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
if (e.namespace) {
this.swapping = e.type == 'translated';
}
}, this),
'translate.owl.carousel': $.proxy(function(e) {
if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
this.swap();
}
}, this)
};
this.core.$element.on(this.handlers);
};
Animate.Defaults = {
animateOut: false,
animateIn: false
};
Animate.prototype.swap = function() {
if (this.core.settings.items !== 1) {
return;
}
if (!$.support.animation || !$.support.transition) {
return;
}
this.core.speed(0);
var left,
clear = $.proxy(this.clear, this),
previous = this.core.$stage.children().eq(this.previous),
next = this.core.$stage.children().eq(this.next),
incoming = this.core.settings.animateIn,
outgoing = this.core.settings.animateOut;
if (this.core.current() === this.previous) {
return;
}
if (outgoing) {
left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
previous.one($.support.animation.end, clear)
.css( { 'left': left + 'px' } )
.addClass('animated owl-animated-out')
.addClass(outgoing);
}
if (incoming) {
next.one($.support.animation.end, clear)
.addClass('animated owl-animated-in')
.addClass(incoming);
}
};
Animate.prototype.clear = function(e) {
$(e.target).css( { 'left': '' } )
.removeClass('animated owl-animated-out owl-animated-in')
.removeClass(this.core.settings.animateIn)
.removeClass(this.core.settings.animateOut);
this.core.onTransitionEnd();
};
Animate.prototype.destroy = function() {
var handler, property;
for (handler in this.handlers) {
this.core.$element.off(handler, this.handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var Autoplay = function(carousel) {
this._core = carousel;
this._call = null;
this._time = 0;
this._timeout = 0;
this._paused = true;
this._handlers = {
'changed.owl.carousel': $.proxy(function(e) {
if (e.namespace && e.property.name === 'settings') {
if (this._core.settings.autoplay) {
this.play();
} else {
this.stop();
}
} else if (e.namespace && e.property.name === 'position' && this._paused) {
this._time = 0;
}
}, this),
'initialized.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.autoplay) {
this.play();
}
}, this),
'play.owl.autoplay': $.proxy(function(e, t, s) {
if (e.namespace) {
this.play(t, s);
}
}, this),
'stop.owl.autoplay': $.proxy(function(e) {
if (e.namespace) {
this.stop();
}
}, this),
'mouseover.owl.autoplay': $.proxy(function() {
if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
this.pause();
}
}, this),
'mouseleave.owl.autoplay': $.proxy(function() {
if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
this.play();
}
}, this),
'touchstart.owl.core': $.proxy(function() {
if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
this.pause();
}
}, this),
'touchend.owl.core': $.proxy(function() {
if (this._core.settings.autoplayHoverPause) {
this.play();
}
}, this)
};
this._core.$element.on(this._handlers);
this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
};
Autoplay.Defaults = {
autoplay: false,
autoplayTimeout: 5000,
autoplayHoverPause: false,
autoplaySpeed: false
};
Autoplay.prototype._next = function(speed) {
this._call = window.setTimeout(
$.proxy(this._next, this, speed),
this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
);
if (this._core.is('interacting') || document.hidden) {
return;
}
this._core.next(speed || this._core.settings.autoplaySpeed);
}
Autoplay.prototype.read = function() {
return new Date().getTime() - this._time;
};
Autoplay.prototype.play = function(timeout, speed) {
var elapsed;
if (!this._core.is('rotating')) {
this._core.enter('rotating');
}
timeout = timeout || this._core.settings.autoplayTimeout;
elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
if (this._paused) {
this._time = this.read();
this._paused = false;
} else {
window.clearTimeout(this._call);
}
this._time += this.read() % timeout - elapsed;
this._timeout = timeout;
this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
};
Autoplay.prototype.stop = function() {
if (this._core.is('rotating')) {
this._time = 0;
this._paused = true;
window.clearTimeout(this._call);
this._core.leave('rotating');
}
};
Autoplay.prototype.pause = function() {
if (this._core.is('rotating') && !this._paused) {
this._time = this.read();
this._paused = true;
window.clearTimeout(this._call);
}
};
Autoplay.prototype.destroy = function() {
var handler, property;
this.stop();
for (handler in this._handlers) {
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
'use strict';
var Navigation = function(carousel) {
this._core = carousel;
this._initialized = false;
this._pages = [];
this._controls = {};
this._templates = [];
this.$element = this._core.$element;
this._overrides = {
next: this._core.next,
prev: this._core.prev,
to: this._core.to
};
this._handlers = {
'prepared.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.dotsData) {
this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
}
}, this),
'added.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.dotsData) {
this._templates.splice(e.position, 0, this._templates.pop());
}
}, this),
'remove.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.dotsData) {
this._templates.splice(e.position, 1);
}
}, this),
'changed.owl.carousel': $.proxy(function(e) {
if (e.namespace && e.property.name == 'position') {
this.draw();
}
}, this),
'initialized.owl.carousel': $.proxy(function(e) {
if (e.namespace && !this._initialized) {
this._core.trigger('initialize', null, 'navigation');
this.initialize();
this.update();
this.draw();
this._initialized = true;
this._core.trigger('initialized', null, 'navigation');
}
}, this),
'refreshed.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._initialized) {
this._core.trigger('refresh', null, 'navigation');
this.update();
this.draw();
this._core.trigger('refreshed', null, 'navigation');
}
}, this)
};
this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
this.$element.on(this._handlers);
};
Navigation.Defaults = {
nav: false,
navText: [
'<span aria-label="' + 'Previous' + '" class="carouselPre">&#x2039;</span>',
'<span aria-label="' + 'Next' + '" class="carouselNext">&#x203a;</span>'
],
navSpeed: false,
navElement: 'button type="button" role="presentation"',
navContainer: false,
navContainerClass: 'owl-nav',
navClass: [
'owl-prev',
'owl-next'
],
slideBy: 1,
dotClass: 'owl-dot',
dotsClass: 'owl-dots',
dots: true,
dotsEach: false,
dotsData: false,
dotsSpeed: false,
dotsContainer: false
};
Navigation.prototype.initialize = function() {
var override,
settings = this._core.settings;
this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
this._controls.$previous = $('<' + settings.navElement + '>')
.addClass(settings.navClass[0])
.html(settings.navText[0])
.prependTo(this._controls.$relative)
.on('click', $.proxy(function(e) {
this.prev(settings.navSpeed);
}, this));
this._controls.$next = $('<' + settings.navElement + '>')
.addClass(settings.navClass[1])
.html(settings.navText[1])
.appendTo(this._controls.$relative)
.on('click', $.proxy(function(e) {
this.next(settings.navSpeed);
}, this));
if (!settings.dotsData) {
this._templates = [ $('<button role="button">')
.addClass(settings.dotClass)
.append($('<span>'))
.prop('outerHTML') ];
}
this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
var index = $(e.target).parent().is(this._controls.$absolute)
? $(e.target).index() : $(e.target).parent().index();
e.preventDefault();
this.to(index, settings.dotsSpeed);
}, this));
for (override in this._overrides) {
this._core[override] = $.proxy(this[override], this);
}
};
Navigation.prototype.destroy = function() {
var handler, control, property, override, settings;
settings = this._core.settings;
for (handler in this._handlers) {
this.$element.off(handler, this._handlers[handler]);
}
for (control in this._controls) {
if (control === '$relative' && settings.navContainer) {
this._controls[control].html('');
} else {
this._controls[control].remove();
}
}
for (override in this.overides) {
this._core[override] = this._overrides[override];
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
Navigation.prototype.update = function() {
var i, j, k,
lower = this._core.clones().length / 2,
upper = lower + this._core.items().length,
maximum = this._core.maximum(true),
settings = this._core.settings,
size = settings.center || settings.autoWidth || settings.dotsData
? 1 : settings.dotsEach || settings.items;
if (settings.slideBy !== 'page') {
settings.slideBy = Math.min(settings.slideBy, settings.items);
}
if (settings.dots || settings.slideBy == 'page') {
this._pages = [];
for (i = lower, j = 0, k = 0; i < upper; i++) {
if (j >= size || j === 0) {
this._pages.push({
start: Math.min(maximum, i - lower),
end: i - lower + size - 1
});
if (Math.min(maximum, i - lower) === maximum) {
break;
}
j = 0, ++k;
}
j += this._core.mergers(this._core.relative(i));
}
}
};
Navigation.prototype.draw = function() {
var difference,
settings = this._core.settings,
disabled = this._core.items().length <= settings.items,
index = this._core.relative(this._core.current()),
loop = settings.loop || settings.rewind;
this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
if (settings.nav) {
this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
}
this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
if (settings.dots) {
difference = this._pages.length - this._controls.$absolute.children().length;
if (settings.dotsData && difference !== 0) {
this._controls.$absolute.html(this._templates.join(''));
} else if (difference > 0) {
this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
} else if (difference < 0) {
this._controls.$absolute.children().slice(difference).remove();
}
this._controls.$absolute.find('.active').removeClass('active');
this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
}
};
Navigation.prototype.onTrigger = function(event) {
var settings = this._core.settings;
event.page = {
index: $.inArray(this.current(), this._pages),
count: this._pages.length,
size: settings && (settings.center || settings.autoWidth || settings.dotsData
? 1 : settings.dotsEach || settings.items)
};
};
Navigation.prototype.current = function() {
var current = this._core.relative(this._core.current());
return $.grep(this._pages, $.proxy(function(page, index) {
return page.start <= current && page.end >= current;
}, this)).pop();
};
Navigation.prototype.getPosition = function(successor) {
var position, length,
settings = this._core.settings;
if (settings.slideBy == 'page') {
position = $.inArray(this.current(), this._pages);
length = this._pages.length;
successor ? ++position : --position;
position = this._pages[((position % length) + length) % length].start;
} else {
position = this._core.relative(this._core.current());
length = this._core.items().length;
successor ? position += settings.slideBy : position -= settings.slideBy;
}
return position;
};
Navigation.prototype.next = function(speed) {
$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
};
Navigation.prototype.prev = function(speed) {
$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
};
Navigation.prototype.to = function(position, speed, standard) {
var length;
if (!standard && this._pages.length) {
length = this._pages.length;
$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
} else {
$.proxy(this._overrides.to, this._core)(position, speed);
}
};
$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
'use strict';
var Hash = function(carousel) {
this._core = carousel;
this._hashes = {};
this.$element = this._core.$element;
this._handlers = {
'initialized.owl.carousel': $.proxy(function(e) {
if (e.namespace && this._core.settings.startPosition === 'URLHash') {
$(window).trigger('hashchange.owl.navigation');
}
}, this),
'prepared.owl.carousel': $.proxy(function(e) {
if (e.namespace) {
var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
if (!hash) {
return;
}
this._hashes[hash] = e.content;
}
}, this),
'changed.owl.carousel': $.proxy(function(e) {
if (e.namespace && e.property.name === 'position') {
var current = this._core.items(this._core.relative(this._core.current())),
hash = $.map(this._hashes, function(item, hash) {
return item === current ? hash : null;
}).join();
if (!hash || window.location.hash.slice(1) === hash) {
return;
}
window.location.hash = hash;
}
}, this)
};
this._core.options = $.extend({}, Hash.Defaults, this._core.options);
this.$element.on(this._handlers);
$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
var hash = window.location.hash.substring(1),
items = this._core.$stage.children(),
position = this._hashes[hash] && items.index(this._hashes[hash]);
if (position === undefined || position === this._core.current()) {
return;
}
this._core.to(this._core.relative(position), false, true);
}, this));
};
Hash.Defaults = {
URLhashListener: false
};
Hash.prototype.destroy = function() {
var handler, property;
$(window).off('hashchange.owl.navigation');
for (handler in this._handlers) {
this._core.$element.off(handler, this._handlers[handler]);
}
for (property in Object.getOwnPropertyNames(this)) {
typeof this[property] != 'function' && (this[property] = null);
}
};
$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);
;(function($, window, document, undefined) {
var style = $('<support>').get(0).style,
prefixes = 'Webkit Moz O ms'.split(' '),
events = {
transition: {
end: {
WebkitTransition: 'webkitTransitionEnd',
MozTransition: 'transitionend',
OTransition: 'oTransitionEnd',
transition: 'transitionend'
}
},
animation: {
end: {
WebkitAnimation: 'webkitAnimationEnd',
MozAnimation: 'animationend',
OAnimation: 'oAnimationEnd',
animation: 'animationend'
}
}
},
tests = {
csstransforms: function() {
return !!test('transform');
},
csstransforms3d: function() {
return !!test('perspective');
},
csstransitions: function() {
return !!test('transition');
},
cssanimations: function() {
return !!test('animation');
}
};
function test(property, prefixed) {
var result = false,
upper = property.charAt(0).toUpperCase() + property.slice(1);
$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
if (style[property] !== undefined) {
result = prefixed ? property : true;
return false;
}
});
return result;
}
function prefixed(property) {
return test(property, true);
}
if (tests.csstransitions()) {
$.support.transition = new String(prefixed('transition'))
$.support.transition.end = events.transition.end[ $.support.transition ];
}
if (tests.cssanimations()) {
$.support.animation = new String(prefixed('animation'))
$.support.animation.end = events.animation.end[ $.support.animation ];
}
if (tests.csstransforms()) {
$.support.transform = new String(prefixed('transform'));
$.support.transform3d = tests.csstransforms3d();
}
})(window.Zepto || window.jQuery, window, document);
function dealHln(p_ishome,p_op,p_topobj) {
var itemId,item;
if(p_ishome) {
setHlnStat(_InternalHln,p_topobj);
}
if(!p_ishome) {
setHlnStat(_HomeHln,p_topobj);
}
if(p_op=="logout") {
setHlnStat(_LoginHln,p_topobj);
}
if(p_op=="login") {
setHlnStat(_LogoutHln,p_topobj);
}
}
function setHlnStat(p_hash,p_topobj){
var itemId,item;
while(!p_hash.isEOF()){
itemId = p_hash.read()
item = $(p_topobj).find("#"+itemId);
item.remove();
}
p_hash.resetPointer();
}
function setRecentCookie(name,val,separator,path,duration,cnt){
var str = divOs.Cookie.getCookie(name);
if(str!=undefined){
var val_arr = new Array();
var val_tmp = new Array();
val_arr = str.split(separator);
val_tmp[0] = val;
for(var i=0,j=1;i<val_arr.length;i++){
if(cnt && j==cnt) continue;
if(val_arr[i]==val) continue;
val_tmp[j] = val_arr[i];
j++;
}
str = val_tmp.join(separator);
divOs.Cookie.setCookie(name,str,duration,path);
}
else{
divOs.Cookie.setCookie(name,val,duration,path);
}
}
function dealRefresh(imgId,codeId,img,code) {
document.getElementById(imgId).src=img;
document.getElementById(codeId).value=code;
}
function refreshAuthCode(p_editor,p_program,p_imgid,p_codeid,p_obj) {
if(p_editor){
var oldUri = p_editor.sajaxUri
p_editor.setUri(p_program);
p_editor.sajaxSubmit('Op=refresh&TagId='+p_editor.TagName+'&imgid='+p_imgid+'&codeid='+p_codeid,'','AjaxEdit.prototype.callBack ')
p_editor.setUri(oldUri);
}else{
var url = $.trim(p_program) ? $.trim(p_program) : window.location.protocol+'//'+window.location.host+'/app/showauthimg.php';
$.post(url,'Op=refresh&codeType=new',function(data){
if(data.stat == 'success'){
if(typeof p_obj == 'object'){
var closePar  = $(p_obj).closest('.captcha_img');
if(closePar.length){
closePar.find('#'+p_imgid).attr('src',data.img);
closePar.find('#'+p_codeid).val(data.code);
}else{
$('#'+p_imgid).attr('src',data.img);
$('#'+p_codeid).val(data.code);
}
}else{
$('#'+p_imgid).attr('src',data.img);
$('#'+p_codeid).val(data.code);
}
}
},"json");
}
}
function showCmField(p_field,p_default) {
var val = new strUtil(divOs.Cookie.getCookie(p_field));
if(trim(val.String)!="") return val.String;
else return p_default;
}
function checkLogin(p_cookiename) {
if(divOs.Cookie.existCookie(p_cookiename)) return true;
return false;
}
function privModuleLoginSuccess() {
divOs.closeAllPopWindow();
}
function logoutSuccess() {
window.location.href=window.location.href;
}
function loginSuccess() {
dealHln('','login') ;
onActionTrigger(1);
}
function reload(p_div,p_moname,p_moid,p_type,p_nbr,p_front,p_loading,p_blankimg,p_param,p_special) {
var el = document.getElementById(p_div);
var dynamicLoad =  "<div class=\"module-loading\"><div class=\"md_top\"><div class=\"mt_03\"><div class=\"mt_02\"><div class=\"mt_01\"><h3>"+p_moname+"</h3></div></div></div></div><div class=\"md_middle\"><div class=\"mm_03\"><div class=\"mm_02\"><div class=\"mm_01\">"+p_loading+"</div></div></div></div><div class=\"md_bottom\"><div class=\"mb_03\"><div class=\"mb_02\"><div class=\"mb_01\"></div></div></div></div></div></div>\n";
var special="";
if(p_special=="1") {
var special="&Special=1";
}
if(p_param){
var param = '&Param='+p_param;
}
dynamicLoad+=  "<img src=\""+p_blankimg+"\" border=\"0\" onload=\"divOs.openSajaxUrl('"+p_div+"','"+p_front+"/showmodule.php?Mo="+p_moid+"&Type="+p_type+"&OO=1&Nbr="+p_nbr+param+special+"');\"/>\n";
divOs.setInnerHTML(el,dynamicLoad);
}
function fixMenuPosition2(par, id, cnt, offset, flag) {
        var p = par;
        var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        var clientWidth = document.documentElement.clientWidth;
        var obj = document.getElementById(id);
        obj.parentNode.classList.add('open')
        offsetTop = 0;
        while (par !== null) {
            offsetTop += par.offsetTop;
            par = par.offsetParent;
        }
        
        if (typeof offset == "undefined") offset = 10;
        offset = 5;
        var ch = obj.offsetHeight;
        var diff = (offsetTop + ch + offset) - (scrollTop + clientHeight);
        
        var diff_w = obj.parentNode.offsetLeft + obj.parentNode.offsetWidth + obj.offsetWidth;
        if (diff > 0) {
            obj.style.top = "-" + diff + "px";
        } else {
            obj.style.top = "-1px";
        }
        if (diff_w > clientWidth) {
            obj.style.left = "auto";
            obj.style.right = "100%";
        } else {
            obj.style.left = "100%";
        }
    }
function fixMenuPosition(par,id,cnt,offset) {
var p=par;
var scrollTop ;
if($.browser.webkit)
scrollTop = document.body.scrollTop;
else if(document.documentElement)
scrollTop = document.documentElement.scrollTop;
else
scrollTop = document.body.scrollTop;
var clientHeight = document.documentElement.clientHeight;
var obj = document.getElementById(id);
if(obj.style.display=="none") obj.style.display="block";
offsetTop = 0;
while(true) {
if(par.parentNode.tagName=='UL' && (par.parentNode.id=='MenuTop' || par.parentNode.id=='_MenuTop2')) {
offsetTop+= par.offsetTop;
break;
}
if(par.parentNode.tagName=='UL' ) {
offsetTop+=cnt*25;
}
par = par.parentNode;
}
if(typeof offset=="undefined") offset=10;
var diff = ( offsetTop+obj.clientHeight +offset)  - (scrollTop+clientHeight);
if(diff>0) {
obj.style.top= "-"+diff+"px";
}
else  {
obj.style.top= "-1px";
}
}
function chkVote(p_form,p_cnt) {
if(typeof p_cnt=='undefined' ) p_cnt=0;
var elements = p_form.elements;
var len = elements.length;
var elements = p_form.elements;
var voteName= "";
var votedName= "";
var preName = "";
var preVote ="";
var vName ="";
var votedCnt = 0;
for(var i=0;i<len;i++){
vName = elements[i].name;
if(elements[i].type){
switch(elements[i].type){
case "checkbox":
if(vName!=preName) { preName = vName;  voteName +=","+vName; }
if(elements[i].checked){
if(preVote!=vName) votedName +=","+vName;
preVote = vName;
votedCnt++;
}
break;
case "radio":
if(vName!=preName) { preName = vName;  voteName +=","+vName; }
if(elements[i].checked){
votedName +=","+vName;
preVote = vName;
};
break;
}
}
}
if(voteName!=votedName) return -1;
else if(p_cnt>0 && votedCnt>p_cnt) return -2;
else return 1;
}
function addBookmark(url,title) {
if (window.sidebar) {
window.sidebar.addPanel(title, url,"");
} else if( document.all ) {
window.external.AddFavorite( url, title);
} else if( window.opera && window.print ) {
return true;
}
}
function resizeTrigger() {
var func = window.onresize;
if(typeof(func)!="function") return;
func();
}
function onActionTrigger(p_type) {
for(var i=0;i<triggerAction[p_type].length;i++) {
try{
eval(triggerAction[p_type][i]);
}catch(e){}
}
}
function initAllmenu(p_class,p_again){
if(typeof p_again=='undefined') p_again=0;
var menus = $("."+p_class);
for(var i=0;i<menus.length;i++) {
initmenu(menus.get(i),p_again);
}
}
function initmenu(p_menu,p_again){
var ultags=p_menu.getElementsByTagName("ul")
var litags=p_menu.getElementsByTagName("li")
if(!ultags.length && !litags.length && !p_again) {
setTimeout("initAllmenu('"+p_menu.className+"',1)",1000);
}
for (var t=ultags.length-1; t>-1; t--){
ultags[t].style.visibility="hidden"
ultags[t].style.display="block"
}
for (var t=0; t<ultags.length; t++){
ultags[t].parentNode.getElementsByTagName("div")[0].className+=" subfolderstyle"
if (ultags[t].parentNode.parentNode.id==p_menu.id) {
ultags[t].style.left=ultags[t].parentNode.offsetWidth+"px"
}
else {//else if this is a sub level submenu (ul)
ultags[t].style.left=ultags[t-1].getElementsByTagName("div")[0].offsetWidth+"px"
}
}
for (var t=ultags.length-1; t>-1; t--){
ultags[t].style.visibility="visible"
ultags[t].style.display="none"
}
}
function runLink(opt) {
if(opt.getAttribute("runjs")) {
new Function(opt.getAttribute("value"))();
}
else {
if(trim(opt.getAttribute("value"))=='') return false;
else if(opt.getAttribute("target")=="_blank") {
window.open(opt.getAttribute("value"));
} else {
location.href = opt.getAttribute("value");
}
}
}
function getMediaObj(p_id) {
if (window.document[p_id]) {
return window.document[p_id];
}
if(divOs.browser=="IE"){
return document.getElementById(p_id);
}
else {
if(document.embeds && document.embeds[p_id]) {
return document.embeds[p_id];
}
}
}
function setMediaParam(p_codeid,p_id,p_src,p_action) {
var mediaObj =  getMediaObj(p_id);
var p_code = $('#'+p_codeid).val();
mediaObj.SetVariable("Voc",p_src);
mediaObj.SetVariable("Dec",p_action);
mediaObj.SetVariable("Code",p_code);
mediaObj.SetVariable("go",1);
}
triggerAction = new Array();
triggerAction[0] = new Array();
triggerAction[1] = new Array();
function CharMode(iN){
if (iN>=48 && iN <=57) return 1;
if (iN>=65 && iN <=90) return 2;
if (iN>=97 && iN <=122)  return 4;
else return 8;
}
function bitTotal(num){
modes=0;
for (i=0;i<4;i++){
if (num & 1) modes++;
num>>>=1;
}
return modes;
}
function checkStrong(sPW){
if (sPW.length<=4)  return 1;
Modes=0;
for (i=0;i<sPW.length;i++){
Modes|=CharMode(sPW.charCodeAt(i));
}
return bitTotal(Modes);
}
function tabSwitch(p_id){
if(!p_id) return false;
$("ul[id='"+p_id+"']").children("li").each(function(){
var curent = this;
$(curent).children('a').focus(function(){
$(this).parent('li').parent('ul').children('li').removeClass('open');
$(this).parent('li').removeClass('open').addClass('open');
});
});
var last = $("ul[id='"+p_id+"']").children().last().find("a");
last.each(function(i){
if(i==(last.length-1)){
$(this).bind("blur",function(){
$("ul[id='"+p_id+"']").children().last().removeClass('open');
});
}
});
}
function getParentNodeById(p_obj,p_id,p_islike)
{
var str = new String();
if(p_id == "") return p_obj.parentNode;
if(p_obj==null) return null;
if(typeof(p_obj)=="undefined" || (p_obj.tagName!=null && p_obj.tagName.toLowerCase()=="body")) return null;
p_obj = p_obj.parentNode;
if(p_obj==null) return null;
if(p_obj.id=="") return getParentNodeById(p_obj,p_id,p_islike);
if(p_islike){
str = p_obj.id;
if(typeof(str)!="undefined" && str.indexOf(p_id)>-1){
return p_obj;
}
else
return getParentNodeById(p_obj,p_id,p_islike);
}
else{
if(p_obj.id==p_id)
return p_obj;
else
return getParentNodeById(p_obj,p_id,p_islike);
}
}
function tabCarousel(p_owl,p_id,p_left,p_right,p_dot){
$(p_id+" div.cloned a").attr("tabIndex","-1");
$(p_id+" button.owl-dot").attr("tabIndex","-1");
$(p_id+" .carouselPre").attr('aria-label',p_left);
$(p_id+" .carouselNext").attr('aria-label',p_right);
if(p_dot){
var arr = p_dot.split('~@~@~@');
$(p_id+' .owl-dot').each(function(index){
$(this).attr('title',arr[index]);
})
}
$(p_id+' .owl-item:not(.cloned)').each(function(index){
$(this).find('a').focus(function(){
if(index==0){
p_owl.trigger('stop.owl.autoplay');
p_owl.trigger('to.owl.carousel', [0]);
}
if(p_dot){
$(p_id+' .owl-dot').removeClass('active');
$(p_id+' .owl-dot').eq(index).addClass('active');
}
});
});
$(p_id+' .owl-prev').focus(function(){
p_owl.trigger('stop.owl.autoplay');
});
$(p_id+" .owl-next").blur(function(){
p_owl.trigger('play.owl.autoplay');
});
}
function isIE() {
var agent = window.navigator.userAgent.toUpperCase();
var isIE = agent.indexOf("COMPATIBLE") > -1 && agent.indexOf("MSIE") > -1;
var isEdge = agent.indexOf("EDGE") > -1 && !isIE;
var isIE11 = agent.indexOf('TRIDENT') > -1 && agent.indexOf("RV:11.0") > -1
if(isIE){
return 'IE';
}else if(isIE11){
return 'IE11';
}else if(isEdge){
return 'edge';
}
return false;
}
(function(e){if(!Function.prototype.bind)Function.prototype.bind=function(d){var a=[].slice,b=a.call(arguments,1),c=this,g=function(){},f=function(){return c.apply(this instanceof g?this:d||{},b.concat(a.call(arguments)))};g.prototype=c.prototype;f.prototype=new g;return f};if(typeof e.Code==="undefined")e.Code={};e.Code.Util={registerNamespace:function(){var d=arguments,a=null,b,c,g,f,i;b=0;for(f=d.length;b<f;b++){g=d[b];g=g.split(".");a=g[0];typeof e[a]==="undefined"&&(e[a]={});a=e[a];c=1;for(i=
g.length;c<i;++c)a[g[c]]=a[g[c]]||{},a=a[g[c]]}},coalesce:function(){var d,a;d=0;for(a=arguments.length;d<a;d++)if(!this.isNothing(arguments[d]))return arguments[d];return null},extend:function(d,a,b){var c;this.isNothing(b)&&(b=!0);if(d&&a&&this.isObject(a))for(c in a)this.objectHasProperty(a,c)&&(b?d[c]=a[c]:typeof d[c]==="undefined"&&(d[c]=a[c]))},clone:function(d){var a={};this.extend(a,d);return a},isObject:function(d){return d instanceof Object},isFunction:function(d){return{}.toString.call(d)===
"[object Function]"},isArray:function(d){return d instanceof Array},isLikeArray:function(d){return typeof d.length==="number"},isNumber:function(d){return typeof d==="number"},isString:function(d){return typeof d==="string"},isNothing:function(d){if(typeof d==="undefined"||d===null)return!0;return!1},swapArrayElements:function(d,a,b){var c=d[a];d[a]=d[b];d[b]=c},trim:function(d){return d.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},toCamelCase:function(d){return d.replace(/(\-[a-z])/g,function(a){return a.toUpperCase().replace("-",
"")})},toDashedCase:function(d){return d.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},arrayIndexOf:function(d,a,b){var c,g,f,e;f=-1;c=0;for(g=a.length;c<g;c++)if(e=a[c],this.isNothing(b)){if(e===d){f=c;break}}else if(this.objectHasProperty(e,b)&&e[b]===d){f=c;break}return f},objectHasProperty:function(d,a){return d.hasOwnProperty?d.hasOwnProperty(a):"undefined"!==typeof d[a]}}})(window);
(function(e,d){d.Browser={ua:null,version:null,safari:null,webkit:null,opera:null,msie:null,chrome:null,mozilla:null,android:null,blackberry:null,iPad:null,iPhone:null,iPod:null,iOS:null,is3dSupported:null,isCSSTransformSupported:null,isTouchSupported:null,isGestureSupported:null,_detect:function(){this.ua=e.navigator.userAgent;this.version=this.ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[];this.safari=/Safari/gi.test(e.navigator.appVersion);this.webkit=/webkit/i.test(this.ua);this.opera=/opera/i.test(this.ua);
this.msie=/msie/i.test(this.ua)&&!this.opera;this.chrome=/Chrome/i.test(this.ua);this.firefox=/Firefox/i.test(this.ua);this.fennec=/Fennec/i.test(this.ua);this.mozilla=/mozilla/i.test(this.ua)&&!/(compatible|webkit)/.test(this.ua);this.android=/android/i.test(this.ua);this.blackberry=/blackberry/i.test(this.ua);this.iOS=/iphone|ipod|ipad/gi.test(e.navigator.platform);this.iPad=/ipad/gi.test(e.navigator.platform);this.iPhone=/iphone/gi.test(e.navigator.platform);this.iPod=/ipod/gi.test(e.navigator.platform);
var a=document.createElement("div");this.is3dSupported=!d.isNothing(a.style.WebkitPerspective);this.isCSSTransformSupported=!d.isNothing(a.style.WebkitTransform)||!d.isNothing(a.style.MozTransform)||!d.isNothing(a.style.transformProperty);this.isTouchSupported=this.isEventSupported("touchstart");this.isGestureSupported=this.isEventSupported("gesturestart")},_eventTagNames:{select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},isEventSupported:function(a){var b=
document.createElement(this._eventTagNames[a]||"div"),c,a="on"+a;c=d.objectHasProperty(b,a);c||(b.setAttribute(a,"return;"),c=typeof b[a]==="function");return c},isLandscape:function(){return d.DOM.windowWidth()>d.DOM.windowHeight()}};d.Browser._detect()})(window,window.Code.Util);
(function(e,d,a){a.extend(a,{Events:{add:function(a,c,g){d(a).bind(c,g)},remove:function(a,c,g){d(a).unbind(c,g)},fire:function(a,c){var g,f=Array.prototype.slice.call(arguments).splice(2);g=typeof c==="string"?{type:c}:c;d(a).trigger(d.Event(g.type,g),f)},getMousePosition:function(a){return{x:a.pageX,y:a.pageY}},getTouchEvent:function(a){return a.originalEvent},getWheelDelta:function(b){var c=0;a.isNothing(b.wheelDelta)?a.isNothing(b.detail)||(c=-b.detail/3):c=b.wheelDelta/120;return c},domReady:function(a){d(document).ready(a)}}})})(window,
window.jQuery,window.Code.Util);
(function(e,d,a){a.extend(a,{DOM:{setData:function(b,c,g){if(a.isLikeArray(b)){var f,d;f=0;for(d=b.length;f<d;f++)a.DOM._setData(b[f],c,g)}else a.DOM._setData(b,c,g)},_setData:function(b,c,g){a.DOM.setAttribute(b,"data-"+c,g)},getData:function(b,c,g){return a.DOM.getAttribute(b,"data-"+c,g)},removeData:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._removeData(b[g],c)}else a.DOM._removeData(b,c)},_removeData:function(b,c){a.DOM.removeAttribute(b,"data-"+c)},isChildOf:function(a,
c){if(c===a)return!1;for(;a&&a!==c;)a=a.parentNode;return a===c},find:function(b,c){if(a.isNothing(c))c=e.document;var g=d(b,c),f=[],i,j;i=0;for(j=g.length;i<j;i++)f.push(g[i]);return f},createElement:function(a,c,g){a=d("<"+a+"></"+a+">");a.attr(c);a.append(g);return a[0]},appendChild:function(a,c){d(c).append(a)},insertBefore:function(a,c){d(a).insertBefore(c)},appendText:function(a,c){d(c).text(a)},appendToBody:function(a){d("body").append(a)},removeChild:function(a){d(a).empty().remove()},removeChildren:function(a){d(a).empty()},
hasAttribute:function(b,c){return!a.isNothing(d(b).attr(c))},getAttribute:function(b,c,g){b=d(b).attr(c);a.isNothing(b)&&!a.isNothing(g)&&(b=g);return b},setAttribute:function(b,c,g){if(a.isLikeArray(b)){var f,d;f=0;for(d=b.length;f<d;f++)a.DOM._setAttribute(b[f],c,g)}else a.DOM._setAttribute(b,c,g)},_setAttribute:function(a,c,g){d(a).attr(c,g)},removeAttribute:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._removeAttribute(b[g],c)}else a.DOM._removeAttribute(b,c)},_removeAttribute:function(a,
c){d(a).removeAttr(c)},addClass:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._addClass(b[g],c)}else a.DOM._addClass(b,c)},_addClass:function(a,c){d(a).addClass(c)},removeClass:function(b,c){if(a.isLikeArray(b)){var g,f;g=0;for(f=b.length;g<f;g++)a.DOM._removeClass(b[g],c)}else a.DOM._removeClass(b,c)},_removeClass:function(a,c){d(a).removeClass(c)},hasClass:function(a,c){d(a).hasClass(c)},setStyle:function(b,c,g){if(a.isLikeArray(b)){var f,d;f=0;for(d=b.length;f<d;f++)a.DOM._setStyle(b[f],
c,g)}else a.DOM._setStyle(b,c,g)},_setStyle:function(b,c,g){var f;if(a.isObject(c))for(f in c)a.objectHasProperty(c,f)&&(f==="width"?a.DOM.width(b,c[f]):f==="height"?a.DOM.height(b,c[f]):d(b).css(f,c[f]));else d(b).css(c,g)},getStyle:function(a,c){return d(a).css(c)},hide:function(b){if(a.isLikeArray(b)){var c,g;c=0;for(g=b.length;c<g;c++)a.DOM._hide(b[c])}else a.DOM._hide(b)},_hide:function(a){d(a).hide()},show:function(b){if(a.isLikeArray(b)){var c,g;c=0;for(g=b.length;c<g;c++)a.DOM._show(b[c])}else a.DOM._show(b)},
_show:function(a){d(a).show()},width:function(b,c){a.isNothing(c)||d(b).width(c);return d(b).width()},outerWidth:function(a){return d(a).outerWidth()},height:function(b,c){a.isNothing(c)||d(b).height(c);return d(b).height()},outerHeight:function(a){return d(a).outerHeight()},documentWidth:function(){return d(document.documentElement).width()},documentHeight:function(){return d(document.documentElement).height()},documentOuterWidth:function(){return a.DOM.width(document.documentElement)},documentOuterHeight:function(){return a.DOM.outerHeight(document.documentElement)},
bodyWidth:function(){return d(document.body).width()},bodyHeight:function(){return d(document.body).height()},bodyOuterWidth:function(){return a.DOM.outerWidth(document.body)},bodyOuterHeight:function(){return a.DOM.outerHeight(document.body)},windowWidth:function(){if(!e.innerWidth)return d(e).width();return e.innerWidth},windowHeight:function(){if(!e.innerHeight)return d(e).height();return e.innerHeight},windowScrollLeft:function(){if(!e.pageXOffset)return d(e).scrollLeft();return e.pageXOffset},
windowScrollTop:function(){if(!e.pageYOffset)return d(e).scrollTop();return e.pageYOffset}}})})(window,window.jQuery,window.Code.Util);
(function(e,d){d.extend(d,{Animation:{_applyTransitionDelay:50,_transitionEndLabel:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransitionEnd":"transitionend",_transitionEndHandler:null,_transitionPrefix:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransition":e.document.documentElement.style.MozTransition!==void 0?"MozTransition":"transition",_transformLabel:e.document.documentElement.style.webkitTransform!==void 0?"webkitTransform":e.document.documentElement.style.MozTransition!==
void 0?"MozTransform":"transform",_getTransitionEndHandler:function(){if(d.isNothing(this._transitionEndHandler))this._transitionEndHandler=this._onTransitionEnd.bind(this);return this._transitionEndHandler},stop:function(a){if(d.Browser.isCSSTransformSupported){var b={};d.Events.remove(a,this._transitionEndLabel,this._getTransitionEndHandler());d.isNothing(a.callbackLabel)&&delete a.callbackLabel;b[this._transitionPrefix+"Property"]="";b[this._transitionPrefix+"Duration"]="";b[this._transitionPrefix+
"TimingFunction"]="";b[this._transitionPrefix+"Delay"]="";b[this._transformLabel]="";d.DOM.setStyle(a,b)}else d.isNothing(e.jQuery)||e.jQuery(a).stop(!0,!0)},fadeIn:function(a,b,c,g,f){f=d.coalesce(f,1);f<=0&&(f=1);if(b<=0&&(d.DOM.setStyle(a,"opacity",f),!d.isNothing(c))){c(a);return}d.DOM.getStyle(a,"opacity")>=1&&d.DOM.setStyle(a,"opacity",0);d.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",f,b,c,g):d.isNothing(e.jQuery)||e.jQuery(a).fadeTo(b,f,c)},fadeTo:function(a,b,c,g,f){this.fadeIn(a,
c,g,f,b)},fadeOut:function(a,b,c,g){if(b<=0&&(d.DOM.setStyle(a,"opacity",0),!d.isNothing(c))){c(a);return}d.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",0,b,c,g):e.jQuery(a).fadeTo(b,0,c)},slideBy:function(a,b,c,g,f,i){var j={},b=d.coalesce(b,0),c=d.coalesce(c,0),i=d.coalesce(i,"ease-out");j[this._transitionPrefix+"Property"]="all";j[this._transitionPrefix+"Delay"]="0";g===0?(j[this._transitionPrefix+"Duration"]="",j[this._transitionPrefix+"TimingFunction"]=""):(j[this._transitionPrefix+
"Duration"]=g+"ms",j[this._transitionPrefix+"TimingFunction"]=d.coalesce(i,"ease-out"),d.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler()));j[this._transformLabel]=d.Browser.is3dSupported?"translate3d("+b+"px, "+c+"px, 0px)":"translate("+b+"px, "+c+"px)";if(!d.isNothing(f))a.cclallcallback=f;d.DOM.setStyle(a,j);g===0&&e.setTimeout(function(){this._leaveTransforms(a)}.bind(this),this._applyTransitionDelay)},resetTranslate:function(a){var b={};b[this._transformLabel]=b[this._transformLabel]=
d.Browser.is3dSupported?"translate3d(0px, 0px, 0px)":"translate(0px, 0px)";d.DOM.setStyle(a,b)},_applyTransition:function(a,b,c,g,f,i){var j={},i=d.coalesce(i,"ease-in");j[this._transitionPrefix+"Property"]=b;j[this._transitionPrefix+"Duration"]=g+"ms";j[this._transitionPrefix+"TimingFunction"]=i;j[this._transitionPrefix+"Delay"]="0";d.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler());d.DOM.setStyle(a,j);d.isNothing(f)||(a["ccl"+b+"callback"]=f);e.setTimeout(function(){d.DOM.setStyle(a,
b,c)},this._applyTransitionDelay)},_onTransitionEnd:function(a){d.Events.remove(a.currentTarget,this._transitionEndLabel,this._getTransitionEndHandler());this._leaveTransforms(a.currentTarget)},_leaveTransforms:function(a){var b=a.style[this._transitionPrefix+"Property"],c=b!==""?"ccl"+b+"callback":"cclallcallback",g,b=d.coalesce(a.style.webkitTransform,a.style.MozTransform,a.style.transform),f,i=e.parseInt(d.DOM.getStyle(a,"left"),0),j=e.parseInt(d.DOM.getStyle(a,"top"),0),h,l,k={};b!==""&&(b=d.Browser.is3dSupported?
b.match(/translate3d\((.*?)\)/):b.match(/translate\((.*?)\)/),d.isNothing(b)||(f=b[1].split(", "),h=e.parseInt(f[0],0),l=e.parseInt(f[1],0)));k[this._transitionPrefix+"Property"]="";k[this._transitionPrefix+"Duration"]="";k[this._transitionPrefix+"TimingFunction"]="";k[this._transitionPrefix+"Delay"]="";d.DOM.setStyle(a,k);e.setTimeout(function(){if(!d.isNothing(f))k={},k[this._transformLabel]="",k.left=i+h+"px",k.top=j+l+"px",d.DOM.setStyle(a,k);d.isNothing(a[c])||(g=a[c],delete a[c],g(a))}.bind(this),
this._applyTransitionDelay)}}})})(window,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.EventTypes={onTouch:"CodeUtilTouchElementOnTouch"};a.TouchElement.ActionTypes={touchStart:"touchStart",touchMove:"touchMove",touchEnd:"touchEnd",touchMoveEnd:"touchMoveEnd",tap:"tap",doubleTap:"doubleTap",swipeLeft:"swipeLeft",swipeRight:"swipeRight",swipeUp:"swipeUp",swipeDown:"swipeDown",gestureStart:"gestureStart",gestureChange:"gestureChange",gestureEnd:"gestureEnd"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.TouchElementClass=d({el:null,captureSettings:null,touchStartPoint:null,touchEndPoint:null,touchStartTime:null,doubleTapTimeout:null,touchStartHandler:null,touchMoveHandler:null,touchEndHandler:null,mouseDownHandler:null,mouseMoveHandler:null,mouseUpHandler:null,mouseOutHandler:null,gestureStartHandler:null,gestureChangeHandler:null,gestureEndHandler:null,swipeThreshold:null,swipeTimeThreshold:null,doubleTapSpeed:null,dispose:function(){var b;
this.removeEventHandlers();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(b,c){this.el=b;this.captureSettings={swipe:!1,move:!1,gesture:!1,doubleTap:!1,preventDefaultTouchEvents:!0};a.extend(this.captureSettings,c);this.swipeThreshold=50;this.doubleTapSpeed=this.swipeTimeThreshold=250;this.touchStartPoint={x:0,y:0};this.touchEndPoint={x:0,y:0}},addEventHandlers:function(){if(a.isNothing(this.touchStartHandler))this.touchStartHandler=this.onTouchStart.bind(this),this.touchMoveHandler=
this.onTouchMove.bind(this),this.touchEndHandler=this.onTouchEnd.bind(this),this.mouseDownHandler=this.onMouseDown.bind(this),this.mouseMoveHandler=this.onMouseMove.bind(this),this.mouseUpHandler=this.onMouseUp.bind(this),this.mouseOutHandler=this.onMouseOut.bind(this),this.gestureStartHandler=this.onGestureStart.bind(this),this.gestureChangeHandler=this.onGestureChange.bind(this),this.gestureEndHandler=this.onGestureEnd.bind(this);a.Events.add(this.el,"touchstart",this.touchStartHandler);this.captureSettings.move&&
a.Events.add(this.el,"touchmove",this.touchMoveHandler);a.Events.add(this.el,"touchend",this.touchEndHandler);a.Events.add(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.add(this.el,"gesturestart",this.gestureStartHandler),a.Events.add(this.el,"gesturechange",this.gestureChangeHandler),a.Events.add(this.el,"gestureend",this.gestureEndHandler))},removeEventHandlers:function(){a.Events.remove(this.el,"touchstart",this.touchStartHandler);
this.captureSettings.move&&a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);a.Events.remove(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.remove(this.el,"gesturestart",this.gestureStartHandler),a.Events.remove(this.el,"gesturechange",this.gestureChangeHandler),a.Events.remove(this.el,"gestureend",this.gestureEndHandler))},getTouchPoint:function(a){return{x:a[0].pageX,
y:a[0].pageY}},fireTouchEvent:function(b){var c=0,g=0,f=0,d,c=this.touchEndPoint.x-this.touchStartPoint.x,g=this.touchEndPoint.y-this.touchStartPoint.y,f=Math.sqrt(c*c+g*g);if(this.captureSettings.swipe&&(d=new Date,d-=this.touchStartTime,d<=this.swipeTimeThreshold)){if(e.Math.abs(c)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:c<0?a.TouchElement.ActionTypes.swipeLeft:a.TouchElement.ActionTypes.swipeRight,targetEl:b.target,
currentTargetEl:b.currentTarget});return}if(e.Math.abs(g)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:g<0?a.TouchElement.ActionTypes.swipeUp:a.TouchElement.ActionTypes.swipeDown,targetEl:b.target,currentTargetEl:b.currentTarget});return}}f>1?a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMoveEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}):
this.captureSettings.doubleTap?a.isNothing(this.doubleTapTimeout)?this.doubleTapTimeout=e.setTimeout(function(){this.doubleTapTimeout=null;a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})}.bind(this),this.doubleTapSpeed):(e.clearTimeout(this.doubleTapTimeout),this.doubleTapTimeout=null,a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,
action:a.TouchElement.ActionTypes.doubleTap,targetEl:b.target,currentTargetEl:b.currentTarget})):a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})},onTouchStart:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();a.Events.remove(this.el,"mousedown",this.mouseDownHandler);var c=a.Events.getTouchEvent(b).touches;c.length>1&&this.captureSettings.gesture?
this.isGesture=!0:(this.touchStartTime=new Date,this.isGesture=!1,this.touchStartPoint=this.getTouchPoint(c),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget}))},onTouchMove:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();if(!this.isGesture||!this.captureSettings.gesture){var c=a.Events.getTouchEvent(b).touches;a.Events.fire(this,
{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,point:this.getTouchPoint(c),targetEl:b.target,currentTargetEl:b.currentTarget})}},onTouchEnd:function(b){if(!this.isGesture||!this.captureSettings.gesture){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();var c=a.Events.getTouchEvent(b);this.touchEndPoint=this.getTouchPoint(!a.isNothing(c.changedTouches)?c.changedTouches:c.touches);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,
target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)}},onMouseDown:function(b){b.preventDefault();a.Events.remove(this.el,"touchstart",this.mouseDownHandler);a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);this.captureSettings.move&&a.Events.add(this.el,"mousemove",this.mouseMoveHandler);a.Events.add(this.el,"mouseup",this.mouseUpHandler);
a.Events.add(this.el,"mouseout",this.mouseOutHandler);this.touchStartTime=new Date;this.isGesture=!1;this.touchStartPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseMove:function(b){b.preventDefault();a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,
point:a.Events.getMousePosition(b),targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseUp:function(b){b.preventDefault();this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler);a.Events.remove(this.el,"mouseup",this.mouseUpHandler);a.Events.remove(this.el,"mouseout",this.mouseOutHandler);this.touchEndPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,
targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)},onMouseOut:function(b){var c=b.relatedTarget;if(!(this.el===c||a.DOM.isChildOf(c,this.el)))b.preventDefault(),this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler),a.Events.remove(this.el,"mouseup",this.mouseUpHandler),a.Events.remove(this.el,"mouseout",this.mouseOutHandler),this.touchEndPoint=a.Events.getMousePosition(b),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,
action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}),this.fireTouchEvent(b)},onGestureStart:function(b){b.preventDefault();var c=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureStart,scale:c.scale,rotation:c.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureChange:function(b){b.preventDefault();var c=a.Events.getTouchEvent(b);
a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureChange,scale:c.scale,rotation:c.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureEnd:function(b){b.preventDefault();var c=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureEnd,scale:c.scale,rotation:c.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})}})})(window,window.klass,
window.Code.Util);(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Image");e.Code.PhotoSwipe.Image.EventTypes={onLoad:"onLoad",onError:"onError"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Image");var b=e.Code.PhotoSwipe;b.Image.ImageClass=d({refObj:null,imageEl:null,src:null,caption:null,metaData:null,imageLoadHandler:null,imageErrorHandler:null,dispose:function(){var c;this.shrinkImage();for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(a,b,f,d){this.refObj=a;this.src=this.originalSrc=b;this.caption=f;this.metaData=d;this.imageEl=new e.Image;this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=
this.onImageError.bind(this)},load:function(){this.imageEl.originalSrc=a.coalesce(this.imageEl.originalSrc,"");this.imageEl.originalSrc===this.src?this.imageEl.isError?a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this}):a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this}):(this.imageEl.isError=!1,this.imageEl.isLoading=!0,this.imageEl.naturalWidth=null,this.imageEl.naturalHeight=null,this.imageEl.isLandscape=!1,this.imageEl.onload=this.imageLoadHandler,this.imageEl.onerror=
this.imageErrorHandler,this.imageEl.onabort=this.imageErrorHandler,this.imageEl.originalSrc=this.src,this.imageEl.src=this.src)},shrinkImage:function(){if(!a.isNothing(this.imageEl)&&this.imageEl.src.indexOf(this.src)>-1)this.imageEl.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",a.isNothing(this.imageEl.parentNode)||a.DOM.removeChild(this.imageEl,this.imageEl.parentNode)},onImageLoad:function(){this.imageEl.onload=null;this.imageEl.naturalWidth=a.coalesce(this.imageEl.naturalWidth,
this.imageEl.width);this.imageEl.naturalHeight=a.coalesce(this.imageEl.naturalHeight,this.imageEl.height);this.imageEl.isLandscape=this.imageEl.naturalWidth>this.imageEl.naturalHeight;this.imageEl.isLoading=!1;a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this})},onImageError:function(){this.imageEl.onload=null;this.imageEl.onerror=null;this.imageEl.onabort=null;this.imageEl.isLoading=!1;this.imageEl.isError=!0;a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this})}})})(window,
window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Cache");e=e.Code.PhotoSwipe;e.Cache.Mode={normal:"normal",aggressive:"aggressive"};e.Cache.Functions={getImageSource:function(a){return a.href},getImageCaption:function(b){if(b.nodeName==="IMG")return a.DOM.getAttribute(b,"alt");var c,g,f;c=0;for(g=b.childNodes.length;c<g;c++)if(f=b.childNodes[c],b.childNodes[c].nodeName==="IMG")return a.DOM.getAttribute(f,"alt")},getImageMetaData:function(){return{}}}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Cache");var b=e.Code.PhotoSwipe;b.Cache.CacheClass=d({images:null,settings:null,dispose:function(){var c,b,f;if(!a.isNothing(this.images)){b=0;for(f=this.images.length;b<f;b++)this.images[b].dispose();this.images.length=0}for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(a,g){var f,d,e,h,l,k;this.settings=g;this.images=[];f=0;for(d=a.length;f<d;f++)e=a[f],h=this.settings.getImageSource(e),l=this.settings.getImageCaption(e),
k=this.settings.getImageMetaData(e),this.images.push(new b.Image.ImageClass(e,h,l,k))},getImages:function(c){var g,f,d=[],e;g=0;for(f=c.length;g<f;g++){e=this.images[c[g]];if(this.settings.cacheMode===b.Cache.Mode.aggressive)e.cacheDoNotShrink=!0;d.push(e)}if(this.settings.cacheMode===b.Cache.Mode.aggressive){g=0;for(f=this.images.length;g<f;g++)e=this.images[g],a.objectHasProperty(e,"cacheDoNotShrink")?delete e.cacheDoNotShrink:e.shrinkImage()}return d}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Image);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");e.Code.PhotoSwipe.DocumentOverlay.CssClasses={documentOverlay:"ps-document-overlay"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");var b=e.Code.PhotoSwipe;b.DocumentOverlay.DocumentOverlayClass=d({el:null,settings:null,initialBodyHeight:null,dispose:function(){var c;a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(c){this.settings=c;this.el=a.DOM.createElement("div",{"class":b.DocumentOverlay.CssClasses.documentOverlay},"");a.DOM.setStyle(this.el,{display:"block",
position:"absolute",left:0,top:0,zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);a.Animation.resetTranslate(this.el);this.initialBodyHeight=a.DOM.bodyOuterHeight()},resetPosition:function(){var c,b,f;if(this.settings.target===e){c=a.DOM.windowWidth();b=a.DOM.bodyOuterHeight()*2;f=this.settings.jQueryMobile?a.DOM.windowScrollTop()+"px":"0px";if(b<1)b=this.initialBodyHeight;a.DOM.windowHeight()>b&&
(b=a.DOM.windowHeight())}else c=a.DOM.width(this.settings.target),b=a.DOM.height(this.settings.target),f="0px";a.DOM.setStyle(this.el,{width:c,height:b,top:f})},fadeIn:function(c,b){this.resetPosition();a.DOM.setStyle(this.el,"opacity",0);a.DOM.show(this.el);a.Animation.fadeIn(this.el,c,b)}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Carousel");e=e.Code.PhotoSwipe;e.Carousel.EventTypes={onSlideByEnd:"PhotoSwipeCarouselOnSlideByEnd",onSlideshowStart:"PhotoSwipeCarouselOnSlideshowStart",onSlideshowStop:"PhotoSwipeCarouselOnSlideshowStop"};e.Carousel.CssClasses={carousel:"ps-carousel",content:"ps-carousel-content",item:"ps-carousel-item",itemLoading:"ps-carousel-item-loading",itemError:"ps-carousel-item-error"};e.Carousel.SlideByAction={previous:"previous",current:"current",next:"next"}})(window,
window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Carousel");var b=e.Code.PhotoSwipe;b.Carousel.CarouselClass=d({el:null,contentEl:null,settings:null,cache:null,slideByEndHandler:null,currentCacheIndex:null,isSliding:null,isSlideshowActive:null,lastSlideByAction:null,touchStartPoint:null,touchStartPosition:null,imageLoadHandler:null,imageErrorHandler:null,slideshowTimeout:null,dispose:function(){var c,g,f;g=0;for(f=this.cache.images.length;g<f;g++)a.Events.remove(this.cache.images[g],b.Image.EventTypes.onLoad,
this.imageLoadHandler),a.Events.remove(this.cache.images[g],b.Image.EventTypes.onError,this.imageErrorHandler);this.stopSlideshow();a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(c in this)a.objectHasProperty(this,c)&&(this[c]=null)},initialize:function(c,g){var f,d,j;this.cache=c;this.settings=g;this.slideByEndHandler=this.onSlideByEnd.bind(this);this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=this.onImageError.bind(this);this.currentCacheIndex=
0;this.isSlideshowActive=this.isSliding=!1;if(this.cache.images.length<3)this.settings.loop=!1;this.el=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.carousel},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.contentEl=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.content},"");a.DOM.setStyle(this.contentEl,{display:"block",position:"absolute",left:0,top:0});a.DOM.appendChild(this.contentEl,
this.el);d=c.images.length<3?c.images.length:3;for(f=0;f<d;f++)j=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.item+" "+b.Carousel.CssClasses.item+"-"+f},""),a.DOM.setAttribute(j,"style","float: left;"),a.DOM.setStyle(j,{display:"block",position:"relative",left:0,top:0,overflow:"hidden"}),this.settings.margin>0&&a.DOM.setStyle(j,{marginRight:this.settings.margin+"px"}),a.DOM.appendChild(j,this.contentEl);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target)},
resetPosition:function(){var c,g,f,d,j,h;this.settings.target===e?(c=a.DOM.windowWidth(),g=a.DOM.windowHeight(),f=a.DOM.windowScrollTop()+"px"):(c=a.DOM.width(this.settings.target),g=a.DOM.height(this.settings.target),f="0px");d=this.settings.margin>0?c+this.settings.margin:c;j=a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl);d*=j.length;a.DOM.setStyle(this.el,{top:f,width:c,height:g});a.DOM.setStyle(this.contentEl,{width:d,height:g});f=0;for(d=j.length;f<d;f++)h=j[f],a.DOM.setStyle(h,{width:c,
height:g}),h=a.DOM.find("img",h)[0],a.isNothing(h)||this.resetImagePosition(h);this.setContentLeftPosition()},resetImagePosition:function(c){if(!a.isNothing(c)){a.DOM.getAttribute(c,"src");var b,f,d,e=a.DOM.width(this.el),h=a.DOM.height(this.el);this.settings.imageScaleMethod==="fitNoUpscale"?(f=c.naturalWidth,d=c.naturalHeight,f>e&&(b=e/f,f=Math.round(f*b),d=Math.round(d*b)),d>h&&(b=h/d,d=Math.round(d*b),f=Math.round(f*b))):(b=c.isLandscape?e/c.naturalWidth:h/c.naturalHeight,f=Math.round(c.naturalWidth*
b),d=Math.round(c.naturalHeight*b),this.settings.imageScaleMethod==="zoom"?(b=1,d<h?b=h/d:f<e&&(b=e/f),b!==1&&(f=Math.round(f*b),d=Math.round(d*b))):this.settings.imageScaleMethod==="fit"&&(b=1,f>e?b=e/f:d>h&&(b=h/d),b!==1&&(f=Math.round(f*b),d=Math.round(d*b))));a.DOM.setStyle(c,{position:"absolute",width:f,height:d,top:Math.round((h-d)/2)+"px",left:Math.round((e-f)/2)+"px",display:"block"})}},setContentLeftPosition:function(){var c,b,d;c=this.settings.target===e?a.DOM.windowWidth():a.DOM.width(this.settings.target);
b=this.getItemEls();d=0;this.settings.loop?d=(c+this.settings.margin)*-1:this.currentCacheIndex===this.cache.images.length-1?d=(b.length-1)*(c+this.settings.margin)*-1:this.currentCacheIndex>0&&(d=(c+this.settings.margin)*-1);a.DOM.setStyle(this.contentEl,{left:d+"px"})},show:function(c){this.currentCacheIndex=c;this.resetPosition();this.setImages(!1);a.DOM.show(this.el);a.Animation.resetTranslate(this.contentEl);var c=this.getItemEls(),d,f;d=0;for(f=c.length;d<f;d++)a.Animation.resetTranslate(c[d]);
a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:b.Carousel.SlideByAction.current,cacheIndex:this.currentCacheIndex})},setImages:function(a){var b,d=this.getItemEls();b=this.currentCacheIndex+1;var e=this.currentCacheIndex-1;this.settings.loop?(b>this.cache.images.length-1&&(b=0),e<0&&(e=this.cache.images.length-1),b=this.cache.getImages([e,this.currentCacheIndex,b]),a||this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[2],d[2]),this.addCacheImageToItemEl(b[0],
d[0])):d.length===1?a||(b=this.cache.getImages([this.currentCacheIndex]),this.addCacheImageToItemEl(b[0],d[0])):d.length===2?this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,this.currentCacheIndex+1]),a||this.addCacheImageToItemEl(b[0],d[0]),this.addCacheImageToItemEl(b[1],d[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[0],d[0])):this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,
this.currentCacheIndex+1,this.currentCacheIndex+2]),a||this.addCacheImageToItemEl(b[0],d[0]),this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[2],d[2])):(this.currentCacheIndex===this.cache.images.length-1?(b=this.cache.getImages([this.currentCacheIndex-2,this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[2],d[2]),this.addCacheImageToItemEl(b[1],d[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex,this.currentCacheIndex+1]),
a||this.addCacheImageToItemEl(b[1],d[1]),this.addCacheImageToItemEl(b[2],d[2])),this.addCacheImageToItemEl(b[0],d[0]))},addCacheImageToItemEl:function(c,d){a.DOM.removeClass(d,b.Carousel.CssClasses.itemError);a.DOM.addClass(d,b.Carousel.CssClasses.itemLoading);a.DOM.removeChildren(d);a.DOM.setStyle(c.imageEl,{display:"none"});a.DOM.appendChild(c.imageEl,d);a.Animation.resetTranslate(c.imageEl);a.Events.add(c,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.add(c,b.Image.EventTypes.onError,
this.imageErrorHandler);c.load()},slideCarousel:function(c,d,f){if(!this.isSliding){var i,j;i=this.settings.target===e?a.DOM.windowWidth()+this.settings.margin:a.DOM.width(this.settings.target)+this.settings.margin;f=a.coalesce(f,this.settings.slideSpeed);if(!(e.Math.abs(j)<1)){switch(d){case a.TouchElement.ActionTypes.swipeLeft:c=i*-1;break;case a.TouchElement.ActionTypes.swipeRight:c=i;break;default:j=c.x-this.touchStartPoint.x,c=e.Math.abs(j)>i/2?j>0?i:i*-1:0}this.lastSlideByAction=c<0?b.Carousel.SlideByAction.next:
c>0?b.Carousel.SlideByAction.previous:b.Carousel.SlideByAction.current;if(!this.settings.loop&&(this.lastSlideByAction===b.Carousel.SlideByAction.previous&&this.currentCacheIndex===0||this.lastSlideByAction===b.Carousel.SlideByAction.next&&this.currentCacheIndex===this.cache.images.length-1))c=0,this.lastSlideByAction=b.Carousel.SlideByAction.current;this.isSliding=!0;this.doSlideCarousel(c,f)}}},moveCarousel:function(a){this.isSliding||this.settings.enableDrag&&this.doMoveCarousel(a.x-this.touchStartPoint.x)},
getItemEls:function(){return a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl)},previous:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeRight,this.settings.nextPreviousSlideSpeed)},next:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft,this.settings.nextPreviousSlideSpeed)},slideshowNext:function(){this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft)},startSlideshow:function(){this.stopSlideshow();
this.isSlideshowActive=!0;this.slideshowTimeout=e.setTimeout(this.slideshowNext.bind(this),this.settings.slideshowDelay);a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStart,target:this})},stopSlideshow:function(){if(!a.isNothing(this.slideshowTimeout))e.clearTimeout(this.slideshowTimeout),this.slideshowTimeout=null,this.isSlideshowActive=!1,a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStop,target:this})},onSlideByEnd:function(){if(!a.isNothing(this.isSliding)){var c=this.getItemEls();
this.isSliding=!1;this.lastSlideByAction===b.Carousel.SlideByAction.next?this.currentCacheIndex+=1:this.lastSlideByAction===b.Carousel.SlideByAction.previous&&(this.currentCacheIndex-=1);if(this.settings.loop)if(this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(c[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(c[c.length-1],c[0],this.contentEl),this.currentCacheIndex<0)this.currentCacheIndex=this.cache.images.length-1;else{if(this.currentCacheIndex===
this.cache.images.length)this.currentCacheIndex=0}else this.cache.images.length>3&&(this.currentCacheIndex>1&&this.currentCacheIndex<this.cache.images.length-2?this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(c[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(c[c.length-1],c[0],this.contentEl):this.currentCacheIndex===1?this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(c[c.length-1],c[0],this.contentEl):
this.currentCacheIndex===this.cache.images.length-2&&this.lastSlideByAction===b.Carousel.SlideByAction.next&&a.DOM.appendChild(c[0],this.contentEl));this.lastSlideByAction!==b.Carousel.SlideByAction.current&&(this.setContentLeftPosition(),this.setImages(!0));a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:this.lastSlideByAction,cacheIndex:this.currentCacheIndex});this.isSlideshowActive&&(this.lastSlideByAction!==b.Carousel.SlideByAction.current?this.startSlideshow():
this.stopSlideshow())}},onTouch:function(b,d){this.stopSlideshow();switch(b){case a.TouchElement.ActionTypes.touchStart:this.touchStartPoint=d;this.touchStartPosition={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)};break;case a.TouchElement.ActionTypes.touchMove:this.moveCarousel(d);break;case a.TouchElement.ActionTypes.touchMoveEnd:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.slideCarousel(d,
b)}},onImageLoad:function(c){c=c.target;a.isNothing(c.imageEl.parentNode)||(a.DOM.removeClass(c.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),this.resetImagePosition(c.imageEl));a.Events.remove(c,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(c,b.Image.EventTypes.onError,this.imageErrorHandler)},onImageError:function(c){c=c.target;a.isNothing(c.imageEl.parentNode)||(a.DOM.removeClass(c.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),a.DOM.addClass(c.imageEl.parentNode,
b.Carousel.CssClasses.itemError));a.Events.remove(c,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(c,b.Image.EventTypes.onError,this.imageErrorHandler)}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Carousel");d=e.Code.PhotoSwipe;d.Carousel.CarouselClass=d.Carousel.CarouselClass.extend({getStartingPos:function(){var b=this.touchStartPosition;a.isNothing(b)&&(b={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)});return b},doMoveCarousel:function(b){var c;a.Browser.isCSSTransformSupported?(c={},c[a.Animation._transitionPrefix+"Property"]="all",c[a.Animation._transitionPrefix+"Duration"]=
"",c[a.Animation._transitionPrefix+"TimingFunction"]="",c[a.Animation._transitionPrefix+"Delay"]="0",c[a.Animation._transformLabel]=a.Browser.is3dSupported?"translate3d("+b+"px, 0px, 0px)":"translate("+b+"px, 0px)",a.DOM.setStyle(this.contentEl,c)):a.isNothing(e.jQuery)||e.jQuery(this.contentEl).stop().css("left",this.getStartingPos().x+b+"px")},doSlideCarousel:function(b,c){var d;if(c<=0)this.slideByEndHandler();else if(a.Browser.isCSSTransformSupported)d=a.coalesce(this.contentEl.style.webkitTransform,
this.contentEl.style.MozTransform,this.contentEl.style.transform,""),d.indexOf("translate3d("+b)===0?this.slideByEndHandler():d.indexOf("translate("+b)===0?this.slideByEndHandler():a.Animation.slideBy(this.contentEl,b,0,c,this.slideByEndHandler,this.settings.slideTimingFunction);else if(!a.isNothing(e.jQuery)){d={left:this.getStartingPos().x+b+"px"};if(this.settings.animationTimingFunction==="ease-out")this.settings.animationTimingFunction="easeOutQuad";if(a.isNothing(e.jQuery.easing[this.settings.animationTimingFunction]))this.settings.animationTimingFunction=
"linear";e.jQuery(this.contentEl).animate(d,this.settings.slideSpeed,this.settings.animationTimingFunction,this.slideByEndHandler)}}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.TouchElement);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.CssClasses={toolbar:"ps-toolbar",toolbarContent:"ps-toolbar-content",toolbarTop:"ps-toolbar-top",caption:"ps-caption",captionBottom:"ps-caption-bottom",captionContent:"ps-caption-content",close:"ps-toolbar-close",play:"ps-toolbar-play",previous:"ps-toolbar-previous",previousDisabled:"ps-toolbar-previous-disabled",next:"ps-toolbar-next",nextDisabled:"ps-toolbar-next-disabled"};b.Toolbar.ToolbarAction=
{close:"close",play:"play",next:"next",previous:"previous",none:"none"};b.Toolbar.EventTypes={onTap:"PhotoSwipeToolbarOnClick",onBeforeShow:"PhotoSwipeToolbarOnBeforeShow",onShow:"PhotoSwipeToolbarOnShow",onBeforeHide:"PhotoSwipeToolbarOnBeforeHide",onHide:"PhotoSwipeToolbarOnHide"};b.Toolbar.getToolbar=function(){return'<div class="'+b.Toolbar.CssClasses.close+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.play+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+
'"></div></div><div class="'+b.Toolbar.CssClasses.previous+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.next+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div>'}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.ToolbarClass=d({toolbarEl:null,closeEl:null,playEl:null,previousEl:null,nextEl:null,captionEl:null,captionContentEl:null,currentCaption:null,settings:null,cache:null,timeout:null,isVisible:null,fadeOutHandler:null,touchStartHandler:null,touchMoveHandler:null,clickHandler:null,dispose:function(){var b;this.clearTimeout();this.removeEventHandlers();a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);
a.DOM.removeChild(this.toolbarEl,this.toolbarEl.parentNode);a.DOM.removeChild(this.captionEl,this.captionEl.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,d){var f;this.settings=d;this.cache=c;this.isVisible=!1;this.fadeOutHandler=this.onFadeOut.bind(this);this.touchStartHandler=this.onTouchStart.bind(this);this.touchMoveHandler=this.onTouchMove.bind(this);this.clickHandler=this.onClick.bind(this);f=b.Toolbar.CssClasses.toolbar;this.settings.captionAndToolbarFlipPosition&&
(f=f+" "+b.Toolbar.CssClasses.toolbarTop);this.toolbarEl=a.DOM.createElement("div",{"class":f},this.settings.getToolbar());a.DOM.setStyle(this.toolbarEl,{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.toolbarEl):a.DOM.appendChild(this.toolbarEl,this.settings.target);a.DOM.hide(this.toolbarEl);this.closeEl=a.DOM.find("."+b.Toolbar.CssClasses.close,this.toolbarEl)[0];this.settings.preventHide&&!a.isNothing(this.closeEl)&&a.DOM.hide(this.closeEl);
this.playEl=a.DOM.find("."+b.Toolbar.CssClasses.play,this.toolbarEl)[0];this.settings.preventSlideshow&&!a.isNothing(this.playEl)&&a.DOM.hide(this.playEl);this.nextEl=a.DOM.find("."+b.Toolbar.CssClasses.next,this.toolbarEl)[0];this.previousEl=a.DOM.find("."+b.Toolbar.CssClasses.previous,this.toolbarEl)[0];f=b.Toolbar.CssClasses.caption;this.settings.captionAndToolbarFlipPosition&&(f=f+" "+b.Toolbar.CssClasses.captionBottom);this.captionEl=a.DOM.createElement("div",{"class":f},"");a.DOM.setStyle(this.captionEl,
{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.captionEl):a.DOM.appendChild(this.captionEl,this.settings.target);a.DOM.hide(this.captionEl);this.captionContentEl=a.DOM.createElement("div",{"class":b.Toolbar.CssClasses.captionContent},"");a.DOM.appendChild(this.captionContentEl,this.captionEl);this.addEventHandlers()},resetPosition:function(){var b,d,f;this.settings.target===e?(this.settings.captionAndToolbarFlipPosition?
(d=a.DOM.windowScrollTop(),f=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.captionEl)):(d=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.toolbarEl),f=a.DOM.windowScrollTop()),b=a.DOM.windowWidth()):(this.settings.captionAndToolbarFlipPosition?(d="0",f=a.DOM.height(this.settings.target)-a.DOM.height(this.captionEl)):(d=a.DOM.height(this.settings.target)-a.DOM.height(this.toolbarEl),f=0),b=a.DOM.width(this.settings.target));a.DOM.setStyle(this.toolbarEl,{top:d+"px",
width:b});a.DOM.setStyle(this.captionEl,{top:f+"px",width:b})},toggleVisibility:function(a){this.isVisible?this.fadeOut():this.show(a)},show:function(c){a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);this.resetPosition();this.setToolbarStatus(c);a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeShow,target:this});this.showToolbar();this.setCaption(c);this.showCaption();this.isVisible=!0;this.setTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onShow,target:this})},setTimeout:function(){if(this.settings.captionAndToolbarAutoHideDelay>
0)this.clearTimeout(),this.timeout=e.setTimeout(this.fadeOut.bind(this),this.settings.captionAndToolbarAutoHideDelay)},clearTimeout:function(){if(!a.isNothing(this.timeout))e.clearTimeout(this.timeout),this.timeout=null},fadeOut:function(){this.clearTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeHide,target:this});a.Animation.fadeOut(this.toolbarEl,this.settings.fadeOutSpeed);a.Animation.fadeOut(this.captionEl,this.settings.fadeOutSpeed,this.fadeOutHandler);this.isVisible=!1},addEventHandlers:function(){a.Browser.isTouchSupported&&
(a.Browser.blackberry||a.Events.add(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.add(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.add(this.captionEl,"touchmove",this.touchMoveHandler));a.Events.add(this.toolbarEl,"click",this.clickHandler)},removeEventHandlers:function(){a.Browser.isTouchSupported&&(a.Browser.blackberry||a.Events.remove(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.remove(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.remove(this.captionEl,
"touchmove",this.touchMoveHandler));a.Events.remove(this.toolbarEl,"click",this.clickHandler)},handleTap:function(c){this.clearTimeout();var d;if(c.target===this.nextEl||a.DOM.isChildOf(c.target,this.nextEl))d=b.Toolbar.ToolbarAction.next;else if(c.target===this.previousEl||a.DOM.isChildOf(c.target,this.previousEl))d=b.Toolbar.ToolbarAction.previous;else if(c.target===this.closeEl||a.DOM.isChildOf(c.target,this.closeEl))d=b.Toolbar.ToolbarAction.close;else if(c.target===this.playEl||a.DOM.isChildOf(c.target,
this.playEl))d=b.Toolbar.ToolbarAction.play;this.setTimeout();if(a.isNothing(d))d=b.Toolbar.ToolbarAction.none;a.Events.fire(this,{type:b.Toolbar.EventTypes.onTap,target:this,action:d,tapTarget:c.target})},setCaption:function(b){a.DOM.removeChildren(this.captionContentEl);this.currentCaption=a.coalesce(this.cache.images[b].caption,"\u00a0");if(a.isObject(this.currentCaption))a.DOM.appendChild(this.currentCaption,this.captionContentEl);else{if(this.currentCaption==="")this.currentCaption="\u00a0";
a.DOM.appendText(this.currentCaption,this.captionContentEl)}this.currentCaption=this.currentCaption==="\u00a0"?"":this.currentCaption;this.resetPosition()},showToolbar:function(){a.DOM.setStyle(this.toolbarEl,{opacity:this.settings.captionAndToolbarOpacity});a.DOM.show(this.toolbarEl)},showCaption:function(){(this.currentCaption===""||this.captionContentEl.childNodes.length<1)&&!this.settings.captionAndToolbarShowEmptyCaptions?a.DOM.hide(this.captionEl):(a.DOM.setStyle(this.captionEl,{opacity:this.settings.captionAndToolbarOpacity}),
a.DOM.show(this.captionEl))},setToolbarStatus:function(c){this.settings.loop||(a.DOM.removeClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled),a.DOM.removeClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled),c>0&&c<this.cache.images.length-1||(c===0&&(a.isNothing(this.previousEl)||a.DOM.addClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled)),c===this.cache.images.length-1&&(a.isNothing(this.nextEl)||a.DOM.addClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled))))},onFadeOut:function(){a.DOM.hide(this.toolbarEl);
a.DOM.hide(this.captionEl);a.Events.fire(this,{type:b.Toolbar.EventTypes.onHide,target:this})},onTouchStart:function(b){b.preventDefault();a.Events.remove(this.toolbarEl,"click",this.clickHandler);this.handleTap(b)},onTouchMove:function(a){a.preventDefault()},onClick:function(a){a.preventDefault();this.handleTap(a)}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.UILayer");e.Code.PhotoSwipe.UILayer.CssClasses={uiLayer:"ps-uilayer"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.UILayer");var b=e.Code.PhotoSwipe;b.UILayer.UILayerClass=a.TouchElement.TouchElementClass.extend({el:null,settings:null,dispose:function(){var b;this.removeEventHandlers();a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c){this.settings=c;this.el=a.DOM.createElement("div",{"class":b.UILayer.CssClasses.uiLayer},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",
left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex,opacity:0});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);this.supr(this.el,{swipe:!0,move:!0,gesture:a.Browser.iOS,doubleTap:!0,preventDefaultTouchEvents:this.settings.preventDefaultTouchEvents})},resetPosition:function(){this.settings.target===e?a.DOM.setStyle(this.el,{top:a.DOM.windowScrollTop()+"px",width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}):a.DOM.setStyle(this.el,
{top:"0px",width:a.DOM.width(this.settings.target),height:a.DOM.height(this.settings.target)})},show:function(){this.resetPosition();a.DOM.show(this.el);this.addEventHandlers()},addEventHandlers:function(){this.supr()},removeEventHandlers:function(){this.supr()}})})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");e=e.Code.PhotoSwipe;e.ZoomPanRotate.CssClasses={zoomPanRotate:"ps-zoom-pan-rotate"};e.ZoomPanRotate.EventTypes={onTransform:"PhotoSwipeZoomPanRotateOnTransform"}})(window,window.klass,window.Code.Util);
(function(e,d,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");var b=e.Code.PhotoSwipe;b.ZoomPanRotate.ZoomPanRotateClass=d({el:null,settings:null,containerEl:null,imageEl:null,transformSettings:null,panStartingPoint:null,transformEl:null,dispose:function(){var b;a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,d,f){var i,j,h;this.settings=c;this.settings.target===e?(c=document.body,i=a.DOM.windowWidth(),j=a.DOM.windowHeight(),
h=a.DOM.windowScrollTop()+"px"):(c=this.settings.target,i=a.DOM.width(c),j=a.DOM.height(c),h="0px");this.imageEl=d.imageEl.cloneNode(!1);a.DOM.setStyle(this.imageEl,{zIndex:1});this.transformSettings={startingScale:1,scale:1,startingRotation:0,rotation:0,startingTranslateX:0,startingTranslateY:0,translateX:0,translateY:0};this.el=a.DOM.createElement("div",{"class":b.ZoomPanRotate.CssClasses.zoomPanRotate},"");a.DOM.setStyle(this.el,{left:0,top:h,position:"absolute",width:i,height:j,zIndex:this.settings.zIndex,
display:"block"});a.DOM.insertBefore(this.el,f.el,c);a.Browser.iOS?(this.containerEl=a.DOM.createElement("div","",""),a.DOM.setStyle(this.containerEl,{left:0,top:0,width:i,height:j,position:"absolute",zIndex:1}),a.DOM.appendChild(this.imageEl,this.containerEl),a.DOM.appendChild(this.containerEl,this.el),a.Animation.resetTranslate(this.containerEl),a.Animation.resetTranslate(this.imageEl),this.transformEl=this.containerEl):(a.DOM.appendChild(this.imageEl,this.el),this.transformEl=this.imageEl)},setStartingTranslateFromCurrentTransform:function(){var b=
a.coalesce(this.transformEl.style.webkitTransform,this.transformEl.style.MozTransform,this.transformEl.style.transform);if(!a.isNothing(b)&&(b=b.match(/translate\((.*?)\)/),!a.isNothing(b)))b=b[1].split(", "),this.transformSettings.startingTranslateX=e.parseInt(b[0],10),this.transformSettings.startingTranslateY=e.parseInt(b[1],10)},getScale:function(a){a*=this.transformSettings.startingScale;if(this.settings.minUserZoom!==0&&a<this.settings.minUserZoom)a=this.settings.minUserZoom;else if(this.settings.maxUserZoom!==
0&&a>this.settings.maxUserZoom)a=this.settings.maxUserZoom;return a},setStartingScaleAndRotation:function(a,b){this.transformSettings.startingScale=this.getScale(a);this.transformSettings.startingRotation=(this.transformSettings.startingRotation+b)%360},zoomRotate:function(a,b){this.transformSettings.scale=this.getScale(a);this.transformSettings.rotation=this.transformSettings.startingRotation+b;this.applyTransform()},panStart:function(a){this.setStartingTranslateFromCurrentTransform();this.panStartingPoint=
{x:a.x,y:a.y}},pan:function(a){var b=(a.y-this.panStartingPoint.y)/this.transformSettings.scale;this.transformSettings.translateX=this.transformSettings.startingTranslateX+(a.x-this.panStartingPoint.x)/this.transformSettings.scale;this.transformSettings.translateY=this.transformSettings.startingTranslateY+b;this.applyTransform()},zoomAndPanToPoint:function(b,d){if(this.settings.target===e){this.panStart({x:a.DOM.windowWidth()/2,y:a.DOM.windowHeight()/2});var f=(d.y-this.panStartingPoint.y)/this.transformSettings.scale;
this.transformSettings.translateX=(this.transformSettings.startingTranslateX+(d.x-this.panStartingPoint.x)/this.transformSettings.scale)*-1;this.transformSettings.translateY=(this.transformSettings.startingTranslateY+f)*-1}this.setStartingScaleAndRotation(b,0);this.transformSettings.scale=this.transformSettings.startingScale;this.transformSettings.rotation=0;this.applyTransform()},applyTransform:function(){var c=this.transformSettings.rotation%360,d=e.parseInt(this.transformSettings.translateX,10),
f=e.parseInt(this.transformSettings.translateY,10),i="scale("+this.transformSettings.scale+") rotate("+c+"deg) translate("+d+"px, "+f+"px)";a.DOM.setStyle(this.transformEl,{webkitTransform:i,MozTransform:i,msTransform:i,transform:i});a.Events.fire(this,{target:this,type:b.ZoomPanRotate.EventTypes.onTransform,scale:this.transformSettings.scale,rotation:this.transformSettings.rotation,rotationDegs:c,translateX:d,translateY:f})}})})(window,window.klass,window.Code.Util);
(function(e,d){d.registerNamespace("Code.PhotoSwipe");var a=e.Code.PhotoSwipe;a.CssClasses={buildingBody:"ps-building",activeBody:"ps-active"};a.EventTypes={onBeforeShow:"PhotoSwipeOnBeforeShow",onShow:"PhotoSwipeOnShow",onBeforeHide:"PhotoSwipeOnBeforeHide",onHide:"PhotoSwipeOnHide",onDisplayImage:"PhotoSwipeOnDisplayImage",onResetPosition:"PhotoSwipeOnResetPosition",onSlideshowStart:"PhotoSwipeOnSlideshowStart",onSlideshowStop:"PhotoSwipeOnSlideshowStop",onTouch:"PhotoSwipeOnTouch",onBeforeCaptionAndToolbarShow:"PhotoSwipeOnBeforeCaptionAndToolbarShow",
onCaptionAndToolbarShow:"PhotoSwipeOnCaptionAndToolbarShow",onBeforeCaptionAndToolbarHide:"PhotoSwipeOnBeforeCaptionAndToolbarHide",onCaptionAndToolbarHide:"PhotoSwipeOnCaptionAndToolbarHide",onToolbarTap:"PhotoSwipeOnToolbarTap",onBeforeZoomPanRotateShow:"PhotoSwipeOnBeforeZoomPanRotateShow",onZoomPanRotateShow:"PhotoSwipeOnZoomPanRotateShow",onBeforeZoomPanRotateHide:"PhotoSwipeOnBeforeZoomPanRotateHide",onZoomPanRotateHide:"PhotoSwipeOnZoomPanRotateHide",onZoomPanRotateTransform:"PhotoSwipeOnZoomPanRotateTransform"};
a.instances=[];a.activeInstances=[];a.setActivateInstance=function(b){if(d.arrayIndexOf(b.settings.target,a.activeInstances,"target")>-1)throw"Code.PhotoSwipe.activateInstance: Unable to active instance as another instance is already active for this target";a.activeInstances.push({target:b.settings.target,instance:b})};a.unsetActivateInstance=function(b){b=d.arrayIndexOf(b,a.activeInstances,"instance");a.activeInstances.splice(b,1)};a.attach=function(b,c,e){var f,i;f=a.createInstance(b,c,e);c=0;for(e=
b.length;c<e;c++)if(i=b[c],!d.isNothing(i.nodeType)&&i.nodeType===1)i.__photoSwipeClickHandler=a.onTriggerElementClick.bind(f),d.Events.remove(i,"click",i.__photoSwipeClickHandler),d.Events.add(i,"click",i.__photoSwipeClickHandler);return f};if(e.jQuery)e.jQuery.fn.photoSwipe=function(b,c){return a.attach(this,b,c)};a.detatch=function(b){var c,e,f;c=0;for(e=b.originalImages.length;c<e;c++)f=b.originalImages[c],!d.isNothing(f.nodeType)&&f.nodeType===1&&(d.Events.remove(f,"click",f.__photoSwipeClickHandler),
delete f.__photoSwipeClickHandler);a.disposeInstance(b)};a.createInstance=function(b,c,e){var f;if(d.isNothing(b))throw"Code.PhotoSwipe.attach: No images passed.";if(!d.isLikeArray(b))throw"Code.PhotoSwipe.createInstance: Images must be an array of elements or image urls.";if(b.length<1)throw"Code.PhotoSwipe.createInstance: No images to passed.";c=d.coalesce(c,{});f=a.getInstance(e);if(d.isNothing(f))f=new a.PhotoSwipeClass(b,c,e),a.instances.push(f);else throw'Code.PhotoSwipe.createInstance: Instance with id "'+
e+' already exists."';return f};a.disposeInstance=function(b){var c=a.getInstanceIndex(b);if(c<0)throw"Code.PhotoSwipe.disposeInstance: Unable to find instance to dispose.";b.dispose();a.instances.splice(c,1)};a.onTriggerElementClick=function(a){a.preventDefault();this.show(a.currentTarget)};a.getInstance=function(b){var c,d,e;c=0;for(d=a.instances.length;c<d;c++)if(e=a.instances[c],e.id===b)return e;return null};a.getInstanceIndex=function(b){var c,d,e=-1;c=0;for(d=a.instances.length;c<d;c++)if(a.instances[c]===
b){e=c;break}return e}})(window,window.Code.Util);
(function(e,d,a,b,c,g,f,i,j){a.registerNamespace("Code.PhotoSwipe");var h=e.Code.PhotoSwipe;h.PhotoSwipeClass=d({id:null,settings:null,isBackEventSupported:null,backButtonClicked:null,currentIndex:null,originalImages:null,mouseWheelStartTime:null,windowDimensions:null,cache:null,documentOverlay:null,carousel:null,uiLayer:null,toolbar:null,zoomPanRotate:null,windowOrientationChangeHandler:null,windowScrollHandler:null,windowHashChangeHandler:null,keyDownHandler:null,windowOrientationEventName:null,
uiLayerTouchHandler:null,carouselSlideByEndHandler:null,carouselSlideshowStartHandler:null,carouselSlideshowStopHandler:null,toolbarTapHandler:null,toolbarBeforeShowHandler:null,toolbarShowHandler:null,toolbarBeforeHideHandler:null,toolbarHideHandler:null,mouseWheelHandler:null,zoomPanRotateTransformHandler:null,_isResettingPosition:null,_uiWebViewResetPositionTimeout:null,dispose:function(){var b;a.Events.remove(this,h.EventTypes.onBeforeShow);a.Events.remove(this,h.EventTypes.onShow);a.Events.remove(this,
h.EventTypes.onBeforeHide);a.Events.remove(this,h.EventTypes.onHide);a.Events.remove(this,h.EventTypes.onDisplayImage);a.Events.remove(this,h.EventTypes.onResetPosition);a.Events.remove(this,h.EventTypes.onSlideshowStart);a.Events.remove(this,h.EventTypes.onSlideshowStop);a.Events.remove(this,h.EventTypes.onTouch);a.Events.remove(this,h.EventTypes.onBeforeCaptionAndToolbarShow);a.Events.remove(this,h.EventTypes.onCaptionAndToolbarShow);a.Events.remove(this,h.EventTypes.onBeforeCaptionAndToolbarHide);
a.Events.remove(this,h.EventTypes.onCaptionAndToolbarHide);a.Events.remove(this,h.EventTypes.onZoomPanRotateTransform);this.removeEventHandlers();a.isNothing(this.documentOverlay)||this.documentOverlay.dispose();a.isNothing(this.carousel)||this.carousel.dispose();a.isNothing(this.uiLayer)||this.uiLayer.dispose();a.isNothing(this.toolbar)||this.toolbar.dispose();this.destroyZoomPanRotate();a.isNothing(this.cache)||this.cache.dispose();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,
d,f){this.id=a.isNothing(f)?"PhotoSwipe"+(new Date).getTime().toString():f;this.originalImages=c;if(a.Browser.android&&!a.Browser.firefox&&e.navigator.userAgent.match(/Android (\d+.\d+)/).toString().replace(/^.*\,/,"")>=2.1)this.isBackEventSupported=!0;if(!this.isBackEventSupported)this.isBackEventSupported=a.objectHasProperty(e,"onhashchange");this.settings={fadeInSpeed:250,fadeOutSpeed:250,preventHide:!1,preventSlideshow:!1,zIndex:1E3,backButtonHideEnabled:!0,enableKeyboard:!0,enableMouseWheel:!0,
mouseWheelSpeed:350,autoStartSlideshow:!1,jQueryMobile:!a.isNothing(e.jQuery)&&!a.isNothing(e.jQuery.mobile),jQueryMobileDialogHash:"&ui-state=dialog",enableUIWebViewRepositionTimeout:!1,uiWebViewResetPositionDelay:500,target:e,preventDefaultTouchEvents:!0,loop:!0,slideSpeed:250,nextPreviousSlideSpeed:0,enableDrag:!0,swipeThreshold:50,swipeTimeThreshold:250,slideTimingFunction:"ease-out",slideshowDelay:3E3,doubleTapSpeed:250,margin:20,imageScaleMethod:"fit",captionAndToolbarHide:!1,captionAndToolbarFlipPosition:!1,
captionAndToolbarAutoHideDelay:5E3,captionAndToolbarOpacity:0.8,captionAndToolbarShowEmptyCaptions:!0,getToolbar:h.Toolbar.getToolbar,allowUserZoom:!0,allowRotationOnUserZoom:!1,maxUserZoom:5,minUserZoom:0.5,doubleTapZoomLevel:2.5,getImageSource:h.Cache.Functions.getImageSource,getImageCaption:h.Cache.Functions.getImageCaption,getImageMetaData:h.Cache.Functions.getImageMetaData,cacheMode:h.Cache.Mode.normal};a.extend(this.settings,d);this.settings.target!==e&&(d=a.DOM.getStyle(this.settings.target,
"position"),(d!=="relative"||d!=="absolute")&&a.DOM.setStyle(this.settings.target,"position","relative"));if(this.settings.target!==e)this.isBackEventSupported=!1,this.settings.backButtonHideEnabled=!1;else if(this.settings.preventHide)this.settings.backButtonHideEnabled=!1;this.cache=new b.CacheClass(c,this.settings)},show:function(b){var c,d;this.backButtonClicked=this._isResettingPosition=!1;if(a.isNumber(b))this.currentIndex=b;else{this.currentIndex=-1;c=0;for(d=this.originalImages.length;c<d;c++)if(this.originalImages[c]===
b){this.currentIndex=c;break}}if(this.currentIndex<0||this.currentIndex>this.originalImages.length-1)throw"Code.PhotoSwipe.PhotoSwipeClass.show: Starting index out of range";this.isAlreadyGettingPage=this.getWindowDimensions();h.setActivateInstance(this);this.windowDimensions=this.getWindowDimensions();this.settings.target===e?a.DOM.addClass(e.document.body,h.CssClasses.buildingBody):a.DOM.addClass(this.settings.target,h.CssClasses.buildingBody);this.createComponents();a.Events.fire(this,{type:h.EventTypes.onBeforeShow,
target:this});this.documentOverlay.fadeIn(this.settings.fadeInSpeed,this.onDocumentOverlayFadeIn.bind(this))},getWindowDimensions:function(){return{width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}},createComponents:function(){this.documentOverlay=new c.DocumentOverlayClass(this.settings);this.carousel=new g.CarouselClass(this.cache,this.settings);this.uiLayer=new i.UILayerClass(this.settings);if(!this.settings.captionAndToolbarHide)this.toolbar=new f.ToolbarClass(this.cache,this.settings)},
resetPosition:function(){if(!this._isResettingPosition){var b=this.getWindowDimensions();if(a.isNothing(this.windowDimensions)||!(b.width===this.windowDimensions.width&&b.height===this.windowDimensions.height))this._isResettingPosition=!0,this.windowDimensions=b,this.destroyZoomPanRotate(),this.documentOverlay.resetPosition(),this.carousel.resetPosition(),a.isNothing(this.toolbar)||this.toolbar.resetPosition(),this.uiLayer.resetPosition(),this._isResettingPosition=!1,a.Events.fire(this,{type:h.EventTypes.onResetPosition,
target:this})}},addEventHandler:function(b,c){a.Events.add(this,b,c)},addEventHandlers:function(){if(a.isNothing(this.windowOrientationChangeHandler))this.windowOrientationChangeHandler=this.onWindowOrientationChange.bind(this),this.windowScrollHandler=this.onWindowScroll.bind(this),this.keyDownHandler=this.onKeyDown.bind(this),this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.uiLayerTouchHandler=this.onUILayerTouch.bind(this),this.carouselSlideByEndHandler=this.onCarouselSlideByEnd.bind(this),
this.carouselSlideshowStartHandler=this.onCarouselSlideshowStart.bind(this),this.carouselSlideshowStopHandler=this.onCarouselSlideshowStop.bind(this),this.toolbarTapHandler=this.onToolbarTap.bind(this),this.toolbarBeforeShowHandler=this.onToolbarBeforeShow.bind(this),this.toolbarShowHandler=this.onToolbarShow.bind(this),this.toolbarBeforeHideHandler=this.onToolbarBeforeHide.bind(this),this.toolbarHideHandler=this.onToolbarHide.bind(this),this.mouseWheelHandler=this.onMouseWheel.bind(this),this.zoomPanRotateTransformHandler=
this.onZoomPanRotateTransform.bind(this);a.Browser.android?this.orientationEventName="resize":a.Browser.iOS&&!a.Browser.safari?a.Events.add(e.document.body,"orientationchange",this.windowOrientationChangeHandler):this.orientationEventName=!a.isNothing(e.onorientationchange)?"orientationchange":"resize";a.isNothing(this.orientationEventName)||a.Events.add(e,this.orientationEventName,this.windowOrientationChangeHandler);this.settings.target===e&&a.Events.add(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&
a.Events.add(e.document,"keydown",this.keyDownHandler);if(this.isBackEventSupported&&this.settings.backButtonHideEnabled)this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.settings.jQueryMobile?e.location.hash=this.settings.jQueryMobileDialogHash:(this.currentHistoryHashValue="PhotoSwipe"+(new Date).getTime().toString(),e.location.hash=this.currentHistoryHashValue),a.Events.add(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.add(e,"mousewheel",
this.mouseWheelHandler);a.Events.add(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);a.Events.add(this.carousel,g.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler);a.Events.add(this.carousel,g.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler);a.Events.add(this.carousel,g.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler);a.isNothing(this.toolbar)||(a.Events.add(this.toolbar,f.EventTypes.onTap,this.toolbarTapHandler),a.Events.add(this.toolbar,
f.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.add(this.toolbar,f.EventTypes.onShow,this.toolbarShowHandler),a.Events.add(this.toolbar,f.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.add(this.toolbar,f.EventTypes.onHide,this.toolbarHideHandler))},removeEventHandlers:function(){a.Browser.iOS&&!a.Browser.safari&&a.Events.remove(e.document.body,"orientationchange",this.windowOrientationChangeHandler);a.isNothing(this.orientationEventName)||a.Events.remove(e,this.orientationEventName,
this.windowOrientationChangeHandler);a.Events.remove(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&a.Events.remove(e.document,"keydown",this.keyDownHandler);this.isBackEventSupported&&this.settings.backButtonHideEnabled&&a.Events.remove(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.remove(e,"mousewheel",this.mouseWheelHandler);a.isNothing(this.uiLayer)||a.Events.remove(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);
a.isNothing(this.toolbar)||(a.Events.remove(this.carousel,g.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler),a.Events.remove(this.carousel,g.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler),a.Events.remove(this.carousel,g.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler));a.isNothing(this.toolbar)||(a.Events.remove(this.toolbar,f.EventTypes.onTap,this.toolbarTapHandler),a.Events.remove(this.toolbar,f.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.remove(this.toolbar,
f.EventTypes.onShow,this.toolbarShowHandler),a.Events.remove(this.toolbar,f.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.remove(this.toolbar,f.EventTypes.onHide,this.toolbarHideHandler))},hide:function(){if(!this.settings.preventHide){if(a.isNothing(this.documentOverlay))throw"Code.PhotoSwipe.PhotoSwipeClass.hide: PhotoSwipe instance is already hidden";if(a.isNothing(this.hiding)){this.clearUIWebViewResetPositionTimeout();this.destroyZoomPanRotate();this.removeEventHandlers();a.Events.fire(this,
{type:h.EventTypes.onBeforeHide,target:this});this.uiLayer.dispose();this.uiLayer=null;if(!a.isNothing(this.toolbar))this.toolbar.dispose(),this.toolbar=null;this.carousel.dispose();this.carousel=null;a.DOM.removeClass(e.document.body,h.CssClasses.activeBody);this.documentOverlay.dispose();this.documentOverlay=null;this._isResettingPosition=!1;h.unsetActivateInstance(this);a.Events.fire(this,{type:h.EventTypes.onHide,target:this});this.goBackInHistory()}}},goBackInHistory:function(){this.isBackEventSupported&&
this.settings.backButtonHideEnabled&&(this.backButtonClicked||e.history.back())},play:function(){!this.isZoomActive()&&!this.settings.preventSlideshow&&!a.isNothing(this.carousel)&&(!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut(),this.carousel.startSlideshow())},stop:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.stopSlideshow()},previous:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.previous()},next:function(){this.isZoomActive()||
a.isNothing(this.carousel)||this.carousel.next()},toggleToolbar:function(){this.isZoomActive()||a.isNothing(this.toolbar)||this.toolbar.toggleVisibility(this.currentIndex)},fadeOutToolbarIfVisible:function(){!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.settings.captionAndToolbarAutoHideDelay>0&&this.toolbar.fadeOut()},createZoomPanRotate:function(){this.stop();if(this.canUserZoom()&&!this.isZoomActive())a.Events.fire(this,h.EventTypes.onBeforeZoomPanRotateShow),this.zoomPanRotate=new j.ZoomPanRotateClass(this.settings,
this.cache.images[this.currentIndex],this.uiLayer),this.uiLayer.captureSettings.preventDefaultTouchEvents=!0,a.Events.add(this.zoomPanRotate,h.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),a.Events.fire(this,h.EventTypes.onZoomPanRotateShow),!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut()},destroyZoomPanRotate:function(){if(!a.isNothing(this.zoomPanRotate))a.Events.fire(this,h.EventTypes.onBeforeZoomPanRotateHide),a.Events.remove(this.zoomPanRotate,
h.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),this.zoomPanRotate.dispose(),this.zoomPanRotate=null,this.uiLayer.captureSettings.preventDefaultTouchEvents=this.settings.preventDefaultTouchEvents,a.Events.fire(this,h.EventTypes.onZoomPanRotateHide)},canUserZoom:function(){var b;if(a.Browser.msie){if(b=document.createElement("div"),a.isNothing(b.style.msTransform))return!1}else if(!a.Browser.isCSSTransformSupported)return!1;if(!this.settings.allowUserZoom)return!1;if(this.carousel.isSliding)return!1;
b=this.cache.images[this.currentIndex];if(a.isNothing(b))return!1;if(b.isLoading)return!1;return!0},isZoomActive:function(){return!a.isNothing(this.zoomPanRotate)},getCurrentImage:function(){return this.cache.images[this.currentIndex]},onDocumentOverlayFadeIn:function(){e.setTimeout(function(){var b=this.settings.target===e?e.document.body:this.settings.target;a.DOM.removeClass(b,h.CssClasses.buildingBody);a.DOM.addClass(b,h.CssClasses.activeBody);this.addEventHandlers();this.carousel.show(this.currentIndex);
this.uiLayer.show();this.settings.autoStartSlideshow?this.play():a.isNothing(this.toolbar)||this.toolbar.show(this.currentIndex);a.Events.fire(this,{type:h.EventTypes.onShow,target:this});this.setUIWebViewResetPositionTimeout()}.bind(this),250)},setUIWebViewResetPositionTimeout:function(){if(this.settings.enableUIWebViewRepositionTimeout&&a.Browser.iOS&&!a.Browser.safari)a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout),this._uiWebViewResetPositionTimeout=
e.setTimeout(function(){this.resetPosition();this.setUIWebViewResetPositionTimeout()}.bind(this),this.settings.uiWebViewResetPositionDelay)},clearUIWebViewResetPositionTimeout:function(){a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout)},onWindowScroll:function(){this.resetPosition()},onWindowOrientationChange:function(){this.resetPosition()},onWindowHashChange:function(){if(e.location.hash!=="#"+(this.settings.jQueryMobile?this.settings.jQueryMobileDialogHash:
this.currentHistoryHashValue))this.backButtonClicked=!0,this.hide()},onKeyDown:function(a){a.keyCode===37?(a.preventDefault(),this.previous()):a.keyCode===39?(a.preventDefault(),this.next()):a.keyCode===38||a.keyCode===40?a.preventDefault():a.keyCode===27?(a.preventDefault(),this.hide()):a.keyCode===32?(this.settings.hideToolbar?this.hide():this.toggleToolbar(),a.preventDefault()):a.keyCode===13&&(a.preventDefault(),this.play())},onUILayerTouch:function(b){if(this.isZoomActive())switch(b.action){case a.TouchElement.ActionTypes.gestureChange:this.zoomPanRotate.zoomRotate(b.scale,
this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.gestureEnd:this.zoomPanRotate.setStartingScaleAndRotation(b.scale,this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.touchStart:this.zoomPanRotate.panStart(b.point);break;case a.TouchElement.ActionTypes.touchMove:this.zoomPanRotate.pan(b.point);break;case a.TouchElement.ActionTypes.doubleTap:this.destroyZoomPanRotate();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeLeft:this.destroyZoomPanRotate();
this.next();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeRight:this.destroyZoomPanRotate(),this.previous(),this.toggleToolbar()}else switch(b.action){case a.TouchElement.ActionTypes.touchMove:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.fadeOutToolbarIfVisible();this.carousel.onTouch(b.action,b.point);break;case a.TouchElement.ActionTypes.touchStart:case a.TouchElement.ActionTypes.touchMoveEnd:this.carousel.onTouch(b.action,b.point);
break;case a.TouchElement.ActionTypes.tap:this.toggleToolbar();break;case a.TouchElement.ActionTypes.doubleTap:this.settings.target===e&&(b.point.x-=a.DOM.windowScrollLeft(),b.point.y-=a.DOM.windowScrollTop());var c=this.cache.images[this.currentIndex].imageEl,d=e.parseInt(a.DOM.getStyle(c,"top"),10),f=e.parseInt(a.DOM.getStyle(c,"left"),10),g=f+a.DOM.width(c),c=d+a.DOM.height(c);if(b.point.x<f)b.point.x=f;else if(b.point.x>g)b.point.x=g;if(b.point.y<d)b.point.y=d;else if(b.point.y>c)b.point.y=c;
this.createZoomPanRotate();this.isZoomActive()&&this.zoomPanRotate.zoomAndPanToPoint(this.settings.doubleTapZoomLevel,b.point);break;case a.TouchElement.ActionTypes.gestureStart:this.createZoomPanRotate()}a.Events.fire(this,{type:h.EventTypes.onTouch,target:this,point:b.point,action:b.action})},onCarouselSlideByEnd:function(b){this.currentIndex=b.cacheIndex;a.isNothing(this.toolbar)||(this.toolbar.setCaption(this.currentIndex),this.toolbar.setToolbarStatus(this.currentIndex));a.Events.fire(this,{type:h.EventTypes.onDisplayImage,
target:this,action:b.action,index:b.cacheIndex})},onToolbarTap:function(b){switch(b.action){case f.ToolbarAction.next:this.next();break;case f.ToolbarAction.previous:this.previous();break;case f.ToolbarAction.close:this.hide();break;case f.ToolbarAction.play:this.play()}a.Events.fire(this,{type:h.EventTypes.onToolbarTap,target:this,toolbarAction:b.action,tapTarget:b.tapTarget})},onMouseWheel:function(b){var c=a.Events.getWheelDelta(b);if(!(b.timeStamp-(this.mouseWheelStartTime||0)<this.settings.mouseWheelSpeed))this.mouseWheelStartTime=
b.timeStamp,this.settings.invertMouseWheel&&(c*=-1),c<0?this.next():c>0&&this.previous()},onCarouselSlideshowStart:function(){a.Events.fire(this,{type:h.EventTypes.onSlideshowStart,target:this})},onCarouselSlideshowStop:function(){a.Events.fire(this,{type:h.EventTypes.onSlideshowStop,target:this})},onToolbarBeforeShow:function(){a.Events.fire(this,{type:h.EventTypes.onBeforeCaptionAndToolbarShow,target:this})},onToolbarShow:function(){a.Events.fire(this,{type:h.EventTypes.onCaptionAndToolbarShow,
target:this})},onToolbarBeforeHide:function(){a.Events.fire(this,{type:h.EventTypes.onBeforeCaptionAndToolbarHide,target:this})},onToolbarHide:function(){a.Events.fire(this,{type:h.EventTypes.onCaptionAndToolbarHide,target:this})},onZoomPanRotateTransform:function(b){a.Events.fire(this,{target:this,type:h.EventTypes.onZoomPanRotateTransform,scale:b.scale,rotation:b.rotation,rotationDegs:b.rotationDegs,translateX:b.translateX,translateY:b.translateY})}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Cache,
window.Code.PhotoSwipe.DocumentOverlay,window.Code.PhotoSwipe.Carousel,window.Code.PhotoSwipe.Toolbar,window.Code.PhotoSwipe.UILayer,window.Code.PhotoSwipe.ZoomPanRotate);
function hashUtil() {
this.Storage = new Object();
this.RevStorage = new Object();
this.queueSeq = "";
this.Sep = ";;";
this.Pointer = 0;
this.Length=0;
return this;
}
hashUtil.prototype.put = function(key,value) {
if(this.hasKey(key)) this.remove(key);
this.queueSeq = key+this.Sep+this.queueSeq;
this.Storage[key] = value;
this.RevStorage[value] = key;
this.Length++;
}
hashUtil.prototype.push = function(key,value) {
this.put(key,value);
}
hashUtil.prototype.isEmpty = function() {
if(this.Length>0) return false;
return true;
}
hashUtil.prototype.pop = function() {
var l_key = this.getFirstKey();
var l_val = this.getFirst();
this.remove(l_key);
return l_val;
}
hashUtil.prototype.read = function() {
var ret = this.queueSeq.split(this.Sep);
if(typeof(ret[this.Pointer])=="undefined") return "";
var l_key = ret[this.Pointer++];
var l_val = this.get(l_key);
return l_val;
}
hashUtil.prototype.isEOF = function() {
if(this.Pointer>=this.Length) return true;
return false;
}
hashUtil.prototype.get = function(key) {
if(typeof this.Storage[key] == "undefined") return null;
else return this.Storage[key];
}
hashUtil.prototype.getKey = function(val) {
if(typeof this.RevStorage[val] == "undefined") return null;
return this.RevStorage[val];
}
hashUtil.prototype.mvToFirst = function(key) {
this.queueSeq = this.queueSeq.replace(key+this.Sep,"");
this.queueSeq = key+this.Sep+this.queueSeq;
}
hashUtil.prototype.getFirst = function() {
while(true) {
var key = this.queueSeq.substring(0,this.queueSeq.indexOf(this.Sep));
if(typeof this.Storage[key] == "undefined") {
this.queueSeq = this.queueSeq.substring(this.queueSeq.indexOf(this.Sep));
}
return this.Storage[key];
}
}
hashUtil.prototype.getFirstKey = function() {
while(true) {
var key = this.queueSeq.substring(0,this.queueSeq.indexOf(this.Sep));
if(typeof this.Storage[key] == "undefined") break;
return key;
}
}
hashUtil.prototype.hasKey = function(key) {
if(typeof this.Storage[key] == "undefined") return false;
return true;
}
hashUtil.prototype.hasValue = function(val) {
if(typeof this.RevStorage[val] == "undefined") return false;
return true;
}
hashUtil.prototype.remove = function(key) {
this.queueSeq = this.queueSeq.replace(key+this.Sep,"");
var val = this.Storage[key] ;
delete this.Storage[key];
delete this.RevStorage[val];
this.Length--;
}
hashUtil.prototype.reset = function() {
this.Storage = new Object();
this.RevStorage = new Object();
this.queueSeq = "";
this.Length=0;
this.Pointer = 0;
return this;
}
hashUtil.prototype.resetPointer = function() {
this.Pointer=0;
}
function Scroll(p_width,p_height,p_speed,p_direct){
this.ns = (document.layers)? true:false
this.ie = (document.all)? true:false
this.preTop = 0;
this.preLeft = 0;
this.moveLimit = 0;
this.currentLeft = 0;
this.currentTop = 0;
this.marquee_name = "";
this.template_name = "";
this.marquee_hidden = "";
this.marquee_width = p_width;
this.marquee_height = p_height;
this.marquee_speed = p_speed;
this.marquee_direct = p_direct;
this.setMarObject = setMarObject;
this.setTempObject = setTempObject;
this.setHiddenObject = setHiddenObject;
this.beginScroll = beginScroll;
this.scrollInit = scrollInit;
this.scrollUp = scrollUp;
this.scrollDown = scrollDown;
this.scrollRight = scrollRight;
this.scrollLeft = scrollLeft;
this.getObject = getObject;
return this;
}
function setTempObject(p_obj){
this.template_name = p_obj;
}
function setMarObject(p_obj){
this.marquee_name = p_obj;
}
function setHiddenObject(p_obj){
this.marquee_hidden = p_obj;
}
function getObject(p_obj){
if(typeof(p_obj)=="string") {
if(this.ie) return  eval("document.all."+p_obj);
else return document.getElementById(p_obj);//Joyce firefox method
} else {
if(this.ie) return eval("p_obj");
else return p_obj;
}
}
function beginScroll(){
var marq = this.getObject(this.marquee_name);
var temp = this.getObject(this.template_name);
with(marq){
style.height = this.marquee_height+'px';//Joyce add "px"
if(this.marquee_direct == 'up' || this.marquee_direct == 'down'){
style.overflowX="visible";
style.overflowY="hidden";
}
else{
style.overflowX="hidden";
style.overflowY="visible";
}
var myStopValue = this.marquee_hidden+ "= 1";
var myStartValue = this.marquee_hidden + "=0";
marq.onmouseover = new Function(myStopValue);
marq.onmouseout = new Function(myStartValue);
}
}
function scrollInit(){
var marq = this.getObject(this.marquee_name);
var temp = this.getObject(this.template_name);
var tmpstr;
var Nheight=this.marquee_height/4;
var Nwidth=this.marquee_width/4;
if(this.marquee_direct == "up" || this.marquee_direct == "down")
marq.innerHTML += "<span style='height:"+Nheight+"px;'></span>";
else
marq.innerHTML += "<span style='width:"+Nwidth+"px;'></span>";
tmpstr =  marq.innerHTML;
if(this.marquee_direct == "up" || this.marquee_direct == "down"){
marq.noWrap = false;
temp.noWrap = false;
var marq_height = temp.offsetHeight;
var counter = 0;
while(!marq_height) {
if(counter++>1000) { marq_height=100; break; }
marq_height = temp.offsetHeight;
}
while(marq_height < this.marquee_height){
marq_height += marq_height;
tmpstr+=marq.innerHTML;
}
}else{
marq.noWrap = true;
temp.noWrap = true;
var marq_width = temp.offsetWidth;
var counter = 0;
while(!marq_width) {
if(counter++>1000) { marq_width=100; break; }
marq_width = temp.offsetWidth;
}
while(marq_width < this.marquee_width){
marq_width += marq_width;
tmpstr+=marq.innerHTML;
}
}
if(this.marquee_direct == "up" || this.marquee_direct == "down"){
if(temp.offsetHeight<2*marq.offsetHeight)
marq.innerHTML = tmpstr+tmpstr;
else
marq.innerHTML = tmpstr;
}
else {
if(temp.offsetWidth<2*marq.offsetWidth)
marq.innerHTML = tmpstr+tmpstr;
else
marq.innerHTML = tmpstr;
}
temp.innerHTML = "";
var param_up = "this.scrollUp('"+this.marquee_name+"','"+this.template_name+"',"+this.marquee_hidden+","+this.marquee_height+")";
var param_down = "this.scrollDown('"+this.marquee_name+"','"+this.template_name+"','"+this.marquee_hidden+"',"+this.marquee_height+")";
var param_left = "this.scrollLeft('"+this.marquee_name+"','"+this.template_name+"',"+this.marquee_hidden+","+this.marquee_width+")";
var param_right = "this.scrollRight('"+this.marquee_name+"','"+this.template_name+"','"+this.marquee_hidden+"',"+this.marquee_width+")";
if(this.marquee_direct == "up")
setInterval(param_up,this.marquee_speed);
if(this.marquee_direct == "left")
setInterval(param_left,this.marquee_speed);
if(this.marquee_direct == "right")
setInterval(param_right,this.marquee_speed);
if(this.marquee_direct == "down")
setInterval(param_down,this.marquee_speed);
}
function scrollUp(p_marquee,p_template,p_stop,p_height){
var stop_value = eval(p_stop);
if(stop_value == 1) return;
var marq = this.getObject(p_marquee);
var temp = this.getObject(p_template);
this.preTop = marq.scrollTop;
marq.scrollTop += 1;
if(this.preTop == marq.scrollTop){
marq.scrollTop = temp.offsetHeight- p_height + 1;
marq.scrollTop += 1;
}
}
function scrollRight(p_marquee,p_template,p_stop,p_width){
var stop_value = eval(p_stop);
if(stop_value == 1) return;
var marq = this.getObject(p_marquee);
var temp = this.getObject(p_template);
this.preLeft = marq.scrollLeft;
marq.scrollLeft -= 1;
if(this.preLeft == marq.scrollLeft){
if(!this.moveLimit){
marq.scrollLeft = temp.offsetWidth*2;
this.moveLimit = marq.scrollLeft;
}
marq.scrollLeft = this.moveLimit - temp.offsetWidth + p_width;
marq.scrollLeft -= 1;
}
}
function scrollDown(p_marquee,p_template,p_stop,p_height){
var stop_value = eval(p_stop);
if(stop_value == 1) return;
var marq = this.getObject(p_marquee);
var temp = this.getObject(p_template);
this.preTop = marq.scrollTop;
marq.scrollTop -= 1;
if(this.preTop == marq.scrollTop){
if(!this.moveLimit){
marq.scrollTop = temp.offsetHeight*2;
this.moveLimit = marq.scrollTop;
}
marq.scrollTop = this.moveLimit - temp.offsetHeight + p_height;
marq.scrollTop -= 1;
}
}
function scrollLeft(p_marquee,p_template,p_stop,p_width){
var stop_value = eval(p_stop);
if(stop_value == 1) return;
var marq = this.getObject(p_marquee);
var temp = this.getObject(p_template);
marq.noWrap = true;
this.preLeft = marq.scrollLeft;
marq.scrollLeft = marq.scrollLeft + 1;
if(this.preLeft == marq.scrollLeft){
marq.scrollLeft = temp.offsetWidth - p_width + 1;
marq.scrollLeft += 1;
}
}
function begin_frame(p_id,p_pct, p_pix,p_height,p_speed) {
marq_frame = new Scroll(marqueWidth,p_height,p_speed,'up');
if(p_pct>0)
var marqueWidth = screen.width * p_pct * 0.82 / 100 ;
if(p_pix>0)
var marqueWidth = p_pix;
marq_frame.setMarObject(p_id);
marq_frame.setTempObject(p_id+"_temp");
marq_frame.setHiddenObject(p_id+"_stop");
marq_frame.beginScroll();
marq_frame.scrollInit();
}
function startScroll(marquee_id,p_height,p_speed) {
if(typeof(marquee_id)=="object") {
marquee_id = marquee_id.id;
}
eval(marquee_id+"_stop =0;");
eval(marquee_id+"_Width =0;");
eval("marq_"+marquee_id+" = new Scroll("+marquee_id+"_Width,p_height,p_speed,'up');");
eval("marq_"+marquee_id+".setMarObject('"+marquee_id+"');");
eval("marq_"+marquee_id+".setTempObject('"+marquee_id+"_temp');");
eval("marq_"+marquee_id+".setHiddenObject('"+marquee_id+"_stop');");
eval("marq_"+marquee_id+".beginScroll();");
eval("marq_"+marquee_id+".scrollInit();");
}
var initPhotoSwipeFromDOM = function(gallerySelector) {
var parseThumbnailElements = function(el) {
var thumbElements = el.childNodes,
numNodes = thumbElements.length,
items = [],
figureEl,
linkEl,
size,
item;
for(var i = 0; i < numNodes; i++) {
figureEl = thumbElements[i];
if(figureEl.nodeType !== 1) {
continue;
}
linkEl = figureEl.children[0];
size = linkEl.getAttribute('data-size').split('x');
item = {
src: linkEl.getAttribute('href'),
w: parseInt(size[0], 10),
h: parseInt(size[1], 10)
};
if(figureEl.children.length > 1) {
item.title = figureEl.children[1].innerHTML;
}
if(linkEl.children.length > 0) {
item.msrc = linkEl.children[0].getAttribute('src');
}
item.el = figureEl;
items.push(item);
}
return items;
};
var closest = function closest(el, fn) {
return el && ( fn(el) ? el : closest(el.parentNode, fn) );
};
var onThumbnailsClick = function(e) {
e = e || window.event;
e.preventDefault ? e.preventDefault() : e.returnValue = false;
var eTarget = e.target || e.srcElement;
var clickedListItem = closest(eTarget, function(el) {
return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
});
if(!clickedListItem) {
return;
}
var clickedGallery = clickedListItem.parentNode,
childNodes = clickedListItem.parentNode.childNodes,
numChildNodes = childNodes.length,
nodeIndex = 0,
index;
for (var i = 0; i < numChildNodes; i++) {
if(childNodes[i].nodeType !== 1) {
continue;
}
if(childNodes[i] === clickedListItem) {
index = nodeIndex;
break;
}
nodeIndex++;
}
if(index >= 0) {
openPhotoSwipe( index, clickedGallery );
}
return false;
};
var photoswipeParseHash = function() {
var hash = window.location.hash.substring(1),
params = {};
if(hash.length < 5) {
return params;
}
var vars = hash.split('&');
for (var i = 0; i < vars.length; i++) {
if(!vars[i]) {
continue;
}
var pair = vars[i].split('=');
if(pair.length < 2) {
continue;
}
params[pair[0]] = pair[1];
}
if(params.gid) {
params.gid = parseInt(params.gid, 10);
}
return params;
};
var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
var pswpElement = document.querySelectorAll('.pswp')[0],
gallery,
options,
items;
items = parseThumbnailElements(galleryElement);
options = {
galleryUID: galleryElement.getAttribute('data-pswp-uid'),
zoomEl: false,
shareEl: false,
getThumbBoundsFn: function(index) {
var thumbnail = items[index].el.getElementsByTagName('img')[0],
pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
rect = thumbnail.getBoundingClientRect();
return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
}
};
if(fromURL) {
if(options.galleryPIDs) {
for(var j = 0; j < items.length; j++) {
if(items[j].pid == index) {
options.index = j;
break;
}
}
} else {
options.index = parseInt(index, 10) - 1;
}
} else {
options.index = parseInt(index, 10);
}
if( isNaN(options.index) ) {
return;
}
if(disableAnimation) {
options.showAnimationDuration = 0;
}
gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
};
var galleryElements = document.querySelectorAll( gallerySelector );
for(var i = 0, l = galleryElements.length; i < l; i++) {
galleryElements[i].setAttribute('data-pswp-uid', i+1);
galleryElements[i].onclick = onThumbnailsClick;
}
var hashData = photoswipeParseHash();
if(hashData.pid && hashData.gid) {
openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
}
};
$(document).ready(function() {
initPhotoSwipeFromDOM('.mgallery');
});
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
(function(root,factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.PhotoSwipe=factory();}})(this,function(){'use strict';var PhotoSwipe=function(template,UiClass,items,options){var framework={features:null,bind:function(target,type,listener,unbind){var methodName=(unbind?'remove':'add')+'EventListener';type=type.split(' ');for(var i=0;i<type.length;i++){if(type[i]){target[methodName](type[i],listener,false);}}},isArray:function(obj){return(obj instanceof Array);},createEl:function(classes,tag){var el=document.createElement(tag||'div');if(classes){el.className=classes;}
return el;},getScrollY:function(){var yOffset=window.pageYOffset;return yOffset!==undefined?yOffset:document.documentElement.scrollTop;},unbind:function(target,type,listener){framework.bind(target,type,listener,true);},removeClass:function(el,className){var reg=new RegExp('(\\s|^)'+className+'(\\s|$)');el.className=el.className.replace(reg,' ').replace(/^\s\s*/,'').replace(/\s\s*$/,'');},addClass:function(el,className){if(!framework.hasClass(el,className)){el.className+=(el.className?' ':'')+className;}},hasClass:function(el,className){return el.className&&new RegExp('(^|\\s)'+className+'(\\s|$)').test(el.className);},getChildByClass:function(parentEl,childClassName){var node=parentEl.firstChild;while(node){if(framework.hasClass(node,childClassName)){return node;}
node=node.nextSibling;}},arraySearch:function(array,value,key){var i=array.length;while(i--){if(array[i][key]===value){return i;}}
return-1;},extend:function(o1,o2,preventOverwrite){for(var prop in o2){if(o2.hasOwnProperty(prop)){if(preventOverwrite&&o1.hasOwnProperty(prop)){continue;}
o1[prop]=o2[prop];}}},easing:{sine:{out:function(k){return Math.sin(k*(Math.PI/2));},inOut:function(k){return-(Math.cos(Math.PI*k)-1)/2;}},cubic:{out:function(k){return--k*k*k+1;}}},detectFeatures:function(){if(framework.features){return framework.features;}
var helperEl=framework.createEl(),helperStyle=helperEl.style,vendor='',features={};features.oldIE=document.all&&!document.addEventListener;features.touch='ontouchstart'in window;if(window.requestAnimationFrame){features.raf=window.requestAnimationFrame;features.caf=window.cancelAnimationFrame;}
features.pointerEvent=!!(window.PointerEvent)||navigator.msPointerEnabled;if(!features.pointerEvent){var ua=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var v=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(v&&v.length>0){v=parseInt(v[1],10);if(v>=1&&v<8){features.isOldIOSPhone=true;}}}
var match=ua.match(/Android\s([0-9\.]*)/);var androidversion=match?match[1]:0;androidversion=parseFloat(androidversion);if(androidversion>=1){if(androidversion<4.4){features.isOldAndroid=true;}
features.androidVersion=androidversion;}
features.isMobileOpera=/opera mini|opera mobi/i.test(ua);}
var styleChecks=['transform','perspective','animationName'],vendors=['','webkit','Moz','ms','O'],styleCheckItem,styleName;for(var i=0;i<4;i++){vendor=vendors[i];for(var a=0;a<3;a++){styleCheckItem=styleChecks[a];styleName=vendor+(vendor?styleCheckItem.charAt(0).toUpperCase()+styleCheckItem.slice(1):styleCheckItem);if(!features[styleCheckItem]&&styleName in helperStyle){features[styleCheckItem]=styleName;}}
if(vendor&&!features.raf){vendor=vendor.toLowerCase();features.raf=window[vendor+'RequestAnimationFrame'];if(features.raf){features.caf=window[vendor+'CancelAnimationFrame']||window[vendor+'CancelRequestAnimationFrame'];}}}
if(!features.raf){var lastTime=0;features.raf=function(fn){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){fn(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};features.caf=function(id){clearTimeout(id);};}
features.svg=!!document.createElementNS&&!!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;framework.features=features;return features;}};framework.detectFeatures();if(framework.features.oldIE){framework.bind=function(target,type,listener,unbind){type=type.split(' ');var methodName=(unbind?'detach':'attach')+'Event',evName,_handleEv=function(){listener.handleEvent.call(listener);};for(var i=0;i<type.length;i++){evName=type[i];if(evName){if(typeof listener==='object'&&listener.handleEvent){if(!unbind){listener['oldIE'+evName]=_handleEv;}else{if(!listener['oldIE'+evName]){return false;}}
target[methodName]('on'+evName,listener['oldIE'+evName]);}else{target[methodName]('on'+evName,listener);}}}};}
var self=this;var DOUBLE_TAP_RADIUS=25,NUM_HOLDERS=3;var _options={allowPanToNext:true,spacing:0.12,bgOpacity:1,mouseUsed:false,loop:true,pinchToClose:true,closeOnScroll:true,closeOnVerticalDrag:true,verticalDragRange:0.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:false,focus:true,escKey:true,arrowKeys:true,mainScrollEndFriction:0.35,panEndFriction:0.35,isClickableElement:function(el){return el.tagName==='A';},getDoubleTapZoom:function(isMouseClick,item){if(isMouseClick){return 1;}else{return item.initialZoomLevel<0.7?1:1.33;}},maxSpreadZoom:1.33,modal:true,scaleMode:'fit'};framework.extend(_options,options);var _getEmptyPoint=function(){return{x:0,y:0};};var _isOpen,_isDestroying,_closedByScroll,_currentItemIndex,_containerStyle,_containerShiftIndex,_currPanDist=_getEmptyPoint(),_startPanOffset=_getEmptyPoint(),_panOffset=_getEmptyPoint(),_upMoveEvents,_downEvents,_globalEventHandlers,_viewportSize={},_currZoomLevel,_startZoomLevel,_translatePrefix,_translateSufix,_updateSizeInterval,_itemsNeedUpdate,_currPositionIndex=0,_offset={},_slideSize=_getEmptyPoint(),_itemHolders,_prevItemIndex,_indexDiff=0,_dragStartEvent,_dragMoveEvent,_dragEndEvent,_dragCancelEvent,_transformKey,_pointerEventEnabled,_isFixedPosition=true,_likelyTouchDevice,_modules=[],_requestAF,_cancelAF,_initalClassName,_initalWindowScrollY,_oldIE,_currentWindowScrollY,_features,_windowVisibleSize={},_renderMaxResolution=false,_orientationChangeTimeout,_registerModule=function(name,module){framework.extend(self,module.publicMethods);_modules.push(name);},_getLoopedId=function(index){var numSlides=_getNumItems();if(index>numSlides-1){return index-numSlides;}else if(index<0){return numSlides+index;}
return index;},_listeners={},_listen=function(name,fn){if(!_listeners[name]){_listeners[name]=[];}
return _listeners[name].push(fn);},_shout=function(name){var listeners=_listeners[name];if(listeners){var args=Array.prototype.slice.call(arguments);args.shift();for(var i=0;i<listeners.length;i++){listeners[i].apply(self,args);}}},_getCurrentTime=function(){return new Date().getTime();},_applyBgOpacity=function(opacity){_bgOpacity=opacity;self.bg.style.opacity=opacity*_options.bgOpacity;},_applyZoomTransform=function(styleObj,x,y,zoom,item){if(!_renderMaxResolution||(item&&item!==self.currItem)){zoom=zoom/(item?item.fitRatio:self.currItem.fitRatio);}
styleObj[_transformKey]=_translatePrefix+x+'px, '+y+'px'+_translateSufix+' scale('+zoom+')';},_applyCurrentZoomPan=function(allowRenderResolution){if(_currZoomElementStyle){if(allowRenderResolution){if(_currZoomLevel>self.currItem.fitRatio){if(!_renderMaxResolution){_setImageSize(self.currItem,false,true);_renderMaxResolution=true;}}else{if(_renderMaxResolution){_setImageSize(self.currItem);_renderMaxResolution=false;}}}
_applyZoomTransform(_currZoomElementStyle,_panOffset.x,_panOffset.y,_currZoomLevel);}},_applyZoomPanToItem=function(item){if(item.container){_applyZoomTransform(item.container.style,item.initialPosition.x,item.initialPosition.y,item.initialZoomLevel,item);}},_setTranslateX=function(x,elStyle){elStyle[_transformKey]=_translatePrefix+x+'px, 0px'+_translateSufix;},_moveMainScroll=function(x,dragging){if(!_options.loop&&dragging){var newSlideIndexOffset=_currentItemIndex+(_slideSize.x*_currPositionIndex-x)/_slideSize.x,delta=Math.round(x-_mainScrollPos.x);if((newSlideIndexOffset<0&&delta>0)||(newSlideIndexOffset>=_getNumItems()-1&&delta<0)){x=_mainScrollPos.x+delta*_options.mainScrollEndFriction;}}
_mainScrollPos.x=x;_setTranslateX(x,_containerStyle);},_calculatePanOffset=function(axis,zoomLevel){var m=_midZoomPoint[axis]-_offset[axis];return _startPanOffset[axis]+_currPanDist[axis]+m-m*(zoomLevel/_startZoomLevel);},_equalizePoints=function(p1,p2){p1.x=p2.x;p1.y=p2.y;if(p2.id){p1.id=p2.id;}},_roundPoint=function(p){p.x=Math.round(p.x);p.y=Math.round(p.y);},_mouseMoveTimeout=null,_onFirstMouseMove=function(){if(_mouseMoveTimeout){framework.unbind(document,'mousemove',_onFirstMouseMove);framework.addClass(template,'pswp--has_mouse');_options.mouseUsed=true;_shout('mouseUsed');}
_mouseMoveTimeout=setTimeout(function(){_mouseMoveTimeout=null;},100);},_bindEvents=function(){framework.bind(document,'keydown',self);if(_features.transform){framework.bind(self.scrollWrap,'click',self);}
if(!_options.mouseUsed){framework.bind(document,'mousemove',_onFirstMouseMove);}
framework.bind(window,'resize scroll orientationchange',self);_shout('bindEvents');},_unbindEvents=function(){framework.unbind(window,'resize scroll orientationchange',self);framework.unbind(window,'scroll',_globalEventHandlers.scroll);framework.unbind(document,'keydown',self);framework.unbind(document,'mousemove',_onFirstMouseMove);if(_features.transform){framework.unbind(self.scrollWrap,'click',self);}
if(_isDragging){framework.unbind(window,_upMoveEvents,self);}
clearTimeout(_orientationChangeTimeout);_shout('unbindEvents');},_calculatePanBounds=function(zoomLevel,update){var bounds=_calculateItemSize(self.currItem,_viewportSize,zoomLevel);if(update){_currPanBounds=bounds;}
return bounds;},_getMinZoomLevel=function(item){if(!item){item=self.currItem;}
return item.initialZoomLevel;},_getMaxZoomLevel=function(item){if(!item){item=self.currItem;}
return item.w>0?_options.maxSpreadZoom:1;},_modifyDestPanOffset=function(axis,destPanBounds,destPanOffset,destZoomLevel){if(destZoomLevel===self.currItem.initialZoomLevel){destPanOffset[axis]=self.currItem.initialPosition[axis];return true;}else{destPanOffset[axis]=_calculatePanOffset(axis,destZoomLevel);if(destPanOffset[axis]>destPanBounds.min[axis]){destPanOffset[axis]=destPanBounds.min[axis];return true;}else if(destPanOffset[axis]<destPanBounds.max[axis]){destPanOffset[axis]=destPanBounds.max[axis];return true;}}
return false;},_setupTransforms=function(){if(_transformKey){var allow3dTransform=_features.perspective&&!_likelyTouchDevice;_translatePrefix='translate'+(allow3dTransform?'3d(':'(');_translateSufix=_features.perspective?', 0px)':')';return;}
_transformKey='left';framework.addClass(template,'pswp--ie');_setTranslateX=function(x,elStyle){elStyle.left=x+'px';};_applyZoomPanToItem=function(item){var zoomRatio=item.fitRatio>1?1:item.fitRatio,s=item.container.style,w=zoomRatio*item.w,h=zoomRatio*item.h;s.width=w+'px';s.height=h+'px';s.left=item.initialPosition.x+'px';s.top=item.initialPosition.y+'px';};_applyCurrentZoomPan=function(){if(_currZoomElementStyle){var s=_currZoomElementStyle,item=self.currItem,zoomRatio=item.fitRatio>1?1:item.fitRatio,w=zoomRatio*item.w,h=zoomRatio*item.h;s.width=w+'px';s.height=h+'px';s.left=_panOffset.x+'px';s.top=_panOffset.y+'px';}};},_onKeyDown=function(e){var keydownAction='';if(_options.escKey&&e.keyCode===27){keydownAction='close';}else if(_options.arrowKeys){if(e.keyCode===37){keydownAction='prev';}else if(e.keyCode===39){keydownAction='next';}}
if(keydownAction){if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey){if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}
self[keydownAction]();}}},_onGlobalClick=function(e){if(!e){return;}
if(_moved||_zoomStarted||_mainScrollAnimating||_verticalDragInitiated){e.preventDefault();e.stopPropagation();}},_updatePageScrollOffset=function(){self.setScrollOffset(0,framework.getScrollY());};var _animations={},_numAnimations=0,_stopAnimation=function(name){if(_animations[name]){if(_animations[name].raf){_cancelAF(_animations[name].raf);}
_numAnimations--;delete _animations[name];}},_registerStartAnimation=function(name){if(_animations[name]){_stopAnimation(name);}
if(!_animations[name]){_numAnimations++;_animations[name]={};}},_stopAllAnimations=function(){for(var prop in _animations){if(_animations.hasOwnProperty(prop)){_stopAnimation(prop);}}},_animateProp=function(name,b,endProp,d,easingFn,onUpdate,onComplete){var startAnimTime=_getCurrentTime(),t;_registerStartAnimation(name);var animloop=function(){if(_animations[name]){t=_getCurrentTime()-startAnimTime;if(t>=d){_stopAnimation(name);onUpdate(endProp);if(onComplete){onComplete();}
return;}
onUpdate((endProp-b)*easingFn(t/d)+b);_animations[name].raf=_requestAF(animloop);}};animloop();};var publicMethods={shout:_shout,listen:_listen,viewportSize:_viewportSize,options:_options,isMainScrollAnimating:function(){return _mainScrollAnimating;},getZoomLevel:function(){return _currZoomLevel;},getCurrentIndex:function(){return _currentItemIndex;},isDragging:function(){return _isDragging;},isZooming:function(){return _isZooming;},setScrollOffset:function(x,y){_offset.x=x;_currentWindowScrollY=_offset.y=y;_shout('updateScrollOffset',_offset);},applyZoomPan:function(zoomLevel,panX,panY,allowRenderResolution){_panOffset.x=panX;_panOffset.y=panY;_currZoomLevel=zoomLevel;_applyCurrentZoomPan(allowRenderResolution);},init:function(){if(_isOpen||_isDestroying){return;}
var i;self.framework=framework;self.template=template;self.bg=framework.getChildByClass(template,'pswp__bg');_initalClassName=template.className;_isOpen=true;_features=framework.detectFeatures();_requestAF=_features.raf;_cancelAF=_features.caf;_transformKey=_features.transform;_oldIE=_features.oldIE;self.scrollWrap=framework.getChildByClass(template,'pswp__scroll-wrap');self.container=framework.getChildByClass(self.scrollWrap,'pswp__container');_containerStyle=self.container.style;self.itemHolders=_itemHolders=[{el:self.container.children[0],wrap:0,index:-1},{el:self.container.children[1],wrap:0,index:-1},{el:self.container.children[2],wrap:0,index:-1}];_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='none';_setupTransforms();_globalEventHandlers={resize:self.updateSize,orientationchange:function(){clearTimeout(_orientationChangeTimeout);_orientationChangeTimeout=setTimeout(function(){if(_viewportSize.x!==self.scrollWrap.clientWidth){self.updateSize();}},500);},scroll:_updatePageScrollOffset,keydown:_onKeyDown,click:_onGlobalClick};var oldPhone=_features.isOldIOSPhone||_features.isOldAndroid||_features.isMobileOpera;if(!_features.animationName||!_features.transform||oldPhone){_options.showAnimationDuration=_options.hideAnimationDuration=0;}
for(i=0;i<_modules.length;i++){self['init'+_modules[i]]();}
if(UiClass){var ui=self.ui=new UiClass(self,framework);ui.init();}
_shout('firstUpdate');_currentItemIndex=_currentItemIndex||_options.index||0;if(isNaN(_currentItemIndex)||_currentItemIndex<0||_currentItemIndex>=_getNumItems()){_currentItemIndex=0;}
self.currItem=_getItemAt(_currentItemIndex);if(_features.isOldIOSPhone||_features.isOldAndroid){_isFixedPosition=false;}
template.setAttribute('aria-hidden','false');if(_options.modal){if(!_isFixedPosition){template.style.position='absolute';template.style.top=framework.getScrollY()+'px';}else{template.style.position='fixed';}}
if(_currentWindowScrollY===undefined){_shout('initialLayout');_currentWindowScrollY=_initalWindowScrollY=framework.getScrollY();}
var rootClasses='pswp--open ';if(_options.mainClass){rootClasses+=_options.mainClass+' ';}
if(_options.showHideOpacity){rootClasses+='pswp--animate_opacity ';}
rootClasses+=_likelyTouchDevice?'pswp--touch':'pswp--notouch';rootClasses+=_features.animationName?' pswp--css_animation':'';rootClasses+=_features.svg?' pswp--svg':'';framework.addClass(template,rootClasses);self.updateSize();_containerShiftIndex=-1;_indexDiff=null;for(i=0;i<NUM_HOLDERS;i++){_setTranslateX((i+_containerShiftIndex)*_slideSize.x,_itemHolders[i].el.style);}
if(!_oldIE){framework.bind(self.scrollWrap,_downEvents,self);}
_listen('initialZoomInEnd',function(){self.setContent(_itemHolders[0],_currentItemIndex-1);self.setContent(_itemHolders[2],_currentItemIndex+1);_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='block';if(_options.focus){template.focus();}
_bindEvents();});self.setContent(_itemHolders[1],_currentItemIndex);self.updateCurrItem();_shout('afterInit');if(!_isFixedPosition){_updateSizeInterval=setInterval(function(){if(!_numAnimations&&!_isDragging&&!_isZooming&&(_currZoomLevel===self.currItem.initialZoomLevel)){self.updateSize();}},1000);}
framework.addClass(template,'pswp--visible');},close:function(){if(!_isOpen){return;}
_isOpen=false;_isDestroying=true;_shout('close');_unbindEvents();_showOrHide(self.currItem,null,true,self.destroy);},destroy:function(){_shout('destroy');if(_showOrHideTimeout){clearTimeout(_showOrHideTimeout);}
template.setAttribute('aria-hidden','true');template.className=_initalClassName;if(_updateSizeInterval){clearInterval(_updateSizeInterval);}
framework.unbind(self.scrollWrap,_downEvents,self);framework.unbind(window,'scroll',self);_stopDragUpdateLoop();_stopAllAnimations();_listeners=null;},panTo:function(x,y,force){if(!force){if(x>_currPanBounds.min.x){x=_currPanBounds.min.x;}else if(x<_currPanBounds.max.x){x=_currPanBounds.max.x;}
if(y>_currPanBounds.min.y){y=_currPanBounds.min.y;}else if(y<_currPanBounds.max.y){y=_currPanBounds.max.y;}}
_panOffset.x=x;_panOffset.y=y;_applyCurrentZoomPan();},handleEvent:function(e){e=e||window.event;if(_globalEventHandlers[e.type]){_globalEventHandlers[e.type](e);}},goTo:function(index){index=_getLoopedId(index);var diff=index-_currentItemIndex;_indexDiff=diff;_currentItemIndex=index;self.currItem=_getItemAt(_currentItemIndex);_currPositionIndex-=diff;_moveMainScroll(_slideSize.x*_currPositionIndex);_stopAllAnimations();_mainScrollAnimating=false;self.updateCurrItem();},next:function(){self.goTo(_currentItemIndex+1);},prev:function(){self.goTo(_currentItemIndex-1);},updateCurrZoomItem:function(emulateSetContent){if(emulateSetContent){_shout('beforeChange',0);}
if(_itemHolders[1].el.children.length){var zoomElement=_itemHolders[1].el.children[0];if(framework.hasClass(zoomElement,'pswp__zoom-wrap')){_currZoomElementStyle=zoomElement.style;}else{_currZoomElementStyle=null;}}else{_currZoomElementStyle=null;}
_currPanBounds=self.currItem.bounds;_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;_panOffset.x=_currPanBounds.center.x;_panOffset.y=_currPanBounds.center.y;if(emulateSetContent){_shout('afterChange');}},invalidateCurrItems:function(){_itemsNeedUpdate=true;for(var i=0;i<NUM_HOLDERS;i++){if(_itemHolders[i].item){_itemHolders[i].item.needsUpdate=true;}}},updateCurrItem:function(beforeAnimation){if(_indexDiff===0){return;}
var diffAbs=Math.abs(_indexDiff),tempHolder;if(beforeAnimation&&diffAbs<2){return;}
self.currItem=_getItemAt(_currentItemIndex);_renderMaxResolution=false;_shout('beforeChange',_indexDiff);if(diffAbs>=NUM_HOLDERS){_containerShiftIndex+=_indexDiff+(_indexDiff>0?-NUM_HOLDERS:NUM_HOLDERS);diffAbs=NUM_HOLDERS;}
for(var i=0;i<diffAbs;i++){if(_indexDiff>0){tempHolder=_itemHolders.shift();_itemHolders[NUM_HOLDERS-1]=tempHolder;_containerShiftIndex++;_setTranslateX((_containerShiftIndex+2)*_slideSize.x,tempHolder.el.style);self.setContent(tempHolder,_currentItemIndex-diffAbs+i+1+1);}else{tempHolder=_itemHolders.pop();_itemHolders.unshift(tempHolder);_containerShiftIndex--;_setTranslateX(_containerShiftIndex*_slideSize.x,tempHolder.el.style);self.setContent(tempHolder,_currentItemIndex+diffAbs-i-1-1);}}
if(_currZoomElementStyle&&Math.abs(_indexDiff)===1){var prevItem=_getItemAt(_prevItemIndex);if(prevItem.initialZoomLevel!==_currZoomLevel){_calculateItemSize(prevItem,_viewportSize);_setImageSize(prevItem);_applyZoomPanToItem(prevItem);}}
_indexDiff=0;self.updateCurrZoomItem();_prevItemIndex=_currentItemIndex;_shout('afterChange');},updateSize:function(force){if(!_isFixedPosition&&_options.modal){var windowScrollY=framework.getScrollY();if(_currentWindowScrollY!==windowScrollY){template.style.top=windowScrollY+'px';_currentWindowScrollY=windowScrollY;}
if(!force&&_windowVisibleSize.x===window.innerWidth&&_windowVisibleSize.y===window.innerHeight){return;}
_windowVisibleSize.x=window.innerWidth;_windowVisibleSize.y=window.innerHeight;template.style.height=_windowVisibleSize.y+'px';}
_viewportSize.x=self.scrollWrap.clientWidth;_viewportSize.y=self.scrollWrap.clientHeight;_updatePageScrollOffset();_slideSize.x=_viewportSize.x+Math.round(_viewportSize.x*_options.spacing);_slideSize.y=_viewportSize.y;_moveMainScroll(_slideSize.x*_currPositionIndex);_shout('beforeResize');if(_containerShiftIndex!==undefined){var holder,item,hIndex;for(var i=0;i<NUM_HOLDERS;i++){holder=_itemHolders[i];_setTranslateX((i+_containerShiftIndex)*_slideSize.x,holder.el.style);hIndex=_currentItemIndex+i-1;if(_options.loop&&_getNumItems()>2){hIndex=_getLoopedId(hIndex);}
item=_getItemAt(hIndex);if(item&&(_itemsNeedUpdate||item.needsUpdate||!item.bounds)){self.cleanSlide(item);self.setContent(holder,hIndex);if(i===1){self.currItem=item;self.updateCurrZoomItem(true);}
item.needsUpdate=false;}else if(holder.index===-1&&hIndex>=0){self.setContent(holder,hIndex);}
if(item&&item.container){_calculateItemSize(item,_viewportSize);_setImageSize(item);_applyZoomPanToItem(item);}}
_itemsNeedUpdate=false;}
_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;_currPanBounds=self.currItem.bounds;if(_currPanBounds){_panOffset.x=_currPanBounds.center.x;_panOffset.y=_currPanBounds.center.y;_applyCurrentZoomPan(true);}
_shout('resize');},zoomTo:function(destZoomLevel,centerPoint,speed,easingFn,updateFn){if(centerPoint){_startZoomLevel=_currZoomLevel;_midZoomPoint.x=Math.abs(centerPoint.x)-_panOffset.x;_midZoomPoint.y=Math.abs(centerPoint.y)-_panOffset.y;_equalizePoints(_startPanOffset,_panOffset);}
var destPanBounds=_calculatePanBounds(destZoomLevel,false),destPanOffset={};_modifyDestPanOffset('x',destPanBounds,destPanOffset,destZoomLevel);_modifyDestPanOffset('y',destPanBounds,destPanOffset,destZoomLevel);var initialZoomLevel=_currZoomLevel;var initialPanOffset={x:_panOffset.x,y:_panOffset.y};_roundPoint(destPanOffset);var onUpdate=function(now){if(now===1){_currZoomLevel=destZoomLevel;_panOffset.x=destPanOffset.x;_panOffset.y=destPanOffset.y;}else{_currZoomLevel=(destZoomLevel-initialZoomLevel)*now+initialZoomLevel;_panOffset.x=(destPanOffset.x-initialPanOffset.x)*now+initialPanOffset.x;_panOffset.y=(destPanOffset.y-initialPanOffset.y)*now+initialPanOffset.y;}
if(updateFn){updateFn(now);}
_applyCurrentZoomPan(now===1);};if(speed){_animateProp('customZoomTo',0,1,speed,easingFn||framework.easing.sine.inOut,onUpdate);}else{onUpdate(1);}}};var MIN_SWIPE_DISTANCE=30,DIRECTION_CHECK_OFFSET=10;var _gestureStartTime,_gestureCheckSpeedTime,p={},p2={},delta={},_currPoint={},_startPoint={},_currPointers=[],_startMainScrollPos={},_releaseAnimData,_posPoints=[],_tempPoint={},_isZoomingIn,_verticalDragInitiated,_oldAndroidTouchEndTimeout,_currZoomedItemIndex=0,_centerPoint=_getEmptyPoint(),_lastReleaseTime=0,_isDragging,_isMultitouch,_zoomStarted,_moved,_dragAnimFrame,_mainScrollShifted,_currentPoints,_isZooming,_currPointsDistance,_startPointsDistance,_currPanBounds,_mainScrollPos=_getEmptyPoint(),_currZoomElementStyle,_mainScrollAnimating,_midZoomPoint=_getEmptyPoint(),_currCenterPoint=_getEmptyPoint(),_direction,_isFirstMove,_opacityChanged,_bgOpacity,_wasOverInitialZoom,_isEqualPoints=function(p1,p2){return p1.x===p2.x&&p1.y===p2.y;},_isNearbyPoints=function(touch0,touch1){return Math.abs(touch0.x-touch1.x)<DOUBLE_TAP_RADIUS&&Math.abs(touch0.y-touch1.y)<DOUBLE_TAP_RADIUS;},_calculatePointsDistance=function(p1,p2){_tempPoint.x=Math.abs(p1.x-p2.x);_tempPoint.y=Math.abs(p1.y-p2.y);return Math.sqrt(_tempPoint.x*_tempPoint.x+_tempPoint.y*_tempPoint.y);},_stopDragUpdateLoop=function(){if(_dragAnimFrame){_cancelAF(_dragAnimFrame);_dragAnimFrame=null;}},_dragUpdateLoop=function(){if(_isDragging){_dragAnimFrame=_requestAF(_dragUpdateLoop);_renderMovement();}},_canPan=function(){return!(_options.scaleMode==='fit'&&_currZoomLevel===self.currItem.initialZoomLevel);},_closestElement=function(el,fn){if(!el||el===document){return false;}
if(el.getAttribute('class')&&el.getAttribute('class').indexOf('pswp__scroll-wrap')>-1){return false;}
if(fn(el)){return el;}
return _closestElement(el.parentNode,fn);},_preventObj={},_preventDefaultEventBehaviour=function(e,isDown){_preventObj.prevent=!_closestElement(e.target,_options.isClickableElement);_shout('preventDragEvent',e,isDown,_preventObj);return _preventObj.prevent;},_convertTouchToPoint=function(touch,p){p.x=touch.pageX;p.y=touch.pageY;p.id=touch.identifier;return p;},_findCenterOfPoints=function(p1,p2,pCenter){pCenter.x=(p1.x+p2.x)*0.5;pCenter.y=(p1.y+p2.y)*0.5;},_pushPosPoint=function(time,x,y){if(time-_gestureCheckSpeedTime>50){var o=_posPoints.length>2?_posPoints.shift():{};o.x=x;o.y=y;_posPoints.push(o);_gestureCheckSpeedTime=time;}},_calculateVerticalDragOpacityRatio=function(){var yOffset=_panOffset.y-self.currItem.initialPosition.y;return 1-Math.abs(yOffset/(_viewportSize.y/2));},_ePoint1={},_ePoint2={},_tempPointsArr=[],_tempCounter,_getTouchPoints=function(e){while(_tempPointsArr.length>0){_tempPointsArr.pop();}
if(!_pointerEventEnabled){if(e.type.indexOf('touch')>-1){if(e.touches&&e.touches.length>0){_tempPointsArr[0]=_convertTouchToPoint(e.touches[0],_ePoint1);if(e.touches.length>1){_tempPointsArr[1]=_convertTouchToPoint(e.touches[1],_ePoint2);}}}else{_ePoint1.x=e.pageX;_ePoint1.y=e.pageY;_ePoint1.id='';_tempPointsArr[0]=_ePoint1;}}else{_tempCounter=0;_currPointers.forEach(function(p){if(_tempCounter===0){_tempPointsArr[0]=p;}else if(_tempCounter===1){_tempPointsArr[1]=p;}
_tempCounter++;});}
return _tempPointsArr;},_panOrMoveMainScroll=function(axis,delta){var panFriction,overDiff=0,newOffset=_panOffset[axis]+delta[axis],startOverDiff,dir=delta[axis]>0,newMainScrollPosition=_mainScrollPos.x+delta.x,mainScrollDiff=_mainScrollPos.x-_startMainScrollPos.x,newPanPos,newMainScrollPos;if(newOffset>_currPanBounds.min[axis]||newOffset<_currPanBounds.max[axis]){panFriction=_options.panEndFriction;}else{panFriction=1;}
newOffset=_panOffset[axis]+delta[axis]*panFriction;if(_options.allowPanToNext||_currZoomLevel===self.currItem.initialZoomLevel){if(!_currZoomElementStyle){newMainScrollPos=newMainScrollPosition;}else if(_direction==='h'&&axis==='x'&&!_zoomStarted){if(dir){if(newOffset>_currPanBounds.min[axis]){panFriction=_options.panEndFriction;overDiff=_currPanBounds.min[axis]-newOffset;startOverDiff=_currPanBounds.min[axis]-_startPanOffset[axis];}
if((startOverDiff<=0||mainScrollDiff<0)&&_getNumItems()>1){newMainScrollPos=newMainScrollPosition;if(mainScrollDiff<0&&newMainScrollPosition>_startMainScrollPos.x){newMainScrollPos=_startMainScrollPos.x;}}else{if(_currPanBounds.min.x!==_currPanBounds.max.x){newPanPos=newOffset;}}}else{if(newOffset<_currPanBounds.max[axis]){panFriction=_options.panEndFriction;overDiff=newOffset-_currPanBounds.max[axis];startOverDiff=_startPanOffset[axis]-_currPanBounds.max[axis];}
if((startOverDiff<=0||mainScrollDiff>0)&&_getNumItems()>1){newMainScrollPos=newMainScrollPosition;if(mainScrollDiff>0&&newMainScrollPosition<_startMainScrollPos.x){newMainScrollPos=_startMainScrollPos.x;}}else{if(_currPanBounds.min.x!==_currPanBounds.max.x){newPanPos=newOffset;}}}}
if(axis==='x'){if(newMainScrollPos!==undefined){_moveMainScroll(newMainScrollPos,true);if(newMainScrollPos===_startMainScrollPos.x){_mainScrollShifted=false;}else{_mainScrollShifted=true;}}
if(_currPanBounds.min.x!==_currPanBounds.max.x){if(newPanPos!==undefined){_panOffset.x=newPanPos;}else if(!_mainScrollShifted){_panOffset.x+=delta.x*panFriction;}}
return newMainScrollPos!==undefined;}}
if(!_mainScrollAnimating){if(!_mainScrollShifted){if(_currZoomLevel>self.currItem.fitRatio){_panOffset[axis]+=delta[axis]*panFriction;}}}},_onDragStart=function(e){if(e.type==='mousedown'&&e.button>0){return;}
if(_initialZoomRunning){e.preventDefault();return;}
if(_oldAndroidTouchEndTimeout&&e.type==='mousedown'){return;}
if(_preventDefaultEventBehaviour(e,true)){e.preventDefault();}
_shout('pointerDown');if(_pointerEventEnabled){var pointerIndex=framework.arraySearch(_currPointers,e.pointerId,'id');if(pointerIndex<0){pointerIndex=_currPointers.length;}
_currPointers[pointerIndex]={x:e.pageX,y:e.pageY,id:e.pointerId};}
var startPointsList=_getTouchPoints(e),numPoints=startPointsList.length;_currentPoints=null;_stopAllAnimations();if(!_isDragging||numPoints===1){_isDragging=_isFirstMove=true;framework.bind(window,_upMoveEvents,self);_isZoomingIn=_wasOverInitialZoom=_opacityChanged=_verticalDragInitiated=_mainScrollShifted=_moved=_isMultitouch=_zoomStarted=false;_direction=null;_shout('firstTouchStart',startPointsList);_equalizePoints(_startPanOffset,_panOffset);_currPanDist.x=_currPanDist.y=0;_equalizePoints(_currPoint,startPointsList[0]);_equalizePoints(_startPoint,_currPoint);_startMainScrollPos.x=_slideSize.x*_currPositionIndex;_posPoints=[{x:_currPoint.x,y:_currPoint.y}];_gestureCheckSpeedTime=_gestureStartTime=_getCurrentTime();_calculatePanBounds(_currZoomLevel,true);_stopDragUpdateLoop();_dragUpdateLoop();}
if(!_isZooming&&numPoints>1&&!_mainScrollAnimating&&!_mainScrollShifted){_startZoomLevel=_currZoomLevel;_zoomStarted=false;_isZooming=_isMultitouch=true;_currPanDist.y=_currPanDist.x=0;_equalizePoints(_startPanOffset,_panOffset);_equalizePoints(p,startPointsList[0]);_equalizePoints(p2,startPointsList[1]);_findCenterOfPoints(p,p2,_currCenterPoint);_midZoomPoint.x=Math.abs(_currCenterPoint.x)-_panOffset.x;_midZoomPoint.y=Math.abs(_currCenterPoint.y)-_panOffset.y;_currPointsDistance=_startPointsDistance=_calculatePointsDistance(p,p2);}},_onDragMove=function(e){e.preventDefault();if(_pointerEventEnabled){var pointerIndex=framework.arraySearch(_currPointers,e.pointerId,'id');if(pointerIndex>-1){var p=_currPointers[pointerIndex];p.x=e.pageX;p.y=e.pageY;}}
if(_isDragging){var touchesList=_getTouchPoints(e);if(!_direction&&!_moved&&!_isZooming){if(_mainScrollPos.x!==_slideSize.x*_currPositionIndex){_direction='h';}else{var diff=Math.abs(touchesList[0].x-_currPoint.x)-Math.abs(touchesList[0].y-_currPoint.y);if(Math.abs(diff)>=DIRECTION_CHECK_OFFSET){_direction=diff>0?'h':'v';_currentPoints=touchesList;}}}else{_currentPoints=touchesList;}}},_renderMovement=function(){if(!_currentPoints){return;}
var numPoints=_currentPoints.length;if(numPoints===0){return;}
_equalizePoints(p,_currentPoints[0]);delta.x=p.x-_currPoint.x;delta.y=p.y-_currPoint.y;if(_isZooming&&numPoints>1){_currPoint.x=p.x;_currPoint.y=p.y;if(!delta.x&&!delta.y&&_isEqualPoints(_currentPoints[1],p2)){return;}
_equalizePoints(p2,_currentPoints[1]);if(!_zoomStarted){_zoomStarted=true;_shout('zoomGestureStarted');}
var pointsDistance=_calculatePointsDistance(p,p2);var zoomLevel=_calculateZoomLevel(pointsDistance);if(zoomLevel>self.currItem.initialZoomLevel+self.currItem.initialZoomLevel/15){_wasOverInitialZoom=true;}
var zoomFriction=1,minZoomLevel=_getMinZoomLevel(),maxZoomLevel=_getMaxZoomLevel();if(zoomLevel<minZoomLevel){if(_options.pinchToClose&&!_wasOverInitialZoom&&_startZoomLevel<=self.currItem.initialZoomLevel){var minusDiff=minZoomLevel-zoomLevel;var percent=1-minusDiff/(minZoomLevel/1.2);_applyBgOpacity(percent);_shout('onPinchClose',percent);_opacityChanged=true;}else{zoomFriction=(minZoomLevel-zoomLevel)/minZoomLevel;if(zoomFriction>1){zoomFriction=1;}
zoomLevel=minZoomLevel-zoomFriction*(minZoomLevel/3);}}else if(zoomLevel>maxZoomLevel){zoomFriction=(zoomLevel-maxZoomLevel)/(minZoomLevel*6);if(zoomFriction>1){zoomFriction=1;}
zoomLevel=maxZoomLevel+zoomFriction*minZoomLevel;}
if(zoomFriction<0){zoomFriction=0;}
_currPointsDistance=pointsDistance;_findCenterOfPoints(p,p2,_centerPoint);_currPanDist.x+=_centerPoint.x-_currCenterPoint.x;_currPanDist.y+=_centerPoint.y-_currCenterPoint.y;_equalizePoints(_currCenterPoint,_centerPoint);_panOffset.x=_calculatePanOffset('x',zoomLevel);_panOffset.y=_calculatePanOffset('y',zoomLevel);_isZoomingIn=zoomLevel>_currZoomLevel;_currZoomLevel=zoomLevel;_applyCurrentZoomPan();}else{if(!_direction){return;}
if(_isFirstMove){_isFirstMove=false;if(Math.abs(delta.x)>=DIRECTION_CHECK_OFFSET){delta.x-=_currentPoints[0].x-_startPoint.x;}
if(Math.abs(delta.y)>=DIRECTION_CHECK_OFFSET){delta.y-=_currentPoints[0].y-_startPoint.y;}}
_currPoint.x=p.x;_currPoint.y=p.y;if(delta.x===0&&delta.y===0){return;}
if(_direction==='v'&&_options.closeOnVerticalDrag){if(!_canPan()){_currPanDist.y+=delta.y;_panOffset.y+=delta.y;var opacityRatio=_calculateVerticalDragOpacityRatio();_verticalDragInitiated=true;_shout('onVerticalDrag',opacityRatio);_applyBgOpacity(opacityRatio);_applyCurrentZoomPan();return;}}
_pushPosPoint(_getCurrentTime(),p.x,p.y);_moved=true;_currPanBounds=self.currItem.bounds;var mainScrollChanged=_panOrMoveMainScroll('x',delta);if(!mainScrollChanged){_panOrMoveMainScroll('y',delta);_roundPoint(_panOffset);_applyCurrentZoomPan();}}},_onDragRelease=function(e){if(_features.isOldAndroid){if(_oldAndroidTouchEndTimeout&&e.type==='mouseup'){return;}
if(e.type.indexOf('touch')>-1){clearTimeout(_oldAndroidTouchEndTimeout);_oldAndroidTouchEndTimeout=setTimeout(function(){_oldAndroidTouchEndTimeout=0;},600);}}
_shout('pointerUp');if(_preventDefaultEventBehaviour(e,false)){e.preventDefault();}
var releasePoint;if(_pointerEventEnabled){var pointerIndex=framework.arraySearch(_currPointers,e.pointerId,'id');if(pointerIndex>-1){releasePoint=_currPointers.splice(pointerIndex,1)[0];if(navigator.msPointerEnabled){var MSPOINTER_TYPES={4:'mouse',2:'touch',3:'pen'};releasePoint.type=MSPOINTER_TYPES[e.pointerType];if(!releasePoint.type){releasePoint.type=e.pointerType||'mouse';}}else{releasePoint.type=e.pointerType||'mouse';}}}
var touchList=_getTouchPoints(e),gestureType,numPoints=touchList.length;if(e.type==='mouseup'){numPoints=0;}
if(numPoints===2){_currentPoints=null;return true;}
if(numPoints===1){_equalizePoints(_startPoint,touchList[0]);}
if(numPoints===0&&!_direction&&!_mainScrollAnimating){if(!releasePoint){if(e.type==='mouseup'){releasePoint={x:e.pageX,y:e.pageY,type:'mouse'};}else if(e.changedTouches&&e.changedTouches[0]){releasePoint={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:'touch'};}}
_shout('touchRelease',e,releasePoint);}
var releaseTimeDiff=-1;if(numPoints===0){_isDragging=false;framework.unbind(window,_upMoveEvents,self);_stopDragUpdateLoop();if(_isZooming){releaseTimeDiff=0;}else if(_lastReleaseTime!==-1){releaseTimeDiff=_getCurrentTime()-_lastReleaseTime;}}
_lastReleaseTime=numPoints===1?_getCurrentTime():-1;if(releaseTimeDiff!==-1&&releaseTimeDiff<150){gestureType='zoom';}else{gestureType='swipe';}
if(_isZooming&&numPoints<2){_isZooming=false;if(numPoints===1){gestureType='zoomPointerUp';}
_shout('zoomGestureEnded');}
_currentPoints=null;if(!_moved&&!_zoomStarted&&!_mainScrollAnimating&&!_verticalDragInitiated){return;}
_stopAllAnimations();if(!_releaseAnimData){_releaseAnimData=_initDragReleaseAnimationData();}
_releaseAnimData.calculateSwipeSpeed('x');if(_verticalDragInitiated){var opacityRatio=_calculateVerticalDragOpacityRatio();if(opacityRatio<_options.verticalDragRange){self.close();}else{var initalPanY=_panOffset.y,initialBgOpacity=_bgOpacity;_animateProp('verticalDrag',0,1,300,framework.easing.cubic.out,function(now){_panOffset.y=(self.currItem.initialPosition.y-initalPanY)*now+initalPanY;_applyBgOpacity((1-initialBgOpacity)*now+initialBgOpacity);_applyCurrentZoomPan();});_shout('onVerticalDrag',1);}
return;}
if((_mainScrollShifted||_mainScrollAnimating)&&numPoints===0){var itemChanged=_finishSwipeMainScrollGesture(gestureType,_releaseAnimData);if(itemChanged){return;}
gestureType='zoomPointerUp';}
if(_mainScrollAnimating){return;}
if(gestureType!=='swipe'){_completeZoomGesture();return;}
if(!_mainScrollShifted&&_currZoomLevel>self.currItem.fitRatio){_completePanGesture(_releaseAnimData);}},_initDragReleaseAnimationData=function(){var lastFlickDuration,tempReleasePos;var s={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(axis){if(_posPoints.length>1){lastFlickDuration=_getCurrentTime()-_gestureCheckSpeedTime+50;tempReleasePos=_posPoints[_posPoints.length-2][axis];}else{lastFlickDuration=_getCurrentTime()-_gestureStartTime;tempReleasePos=_startPoint[axis];}
s.lastFlickOffset[axis]=_currPoint[axis]-tempReleasePos;s.lastFlickDist[axis]=Math.abs(s.lastFlickOffset[axis]);if(s.lastFlickDist[axis]>20){s.lastFlickSpeed[axis]=s.lastFlickOffset[axis]/lastFlickDuration;}else{s.lastFlickSpeed[axis]=0;}
if(Math.abs(s.lastFlickSpeed[axis])<0.1){s.lastFlickSpeed[axis]=0;}
s.slowDownRatio[axis]=0.95;s.slowDownRatioReverse[axis]=1-s.slowDownRatio[axis];s.speedDecelerationRatio[axis]=1;},calculateOverBoundsAnimOffset:function(axis,speed){if(!s.backAnimStarted[axis]){if(_panOffset[axis]>_currPanBounds.min[axis]){s.backAnimDestination[axis]=_currPanBounds.min[axis];}else if(_panOffset[axis]<_currPanBounds.max[axis]){s.backAnimDestination[axis]=_currPanBounds.max[axis];}
if(s.backAnimDestination[axis]!==undefined){s.slowDownRatio[axis]=0.7;s.slowDownRatioReverse[axis]=1-s.slowDownRatio[axis];if(s.speedDecelerationRatioAbs[axis]<0.05){s.lastFlickSpeed[axis]=0;s.backAnimStarted[axis]=true;_animateProp('bounceZoomPan'+axis,_panOffset[axis],s.backAnimDestination[axis],speed||300,framework.easing.sine.out,function(pos){_panOffset[axis]=pos;_applyCurrentZoomPan();});}}}},calculateAnimOffset:function(axis){if(!s.backAnimStarted[axis]){s.speedDecelerationRatio[axis]=s.speedDecelerationRatio[axis]*(s.slowDownRatio[axis]+
s.slowDownRatioReverse[axis]-
s.slowDownRatioReverse[axis]*s.timeDiff/10);s.speedDecelerationRatioAbs[axis]=Math.abs(s.lastFlickSpeed[axis]*s.speedDecelerationRatio[axis]);s.distanceOffset[axis]=s.lastFlickSpeed[axis]*s.speedDecelerationRatio[axis]*s.timeDiff;_panOffset[axis]+=s.distanceOffset[axis];}},panAnimLoop:function(){if(_animations.zoomPan){_animations.zoomPan.raf=_requestAF(s.panAnimLoop);s.now=_getCurrentTime();s.timeDiff=s.now-s.lastNow;s.lastNow=s.now;s.calculateAnimOffset('x');s.calculateAnimOffset('y');_applyCurrentZoomPan();s.calculateOverBoundsAnimOffset('x');s.calculateOverBoundsAnimOffset('y');if(s.speedDecelerationRatioAbs.x<0.05&&s.speedDecelerationRatioAbs.y<0.05){_panOffset.x=Math.round(_panOffset.x);_panOffset.y=Math.round(_panOffset.y);_applyCurrentZoomPan();_stopAnimation('zoomPan');return;}}}};return s;},_completePanGesture=function(animData){animData.calculateSwipeSpeed('y');_currPanBounds=self.currItem.bounds;animData.backAnimDestination={};animData.backAnimStarted={};if(Math.abs(animData.lastFlickSpeed.x)<=0.05&&Math.abs(animData.lastFlickSpeed.y)<=0.05){animData.speedDecelerationRatioAbs.x=animData.speedDecelerationRatioAbs.y=0;animData.calculateOverBoundsAnimOffset('x');animData.calculateOverBoundsAnimOffset('y');return true;}
_registerStartAnimation('zoomPan');animData.lastNow=_getCurrentTime();animData.panAnimLoop();},_finishSwipeMainScrollGesture=function(gestureType,_releaseAnimData){var itemChanged;if(!_mainScrollAnimating){_currZoomedItemIndex=_currentItemIndex;}
var itemsDiff;if(gestureType==='swipe'){var totalShiftDist=_currPoint.x-_startPoint.x,isFastLastFlick=_releaseAnimData.lastFlickDist.x<10;if(totalShiftDist>MIN_SWIPE_DISTANCE&&(isFastLastFlick||_releaseAnimData.lastFlickOffset.x>20)){itemsDiff=-1;}else if(totalShiftDist<-MIN_SWIPE_DISTANCE&&(isFastLastFlick||_releaseAnimData.lastFlickOffset.x<-20)){itemsDiff=1;}}
var nextCircle;if(itemsDiff){_currentItemIndex+=itemsDiff;if(_currentItemIndex<0){_currentItemIndex=_options.loop?_getNumItems()-1:0;nextCircle=true;}else if(_currentItemIndex>=_getNumItems()){_currentItemIndex=_options.loop?0:_getNumItems()-1;nextCircle=true;}
if(!nextCircle||_options.loop){_indexDiff+=itemsDiff;_currPositionIndex-=itemsDiff;itemChanged=true;}}
var animateToX=_slideSize.x*_currPositionIndex;var animateToDist=Math.abs(animateToX-_mainScrollPos.x);var finishAnimDuration;if(!itemChanged&&animateToX>_mainScrollPos.x!==_releaseAnimData.lastFlickSpeed.x>0){finishAnimDuration=333;}else{finishAnimDuration=Math.abs(_releaseAnimData.lastFlickSpeed.x)>0?animateToDist/Math.abs(_releaseAnimData.lastFlickSpeed.x):333;finishAnimDuration=Math.min(finishAnimDuration,400);finishAnimDuration=Math.max(finishAnimDuration,250);}
if(_currZoomedItemIndex===_currentItemIndex){itemChanged=false;}
_mainScrollAnimating=true;_shout('mainScrollAnimStart');_animateProp('mainScroll',_mainScrollPos.x,animateToX,finishAnimDuration,framework.easing.cubic.out,_moveMainScroll,function(){_stopAllAnimations();_mainScrollAnimating=false;_currZoomedItemIndex=-1;if(itemChanged||_currZoomedItemIndex!==_currentItemIndex){self.updateCurrItem();}
_shout('mainScrollAnimComplete');});if(itemChanged){self.updateCurrItem(true);}
return itemChanged;},_calculateZoomLevel=function(touchesDistance){return 1/_startPointsDistance*touchesDistance*_startZoomLevel;},_completeZoomGesture=function(){var destZoomLevel=_currZoomLevel,minZoomLevel=_getMinZoomLevel(),maxZoomLevel=_getMaxZoomLevel();if(_currZoomLevel<minZoomLevel){destZoomLevel=minZoomLevel;}else if(_currZoomLevel>maxZoomLevel){destZoomLevel=maxZoomLevel;}
var destOpacity=1,onUpdate,initialOpacity=_bgOpacity;if(_opacityChanged&&!_isZoomingIn&&!_wasOverInitialZoom&&_currZoomLevel<minZoomLevel){self.close();return true;}
if(_opacityChanged){onUpdate=function(now){_applyBgOpacity((destOpacity-initialOpacity)*now+initialOpacity);};}
self.zoomTo(destZoomLevel,0,200,framework.easing.cubic.out,onUpdate);return true;};_registerModule('Gestures',{publicMethods:{initGestures:function(){var addEventNames=function(pref,down,move,up,cancel){_dragStartEvent=pref+down;_dragMoveEvent=pref+move;_dragEndEvent=pref+up;if(cancel){_dragCancelEvent=pref+cancel;}else{_dragCancelEvent='';}};_pointerEventEnabled=_features.pointerEvent;if(_pointerEventEnabled&&_features.touch){_features.touch=false;}
if(_pointerEventEnabled){if(navigator.msPointerEnabled){addEventNames('MSPointer','Down','Move','Up','Cancel');}else{addEventNames('pointer','down','move','up','cancel');}}else if(_features.touch){addEventNames('touch','start','move','end','cancel');_likelyTouchDevice=true;}else{addEventNames('mouse','down','move','up');}
_upMoveEvents=_dragMoveEvent+' '+_dragEndEvent+' '+_dragCancelEvent;_downEvents=_dragStartEvent;if(_pointerEventEnabled&&!_likelyTouchDevice){_likelyTouchDevice=(navigator.maxTouchPoints>1)||(navigator.msMaxTouchPoints>1);}
self.likelyTouchDevice=_likelyTouchDevice;_globalEventHandlers[_dragStartEvent]=_onDragStart;_globalEventHandlers[_dragMoveEvent]=_onDragMove;_globalEventHandlers[_dragEndEvent]=_onDragRelease;if(_dragCancelEvent){_globalEventHandlers[_dragCancelEvent]=_globalEventHandlers[_dragEndEvent];}
if(_features.touch){_downEvents+=' mousedown';_upMoveEvents+=' mousemove mouseup';_globalEventHandlers.mousedown=_globalEventHandlers[_dragStartEvent];_globalEventHandlers.mousemove=_globalEventHandlers[_dragMoveEvent];_globalEventHandlers.mouseup=_globalEventHandlers[_dragEndEvent];}
if(!_likelyTouchDevice){_options.allowPanToNext=false;}}}});var _showOrHideTimeout,_showOrHide=function(item,img,out,completeFn){if(_showOrHideTimeout){clearTimeout(_showOrHideTimeout);}
_initialZoomRunning=true;_initialContentSet=true;var thumbBounds;if(item.initialLayout){thumbBounds=item.initialLayout;item.initialLayout=null;}else{thumbBounds=_options.getThumbBoundsFn&&_options.getThumbBoundsFn(_currentItemIndex);}
var duration=out?_options.hideAnimationDuration:_options.showAnimationDuration;var onComplete=function(){_stopAnimation('initialZoom');if(!out){_applyBgOpacity(1);if(img){img.style.display='block';}
framework.addClass(template,'pswp--animated-in');_shout('initialZoom'+(out?'OutEnd':'InEnd'));}else{self.template.removeAttribute('style');self.bg.removeAttribute('style');}
if(completeFn){completeFn();}
_initialZoomRunning=false;};if(!duration||!thumbBounds||thumbBounds.x===undefined){_shout('initialZoom'+(out?'Out':'In'));_currZoomLevel=item.initialZoomLevel;_equalizePoints(_panOffset,item.initialPosition);_applyCurrentZoomPan();template.style.opacity=out?0:1;_applyBgOpacity(1);if(duration){setTimeout(function(){onComplete();},duration);}else{onComplete();}
return;}
var startAnimation=function(){var closeWithRaf=_closedByScroll,fadeEverything=!self.currItem.src||self.currItem.loadError||_options.showHideOpacity;if(item.miniImg){item.miniImg.style.webkitBackfaceVisibility='hidden';}
if(!out){_currZoomLevel=thumbBounds.w/item.w;_panOffset.x=thumbBounds.x;_panOffset.y=thumbBounds.y-_initalWindowScrollY;self[fadeEverything?'template':'bg'].style.opacity=0.001;_applyCurrentZoomPan();}
_registerStartAnimation('initialZoom');if(out&&!closeWithRaf){framework.removeClass(template,'pswp--animated-in');}
if(fadeEverything){if(out){framework[(closeWithRaf?'remove':'add')+'Class'](template,'pswp--animate_opacity');}else{setTimeout(function(){framework.addClass(template,'pswp--animate_opacity');},30);}}
_showOrHideTimeout=setTimeout(function(){_shout('initialZoom'+(out?'Out':'In'));if(!out){_currZoomLevel=item.initialZoomLevel;_equalizePoints(_panOffset,item.initialPosition);_applyCurrentZoomPan();_applyBgOpacity(1);if(fadeEverything){template.style.opacity=1;}else{_applyBgOpacity(1);}
_showOrHideTimeout=setTimeout(onComplete,duration+20);}else{var destZoomLevel=thumbBounds.w/item.w,initialPanOffset={x:_panOffset.x,y:_panOffset.y},initialZoomLevel=_currZoomLevel,initalBgOpacity=_bgOpacity,onUpdate=function(now){if(now===1){_currZoomLevel=destZoomLevel;_panOffset.x=thumbBounds.x;_panOffset.y=thumbBounds.y-_currentWindowScrollY;}else{_currZoomLevel=(destZoomLevel-initialZoomLevel)*now+initialZoomLevel;_panOffset.x=(thumbBounds.x-initialPanOffset.x)*now+initialPanOffset.x;_panOffset.y=(thumbBounds.y-_currentWindowScrollY-initialPanOffset.y)*now+initialPanOffset.y;}
_applyCurrentZoomPan();if(fadeEverything){template.style.opacity=1-now;}else{_applyBgOpacity(initalBgOpacity-now*initalBgOpacity);}};if(closeWithRaf){_animateProp('initialZoom',0,1,duration,framework.easing.cubic.out,onUpdate,onComplete);}else{onUpdate(1);_showOrHideTimeout=setTimeout(onComplete,duration+20);}}},out?25:90);};startAnimation();};var _items,_tempPanAreaSize={},_imagesToAppendPool=[],_initialContentSet,_initialZoomRunning,_controllerDefaultOptions={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:false,preload:[1,1],getNumItemsFn:function(){return _items.length;}};var _getItemAt,_getNumItems,_initialIsLoop,_getZeroBounds=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}};},_calculateSingleItemPanBounds=function(item,realPanElementW,realPanElementH){var bounds=item.bounds;bounds.center.x=Math.round((_tempPanAreaSize.x-realPanElementW)/2);bounds.center.y=Math.round((_tempPanAreaSize.y-realPanElementH)/2)+item.vGap.top;bounds.max.x=(realPanElementW>_tempPanAreaSize.x)?Math.round(_tempPanAreaSize.x-realPanElementW):bounds.center.x;bounds.max.y=(realPanElementH>_tempPanAreaSize.y)?Math.round(_tempPanAreaSize.y-realPanElementH)+item.vGap.top:bounds.center.y;bounds.min.x=(realPanElementW>_tempPanAreaSize.x)?0:bounds.center.x;bounds.min.y=(realPanElementH>_tempPanAreaSize.y)?item.vGap.top:bounds.center.y;},_calculateItemSize=function(item,viewportSize,zoomLevel){if(item.src&&!item.loadError){var isInitial=!zoomLevel;if(isInitial){if(!item.vGap){item.vGap={top:0,bottom:0};}
_shout('parseVerticalMargin',item);}
_tempPanAreaSize.x=viewportSize.x;_tempPanAreaSize.y=viewportSize.y-item.vGap.top-item.vGap.bottom;if(isInitial){var hRatio=_tempPanAreaSize.x/item.w;var vRatio=_tempPanAreaSize.y/item.h;item.fitRatio=hRatio<vRatio?hRatio:vRatio;var scaleMode=_options.scaleMode;if(scaleMode==='orig'){zoomLevel=1;}else if(scaleMode==='fit'){zoomLevel=item.fitRatio;}
if(zoomLevel>1){zoomLevel=1;}
item.initialZoomLevel=zoomLevel;if(!item.bounds){item.bounds=_getZeroBounds();}}
if(!zoomLevel){return;}
_calculateSingleItemPanBounds(item,item.w*zoomLevel,item.h*zoomLevel);if(isInitial&&zoomLevel===item.initialZoomLevel){item.initialPosition=item.bounds.center;}
return item.bounds;}else{item.w=item.h=0;item.initialZoomLevel=item.fitRatio=1;item.bounds=_getZeroBounds();item.initialPosition=item.bounds.center;return item.bounds;}},_appendImage=function(index,item,baseDiv,img,preventAnimation,keepPlaceholder){if(item.loadError){return;}
if(img){item.imageAppended=true;_setImageSize(item,img,(item===self.currItem&&_renderMaxResolution));baseDiv.appendChild(img);if(keepPlaceholder){setTimeout(function(){if(item&&item.loaded&&item.placeholder){item.placeholder.style.display='none';item.placeholder=null;}},500);}}},_preloadImage=function(item){item.loading=true;item.loaded=false;var img=item.img=framework.createEl('pswp__img','img');var onComplete=function(){item.loading=false;item.loaded=true;if(item.loadComplete){item.loadComplete(item);}else{item.img=null;}
img.onload=img.onerror=null;img=null;};img.onload=onComplete;img.onerror=function(){item.loadError=true;onComplete();};img.src=item.src;return img;},_checkForError=function(item,cleanUp){if(item.src&&item.loadError&&item.container){if(cleanUp){item.container.innerHTML='';}
item.container.innerHTML=_options.errorMsg.replace('%url%',item.src);return true;}},_setImageSize=function(item,img,maxRes){if(!item.src){return;}
if(!img){img=item.container.lastChild;}
var w=maxRes?item.w:Math.round(item.w*item.fitRatio),h=maxRes?item.h:Math.round(item.h*item.fitRatio);if(item.placeholder&&!item.loaded){item.placeholder.style.width=w+'px';item.placeholder.style.height=h+'px';}
img.style.width=w+'px';img.style.height=h+'px';},_appendImagesPool=function(){if(_imagesToAppendPool.length){var poolItem;for(var i=0;i<_imagesToAppendPool.length;i++){poolItem=_imagesToAppendPool[i];if(poolItem.holder.index===poolItem.index){_appendImage(poolItem.index,poolItem.item,poolItem.baseDiv,poolItem.img,false,poolItem.clearPlaceholder);}}
_imagesToAppendPool=[];}};_registerModule('Controller',{publicMethods:{lazyLoadItem:function(index){index=_getLoopedId(index);var item=_getItemAt(index);if(!item||((item.loaded||item.loading)&&!_itemsNeedUpdate)){return;}
_shout('gettingData',index,item);if(!item.src){return;}
_preloadImage(item);},initController:function(){framework.extend(_options,_controllerDefaultOptions,true);self.items=_items=items;_getItemAt=self.getItemAt;_getNumItems=_options.getNumItemsFn;_initialIsLoop=_options.loop;if(_getNumItems()<3){_options.loop=false;}
_listen('beforeChange',function(diff){var p=_options.preload,isNext=diff===null?true:(diff>=0),preloadBefore=Math.min(p[0],_getNumItems()),preloadAfter=Math.min(p[1],_getNumItems()),i;for(i=1;i<=(isNext?preloadAfter:preloadBefore);i++){self.lazyLoadItem(_currentItemIndex+i);}
for(i=1;i<=(isNext?preloadBefore:preloadAfter);i++){self.lazyLoadItem(_currentItemIndex-i);}});_listen('initialLayout',function(){self.currItem.initialLayout=_options.getThumbBoundsFn&&_options.getThumbBoundsFn(_currentItemIndex);});_listen('mainScrollAnimComplete',_appendImagesPool);_listen('initialZoomInEnd',_appendImagesPool);_listen('destroy',function(){var item;for(var i=0;i<_items.length;i++){item=_items[i];if(item.container){item.container=null;}
if(item.placeholder){item.placeholder=null;}
if(item.img){item.img=null;}
if(item.preloader){item.preloader=null;}
if(item.loadError){item.loaded=item.loadError=false;}}
_imagesToAppendPool=null;});},getItemAt:function(index){if(index>=0){return _items[index]!==undefined?_items[index]:false;}
return false;},allowProgressiveImg:function(){return _options.forceProgressiveLoading||!_likelyTouchDevice||_options.mouseUsed||screen.width>1200;},setContent:function(holder,index){if(_options.loop){index=_getLoopedId(index);}
var prevItem=self.getItemAt(holder.index);if(prevItem){prevItem.container=null;}
var item=self.getItemAt(index),img;if(!item){holder.el.innerHTML='';return;}
_shout('gettingData',index,item);holder.index=index;holder.item=item;var baseDiv=item.container=framework.createEl('pswp__zoom-wrap');if(!item.src&&item.html){if(item.html.tagName){baseDiv.appendChild(item.html);}else{baseDiv.innerHTML=item.html;}}
_checkForError(item);_calculateItemSize(item,_viewportSize);if(item.src&&!item.loadError&&!item.loaded){item.loadComplete=function(item){if(!_isOpen){return;}
if(holder&&holder.index===index){if(_checkForError(item,true)){item.loadComplete=item.img=null;_calculateItemSize(item,_viewportSize);_applyZoomPanToItem(item);if(holder.index===_currentItemIndex){self.updateCurrZoomItem();}
return;}
if(!item.imageAppended){if(_features.transform&&(_mainScrollAnimating||_initialZoomRunning)){_imagesToAppendPool.push({item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder,clearPlaceholder:true});}else{_appendImage(index,item,baseDiv,item.img,_mainScrollAnimating||_initialZoomRunning,true);}}else{if(!_initialZoomRunning&&item.placeholder){item.placeholder.style.display='none';item.placeholder=null;}}}
item.loadComplete=null;item.img=null;_shout('imageLoadComplete',index,item);};if(framework.features.transform){var placeholderClassName='pswp__img pswp__img--placeholder';placeholderClassName+=(item.msrc?'':' pswp__img--placeholder--blank');var placeholder=framework.createEl(placeholderClassName,item.msrc?'img':'');if(item.msrc){placeholder.src=item.msrc;}
_setImageSize(item,placeholder);baseDiv.appendChild(placeholder);item.placeholder=placeholder;}
if(!item.loading){_preloadImage(item);}
if(self.allowProgressiveImg()){if(!_initialContentSet&&_features.transform){_imagesToAppendPool.push({item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder});}else{_appendImage(index,item,baseDiv,item.img,true,true);}}}else if(item.src&&!item.loadError){img=framework.createEl('pswp__img','img');img.style.opacity=1;img.src=item.src;_setImageSize(item,img);_appendImage(index,item,baseDiv,img,true);}
if(!_initialContentSet&&index===_currentItemIndex){_currZoomElementStyle=baseDiv.style;_showOrHide(item,(img||item.img));}else{_applyZoomPanToItem(item);}
holder.el.innerHTML='';holder.el.appendChild(baseDiv);},cleanSlide:function(item){if(item.img){item.img.onload=item.img.onerror=null;}
item.loaded=item.loading=item.img=item.imageAppended=false;}}});var tapTimer,tapReleasePoint={},_dispatchTapEvent=function(origEvent,releasePoint,pointerType){var e=document.createEvent('CustomEvent'),eDetail={origEvent:origEvent,target:origEvent.target,releasePoint:releasePoint,pointerType:pointerType||'touch'};e.initCustomEvent('pswpTap',true,true,eDetail);origEvent.target.dispatchEvent(e);};_registerModule('Tap',{publicMethods:{initTap:function(){_listen('firstTouchStart',self.onTapStart);_listen('touchRelease',self.onTapRelease);_listen('destroy',function(){tapReleasePoint={};tapTimer=null;});},onTapStart:function(touchList){if(touchList.length>1){clearTimeout(tapTimer);tapTimer=null;}},onTapRelease:function(e,releasePoint){if(!releasePoint){return;}
if(!_moved&&!_isMultitouch&&!_numAnimations){var p0=releasePoint;if(tapTimer){clearTimeout(tapTimer);tapTimer=null;if(_isNearbyPoints(p0,tapReleasePoint)){_shout('doubleTap',p0);return;}}
if(releasePoint.type==='mouse'){_dispatchTapEvent(e,releasePoint,'mouse');return;}
var clickedTagName=e.target.tagName.toUpperCase();if(clickedTagName==='BUTTON'||framework.hasClass(e.target,'pswp__single-tap')){_dispatchTapEvent(e,releasePoint);return;}
_equalizePoints(tapReleasePoint,p0);tapTimer=setTimeout(function(){_dispatchTapEvent(e,releasePoint);tapTimer=null;},300);}}}});var _wheelDelta;_registerModule('DesktopZoom',{publicMethods:{initDesktopZoom:function(){if(_oldIE){return;}
if(_likelyTouchDevice){_listen('mouseUsed',function(){self.setupDesktopZoom();});}else{self.setupDesktopZoom(true);}},setupDesktopZoom:function(onInit){_wheelDelta={};var events='wheel mousewheel DOMMouseScroll';_listen('bindEvents',function(){framework.bind(template,events,self.handleMouseWheel);});_listen('unbindEvents',function(){if(_wheelDelta){framework.unbind(template,events,self.handleMouseWheel);}});self.mouseZoomedIn=false;var hasDraggingClass,updateZoomable=function(){if(self.mouseZoomedIn){framework.removeClass(template,'pswp--zoomed-in');self.mouseZoomedIn=false;}
if(_currZoomLevel<1){framework.addClass(template,'pswp--zoom-allowed');}else{framework.removeClass(template,'pswp--zoom-allowed');}
removeDraggingClass();},removeDraggingClass=function(){if(hasDraggingClass){framework.removeClass(template,'pswp--dragging');hasDraggingClass=false;}};_listen('resize',updateZoomable);_listen('afterChange',updateZoomable);_listen('pointerDown',function(){if(self.mouseZoomedIn){hasDraggingClass=true;framework.addClass(template,'pswp--dragging');}});_listen('pointerUp',removeDraggingClass);if(!onInit){updateZoomable();}},handleMouseWheel:function(e){if(_currZoomLevel<=self.currItem.fitRatio){if(_options.modal){if(!_options.closeOnScroll||_numAnimations||_isDragging){e.preventDefault();}else if(_transformKey&&Math.abs(e.deltaY)>2){_closedByScroll=true;self.close();}}
return true;}
e.stopPropagation();_wheelDelta.x=0;if('deltaX'in e){if(e.deltaMode===1){_wheelDelta.x=e.deltaX*18;_wheelDelta.y=e.deltaY*18;}else{_wheelDelta.x=e.deltaX;_wheelDelta.y=e.deltaY;}}else if('wheelDelta'in e){if(e.wheelDeltaX){_wheelDelta.x=-0.16*e.wheelDeltaX;}
if(e.wheelDeltaY){_wheelDelta.y=-0.16*e.wheelDeltaY;}else{_wheelDelta.y=-0.16*e.wheelDelta;}}else if('detail'in e){_wheelDelta.y=e.detail;}else{return;}
_calculatePanBounds(_currZoomLevel,true);var newPanX=_panOffset.x-_wheelDelta.x,newPanY=_panOffset.y-_wheelDelta.y;if(_options.modal||(newPanX<=_currPanBounds.min.x&&newPanX>=_currPanBounds.max.x&&newPanY<=_currPanBounds.min.y&&newPanY>=_currPanBounds.max.y)){e.preventDefault();}
self.panTo(newPanX,newPanY);},toggleDesktopZoom:function(centerPoint){centerPoint=centerPoint||{x:_viewportSize.x/2+_offset.x,y:_viewportSize.y/2+_offset.y};var doubleTapZoomLevel=_options.getDoubleTapZoom(true,self.currItem);var zoomOut=_currZoomLevel===doubleTapZoomLevel;self.mouseZoomedIn=!zoomOut;self.zoomTo(zoomOut?self.currItem.initialZoomLevel:doubleTapZoomLevel,centerPoint,333);framework[(!zoomOut?'add':'remove')+'Class'](template,'pswp--zoomed-in');}}});var _historyDefaultOptions={history:true,galleryUID:1};var _historyUpdateTimeout,_hashChangeTimeout,_hashAnimCheckTimeout,_hashChangedByScript,_hashChangedByHistory,_hashReseted,_initialHash,_historyChanged,_closedFromURL,_urlChangedOnce,_windowLoc,_supportsPushState,_getHash=function(){return _windowLoc.hash.substring(1);},_cleanHistoryTimeouts=function(){if(_historyUpdateTimeout){clearTimeout(_historyUpdateTimeout);}
if(_hashAnimCheckTimeout){clearTimeout(_hashAnimCheckTimeout);}},_parseItemIndexFromURL=function(){var hash=_getHash(),params={};if(hash.length<5){return params;}
var i,vars=hash.split('&');for(i=0;i<vars.length;i++){if(!vars[i]){continue;}
var pair=vars[i].split('=');if(pair.length<2){continue;}
params[pair[0]]=pair[1];}
if(_options.galleryPIDs){var searchfor=params.pid;params.pid=0;for(i=0;i<_items.length;i++){if(_items[i].pid===searchfor){params.pid=i;break;}}}else{params.pid=parseInt(params.pid,10)-1;}
if(params.pid<0){params.pid=0;}
return params;},_updateHash=function(){if(_hashAnimCheckTimeout){clearTimeout(_hashAnimCheckTimeout);}
if(_numAnimations||_isDragging){_hashAnimCheckTimeout=setTimeout(_updateHash,500);return;}
if(_hashChangedByScript){clearTimeout(_hashChangeTimeout);}else{_hashChangedByScript=true;}
var pid=(_currentItemIndex+1);var item=_getItemAt(_currentItemIndex);if(item.hasOwnProperty('pid')){pid=item.pid;}
var newHash=_initialHash+'&'+'gid='+_options.galleryUID+'&'+'pid='+pid;if(!_historyChanged){if(_windowLoc.hash.indexOf(newHash)===-1){_urlChangedOnce=true;}}
var newURL=_windowLoc.href.split('#')[0]+'#'+newHash;if(_supportsPushState){if('#'+newHash!==window.location.hash){history[_historyChanged?'replaceState':'pushState']('',document.title,newURL);}}else{if(_historyChanged){_windowLoc.replace(newURL);}else{_windowLoc.hash=newHash;}}
_historyChanged=true;_hashChangeTimeout=setTimeout(function(){_hashChangedByScript=false;},60);};_registerModule('History',{publicMethods:{filterWindowLoc:function(obj){var tmpHash=obj.hash.substring(1).match(/spid=\d+/g);if(tmpHash!=null){tmpHash+="";obj.hash=tmpHash.replace(/,/g,'&');}else{obj.hash='';}
return obj;},initHistory:function(){framework.extend(_options,_historyDefaultOptions,true);if(!_options.history){return;}
_windowLoc=self.filterWindowLoc(window.location);_urlChangedOnce=false;_closedFromURL=false;_historyChanged=false;_initialHash=_getHash();_supportsPushState=('pushState'in history);if(_initialHash.indexOf('gid=')>-1){_initialHash=_initialHash.split('&gid=')[0];_initialHash=_initialHash.split('?gid=')[0];}
_listen('afterChange',self.updateURL);_listen('unbindEvents',function(){framework.unbind(window,'hashchange',self.onHashChange);});var returnToOriginal=function(){_hashReseted=true;if(!_closedFromURL){if(_urlChangedOnce){history.back();}else{if(_initialHash){_windowLoc.hash=_initialHash;}else{if(_supportsPushState){var search=_windowLoc.search.substring(1).match(/Lang=(en|zh-tw|zh-cn){1}/g);history.pushState('',document.title,_windowLoc.pathname+"?"+search);}else{_windowLoc.hash='';}}}}
_cleanHistoryTimeouts();};_listen('unbindEvents',function(){if(_closedByScroll){returnToOriginal();}});_listen('destroy',function(){if(!_hashReseted){returnToOriginal();}});_listen('firstUpdate',function(){_currentItemIndex=_parseItemIndexFromURL().pid;});var index=_initialHash.indexOf('pid=');if(index>-1){_initialHash=_initialHash.substring(0,index);if(_initialHash.slice(-1)==='&'){_initialHash=_initialHash.slice(0,-1);}}
setTimeout(self.bindHashChange,40);},bindHashChange:function(){if(_isOpen){framework.bind(window,'hashchange',self.onHashChange);}},onHashChange:function(){if(_getHash()===_initialHash){_closedFromURL=true;self.close();return;}
if(!_hashChangedByScript){_hashChangedByHistory=true;self.goTo(_parseItemIndexFromURL().pid);_hashChangedByHistory=false;}},updateURL:function(){_cleanHistoryTimeouts();if(_hashChangedByHistory){return;}
if(!_historyChanged){_updateHash();}else{_historyUpdateTimeout=setTimeout(_updateHash,800);}}}});framework.extend(self,publicMethods);};return PhotoSwipe;});
(function(factory){
if (typeof define === 'function' && define.amd)
define(['jquery'], factory);
else if (typeof exports === 'object')
factory(require('jquery'));
else
factory(jQuery);
}(function($, undefined){
if (!('indexOf' in Array.prototype)) {
Array.prototype.indexOf = function (find, i) {
if (i === undefined) i = 0;
if (i < 0) i += this.length;
if (i < 0) i = 0;
for (var n = this.length; i < n; i++) {
if (i in this && this[i] === find) {
return i;
}
}
return -1;
}
}
function timeZoneAbbreviation() {
var abbreviation, date, formattedStr, i, len, matchedStrings, ref, str;
date = (new Date()).toString();
formattedStr = ((ref = date.split('(')[1]) != null ? ref.slice(0, -1) : 0) || date.split(' ');
if (formattedStr instanceof Array) {
matchedStrings = [];
for (var i = 0, len = formattedStr.length; i < len; i++) {
str = formattedStr[i];
if ((abbreviation = (ref = str.match(/\b[A-Z]+\b/)) !== null) ? ref[0] : 0) {
matchedStrings.push(abbreviation);
}
}
formattedStr = matchedStrings.pop();
}
return formattedStr;
}
function UTCDate() {
return new Date(Date.UTC.apply(Date, arguments));
}
var Datetimepicker = function (element, options) {
var that = this;
this.element = $(element);
this.container = options.container || 'body';
this.language = options.language || this.element.data('date-language') || 'en';
this.language = this.language in dates ? this.language : this.language.split('-')[0];
this.language = this.language in dates ? this.language : 'en';
this.isRTL = dates[this.language].rtl || false;
this.formatType = options.formatType || this.element.data('format-type') || 'standard';
this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
this.isInline = false;
this.isVisible = false;
this.isInput = this.element.is('input');
this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;
this.bootcssVer = options.bootcssVer || (this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 ));
this.component = this.element.is('.date') ? ( this.bootcssVer === 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o').parent()) : false;
this.componentReset = this.element.is('.date') ? ( this.bootcssVer === 3 ? this.element.find('.input-group-addon .glyphicon-remove, .input-group-addon .fa-times').parent():this.element.find('.add-on .icon-remove, .add-on .fa-times').parent()) : false;
this.hasInput = this.component && this.element.find('input').length;
if (this.component && this.component.length === 0) {
this.component = false;
}
this.linkField = options.linkField || this.element.data('link-field') || false;
this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
this.initialDate = options.initialDate || new Date();
this.zIndex = options.zIndex || this.element.data('z-index') || undefined;
this.title = typeof options.title === 'undefined' ? false : options.title;
this.timezone = options.timezone || timeZoneAbbreviation();
this.icons = {
leftArrow: this.fontAwesome ? 'fa-arrow-left' : (this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left'),
rightArrow: this.fontAwesome ? 'fa-arrow-right' : (this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right')
}
this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';
this._attachEvents();
this.clickedOutside = function (e) {
if ($(e.target).closest('.datetimepicker').length === 0) {
that.hide();
}
}
this.formatViewType = 'datetime';
if ('formatViewType' in options) {
this.formatViewType = options.formatViewType;
} else if ('formatViewType' in this.element.data()) {
this.formatViewType = this.element.data('formatViewType');
}
this.minView = 0;
if ('minView' in options) {
this.minView = options.minView;
} else if ('minView' in this.element.data()) {
this.minView = this.element.data('min-view');
}
this.minView = DPGlobal.convertViewMode(this.minView);
this.maxView = DPGlobal.modes.length - 1;
if ('maxView' in options) {
this.maxView = options.maxView;
} else if ('maxView' in this.element.data()) {
this.maxView = this.element.data('max-view');
}
this.maxView = DPGlobal.convertViewMode(this.maxView);
this.wheelViewModeNavigation = false;
if ('wheelViewModeNavigation' in options) {
this.wheelViewModeNavigation = options.wheelViewModeNavigation;
} else if ('wheelViewModeNavigation' in this.element.data()) {
this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
}
this.wheelViewModeNavigationInverseDirection = false;
if ('wheelViewModeNavigationInverseDirection' in options) {
this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
} else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
}
this.wheelViewModeNavigationDelay = 100;
if ('wheelViewModeNavigationDelay' in options) {
this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
} else if ('wheelViewModeNavigationDelay' in this.element.data()) {
this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
}
this.startViewMode = 2;
if ('startView' in options) {
this.startViewMode = options.startView;
} else if ('startView' in this.element.data()) {
this.startViewMode = this.element.data('start-view');
}
this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
this.viewMode = this.startViewMode;
this.viewSelect = this.minView;
if ('viewSelect' in options) {
this.viewSelect = options.viewSelect;
} else if ('viewSelect' in this.element.data()) {
this.viewSelect = this.element.data('view-select');
}
this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);
this.forceParse = true;
if ('forceParse' in options) {
this.forceParse = options.forceParse;
} else if ('dateForceParse' in this.element.data()) {
this.forceParse = this.element.data('date-force-parse');
}
var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
while (template.indexOf('{iconType}') !== -1) {
template = template.replace('{iconType}', this.icontype);
}
while (template.indexOf('{leftArrow}') !== -1) {
template = template.replace('{leftArrow}', this.icons.leftArrow);
}
while (template.indexOf('{rightArrow}') !== -1) {
template = template.replace('{rightArrow}', this.icons.rightArrow);
}
this.picker = $(template)
.appendTo(this.isInline ? this.element : this.container)
.on({
click:     $.proxy(this.click, this),
mousedown: $.proxy(this.mousedown, this)
});
if (this.wheelViewModeNavigation) {
if ($.fn.mousewheel) {
this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
} else {
console.log('Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option');
}
}
if (this.isInline) {
this.picker.addClass('datetimepicker-inline');
} else {
this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
}
if (this.isRTL) {
this.picker.addClass('datetimepicker-rtl');
var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
}
$(document).on('mousedown touchend', this.clickedOutside);
this.autoclose = false;
if ('autoclose' in options) {
this.autoclose = options.autoclose;
} else if ('dateAutoclose' in this.element.data()) {
this.autoclose = this.element.data('date-autoclose');
}
this.keyboardNavigation = true;
if ('keyboardNavigation' in options) {
this.keyboardNavigation = options.keyboardNavigation;
} else if ('dateKeyboardNavigation' in this.element.data()) {
this.keyboardNavigation = this.element.data('date-keyboard-navigation');
}
this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
this.clearBtn = (options.clearBtn || this.element.data('date-clear-btn') || false);
this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);
this.weekStart = 0;
if (typeof options.weekStart !== 'undefined') {
this.weekStart = options.weekStart;
} else if (typeof this.element.data('date-weekstart') !== 'undefined') {
this.weekStart = this.element.data('date-weekstart');
} else if (typeof dates[this.language].weekStart !== 'undefined') {
this.weekStart = dates[this.language].weekStart;
}
this.weekStart = this.weekStart % 7;
this.weekEnd = ((this.weekStart + 6) % 7);
this.onRenderDay = function (date) {
var render = (options.onRenderDay || function () { return []; })(date);
if (typeof render === 'string') {
render = [render];
}
var res = ['day'];
return res.concat((render ? render : []));
};
this.onRenderHour = function (date) {
var render = (options.onRenderHour || function () { return []; })(date);
var res = ['hour'];
if (typeof render === 'string') {
render = [render];
}
return res.concat((render ? render : []));
};
this.onRenderMinute = function (date) {
var render = (options.onRenderMinute || function () { return []; })(date);
var res = ['minute'];
if (typeof render === 'string') {
render = [render];
}
if (date < this.startDate || date > this.endDate) {
res.push('disabled');
} else if (Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(date.getUTCMinutes() / this.minuteStep)) {
res.push('active');
}
return res.concat((render ? render : []));
};
this.onRenderYear = function (date) {
var render = (options.onRenderYear || function () { return []; })(date);
var res = ['year'];
if (typeof render === 'string') {
render = [render];
}
if (this.date.getUTCFullYear() === date.getUTCFullYear()) {
res.push('active');
}
var currentYear = date.getUTCFullYear();
var endYear = this.endDate.getUTCFullYear();
if (date < this.startDate || currentYear > endYear) {
res.push('disabled');
}
return res.concat((render ? render : []));
}
this.onRenderMonth = function (date) {
var render = (options.onRenderMonth || function () { return []; })(date);
var res = ['month'];
if (typeof render === 'string') {
render = [render];
}
return res.concat((render ? render : []));
}
this.startDate = new Date(-8639968443048000);
this.endDate = new Date(8639968443048000);
this.datesDisabled = [];
this.daysOfWeekDisabled = [];
this.setStartDate(options.startDate || this.element.data('date-startdate'));
this.setEndDate(options.endDate || this.element.data('date-enddate'));
this.setDatesDisabled(options.datesDisabled || this.element.data('date-dates-disabled'));
this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
this.fillDow();
this.fillMonths();
this.update();
this.showMode();
if (this.isInline) {
this.show();
}
};
Datetimepicker.prototype = {
constructor: Datetimepicker,
_events:       [],
_attachEvents: function () {
this._detachEvents();
if (this.isInput) {
this._events = [
[this.element, {
focus:   $.proxy(this.show, this),
keyup:   $.proxy(this.update, this),
keydown: $.proxy(this.keydown, this)
}]
];
}
else if (this.component && this.hasInput) {
this._events = [
[this.element.find('input'), {
focus:   $.proxy(this.show, this),
keyup:   $.proxy(this.update, this),
keydown: $.proxy(this.keydown, this)
}],
[this.component, {
click: $.proxy(this.show, this)
}]
];
if (this.componentReset) {
this._events.push([
this.componentReset,
{click: $.proxy(this.reset, this)}
]);
}
}
else if (this.element.is('div')) {
this.isInline = true;
}
else {
this._events = [
[this.element, {
click: $.proxy(this.show, this)
}]
];
}
for (var i = 0, el, ev; i < this._events.length; i++) {
el = this._events[i][0];
ev = this._events[i][1];
el.on(ev);
}
},
_detachEvents: function () {
for (var i = 0, el, ev; i < this._events.length; i++) {
el = this._events[i][0];
ev = this._events[i][1];
el.off(ev);
}
this._events = [];
},
show: function (e) {
this.picker.show();
this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
if (this.forceParse) {
this.update();
}
this.place();
$(window).on('resize', $.proxy(this.place, this));
if (e) {
e.stopPropagation();
e.preventDefault();
}
this.isVisible = true;
this.element.trigger({
type: 'show',
date: this.date
});
},
hide: function () {
if (!this.isVisible) return;
if (this.isInline) return;
this.picker.hide();
$(window).off('resize', this.place);
this.viewMode = this.startViewMode;
this.showMode();
if (!this.isInput) {
$(document).off('mousedown', this.hide);
}
if (
this.forceParse &&
(
this.isInput && this.element.val() ||
this.hasInput && this.element.find('input').val()
)
)
this.setValue();
this.isVisible = false;
this.element.trigger({
type: 'hide',
date: this.date
});
},
remove: function () {
this._detachEvents();
$(document).off('mousedown', this.clickedOutside);
this.picker.remove();
delete this.picker;
delete this.element.data().datetimepicker;
},
getDate: function () {
var d = this.getUTCDate();
if (d === null) {
return null;
}
return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
},
getUTCDate: function () {
return this.date;
},
getInitialDate: function () {
return this.initialDate
},
setInitialDate: function (initialDate) {
this.initialDate = initialDate;
},
setDate: function (d) {
this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
},
setUTCDate: function (d) {
if (d >= this.startDate && d <= this.endDate) {
this.date = d;
this.setValue();
this.viewDate = this.date;
this.fill();
} else {
this.element.trigger({
type:      'outOfRange',
date:      d,
startDate: this.startDate,
endDate:   this.endDate
});
}
},
setFormat: function (format) {
this.format = DPGlobal.parseFormat(format, this.formatType);
var element;
if (this.isInput) {
element = this.element;
} else if (this.component) {
element = this.element.find('input');
}
if (element && element.val()) {
this.setValue();
}
},
setValue: function () {
var formatted = this.getFormattedDate();
if (!this.isInput) {
if (this.component) {
this.element.find('input').val(formatted);
}
this.element.data('date', formatted);
} else {
this.element.val(formatted);
}
if (this.linkField) {
$('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
}
},
getFormattedDate: function (format) {
format = format || this.format;
return DPGlobal.formatDate(this.date, format, this.language, this.formatType, this.timezone);
},
setStartDate: function (startDate) {
this.startDate = startDate || this.startDate;
if (this.startDate.valueOf() !== 8639968443048000) {
this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone);
}
this.update();
this.updateNavArrows();
},
setEndDate: function (endDate) {
this.endDate = endDate || this.endDate;
if (this.endDate.valueOf() !== 8639968443048000) {
this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone);
}
this.update();
this.updateNavArrows();
},
setDatesDisabled: function (datesDisabled) {
this.datesDisabled = datesDisabled || [];
if (!$.isArray(this.datesDisabled)) {
this.datesDisabled = this.datesDisabled.split(/,\s*/);
}
var mThis = this;
this.datesDisabled = $.map(this.datesDisabled, function (d) {
return DPGlobal.parseDate(d, mThis.format, mThis.language, mThis.formatType, mThis.timezone).toDateString();
});
this.update();
this.updateNavArrows();
},
setTitle: function (selector, value) {
return this.picker.find(selector)
.find('th:eq(1)')
.text(this.title === false ? value : this.title);
},
setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
this.daysOfWeekDisabled = daysOfWeekDisabled || [];
if (!$.isArray(this.daysOfWeekDisabled)) {
this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
}
this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
return parseInt(d, 10);
});
this.update();
this.updateNavArrows();
},
setMinutesDisabled: function (minutesDisabled) {
this.minutesDisabled = minutesDisabled || [];
if (!$.isArray(this.minutesDisabled)) {
this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
}
this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
return parseInt(d, 10);
});
this.update();
this.updateNavArrows();
},
setHoursDisabled: function (hoursDisabled) {
this.hoursDisabled = hoursDisabled || [];
if (!$.isArray(this.hoursDisabled)) {
this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
}
this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
return parseInt(d, 10);
});
this.update();
this.updateNavArrows();
},
place: function () {
if (this.isInline) return;
if (!this.zIndex) {
var index_highest = 0;
$('div').each(function () {
var index_current = parseInt($(this).css('zIndex'), 10);
if (index_current > index_highest) {
index_highest = index_current;
}
});
this.zIndex = index_highest + 10;
}
var offset, top, left, containerOffset;
if (this.container instanceof $) {
containerOffset = this.container.offset();
} else {
containerOffset = $(this.container).offset();
}
if (this.component) {
offset = this.component.offset();
left = offset.left;
if (this.pickerPosition === 'bottom-left' || this.pickerPosition === 'top-left') {
left += this.component.outerWidth() - this.picker.outerWidth();
}
} else {
offset = this.element.offset();
left = offset.left;
if (this.pickerPosition === 'bottom-left' || this.pickerPosition === 'top-left') {
left += this.element.outerWidth() - this.picker.outerWidth();
}
}
var bodyWidth = document.body.clientWidth || window.innerWidth;
if (left + 220 > bodyWidth) {
left = bodyWidth - 220;
}
if (this.pickerPosition === 'top-left' || this.pickerPosition === 'top-right') {
top = offset.top - this.picker.outerHeight();
} else {
top = offset.top + this.height;
}
top = top - containerOffset.top;
left = left - containerOffset.left;
this.picker.css({
top:    top,
left:   left,
zIndex: this.zIndex
});
},
hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",
update: function () {
var date, fromArgs = false;
if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
date = arguments[0];
fromArgs = true;
} else {
date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
if (typeof date === 'string') {
date = date.replace(/^\s+|\s+$/g,'');
}
}
if (!date) {
date = new Date();
fromArgs = false;
}
if (typeof date === "string") {
if (new RegExp(this.hour_minute).test(date) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(date)) {
date = this.getDate()
}
}
this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType, this.timezone);
if (fromArgs) this.setValue();
if (this.date < this.startDate) {
this.viewDate = new Date(this.startDate);
} else if (this.date > this.endDate) {
this.viewDate = new Date(this.endDate);
} else {
this.viewDate = new Date(this.date);
}
this.fill();
},
fillDow: function () {
var dowCnt = this.weekStart,
html = '<tr>';
while (dowCnt < this.weekStart + 7) {
html += '<th class="dow" id="dp-d-'+dates[this.language].daysMin[dowCnt]+'" headers="dp-month">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
}
html += '</tr>';
this.picker.find('.datetimepicker-days thead').append(html);
},
fillMonths: function () {
var html = '';
var d = new Date(this.viewDate);
for (var i = 0; i < 12; i++) {
d.setUTCMonth(i);
var classes = this.onRenderMonth(d);
html += '<span class="' + classes.join(' ') + '">' + dates[this.language].monthsShort[i] + '</span>';
}
this.picker.find('.datetimepicker-months td').html(html);
},
fill: function () {
if (!this.date || !this.viewDate) {
return;
}
var d = new Date(this.viewDate),
year = d.getUTCFullYear(),
month = d.getUTCMonth(),
dayMonth = d.getUTCDate(),
hours = d.getUTCHours(),
startYear = this.startDate.getUTCFullYear(),
startMonth = this.startDate.getUTCMonth(),
endYear = this.endDate.getUTCFullYear(),
endMonth = this.endDate.getUTCMonth() + 1,
currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
today = new Date();
this.setTitle('.datetimepicker-days', dates[this.language].months[month] + ' ' + year)
if (this.formatViewType === 'time') {
var formatted = this.getFormattedDate();
this.setTitle('.datetimepicker-hours', formatted);
this.setTitle('.datetimepicker-minutes', formatted);
} else {
this.setTitle('.datetimepicker-hours', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
this.setTitle('.datetimepicker-minutes', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
}
this.picker.find('tfoot th.today')
.text(dates[this.language].today || dates['en'].today)
.toggle(this.todayBtn !== false);
this.picker.find('tfoot th.clear')
.text(dates[this.language].clear || dates['en'].clear)
.toggle(this.clearBtn !== false);
this.updateNavArrows();
this.fillMonths();
var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
prevMonth.setUTCDate(day);
prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
var nextMonth = new Date(prevMonth);
nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
nextMonth = nextMonth.valueOf();
var html = [];
var classes;
while (prevMonth.valueOf() < nextMonth) {
if (prevMonth.getUTCDay() === this.weekStart) {
html.push('<tr>');
}
classes = this.onRenderDay(prevMonth);
if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() === year && prevMonth.getUTCMonth() < month)) {
classes.push('old');
} else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() === year && prevMonth.getUTCMonth() > month)) {
classes.push('new');
}
if (this.todayHighlight &&
prevMonth.getUTCFullYear() === today.getFullYear() &&
prevMonth.getUTCMonth() === today.getMonth() &&
prevMonth.getUTCDate() === today.getDate()) {
classes.push('today');
}
if (prevMonth.valueOf() === currentDate) {
classes.push('active');
}
if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
$.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1 ||
$.inArray(prevMonth.toDateString(), this.datesDisabled) !== -1) {
classes.push('disabled');
}
html.push('<td headers="dp-month dp-d-'+dates[this.language].daysMin[prevMonth.getUTCDay()]+'" class="' + classes.join(' ') + '">' + prevMonth.getUTCDate() + '</td>');
if (prevMonth.getUTCDay() === this.weekEnd) {
html.push('</tr>');
}
prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
}
this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));
html = [];
var txt = '', meridian = '', meridianOld = '';
var hoursDisabled = this.hoursDisabled || [];
d = new Date(this.viewDate)
for (var i = 0; i < 24; i++) {
d.setUTCHours(i);
classes = this.onRenderHour(d);
if (hoursDisabled.indexOf(i) !== -1) {
classes.push('disabled');
}
var actual = UTCDate(year, month, dayMonth, i);
if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
classes.push('disabled');
} else if (hours === i) {
classes.push('active');
}
if (this.showMeridian && dates[this.language].meridiem.length === 2) {
meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
if (meridian !== meridianOld) {
if (meridianOld !== '') {
html.push('</fieldset>');
}
html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
}
meridianOld = meridian;
txt = (i % 12 ? i % 12 : 12);
if (i < 12) {
classes.push('hour_am');
} else {
classes.push('hour_pm');
}
html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
if (i === 23) {
html.push('</fieldset>');
}
} else {
txt = i + ':00';
html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
}
}
this.picker.find('.datetimepicker-hours td').html(html.join(''));
html = [];
txt = '';
meridian = '';
meridianOld = '';
var minutesDisabled = this.minutesDisabled || [];
d = new Date(this.viewDate);
for (var i = 0; i < 60; i += this.minuteStep) {
if (minutesDisabled.indexOf(i) !== -1) continue;
d.setUTCMinutes(i);
d.setUTCSeconds(0);
classes = this.onRenderMinute(d);
if (this.showMeridian && dates[this.language].meridiem.length === 2) {
meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
if (meridian !== meridianOld) {
if (meridianOld !== '') {
html.push('</fieldset>');
}
html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
}
meridianOld = meridian;
txt = (hours % 12 ? hours % 12 : 12);
html.push('<span class="' + classes.join(' ') + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
if (i === 59) {
html.push('</fieldset>');
}
} else {
txt = i + ':00';
html.push('<span class="' + classes.join(' ') + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
}
}
this.picker.find('.datetimepicker-minutes td').html(html.join(''));
var currentYear = this.date.getUTCFullYear();
var months = this.setTitle('.datetimepicker-months', year)
.end()
.find('.month').removeClass('active');
if (currentYear === year) {
months.eq(this.date.getUTCMonth()).addClass('active');
}
if (year < startYear || year > endYear) {
months.addClass('disabled');
}
if (year === startYear) {
months.slice(0, startMonth).addClass('disabled');
}
if (year === endYear) {
months.slice(endMonth).addClass('disabled');
}
html = '';
year = parseInt(year / 10, 10) * 10;
var yearCont = this.setTitle('.datetimepicker-years', year + '-' + (year + 9))
.end()
.find('td');
year -= 1;
d = new Date(this.viewDate);
for (var i = -1; i < 11; i++) {
d.setUTCFullYear(year);
classes = this.onRenderYear(d);
if (i === -1 || i === 10) {
classes.push(old);
}
html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
year += 1;
}
yearCont.html(html);
this.place();
},
updateNavArrows: function () {
var d = new Date(this.viewDate),
year = d.getUTCFullYear(),
month = d.getUTCMonth(),
day = d.getUTCDate(),
hour = d.getUTCHours();
switch (this.viewMode) {
case 0:
if (year <= this.startDate.getUTCFullYear()
&& month <= this.startDate.getUTCMonth()
&& day <= this.startDate.getUTCDate()
&& hour <= this.startDate.getUTCHours()) {
this.picker.find('.prev').css({visibility: 'hidden'});
} else {
this.picker.find('.prev').css({visibility: 'visible'});
}
if (year >= this.endDate.getUTCFullYear()
&& month >= this.endDate.getUTCMonth()
&& day >= this.endDate.getUTCDate()
&& hour >= this.endDate.getUTCHours()) {
this.picker.find('.next').css({visibility: 'hidden'});
} else {
this.picker.find('.next').css({visibility: 'visible'});
}
break;
case 1:
if (year <= this.startDate.getUTCFullYear()
&& month <= this.startDate.getUTCMonth()
&& day <= this.startDate.getUTCDate()) {
this.picker.find('.prev').css({visibility: 'hidden'});
} else {
this.picker.find('.prev').css({visibility: 'visible'});
}
if (year >= this.endDate.getUTCFullYear()
&& month >= this.endDate.getUTCMonth()
&& day >= this.endDate.getUTCDate()) {
this.picker.find('.next').css({visibility: 'hidden'});
} else {
this.picker.find('.next').css({visibility: 'visible'});
}
break;
case 2:
if (year <= this.startDate.getUTCFullYear()
&& month <= this.startDate.getUTCMonth()) {
this.picker.find('.prev').css({visibility: 'hidden'});
} else {
this.picker.find('.prev').css({visibility: 'visible'});
}
if (year >= this.endDate.getUTCFullYear()
&& month >= this.endDate.getUTCMonth()) {
this.picker.find('.next').css({visibility: 'hidden'});
} else {
this.picker.find('.next').css({visibility: 'visible'});
}
break;
case 3:
case 4:
if (year <= this.startDate.getUTCFullYear()) {
this.picker.find('.prev').css({visibility: 'hidden'});
} else {
this.picker.find('.prev').css({visibility: 'visible'});
}
if (year >= this.endDate.getUTCFullYear()) {
this.picker.find('.next').css({visibility: 'hidden'});
} else {
this.picker.find('.next').css({visibility: 'visible'});
}
break;
}
},
mousewheel: function (e) {
e.preventDefault();
e.stopPropagation();
if (this.wheelPause) {
return;
}
this.wheelPause = true;
var originalEvent = e.originalEvent;
var delta = originalEvent.wheelDelta;
var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;
if (this.wheelViewModeNavigationInverseDirection) {
mode = -mode;
}
this.showMode(mode);
setTimeout($.proxy(function () {
this.wheelPause = false
}, this), this.wheelViewModeNavigationDelay);
},
click: function (e) {
e.stopPropagation();
e.preventDefault();
var target = $(e.target).closest('span, td, th, legend');
if (target.is('.' + this.icontype)) {
target = $(target).parent().closest('span, td, th, legend');
}
if (target.length === 1) {
if (target.is('.disabled')) {
this.element.trigger({
type:      'outOfRange',
date:      this.viewDate,
startDate: this.startDate,
endDate:   this.endDate
});
return;
}
switch (target[0].nodeName.toLowerCase()) {
case 'th':
switch (target[0].className) {
case 'switch':
this.showMode(1);
break;
case 'prev':
case 'next':
var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
switch (this.viewMode) {
case 0:
this.viewDate = this.moveHour(this.viewDate, dir);
break;
case 1:
this.viewDate = this.moveDate(this.viewDate, dir);
break;
case 2:
this.viewDate = this.moveMonth(this.viewDate, dir);
break;
case 3:
case 4:
this.viewDate = this.moveYear(this.viewDate, dir);
break;
}
this.fill();
this.element.trigger({
type:      target[0].className + ':' + this.convertViewModeText(this.viewMode),
date:      this.viewDate,
startDate: this.startDate,
endDate:   this.endDate
});
break;
case 'clear':
this.reset();
if (this.autoclose) {
this.hide();
}
break;
case 'today':
var date = new Date();
date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
if (date < this.startDate) date = this.startDate;
else if (date > this.endDate) date = this.endDate;
this.viewMode = this.startViewMode;
this.showMode(0);
this._setDate(date);
this.fill();
if (this.autoclose) {
this.hide();
}
break;
}
break;
case 'span':
if (!target.is('.disabled')) {
var year = this.viewDate.getUTCFullYear(),
month = this.viewDate.getUTCMonth(),
day = this.viewDate.getUTCDate(),
hours = this.viewDate.getUTCHours(),
minutes = this.viewDate.getUTCMinutes(),
seconds = this.viewDate.getUTCSeconds();
if (target.is('.month')) {
this.viewDate.setUTCDate(1);
month = target.parent().find('span').index(target);
day = this.viewDate.getUTCDate();
this.viewDate.setUTCMonth(month);
this.element.trigger({
type: 'changeMonth',
date: this.viewDate
});
if (this.viewSelect >= 3) {
this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
}
} else if (target.is('.year')) {
this.viewDate.setUTCDate(1);
year = parseInt(target.text(), 10) || 0;
this.viewDate.setUTCFullYear(year);
this.element.trigger({
type: 'changeYear',
date: this.viewDate
});
if (this.viewSelect >= 4) {
this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
}
} else if (target.is('.hour')) {
hours = parseInt(target.text(), 10) || 0;
if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
if (hours === 12 && target.hasClass('hour_am')) {
hours = 0;
} else if (hours !== 12 && target.hasClass('hour_pm')) {
hours += 12;
}
}
this.viewDate.setUTCHours(hours);
this.element.trigger({
type: 'changeHour',
date: this.viewDate
});
if (this.viewSelect >= 1) {
this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
}
} else if (target.is('.minute')) {
minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
this.viewDate.setUTCMinutes(minutes);
this.element.trigger({
type: 'changeMinute',
date: this.viewDate
});
if (this.viewSelect >= 0) {
this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
}
}
if (this.viewMode !== 0) {
var oldViewMode = this.viewMode;
this.showMode(-1);
this.fill();
if (oldViewMode === this.viewMode && this.autoclose) {
this.hide();
}
} else {
this.fill();
if (this.autoclose) {
this.hide();
}
}
}
break;
case 'td':
if (target.is('.day') && !target.is('.disabled')) {
var day = parseInt(target.text(), 10) || 1;
var year = this.viewDate.getUTCFullYear(),
month = this.viewDate.getUTCMonth(),
hours = this.viewDate.getUTCHours(),
minutes = this.viewDate.getUTCMinutes(),
seconds = this.viewDate.getUTCSeconds();
if (target.is('.old')) {
if (month === 0) {
month = 11;
year -= 1;
} else {
month -= 1;
}
} else if (target.is('.new')) {
if (month === 11) {
month = 0;
year += 1;
} else {
month += 1;
}
}
this.viewDate.setUTCFullYear(year);
this.viewDate.setUTCMonth(month, day);
this.element.trigger({
type: 'changeDay',
date: this.viewDate
});
if (this.viewSelect >= 2) {
this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
}
}
var oldViewMode = this.viewMode;
this.showMode(-1);
this.fill();
if (oldViewMode === this.viewMode && this.autoclose) {
this.hide();
}
break;
}
}
},
_setDate: function (date, which) {
if (!which || which === 'date')
this.date = date;
if (!which || which === 'view')
this.viewDate = date;
this.fill();
this.setValue();
var element;
if (this.isInput) {
element = this.element;
} else if (this.component) {
element = this.element.find('input');
}
if (element) {
element.change();
}
this.element.trigger({
type: 'changeDate',
date: this.getDate()
});
if(date === null)
this.date = this.viewDate;
},
moveMinute: function (date, dir) {
if (!dir) return date;
var new_date = new Date(date.valueOf());
new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
return new_date;
},
moveHour: function (date, dir) {
if (!dir) return date;
var new_date = new Date(date.valueOf());
new_date.setUTCHours(new_date.getUTCHours() + dir);
return new_date;
},
moveDate: function (date, dir) {
if (!dir) return date;
var new_date = new Date(date.valueOf());
new_date.setUTCDate(new_date.getUTCDate() + dir);
return new_date;
},
moveMonth: function (date, dir) {
if (!dir) return date;
var new_date = new Date(date.valueOf()),
day = new_date.getUTCDate(),
month = new_date.getUTCMonth(),
mag = Math.abs(dir),
new_month, test;
dir = dir > 0 ? 1 : -1;
if (mag === 1) {
test = dir === -1
? function () {
return new_date.getUTCMonth() === month;
}
: function () {
return new_date.getUTCMonth() !== new_month;
};
new_month = month + dir;
new_date.setUTCMonth(new_month);
if (new_month < 0 || new_month > 11)
new_month = (new_month + 12) % 12;
} else {
for (var i = 0; i < mag; i++)
new_date = this.moveMonth(new_date, dir);
new_month = new_date.getUTCMonth();
new_date.setUTCDate(day);
test = function () {
return new_month !== new_date.getUTCMonth();
};
}
while (test()) {
new_date.setUTCDate(--day);
new_date.setUTCMonth(new_month);
}
return new_date;
},
moveYear: function (date, dir) {
return this.moveMonth(date, dir * 12);
},
dateWithinRange: function (date) {
return date >= this.startDate && date <= this.endDate;
},
keydown: function (e) {
if (this.picker.is(':not(:visible)')) {
if (e.keyCode === 27)
this.show();
return;
}
var dateChanged = false,
dir, newDate, newViewDate;
switch (e.keyCode) {
case 27:
this.hide();
e.preventDefault();
break;
case 37:
case 39:
if (!this.keyboardNavigation) break;
dir = e.keyCode === 37 ? -1 : 1;
var viewMode = this.viewMode;
if (e.ctrlKey) {
viewMode += 2;
} else if (e.shiftKey) {
viewMode += 1;
}
if (viewMode === 4) {
newDate = this.moveYear(this.date, dir);
newViewDate = this.moveYear(this.viewDate, dir);
} else if (viewMode === 3) {
newDate = this.moveMonth(this.date, dir);
newViewDate = this.moveMonth(this.viewDate, dir);
} else if (viewMode === 2) {
newDate = this.moveDate(this.date, dir);
newViewDate = this.moveDate(this.viewDate, dir);
} else if (viewMode === 1) {
newDate = this.moveHour(this.date, dir);
newViewDate = this.moveHour(this.viewDate, dir);
} else if (viewMode === 0) {
newDate = this.moveMinute(this.date, dir);
newViewDate = this.moveMinute(this.viewDate, dir);
}
if (this.dateWithinRange(newDate)) {
this.date = newDate;
this.viewDate = newViewDate;
this.setValue();
this.update();
e.preventDefault();
dateChanged = true;
}
break;
case 38:
case 40:
if (!this.keyboardNavigation) break;
dir = e.keyCode === 38 ? -1 : 1;
viewMode = this.viewMode;
if (e.ctrlKey) {
viewMode += 2;
} else if (e.shiftKey) {
viewMode += 1;
}
if (viewMode === 4) {
newDate = this.moveYear(this.date, dir);
newViewDate = this.moveYear(this.viewDate, dir);
} else if (viewMode === 3) {
newDate = this.moveMonth(this.date, dir);
newViewDate = this.moveMonth(this.viewDate, dir);
} else if (viewMode === 2) {
newDate = this.moveDate(this.date, dir * 7);
newViewDate = this.moveDate(this.viewDate, dir * 7);
} else if (viewMode === 1) {
if (this.showMeridian) {
newDate = this.moveHour(this.date, dir * 6);
newViewDate = this.moveHour(this.viewDate, dir * 6);
} else {
newDate = this.moveHour(this.date, dir * 4);
newViewDate = this.moveHour(this.viewDate, dir * 4);
}
} else if (viewMode === 0) {
newDate = this.moveMinute(this.date, dir * 4);
newViewDate = this.moveMinute(this.viewDate, dir * 4);
}
if (this.dateWithinRange(newDate)) {
this.date = newDate;
this.viewDate = newViewDate;
this.setValue();
this.update();
e.preventDefault();
dateChanged = true;
}
break;
case 13:
if (this.viewMode !== 0) {
var oldViewMode = this.viewMode;
this.showMode(-1);
this.fill();
if (oldViewMode === this.viewMode && this.autoclose) {
this.hide();
}
} else {
this.fill();
if (this.autoclose) {
this.hide();
}
}
e.preventDefault();
break;
case 9:
this.hide();
break;
}
if (dateChanged) {
var element;
if (this.isInput) {
element = this.element;
} else if (this.component) {
element = this.element.find('input');
}
if (element) {
element.change();
}
this.element.trigger({
type: 'changeDate',
date: this.getDate()
});
}
},
showMode: function (dir) {
if (dir) {
var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
if (newViewMode >= this.minView && newViewMode <= this.maxView) {
this.element.trigger({
type:        'changeMode',
date:        this.viewDate,
oldViewMode: this.viewMode,
newViewMode: newViewMode
});
this.viewMode = newViewMode;
}
}
this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
this.updateNavArrows();
},
reset: function () {
this._setDate(null, 'date');
},
convertViewModeText:  function (viewMode) {
switch (viewMode) {
case 4:
return 'decade';
case 3:
return 'year';
case 2:
return 'month';
case 1:
return 'day';
case 0:
return 'hour';
}
}
};
var old = $.fn.datetimepicker;
$.fn.datetimepicker = function (option) {
var args = Array.apply(null, arguments);
args.shift();
var internal_return;
this.each(function () {
var $this = $(this),
data = $this.data('datetimepicker'),
options = typeof option === 'object' && option;
if (!data) {
$this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
}
if (typeof option === 'string' && typeof data[option] === 'function') {
internal_return = data[option].apply(data, args);
if (internal_return !== undefined) {
return false;
}
}
});
if (internal_return !== undefined)
return internal_return;
else
return this;
};
$.fn.datetimepicker.defaults = {
};
$.fn.datetimepicker.Constructor = Datetimepicker;
var dates = $.fn.datetimepicker.dates = {
en: {
days:        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
daysShort:   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
daysMin:     ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
months:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
meridiem:    ['am', 'pm'],
suffix:      ['st', 'nd', 'rd', 'th'],
today:       'Today',
clear:       'Clear'
}
};
var DPGlobal = {
modes:            [
{
clsName: 'minutes',
navFnc:  'Hours',
navStep: 1
},
{
clsName: 'hours',
navFnc:  'Date',
navStep: 1
},
{
clsName: 'days',
navFnc:  'Month',
navStep: 1
},
{
clsName: 'months',
navFnc:  'FullYear',
navStep: 1
},
{
clsName: 'years',
navFnc:  'FullYear',
navStep: 10
}
],
isLeapYear:       function (year) {
return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
},
getDaysInMonth:   function (year, month) {
return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
},
getDefaultFormat: function (type, field) {
if (type === 'standard') {
if (field === 'input')
return 'yyyy-mm-dd hh:ii';
else
return 'yyyy-mm-dd hh:ii:ss';
} else if (type === 'php') {
if (field === 'input')
return 'Y-m-d H:i';
else
return 'Y-m-d H:i:s';
} else {
throw new Error('Invalid format type.');
}
},
validParts: function (type) {
if (type === 'standard') {
return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
} else if (type === 'php') {
return /[dDjlNwzFmMnStyYaABgGhHis]/g;
} else {
throw new Error('Invalid format type.');
}
},
nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
parseFormat: function (format, type) {
var separators = format.replace(this.validParts(type), '\0').split('\0'),
parts = format.match(this.validParts(type));
if (!separators || !separators.length || !parts || parts.length === 0) {
throw new Error('Invalid date format.');
}
return {separators: separators, parts: parts};
},
parseDate: function (date, format, language, type, timezone) {
if (date instanceof Date) {
var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
dateUTC.setMilliseconds(0);
return dateUTC;
}
if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
format = this.parseFormat('yyyy-mm-dd', type);
}
if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
format = this.parseFormat('yyyy-mm-dd hh:ii', type);
}
if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
}
if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
var part_re = /([-+]\d+)([dmwy])/,
parts = date.match(/([-+]\d+)([dmwy])/g),
part, dir;
date = new Date();
for (var i = 0; i < parts.length; i++) {
part = part_re.exec(parts[i]);
dir = parseInt(part[1]);
switch (part[2]) {
case 'd':
date.setUTCDate(date.getUTCDate() + dir);
break;
case 'm':
date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
break;
case 'w':
date.setUTCDate(date.getUTCDate() + dir * 7);
break;
case 'y':
date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
break;
}
}
return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
}
var parts = date && date.toString().match(this.nonpunctuation) || [],
date = new Date(0, 0, 0, 0, 0, 0, 0),
parsed = {},
setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P', 'z', 'Z'],
setters_map = {
hh:   function (d, v) {
return d.setUTCHours(v);
},
h:    function (d, v) {
return d.setUTCHours(v);
},
HH:   function (d, v) {
return d.setUTCHours(v === 12 ? 0 : v);
},
H:    function (d, v) {
return d.setUTCHours(v === 12 ? 0 : v);
},
ii:   function (d, v) {
return d.setUTCMinutes(v);
},
i:    function (d, v) {
return d.setUTCMinutes(v);
},
ss:   function (d, v) {
return d.setUTCSeconds(v);
},
s:    function (d, v) {
return d.setUTCSeconds(v);
},
yyyy: function (d, v) {
return d.setUTCFullYear(v);
},
yy:   function (d, v) {
return d.setUTCFullYear(2000 + v);
},
m:    function (d, v) {
v -= 1;
while (v < 0) v += 12;
v %= 12;
d.setUTCMonth(v);
while (d.getUTCMonth() !== v)
if (isNaN(d.getUTCMonth()))
return d;
else
d.setUTCDate(d.getUTCDate() - 1);
return d;
},
d:    function (d, v) {
return d.setUTCDate(v);
},
p:    function (d, v) {
return d.setUTCHours(v === 1 ? d.getUTCHours() + 12 : d.getUTCHours());
},
z:    function () {
return timezone
}
},
val, filtered, part;
setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
setters_map['dd'] = setters_map['d'];
setters_map['P'] = setters_map['p'];
setters_map['Z'] = setters_map['z'];
date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
if (parts.length === format.parts.length) {
for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
val = parseInt(parts[i], 10);
part = format.parts[i];
if (isNaN(val)) {
switch (part) {
case 'MM':
filtered = $(dates[language].months).filter(function () {
var m = this.slice(0, parts[i].length),
p = parts[i].slice(0, m.length);
return m === p;
});
val = $.inArray(filtered[0], dates[language].months) + 1;
break;
case 'M':
filtered = $(dates[language].monthsShort).filter(function () {
var m = this.slice(0, parts[i].length),
p = parts[i].slice(0, m.length);
return m.toLowerCase() === p.toLowerCase();
});
val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
break;
case 'p':
case 'P':
val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
break;
case 'z':
case 'Z':
timezone;
break;
}
}
parsed[part] = val;
}
for (var i = 0, s; i < setters_order.length; i++) {
s = setters_order[i];
if (s in parsed && !isNaN(parsed[s]))
setters_map[s](date, parsed[s])
}
}
return date;
},
formatDate:       function (date, format, language, type, timezone) {
if (date === null) {
return '';
}
var val;
if (type === 'standard') {
val = {
t:    date.getTime(),
yy:   date.getUTCFullYear().toString().substring(2),
yyyy: date.getUTCFullYear(),
m:    date.getUTCMonth() + 1,
M:    dates[language].monthsShort[date.getUTCMonth()],
MM:   dates[language].months[date.getUTCMonth()],
d:    date.getUTCDate(),
D:    dates[language].daysShort[date.getUTCDay()],
DD:   dates[language].days[date.getUTCDay()],
p:    (dates[language].meridiem.length === 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
h:    date.getUTCHours(),
i:    date.getUTCMinutes(),
s:    date.getUTCSeconds(),
z:    timezone
};
if (dates[language].meridiem.length === 2) {
val.H = (val.h % 12 === 0 ? 12 : val.h % 12);
}
else {
val.H = val.h;
}
val.HH = (val.H < 10 ? '0' : '') + val.H;
val.P = val.p.toUpperCase();
val.Z = val.z;
val.hh = (val.h < 10 ? '0' : '') + val.h;
val.ii = (val.i < 10 ? '0' : '') + val.i;
val.ss = (val.s < 10 ? '0' : '') + val.s;
val.dd = (val.d < 10 ? '0' : '') + val.d;
val.mm = (val.m < 10 ? '0' : '') + val.m;
} else if (type === 'php') {
val = {
y: date.getUTCFullYear().toString().substring(2),
Y: date.getUTCFullYear(),
F: dates[language].months[date.getUTCMonth()],
M: dates[language].monthsShort[date.getUTCMonth()],
n: date.getUTCMonth() + 1,
t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
j: date.getUTCDate(),
l: dates[language].days[date.getUTCDay()],
D: dates[language].daysShort[date.getUTCDay()],
w: date.getUTCDay(),
N: (date.getUTCDay() === 0 ? 7 : date.getUTCDay()),
S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
a: (dates[language].meridiem.length === 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
g: (date.getUTCHours() % 12 === 0 ? 12 : date.getUTCHours() % 12),
G: date.getUTCHours(),
i: date.getUTCMinutes(),
s: date.getUTCSeconds()
};
val.m = (val.n < 10 ? '0' : '') + val.n;
val.d = (val.j < 10 ? '0' : '') + val.j;
val.A = val.a.toString().toUpperCase();
val.h = (val.g < 10 ? '0' : '') + val.g;
val.H = (val.G < 10 ? '0' : '') + val.G;
val.i = (val.i < 10 ? '0' : '') + val.i;
val.s = (val.s < 10 ? '0' : '') + val.s;
} else {
throw new Error('Invalid format type.');
}
var date = [],
seps = $.extend([], format.separators);
for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
if (seps.length) {
date.push(seps.shift());
}
date.push(val[format.parts[i]]);
}
if (seps.length) {
date.push(seps.shift());
}
return date.join('');
},
convertViewMode:  function (viewMode) {
switch (viewMode) {
case 4:
case 'decade':
viewMode = 4;
break;
case 3:
case 'year':
viewMode = 3;
break;
case 2:
case 'month':
viewMode = 2;
break;
case 1:
case 'day':
viewMode = 1;
break;
case 0:
case 'hour':
viewMode = 0;
break;
}
return viewMode;
},
headTemplate: '<thead>' +
'<tr>' +
'<th class="prev" id="dp-prev"><i class="{iconType} {leftArrow}"/></th>' +
'<th colspan="5" class="switch" id="dp-month"></th>' +
'<th class="next" id="dp-next"><i class="{iconType} {rightArrow}"/></th>' +
'</tr>' +
'</thead>',
headTemplateV3: '<thead>' +
'<tr>' +
'<th class="prev" id="dp-prev"><span class="{iconType} {leftArrow}"></span> </th>' +
'<th colspan="5" class="switch" id="dp-month"></th>' +
'<th class="next" id="dp-next"><span class="{iconType} {rightArrow}"></span> </th>' +
'</tr>' +
'</thead>',
contTemplate: '<tbody><tr><td colspan="7" headers="dp-month dp-d-no"></td></tr></tbody>',
footTemplate: '<tfoot>' +
'<tr><th colspan="7" class="today" id="today" headers="today"></th></tr>' +
'<tr><th colspan="7" class="clear" id="clear" headers="clear"></th></tr>' +
'</tfoot>'
};
DPGlobal.template = '<div class="datetimepicker">' +
'<div class="datetimepicker-minutes">' +
'<table class=" table-condensed">' +
DPGlobal.headTemplate +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-hours">' +
'<table class=" table-condensed">' +
DPGlobal.headTemplate +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-days">' +
'<table class=" table-condensed">' +
DPGlobal.headTemplate +
'<tbody></tbody>' +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-months">' +
'<table class="table-condensed">' +
DPGlobal.headTemplate +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-years">' +
'<table class="table-condensed">' +
DPGlobal.headTemplate +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'</div>';
DPGlobal.templateV3 = '<div class="datetimepicker">' +
'<div class="datetimepicker-minutes">' +
'<table class=" table-condensed">' +
DPGlobal.headTemplateV3 +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-hours">' +
'<table class=" table-condensed">' +
DPGlobal.headTemplateV3 +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-days">' +
'<table class=" table-condensed">' +
DPGlobal.headTemplateV3 +
'<tbody></tbody>' +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-months">' +
'<table class="table-condensed">' +
DPGlobal.headTemplateV3 +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'<div class="datetimepicker-years">' +
'<table class="table-condensed">' +
DPGlobal.headTemplateV3 +
DPGlobal.contTemplate +
DPGlobal.footTemplate +
'</table>' +
'</div>' +
'</div>';
$.fn.datetimepicker.DPGlobal = DPGlobal;
$.fn.datetimepicker.noConflict = function () {
$.fn.datetimepicker = old;
return this;
};
$(document).on(
'focus.datetimepicker.data-api click.datetimepicker.data-api',
'[data-provide="datetimepicker"]',
function (e) {
var $this = $(this);
if ($this.data('datetimepicker')) return;
e.preventDefault();
$this.datetimepicker('show');
}
);
$(function () {
$('[data-provide="datetimepicker-inline"]').datetimepicker();
});
}));
;(function($){
$.fn.datetimepicker.dates['zh-tw'] = {
days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
today: "今天",
suffix: [],
meridiem: ["上午", "下午"]
};
$.fn.datetimepicker.dates['zh-cn'] = {
days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
today: "今天",
suffix: [],
meridiem: ["上午", "下午"]
};
}(jQuery));
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});