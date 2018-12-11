// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

function Footer() {
  return "\n<div id=\"footer\" class=\"container\">\n        <h4> Contact us! </h4>\n        <ul>\n        \n            <p id=\"middle\"><i class=\"fas fa-phone\"></i>618-531-0909</p>\n            <p id=\"middle\"><i class=\"fas fa-briefcase\"></i> 3467 Sesame Street Ave</p>\n            <p id=\"middle\"><i class=\"fas fa-envelope-open\"></i>summerrichards01@gmail.com</p>\n        </ul>\n    </div>\n";
}
},{}],"src/Content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Content;

function Content() {
  return "\n        <div id=\"content\">\n        <h2>Cell Phone Patient Medical Services</h2>\n        <div id=\"img\">\n            <img src=\"data:image/png;base64,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\"\n                alt=\"apple logo\" width=\"75\" />\n            <p>APPLE</p>\n            <img id=\"img-one\" src=\"https://i5.walmartimages.com/asr/f5608778-2a32-4b49-bbdc-10b7edb11e19_1.f583d9ee5b2fc78a0dd64a305adf3ef4.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF\"\n                alt=\"iPhone6\" width=\"205\">\n            \n            \n            \n        </div>\n        </div>\n";
}
},{}],"src/Navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

function Navigation() {
  return "\n<div id=navigation>\n<ul class=\"container\">\n    <li>\n        <a href=\"./book an appointment\">book an appointment</a>\n    </li>\n    <li>\n        <a href=\"./parts & tools\">parts & tools</a>\n    </li>\n    <li>\n        <a href=\"./about us\">about us</a>\n        <ul class=\"dropdown\">\n            <li>review</li>\n            <li>second</li>\n            <li>third</li>\n        </ul>\n    </li>\n</div>\n";
}
},{}],"src/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

function Header(state) {
  return "\n<div id=\"Summer\">\n        <h1> ".concat(state[state.active].title, "</h1>\n        <img src=\"https://biz.prlog.org/PhoneDoctor/logo.png\" alt=\"phone doctor logo\">\n        <p>Phone Dr. has been working hard to save the lives of patients who seeks medical attention. Phone\n            Doctor has years of experience operating on all types of phones. Phone Dr. travels globally to provide\n            Emergency\n            repair services. Is your phone sick?\n        </p>\n    </div>\n");
}
},{}],"src/Greeting.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = greet;
var userName = prompt('what is your name?');

function greet() {
  var title = document.querySelector('h1');

  if (!userName) {
    userName = prompt('what is your name foreal this time?');
    greet();
  } else {
    title.innerHTML += ", ".concat(userName);
  }
}
},{}],"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Footer = _interopRequireDefault(require("./src/Footer"));

var _Content = _interopRequireDefault(require("./src/Content"));

var _Navigation = _interopRequireDefault(require("./src/Navigation"));

var _Header = _interopRequireDefault(require("./src/Header"));

var _Greeting = _interopRequireDefault(require("./src/Greeting"));

var _navigo = _interopRequireDefault(require("navigo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _navigo.default(window.location.origin);
var State = {
  'active': 'home',
  'home': {
    'title': 'Phone doc'
  },
  'book an appointment': {
    'title': 'lol'
  },
  'parts & tools': {
    'title': 'stuff'
  },
  'about us': {
    'title': 'Contact Me'
  }
};
var root = document.querySelector('#root');

function handleNavigation(event) {
  event.preventDefault();
  State.active = event.target.textContent;
  render(State);
}

function render(state) {
  var links;
  root.innerHTML = "\n    ".concat((0, _Content.default)(state), "\n    ").concat((0, _Footer.default)(state), "\n    ").concat((0, _Navigation.default)(state), "\n    ").concat((0, _Header.default)(state), "\n    ");
  (0, _Greeting.default)();
  links = document.querySelectorAll('#navigation a');
  links[0].addEventListener('click', handleNavigation);
  links[1].addEventListener('click', handleNavigation);
  links[2].addEventListener('click', handleNavigation);
}

render(State);
router.on('/:page', console.log).on('/', function () {
  return console.log('i am on the home page!');
}).resolve();
},{"./src/Footer":"src/Footer.js","./src/Content":"src/Content.js","./src/Navigation":"src/Navigation.js","./src/Header":"src/Header.js","./src/Greeting":"src/Greeting.js","navigo":"node_modules/navigo/lib/navigo.min.js"}],"../../../.npm/_npx/9398/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50272" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.npm/_npx/9398/lib/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/myWebsite.e31bb0bc.map