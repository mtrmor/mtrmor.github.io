if(!self.define){let e,n={};const c=(c,s)=>(c=new URL(c+".js",s).href,n[c]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=n,document.head.appendChild(e)}else e=c,importScripts(c),n()})).then((()=>{let e=n[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let a={};const t=e=>c(e,r),o={module:{uri:r},exports:a,require:t};n[r]=Promise.all(s.map((e=>o[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-d72cbb98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favico.4999cf27.png",revision:"ac910cd4368224b4d4baca4aae86939a"},{url:"favicon-512.db8de74e.png",revision:"86ed135fa37e2e52ac6d350971be497a"},{url:"index.38884013.js",revision:"175f96fd5046739d3abae1c5b8d40c8d"},{url:"index.4ec97115.css",revision:"c84f2e52aa99f7314fc43e6ef0fb1702"},{url:"index.html",revision:"7958abdf9f6964f23c5b6ab8b062be3e"},{url:"index.runtime.5be17b60.js",revision:"3f241d5067d2830fc1f96e76743f92e0"}],{}),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"script"===e.destination),new e.StaleWhileRevalidate({cacheName:"js-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"style"===e.destination),new e.StaleWhileRevalidate({cacheName:"css-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:5184e3})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
