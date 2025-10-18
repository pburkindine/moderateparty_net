window["Flexi"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/Utils/Templating.js":
/*!*********************************************************************************************!*\
  !*** /builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/Utils/Templating.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* jslint evil: true, supernew:true */\n\n!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n    'use strict';\n\n    var Templating = new (function () {\n        var cache = {};\n        this.init = function () {\n            this.cache = {};\n        };\n        /**\n         * Render the markup associated to a template and data\n         * @param {String} str id of the template or complete string to be transformed\n         * @param {Object} data The data object\n         * @returns HTML Markup\n         */\n        this.render = function (str, data) {\n            // Figure out if we're getting a template, or if we need to\n            // load the template - and be sure to cache the result.\n            var fn = !/\\W/.test(str)\n                ? (cache[str] =\n                      cache[str] ||\n                      this.render(\n                          document.getElementById(str) && document.getElementById(str).innerHTML,\n                      ))\n                : // Generate a reusable function that will serve as a template\n                  // generator (and which will be cached).\n                  new Function(\n                      'obj',\n                      'var p=[],print=function(){p.push.apply(p,arguments);};' +\n                          // Introduce the data as local variables using with(){}\n                          \"with(obj){p.push('\" +\n                          // Convert the template into pure JavaScript\n                          str\n                              .replace(/[\\r\\t\\n]/g, ' ')\n                              .split('<%')\n                              .join('\\t')\n                              .replace(/((^|%>)[^\\t]*)'/g, '$1\\r')\n                              .replace(/\\t=(.*?)%>/g, \"',$1,'\")\n                              .split('\\t')\n                              .join(\"');\")\n                              .split('%>')\n                              .join(\"p.push('\")\n                              .split('\\r')\n                              .join(\"\\\\'\")\n                              .replace(/data-href/gm, 'href') +\n                          \"');}return p.join('');\",\n                  );\n\n            // Provide some basic currying to the user\n            return data ? fn(data) : fn;\n        };\n    })();\n\n    return Templating;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://Flexi//builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/Utils/Templating.js?");

/***/ }),

/***/ "../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/Widgets/Filters.js":
/*!********************************************************************************************!*\
  !*** /builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/Widgets/Filters.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n    'use strict';\n\n    var Filters = function () {\n        this.filters = document.querySelectorAll('[name=\"widget-filter\"]');\n        this.targets = [].slice.call(this.filters).reduce(function (acc, current) {\n            var target = current.getAttribute('data-target');\n            var widget = document.querySelector('.' + target);\n            acc[target] = {\n                items: [].slice.call(widget.querySelectorAll('[data-title]')),\n            };\n            return acc;\n        }, {});\n        this.init();\n    };\n\n    Filters.prototype = {\n        init: function () {\n            for (var i = 0; i < this.filters.length; i++) {\n                this.addEvent(this.filters[i]);\n            }\n        },\n        addEvent: function (filter) {\n            var self = this;\n            filter.addEventListener('keyup', function () {\n                self.filter(this.getAttribute('data-target'), this.value);\n            });\n        },\n        matchInput: function (value, item) {\n            return new RegExp(value, 'i').test(item.getAttribute('data-title'));\n        },\n        filter: function (target, value) {\n            if (!this.targets[target]) {\n                return;\n            }\n            var self = this;\n            var items = this.targets[target].items;\n            if (value) {\n                var hide = items.filter(function (item) {\n                    return !self.matchInput(value, item);\n                });\n                var show = items.filter(function (item) {\n                    return self.matchInput(value, item);\n                });\n                show.forEach(function (item) {\n                    item.classList.remove('hide');\n                });\n                hide.forEach(function (item) {\n                    item.classList.add('hide');\n                });\n            } else {\n                items.forEach(function (item) {\n                    item.classList.remove('hide');\n                });\n            }\n        },\n    };\n\n    return Filters;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://Flexi//builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/Widgets/Filters.js?");

/***/ }),

/***/ "../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/index.js":
/*!**********************************************************************************!*\
  !*** /builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! sortable */ \"../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/vendors/sortable.min.js\"), __webpack_require__(/*! Flexi/Utils/Templating */ \"../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/Utils/Templating.js\"), __webpack_require__(/*! Flexi/Widgets/Filters */ \"../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/Widgets/Filters.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (\n    sortable,\n    Templating,\n    Filters,\n    Carouzelize,\n) {\n    return {\n        sortable: sortable,\n        Templating: Templating,\n        Filters: Filters,\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://Flexi//builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/index.js?");

/***/ }),

/***/ "../../../../src/FTE/FlexiBundle/Resources/public/js/Flexi/vendors/sortable.min.js":
/*!*************************************************************************************************!*\
  !*** /builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/vendors/sortable.min.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;(function () {\n    var a, b, c, d, e, f, g;\n    (a = 'table[data-sortable]'),\n        (d = /^-?[£$¤]?[\\d,.]+%?$/),\n        (g = /^\\s+|\\s+$/g),\n        (c = ['click']),\n        (f = 'ontouchstart' in document.documentElement),\n        f && c.push('touchstart'),\n        (b = function (a, b, c) {\n            return null != a.addEventListener\n                ? a.addEventListener(b, c, !1)\n                : a.attachEvent('on' + b, c);\n        }),\n        (e = {\n            init: function (b) {\n                var c, d, f, g, h;\n                for (\n                    null == b && (b = {}),\n                        null == b.selector && (b.selector = a),\n                        d = document.querySelectorAll(b.selector),\n                        h = [],\n                        f = 0,\n                        g = d.length;\n                    g > f;\n                    f++\n                )\n                    (c = d[f]), h.push(e.initTable(c));\n                return h;\n            },\n            initTable: function (a) {\n                var b, c, d, f, g, h;\n                if (\n                    1 === (null != (h = a.tHead) ? h.rows.length : void 0) &&\n                    'true' !== a.getAttribute('data-sortable-initialized')\n                ) {\n                    for (\n                        a.setAttribute('data-sortable-initialized', 'true'),\n                            d = a.querySelectorAll('th'),\n                            b = f = 0,\n                            g = d.length;\n                        g > f;\n                        b = ++f\n                    )\n                        (c = d[b]),\n                            'false' !== c.getAttribute('data-sortable') &&\n                                e.setupClickableTH(a, c, b);\n                    return a;\n                }\n            },\n            setupClickableTH: function (a, d, f) {\n                var g, h, i, j, k, l;\n                for (\n                    i = e.getColumnType(a, f),\n                        h = function (b) {\n                            var c,\n                                g,\n                                h,\n                                j,\n                                k,\n                                l,\n                                m,\n                                n,\n                                o,\n                                p,\n                                q,\n                                r,\n                                s,\n                                t,\n                                u,\n                                v,\n                                w,\n                                x,\n                                y,\n                                z,\n                                A,\n                                B,\n                                C,\n                                D;\n                            if (b.handled === !0) return !1;\n                            for (\n                                b.handled = !0,\n                                    m = 'true' === this.getAttribute('data-sorted'),\n                                    n = this.getAttribute('data-sorted-direction'),\n                                    h = m\n                                        ? 'ascending' === n\n                                            ? 'descending'\n                                            : 'ascending'\n                                        : i.defaultSortDirection,\n                                    p = this.parentNode.querySelectorAll('th'),\n                                    s = 0,\n                                    w = p.length;\n                                w > s;\n                                s++\n                            )\n                                (d = p[s]),\n                                    d.setAttribute('data-sorted', 'false'),\n                                    d.removeAttribute('data-sorted-direction');\n                            if (\n                                (this.setAttribute('data-sorted', 'true'),\n                                this.setAttribute('data-sorted-direction', h),\n                                (o = a.tBodies[0]),\n                                (l = []),\n                                m)\n                            ) {\n                                for (D = o.rows, v = 0, z = D.length; z > v; v++)\n                                    (g = D[v]), l.push(g);\n                                for (l.reverse(), B = 0, A = l.length; A > B; B++)\n                                    (k = l[B]), o.appendChild(k);\n                            } else {\n                                for (\n                                    r =\n                                        null != i.compare\n                                            ? i.compare\n                                            : function (a, b) {\n                                                  return b - a;\n                                              },\n                                        c = function (a, b) {\n                                            return a[0] === b[0]\n                                                ? a[2] - b[2]\n                                                : i.reverse\n                                                  ? r(b[0], a[0])\n                                                  : r(a[0], b[0]);\n                                        },\n                                        C = o.rows,\n                                        j = t = 0,\n                                        x = C.length;\n                                    x > t;\n                                    j = ++t\n                                )\n                                    (k = C[j]),\n                                        (q = e.getNodeValue(k.cells[f])),\n                                        null != i.comparator && (q = i.comparator(q)),\n                                        l.push([q, k, j]);\n                                for (l.sort(c), u = 0, y = l.length; y > u; u++)\n                                    (k = l[u]), o.appendChild(k[1]);\n                            }\n                            return 'function' == typeof window.CustomEvent &&\n                                'function' == typeof a.dispatchEvent\n                                ? a.dispatchEvent(\n                                      new CustomEvent('Sortable.sorted', {\n                                          bubbles: !0,\n                                      }),\n                                  )\n                                : void 0;\n                        },\n                        l = [],\n                        j = 0,\n                        k = c.length;\n                    k > j;\n                    j++\n                )\n                    (g = c[j]), l.push(b(d, g, h));\n                return l;\n            },\n            getColumnType: function (a, b) {\n                var c, d, f, g, h, i, j, k, l, m, n;\n                if (\n                    ((d =\n                        null != (l = a.querySelectorAll('th')[b])\n                            ? l.getAttribute('data-sortable-type')\n                            : void 0),\n                    null != d)\n                )\n                    return e.typesObject[d];\n                for (m = a.tBodies[0].rows, h = 0, j = m.length; j > h; h++)\n                    for (\n                        c = m[h], f = e.getNodeValue(c.cells[b]), n = e.types, i = 0, k = n.length;\n                        k > i;\n                        i++\n                    )\n                        if (((g = n[i]), g.match(f))) return g;\n                return e.typesObject.alpha;\n            },\n            getNodeValue: function (a) {\n                var b;\n                return a\n                    ? ((b = a.getAttribute('data-value')),\n                      null !== b\n                          ? b\n                          : 'undefined' != typeof a.innerText\n                            ? a.innerText.replace(g, '')\n                            : a.textContent.replace(g, ''))\n                    : '';\n            },\n            setupTypes: function (a) {\n                var b, c, d, f;\n                for (e.types = a, e.typesObject = {}, f = [], c = 0, d = a.length; d > c; c++)\n                    (b = a[c]), f.push((e.typesObject[b.name] = b));\n                return f;\n            },\n        }),\n        e.setupTypes([\n            {\n                name: 'numeric',\n                defaultSortDirection: 'descending',\n                match: function (a) {\n                    return a.match(d);\n                },\n                comparator: function (a) {\n                    return parseFloat(a.replace(/[^0-9.-]/g, ''), 10) || 0;\n                },\n            },\n            {\n                name: 'date',\n                defaultSortDirection: 'ascending',\n                reverse: !0,\n                match: function (a) {\n                    return !isNaN(Date.parse(a));\n                },\n                comparator: function (a) {\n                    return Date.parse(a) || 0;\n                },\n            },\n            {\n                name: 'alpha',\n                defaultSortDirection: 'ascending',\n                match: function () {\n                    return !0;\n                },\n                compare: function (a, b) {\n                    return a.localeCompare(b);\n                },\n            },\n        ]),\n        setTimeout(e.init, 0),\n         true\n            ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n                  return e;\n              }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n            : undefined;\n}).call(this);\n\n\n//# sourceURL=webpack://Flexi//builds/vanilla/fte/src/FTE/FlexiBundle/Resources/public/js/Flexi/vendors/sortable.min.js?");

/***/ })

/******/ });