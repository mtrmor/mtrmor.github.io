// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _appScreenSlider = require("app/services/screen-slider/app-screen-slider");
var _contentScreenSlider = require("app/services/screen-slider/content-screen-slider");
var _appComponent = require("app/components/app.component");
var _startPwaServiceWorker = require("app/services/pwa/start-pwa-service-worker");
var _globalCss = require("app/styles/global.css");
var _render = require("libraries/ui/render");
(0, _startPwaServiceWorker.startPwaServiceWorker)();
const root = document.getElementById("root");
if (root === null) throw new Error("No root found.");
root.append((0, _render.render)(new (0, _appComponent.App)({
    contentScreenSlider: (0, _contentScreenSlider.contentScreenSlider),
    appScreenSlider: (0, _appScreenSlider.appScreenSlider)
})));

},{"app/services/screen-slider/app-screen-slider":"kMcGk","app/services/screen-slider/content-screen-slider":"eXuNa","app/components/app.component":"agq4M","app/services/pwa/start-pwa-service-worker":"6pjd5","app/styles/global.css":"X4gZ7","libraries/ui/render":"kUtZR"}],"kMcGk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "appScreenSlider", ()=>appScreenSlider);
var _screenSlider = require("libraries/screen-slider");
const appScreenSlider = new (0, _screenSlider.ScreenSlider)({
    allowedArea: 50,
    threshold: 0.3,
    animationDuration: 300,
    allowSwipeNext: false
});

},{"libraries/screen-slider":"g28q2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g28q2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screenSlider = require("./screen-slider");
parcelHelpers.exportAll(_screenSlider, exports);

},{"./screen-slider":"bYkkJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYkkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScreenSlider", ()=>ScreenSlider);
class ScreenSlider {
    constructor(options = {}){
        const defaultOptions = {
            allowedArea: 50,
            threshold: 0.3,
            animationDuration: 300,
            swipeEnabled: true,
            allowSwipeNext: true,
            allowSwipePrev: true
        };
        this.options = {
            ...defaultOptions,
            ...options
        };
        this.screenCache = []; // Инициализируем пустым массивом
        this.currentIndex = 0;
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        this.translateX = 0;
        this.contentWidth = 0;
        this.animations = [];
        this.swipeDirection = null;
        this.isAnimating = false; // Инициализируем флаг анимации
    }
    init(containerSelector, screens, startIndex = 0) {
        const container = document.querySelector(containerSelector);
        if (!container) throw new Error("Container element not found");
        this.container = container;
        if (screens.length === 0) throw new Error("No screens provided");
        // Проверка корректности startIndex
        if (startIndex < 0 || startIndex >= screens.length) throw new Error(`startIndex ${startIndex} is out of bounds`);
        this.currentIndex = startIndex;
        // Оборачиваем экраны в ScreenItem
        this.screenCache = screens.map((screen, index)=>({
                element: screen,
                isTemporary: false
            }));
        this.contentWidth = this.container.offsetWidth;
        this.setupContainer();
        this.setupScreens();
        this.bindEvents();
        window.addEventListener("resize", ()=>{
            this.contentWidth = this.container.offsetWidth;
        });
    }
    setupContainer() {
        this.container.style.position = "relative";
        this.container.style.overflow = "hidden";
    }
    setupScreens() {
        // Очищаем контейнер
        this.container.innerHTML = "";
        // Добавляем только текущий экран
        const currentScreen = this.screenCache[this.currentIndex].element;
        this.container.appendChild(currentScreen);
        // Применяем дефолтные стили
        this.applyDefaultStyles(currentScreen, this.currentIndex);
    }
    applyDefaultStyles(screen, index) {
        screen.style.position = "absolute";
        screen.style.width = "100%";
        screen.style.height = "100%";
        screen.style.top = "0";
        screen.style.left = "0";
        screen.style.transform = `translateX(0%)`;
    }
    bindEvents() {
        this.handleTouchStartBound = this.handleTouchStart.bind(this);
        this.handleTouchMoveBound = this.handleTouchMove.bind(this);
        this.handleTouchEndBound = this.handleTouchEnd.bind(this);
        this.container.addEventListener("touchstart", this.handleTouchStartBound, {
            passive: true
        });
        this.container.addEventListener("touchmove", this.handleTouchMoveBound, {
            passive: false
        });
        this.container.addEventListener("touchend", this.handleTouchEndBound, {
            passive: true
        });
    }
    handleTouchStart(event) {
        if (!this.options.swipeEnabled || this.isAnimating) return;
        const touchX = event.touches[0].clientX;
        const allowedArea = this.options.allowedArea;
        const contentWidth = this.contentWidth;
        const currentScreenItem = this.screenCache[this.currentIndex];
        if (this.currentIndex > 0 && touchX < allowedArea && this.options.allowSwipePrev) {
            this.swipeDirection = "prev";
            // Добавляем предыдущий экран в контейнер
            const prevScreenItem = this.screenCache[this.currentIndex - 1];
            const prevScreen = prevScreenItem.element;
            if (!this.container.contains(prevScreen)) {
                this.container.appendChild(prevScreen);
                this.applyDefaultStyles(prevScreen, this.currentIndex - 1);
                prevScreen.style.transform = "translateX(-100%)";
            }
        } else if (this.currentIndex < this.screenCache.length - 1 && touchX > contentWidth - allowedArea && this.options.allowSwipeNext) {
            this.swipeDirection = "next";
            // Добавляем следующий экран в контейнер
            const nextScreenItem = this.screenCache[this.currentIndex + 1];
            const nextScreen = nextScreenItem.element;
            if (!this.container.contains(nextScreen)) {
                this.container.appendChild(nextScreen);
                this.applyDefaultStyles(nextScreen, this.currentIndex + 1);
                nextScreen.style.transform = "translateX(100%)";
            }
        } else {
            this.swipeDirection = null;
            return;
        }
        this.isDragging = true;
        this.startX = touchX;
        this.translateX = 0;
        this.cancelAnimations();
    }
    handleTouchMove(event) {
        if (!this.options.swipeEnabled || !this.isDragging || !this.swipeDirection || this.isAnimating) return;
        this.currentX = event.touches[0].clientX;
        const deltaX = this.currentX - this.startX;
        event.preventDefault();
        const deltaPercent = deltaX / this.contentWidth * 100;
        const currentScreen = this.screenCache[this.currentIndex].element;
        if (this.swipeDirection === "next" && deltaX < 0 && this.options.allowSwipeNext) {
            const nextScreen = this.screenCache[this.currentIndex + 1].element;
            this.translateX = deltaPercent;
            currentScreen.style.transform = `translateX(${this.translateX}%)`;
            nextScreen.style.transform = `translateX(${100 + this.translateX}%)`;
        } else if (this.swipeDirection === "prev" && deltaX > 0 && this.options.allowSwipePrev) {
            const prevScreen = this.screenCache[this.currentIndex - 1].element;
            this.translateX = deltaPercent;
            currentScreen.style.transform = `translateX(${this.translateX}%)`;
            prevScreen.style.transform = `translateX(${-100 + this.translateX}%)`;
        }
    }
    handleTouchEnd(event) {
        if (!this.options.swipeEnabled || !this.isDragging || !this.swipeDirection || this.isAnimating) return;
        this.isDragging = false;
        const threshold = this.options.threshold * this.contentWidth;
        const absTranslateX = Math.abs(this.translateX / 100 * this.contentWidth);
        if (absTranslateX > threshold) {
            if (this.swipeDirection === "next" && this.options.allowSwipeNext) this.animateToNext();
            else if (this.swipeDirection === "prev" && this.options.allowSwipePrev) this.animateToPrev();
        } else this.resetPosition();
    }
    animateToNext() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        const duration = this.options.animationDuration;
        const currentScreen = this.screenCache[this.currentIndex].element;
        const nextScreen = this.screenCache[this.currentIndex + 1].element;
        this.cancelAnimations();
        // Убеждаемся, что следующий экран добавлен
        if (!this.container.contains(nextScreen)) {
            this.container.appendChild(nextScreen);
            this.applyDefaultStyles(nextScreen, this.currentIndex + 1);
            nextScreen.style.transform = "translateX(100%)";
        }
        const currentAnimation = currentScreen.animate([
            {
                transform: `translateX(${this.translateX}%)`
            },
            {
                transform: "translateX(-100%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        const nextAnimation = nextScreen.animate([
            {
                transform: `translateX(${100 + this.translateX}%)`
            },
            {
                transform: "translateX(0%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        this.animations.push(currentAnimation, nextAnimation);
        currentAnimation.onfinish = ()=>{
            currentScreen.style.transform = "translateX(-100%)";
            this.container.removeChild(currentScreen);
            this.currentIndex += 1;
            this.cleanupScreens();
            this.isAnimating = false;
        };
        nextAnimation.onfinish = ()=>{
            nextScreen.style.transform = "translateX(0%)";
            this.cleanupScreens();
        };
    }
    animateToPrev() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        const duration = this.options.animationDuration;
        const currentScreen = this.screenCache[this.currentIndex].element;
        const prevScreen = this.screenCache[this.currentIndex - 1].element;
        this.cancelAnimations();
        // Убеждаемся, что предыдущий экран добавлен
        if (!this.container.contains(prevScreen)) {
            this.container.appendChild(prevScreen);
            this.applyDefaultStyles(prevScreen, this.currentIndex - 1);
            prevScreen.style.transform = "translateX(-100%)";
        }
        const currentAnimation = currentScreen.animate([
            {
                transform: `translateX(${this.translateX}%)`
            },
            {
                transform: "translateX(100%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        const prevAnimation = prevScreen.animate([
            {
                transform: `translateX(${-100 + this.translateX}%)`
            },
            {
                transform: "translateX(0%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        this.animations.push(currentAnimation, prevAnimation);
        currentAnimation.onfinish = ()=>{
            currentScreen.style.transform = "translateX(100%)";
            this.container.removeChild(currentScreen);
            this.currentIndex -= 1;
            // Проверяем, является ли экран, с которого мы вернулись, временным
            const removedScreenItem = this.screenCache[this.currentIndex + 1];
            if (removedScreenItem && removedScreenItem.isTemporary) // Удаляем его из кэша
            this.screenCache.splice(this.currentIndex + 1, 1);
            this.cleanupScreens();
            this.isAnimating = false;
        };
        prevAnimation.onfinish = ()=>{
            prevScreen.style.transform = "translateX(0%)";
            this.cleanupScreens();
        };
    }
    resetPosition() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        const duration = this.options.animationDuration / 2;
        const currentScreen = this.screenCache[this.currentIndex].element;
        let otherScreenItem;
        if (this.swipeDirection === "next") otherScreenItem = this.screenCache[this.currentIndex + 1];
        else if (this.swipeDirection === "prev") otherScreenItem = this.screenCache[this.currentIndex - 1];
        this.cancelAnimations();
        const currentAnimation = currentScreen.animate([
            {
                transform: `translateX(${this.translateX}%)`
            },
            {
                transform: "translateX(0%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        if (otherScreenItem) {
            const otherScreen = otherScreenItem.element;
            const startTransform = this.swipeDirection === "next" ? `${100 + this.translateX}%` : `${-100 + this.translateX}%`;
            const endTransform = this.swipeDirection === "next" ? "100%" : "-100%";
            const otherAnimation = otherScreen.animate([
                {
                    transform: `translateX(${startTransform})`
                },
                {
                    transform: `translateX(${endTransform})`
                }
            ], {
                duration: duration,
                easing: "ease-out",
                fill: "forwards"
            });
            this.animations.push(otherAnimation);
            otherAnimation.onfinish = ()=>{
                otherScreen.style.transform = `translateX(${endTransform})`;
                this.container.removeChild(otherScreen);
            };
        }
        this.animations.push(currentAnimation);
        currentAnimation.onfinish = ()=>{
            currentScreen.style.transform = "translateX(0%)";
            this.cleanupScreens();
            this.isAnimating = false;
        };
    }
    cancelAnimations() {
        this.animations.forEach((animation)=>animation.cancel());
        this.animations = [];
    }
    cleanupScreens() {
        const screensInContainer = Array.from(this.container.children);
        const currentScreen = this.screenCache[this.currentIndex].element;
        screensInContainer.forEach((screen)=>{
            if (screen !== currentScreen) this.container.removeChild(screen);
        });
    }
    next() {
        if (this.isAnimating) return;
        if (this.currentIndex < this.screenCache.length - 1) {
            this.translateX = 0;
            this.swipeDirection = "next";
            // Добавляем следующий экран в контейнер
            const nextScreenItem = this.screenCache[this.currentIndex + 1];
            const nextScreen = nextScreenItem.element;
            if (!this.container.contains(nextScreen)) {
                this.container.appendChild(nextScreen);
                this.applyDefaultStyles(nextScreen, this.currentIndex + 1);
                nextScreen.style.transform = "translateX(100%)";
            }
            this.animateToNext();
        }
    }
    prev() {
        if (this.isAnimating) return;
        if (this.currentIndex > 0) {
            this.translateX = 0;
            this.swipeDirection = "prev";
            // Добавляем предыдущий экран в контейнер
            const prevScreenItem = this.screenCache[this.currentIndex - 1];
            const prevScreen = prevScreenItem.element;
            if (!this.container.contains(prevScreen)) {
                this.container.appendChild(prevScreen);
                this.applyDefaultStyles(prevScreen, this.currentIndex - 1);
                prevScreen.style.transform = "translateX(-100%)";
            }
            this.animateToPrev();
        }
    }
    // Новый метод для перехода на временный экран
    goToTemporaryScreen(screen) {
        if (this.isAnimating) return;
        const tempScreenItem = {
            element: screen,
            isTemporary: true
        };
        // Вставляем временный экран в кэш после текущего
        this.screenCache.splice(this.currentIndex + 1, 0, tempScreenItem);
        // Переходим на него
        this.translateX = 0;
        this.swipeDirection = "next";
        const nextScreen = screen;
        // Добавляем следующий экран в контейнер
        if (!this.container.contains(nextScreen)) {
            this.container.appendChild(nextScreen);
            this.applyDefaultStyles(nextScreen, this.currentIndex + 1);
            nextScreen.style.transform = "translateX(100%)";
        }
        // Анимируем переход
        this.animateToNext();
    }
    // Новый метод для перехода к определенному экрану
    goToScreen(index) {
        if (this.isAnimating) return;
        if (index < 0 || index >= this.screenCache.length) {
            console.warn("Invalid screen index.");
            return;
        }
        if (index === this.currentIndex) // Целевой экран уже отображается
        return;
        const direction = index > this.currentIndex ? "next" : "prev";
        this.swipeDirection = direction;
        this.translateX = 0;
        const currentScreen = this.screenCache[this.currentIndex].element;
        const targetScreen = this.screenCache[index].element;
        // Добавляем целевой экран в контейнер, если его там нет
        if (!this.container.contains(targetScreen)) {
            this.container.appendChild(targetScreen);
            this.applyDefaultStyles(targetScreen, index);
            targetScreen.style.transform = direction === "next" ? "translateX(100%)" : "translateX(-100%)";
        }
        this.cancelAnimations();
        this.isAnimating = true;
        const duration = this.options.animationDuration;
        const currentAnimation = currentScreen.animate([
            {
                transform: "translateX(0%)"
            },
            {
                transform: direction === "next" ? "translateX(-100%)" : "translateX(100%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        const targetAnimation = targetScreen.animate([
            {
                transform: direction === "next" ? "translateX(100%)" : "translateX(-100%)"
            },
            {
                transform: "translateX(0%)"
            }
        ], {
            duration: duration,
            easing: "ease-out",
            fill: "forwards"
        });
        this.animations.push(currentAnimation, targetAnimation);
        currentAnimation.onfinish = ()=>{
            currentScreen.style.transform = direction === "next" ? "translateX(-100%)" : "translateX(100%)";
            this.container.removeChild(currentScreen);
            // Если мы перемещаемся назад и текущий экран является временным, удаляем его из кэша
            if (direction === "prev" && this.screenCache[this.currentIndex].isTemporary) {
                this.screenCache.splice(this.currentIndex, 1);
                // Корректируем currentIndex
                this.currentIndex = index;
            } else this.currentIndex = index;
            this.cleanupScreens();
            this.isAnimating = false;
        };
        targetAnimation.onfinish = ()=>{
            targetScreen.style.transform = "translateX(0%)";
            this.cleanupScreens();
        };
    }
    // Методы для управления блокировкой свайпов
    setSwipeEnabled(enabled) {
        this.options.swipeEnabled = enabled;
    }
    setAllowSwipeNext(allowed) {
        this.options.allowSwipeNext = allowed;
    }
    setAllowSwipePrev(allowed) {
        this.options.allowSwipePrev = allowed;
    }
    addScreen(screen) {
        // Проверяем, есть ли идентификатор у нового экрана
        if (!screen.id) {
            console.warn("The added screen does not have an identifier.");
            return;
        }
        // Проверяем, существует ли уже экран с таким же идентификатором
        const screenWithSameId = this.screenCache.some((existingScreen)=>existingScreen.element.id === screen.id);
        if (screenWithSameId) return;
        // Добавляем в кэш как постоянный экран
        this.screenCache.push({
            element: screen,
            isTemporary: false
        });
    }
    // Уничтожение слайдера
    destroy() {
        this.cancelAnimations();
        this.container.removeEventListener("touchstart", this.handleTouchStartBound);
        this.container.removeEventListener("touchmove", this.handleTouchMoveBound);
        this.container.removeEventListener("touchend", this.handleTouchEndBound);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eXuNa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contentScreenSlider", ()=>contentScreenSlider);
var _screenSlider = require("libraries/screen-slider");
const contentScreenSlider = new (0, _screenSlider.ScreenSlider)({
    allowedArea: 50,
    threshold: 0.3,
    animationDuration: 300
});

},{"libraries/screen-slider":"g28q2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agq4M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var _headerComponent = require("app/components/header/header.component");
var _appModuleCss = require("app/components/app.module.css");
var _contentComponent = require("app/components/content/content.component");
var _menuComponent = require("app/components/menu/menu.component");
var _numberService = require("features/number/services/number.service");
var _defineComponent = require("libraries/ui/define-component");
var _htmlElements = require("libraries/ui/html-elements");
class AppComponent extends HTMLElement {
    onFirstScreenButtonClick() {
        this.props.contentScreenSlider.goToScreen(0);
    }
    onSecondScreenButtonClick() {
        this.props.contentScreenSlider.goToScreen(1);
    }
    onThirdScreenButtonClick() {
        this.props.contentScreenSlider.goToScreen(2);
    }
    onNextScreenButtonClick() {
        this.props.appScreenSlider.goToTemporaryScreen((0, _htmlElements.div)("\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u044D\u043A\u0440\u0430\u043D", {
            class: _appModuleCss.screen,
            id: "next-screen"
        }));
    }
    connectedCallback() {
        this.render();
        const appScreens = [
            (0, _htmlElements.div)(new (0, _headerComponent.Header)({
                class: _appModuleCss.header
            }), new (0, _contentComponent.Content)({
                greeting: "hello world",
                getRandomNumber: (0, _numberService.numberService).getRandomNumber,
                class: _appModuleCss.content,
                onNextScreenClick: ()=>{
                    this.onNextScreenButtonClick();
                },
                screenSlider: this.props.contentScreenSlider
            }), new (0, _menuComponent.Menu)({
                class: _appModuleCss.menu,
                onFirstScreenButtonClick: ()=>{
                    this.onFirstScreenButtonClick();
                },
                onSecondScreenButtonClick: ()=>{
                    this.onSecondScreenButtonClick();
                },
                onThirdScreenButtonClick: ()=>{
                    this.onThirdScreenButtonClick();
                }
            }), {
                class: `${_appModuleCss.screen} ${_appModuleCss.homeScreen}`
            })
        ];
        this.props.appScreenSlider.init("#app-screen-container", appScreens);
    }
    disconnectedCallback() {
        this.props.appScreenSlider.destroy();
        this.props.contentScreenSlider.destroy();
    }
    template() {
        return (0, _htmlElements.div)({
            id: "app-screen-container",
            class: _appModuleCss.appScreenContainer
        });
    }
    render() {
        this.replaceChildren(this.template());
    }
    init(props) {
        this.props = props;
    }
}
const App = (0, _defineComponent.defineComponent)("app-root", AppComponent);

},{"app/components/header/header.component":"l2VPs","app/components/app.module.css":"5rb2d","app/components/content/content.component":"1LQki","app/components/menu/menu.component":"iiedf","features/number/services/number.service":"kkQ31","libraries/ui/define-component":"eJu2H","libraries/ui/html-elements":"11lxt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l2VPs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
var _defineComponent = require("libraries/ui/define-component");
var _htmlElements = require("libraries/ui/html-elements");
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    template() {
        return (0, _htmlElements.div)();
    }
    render() {
        if (this.props === undefined) throw new Error("Props is not defined");
        this.replaceChildren(this.template());
    }
    init(props) {
        this.props = props;
        this.classList.add(props.class);
    }
}
const Header = (0, _defineComponent.defineComponent)("app-header", HeaderComponent);

},{"libraries/ui/define-component":"eJu2H","libraries/ui/html-elements":"11lxt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJu2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
function defineComponent(tagName, ctr //
) {
    customElements.define(tagName, ctr);
    return class {
        constructor(props){
            this.htmlElement = document.createElement(tagName);
            this.htmlElement.init(props);
        }
        render() {
            return this.htmlElement;
        }
        isComponent() {
            return true;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11lxt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>a);
parcelHelpers.export(exports, "abbr", ()=>abbr);
parcelHelpers.export(exports, "address", ()=>address);
parcelHelpers.export(exports, "area", ()=>area);
parcelHelpers.export(exports, "article", ()=>article);
parcelHelpers.export(exports, "aside", ()=>aside);
parcelHelpers.export(exports, "audio", ()=>audio);
parcelHelpers.export(exports, "b", ()=>b);
parcelHelpers.export(exports, "base", ()=>base);
parcelHelpers.export(exports, "bdi", ()=>bdi);
parcelHelpers.export(exports, "bdo", ()=>bdo);
parcelHelpers.export(exports, "blockquote", ()=>blockquote);
parcelHelpers.export(exports, "body", ()=>body);
parcelHelpers.export(exports, "br", ()=>br);
parcelHelpers.export(exports, "button", ()=>button);
parcelHelpers.export(exports, "canvas", ()=>canvas);
parcelHelpers.export(exports, "caption", ()=>caption);
parcelHelpers.export(exports, "cite", ()=>cite);
parcelHelpers.export(exports, "code", ()=>code);
parcelHelpers.export(exports, "col", ()=>col);
parcelHelpers.export(exports, "colgroup", ()=>colgroup);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "datalist", ()=>datalist);
parcelHelpers.export(exports, "dd", ()=>dd);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "details", ()=>details);
parcelHelpers.export(exports, "dfn", ()=>dfn);
parcelHelpers.export(exports, "dialog", ()=>dialog);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dl", ()=>dl);
parcelHelpers.export(exports, "dt", ()=>dt);
parcelHelpers.export(exports, "em", ()=>em);
parcelHelpers.export(exports, "embed", ()=>embed);
parcelHelpers.export(exports, "fieldset", ()=>fieldset);
parcelHelpers.export(exports, "figcaption", ()=>figcaption);
parcelHelpers.export(exports, "figure", ()=>figure);
parcelHelpers.export(exports, "footer", ()=>footer);
parcelHelpers.export(exports, "form", ()=>form);
parcelHelpers.export(exports, "h1", ()=>h1);
parcelHelpers.export(exports, "h2", ()=>h2);
parcelHelpers.export(exports, "h3", ()=>h3);
parcelHelpers.export(exports, "h4", ()=>h4);
parcelHelpers.export(exports, "h5", ()=>h5);
parcelHelpers.export(exports, "h6", ()=>h6);
parcelHelpers.export(exports, "head", ()=>head);
parcelHelpers.export(exports, "header", ()=>header);
parcelHelpers.export(exports, "hr", ()=>hr);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "i", ()=>i);
parcelHelpers.export(exports, "iframe", ()=>iframe);
parcelHelpers.export(exports, "img", ()=>img);
parcelHelpers.export(exports, "input", ()=>input);
parcelHelpers.export(exports, "ins", ()=>ins);
parcelHelpers.export(exports, "kbd", ()=>kbd);
parcelHelpers.export(exports, "label", ()=>label);
parcelHelpers.export(exports, "legend", ()=>legend);
parcelHelpers.export(exports, "li", ()=>li);
parcelHelpers.export(exports, "link", ()=>link);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "mark", ()=>mark);
parcelHelpers.export(exports, "meta", ()=>meta);
parcelHelpers.export(exports, "meter", ()=>meter);
parcelHelpers.export(exports, "nav", ()=>nav);
parcelHelpers.export(exports, "noscript", ()=>noscript);
parcelHelpers.export(exports, "object", ()=>object);
parcelHelpers.export(exports, "ol", ()=>ol);
parcelHelpers.export(exports, "optgroup", ()=>optgroup);
parcelHelpers.export(exports, "option", ()=>option);
parcelHelpers.export(exports, "output", ()=>output);
parcelHelpers.export(exports, "p", ()=>p);
parcelHelpers.export(exports, "param", ()=>param);
parcelHelpers.export(exports, "picture", ()=>picture);
parcelHelpers.export(exports, "pre", ()=>pre);
parcelHelpers.export(exports, "progress", ()=>progress);
parcelHelpers.export(exports, "q", ()=>q);
parcelHelpers.export(exports, "rp", ()=>rp);
parcelHelpers.export(exports, "rt", ()=>rt);
parcelHelpers.export(exports, "ruby", ()=>ruby);
parcelHelpers.export(exports, "s", ()=>s);
parcelHelpers.export(exports, "samp", ()=>samp);
parcelHelpers.export(exports, "script", ()=>script);
parcelHelpers.export(exports, "section", ()=>section);
parcelHelpers.export(exports, "select", ()=>select);
parcelHelpers.export(exports, "small", ()=>small);
parcelHelpers.export(exports, "source", ()=>source);
parcelHelpers.export(exports, "span", ()=>span);
parcelHelpers.export(exports, "strong", ()=>strong);
parcelHelpers.export(exports, "style", ()=>style);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "summary", ()=>summary);
parcelHelpers.export(exports, "sup", ()=>sup);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "table", ()=>table);
parcelHelpers.export(exports, "tbody", ()=>tbody);
parcelHelpers.export(exports, "td", ()=>td);
parcelHelpers.export(exports, "template", ()=>template);
parcelHelpers.export(exports, "textarea", ()=>textarea);
parcelHelpers.export(exports, "tfoot", ()=>tfoot);
parcelHelpers.export(exports, "th", ()=>th);
parcelHelpers.export(exports, "thead", ()=>thead);
parcelHelpers.export(exports, "time", ()=>time);
parcelHelpers.export(exports, "title", ()=>title);
parcelHelpers.export(exports, "tr", ()=>tr);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "u", ()=>u);
parcelHelpers.export(exports, "ul", ()=>ul);
parcelHelpers.export(exports, "video", ()=>video);
parcelHelpers.export(exports, "wbr", ()=>wbr);
var _createElement = require("./create-element");
const a = (...args)=>{
    const elementType = "a";
    return (0, _createElement.createElement)(elementType, ...args);
};
const abbr = (...args)=>{
    const elementType = "abbr";
    return (0, _createElement.createElement)(elementType, ...args);
};
const address = (...args)=>{
    const elementType = "address";
    return (0, _createElement.createElement)(elementType, ...args);
};
const area = (...args)=>{
    const elementType = "area";
    return (0, _createElement.createElement)(elementType, ...args);
};
const article = (...args)=>{
    const elementType = "article";
    return (0, _createElement.createElement)(elementType, ...args);
};
const aside = (...args)=>{
    const elementType = "aside";
    return (0, _createElement.createElement)(elementType, ...args);
};
const audio = (...args)=>{
    const elementType = "audio";
    return (0, _createElement.createElement)(elementType, ...args);
};
const b = (...args)=>{
    const elementType = "b";
    return (0, _createElement.createElement)(elementType, ...args);
};
const base = (...args)=>{
    const elementType = "base";
    return (0, _createElement.createElement)(elementType, ...args);
};
const bdi = (...args)=>{
    const elementType = "bdi";
    return (0, _createElement.createElement)(elementType, ...args);
};
const bdo = (...args)=>{
    const elementType = "bdo";
    return (0, _createElement.createElement)(elementType, ...args);
};
const blockquote = (...args)=>{
    const elementType = "blockquote";
    return (0, _createElement.createElement)(elementType, ...args);
};
const body = (...args)=>{
    const elementType = "body";
    return (0, _createElement.createElement)(elementType, ...args);
};
const br = (...args)=>{
    const elementType = "br";
    return (0, _createElement.createElement)(elementType, ...args);
};
const button = (...args)=>{
    const elementType = "button";
    return (0, _createElement.createElement)(elementType, ...args);
};
const canvas = (...args)=>{
    const elementType = "canvas";
    return (0, _createElement.createElement)(elementType, ...args);
};
const caption = (...args)=>{
    const elementType = "caption";
    return (0, _createElement.createElement)(elementType, ...args);
};
const cite = (...args)=>{
    const elementType = "cite";
    return (0, _createElement.createElement)(elementType, ...args);
};
const code = (...args)=>{
    const elementType = "code";
    return (0, _createElement.createElement)(elementType, ...args);
};
const col = (...args)=>{
    const elementType = "col";
    return (0, _createElement.createElement)(elementType, ...args);
};
const colgroup = (...args)=>{
    const elementType = "colgroup";
    return (0, _createElement.createElement)(elementType, ...args);
};
const data = (...args)=>{
    const elementType = "data";
    return (0, _createElement.createElement)(elementType, ...args);
};
const datalist = (...args)=>{
    const elementType = "datalist";
    return (0, _createElement.createElement)(elementType, ...args);
};
const dd = (...args)=>{
    const elementType = "dd";
    return (0, _createElement.createElement)(elementType, ...args);
};
const del = (...args)=>{
    const elementType = "del";
    return (0, _createElement.createElement)(elementType, ...args);
};
const details = (...args)=>{
    const elementType = "details";
    return (0, _createElement.createElement)(elementType, ...args);
};
const dfn = (...args)=>{
    const elementType = "dfn";
    return (0, _createElement.createElement)(elementType, ...args);
};
const dialog = (...args)=>{
    const elementType = "dialog";
    return (0, _createElement.createElement)(elementType, ...args);
};
const div = (...args)=>{
    const elementType = "div";
    return (0, _createElement.createElement)(elementType, ...args);
};
const dl = (...args)=>{
    const elementType = "dl";
    return (0, _createElement.createElement)(elementType, ...args);
};
const dt = (...args)=>{
    const elementType = "dt";
    return (0, _createElement.createElement)(elementType, ...args);
};
const em = (...args)=>{
    const elementType = "em";
    return (0, _createElement.createElement)(elementType, ...args);
};
const embed = (...args)=>{
    const elementType = "embed";
    return (0, _createElement.createElement)(elementType, ...args);
};
const fieldset = (...args)=>{
    const elementType = "fieldset";
    return (0, _createElement.createElement)(elementType, ...args);
};
const figcaption = (...args)=>{
    const elementType = "figcaption";
    return (0, _createElement.createElement)(elementType, ...args);
};
const figure = (...args)=>{
    const elementType = "figure";
    return (0, _createElement.createElement)(elementType, ...args);
};
const footer = (...args)=>{
    const elementType = "footer";
    return (0, _createElement.createElement)(elementType, ...args);
};
const form = (...args)=>{
    const elementType = "form";
    return (0, _createElement.createElement)(elementType, ...args);
};
const h1 = (...args)=>{
    const elementType = "h1";
    return (0, _createElement.createElement)(elementType, ...args);
};
const h2 = (...args)=>{
    const elementType = "h2";
    return (0, _createElement.createElement)(elementType, ...args);
};
const h3 = (...args)=>{
    const elementType = "h3";
    return (0, _createElement.createElement)(elementType, ...args);
};
const h4 = (...args)=>{
    const elementType = "h4";
    return (0, _createElement.createElement)(elementType, ...args);
};
const h5 = (...args)=>{
    const elementType = "h5";
    return (0, _createElement.createElement)(elementType, ...args);
};
const h6 = (...args)=>{
    const elementType = "h6";
    return (0, _createElement.createElement)(elementType, ...args);
};
const head = (...args)=>{
    const elementType = "head";
    return (0, _createElement.createElement)(elementType, ...args);
};
const header = (...args)=>{
    const elementType = "header";
    return (0, _createElement.createElement)(elementType, ...args);
};
const hr = (...args)=>{
    const elementType = "hr";
    return (0, _createElement.createElement)(elementType, ...args);
};
const html = (...args)=>{
    const elementType = "html";
    return (0, _createElement.createElement)(elementType, ...args);
};
const i = (...args)=>{
    const elementType = "i";
    return (0, _createElement.createElement)(elementType, ...args);
};
const iframe = (...args)=>{
    const elementType = "iframe";
    return (0, _createElement.createElement)(elementType, ...args);
};
const img = (...args)=>{
    const elementType = "img";
    return (0, _createElement.createElement)(elementType, ...args);
};
const input = (...args)=>{
    const elementType = "input";
    return (0, _createElement.createElement)(elementType, ...args);
};
const ins = (...args)=>{
    const elementType = "ins";
    return (0, _createElement.createElement)(elementType, ...args);
};
const kbd = (...args)=>{
    const elementType = "kbd";
    return (0, _createElement.createElement)(elementType, ...args);
};
const label = (...args)=>{
    const elementType = "label";
    return (0, _createElement.createElement)(elementType, ...args);
};
const legend = (...args)=>{
    const elementType = "legend";
    return (0, _createElement.createElement)(elementType, ...args);
};
const li = (...args)=>{
    const elementType = "li";
    return (0, _createElement.createElement)(elementType, ...args);
};
const link = (...args)=>{
    const elementType = "link";
    return (0, _createElement.createElement)(elementType, ...args);
};
const main = (...args)=>{
    const elementType = "main";
    return (0, _createElement.createElement)(elementType, ...args);
};
const map = (...args)=>{
    const elementType = "map";
    return (0, _createElement.createElement)(elementType, ...args);
};
const mark = (...args)=>{
    const elementType = "mark";
    return (0, _createElement.createElement)(elementType, ...args);
};
const meta = (...args)=>{
    const elementType = "meta";
    return (0, _createElement.createElement)(elementType, ...args);
};
const meter = (...args)=>{
    const elementType = "meter";
    return (0, _createElement.createElement)(elementType, ...args);
};
const nav = (...args)=>{
    const elementType = "nav";
    return (0, _createElement.createElement)(elementType, ...args);
};
const noscript = (...args)=>{
    const elementType = "noscript";
    return (0, _createElement.createElement)(elementType, ...args);
};
const object = (...args)=>{
    const elementType = "object";
    return (0, _createElement.createElement)(elementType, ...args);
};
const ol = (...args)=>{
    const elementType = "ol";
    return (0, _createElement.createElement)(elementType, ...args);
};
const optgroup = (...args)=>{
    const elementType = "optgroup";
    return (0, _createElement.createElement)(elementType, ...args);
};
const option = (...args)=>{
    const elementType = "option";
    return (0, _createElement.createElement)(elementType, ...args);
};
const output = (...args)=>{
    const elementType = "output";
    return (0, _createElement.createElement)(elementType, ...args);
};
const p = (...args)=>{
    const elementType = "p";
    return (0, _createElement.createElement)(elementType, ...args);
};
const param = (...args)=>{
    const elementType = "param";
    return (0, _createElement.createElement)(elementType, ...args);
};
const picture = (...args)=>{
    const elementType = "picture";
    return (0, _createElement.createElement)(elementType, ...args);
};
const pre = (...args)=>{
    const elementType = "pre";
    return (0, _createElement.createElement)(elementType, ...args);
};
const progress = (...args)=>{
    const elementType = "progress";
    return (0, _createElement.createElement)(elementType, ...args);
};
const q = (...args)=>{
    const elementType = "q";
    return (0, _createElement.createElement)(elementType, ...args);
};
const rp = (...args)=>{
    const elementType = "rp";
    return (0, _createElement.createElement)(elementType, ...args);
};
const rt = (...args)=>{
    const elementType = "rt";
    return (0, _createElement.createElement)(elementType, ...args);
};
const ruby = (...args)=>{
    const elementType = "ruby";
    return (0, _createElement.createElement)(elementType, ...args);
};
const s = (...args)=>{
    const elementType = "s";
    return (0, _createElement.createElement)(elementType, ...args);
};
const samp = (...args)=>{
    const elementType = "samp";
    return (0, _createElement.createElement)(elementType, ...args);
};
const script = (...args)=>{
    const elementType = "script";
    return (0, _createElement.createElement)(elementType, ...args);
};
const section = (...args)=>{
    const elementType = "section";
    return (0, _createElement.createElement)(elementType, ...args);
};
const select = (...args)=>{
    const elementType = "select";
    return (0, _createElement.createElement)(elementType, ...args);
};
const small = (...args)=>{
    const elementType = "small";
    return (0, _createElement.createElement)(elementType, ...args);
};
const source = (...args)=>{
    const elementType = "source";
    return (0, _createElement.createElement)(elementType, ...args);
};
const span = (...args)=>{
    const elementType = "span";
    return (0, _createElement.createElement)(elementType, ...args);
};
const strong = (...args)=>{
    const elementType = "strong";
    return (0, _createElement.createElement)(elementType, ...args);
};
const style = (...args)=>{
    const elementType = "style";
    return (0, _createElement.createElement)(elementType, ...args);
};
const sub = (...args)=>{
    const elementType = "sub";
    return (0, _createElement.createElement)(elementType, ...args);
};
const summary = (...args)=>{
    const elementType = "summary";
    return (0, _createElement.createElement)(elementType, ...args);
};
const sup = (...args)=>{
    const elementType = "sup";
    return (0, _createElement.createElement)(elementType, ...args);
};
const svg = (...args)=>{
    const elementType = "svg";
    return (0, _createElement.createElement)(elementType, ...args);
};
const table = (...args)=>{
    const elementType = "table";
    return (0, _createElement.createElement)(elementType, ...args);
};
const tbody = (...args)=>{
    const elementType = "tbody";
    return (0, _createElement.createElement)(elementType, ...args);
};
const td = (...args)=>{
    const elementType = "td";
    return (0, _createElement.createElement)(elementType, ...args);
};
const template = (...args)=>{
    const elementType = "template";
    return (0, _createElement.createElement)(elementType, ...args);
};
const textarea = (...args)=>{
    const elementType = "textarea";
    return (0, _createElement.createElement)(elementType, ...args);
};
const tfoot = (...args)=>{
    const elementType = "tfoot";
    return (0, _createElement.createElement)(elementType, ...args);
};
const th = (...args)=>{
    const elementType = "th";
    return (0, _createElement.createElement)(elementType, ...args);
};
const thead = (...args)=>{
    const elementType = "thead";
    return (0, _createElement.createElement)(elementType, ...args);
};
const time = (...args)=>{
    const elementType = "time";
    return (0, _createElement.createElement)(elementType, ...args);
};
const title = (...args)=>{
    const elementType = "title";
    return (0, _createElement.createElement)(elementType, ...args);
};
const tr = (...args)=>{
    const elementType = "tr";
    return (0, _createElement.createElement)(elementType, ...args);
};
const track = (...args)=>{
    const elementType = "track";
    return (0, _createElement.createElement)(elementType, ...args);
};
const u = (...args)=>{
    const elementType = "u";
    return (0, _createElement.createElement)(elementType, ...args);
};
const ul = (...args)=>{
    const elementType = "ul";
    return (0, _createElement.createElement)(elementType, ...args);
};
const video = (...args)=>{
    const elementType = "video";
    return (0, _createElement.createElement)(elementType, ...args);
};
const wbr = (...args)=>{
    const elementType = "wbr";
    return (0, _createElement.createElement)(elementType, ...args);
};

},{"./create-element":"ckMuN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ckMuN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function isStringOrHTMLElementOrComponent(arg) {
    return arg !== undefined && (arg instanceof HTMLElement || typeof arg === "string" || "isComponent" in arg);
}
function assignAttributes(htmlElement, attr) {
    attr.forEach(([key, val])=>{
        if (typeof val === "boolean") {
            htmlElement[key] = val;
            return;
        }
        if (typeof val === "string") htmlElement.setAttribute(key, val);
    });
}
function assignEventListeners(htmlElement, events) {
    events.forEach(([key, val])=>{
        htmlElement.addEventListener(key.slice(2), val);
    });
}
function createElement(type, ...args) {
    const element = document.createElement(type);
    const attributes = args.find((arg)=>!isStringOrHTMLElementOrComponent(arg));
    const innerContent = args.filter(isStringOrHTMLElementOrComponent);
    if (attributes) {
        const attr = Object.entries(attributes).filter(([key])=>!key.startsWith("on"));
        const events = Object.entries(attributes).filter(([key])=>key.startsWith("on"));
        assignAttributes(element, attr);
        assignEventListeners(element, events);
        attributes.setRef?.(element);
    }
    if (innerContent) innerContent.forEach((child)=>{
        if (typeof child !== "string" && "isComponent" in child) {
            const rendered = child.render();
            if (Array.isArray(rendered)) element.append(...rendered);
            else element.append(rendered);
        } else // element.append takes both strings and HTMLElements
        element.append(child);
    });
    return element;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rb2d":[function(require,module,exports) {
module.exports["appScreenContainer"] = `_fQK7q_appScreenContainer`;
module.exports["content"] = `_fQK7q_content`;
module.exports["header"] = `_fQK7q_header`;
module.exports["homeScreen"] = `_fQK7q_homeScreen`;
module.exports["menu"] = `_fQK7q_menu`;
module.exports["screen"] = `_fQK7q_screen`;

},{}],"1LQki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Content", ()=>Content);
var _screen1Component = require("app/components/screens/screen-1/screen-1.component");
var _htmlElements = require("libraries/ui/html-elements");
var _defineComponent = require("libraries/ui/define-component");
var _contentModuleCss = require("app/components/content/content.module.css");
var _screen2Component = require("app/components/screens/screen-2/screen-2.component");
var _render = require("libraries/ui/render");
var _screen3Component = require("app/components/screens/screen-3/screen-3.component");
class ContentComponent extends HTMLElement {
    connectedCallback() {
        const props = this.props;
        this.render();
        const contentScreens = (0, _render.render)([
            new (0, _screen1Component.Screen1)({
                class: _contentModuleCss.screen,
                getRandomNumber: props.getRandomNumber,
                greeting: props.greeting,
                onNextScreenClick: props.onNextScreenClick
            }),
            new (0, _screen2Component.Screen2)({
                class: _contentModuleCss.screen,
                screenSlider: this.props.screenSlider
            }),
            new (0, _screen3Component.Screen3)()
        ]);
        this.props?.screenSlider.init("#content-screen-container", contentScreens, 1);
    }
    template() {
        return (0, _htmlElements.div)({
            id: "content-screen-container",
            class: _contentModuleCss.screenContainer
        });
    }
    render() {
        this.replaceChildren(this.template());
    }
    init(props) {
        this.props = props;
        this.classList.add(props.class);
    }
}
const Content = (0, _defineComponent.defineComponent)("app-content", ContentComponent);

},{"app/components/screens/screen-1/screen-1.component":"2cGvT","libraries/ui/html-elements":"11lxt","libraries/ui/define-component":"eJu2H","app/components/content/content.module.css":"1MLGL","app/components/screens/screen-2/screen-2.component":"47EgR","libraries/ui/render":"kUtZR","app/components/screens/screen-3/screen-3.component":"9yH7b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cGvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Screen1", ()=>Screen1);
var _featureComponent = require("features/some-feature-module/components/feature.component");
var _defineComponent = require("libraries/ui/define-component");
var _htmlElements = require("libraries/ui/html-elements");
var _render = require("libraries/ui/render");
class Screen1Component extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    template() {
        if (this.props === undefined) throw new Error("Props is not defined");
        return (0, _render.render)([
            (0, _htmlElements.button)("Next screen", {
                onclick: this.props.onNextScreenClick
            }),
            (0, _htmlElements.div)(this.props.greeting),
            (0, _htmlElements.div)(this.props.getRandomNumber()),
            new (0, _featureComponent.Feature)(),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: white"
            }),
            (0, _htmlElements.div)({
                style: "height: 5rem; background-color: gray"
            })
        ]);
    }
    render() {
        if (this.props === undefined) throw new Error("Props is not defined");
        this.replaceChildren(...this.template());
    }
    init(props) {
        this.id = "screen-1";
        this.props = props;
        if (props.class !== undefined) this.classList.add(props.class);
    }
}
const Screen1 = (0, _defineComponent.defineComponent)("screen-1", Screen1Component);

},{"features/some-feature-module/components/feature.component":"l28sb","libraries/ui/define-component":"eJu2H","libraries/ui/html-elements":"11lxt","libraries/ui/render":"kUtZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l28sb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Feature", ()=>Feature);
var _defineComponent = require("libraries/ui/define-component");
var _htmlElements = require("libraries/ui/html-elements");
class FeatureComponent extends HTMLElement {
    constructor(){
        super();
        this.props = null;
        this.attachShadow({
            mode: "open"
        });
    }
    static get observedAttributes() {
        return [];
    }
    connectedCallback() {
        this.render();
    }
    template() {
        return [
            (0, _htmlElements.div)("string 1"),
            (0, _htmlElements.div)("string 2")
        ];
    }
    render() {
        const child = this.template();
        this.shadowRoot?.replaceChildren(...child);
    }
    init(props) {
        if (props === undefined) return;
        this.props = props;
    }
}
const Feature = (0, _defineComponent.defineComponent)("feature-component", FeatureComponent);

},{"libraries/ui/define-component":"eJu2H","libraries/ui/html-elements":"11lxt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUtZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
function isComponent(obj) {
    return obj.isComponent !== undefined;
}
function render(children) {
    if (Array.isArray(children)) return children.map((child)=>{
        if (isComponent(child)) return child.render();
        else return child;
    });
    if (!isComponent(children)) throw new Error("Render argument must be component or array");
    return children.render();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MLGL":[function(require,module,exports) {
module.exports["screen"] = `_8bMRBq_screen`;
module.exports["screenContainer"] = `_8bMRBq_screenContainer`;

},{}],"47EgR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Screen2", ()=>Screen2);
var _sortablejs = require("sortablejs");
var _sortablejsDefault = parcelHelpers.interopDefault(_sortablejs);
var _defineComponent = require("libraries/ui/define-component");
var _htmlElements = require("libraries/ui/html-elements");
var _screen2ModuleCss = require("app/components/screens/screen-2/screen-2.module.css");
class Screen2Component extends HTMLElement {
    setTilesContainer(ref) {
        this.tilesContainer = ref;
    }
    connectedCallback() {
        this.render();
        if (this.tilesContainer === undefined) return;
        this.sortableInstance = new (0, _sortablejsDefault.default)(this.tilesContainer, {
            ghostClass: _screen2ModuleCss.tileGhost,
            animation: 200,
            delayOnTouchOnly: true,
            delay: 150,
            scroll: true,
            forceAutoScrollFallback: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true,
            onStart: ()=>{
                this.props?.screenSlider.setSwipeEnabled(false);
            },
            onEnd: ()=>{
                this.props?.screenSlider.setSwipeEnabled(true);
            }
        });
    }
    disconnectedCallback() {
        if (this.sortableInstance !== undefined) this.sortableInstance.destroy();
    }
    template() {
        return (0, _htmlElements.div)((0, _htmlElements.div)((0, _htmlElements.span)("1"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("2"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("3"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("4"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("5"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("6"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("7"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("8"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("9"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("10"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("11"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("12"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("13"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("14"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("15"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("16"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("17"), {
            class: _screen2ModuleCss.tile
        }), (0, _htmlElements.div)((0, _htmlElements.span)("18"), {
            class: _screen2ModuleCss.tile
        }), {
            class: _screen2ModuleCss.gridContainer,
            setRef: (ref)=>{
                this.setTilesContainer(ref);
            }
        });
    }
    render() {
        this.replaceChildren(this.template());
    }
    init(props) {
        this.id = "screen-2";
        this.props = props;
        if (props.class !== undefined) this.classList.add(props.class);
    }
}
const Screen2 = (0, _defineComponent.defineComponent)("screen-2", Screen2Component);

},{"libraries/ui/define-component":"eJu2H","libraries/ui/html-elements":"11lxt","app/components/screens/screen-2/screen-2.module.css":"aHeUW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","sortablejs":"4mik1"}],"aHeUW":[function(require,module,exports) {
module.exports["gridContainer"] = `lnb21q_gridContainer`;
module.exports["tile"] = `lnb21q_tile`;
module.exports["tileGhost"] = `lnb21q_tileGhost`;

},{}],"4mik1":[function(require,module,exports) {
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiDrag", ()=>MultiDragPlugin);
parcelHelpers.export(exports, "Sortable", ()=>Sortable);
parcelHelpers.export(exports, "Swap", ()=>SwapPlugin);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.3";
function userAgent(pattern) {
    if (typeof window !== "undefined" && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
    capture: false,
    passive: false
};
function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === ">" && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = getParentOrHost(el));
    }
    return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? "add" : "remove"](name);
        else {
            var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
            el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
        }
    }
}
function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, "");
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
            style[prop] = val + (typeof val === "string" ? "" : "px");
        }
    }
}
function matrix(el, selfOnly) {
    var appliedTransforms = "";
    if (typeof el === "string") appliedTransforms = el;
    else do {
        var transform = css(el, "transform");
        if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode;
        // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!IE11OrLess) {
            do if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
                var containerRect = container.getBoundingClientRect();
                // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt(css(container, "border-top-width"));
                left -= containerRect.left + parseInt(css(container, "border-left-width"));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = getRect(parent)[parentSide], visible = void 0;
        if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return getWindowScrollingElement();
}
function extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
    return function() {
        if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            _throttleTimeout = setTimeout(function() {
                _throttleTimeout = void 0;
            }, ms);
        }
    };
}
function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function setRect(el, rect) {
    css(el, "position", "absolute");
    css(el, "top", rect.top);
    css(el, "left", rect.left);
    css(el, "width", rect.width);
    css(el, "height", rect.height);
}
function unsetRect(el) {
    css(el, "position", "");
    css(el, "top", "");
    css(el, "left", "");
    css(el, "width", "");
    css(el, "height", "");
}
function getChildContainingRectFromElement(container, options, ghostEl) {
    var rect = {};
    Array.from(container.children).forEach(function(child) {
        var _rect$left, _rect$top, _rect$right, _rect$bottom;
        if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
        var childRect = getRect(child);
        rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
        rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
        rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
        rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
    });
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if (css(child, "display") === "none" || child === Sortable.ghost) return;
                animationStates.push({
                    target: child,
                    rect: getRect(child)
                });
                var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
                // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === "function") callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                    (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                }
                // if fromRect != toRect: animate
                if (!isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === "function") callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === "function") callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                css(target, "transition", "");
                css(target, "transform", "");
                var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
                this.forRepaintDummy = repaint(target); // repaint
                css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
                css(target, "transform", "translate3d(0,0,0)");
                typeof target.animated === "number" && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    css(target, "transition", "");
                    css(target, "transform", "");
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function repaint(target) {
    return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
    initializeByDefault: true
};
var PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in defaults)if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
        plugins.forEach(function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        });
        plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + "Global";
        plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return;
            // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
                sortable: sortable
            }, evt));
            // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized;
            // Add default options from plugin
            _extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== "undefined") sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== "function") return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return;
            // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
    // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var _excluded = [
    "evt"
];
var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function _dispatchEvent(info) {
    dispatchEvent(_objectSpread2({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
    }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, // For positioning ghost absolutely
ghostRelativeParent, ghostRelativeParentInitialScroll = [], // (left, top)
_silent = false, savedInputChecked = [];
/** @const */ var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) return false;
    var el = document.createElement("x");
    el.style.cssText = "pointer-events:auto";
    return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
    if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
        var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
        return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
    }
    return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */ _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function(sortable) {
        var threshold = sortable[expando].options.emptyInsertThreshold;
        if (!threshold || lastChild(sortable)) return;
        var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === "clone") return value;
            else if (typeof value === "function") return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
};
// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
    }
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
        }
    }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = _extends({}, options);
    // Export instance
    el[expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return _detectDirection(el, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData("Text", dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
        emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults);
    // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    _prepareGroup(options);
    // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
    // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
    // Bind events
    if (options.supportPointer) on(el, "pointerdown", this._onTapStart);
    else {
        on(el, "mousedown", this._onTapStart);
        on(el, "touchstart", this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(el, "dragover", this);
        on(el, "dragenter", this);
    }
    sortables.push(this.el);
    // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []);
    // Add animation state manager
    _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */ {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        _saveInputCheckedState(el);
        // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if (dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
        // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
        // Safari ignores further event handling after mousedown
        if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") return;
        target = closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if (lastDownEl === target) // Ignoring duplicate `down`
        return;
        // Get the index of the dragged element within its parent
        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable);
        // Check filter
        if (typeof filter === "function") {
            if (filter.call(this, evt, target, this)) {
                _dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: "filter",
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                pluginEvent("filter", _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(",").some(function(criteria) {
                criteria = closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    _dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: "filter",
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    pluginEvent("filter", _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
        // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
                target: dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style["will-change"] = "all";
            dragStartFn = function dragStartFn() {
                pluginEvent("delayEnded", _this, {
                    evt: evt
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                    return;
                }
                // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
                // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch);
                // Drag start event
                _dispatchEvent({
                    sortable: _this,
                    name: "choose",
                    originalEvent: evt
                });
                // Chosen item
                toggleClass(dragEl, options.chosenClass, true);
            };
            // Disable "draggable"
            options.ignore.split(",").forEach(function(criteria) {
                find(dragEl, criteria.trim(), _disableDraggable);
            });
            on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mouseup", _this._onDrop);
            on(ownerDocument, "touchend", _this._onDrop);
            on(ownerDocument, "touchcancel", _this._onDrop);
            // Make dragEl draggable (must be before delay for FireFox)
            if (FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                dragEl.draggable = true;
            }
            pluginEvent("delayStart", this, {
                evt: evt
            });
            // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                if (Sortable.eventCanceled) {
                    this._onDrop();
                    return;
                }
                // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                on(ownerDocument, "mouseup", _this._disableDelayedDrag);
                on(ownerDocument, "touchend", _this._disableDelayedDrag);
                on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
                on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
                on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
                options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._disableDelayedDrag);
        off(ownerDocument, "touchend", this._disableDelayedDrag);
        off(ownerDocument, "touchcancel", this._disableDelayedDrag);
        off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == "touch" && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove);
            else if (touch) on(document, "touchmove", this._onTouchMove);
            else on(document, "mousemove", this._onTouchMove);
        } else {
            on(dragEl, "dragend", this);
            on(rootEl, "dragstart", this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            _nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;
        if (rootEl && dragEl) {
            pluginEvent("dragStarted", this, {
                evt: evt
            });
            if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
            var options = this.options;
            // Apply effect
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost();
            // Drag start event
            _dispatchEvent({
                sortable: this,
                name: "start",
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[expando]) {
                    var inserted = void 0;
                    inserted = parent[expando]._onDragOver({
                        clientX: touchEvt.clientX,
                        clientY: touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = getParentOrHost(parent));
            _unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
            // only set the status to dragging, when we are actually dragging
            if (!Sortable.active && !awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if (ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - (lastDx || 0);
                    ghostMatrix.f += dy - (lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                css(ghostEl, "webkitTransform", cssMatrix);
                css(ghostEl, "mozTransform", cssMatrix);
                css(ghostEl, "msTransform", cssMatrix);
                css(ghostEl, "transform", cssMatrix);
                lastDx = dx;
                lastDy = dy;
                touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
            // Position absolutely
            if (PositionGhostAbsolutely) {
                // Get relatively positioned parent
                ghostRelativeParent = container;
                while(css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document)ghostRelativeParent = ghostRelativeParent.parentNode;
                if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                    if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                    rect.top += ghostRelativeParent.scrollTop;
                    rect.left += ghostRelativeParent.scrollLeft;
                } else ghostRelativeParent = getWindowScrollingElement();
                ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, "transition", "");
            css(ghostEl, "transform", "");
            css(ghostEl, "box-sizing", "border-box");
            css(ghostEl, "margin", 0);
            css(ghostEl, "top", rect.top);
            css(ghostEl, "left", rect.left);
            css(ghostEl, "width", rect.width);
            css(ghostEl, "height", rect.height);
            css(ghostEl, "opacity", "0.8");
            css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
            css(ghostEl, "zIndex", "100000");
            css(ghostEl, "pointerEvents", "none");
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl);
            // Set transform-origin
            css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent("dragStart", this, {
            evt: evt
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
            return;
        }
        pluginEvent("setupClone", this);
        if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.removeAttribute("id");
            cloneEl.draggable = false;
            cloneEl.style["will-change"] = "";
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
        }
        // #1143: IFrame support workaround
        _this.cloneId = _nextTick(function() {
            pluginEvent("clone", _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
                sortable: _this,
                name: "clone"
            });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true);
        // Set proper drop events
        if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            off(document, "mouseup", _this._onDrop);
            off(document, "touchend", _this._onDrop);
            off(document, "touchcancel", _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = "move";
                options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, "drop", _this);
            // #1276 fix:
            css(dragEl, "transform", "translateZ(0)");
        }
        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, "selectstart", _this);
        moved = true;
        if (Safari) css(document.body, "user-select", "none");
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if (_silent) return;
        function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread2({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? "vertical" : "horizontal",
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target,
                completed: completed,
                onMove: function onMove(target, after) {
                    return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        }
        // Capture animation state
        function capture() {
            dragOverEvent("dragOverAnimationCapture");
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        }
        // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent("dragOverCompleted", {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
                else if (_this === Sortable.active && putSortable) putSortable = null;
                // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target;
                _this.animateAll(function() {
                    dragOverEvent("dragOverAnimationComplete");
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            }
            // Null lastTarget if it is not inside a previously swapped element
            if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
            // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
                // Do not detect for empty insert if already inserted
                !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        }
        // Call when dragEl has been inserted
        function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
                sortable: _this,
                name: "change",
                toEl: el,
                newIndex: newIndex,
                newDraggableIndex: newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target = closest(target, options.draggable, el, true);
        dragOverEvent("dragOver");
        if (Sortable.eventCanceled) return completedFired;
        if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
        ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl // Reverting item into the original list
        ) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target) === "vertical";
            dragRect = getRect(dragEl);
            dragOverEvent("dragOverValid");
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
                parentEl = rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent("revert");
                if (!Sortable.eventCanceled) {
                    if (nextEl) rootEl.insertBefore(dragEl, nextEl);
                    else rootEl.appendChild(dragEl);
                }
                return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // Insert to end of list
                // If already at end of list: Do not insert
                if (elLastChild === dragEl) return completed(false);
                // if there is a last element, it is the target
                if (elLastChild && el === evt.target) target = elLastChild;
                if (target) targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                    capture();
                    if (elLastChild && elLastChild.nextSibling) // the last draggable element is not the last node
                    el.insertBefore(dragEl, elLastChild.nextSibling);
                    else el.appendChild(dragEl);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
                // Insert to start of list
                var firstChild = getChild(el, 0, options, true);
                if (firstChild === dragEl) return completed(false);
                target = firstChild;
                targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
                    capture();
                    el.insertBefore(dragEl, firstChild);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target.parentNode === el) {
                targetRect = getRect(target);
                var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if (lastTarget !== target) {
                    targetBeforeFirstSwap = targetRect[side1];
                    pastFirstInvertThresh = false;
                    isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = index(dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = parentEl.children[dragIndex];
                    }while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
                }
                // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target) return completed(false);
                lastTarget = target;
                lastDirection = direction;
                var nextSibling = target.nextElementSibling, after = false;
                after = direction === 1;
                var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                    _silent = true;
                    setTimeout(_unsilent, 30);
                    capture();
                    if (after && !nextSibling) el.appendChild(dragEl);
                    else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                    // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    parentEl = dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains(dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        off(document, "mousemove", this._onTouchMove);
        off(document, "touchmove", this._onTouchMove);
        off(document, "pointermove", this._onTouchMove);
        off(document, "dragover", nearestEmptyInsertDetectEvent);
        off(document, "mousemove", nearestEmptyInsertDetectEvent);
        off(document, "touchmove", nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._onDrop);
        off(ownerDocument, "touchend", this._onDrop);
        off(ownerDocument, "pointerup", this._onDrop);
        off(ownerDocument, "touchcancel", this._onDrop);
        off(document, "selectstart", this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options;
        // Get the index of the dragged element within its parent
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent("drop", this, {
            evt: evt
        });
        parentEl = dragEl && dragEl.parentNode;
        // Get again after plugin event
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        if (Sortable.eventCanceled) {
            this._nulling();
            return;
        }
        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        _cancelNextTick(this.cloneId);
        _cancelNextTick(this._dragStartId);
        // Unbind events
        if (this.nativeDraggable) {
            off(document, "drop", this);
            off(el, "dragstart", this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if (Safari) css(document.body, "user-select", "");
        css(dragEl, "transform", "");
        if (evt) {
            if (moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
                if (this.nativeDraggable) off(dragEl, "dragend", this);
                _disableDraggable(dragEl);
                dragEl.style["will-change"] = "";
                // Remove classes
                // ghostClass is added in dragStarted
                if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                toggleClass(dragEl, this.options.chosenClass, false);
                // Drag stop event
                _dispatchEvent({
                    sortable: this,
                    name: "unchoose",
                    toEl: parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if (rootEl !== parentEl) {
                    if (newIndex >= 0) {
                        // Add event
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "add",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        // Remove event
                        _dispatchEvent({
                            sortable: this,
                            name: "remove",
                            toEl: parentEl,
                            originalEvent: evt
                        });
                        // drag from one list and drop into another
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "sort",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        _dispatchEvent({
                            sortable: this,
                            name: "sort",
                            toEl: parentEl,
                            originalEvent: evt
                        });
                    }
                    putSortable && putSortable.save();
                } else {
                    if (newIndex !== oldIndex) {
                        if (newIndex >= 0) {
                            // drag & drop within the same list
                            _dispatchEvent({
                                sortable: this,
                                name: "update",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                            _dispatchEvent({
                                sortable: this,
                                name: "sort",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if (Sortable.active) {
                    /* jshint eqnull:true */ if (newIndex == null || newIndex === -1) {
                        newIndex = oldIndex;
                        newDraggableIndex = oldDraggableIndex;
                    }
                    _dispatchEvent({
                        sortable: this,
                        name: "end",
                        toEl: parentEl,
                        originalEvent: evt
                    });
                    // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        pluginEvent("nulling", this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case "drop":
            case "dragend":
                this._onDrop(evt);
                break;
            case "dragenter":
            case "dragover":
                if (dragEl) {
                    this._onDragOver(evt);
                    _globalDragOver(evt);
                }
                break;
            case "selectstart":
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order, useAnimation) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        useAnimation && this.captureAnimationState();
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
        useAnimation && this.animateAll();
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== "undefined") options[name] = modifiedValue;
            else options[name] = value;
            if (name === "group") _prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        pluginEvent("destroy", this);
        var el = this.el;
        el[expando] = null;
        off(el, "mousedown", this._onTapStart);
        off(el, "touchstart", this._onTapStart);
        off(el, "pointerdown", this._onTapStart);
        if (this.nativeDraggable) {
            off(el, "dragover", this);
            off(el, "dragenter", this);
        }
        // Remove draggable attributes
        Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el) {
            el.removeAttribute("draggable");
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el = null;
    },
    _hideClone: function _hideClone() {
        if (!cloneHidden) {
            pluginEvent("hideClone", this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, "display", "none");
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== "clone") {
            this._hideClone();
            return;
        }
        if (cloneHidden) {
            pluginEvent("showClone", this);
            if (Sortable.eventCanceled) return;
            // show clone at dragEl or original position
            if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
            else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
            else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, "display", "");
            cloneHidden = false;
        }
    }
};
function _globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
    evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
    // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent("move", true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function _disableDraggable(el) {
    el.draggable = false;
}
function _unsilent() {
    _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
    var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
    var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
    var spacer = 10;
    return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
    var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
    var spacer = 10;
    return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
            if (!pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName("input");
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
    }
}
function _nextTick(fn) {
    return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
    return clearTimeout(id);
}
// Fixed #973:
if (documentExists) on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
// Export utils
Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
        return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild,
    expando: expando
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function(element) {
    return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
        PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function(el, options) {
    return new Sortable(el, options);
};
// Export
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        };
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll);
            else {
                if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll);
                else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll);
                else on(document, "mousemove", this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll);
            else {
                off(document, "pointermove", this._handleFallbackAutoScroll);
                off(document, "touchmove", this._handleFallbackAutoScroll);
                off(document, "mousemove", this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
        },
        nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt;
            // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
                autoScroll(evt, this.options, elem, fallback);
                // Listener for pointer element change
                var ogElemScroller = getParentAutoScrollElement(elem, true);
                if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                    pointerElemChangedInterval && clearPointerElemChangedInterval();
                    // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            clearAutoScrolls();
                        }
                        autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    lastAutoScrollX = x;
                    lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                    clearAutoScrolls();
                    return;
                }
                autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return _extends(AutoScroll, {
        pluginName: "scroll",
        initializeByDefault: true
    });
}
function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
}
function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn;
    // New scroll root, set scrollEl
    if (scrollRootEl !== rootEl) {
        scrollRootEl = rootEl;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
        var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!autoScrolls[i]) autoScrolls[i] = {};
        }
        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === "function") {
                        if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
                    }
                    scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent("spill");
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function Revert() {}
Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: drop
};
_extends(Revert, {
    pluginName: "revertOnSpill"
});
function Remove() {}
Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: drop
};
_extends(Remove, {
    pluginName: "removeOnSpill"
});
var lastSwapEl;
function SwapPlugin() {
    function Swap() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = lastSwapEl;
                if (onMove(target) !== false) {
                    toggleClass(target, options.swapClass, true);
                    lastSwapEl = target;
                } else lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    swapNodes(dragEl, lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            lastSwapEl = null;
        }
    };
    return _extends(Swap, {
        pluginName: "swap",
        eventProperties: function eventProperties() {
            return {
                swapItem: lastSwapEl
            };
        }
    });
}
function swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, // for selection with modifier key down (SHIFT)
multiDragSortable, initialFolding = false, // Initial multi-drag fold when drag started
folding = false, // Folding any other time
dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
        if (!sortable.options.avoidImplicitDeselect) {
            if (sortable.options.supportPointer) on(document, "pointerup", this._deselectMultiDrag);
            else {
                on(document, "mouseup", this._deselectMultiDrag);
                on(document, "touchend", this._deselectMultiDrag);
            }
        }
        on(document, "keydown", this._checkKeyDown);
        on(document, "keyup", this._checkKeyUp);
        this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl) {
                var data = "";
                if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? "" : ", ") + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData("Text", data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < multiDragElements.length; i++){
                multiDragClones.push(clone(multiDragElements[i]));
                multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
                multiDragClones[i].draggable = false;
                multiDragClones[i].style["will-change"] = "";
                toggleClass(multiDragClones[i], this.options.selectedClass, false);
                multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if (multiDragElements.length && multiDragSortable === sortable) {
                    insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent("clone");
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl);
            multiDragClones.forEach(function(clone) {
                css(clone, "display", "");
            });
            cloneNowShown();
            clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach(function(clone) {
                css(clone, "display", "none");
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = index(multiDragElement);
            });
            // Sort multi-drag elements
            multiDragElements = multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        css(multiDragElement, "position", "absolute");
                    });
                    var dragRect = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRect);
                    });
                    folding = true;
                    initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                folding = false;
                initialFolding = false;
                if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
                    unsetRect(multiDragElement);
                });
                // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
                // Setup unfold animation
                multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: folding ? getRect(multiDragElement) : dragRect
                    });
                    unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                folding = false;
                insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                initialFolding = false;
                // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRectAbsolute);
                        // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    folding = true;
                }
                // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!folding) removeMultiDragElements();
                    if (multiDragElements.length > 1) {
                        var clonesHiddenBefore = clonesHidden;
                        activeSortable._showClone(sortable);
                        // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: clonesFromRect
                            });
                            clone.fromRect = clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                clonesFromRect = _extends({}, dragRect);
                var dragMatrix = matrix(dragEl$1, true);
                clonesFromRect.top -= dragMatrix.f;
                clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
                folding = false;
                removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children;
            // Multi-drag selection
            if (!dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
                if (!~multiDragElements.indexOf(dragEl$1)) {
                    multiDragElements.push(dragEl$1);
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: "select",
                        targetEl: dragEl$1,
                        originalEvent: evt
                    });
                    // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                        var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~multiDragElements.indexOf(children[i])) continue;
                                toggleClass(children[i], options.selectedClass, true);
                                multiDragElements.push(children[i]);
                                dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: "select",
                                    targetEl: children[i],
                                    originalEvent: evt
                                });
                            }
                        }
                    } else lastMultiDragSelect = dragEl$1;
                    multiDragSortable = toSortable;
                } else {
                    multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                    lastMultiDragSelect = null;
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: "deselect",
                        targetEl: dragEl$1,
                        originalEvent: evt
                    });
                }
            }
            // Multi-drag drop
            if (dragStarted && this.isMultiDrag) {
                folding = false;
                // Do not "unfold" after around dragEl if reverted
                if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                    var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
                    if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!initialFolding) {
                        if (options.animation) {
                            dragEl$1.fromRect = dragRect;
                            multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== dragEl$1) {
                                    var rect = folding ? getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect;
                                    // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        }
                        // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        removeMultiDragElements();
                        multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        });
                        // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === index(dragEl$1)) {
                            var update = false;
                            multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) {
                                dispatchSortableEvent("update");
                                dispatchSortableEvent("sort");
                            }
                        }
                    }
                    // Must be done after capturing individual rects (scroll bar)
                    multiDragElements.forEach(function(multiDragElement) {
                        unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                multiDragSortable = toSortable;
            }
            // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, "pointerup", this._deselectMultiDrag);
            off(document, "mouseup", this._deselectMultiDrag);
            off(document, "touchend", this._deselectMultiDrag);
            off(document, "keydown", this._checkKeyDown);
            off(document, "keyup", this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return;
            // Only deselect if selection is in this sortable
            if (multiDragSortable !== this.sortable) return;
            // Only deselect if target is not item in this sortable
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;
            // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while(multiDragElements.length){
                var el = multiDragElements[0];
                toggleClass(el, this.options.selectedClass, false);
                multiDragElements.shift();
                dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: "deselect",
                    targetEl: el,
                    originalEvent: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: "multiDrag",
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[expando];
                if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
                if (multiDragSortable && multiDragSortable !== sortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                    multiDragSortable = sortable;
                }
                toggleClass(el, sortable.options.selectedClass, true);
                multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                toggleClass(el, sortable.options.selectedClass, false);
                multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                });
                // multiDragElements will already be sorted if folding
                var newIndex;
                if (folding && multiDragElement !== dragEl$1) newIndex = -1;
                else if (folding) newIndex = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
                else newIndex = index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: _toConsumableArray(multiDragElements),
                clones: [].concat(multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === "ctrl") key = "Control";
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function removeMultiDragElements() {
    multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yH7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Screen3", ()=>Screen3);
var _htmlElements = require("libraries/ui/html-elements");
class Screen3 {
    isComponent() {
        return true;
    }
    render() {
        return (0, _htmlElements.div)("\u042D\u043A\u0440\u0430\u043D 3");
    }
}

},{"libraries/ui/html-elements":"11lxt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiedf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Menu", ()=>Menu);
var _defineComponent = require("libraries/ui/define-component");
var _htmlElements = require("libraries/ui/html-elements");
var _render = require("libraries/ui/render");
class MenuComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    template() {
        return (0, _render.render)([
            (0, _htmlElements.button)("1", {
                onclick: this.props?.onFirstScreenButtonClick
            }),
            (0, _htmlElements.button)("2", {
                onclick: this.props?.onSecondScreenButtonClick
            }),
            (0, _htmlElements.button)("3", {
                onclick: this.props?.onThirdScreenButtonClick
            }),
            (0, _htmlElements.button)("4")
        ]);
    }
    render() {
        if (this.props === undefined) throw new Error("Props is not defined");
        this.replaceChildren(...this.template());
    }
    init(props) {
        this.props = props;
        this.classList.add(props.class);
    }
}
const Menu = (0, _defineComponent.defineComponent)("app-menu", MenuComponent);

},{"libraries/ui/define-component":"eJu2H","libraries/ui/html-elements":"11lxt","libraries/ui/render":"kUtZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkQ31":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numberService", ()=>numberService);
class NumberService {
    getRandomNumber() {
        return String(Math.random());
    }
}
const numberService = new NumberService();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pjd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startPwaServiceWorker", ()=>startPwaServiceWorker);
async function startPwaServiceWorker() {
    if ("serviceWorker" in navigator) {
        const { Workbox } = await require("fde6e39b922ac6de");
        const wb = new Workbox("./service-worker.js");
        wb.register();
    }
}

},{"fde6e39b922ac6de":"2Bz14","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Bz14":[function(require,module,exports) {
module.exports = require("4f80228a376c9695")(require("9f64191b0ae958f4").getBundleURL("7UhFu") + "workbox-window.prod.es5.72ef0165.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("1LkPL"));

},{"4f80228a376c9695":"61B45","9f64191b0ae958f4":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"X4gZ7":[function() {},{}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequiref5f3")

//# sourceMappingURL=index.b71e74eb.js.map
