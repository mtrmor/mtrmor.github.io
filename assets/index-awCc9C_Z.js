(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const $n=!1;var $e=Array.isArray,Ve=Array.from,Vn=Object.defineProperty,le=Object.getOwnPropertyDescriptor,Yn=Object.getOwnPropertyDescriptors,Xn=Object.prototype,jn=Array.prototype,cn=Object.getPrototypeOf;function Kn(e){return e()}function De(e){for(var n=0;n<e.length;n++)e[n]()}const H=2,vn=4,Se=8,Ye=16,L=32,be=64,W=128,he=256,M=512,j=1024,se=2048,R=4096,ae=8192,Un=16384,xe=32768,Wn=1<<18,_n=1<<19,ee=Symbol("$state");function dn(e){return e===this.v}function zn(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Zn(e){return!zn(e,this.v)}function Gn(e){throw new Error("effect_in_teardown")}function Jn(){throw new Error("effect_in_unowned_derived")}function Qn(e){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function nt(){throw new Error("state_descriptors_fixed")}function tt(){throw new Error("state_prototype_fixed")}function rt(){throw new Error("state_unsafe_local_read")}function it(){throw new Error("state_unsafe_mutation")}let ce=!1;function lt(){ce=!0}function D(e){return{f:0,v:e,reactions:null,equals:dn,version:0}}function $(e){return ot(D(e))}function ut(e,n=!1){var r;const t=D(e);return n||(t.equals=Zn),ce&&w!==null&&w.l!==null&&((r=w.l).s??(r.s=[])).push(t),t}function ot(e){return m!==null&&m.f&H&&(F===null?bt([e]):F.push(e)),e}function E(e,n){return m!==null&&ze()&&m.f&(H|Ye)&&(F===null||!F.includes(e))&&it(),hn(e,n)}function hn(e,n){return e.equals(n)||(e.v=n,e.version=Dn(),pn(e,j),ze()&&h!==null&&h.f&M&&!(h.f&L)&&(T!==null&&T.includes(e)?(B(h,j),Ae(h)):X===null?xt([e]):X.push(e))),n}function pn(e,n){var t=e.reactions;if(t!==null)for(var r=ze(),i=t.length,l=0;l<i;l++){var o=t[l],v=o.f;v&j||!r&&o===h||(B(o,n),v&(M|W)&&(v&H?pn(o,se):Ae(o)))}}const ft=1,st=2,at=16,ct=2,O=Symbol();let vt=!1;function C(e,n=null,t){if(typeof e!="object"||e===null||ee in e)return e;const r=cn(e);if(r!==Xn&&r!==jn)return e;var i=new Map,l=$e(e),o=D(0);l&&i.set("length",D(e.length));var v;return new Proxy(e,{defineProperty(s,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&nt();var c=i.get(f);return c===void 0?(c=D(u.value),i.set(f,c)):E(c,C(u.value,v)),!0},deleteProperty(s,f){var u=i.get(f);if(u===void 0)f in s&&i.set(f,D(O));else{if(l&&typeof f=="string"){var c=i.get("length"),a=Number(f);Number.isInteger(a)&&a<c.v&&E(c,a)}E(u,O),Qe(o)}return!0},get(s,f,u){var d;if(f===ee)return e;var c=i.get(f),a=f in s;if(c===void 0&&(!a||(d=le(s,f))!=null&&d.writable)&&(c=D(C(a?s[f]:O,v)),i.set(f,c)),c!==void 0){var _=g(c);return _===O?void 0:_}return Reflect.get(s,f,u)},getOwnPropertyDescriptor(s,f){var u=Reflect.getOwnPropertyDescriptor(s,f);if(u&&"value"in u){var c=i.get(f);c&&(u.value=g(c))}else if(u===void 0){var a=i.get(f),_=a==null?void 0:a.v;if(a!==void 0&&_!==O)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return u},has(s,f){var _;if(f===ee)return!0;var u=i.get(f),c=u!==void 0&&u.v!==O||Reflect.has(s,f);if(u!==void 0||h!==null&&(!c||(_=le(s,f))!=null&&_.writable)){u===void 0&&(u=D(c?C(s[f],v):O),i.set(f,u));var a=g(u);if(a===O)return!1}return c},set(s,f,u,c){var b;var a=i.get(f),_=f in s;if(l&&f==="length")for(var d=u;d<a.v;d+=1){var S=i.get(d+"");S!==void 0?E(S,O):d in s&&(S=D(O),i.set(d+"",S))}a===void 0?(!_||(b=le(s,f))!=null&&b.writable)&&(a=D(void 0),E(a,C(u,v)),i.set(f,a)):(_=a.v!==O,E(a,C(u,v)));var A=Reflect.getOwnPropertyDescriptor(s,f);if(A!=null&&A.set&&A.set.call(c,u),!_){if(l&&typeof f=="string"){var y=i.get("length"),x=Number(f);Number.isInteger(x)&&x>=y.v&&E(y,x+1)}Qe(o)}return!0},ownKeys(s){g(o);var f=Reflect.ownKeys(s).filter(a=>{var _=i.get(a);return _===void 0||_.v!==O});for(var[u,c]of i)c.v!==O&&!(u in s)&&f.push(u);return f},setPrototypeOf(){tt()}})}function Qe(e,n=1){E(e,e.v+n)}var en,mn,yn;function _t(){if(en===void 0){en=window;var e=Element.prototype,n=Node.prototype;mn=le(n,"firstChild").get,yn=le(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function dt(e=""){return document.createTextNode(e)}function gn(e){return mn.call(e)}function Xe(e){return yn.call(e)}function U(e,n){return gn(e)}function pe(e,n=1,t=!1){let r=e;for(;n--;)r=Xe(r);return r}function ht(e){e.textContent=""}function ue(e){var n=H|j;h===null?n|=W:h.f|=_n;const t={children:null,ctx:w,deps:null,equals:dn,f:n,fn:e,reactions:null,v:null,version:0,parent:h};if(m!==null&&m.f&H){var r=m;(r.children??(r.children=[])).push(t)}return t}function wn(e){var n=e.children;if(n!==null){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];r.f&H?je(r):z(r)}}}function En(e){var n,t=h;ie(e.parent);try{wn(e),n=Mn(e)}finally{ie(t)}return n}function Sn(e){var n=En(e),t=(J||e.f&W)&&e.deps!==null?se:M;B(e,t),e.equals(n)||(e.v=n,e.version=Dn())}function je(e){wn(e),fe(e,0),B(e,ae),e.v=e.children=e.deps=e.ctx=e.reactions=null}function bn(e){h===null&&m===null&&Qn(),m!==null&&m.f&W&&Jn(),We&&Gn()}function pt(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function ve(e,n,t,r=!0){var i=(e&be)!==0,l=h,o={ctx:w,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:n,last:null,next:null,parent:i?null:l,prev:null,teardown:null,transitions:null,version:0};if(t){var v=ne;try{tn(!0),Te(o),o.f|=Un}catch(u){throw z(o),u}finally{tn(v)}}else n!==null&&Ae(o);var s=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&_n)===0;if(!s&&!i&&r&&(l!==null&&pt(o,l),m!==null&&m.f&H)){var f=m;(f.children??(f.children=[])).push(o)}return o}function me(e){bn();var n=h!==null&&(h.f&L)!==0&&w!==null&&!w.m;if(n){var t=w;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:m})}else{var r=Ke(e);return r}}function mt(e){return bn(),xn(e)}function yt(e){const n=ve(be,e,!0);return()=>{z(n)}}function Ke(e){return ve(vn,e,!1)}function xn(e){return ve(Se,e,!0)}function nn(e){return ke(e)}function ke(e,n=0){return ve(Se|Ye|n,e,!0)}function te(e,n=!0){return ve(Se|L,e,!0,n)}function kn(e){var n=e.teardown;if(n!==null){const t=We,r=m;rn(!0),re(null);try{n.call(null)}finally{rn(t),re(r)}}}function Tn(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var t=0;t<n.length;t+=1)je(n[t])}}function An(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;z(t,n),t=r}}function gt(e){for(var n=e.first;n!==null;){var t=n.next;n.f&L||z(n),n=t}}function z(e,n=!0){var t=!1;if((n||e.f&Wn)&&e.nodes_start!==null){for(var r=e.nodes_start,i=e.nodes_end;r!==null;){var l=r===i?null:Xe(r);r.remove(),r=l}t=!0}An(e,n&&!t),Tn(e),fe(e,0),B(e,ae);var o=e.transitions;if(o!==null)for(const s of o)s.stop();kn(e);var v=e.parent;v!==null&&v.first!==null&&In(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function In(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function ye(e,n){var t=[];Ue(e,t,!0),Nn(t,()=>{z(e),n&&n()})}function Nn(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Ue(e,n,t){if(!(e.f&R)){if(e.f^=R,e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&n.push(o);for(var r=e.first;r!==null;){var i=r.next,l=(r.f&xe)!==0||(r.f&L)!==0;Ue(r,n,l?t:!1),r=i}}}function ge(e){On(e,!0)}function On(e,n){if(e.f&R){_e(e)&&Te(e),e.f^=R;for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xe)!==0||(t.f&L)!==0;On(t,i?n:!1),t=r}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||n)&&l.in()}}let Me=!1,Ce=[];function wt(){Me=!1;const e=Ce.slice();Ce=[],De(e)}function Et(e){Me||(Me=!0,queueMicrotask(wt)),Ce.push(e)}function St(e){throw new Error("lifecycle_outside_component")}let we=!1,ne=!1,We=!1;function tn(e){ne=e}function rn(e){We=e}let Re=[],oe=0;let m=null;function re(e){m=e}let h=null;function ie(e){h=e}let F=null;function bt(e){F=e}let T=null,P=0,X=null;function xt(e){X=e}let Pn=0,J=!1,w=null;function Dn(){return++Pn}function ze(){return!ce||w!==null&&w.l===null}function _e(e){var o,v;var n=e.f;if(n&j)return!0;if(n&se){var t=e.deps,r=(n&W)!==0;if(t!==null){var i;if(n&he){for(i=0;i<t.length;i++)((o=t[i]).reactions??(o.reactions=[])).push(e);e.f^=he}for(i=0;i<t.length;i++){var l=t[i];if(_e(l)&&Sn(l),r&&h!==null&&!J&&!((v=l==null?void 0:l.reactions)!=null&&v.includes(e))&&(l.reactions??(l.reactions=[])).push(e),l.version>e.version)return!0}}r||B(e,M)}return!1}function kt(e,n,t){throw e}function Mn(e){var a;var n=T,t=P,r=X,i=m,l=J,o=F,v=w,s=e.f;T=null,P=0,X=null,m=s&(L|be)?null:e,J=!ne&&(s&W)!==0,F=null,w=e.ctx;try{var f=(0,e.fn)(),u=e.deps;if(T!==null){var c;if(fe(e,P),u!==null&&P>0)for(u.length=P+T.length,c=0;c<T.length;c++)u[P+c]=T[c];else e.deps=u=T;if(!J)for(c=P;c<u.length;c++)((a=u[c]).reactions??(a.reactions=[])).push(e)}else u!==null&&P<u.length&&(fe(e,P),u.length=P);return f}finally{T=n,P=t,X=r,m=i,J=l,F=o,w=v}}function Tt(e,n){let t=n.reactions;if(t!==null){var r=t.indexOf(e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&n.f&H&&(T===null||!T.includes(n))&&(B(n,se),n.f&(W|he)||(n.f^=he),fe(n,0))}function fe(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Tt(e,t[r])}function Te(e){var n=e.f;if(!(n&ae)){B(e,M);var t=h;h=e;try{n&Ye?gt(e):An(e),Tn(e),kn(e);var r=Mn(e);e.teardown=typeof r=="function"?r:null,e.version=Pn}catch(i){kt(i)}finally{h=t}}}function At(){oe>1e3&&(oe=0,et()),oe++}function It(e){var n=e.length;if(n!==0){At();var t=ne;ne=!0;try{for(var r=0;r<n;r++){var i=e[r];i.f&M||(i.f^=M);var l=[];Cn(i,l),Nt(l)}}finally{ne=t}}}function Nt(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];!(r.f&(ae|R))&&_e(r)&&(Te(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?In(r):r.fn=null))}}function Ot(){if(we=!1,oe>1001)return;const e=Re;Re=[],It(e),we||(oe=0)}function Ae(e){we||(we=!0,queueMicrotask(Ot));for(var n=e;n.parent!==null;){n=n.parent;var t=n.f;if(t&(be|L)){if(!(t&M))return;n.f^=M}}Re.push(n)}function Cn(e,n){var t=e.first,r=[];e:for(;t!==null;){var i=t.f,l=(i&L)!==0,o=l&&(i&M)!==0;if(!o&&!(i&R))if(i&Se){l?t.f^=M:_e(t)&&Te(t);var v=t.first;if(v!==null){t=v;continue}}else i&vn&&r.push(t);var s=t.next;if(s===null){let c=t.parent;for(;c!==null;){if(e===c)break e;var f=c.next;if(f!==null){t=f;continue e}c=c.parent}}t=s}for(var u=0;u<r.length;u++)v=r[u],n.push(v),Cn(v,n)}function g(e){var v;var n=e.f,t=(n&H)!==0;if(t&&n&ae){var r=En(e);return je(e),r}if(m!==null){F!==null&&F.includes(e)&&rt();var i=m.deps;T===null&&i!==null&&i[P]===e?P++:T===null?T=[e]:T.push(e),X!==null&&h!==null&&h.f&M&&!(h.f&L)&&X.includes(e)&&(B(h,j),Ae(h))}else if(t&&e.deps===null){var l=e,o=l.parent;o!==null&&!((v=o.deriveds)!=null&&v.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return t&&(l=e,_e(l)&&Sn(l)),e.v}function Ze(e){const n=m;try{return m=null,e()}finally{m=n}}const Pt=~(j|se|M);function B(e,n){e.f=e.f&Pt|n}function Ie(e,n=!1,t){w={p:w,c:null,e:null,m:!1,s:e,x:null,l:null},ce&&!n&&(w.l={s:null,u:null,r1:[],r2:D(!1)})}function Ne(e){const n=w;if(n!==null){const o=n.e;if(o!==null){var t=h,r=m;n.e=null;try{for(var i=0;i<o.length;i++){var l=o[i];ie(l.effect),re(l.reaction),Ke(l.fn)}}finally{ie(t),re(r)}}w=n.p,n.m=!0}return{}}function Dt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ee in e)Fe(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&ee in t&&Fe(t)}}}function Fe(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Fe(e[r],n)}catch{}const t=cn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Yn(t);for(let i in r){const l=r[i].get;if(l)try{l.call(e)}catch{}}}}}const Rn=new Set,qe=new Set;function Ge(e){for(var n=0;n<e.length;n++)Rn.add(e[n]);for(var t of qe)t(e)}function de(e){var x;var n=this,t=n.ownerDocument,r=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],l=i[0]||e.target,o=0,v=e.__root;if(v){var s=i.indexOf(v);if(s!==-1&&(n===document||n===window)){e.__root=n;return}var f=i.indexOf(n);if(f===-1)return;s<=f&&(o=s)}if(l=i[o]||e.target,l!==n){Vn(e,"currentTarget",{configurable:!0,get(){return l||t}});var u=m,c=h;re(null),ie(null);try{for(var a,_=[];l!==null;){var d=l.assignedSlot||l.parentNode||l.host||null;try{var S=l["__"+r];if(S!==void 0&&!l.disabled)if($e(S)){var[A,...y]=S;A.apply(l,[e,...y])}else S.call(l,e)}catch(b){a?_.push(b):a=b}if(e.cancelBubble||d===n||d===null)break;l=d}if(a){for(let b of _)queueMicrotask(()=>{throw b});throw a}}finally{e.__root=n,delete e.currentTarget,re(u),ie(c)}}}function Mt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Ct(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function K(e,n){var t=(n&ct)!==0,r,i=!e.startsWith("<!>");return()=>{r===void 0&&(r=Mt(i?e:"<!>"+e),r=gn(r));var l=t?document.importNode(r,!0):r.cloneNode(!0);return Ct(l,l),l}}function Y(e,n){e!==null&&e.before(n)}const Rt=["touchstart","touchmove"];function Ft(e){return Rt.includes(e)}function qt(e,n){return Lt(e,n)}const G=new Map;function Lt(e,{target:n,anchor:t,props:r={},events:i,context:l,intro:o=!0}){_t();var v=new Set,s=c=>{for(var a=0;a<c.length;a++){var _=c[a];if(!v.has(_)){v.add(_);var d=Ft(_);n.addEventListener(_,de,{passive:d});var S=G.get(_);S===void 0?(document.addEventListener(_,de,{passive:d}),G.set(_,1)):G.set(_,S+1)}}};s(Ve(Rn)),qe.add(s);var f=void 0,u=yt(()=>{var c=t??n.appendChild(dt());return te(()=>{if(l){Ie({});var a=w;a.c=l}i&&(r.$$events=i),f=e(c,r)||{},l&&Ne()}),()=>{var d;for(var a of v){n.removeEventListener(a,de);var _=G.get(a);--_===0?(document.removeEventListener(a,de),G.delete(a)):G.set(a,_)}qe.delete(s),ln.delete(f),c!==t&&((d=c.parentNode)==null||d.removeChild(c))}});return ln.set(f,u),f}let ln=new WeakMap;function un(e,n,t,r=null,i=!1){var l=e,o=null,v=null,s=null,f=i?xe:0;ke(()=>{s!==(s=!!n())&&(s?(o?ge(o):o=te(()=>t(l)),v&&ye(v,()=>{v=null})):(v?ge(v):r&&(v=te(()=>r(l))),o&&ye(o,()=>{o=null})))},f)}function Ht(e,n){return n}function Bt(e,n,t,r){for(var i=[],l=n.length,o=0;o<l;o++)Ue(n[o].e,i,!0);var v=l>0&&i.length===0&&t!==null;if(v){var s=t.parentNode;ht(s),s.append(t),r.clear(),V(e,n[0].prev,n[l-1].next)}Nn(i,()=>{for(var f=0;f<l;f++){var u=n[f];v||(r.delete(u.k),V(e,u.prev,u.next)),z(u.e,!v)}})}function $t(e,n,t,r,i,l=null){var o=e,v={flags:n,items:new Map,first:null},s=null,f=!1;ke(()=>{var u=t(),c=$e(u)?u:u==null?[]:Ve(u),a=c.length;if(!(f&&a===0)){f=a===0;{var _=m;Vt(c,v,o,i,n,(_.f&R)!==0,r)}l!==null&&(a===0?s?ge(s):s=te(()=>l(o)):s!==null&&ye(s,()=>{s=null}))}})}function Vt(e,n,t,r,i,l,o){var v=e.length,s=n.items,f=n.first,u=f,c,a=null,_=[],d=[],S,A,y,x;for(x=0;x<v;x+=1){if(S=e[x],A=o(S,x),y=s.get(A),y===void 0){var b=u?u.e.nodes_start:t;a=Xt(b,n,a,a===null?n.first:a.next,S,A,x,r,i),s.set(A,a),_=[],d=[],u=a.next;continue}if(Yt(y,S,x),y.e.f&R&&ge(y.e),y!==u){if(c!==void 0&&c.has(y)){if(_.length<d.length){var p=d[0],k;a=p.prev;var I=_[0],N=_[_.length-1];for(k=0;k<_.length;k+=1)on(_[k],p,t);for(k=0;k<d.length;k+=1)c.delete(d[k]);V(n,I.prev,N.next),V(n,a,I),V(n,N,p),u=p,a=N,x-=1,_=[],d=[]}else c.delete(y),on(y,u,t),V(n,y.prev,y.next),V(n,y,a===null?n.first:a.next),V(n,a,y),a=y;continue}for(_=[],d=[];u!==null&&u.k!==A;)(l||!(u.e.f&R))&&(c??(c=new Set)).add(u),d.push(u),u=u.next;if(u===null)continue;y=u}_.push(y),a=y,u=y.next}if(u!==null||c!==void 0){for(var Z=c===void 0?[]:Ve(c);u!==null;)(l||!(u.e.f&R))&&Z.push(u),u=u.next;var Hn=Z.length;if(Hn>0){var Bn=null;Bt(n,Z,Bn,s)}}h.first=n.first&&n.first.e,h.last=a&&a.e}function Yt(e,n,t,r){hn(e.v,n),e.i=t}function Xt(e,n,t,r,i,l,o,v,s){var f=(s&ft)!==0,u=(s&at)===0,c=f?u?ut(i):D(i):i,a=s&st?D(o):o,_={i:a,v:c,k:l,a:null,e:null,prev:t,next:r};try{return _.e=te(()=>v(e,c,a),vt),_.e.prev=t&&t.e,_.e.next=r&&r.e,t===null?n.first=_:(t.next=_,t.e.next=_.e),r!==null&&(r.prev=_,r.e.prev=_.e),_}finally{}}function on(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,l=e.e.nodes_start;l!==r;){var o=Xe(l);i.before(l),l=o}}function V(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function Oe(e,n,t){var r=e,i,l;ke(()=>{i!==(i=n())&&(l&&(ye(l),l=null),i&&(l=te(()=>t(r,i))))},xe)}function Pe(e,n,t,r){var i=e.__styles??(e.__styles={});i[n]!==t&&(i[n]=t,t==null?e.style.removeProperty(n):e.style.setProperty(n,t,""))}function fn(e,n){return e===n||(e==null?void 0:e[ee])===n}function sn(e={},n,t,r){return Ke(()=>{var i,l;return xn(()=>{i=l,l=[],Ze(()=>{e!==t(...l)&&(n(e,...l),i&&fn(t(...i),e)&&n(null,...i))})}),()=>{Et(()=>{l&&fn(t(...l),e)&&n(null,...l)})}}),e}function Fn(e=!1){const n=w,t=n.l.u;if(!t)return;let r=()=>Dt(n.s);if(e){let i=0,l={};const o=ue(()=>{let v=!1;const s=n.s;for(const f in s)s[f]!==l[f]&&(l[f]=s[f],v=!0);return v&&i++,i});r=()=>g(o)}t.b.length&&mt(()=>{an(n,r),De(t.b)}),me(()=>{const i=Ze(()=>t.m.map(Kn));return()=>{for(const l of i)typeof l=="function"&&l()}}),t.a.length&&me(()=>{an(n,r),De(t.a)})}function an(e,n){if(e.l.s)for(const t of e.l.s)g(t);n()}function jt(e){w===null&&St(),ce&&w.l!==null?Kt(w).m.push(e):me(()=>{const n=Ze(e);if(typeof n=="function")return n})}function Kt(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ut="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ut);lt();function Ee(e,n=""){return`translate(${e}${n})`}var Je=(e=>(e.Percent="%",e.Px="px",e))(Je||{});let Le=[],Q=null;const q=C({currentScreenIndex:0,screenStack:[],isAnimating:!1,currentScreenHtmlElement:null}),Wt=ue(()=>q.screenStack.length===1),He=()=>g(Wt);function qn(){return q}function zt(){Le.forEach(e=>e.cancel()),Le=[]}async function Be(e,n,t){q.isAnimating=!0;const r=e.animate([{transform:n}],{duration:(t==null?void 0:t.duration)??150,easing:"cubic-bezier(0, 0, 0.7, 1)",fill:"forwards"});Le.push(r),await r.finished,r.commitStyles(),zt(),q.isAnimating=!1}async function Ln(e){q.screenStack.push(e),Q=q.currentScreenIndex,q.currentScreenIndex+=1}function Zt(){q.screenStack.pop(),Q=q.currentScreenIndex,q.currentScreenIndex-=1}function Gt(){const e=qn();me(()=>{if(He()||Q!==null&&e.currentScreenIndex<Q)return;Q!==null&&e.currentScreenIndex>Q&&(e.currentScreenHtmlElement.style.transform=Ee(100,Je.Percent),Be(e.currentScreenHtmlElement,Ee(0),{duration:250}))})}function Jt(e,n,t,r,i,l){n(e.target)||(E(t,C(e.touches[0].clientX)),E(r,C(e.touches[0].clientY)),E(i,null),E(l,!0))}function Qt(e,n,t,r,i,l,o,v,s){n(e.target)||(E(t,C(e.touches[0].clientX)),E(r,C(e.touches[0].clientY)),E(i,g(t)-g(l)),E(o,g(r)-g(v)),g(s)===null&&(Math.abs(g(i))>Math.abs(g(o))?E(s,!0):E(s,!1)))}var er=K('<div class="screen-container svelte-hphur7"><!></div>'),nr=K('<div class="screen-container svelte-hphur7"><!></div>'),tr=K('<div class="screen-container svelte-hphur7"><!></div>'),rr=K('<div class="screen-transition svelte-hphur7"><!> <!></div>');function ir(e,n){Ie(n,!0);const t=qn();let r=$(0),i=$(0),l=$(0),o=$(0),v=$(0),s=$(0),f=$(null),u=$(!1);const c=ue(()=>t.screenStack[t.currentScreenIndex-1]),a=ue(()=>t.screenStack[t.currentScreenIndex]),_=ue(()=>`translateX(${g(v)>0?g(v):0}px)`);Gt(),jt(()=>{t.screenStack.push(n.initialScreen)});function d(b){var k,I;const p=(I=(k=n.options)==null?void 0:k.disabledAreaSelectors)==null?void 0:I.map(N=>{var Z;return(Z=t.currentScreenHtmlElement)==null?void 0:Z.querySelector(N)});return(p==null?void 0:p.some(N=>N===b))??!1}async function S(b){if(d(b.target)||!t.currentScreenHtmlElement)return;E(u,!1);let p=window.innerWidth/3;g(l)-g(r)>p?(await Be(t.currentScreenHtmlElement,Ee(100,Je.Percent)),Zt()):await Be(t.currentScreenHtmlElement,Ee(0)),E(v,0),E(f,null)}var A=rr(),y=U(A);un(y,()=>(t.isAnimating||g(u))&&!He(),b=>{var p=er(),k=U(p);Oe(k,()=>g(c),(I,N)=>{N(I,{})}),nn(()=>Pe(p,"z-index",t.currentScreenIndex-1)),Y(b,p)});var x=pe(y,2);un(x,He,b=>{var p=nr(),k=U(p);Oe(k,()=>g(a),(I,N)=>{N(I,{})}),sn(p,I=>t.currentScreenHtmlElement=I,()=>t==null?void 0:t.currentScreenHtmlElement),Y(b,p)},b=>{var p=tr();p.__touchstart=[Jt,d,r,i,f,u],p.__touchmove=[Qt,d,l,o,v,r,s,i,f],p.__touchend=S;var k=U(p);Oe(k,()=>g(a),(I,N)=>{N(I,{})}),sn(p,I=>t.currentScreenHtmlElement=I,()=>t==null?void 0:t.currentScreenHtmlElement),nn(()=>{Pe(p,"transform",g(_)),Pe(p,"z-index",t.currentScreenIndex)}),Y(b,p)}),Y(e,A),Ne()}Ge(["touchstart","touchmove","touchend"]);var lr=K('<div class="third-level-screen svelte-16phzg3"><p>Third Level Screen</p></div>');function ur(e){var n=lr();Y(e,n)}var or=()=>Ln(ur),fr=K('<div class="next-screen svelte-lpb9dy"><p>Next Screen</p> <button>next screen</button></div>');function sr(e,n){Ie(n,!1),Fn();var t=fr(),r=pe(U(t),2);r.__click=[or],Y(e,t),Ne()}Ge(["click"]);var ar=()=>{Ln(sr)},cr=K('<div class="item svelte-c6rk4t"></div>'),vr=K('<div class="home-screen svelte-c6rk4t"><header class="header svelte-c6rk4t"></header> <main class="main svelte-c6rk4t"><button>next screen</button> <!></main> <footer class="footer svelte-c6rk4t"><button>1</button> <button>2</button> <button>3</button> <button>4</button></footer></div>');function _r(e,n){Ie(n,!1);const t=new Array(10).fill(1);Fn();var r=vr(),i=pe(U(r),2),l=U(i);l.__click=[ar];var o=pe(l,2);$t(o,1,()=>t,Ht,(v,s)=>{var f=cr();Y(v,f)}),Y(e,r),Ne()}Ge(["click"]);function dr(e){ir(e,{initialScreen:_r,options:{disabledAreaSelectors:["button"]}})}function hr(e){dr(e)}qt(hr,{target:document.getElementById("app")});
