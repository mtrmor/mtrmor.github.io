(0,globalThis.parcelRequiref5f3.register)("4Vc2z",function(n,t){Object.defineProperty(n.exports,"Workbox",{get:()=>h,set:void 0,enumerable:!0,configurable:!0});try{self["workbox:window:7.0.0"]&&_()}catch(n){}function e(n,t){return new Promise(function(e){var r=new MessageChannel;r.port1.onmessage=function(n){e(n.data)},n.postMessage(t,[r.port2])})}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,function(n){var t=function(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==typeof t?t:t+""}(r.key),r)}}function i(n,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n})(n,t)}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}try{self["workbox:core:7.0.0"]&&_()}catch(n){}var a=function(){var n=this;this.promise=new Promise(function(t,e){n.resolve=t,n.reject=e})};function s(n,t){var e=location.href;return new URL(n,e).href===new URL(t,e).href}var c=function(n,t){this.type=n,Object.assign(this,t)};function u(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function f(){}var v={type:"SKIP_WAITING"};function l(n,t){if(!t)return n&&n.then?n.then(f):Promise.resolve()}var h=function(n){function t(t,e){var r,i;return void 0===e&&(e={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new a,r.en=new a,r.on=new a,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,t=n.installing;r.tn>0||!s(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,n.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(n){var t=r.fn,e=n.target,i=e.state,o=e===r.vn,a={sw:e,isExternal:o,originalEvent:n};!o&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new c(i,a)),"installed"===i?r.wn=self.setTimeout(function(){"installed"===i&&t.waiting===e&&r.dispatchEvent(new c("waiting",a))},200):"activating"===i&&(clearTimeout(r.wn),o||r.en.resolve(e))},r.yn=function(n){var t=r.hn,e=t!==navigator.serviceWorker.controller;r.dispatchEvent(new c("controlling",{isExternal:e,originalEvent:n,sw:t,isUpdate:r.mn})),e||r.on.resolve(t)},r.gn=(i=function(n){var t=n.data,e=n.ports,i=n.source;return u(r.getSW(),function(){r.an.has(i)&&r.dispatchEvent(new c("message",{data:t,originalEvent:n,ports:e,sw:i}))})},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(i.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=t,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}t.prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var o,f,h=t.prototype;return h.register=function(n){var t=(void 0===n?{}:n).immediate,e=void 0!==t&&t;try{var r,i,o,a=this;return u((r=function(){if(!e&&"complete"!==document.readyState)return l(new Promise(function(n){return window.addEventListener("load",n)}))},i=function(){return a.mn=!!navigator.serviceWorker.controller,a.dn=a.pn(),u(a.bn(),function(n){a.fn=n,a.dn&&(a.hn=a.dn,a.en.resolve(a.dn),a.on.resolve(a.dn),a.dn.addEventListener("statechange",a.ln,{once:!0}));var t=a.fn.waiting;return t&&s(t.scriptURL,a.sn.toString())&&(a.hn=t,Promise.resolve().then(function(){a.dispatchEvent(new c("waiting",{sw:t,wasWaitingBeforeRegister:!0}))}).then(function(){})),a.hn&&(a.rn.resolve(a.hn),a.an.add(a.hn)),a.fn.addEventListener("updatefound",a.cn),navigator.serviceWorker.addEventListener("controllerchange",a.yn),a.fn})},(o=r())&&o.then?o.then(i):i(o)))}catch(n){return Promise.reject(n)}},h.update=function(){try{return this.fn?u(l(this.fn.update())):u()}catch(n){return Promise.reject(n)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(n){try{return u(this.getSW(),function(t){return e(t,n)})}catch(n){return Promise.reject(n)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&e(this.fn.waiting,v)},h.pn=function(){var n=navigator.serviceWorker.controller;return n&&s(n.scriptURL,this.sn.toString())?n:void 0},h.bn=function(){try{var n=this;return u(function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}(function(){return u(navigator.serviceWorker.register(n.sn,n.nn),function(t){return n.un=performance.now(),t})},function(n){throw n}))}catch(n){return Promise.reject(n)}},o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}],r(t.prototype,o),f&&r(t,f),Object.defineProperty(t,"prototype",{writable:!1}),t}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.jn(n).add(t)},t.removeEventListener=function(n,t){this.jn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,e=function(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(e)return(e=e.call(n)).next.bind(e);if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return o(n,void 0);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,void 0):void 0}}(n))){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(this.jn(n.type));!(t=e()).done;)(0,t.value)(n)},t.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}())});
//# sourceMappingURL=workbox-window.prod.es5.94270204.js.map
