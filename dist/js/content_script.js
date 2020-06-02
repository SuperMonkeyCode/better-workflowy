!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),r=n(4);o.default.filter=function(e){return!0},chrome.storage.sync.get({hotkeys:[],calcTotalTime:!0},(function({hotkeys:e,calcTotalTime:t}){t&&(r.highlight(),r.renderTotalTime(),r.createObserver());for(const t of e)o.default(`${t.specialKey}+${t.key}`,(function(e,n){e.preventDefault(),t.hash?location.hash=`?q=#${t.hash} `:location.hash=""}))}))},function(e,t,n){"use strict";n.r(t);
/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */
var o="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function r(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function i(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function c(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var a={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":o?173:189,"=":o?61:187,";":o?59:186,"'":222,"[":219,"]":221,"\\":220},l={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},s={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},f={16:!1,18:!1,17:!1,91:!1},u={},d=1;d<20;d++)a["f".concat(d)]=111+d;var p=[],y="all",h=[],g=function(e){return a[e.toLowerCase()]||l[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function v(e){y=e||"all"}function m(){return y||"all"}var b=function(e){var t=e.key,n=e.scope,o=e.method,r=e.splitKey,a=void 0===r?"+":r;c(t).forEach((function(e){var t=e.split(a),r=t.length,c=t[r-1],s="*"===c?"*":g(c);if(u[s]){n||(n=m());var f=r>1?i(l,t):[];u[s]=u[s].map((function(e){return(!o||e.method===o)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,r=!0,i=0;i<n.length;i++)-1===o.indexOf(n[i])&&(r=!1);return r}(e.mods,f)?{}:e}))}}))};function O(e,t,n){var o;if(t.scope===n||"all"===t.scope){for(var r in o=t.mods.length>0,f)Object.prototype.hasOwnProperty.call(f,r)&&(!f[r]&&t.mods.indexOf(+r)>-1||f[r]&&-1===t.mods.indexOf(+r))&&(o=!1);(0!==t.mods.length||f[16]||f[18]||f[17]||f[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function w(e){var t=u["*"],n=e.keyCode||e.which||e.charCode;if(k.filter.call(this,e)){if(93!==n&&224!==n||(n=91),-1===p.indexOf(n)&&229!==n&&p.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=s[t];e[t]&&-1===p.indexOf(n)?p.push(n):!e[t]&&p.indexOf(n)>-1?p.splice(p.indexOf(n),1):"metaKey"===t&&e[t]&&3===p.length&&(e.ctrlKey||e.shiftKey||e.altKey||(p=p.slice(p.indexOf(n))))})),n in f){for(var o in f[n]=!0,l)l[o]===n&&(k[o]=!0);if(!t)return}for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&(f[r]=e[s[r]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===p.indexOf(17)&&p.push(17),-1===p.indexOf(18)&&p.push(18),f[17]=!0,f[18]=!0);var i=m();if(t)for(var c=0;c<t.length;c++)t[c].scope===i&&("keydown"===e.type&&t[c].keydown||"keyup"===e.type&&t[c].keyup)&&O(e,t[c],i);if(n in u)for(var a=0;a<u[n].length;a++)if(("keydown"===e.type&&u[n][a].keydown||"keyup"===e.type&&u[n][a].keyup)&&u[n][a].key){for(var d=u[n][a],y=d.splitKey,h=d.key.split(y),v=[],b=0;b<h.length;b++)v.push(g(h[b]));v.sort().join("")===p.sort().join("")&&O(e,d,i)}}}function k(e,t,n){p=[];var o=c(e),a=[],s="all",d=document,y=0,v=!1,m=!0,b="+";for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(s=t.scope),t.element&&(d=t.element),t.keyup&&(v=t.keyup),void 0!==t.keydown&&(m=t.keydown),"string"==typeof t.splitKey&&(b=t.splitKey)),"string"==typeof t&&(s=t);y<o.length;y++)a=[],(e=o[y].split(b)).length>1&&(a=i(l,e)),(e="*"===(e=e[e.length-1])?"*":g(e))in u||(u[e]=[]),u[e].push({keyup:v,keydown:m,scope:s,mods:a,shortcut:o[y],method:n,key:o[y],splitKey:b});void 0!==d&&!function(e){return h.indexOf(e)>-1}(d)&&window&&(h.push(d),r(d,"keydown",(function(e){w(e)})),r(window,"focus",(function(){p=[]})),r(d,"keyup",(function(e){w(e),function(e){var t=e.keyCode||e.which||e.charCode,n=p.indexOf(t);if(n>=0&&p.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&p.splice(0,p.length),93!==t&&224!==t||(t=91),t in f)for(var o in f[t]=!1,l)l[o]===t&&(k[o]=!1)}(e)})))}var x={setScope:v,getScope:m,deleteScope:function(e,t){var n,o;for(var r in e||(e=m()),u)if(Object.prototype.hasOwnProperty.call(u,r))for(n=u[r],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;m()===e&&v(t||"all")},getPressedKeyCodes:function(){return p.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=g(e)),-1!==p.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(o=!1),o},unbind:function(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&b(e)}));else if("object"==typeof e)e.key&&b(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=n[0],i=n[1];"function"==typeof r&&(i=r,r=""),b({key:e,scope:r,method:i,splitKey:"+"})}}else Object.keys(u).forEach((function(e){return delete u[e]}))}};for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&(k[T]=x[T]);if("undefined"!=typeof window){var K=window.hotkeys;k.noConflict=function(e){return e&&window.hotkeys===k&&(window.hotkeys=K),k},window.hotkeys=k}t.default=k},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlight=t.renderTotalTime=t.getTagSeconds=t.createObserver=void 0;function o(e){if(!/^#(\d+(d|h|m|s))+$/.test(e))return 0;let t=0;const n=e.match(/(\d+)\s*d/),o=e.match(/(\d+)\s*h/),r=e.match(/(\d+)\s*m/),i=e.match(/(\d+)\s*s/);return n&&(t+=86400*parseInt(n[1])),o&&(t+=3600*parseInt(o[1])),r&&(t+=60*parseInt(r[1])),i&&(t+=parseInt(i[1])),t}function r(){const e=document.querySelector(".scroller");if(!e)return;let t=[...document.querySelectorAll(".contentTag")].map(e=>e.innerText).reduce((e,t)=>e+o(t),0);const n=Math.floor(t/86400);n>0&&(t-=86400*n);const r=Math.floor(t/3600);r>0&&(t-=3600*r);const i=Math.floor(t/60);i>0&&(t-=60*i);const c="Total time: <b>"+(n>0?n+"d ":"")+(r>0?r+"h ":"")+(i>0?i+"m ":"")+(t>0?t+"s":"")+"</b>",a=document.getElementById("cte-counter");if(a)a.innerHTML=c;else{const t=document.createElement("div");t.innerHTML=c,t.id="cte-counter",t.style.paddingLeft="23px",e.appendChild(t)}}function i(){const e=document.querySelectorAll(".contentTag");for(const t of e)o(t.innerText)>0&&(t.style.outline="1px dashed #13cbd3")}t.createObserver=function(){new MutationObserver((function(e){for(const t of e)for(const e of t.addedNodes)if(e.classList&&e.classList.contains("innerContentContainer")){e.querySelector(".contentTagText")&&(i(),r())}})).observe(document.body,{childList:!0,subtree:!0})},t.getTagSeconds=o,t.renderTotalTime=r,t.highlight=i}]);