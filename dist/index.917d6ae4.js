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
        globalObject
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
})({"8zVio":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "03baa240917d6ae4";
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
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
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
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
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
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8noxN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _allToDOsViewJs = require("./View/allToDOsView.js");
var _allToDOsViewJsDefault = parcelHelpers.interopDefault(_allToDOsViewJs);
var _crossViewJs = require("./View/crossView.js");
var _crossViewJsDefault = parcelHelpers.interopDefault(_crossViewJs);
var _activeToDosViewJs = require("./View/activeToDosView.js");
var _activeToDosViewJsDefault = parcelHelpers.interopDefault(_activeToDosViewJs);
var _completedViewJs = require("./View/completedView.js");
var _completedViewJsDefault = parcelHelpers.interopDefault(_completedViewJs);
var _viewJs = require("./View/view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _changingModeViewJs = require("./View/changingModeView.js");
var _changingModeViewJsDefault = parcelHelpers.interopDefault(_changingModeViewJs);
var _dragAndDropViewJs = require("./View/dragAndDropView.js");
var _dragAndDropViewJsDefault = parcelHelpers.interopDefault(_dragAndDropViewJs);
const allAddons = function(data) {
    _modelJs.todoList.all.push(data);
    _modelJs.todoList.active.push(data);
    if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
        (0, _allToDOsViewJsDefault.default)._render(data, '', '', false);
        (0, _allToDOsViewJsDefault.default).updateRemainingToDOs(_modelJs.todoList.all);
        (0, _changingModeViewJsDefault.default).lightMode();
    }
    if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
        (0, _allToDOsViewJsDefault.default)._render(data, '', '', false);
        (0, _allToDOsViewJsDefault.default).updateRemainingToDOs(_modelJs.todoList.all);
        (0, _changingModeViewJsDefault.default).nightMode();
    }
};
const completedtodo = function(data, element) {
    if (_modelJs.todoList.completed.includes(data)) return;
    _modelJs.todoList.completed.push(data);
    _modelJs.completedItems.set(element, data);
};
const activeToDos = function(data) {
    const active = _modelJs.todoList.all.filter((el)=>{
        if (!_modelJs.todoList.completed.includes(el)) return el;
    });
    _modelJs.todoList.active = [
        ...new Set(active)
    ];
    (0, _allToDOsViewJsDefault.default).updateRemainingToDOs(_modelJs.todoList.active);
};
const loadActiveToDos = function() {
    if (_modelJs.todoList.active) {
        _modelJs.todoList.active.forEach((el)=>{
            if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
                (0, _activeToDosViewJsDefault.default)._render(el, '', '', false);
                (0, _changingModeViewJsDefault.default).lightMode();
            }
            if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
                (0, _activeToDosViewJsDefault.default)._render(el, '', '', false);
                (0, _changingModeViewJsDefault.default).nightMode();
            }
        });
        (0, _activeToDosViewJsDefault.default)._setCounters();
    }
    if (!_modelJs.todoList.active.length) {
        _modelJs.todoList.active.forEach((el)=>{
            if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
                (0, _activeToDosViewJsDefault.default)._render(el, '', '', false);
                (0, _changingModeViewJsDefault.default).lightMode();
            }
            if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
                (0, _activeToDosViewJsDefault.default)._render(el, '', '', false);
                (0, _changingModeViewJsDefault.default).nightMode();
            }
        });
        (0, _activeToDosViewJsDefault.default)._setCounters();
    }
    (0, _allToDOsViewJsDefault.default).updateRemainingToDOs(_modelJs.todoList.active);
};
const loadAllToDos = function() {
    if (_modelJs.todoList.all) {
        (0, _allToDOsViewJsDefault.default)._setCounters();
        _modelJs.todoList.all.forEach((item)=>{
            if (_modelJs.todoList.completed.includes(item)) {
                if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
                    (0, _allToDOsViewJsDefault.default)._render(item, 'complete', 'checked', true);
                    (0, _changingModeViewJsDefault.default).lightMode();
                }
                if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
                    (0, _allToDOsViewJsDefault.default)._render(item, 'complete', 'checked', true);
                    (0, _changingModeViewJsDefault.default).nightMode();
                }
            } else {
                if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
                    (0, _allToDOsViewJsDefault.default)._render(item, '', '', false);
                    (0, _changingModeViewJsDefault.default).lightMode();
                }
                if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
                    (0, _allToDOsViewJsDefault.default)._render(item, '', '', false);
                    (0, _changingModeViewJsDefault.default).nightMode();
                }
            }
        });
    }
};
const completedToDos = function() {
    if (_modelJs.todoList.completed) {
        _modelJs.todoList.completed.forEach((el)=>{
            if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
                (0, _completedViewJsDefault.default)._render(el, 'complete', "checked", true);
                (0, _changingModeViewJsDefault.default).lightMode();
            }
            if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
                (0, _completedViewJsDefault.default)._render(el, 'complete', "checked", true);
                (0, _changingModeViewJsDefault.default).nightMode();
            }
        });
        (0, _completedViewJsDefault.default)._setCounters();
    }
};
const clearCompleted = function() {
    if (_modelJs.todoList.completed) {
        _modelJs.todoList.completed.forEach((el)=>{
            let index = _modelJs.todoList.all.indexOf(el);
            _modelJs.todoList.all.splice(index, 1);
        });
        let length = _modelJs.todoList.completed.length;
        for(let i = 0; i < length; i++)_modelJs.todoList.completed.pop();
        console.log(_modelJs.todoList.all);
    }
};
const deleteCompleteElement = function(el) {
    let indexInCompletedArr = _modelJs.todoList.completed.indexOf(el);
    let indexInAllArr = _modelJs.todoList.all.indexOf(el);
    _modelJs.todoList.completed.splice(indexInCompletedArr, 1);
    _modelJs.todoList.all.splice(indexInAllArr, 1);
    _modelJs.todoList.active.forEach((item)=>{
        if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') //  activeToDosView._render(item,'','',false);
        (0, _changingModeViewJsDefault.default).lightMode();
        if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') // activeToDosView._render(item,'','',false);
        (0, _changingModeViewJsDefault.default).nightMode();
    });
    _modelJs.todoList.completed.forEach((item)=>{
        if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
            (0, _completedViewJsDefault.default)._render(item, 'complete', 'checked', true);
            (0, _changingModeViewJsDefault.default).lightMode();
        }
        if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
            (0, _completedViewJsDefault.default)._render(item, 'complete', 'checked', true);
            (0, _changingModeViewJsDefault.default).nightMode();
        }
    });
};
const deleteActiveElement = function(el) {
    let indexInActiveArr = _modelJs.todoList.active.indexOf(el);
    let indexInAllArr = _modelJs.todoList.all.indexOf(el);
    _modelJs.todoList.active.splice(indexInActiveArr, 1);
    _modelJs.todoList.all.splice(indexInAllArr, 1);
    _modelJs.todoList.active.forEach((item)=>{
        if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') {
            (0, _activeToDosViewJsDefault.default)._render(item, '', '', false);
            (0, _allToDOsViewJsDefault.default).updateRemainingToDOs(_modelJs.todoList.active);
            (0, _changingModeViewJsDefault.default).lightMode();
        }
        if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') {
            (0, _activeToDosViewJsDefault.default)._render(item, '', '', false);
            (0, _allToDOsViewJsDefault.default).updateRemainingToDOs(_modelJs.todoList.active);
            (0, _changingModeViewJsDefault.default).nightMode();
        }
    });
    console.log(_modelJs.todoList.active);
    console.log(_modelJs.todoList.all);
    _modelJs.todoList.completed.forEach((item)=>{
        if ((0, _changingModeViewJsDefault.default)._curmode === 'sun') //completedView._render(item,'complete','checked',true);
        (0, _changingModeViewJsDefault.default).lightMode();
        if ((0, _changingModeViewJsDefault.default)._curmode === 'moon') //completedView._render(item,'complete','checked',true);
        (0, _changingModeViewJsDefault.default).nightMode();
    });
};
const init = function() {
    (0, _allToDOsViewJsDefault.default).addHandlerUserInput(allAddons);
    (0, _crossViewJsDefault.default).addHandlerClickCross(completedtodo);
    (0, _activeToDosViewJsDefault.default).addHandlerActiveTodo(activeToDos);
    (0, _activeToDosViewJsDefault.default).renderActiveTodos(loadActiveToDos);
    (0, _allToDOsViewJsDefault.default).renderAllTodos(loadAllToDos);
    (0, _completedViewJsDefault.default).renderCompletedTodos(completedToDos);
    (0, _completedViewJsDefault.default)._clearCompletedView(clearCompleted);
    (0, _allToDOsViewJsDefault.default).onClickDeleteIcon(deleteActiveElement, deleteCompleteElement);
    // activeToDosView.onClickDeleteIcon(deleteActiveElement,deleteCompleteElement);
    // completedView.onClickDeleteIcon(deleteActiveElement,deleteCompleteElement);
    (0, _changingModeViewJsDefault.default).addHandlerChangeMode();
    (0, _dragAndDropViewJsDefault.default).addHandlerDragAndDrop();
};
init();

},{"./model.js":"axYv4","./View/allToDOsView.js":"3EBHz","./View/crossView.js":"8rtih","./View/activeToDosView.js":"6khcO","./View/completedView.js":"hNbFc","./View/view.js":"hkkRj","./View/changingModeView.js":"dn766","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./View/dragAndDropView.js":"kh145"}],"axYv4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "todoList", ()=>todoList);
parcelHelpers.export(exports, "completedItems", ()=>completedItems);
let todoList = {
    all: [],
    active: [],
    completed: []
};
let completedItems = new Map();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"3EBHz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconCrossSvg = require("url:../images/icon-cross.svg");
var _iconCrossSvgDefault = parcelHelpers.interopDefault(_iconCrossSvg);
var _iconCheckSvg = require("url:../images/icon-check.svg");
var _iconCheckSvgDefault = parcelHelpers.interopDefault(_iconCheckSvg);
var _completedView = require("./completedView");
var _completedViewDefault = parcelHelpers.interopDefault(_completedView);
var _activeToDosView = require("./activeToDosView");
var _activeToDosViewDefault = parcelHelpers.interopDefault(_activeToDosView);
var _crossView = require("./crossView");
var _crossViewDefault = parcelHelpers.interopDefault(_crossView);
class AllToDo extends (0, _viewDefault.default) {
    _userInputtodo = document.querySelectorAll('.input-todo');
    _itemNumbers = 1;
    addHandlerUserInput(handler, active) {
        this._userInputtodo.forEach((input)=>{
            input.addEventListener('keydown', (e)=>{
                if (e.key === 'Enter') {
                    this._parentEl.forEach((el)=>{
                        el.classList.remove('hide');
                    });
                    handler(input.value);
                    input.value = '';
                    this._todocontainer.hasChildNodes;
                }
            });
        });
    }
    updateRemainingToDOs(arr) {
        if (this._todocontainer.hasChildNodes) {
            let itemsLeft = document.querySelector('.itemsLeft');
            console.log(arr);
            itemsLeft.textContent = `${arr.length ? arr.length : 0} items left`;
        }
    }
    renderAllTodos(handler) {
        if (this._todocontainer.hasChildNodes) {
            let allEl = document.querySelector('.all');
            allEl.addEventListener('click', ()=>{
                this._todoInput.disabled = false;
                this._todolistID = 1;
                this._todolistCrossID = 1;
                this._todoNum = 1;
                this._todoDeleteID = 1;
                let stateEls = document.querySelectorAll('.stateEl');
                stateEls.forEach((el)=>{
                    el.classList.remove('activestate');
                });
                allEl.classList.add('activestate');
                this._clear();
                handler();
            });
        }
    }
    _generateMarkup(data, CName, flag, disableStatus) {
        return `<div class="list">
        <div class="todoname">
<input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++} ${flag} ${disableStatus ? 'disabled' : ''}">
<img src="${0, _iconCheckSvgDefault.default}" class="completedimg" alt="">
<span class="checkbox"></span>
<p class='todo${this._todolistID++} todo ${CName}' data-number=${this._todoNum++}>${data}</p>
</div>
<img src="${0, _iconCrossSvgDefault.default}" class="cross" data-deleteID=${this._todoDeleteID++} alt="" >
</div>`;
    }
}
exports.default = new AllToDo();

},{"./view":"hkkRj","url:../images/icon-cross.svg":"5zjlu","url:../images/icon-check.svg":"eNfcQ","./completedView":"hNbFc","./activeToDosView":"6khcO","./crossView":"8rtih","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkkRj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _parentEl = document.querySelectorAll('.todo-container');
    _todocontainer = document.querySelector('.todo-list');
    _todoInput = document.querySelector('.input-todo');
    _data;
    _todolistID = 1;
    _todolistCrossID = 1;
    _todoNum = 1;
    _todoDeleteID = 1;
    _render(data, className, checkStatus, disableStatus) {
        this._data = data;
        let markup = this._generateMarkup(this._data, className, checkStatus, disableStatus);
        this._todocontainer.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._todocontainer.innerHTML = '';
    }
    _getElement(className) {
        return document.querySelector(`${className}`);
    }
    _setCounters() {
        this._todolistCrossID = 1;
        this._todolistID = 1;
        this._todoNum = 1;
        this._todoDeleteID = 1;
    }
    onClickDeleteIcon(handler1, handler2) {
        if (this._todocontainer.hasChildNodes) this._todocontainer.addEventListener('click', (e)=>{
            if (e.target.classList.contains('cross')) {
                let elID = e.target.getAttribute('data-deleteID');
                console.log(elID);
                let todoElement = document.querySelector(`.todo${elID}`);
                console.log(todoElement);
                if (!todoElement.classList.contains('complete')) {
                    this._clear();
                    handler1(todoElement.textContent);
                }
                if (todoElement.classList.contains('complete')) {
                    this._clear();
                    handler2(todoElement.textContent);
                }
            }
        });
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zjlu":[function(require,module,exports,__globalThis) {
module.exports = require("f5ef3d658993dc29").getBundleURL('jQFNt') + "icon-cross.c749095c.svg" + "?" + Date.now();

},{"f5ef3d658993dc29":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
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
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eNfcQ":[function(require,module,exports,__globalThis) {
module.exports = require("281fb65e03982cbf").getBundleURL('jQFNt') + "icon-check.6ccd9270.svg" + "?" + Date.now();

},{"281fb65e03982cbf":"lgJ39"}],"hNbFc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _allToDOsView = require("./allToDOsView");
var _allToDOsViewDefault = parcelHelpers.interopDefault(_allToDOsView);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _activeToDosView = require("./activeToDosView");
var _activeToDosViewDefault = parcelHelpers.interopDefault(_activeToDosView);
var _iconCrossSvg = require("url:../images/icon-cross.svg");
var _iconCrossSvgDefault = parcelHelpers.interopDefault(_iconCrossSvg);
var _iconCheckSvg = require("url:../images/icon-check.svg");
var _iconCheckSvgDefault = parcelHelpers.interopDefault(_iconCheckSvg);
class CompletedView extends (0, _viewDefault.default) {
    renderCompletedTodos(handler) {
        if (this._todocontainer.hasChildNodes) {
            let completedEl = document.querySelector('.completed');
            completedEl.addEventListener('click', ()=>{
                this._todoInput.disabled = true;
                this._todolistID = 1;
                this._todolistCrossID = 1;
                this._todoNum = 1;
                this._todoDeleteID = 1;
                let completedToDoEls = document.querySelectorAll('.todo');
                completedToDoEls.forEach((el)=>{
                    console.log(el.classList);
                });
                let stateEls = document.querySelectorAll('.stateEl');
                stateEls.forEach((el)=>{
                    el.classList.remove('activestate');
                });
                completedEl.classList.add('activestate');
                this._clear();
                handler();
            });
        }
    }
    _generateMarkup(data, CName, checkStaus, disableStatus) {
        return `<div class="list">
            <div class="todoname">
    <input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++} ${checkStaus} ${disableStatus ? 'disabled' : ''}>
    <img src="${0, _iconCheckSvgDefault.default}" class="completedimg" alt="">
    <span class="checkbox"></span>
    <p class='todo${this._todolistID++} todo ${CName}' data-number=${this._todoNum++}>${data}</p>
    </div>
    <img src="${0, _iconCrossSvgDefault.default}" class="cross" data-deleteID=${this._todoDeleteID++} alt="" >
    </div>`;
    }
    _clearCompletedView(handler) {
        if (this._todocontainer.hasChildNodes) {
            let clearEl = document.querySelector('.clearcomp');
            clearEl.addEventListener('click', ()=>{
                handler();
            });
        }
    }
}
exports.default = new CompletedView();

},{"./allToDOsView":"3EBHz","./view":"hkkRj","./activeToDosView":"6khcO","url:../images/icon-cross.svg":"5zjlu","url:../images/icon-check.svg":"eNfcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6khcO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _crossView = require("./crossView");
var _crossViewDefault = parcelHelpers.interopDefault(_crossView);
var _allToDOsView = require("./allToDOsView");
var _allToDOsViewDefault = parcelHelpers.interopDefault(_allToDOsView);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconCrossSvg = require("url:../images/icon-cross.svg");
var _iconCrossSvgDefault = parcelHelpers.interopDefault(_iconCrossSvg);
var _iconCheckSvg = require("url:../images/icon-check.svg");
var _iconCheckSvgDefault = parcelHelpers.interopDefault(_iconCheckSvg);
class ActiveTodo extends (0, _viewDefault.default) {
    _activeTodo = [];
    _todolistID = 1;
    _todolistCrossID = 1;
    addHandlerActiveTodo(handler) {
        this._todocontainer.addEventListener('click', (e)=>{
            if (e.target.classList.contains('todocheck')) {
                let alltodos = document.querySelectorAll('.todocheck');
                alltodos.forEach((todo)=>{
                    if (todo.checked) handler();
                });
            }
        });
    }
    renderActiveTodos(handler) {
        if (this._todocontainer.hasChildNodes) {
            let activeEl = document.querySelector('.active');
            activeEl.addEventListener('click', ()=>{
                this._todoInput.disabled = false;
                let stateEls = document.querySelectorAll('.stateEl');
                stateEls.forEach((el)=>{
                    el.classList.remove('activestate');
                });
                activeEl.classList.add('activestate');
                this._clear();
                handler();
            });
        }
    }
    _generateMarkup(data, cName, checkStatus, disableStatus) {
        return `<div class="list">
        <div class="todoname">
<input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++} ${checkStatus} ${disableStatus ? 'disabled' : ''}>
<img src="${0, _iconCheckSvgDefault.default}" class="completedimg" alt="">
<span class="checkbox"></span>
<p class='todo${this._todolistID++} todo ${cName}' data-number=${this._todoNum++}>${data}</p>
</div>
<img src="${0, _iconCrossSvgDefault.default}" class="cross" data-deleteID=${this._todoDeleteID++} alt="" >
</div>`;
    }
}
exports.default = new ActiveTodo();

},{"./crossView":"8rtih","./allToDOsView":"3EBHz","./view":"hkkRj","url:../images/icon-cross.svg":"5zjlu","url:../images/icon-check.svg":"eNfcQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rtih":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _allToDOsView = require("./allToDOsView");
var _allToDOsViewDefault = parcelHelpers.interopDefault(_allToDOsView);
class CrossView extends (0, _viewDefault.default) {
    _crossBtn = document.querySelector('.cross');
    _completedTodo;
    _completedTodoArr = [];
    addHandlerClickCross(handler) {
        this._todocontainer.addEventListener('click', (e)=>{
            if (e.target.classList.contains('todocheck')) {
                let id = e.target.getAttribute('data-id');
                let alltodos = document.querySelectorAll('.todocheck');
                console.log(id);
                alltodos.forEach((todo)=>{
                    if (todo.checked) {
                        console.log("hello");
                        todo.setAttribute('disabled', true);
                        this._completedTodoArr.push(todo.getAttribute('data-id'));
                    }
                });
                let completedItem = document.querySelector(`.todo${id}`);
                completedItem.classList.add('complete');
                console.log(completedItem);
                this._completedTodo = completedItem.textContent;
                this._completedTodoArr = [
                    ...new Set(this._completedTodoArr)
                ];
                console.log(this._completedTodoArr);
                handler(this._completedTodo, completedItem);
            }
        });
    }
}
exports.default = new CrossView();

},{"./view":"hkkRj","./allToDOsView":"3EBHz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn766":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _bgDesktopLightJpg = require("url:../images/bg-desktop-light.jpg");
var _bgDesktopLightJpgDefault = parcelHelpers.interopDefault(_bgDesktopLightJpg);
var _bgMobileLightJpg = require("url:../images/bg-mobile-light.jpg");
var _bgMobileLightJpgDefault = parcelHelpers.interopDefault(_bgMobileLightJpg);
var _bgMobileDarkJpg = require("url:../images/bg-mobile-dark.jpg");
var _bgMobileDarkJpgDefault = parcelHelpers.interopDefault(_bgMobileDarkJpg);
var _bgDesktopDarkJpg = require("url:../images/bg-desktop-dark.jpg");
var _bgDesktopDarkJpgDefault = parcelHelpers.interopDefault(_bgDesktopDarkJpg);
var _iconMoonSvg = require("url:../images/icon-moon.svg");
var _iconMoonSvgDefault = parcelHelpers.interopDefault(_iconMoonSvg);
var _iconSunSvg = require("url:../images/icon-sun.svg");
var _iconSunSvgDefault = parcelHelpers.interopDefault(_iconSunSvg);
class ChangingMode extends (0, _viewDefault.default) {
    _mode = document.querySelectorAll('.mode');
    _curmode = 'moon';
    addHandlerChangeMode() {
        this._mode.forEach((el)=>{
            console.log(el);
            el.addEventListener('click', (e)=>{
                if (e.target.classList.contains('sun')) {
                    this._curmode = "sun";
                    let bgImg = document.querySelector('.bg-img');
                    let mobileImg = document.querySelector('.mobileImage');
                    let inputBar = document.querySelectorAll('.todo-inputtext');
                    let inputText = document.querySelectorAll('.input-todo');
                    bgImg.src = (0, _bgDesktopLightJpgDefault.default);
                    mobileImg.src = (0, _bgMobileLightJpgDefault.default);
                    this._mode.forEach((element)=>{
                        element.src = (0, _iconMoonSvgDefault.default);
                    });
                    console.log(el.src);
                    el.classList.remove('sun');
                    el.classList.add('moon');
                    document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
                    inputBar.forEach((input)=>{
                        input.style.backgroundColor = 'hsl(0, 0%, 98%)';
                    });
                    inputText.forEach((input)=>{
                        input.style.backgroundColor = 'hsl(0, 0%, 98%)';
                        input.style.color = 'hsl(237, 14%, 26%)';
                    });
                    this.lightMode();
                    return;
                }
                if (e.target.classList.contains('moon')) {
                    this._curmode = "moon";
                    this._mode.forEach((element)=>{
                        element.src = (0, _iconSunSvgDefault.default);
                    });
                    let bgImg = document.querySelector('.bg-img');
                    let mobileImg = document.querySelector('.mobileImage');
                    bgImg.src = (0, _bgDesktopDarkJpgDefault.default);
                    mobileImg.src = (0, _bgMobileDarkJpgDefault.default);
                    el.classList.add('sun');
                    el.classList.remove('moon');
                    let inputBar = document.querySelectorAll('.todo-inputtext');
                    let inputText = document.querySelectorAll('.input-todo');
                    document.body.style.backgroundColor = 'hsl(237, 14%, 26%)';
                    inputBar.forEach((input)=>{
                        input.style.backgroundColor = 'var(--primary-vDark-DesatBlue)';
                    });
                    inputText.forEach((input)=>{
                        input.style.backgroundColor = 'var(--primary-vDark-DesatBlue)';
                        input.style.color = 'hsl(0, 0%, 98%)';
                    });
                    this.nightMode();
                    return;
                }
            });
        });
    }
    lightMode() {
        if (this._todocontainer.hasChildNodes) {
            let stateEL = document.querySelectorAll('.state');
            let todobottom = document.querySelector('.todo-bottom');
            let todoList = document.querySelectorAll('.list');
            let todoName = document.querySelectorAll('.todo');
            let todoContainer = document.querySelector('.todo-container');
            todoContainer.style.backgroundColor = 'hsl(236, 33%, 92%)';
            todoList.forEach((list)=>{
                list.style.backgroundColor = 'hsl(236, 33%, 92%)';
            });
            todoName.forEach((todo)=>{
                todo.style.color = 'hsl(235, 19%, 35%)';
                todo.style.fontWeight = '400';
            });
            stateEL.forEach((el)=>{
                el.style.backgroundColor = 'hsl(236, 33%, 92%)';
            });
            todobottom.style.backgroundColor = 'hsl(236, 33%, 92%)';
        }
    }
    nightMode() {
        if (this._todocontainer.hasChildNodes) {
            let todobottom = document.querySelector('.todo-bottom');
            let todoList = document.querySelectorAll('.list');
            let todoName = document.querySelectorAll('.todo');
            let todoContainer = document.querySelector('.todo-container');
            let stateEL = document.querySelectorAll('.state');
            todoContainer.style.backgroundColor = 'var(--primary-vDark-grayishBlue)';
            todoList.forEach((list)=>{
                list.style.backgroundColor = 'var(--primary-vDark-DesatBlue)';
            });
            todoName.forEach((todo)=>{
                todo.style.color = 'hsl(234, 11%, 52%)';
                todo.style.fontWeight = '400';
            });
            stateEL.forEach((el)=>{
                el.style.backgroundColor = 'var(--primary-vDark-DesatBlue)';
            });
            todobottom.style.color = 'var(--primary-vDark-grayishBlue)';
            todobottom.style.backgroundColor = 'var(--primary-vDark-DesatBlue)';
        }
    }
}
exports.default = new ChangingMode();

},{"./view":"hkkRj","url:../images/bg-desktop-light.jpg":"cesuy","url:../images/bg-desktop-dark.jpg":"g7xfy","url:../images/icon-moon.svg":"fH0MI","url:../images/icon-sun.svg":"fO3Te","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../images/bg-mobile-light.jpg":"btUB5","url:../images/bg-mobile-dark.jpg":"jzsjf"}],"cesuy":[function(require,module,exports,__globalThis) {
module.exports = require("67c45d318029b80e").getBundleURL('jQFNt') + "bg-desktop-light.b54eea9a.jpg" + "?" + Date.now();

},{"67c45d318029b80e":"lgJ39"}],"g7xfy":[function(require,module,exports,__globalThis) {
module.exports = require("78e48c48c206587").getBundleURL('jQFNt') + "bg-desktop-dark.6c675a9f.jpg" + "?" + Date.now();

},{"78e48c48c206587":"lgJ39"}],"fH0MI":[function(require,module,exports,__globalThis) {
module.exports = require("6219c5aada424eef").getBundleURL('jQFNt') + "icon-moon.1ebe0023.svg" + "?" + Date.now();

},{"6219c5aada424eef":"lgJ39"}],"fO3Te":[function(require,module,exports,__globalThis) {
module.exports = require("a7f317e2d25a7f2c").getBundleURL('jQFNt') + "icon-sun.88ccb7d1.svg" + "?" + Date.now();

},{"a7f317e2d25a7f2c":"lgJ39"}],"btUB5":[function(require,module,exports,__globalThis) {
module.exports = require("b84eeb32269d229b").getBundleURL('jQFNt') + "bg-mobile-light.b4961e34.jpg" + "?" + Date.now();

},{"b84eeb32269d229b":"lgJ39"}],"jzsjf":[function(require,module,exports,__globalThis) {
module.exports = require("21993c4fd14bbb5f").getBundleURL('jQFNt') + "bg-mobile-dark.3a6c0f66.jpg" + "?" + Date.now();

},{"21993c4fd14bbb5f":"lgJ39"}],"kh145":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _allToDOsView = require("./allToDOsView");
var _allToDOsViewDefault = parcelHelpers.interopDefault(_allToDOsView);
class DragAndDrop extends (0, _viewDefault.default) {
    _todoList;
    addHandlerDragAndDrop() {
        (0, _allToDOsViewDefault.default)._userInputtodo.forEach((input)=>{
            input.addEventListener('keydown', (e)=>{
                if (e.key === 'Enter') {
                    this._todoList = [
                        ...this._todocontainer.children
                    ];
                    this._todoList.forEach((list)=>{
                        list.addEventListener('dragstart', (e)=>{
                            let selected = e.target;
                            this._todocontainer.addEventListener('dragover', (e)=>{
                                e.preventDefault();
                            });
                            this._todocontainer.addEventListener('drop', (e)=>{
                                this._todocontainer.appendChild(selected);
                                selected = null;
                            });
                        });
                    });
                }
            });
        });
    }
}
exports.default = new DragAndDrop();

},{"./view":"hkkRj","./allToDOsView":"3EBHz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8zVio","8noxN"], "8noxN", "parcelRequire94c2")

//# sourceMappingURL=index.917d6ae4.js.map
