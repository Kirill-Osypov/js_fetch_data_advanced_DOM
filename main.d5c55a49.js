parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e="https://mate-academy.github.io/phone-catalogue-static/api/",t=[],c=function(n){return fetch("".concat(e).concat(n)).then(function(n){return n.ok?n.json():Promise.reject("".concat(n.status))})},r=function(){return c("phones.json")};function i(e){Promise.race(e.map(c)).then(function(e){var t=document.createElement("div");t.setAttribute("class","first-received"),t.innerText=e.name,n.appendChild(t)})}function o(e){var t=e.slice(),r=a("Three Fastest","");Promise.race(t.map(c)).then(function(n){var e=document.createElement("li");return e.innerText=n.name,r.appendChild(e),n}).then(function(e){t=t.filter(function(n){return n!=="phones/".concat(e.id,".json")}),Promise.race(t.map(c)).then(function(n){var e=document.createElement("li");return e.innerText=n.name,r.appendChild(e),n}).then(function(e){t=t.filter(function(n){return n!=="phones/".concat(e.id,".json")}),Promise.race(t.map(c)).then(function(n){var e=document.createElement("li");e.innerText=n.name,r.appendChild(e)}).then(function(){return n.appendChild(r)})})})}function a(n,e){var t=document.createElement("ul"),c=document.createElement("h3");return c.innerText="".concat(n),t.setAttribute("class","".concat(e)),t.appendChild(c),t}function u(e){var t=a("All Successful","all-successful");e.forEach(function(n){return c(n).then(function(n){var e=document.createElement("li");e.setAttribute("id","".concat(n.id)),e.innerText=n.name,t.appendChild(e)})}),n.appendChild(t)}r().then(function(n){return n.forEach(function(n){return t.push("phones/".concat(n.id,".json"))})}).then(function(){return i(t)}).then(function(){return u(t)}).then(function(){return o(t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d5c55a49.js.map