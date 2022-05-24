(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),a=n.n(o),r=n(645),c=n.n(r)()(a());c.push([e.id,".header {\n    display: flex;\n    justify-content: center;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=r[d]||0,l="".concat(d," ").concat(u);r[d]=u+1;var m=n(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=a(p,o);o.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var s=o(e,a),d=0;d<r.length;d++){var u=n(r[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");e.append(o,a),o.textContent="Testimonials",a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lacinia mauris. Proin consectetur, lorem eget ullamcorper ornare, nisi eros porta est, ut interdum turpis dolor quis nunc. Suspendisse vitae tempor est. Sed rutrum vitae tellus mollis commodo. Proin aliquam bibendum libero et dignissim. Ut efficitur congue nisi. Sed purus augue, interdum vitae rutrum sit amet, mollis quis magna. Praesent non sodales lacus. Aenean fringilla metus risus, interdum fringilla nisi cursus at. Praesent lacinia iaculis tellus, vitae lobortis lorem placerat vel. Ut sit amet malesuada risus.",t.classList.add("hours");const r=document.createElement("div");r.textContent="Hours";const c=document.createElement("ul");r.classList.add("section-title"),c.classList.add("container"),t.append(r,c);const i=document.createElement("li"),s=document.createElement("li"),d=document.createElement("li"),u=document.createElement("li"),l=document.createElement("li"),m=document.createElement("li"),p=document.createElement("li");c.append(i,s,d,u,l,m,p),i.append(document.createTextNode("Sunday : 10a.m. - 8p.m.")),s.append(document.createTextNode("Monday : 10a.m. - 8p.m.")),d.append(document.createTextNode("Tuesday : 10a.m. - 8p.m.")),u.append(document.createTextNode("Wednesday : 10a.m. - 8p.m.")),l.append(document.createTextNode("Thursday : 10a.m. - 8p.m.")),m.append(document.createTextNode("Friday : 10a.m. - 8p.m.")),p.append(document.createTextNode("Saturday : 10a.m. - 8p.m.")),n.classList.add("location");const f=document.createElement("div"),v=document.createElement("div");return f.classList.add("section-title"),v.classList.add("container"),n.append(f,v),f.textContent="Location",v.textContent="123 Beep Boop Street",{testimonial:e,hours:t,location:n}},t=()=>{const e=document.getElementById("content");for(;e.children.length>1;)e.children[1].remove()};var o=n(379),a=n.n(o),r=n(795),c=n.n(r),i=n(569),s=n.n(i),d=n(565),u=n.n(d),l=n(216),m=n.n(l),p=n(589),f=n.n(p),v=n(890),y={};y.styleTagTransform=f(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=m(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,(()=>{const t=document.getElementById("content"),n=(()=>{const e=document.createElement("div");e.classList.add("header");const t=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button");return e.append(t,n,o),t.classList.add("tab"),t.id="home-tab",t.textContent="Home",n.classList.add("tab"),n.id="menu-tab",n.textContent="Menu",o.classList.add("tab"),o.id="contact-tab",o.textContent="Contact",e})();t.append(n);const{testimonial:o,hours:a,location:r}=e();t.append(o,a,r)})();const h=document.querySelector("#content"),x=document.querySelector("#home-tab"),b=document.querySelector("#menu-tab"),g=document.querySelector("#contact-tab");x.addEventListener("click",(()=>{t();const{testimonial:n,hours:o,location:a}=e();h.append(n,o,a)})),b.addEventListener("click",(()=>{t();const{food:e}=(()=>{const e=document.createElement("div");return e.classList="food menu",e.textContent="Some food...",{food:e}})();h.append(e)})),g.addEventListener("click",(()=>{t();const{myContact:e}=(()=>{const e=document.createElement("div");return e.classList="contact",e.textContent="Some contacts...",{myContact:e}})();h.append(e)}))})()})();