System.register([],(function(e){"use strict";return{execute:function(){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e("g",(function(e){return typeof e})):e("g",(function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})))(n)}function n(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function l(t){return(l=e("f",Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)}))(t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&c(i,n.prototype),i}).apply(null,arguments)}function p(t){var n="function"==typeof Map?new Map:void 0;return(p=e("c",(function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return h(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})))(t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?d(e):t}function y(t,n,r){return(y="undefined"!=typeof Reflect&&Reflect.get?e("i",Reflect.get):e("i",(function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})))(t,n,r||t)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e({_:function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,u,"next",e)}function u(e){n(a,i,o,s,u,"throw",e)}s(void 0)}))}},a:u,b:o,c:p,d:r,e:v,f:l,g:t,h:m,i:y,k:function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},m:d,o:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},p:function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */()},q:a,s:function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},t:Q});var g=new WeakMap,_=e("v",(function(e){return function(){var t=e.apply(void 0,arguments);return g.set(t,!0),t}})),b=function(e){return"function"==typeof e&&g.has(e)},w=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,x=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},S={},N={},O="{{lit-".concat(String(Math.random()).slice(2),"}}"),k="\x3c!--".concat(O,"--\x3e"),E=new RegExp("".concat(O,"|").concat(k)),j=function e(t,n){r(this,e),this.parts=[],this.element=n;for(var i=[],o=[],a=document.createTreeWalker(n.content,133,null,!1),s=0,u=-1,l=0,c=t.strings,f=t.values.length;l<f;){var h=a.nextNode();if(null!==h){if(u++,1===h.nodeType){if(h.hasAttributes()){for(var p=h.attributes,d=p.length,v=0,y=0;y<d;y++)T(p[y].name,"$lit$")&&v++;for(;v-- >0;){var m=c[l],g=P.exec(m)[2],_=g.toLowerCase()+"$lit$",b=h.getAttribute(_);h.removeAttribute(_);var w=b.split(E);this.parts.push({type:"attribute",index:u,name:g,strings:w}),l+=w.length-1}}"TEMPLATE"===h.tagName&&(o.push(h),a.currentNode=h.content)}else if(3===h.nodeType){var x=h.data;if(x.indexOf(O)>=0){for(var S=h.parentNode,N=x.split(E),k=N.length-1,j=0;j<k;j++){var A=void 0,C=N[j];if(""===C)A=V();else{var M=P.exec(C);null!==M&&T(M[2],"$lit$")&&(C=C.slice(0,M.index)+M[1]+M[2].slice(0,-"$lit$".length)+M[3]),A=document.createTextNode(C)}S.insertBefore(A,h),this.parts.push({type:"node",index:++u})}""===N[k]?(S.insertBefore(V(),h),i.push(h)):h.data=N[k],l+=k}}else if(8===h.nodeType)if(h.data===O){var R=h.parentNode;null!==h.previousSibling&&u!==s||(u++,R.insertBefore(V(),h)),s=u,this.parts.push({type:"node",index:u}),null===h.nextSibling?h.data="":(i.push(h),u--),l++}else for(var I=-1;-1!==(I=h.data.indexOf(O,I+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var L=0,W=i;L<W.length;L++){var $=W[L];$.parentNode.removeChild($)}},T=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},A=function(e){return-1!==e.index},V=function(){return document.createComment("")},P=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,C=function(){function e(t,n,i){r(this,e),this.__parts=[],this.template=t,this.processor=n,this.options=i}return o(e,[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this.__parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var u=!0,l=!1,c=void 0;try{for(var f,h=this.__parts[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var p=f.value;void 0!==p&&p.commit()}}catch(e){l=!0,c=e}finally{try{u||null==h.return||h.return()}finally{if(l)throw c}}}},{key:"_clone",value:function(){for(var e,t=w?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(e=r[o],A(e)){for(;a<e.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var l;(l=this.__parts).push.apply(l,m(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return w&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),M=" ".concat(O," "),R=e("T",function(){function e(t,n,i,o){r(this,e),this.strings=t,this.values=n,this.type=i,this.processor=o}return o(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=P.exec(i);t+=null===a?i+(n?M:k):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+O}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}()),I=function(e){return null===e||!("object"===t(e)||"function"==typeof e)},L=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},W=function(){function e(t,n,i){r(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return o(e,[{key:"_createPart",value:function(){return new $(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(I(o)||!L(o))n+="string"==typeof o?o:String(o);else{var a=!0,s=!1,u=void 0;try{for(var l,c=o[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var f=l.value;n+="string"==typeof f?f:String(f)}}catch(e){s=!0,u=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw u}}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),$=function(){function e(t){r(this,e),this.value=void 0,this.committer=t}return o(e,[{key:"setValue",value:function(e){e===S||I(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;b(this.value);){var e=this.value;this.value=S,e(this)}this.value!==S&&this.committer.commit()}}]),e}(),D=e("N",function(){function e(t){r(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return o(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(V()),this.endNode=e.appendChild(V())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=V()),e.__insert(this.endNode=V())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=V()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;b(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}var t=this.__pendingValue;t!==S&&(I(t)?t!==this.value&&this.__commitText(t):t instanceof R?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):L(t)?this.__commitIterable(t):t===N?(this.value=N,this.clear()):this.__commitText(t))}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof C&&this.value.template===t)this.value.update(e.values);else{var n=new C(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r=this.value,i=0,o=!0,a=!1,s=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;void 0===(n=r[i])&&(n=new e(this.options),r.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(c),n.commit(),i++}}catch(e){a=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}i<r.length&&(r.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;x(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}()),F=function(){function e(t,n,i){if(r(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=i}return o(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;b(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=S}}}]),e}(),B=function(e){function t(e,n,i){var o;return r(this,t),(o=v(this,l(t).call(this,e,n,i))).single=2===i.length&&""===i[0]&&""===i[1],o}return u(t,e),o(t,[{key:"_createPart",value:function(){return new H(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(l(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(W),H=function(e){function t(){return r(this,t),v(this,l(t).apply(this,arguments))}return u(t,e),t}($),q=!1;try{var z={get capture(){return q=!0,!1}};window.addEventListener("test",z,z),window.removeEventListener("test",z,z)}catch(e){}var G=function(){function e(t,n,i){var o=this;r(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return o(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;b(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=S,e(this)}if(this.__pendingValue!==S){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=J(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=S}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),J=function(e){return e&&(q?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},K=new(function(){function e(){r(this,e)}return o(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new B(e,t.slice(1),n).parts:"@"===i?[new G(e,t.slice(1),r.eventContext)]:"?"===i?[new F(e,t.slice(1),n)]:new W(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new D(e)}}]),e}());
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
function Q(e){var t=U.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},U.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(O);return void 0===(n=t.keyString.get(r))&&(n=new j(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var U=new Map,X=new WeakMap,Y=e("r",(function(e,t,n){var r=X.get(t);void 0===r&&(x(t,t.firstChild),X.set(t,r=new D(Object.assign({templateFactory:Q},n))),r.appendInto(t)),r.setValue(e),r.commit()}));
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");e("l",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new R(e,n,"html",K)}));
/**
       * @license
       * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */function Z(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,133,null,!1),o=te(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var f=i.currentNode;for(f.previousSibling===c&&(c=null),t.has(f)&&(l.push(f),null===c&&(c=f)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=te(r,o)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}var ee=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,133,null,!1);n.nextNode();)t++;return t},te=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(A(r))return n}return-1};var ne=function(e,t){return"".concat(e,"--").concat(t)},re=!0;void 0===window.ShadyCSS?re=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),re=!1);var ie=function(e){return function(t){var n=ne(t.type,e),r=U.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},U.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(O);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();re&&window.ShadyCSS.prepareTemplateDom(a,e),i=new j(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},oe=["html","svg"],ae=new Set,se=function(e,t,n){ae.add(e);var r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),o=i.length;if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){oe.forEach((function(t){var n=U.get(ne(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),Z(e,n)}))}))}(e);var l=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,133,null,!1),a=te(i),s=0,u=-1;o.nextNode();){u++;var l=o.currentNode;for(l===n&&(s=ee(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=te(i,a);return}a=te(i,a)}}else r.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var f=new Set;f.add(a),Z(n,f)}}else window.ShadyCSS.prepareTemplateStyles(r,e)},ue=(e("j",(function(e,n,r){if(!r||"object"!==t(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var i=r.scopeName,o=X.has(n),a=re&&11===n.nodeType&&!!n.host,s=a&&!ae.has(i),u=s?document.createDocumentFragment():n;if(Y(e,u,Object.assign({templateFactory:ie(i)},r)),s){var l=X.get(u);X.delete(u);var c=l.value instanceof C?l.value.template:void 0;se(i,u,c),x(n,n.firstChild),n.appendChild(u),X.set(n,l)}!o&&a&&window.ShadyCSS.styleElement(n.host)})),e("n",_((function(e){return function(t){if(void 0===e&&t instanceof $){if(e!==t.value){var n=t.committer.name;t.committer.element.removeAttribute(n)}}else t.setValue(e)}}))),new WeakMap);e("u",_((function(e){return function(t){if(!(t instanceof $)||t instanceof H||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");var n=t.committer,r=n.element;ue.has(t)||(r.className=n.strings.join(" "));var i=r.classList,o=ue.get(t);for(var a in o)a in e||i.remove(a);for(var s in e){var u=e[s];if(!o||u!==o[s])i[u?"add":"remove"](s)}ue.set(t,e)}})))}}}));
//# sourceMappingURL=lit-html-24a5182c.js.map
