if(!self.define){let e,n={};const c=(c,s)=>(c=new URL(c+".js",s).href,n[c]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=n,document.head.appendChild(e)}else e=c,importScripts(c),n()})).then((()=>{let e=n[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let a={};const t=e=>c(e,r),d={module:{uri:r},exports:a,require:t};n[r]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-d72cbb98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favico.4999cf27.png",revision:"ac910cd4368224b4d4baca4aae86939a"},{url:"favicon-512.db8de74e.png",revision:"86ed135fa37e2e52ac6d350971be497a"},{url:"index.64e8d60e.js",revision:"9471a34b9343c0797ed01c261203f940"},{url:"index.d523016b.css",revision:"76eb4869db86e946007c4f1bc5037212"},{url:"index.html",revision:"781d11347cae08196a17520f05fd15a9"},{url:"index.runtime.b1958578.js",revision:"bb5e1df29985d22fffdbc4a3edeaccdf"}],{}),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"script"===e.destination),new e.StaleWhileRevalidate({cacheName:"js-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"style"===e.destination),new e.StaleWhileRevalidate({cacheName:"css-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:5184e3})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
