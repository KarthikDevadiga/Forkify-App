// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"drOo7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "6632b38b436439df";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jKMjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _faviconPng = require("url:../img/favicon.png"); // importing svg file bcs dist can find the icon location
var _faviconPngDefault = parcelHelpers.interopDefault(_faviconPng);
const { id  } = require("prelude-ls");
const { async  } = require("regenerator-runtime");
const recipeContainer = document.querySelector(".recipe");
const results = document.querySelector(".results"); //list container <ul></ul>
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
//spinner
const renderSpinner = function(parentContainer) {
    const html = `\n  <div class="spinner">\n    <svg>\n      <use href="${_iconsSvgDefault.default}#icon-loader"></use>\n    </svg>\n   </div> \n  `;
    parentContainer.innerHTML = "";
    parentContainer.insertAdjacentHTML("afterbegin", html);
};
const getrecipe = async function() {
    try {
        const hash = window.location.hash.slice(1); //getting hash
        if (!hash) return;
        renderSpinner(recipeContainer);
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hash}`, {
            mode: "cors"
        });
        if (!response.ok) throw new Error("invalid Id");
        const data = await response.json();
        // {data:{data:{recipe}}} //destuctured
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            image: recipe.image_url,
            publisher: recipe.publisher,
            title: recipe.title,
            sourceUrl: recipe.source_url,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
        const html = `\n    <figure class="recipe__fig">\n          <img src="${recipe.image}" crossorigin = "Anonymous" alt="${recipe.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${recipe.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${_iconsSvgDefault.default}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">45</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${_iconsSvgDefault.default}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">4</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--increase-servings">\n                <svg>\n                  <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--increase-servings">\n                <svg>\n                  <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated">\n            <svg>\n              <use href="${_iconsSvgDefault.default}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round">\n            <svg class="">\n              <use href="${_iconsSvgDefault.default}#icon-bookmark-fill"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${recipe.ingredients.map(function(ingredient) {
            return `<li class="recipe__ingredient">\n            <svg class="recipe__icon">\n              <use href="${_iconsSvgDefault.default}#icon-check"></use>\n            </svg>\n            <div class="recipe__quantity">${ingredient.quantity}</div>\n            <div class="recipe__description">\n              <span class="recipe__unit">${ingredient.unit}</span>\n              ${ingredient.description}\n            </div>\n          </li>`;
        }).join("")}\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${recipe.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `;
        recipeContainer.innerHTML = "";
        recipeContainer.insertAdjacentHTML("afterbegin", html);
    } catch (err) {
        alert(err.message);
    }
};
//
const renderList = function() {
    const html = `\n<li class="preview">\n<a class="preview__link preview__link--active" href="#5ed6604591c37cdc054bc886">\n<figure class="preview__fig">\n<img src="${_faviconPngDefault.default}" alt="Test" />\n</figure>\n  <div class="preview__data">\n    <h4 class="preview__title">Pasta with Tomato Cream ...</h4>\n      <p class="preview__publisher">The Pioneer Woman</p>\n        <div class="preview__user-generated">\n          <svg>\n              <use href="${_iconsSvgDefault.default}#icon-user"></use>\n          </svg>\n        </div>\n      </div>\n    </a>\n   </li>\n  `;
    results.innerHTML = "";
    results.insertAdjacentHTML("afterbegin", html);
};
renderList();
results.addEventListener("click", function(e) {
    console.log(e);
});
//prettier-ignore
[
    "load",
    "hashchange"
].forEach(function(event) {
    window.addEventListener(event, getrecipe);
});

},{"prelude-ls":"8Kjo9","regenerator-runtime":"cH8Iq","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../img/icons.svg":"iwCpK","url:../img/favicon.png":"1P5Tl"}],"8Kjo9":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var Func, List, Obj, Str, Num, id, isType, replicate, prelude, toString$ = {
}.toString;
Func = require('./Func.js');
List = require('./List.js');
Obj = require('./Obj.js');
Str = require('./Str.js');
Num = require('./Num.js');
id = function(x) {
    return x;
};
isType = curry$(function(type, x) {
    return toString$.call(x).slice(8, -1) === type;
});
replicate = curry$(function(n, x) {
    var i$, results$ = [];
    for(i$ = 0; i$ < n; ++i$)results$.push(x);
    return results$;
});
Str.empty = List.empty;
Str.slice = List.slice;
Str.take = List.take;
Str.drop = List.drop;
Str.splitAt = List.splitAt;
Str.takeWhile = List.takeWhile;
Str.dropWhile = List.dropWhile;
Str.span = List.span;
Str.breakStr = List.breakList;
prelude = {
    Func: Func,
    List: List,
    Obj: Obj,
    Str: Str,
    Num: Num,
    id: id,
    isType: isType,
    replicate: replicate
};
prelude.each = List.each;
prelude.map = List.map;
prelude.filter = List.filter;
prelude.compact = List.compact;
prelude.reject = List.reject;
prelude.partition = List.partition;
prelude.find = List.find;
prelude.head = List.head;
prelude.first = List.first;
prelude.tail = List.tail;
prelude.last = List.last;
prelude.initial = List.initial;
prelude.empty = List.empty;
prelude.reverse = List.reverse;
prelude.difference = List.difference;
prelude.intersection = List.intersection;
prelude.union = List.union;
prelude.countBy = List.countBy;
prelude.groupBy = List.groupBy;
prelude.fold = List.fold;
prelude.foldl = List.foldl;
prelude.fold1 = List.fold1;
prelude.foldl1 = List.foldl1;
prelude.foldr = List.foldr;
prelude.foldr1 = List.foldr1;
prelude.unfoldr = List.unfoldr;
prelude.andList = List.andList;
prelude.orList = List.orList;
prelude.any = List.any;
prelude.all = List.all;
prelude.unique = List.unique;
prelude.uniqueBy = List.uniqueBy;
prelude.sort = List.sort;
prelude.sortWith = List.sortWith;
prelude.sortBy = List.sortBy;
prelude.sum = List.sum;
prelude.product = List.product;
prelude.mean = List.mean;
prelude.average = List.average;
prelude.concat = List.concat;
prelude.concatMap = List.concatMap;
prelude.flatten = List.flatten;
prelude.maximum = List.maximum;
prelude.minimum = List.minimum;
prelude.maximumBy = List.maximumBy;
prelude.minimumBy = List.minimumBy;
prelude.scan = List.scan;
prelude.scanl = List.scanl;
prelude.scan1 = List.scan1;
prelude.scanl1 = List.scanl1;
prelude.scanr = List.scanr;
prelude.scanr1 = List.scanr1;
prelude.slice = List.slice;
prelude.take = List.take;
prelude.drop = List.drop;
prelude.splitAt = List.splitAt;
prelude.takeWhile = List.takeWhile;
prelude.dropWhile = List.dropWhile;
prelude.span = List.span;
prelude.breakList = List.breakList;
prelude.zip = List.zip;
prelude.zipWith = List.zipWith;
prelude.zipAll = List.zipAll;
prelude.zipAllWith = List.zipAllWith;
prelude.at = List.at;
prelude.elemIndex = List.elemIndex;
prelude.elemIndices = List.elemIndices;
prelude.findIndex = List.findIndex;
prelude.findIndices = List.findIndices;
prelude.apply = Func.apply;
prelude.curry = Func.curry;
prelude.flip = Func.flip;
prelude.fix = Func.fix;
prelude.over = Func.over;
prelude.split = Str.split;
prelude.join = Str.join;
prelude.lines = Str.lines;
prelude.unlines = Str.unlines;
prelude.words = Str.words;
prelude.unwords = Str.unwords;
prelude.chars = Str.chars;
prelude.unchars = Str.unchars;
prelude.repeat = Str.repeat;
prelude.capitalize = Str.capitalize;
prelude.camelize = Str.camelize;
prelude.dasherize = Str.dasherize;
prelude.values = Obj.values;
prelude.keys = Obj.keys;
prelude.pairsToObj = Obj.pairsToObj;
prelude.objToPairs = Obj.objToPairs;
prelude.listsToObj = Obj.listsToObj;
prelude.objToLists = Obj.objToLists;
prelude.max = Num.max;
prelude.min = Num.min;
prelude.negate = Num.negate;
prelude.abs = Num.abs;
prelude.signum = Num.signum;
prelude.quot = Num.quot;
prelude.rem = Num.rem;
prelude.div = Num.div;
prelude.mod = Num.mod;
prelude.recip = Num.recip;
prelude.pi = Num.pi;
prelude.tau = Num.tau;
prelude.exp = Num.exp;
prelude.sqrt = Num.sqrt;
prelude.ln = Num.ln;
prelude.pow = Num.pow;
prelude.sin = Num.sin;
prelude.tan = Num.tan;
prelude.cos = Num.cos;
prelude.acos = Num.acos;
prelude.asin = Num.asin;
prelude.atan = Num.atan;
prelude.atan2 = Num.atan2;
prelude.truncate = Num.truncate;
prelude.round = Num.round;
prelude.ceiling = Num.ceiling;
prelude.floor = Num.floor;
prelude.isItNaN = Num.isItNaN;
prelude.even = Num.even;
prelude.odd = Num.odd;
prelude.gcd = Num.gcd;
prelude.lcm = Num.lcm;
prelude.VERSION = '1.1.2';
module.exports = prelude;
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{"./Func.js":"61K0C","./List.js":"23dQQ","./Obj.js":"f6a43","./Str.js":"35X54","./Num.js":"kjFBz"}],"61K0C":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var apply, curry, flip, fix, over, memoize, slice$ = [].slice, toString$ = {
}.toString;
apply = curry$(function(f, list) {
    return f.apply(null, list);
});
curry = function(f) {
    return curry$(f);
};
flip = curry$(function(f, x, y) {
    return f(y, x);
});
fix = function(f) {
    return (function(g) {
        return function() {
            return f(g(g)).apply(null, arguments);
        };
    })(function(g) {
        return function() {
            return f(g(g)).apply(null, arguments);
        };
    });
};
over = curry$(function(f, g, x, y) {
    return f(g(x), g(y));
});
memoize = function(f) {
    var memo;
    memo = {
    };
    return function() {
        var args, key, arg;
        args = slice$.call(arguments);
        key = (function() {
            var i$, ref$, len$, results$ = [];
            for(i$ = 0, len$ = (ref$ = args).length; i$ < len$; ++i$){
                arg = ref$[i$];
                results$.push(arg + toString$.call(arg).slice(8, -1));
            }
            return results$;
        })().join('');
        return memo[key] = key in memo ? memo[key] : f.apply(null, args);
    };
};
module.exports = {
    curry: curry,
    flip: flip,
    fix: fix,
    apply: apply,
    over: over,
    memoize: memoize
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"23dQQ":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var each, map, compact, filter, reject, partition, find, head, first, tail, last, initial, empty, reverse, unique, uniqueBy, fold, foldl, fold1, foldl1, foldr, foldr1, unfoldr, concat, concatMap, flatten, difference, intersection, union, countBy, groupBy, andList, orList, any, all, sort, sortWith, sortBy, sum, product, mean, average, maximum, minimum, maximumBy, minimumBy, scan, scanl, scan1, scanl1, scanr, scanr1, slice, take, drop, splitAt, takeWhile, dropWhile, span, breakList, zip, zipWith, zipAll, zipAllWith, at, elemIndex, elemIndices, findIndex, findIndices, toString$ = {
}.toString, slice$ = [].slice;
each = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        f(x);
    }
    return xs;
});
map = curry$(function(f, xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        results$.push(f(x));
    }
    return results$;
});
compact = function(xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (x) results$.push(x);
    }
    return results$;
};
filter = curry$(function(f, xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (f(x)) results$.push(x);
    }
    return results$;
});
reject = curry$(function(f, xs) {
    var i$, len$, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!f(x)) results$.push(x);
    }
    return results$;
});
partition = curry$(function(f, xs) {
    var passed, failed, i$, len$, x;
    passed = [];
    failed = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        (f(x) ? passed : failed).push(x);
    }
    return [
        passed,
        failed
    ];
});
find = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (f(x)) return x;
    }
});
head = first = function(xs) {
    return xs[0];
};
tail = function(xs) {
    if (!xs.length) return;
    return xs.slice(1);
};
last = function(xs) {
    return xs[xs.length - 1];
};
initial = function(xs) {
    if (!xs.length) return;
    return xs.slice(0, -1);
};
empty = function(xs) {
    return !xs.length;
};
reverse = function(xs) {
    return xs.concat().reverse();
};
unique = function(xs) {
    var result, i$, len$, x;
    result = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!in$(x, result)) result.push(x);
    }
    return result;
};
uniqueBy = curry$(function(f, xs) {
    var seen, i$, len$, x, val, results$ = [];
    seen = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        val = f(x);
        if (in$(val, seen)) continue;
        seen.push(val);
        results$.push(x);
    }
    return results$;
});
fold = foldl = curry$(function(f, memo, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        memo = f(memo, x);
    }
    return memo;
});
fold1 = foldl1 = curry$(function(f, xs) {
    return fold(f, xs[0], xs.slice(1));
});
foldr = curry$(function(f, memo, xs) {
    var i$, x;
    for(i$ = xs.length - 1; i$ >= 0; --i$){
        x = xs[i$];
        memo = f(x, memo);
    }
    return memo;
});
foldr1 = curry$(function(f, xs) {
    return foldr(f, xs[xs.length - 1], xs.slice(0, -1));
});
unfoldr = curry$(function(f, b) {
    var result, x, that;
    result = [];
    x = b;
    while((that = f(x)) != null){
        result.push(that[0]);
        x = that[1];
    }
    return result;
});
concat = function(xss) {
    return [].concat.apply([], xss);
};
concatMap = curry$(function(f, xs) {
    var x;
    return [].concat.apply([], function() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$){
            x = ref$[i$];
            results$.push(f(x));
        }
        return results$;
    }());
});
flatten = function(xs) {
    var x;
    return [].concat.apply([], function() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$){
            x = ref$[i$];
            if (toString$.call(x).slice(8, -1) === 'Array') results$.push(flatten(x));
            else results$.push(x);
        }
        return results$;
    }());
};
difference = function(xs) {
    var yss, results, i$, len$, x, j$, len1$, ys;
    yss = slice$.call(arguments, 1);
    results = [];
    outer: for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        for(j$ = 0, len1$ = yss.length; j$ < len1$; ++j$){
            ys = yss[j$];
            if (in$(x, ys)) continue outer;
        }
        results.push(x);
    }
    return results;
};
intersection = function(xs) {
    var yss, results, i$, len$, x, j$, len1$, ys;
    yss = slice$.call(arguments, 1);
    results = [];
    outer: for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        for(j$ = 0, len1$ = yss.length; j$ < len1$; ++j$){
            ys = yss[j$];
            if (!in$(x, ys)) continue outer;
        }
        results.push(x);
    }
    return results;
};
union = function() {
    var xss, results, i$, len$, xs, j$, len1$, x;
    xss = slice$.call(arguments);
    results = [];
    for(i$ = 0, len$ = xss.length; i$ < len$; ++i$){
        xs = xss[i$];
        for(j$ = 0, len1$ = xs.length; j$ < len1$; ++j$){
            x = xs[j$];
            if (!in$(x, results)) results.push(x);
        }
    }
    return results;
};
countBy = curry$(function(f, xs) {
    var results, i$, len$, x, key;
    results = {
    };
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        key = f(x);
        if (key in results) results[key] += 1;
        else results[key] = 1;
    }
    return results;
});
groupBy = curry$(function(f, xs) {
    var results, i$, len$, x, key;
    results = {
    };
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        key = f(x);
        if (key in results) results[key].push(x);
        else results[key] = [
            x
        ];
    }
    return results;
});
andList = function(xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!x) return false;
    }
    return true;
};
orList = function(xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (x) return true;
    }
    return false;
};
any = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (f(x)) return true;
    }
    return false;
});
all = curry$(function(f, xs) {
    var i$, len$, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        if (!f(x)) return false;
    }
    return true;
});
sort = function(xs) {
    return xs.concat().sort(function(x, y) {
        if (x > y) return 1;
        else if (x < y) return -1;
        else return 0;
    });
};
sortWith = curry$(function(f, xs) {
    return xs.concat().sort(f);
});
sortBy = curry$(function(f, xs) {
    return xs.concat().sort(function(x, y) {
        if (f(x) > f(y)) return 1;
        else if (f(x) < f(y)) return -1;
        else return 0;
    });
});
sum = function(xs) {
    var result, i$, len$, x;
    result = 0;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        result += x;
    }
    return result;
};
product = function(xs) {
    var result, i$, len$, x;
    result = 1;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        result *= x;
    }
    return result;
};
mean = average = function(xs) {
    var sum1, i$, len$, x;
    sum1 = 0;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        x = xs[i$];
        sum1 += x;
    }
    return sum1 / xs.length;
};
maximum = function(xs) {
    var max, i$, ref$, len$, x;
    max = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (x > max) max = x;
    }
    return max;
};
minimum = function(xs) {
    var min, i$, ref$, len$, x;
    min = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (x < min) min = x;
    }
    return min;
};
maximumBy = curry$(function(f, xs) {
    var max, i$, ref$, len$, x;
    max = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (f(x) > f(max)) max = x;
    }
    return max;
});
minimumBy = curry$(function(f, xs) {
    var min, i$, ref$, len$, x;
    min = xs[0];
    for(i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$){
        x = ref$[i$];
        if (f(x) < f(min)) min = x;
    }
    return min;
});
scan = scanl = curry$(function(f, memo, xs) {
    var last1, x;
    last1 = memo;
    return [
        memo
    ].concat(function() {
        var i$, ref$, len$, results$ = [];
        for(i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$){
            x = ref$[i$];
            results$.push(last1 = f(last1, x));
        }
        return results$;
    }());
});
scan1 = scanl1 = curry$(function(f, xs) {
    if (!xs.length) return;
    return scan(f, xs[0], xs.slice(1));
});
scanr = curry$(function(f, memo, xs) {
    xs = xs.concat().reverse();
    return scan(f, memo, xs).reverse();
});
scanr1 = curry$(function(f, xs) {
    if (!xs.length) return;
    xs = xs.concat().reverse();
    return scan(f, xs[0], xs.slice(1)).reverse();
});
slice = curry$(function(x, y, xs) {
    return xs.slice(x, y);
});
take = curry$(function(n, xs) {
    if (n <= 0) return xs.slice(0, 0);
    else return xs.slice(0, n);
});
drop = curry$(function(n, xs) {
    if (n <= 0) return xs;
    else return xs.slice(n);
});
splitAt = curry$(function(n, xs) {
    return [
        take(n, xs),
        drop(n, xs)
    ];
});
takeWhile = curry$(function(p, xs) {
    var len, i;
    len = xs.length;
    if (!len) return xs;
    i = 0;
    while(i < len && p(xs[i]))i += 1;
    return xs.slice(0, i);
});
dropWhile = curry$(function(p, xs) {
    var len, i;
    len = xs.length;
    if (!len) return xs;
    i = 0;
    while(i < len && p(xs[i]))i += 1;
    return xs.slice(i);
});
span = curry$(function(p, xs) {
    return [
        takeWhile(p, xs),
        dropWhile(p, xs)
    ];
});
breakList = curry$(function(p, xs) {
    return span(compose$(p, not$), xs);
});
zip = curry$(function(xs, ys) {
    var result, len, i$, len$, i, x;
    result = [];
    len = ys.length;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (i === len) break;
        result.push([
            x,
            ys[i]
        ]);
    }
    return result;
});
zipWith = curry$(function(f, xs, ys) {
    var result, len, i$, len$, i, x;
    result = [];
    len = ys.length;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (i === len) break;
        result.push(f(x, ys[i]));
    }
    return result;
});
zipAll = function() {
    var xss, minLength, i$, len$, xs, ref$, i, lresult$, j$, results$ = [];
    xss = slice$.call(arguments);
    minLength = undefined;
    for(i$ = 0, len$ = xss.length; i$ < len$; ++i$){
        xs = xss[i$];
        minLength <= (ref$ = xs.length) || (minLength = ref$);
    }
    for(i$ = 0; i$ < minLength; ++i$){
        i = i$;
        lresult$ = [];
        for(j$ = 0, len$ = xss.length; j$ < len$; ++j$){
            xs = xss[j$];
            lresult$.push(xs[i]);
        }
        results$.push(lresult$);
    }
    return results$;
};
zipAllWith = function(f) {
    var xss, minLength, i$, len$, xs, ref$, i, results$ = [];
    xss = slice$.call(arguments, 1);
    minLength = undefined;
    for(i$ = 0, len$ = xss.length; i$ < len$; ++i$){
        xs = xss[i$];
        minLength <= (ref$ = xs.length) || (minLength = ref$);
    }
    for(i$ = 0; i$ < minLength; ++i$){
        i = i$;
        results$.push(f.apply(null, fn$()));
    }
    function fn$() {
        var i$1, ref$1, len$1, results$1 = [];
        for(i$1 = 0, len$1 = (ref$1 = xss).length; i$1 < len$1; ++i$1){
            xs = ref$1[i$1];
            results$1.push(xs[i]);
        }
        return results$1;
    }
    return results$;
};
at = curry$(function(n, xs) {
    if (n < 0) return xs[xs.length + n];
    else return xs[n];
});
elemIndex = curry$(function(el, xs) {
    var i$, len$, i, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (x === el) return i;
    }
});
elemIndices = curry$(function(el, xs) {
    var i$, len$, i, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (x === el) results$.push(i);
    }
    return results$;
});
findIndex = curry$(function(f, xs) {
    var i$, len$, i, x;
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (f(x)) return i;
    }
});
findIndices = curry$(function(f, xs) {
    var i$, len$, i, x, results$ = [];
    for(i$ = 0, len$ = xs.length; i$ < len$; ++i$){
        i = i$;
        x = xs[i$];
        if (f(x)) results$.push(i);
    }
    return results$;
});
module.exports = {
    each: each,
    map: map,
    filter: filter,
    compact: compact,
    reject: reject,
    partition: partition,
    find: find,
    head: head,
    first: first,
    tail: tail,
    last: last,
    initial: initial,
    empty: empty,
    reverse: reverse,
    difference: difference,
    intersection: intersection,
    union: union,
    countBy: countBy,
    groupBy: groupBy,
    fold: fold,
    fold1: fold1,
    foldl: foldl,
    foldl1: foldl1,
    foldr: foldr,
    foldr1: foldr1,
    unfoldr: unfoldr,
    andList: andList,
    orList: orList,
    any: any,
    all: all,
    unique: unique,
    uniqueBy: uniqueBy,
    sort: sort,
    sortWith: sortWith,
    sortBy: sortBy,
    sum: sum,
    product: product,
    mean: mean,
    average: average,
    concat: concat,
    concatMap: concatMap,
    flatten: flatten,
    maximum: maximum,
    minimum: minimum,
    maximumBy: maximumBy,
    minimumBy: minimumBy,
    scan: scan,
    scan1: scan1,
    scanl: scanl,
    scanl1: scanl1,
    scanr: scanr,
    scanr1: scanr1,
    slice: slice,
    take: take,
    drop: drop,
    splitAt: splitAt,
    takeWhile: takeWhile,
    dropWhile: dropWhile,
    span: span,
    breakList: breakList,
    zip: zip,
    zipWith: zipWith,
    zipAll: zipAll,
    zipAllWith: zipAllWith,
    at: at,
    elemIndex: elemIndex,
    elemIndices: elemIndices,
    findIndex: findIndex,
    findIndices: findIndices
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}
function in$(x, xs) {
    var i = -1, l = xs.length >>> 0;
    while((++i) < l)if (x === xs[i]) return true;
    return false;
}
function compose$() {
    var functions = arguments;
    return function() {
        var i, result;
        result = functions[0].apply(this, arguments);
        for(i = 1; i < functions.length; ++i)result = functions[i](result);
        return result;
    };
}
function not$(x) {
    return !x;
}

},{}],"f6a43":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var values, keys, pairsToObj, objToPairs, listsToObj, objToLists, empty, each, map, compact, filter, reject, partition, find;
values = function(object) {
    var i$, x, results$ = [];
    for(i$ in object){
        x = object[i$];
        results$.push(x);
    }
    return results$;
};
keys = function(object) {
    var x, results$ = [];
    for(x in object)results$.push(x);
    return results$;
};
pairsToObj = function(object) {
    var i$, len$, x, resultObj$ = {
    };
    for(i$ = 0, len$ = object.length; i$ < len$; ++i$){
        x = object[i$];
        resultObj$[x[0]] = x[1];
    }
    return resultObj$;
};
objToPairs = function(object) {
    var key, value, results$ = [];
    for(key in object){
        value = object[key];
        results$.push([
            key,
            value
        ]);
    }
    return results$;
};
listsToObj = curry$(function(keys1, values1) {
    var i$, len$, i, key, resultObj$ = {
    };
    for(i$ = 0, len$ = keys1.length; i$ < len$; ++i$){
        i = i$;
        key = keys1[i$];
        resultObj$[key] = values1[i];
    }
    return resultObj$;
});
objToLists = function(object) {
    var keys1, values1, key, value;
    keys1 = [];
    values1 = [];
    for(key in object){
        value = object[key];
        keys1.push(key);
        values1.push(value);
    }
    return [
        keys1,
        values1
    ];
};
empty = function(object) {
    var x;
    for(x in object)return false;
    return true;
};
each = curry$(function(f, object) {
    var i$, x;
    for(i$ in object){
        x = object[i$];
        f(x);
    }
    return object;
});
map = curry$(function(f, object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        resultObj$[k] = f(x);
    }
    return resultObj$;
});
compact = function(object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        if (x) resultObj$[k] = x;
    }
    return resultObj$;
};
filter = curry$(function(f, object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        if (f(x)) resultObj$[k] = x;
    }
    return resultObj$;
});
reject = curry$(function(f, object) {
    var k, x, resultObj$ = {
    };
    for(k in object){
        x = object[k];
        if (!f(x)) resultObj$[k] = x;
    }
    return resultObj$;
});
partition = curry$(function(f, object) {
    var passed, failed, k, x;
    passed = {
    };
    failed = {
    };
    for(k in object){
        x = object[k];
        (f(x) ? passed : failed)[k] = x;
    }
    return [
        passed,
        failed
    ];
});
find = curry$(function(f, object) {
    var i$, x;
    for(i$ in object){
        x = object[i$];
        if (f(x)) return x;
    }
});
module.exports = {
    values: values,
    keys: keys,
    pairsToObj: pairsToObj,
    objToPairs: objToPairs,
    listsToObj: listsToObj,
    objToLists: objToLists,
    empty: empty,
    each: each,
    map: map,
    filter: filter,
    compact: compact,
    reject: reject,
    partition: partition,
    find: find
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"35X54":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var split, join, lines, unlines, words, unwords, chars, unchars, reverse, repeat, capitalize, camelize, dasherize;
split = curry$(function(sep, str) {
    return str.split(sep);
});
join = curry$(function(sep, xs) {
    return xs.join(sep);
});
lines = function(str) {
    if (!str.length) return [];
    return str.split('\n');
};
unlines = function(it) {
    return it.join('\n');
};
words = function(str) {
    if (!str.length) return [];
    return str.split(/[ ]+/);
};
unwords = function(it) {
    return it.join(' ');
};
chars = function(it) {
    return it.split('');
};
unchars = function(it) {
    return it.join('');
};
reverse = function(str) {
    return str.split('').reverse().join('');
};
repeat = curry$(function(n, str) {
    var result, i$;
    result = '';
    for(i$ = 0; i$ < n; ++i$)result += str;
    return result;
});
capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
camelize = function(it) {
    return it.replace(/[-_]+(.)?/g, function(arg$, c) {
        return (c != null ? c : '').toUpperCase();
    });
};
dasherize = function(str) {
    return str.replace(/([^-A-Z])([A-Z]+)/g, function(arg$, lower, upper) {
        return lower + "-" + (upper.length > 1 ? upper : upper.toLowerCase());
    }).replace(/^([A-Z]+)/, function(arg$, upper) {
        if (upper.length > 1) return upper + "-";
        else return upper.toLowerCase();
    });
};
module.exports = {
    split: split,
    join: join,
    lines: lines,
    unlines: unlines,
    words: words,
    unwords: unwords,
    chars: chars,
    unchars: unchars,
    reverse: reverse,
    repeat: repeat,
    capitalize: capitalize,
    camelize: camelize,
    dasherize: dasherize
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"kjFBz":[function(require,module,exports) {
// Generated by LiveScript 1.4.0
var max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm;
max = curry$(function(x$, y$) {
    return x$ > y$ ? x$ : y$;
});
min = curry$(function(x$, y$) {
    return x$ < y$ ? x$ : y$;
});
negate = function(x) {
    return -x;
};
abs = Math.abs;
signum = function(x) {
    if (x < 0) return -1;
    else if (x > 0) return 1;
    else return 0;
};
quot = curry$(function(x, y) {
    return ~~(x / y);
});
rem = curry$(function(x$, y$) {
    return x$ % y$;
});
div = curry$(function(x, y) {
    return Math.floor(x / y);
});
mod = curry$(function(x$, y$) {
    var ref$;
    return (x$ % (ref$ = y$) + ref$) % ref$;
});
recip = function(it) {
    return 1 / it;
};
pi = Math.PI;
tau = pi * 2;
exp = Math.exp;
sqrt = Math.sqrt;
ln = Math.log;
pow = curry$(function(x$, y$) {
    return Math.pow(x$, y$);
});
sin = Math.sin;
tan = Math.tan;
cos = Math.cos;
asin = Math.asin;
acos = Math.acos;
atan = Math.atan;
atan2 = curry$(function(x, y) {
    return Math.atan2(x, y);
});
truncate = function(x) {
    return ~~x;
};
round = Math.round;
ceiling = Math.ceil;
floor = Math.floor;
isItNaN = function(x) {
    return x !== x;
};
even = function(x) {
    return x % 2 === 0;
};
odd = function(x) {
    return x % 2 !== 0;
};
gcd = curry$(function(x, y) {
    var z;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y !== 0){
        z = x % y;
        x = y;
        y = z;
    }
    return x;
});
lcm = curry$(function(x, y) {
    return Math.abs(Math.floor(x / gcd(x, y) * y));
});
module.exports = {
    max: max,
    min: min,
    negate: negate,
    abs: abs,
    signum: signum,
    quot: quot,
    rem: rem,
    div: div,
    mod: mod,
    recip: recip,
    pi: pi,
    tau: tau,
    exp: exp,
    sqrt: sqrt,
    ln: ln,
    pow: pow,
    sin: sin,
    tan: tan,
    cos: cos,
    acos: acos,
    asin: asin,
    atan: atan,
    atan2: atan2,
    truncate: truncate,
    round: round,
    ceiling: ceiling,
    floor: floor,
    isItNaN: isItNaN,
    even: even,
    odd: odd,
    gcd: gcd,
    lcm: lcm
};
function curry$(f, bound) {
    var context, _curry = function(args) {
        return f.length > 1 ? function() {
            var params = args ? args.concat() : [];
            context = bound ? context || this : this;
            return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
        } : f;
    };
    return _curry();
}

},{}],"cH8Iq":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value1) {
                    invoke("next", value1, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key1 = keys.pop();
                if (key1 in object) {
                    next.value = key1;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next1() {
                    while((++i) < iterable.length)if (hasOwn.call(iterable, i)) {
                        next1.value = iterable[i];
                        next1.done = false;
                        return next1;
                    }
                    next1.value = undefined;
                    next1.done = true;
                    return next1;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"JacNc":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"iwCpK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "icons.c097e590.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
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
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1P5Tl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "favicon.1fca8b0b.png";

},{"./helpers/bundle-url":"8YnfL"}]},["drOo7","jKMjS"], "jKMjS", "parcelRequire6d3a")

//# sourceMappingURL=index.436439df.js.map
