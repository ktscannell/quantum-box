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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/stylesheets/main.css":
/*!*************************************!*\
  !*** ./assets/stylesheets/main.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./assets/stylesheets/reset.css":
/*!**************************************!*\
  !*** ./assets/stylesheets/reset.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/reset.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./assets/stylesheets/sidebar.css":
/*!****************************************!*\
  !*** ./assets/stylesheets/sidebar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/sidebar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/main.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/main.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  font-family: 'Roboto', sans-serif;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  background-color: lightgray;\n  margin-bottom: 10px;\n}\n\n.main-heading {\n  display: inline-block;\n  margin-left: 40px;\n}\n\n.title {\n  font-size: 30px;\n  \n  margin: 10px 0;\n}\n\n.subtitle {\n  font-size: 46px;\n  font-weight: 300;\n  margin: 0 0 20px 0;\n}\n\n.nav {\n  /* margin: 40px 0 0 0; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-item{\n  font-weight: 300;\n  font-size: 20px;\n  margin: 0 40px;\n}\n\n.link {\n  text-decoration: none;\n  color: black;\n}\n\n.link:hover {\n  color: gray;\n}\n\n.main {\n  display: flex;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/reset.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/reset.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* \nhtml5doctor.com Reset Stylesheet\nv1.6.1\nLast Updated: 2010-09-17\nAuthor: Richard Clark - http://richclarkdesign.com \nTwitter: @rich_clark\n*/\n\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nbody {\n    line-height:1;\n}\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section { \n    display:block;\n}\n\nnav ul {\n    list-style:none;\n}\n\nblockquote, q {\n    quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content:'';\n    content:none;\n}\n\na {\n    margin:0;\n    padding:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\n/* change colours to suit your needs */\nins {\n    background-color:#ff9;\n    color:#000;\n    text-decoration:none;\n}\n\n/* change colours to suit your needs */\nmark {\n    background-color:#ff9;\n    color:#000; \n    font-style:italic;\n    font-weight:bold;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n    border-bottom:1px dotted;\n    cursor:help;\n}\n\ntable {\n    border-collapse:collapse;\n    border-spacing:0;\n}\n\n/* change border colour to suit your needs */\nhr {\n    display:block;\n    height:1px;\n    border:0;   \n    border-top:1px solid #cccccc;\n    margin:1em 0;\n    padding:0;\n}\n\ninput, select {\n    vertical-align:middle;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/sidebar.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/stylesheets/sidebar.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  /* align-items: center; */\n\n  padding: 0 0 0 100px;\n}\n\n.input {\n  width: 40px;\n  margin: 0 20px 0 0;\n}\n\n.input-text {\n  font-size: 20px;\n  font-weight: 300;\n}\n\n.key {\n  height: 4px;\n  width: 50px;\n  margin-right: 20px;\n}\n\n.red {\n  background-color: red;\n}\n\n.blue {\n  background-color: blue;\n}\n\n.black {\n  background-color: black;\n}\n\n.key-container {\n  display: flex;\n  align-items: center;\n}\n\n.info {\n  line-height: 1em;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Graph = /*#__PURE__*/function () {
  function Graph(ctx) {
    _classCallCheck(this, Graph);

    this.ctx = ctx;
  }

  _createClass(Graph, [{
    key: "draw",
    value: function draw() {
      this.drawAxes(this.ctx);
    } // Returns the distance between ticks on the X axis:

  }, {
    key: "xTickDelta",
    value: function xTickDelta() {
      return 0.5;
    } // Returns the distance between ticks on the Y axis:

  }, {
    key: "yTickDelta",
    value: function yTickDelta() {
      return 1;
    } // DrawAxes draws the X ad Y axes, with tick marks.

  }, {
    key: "drawAxes",
    value: function drawAxes() {
      this.ctx.save();
      this.ctx.strokeStyle = 'gray';
      this.ctx.lineWidth = 2; // +Y axis

      this.ctx.beginPath();
      this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0));
      this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(_util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumY()));
      this.ctx.stroke(); // -Y axis

      this.ctx.beginPath();
      this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0));
      this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(_util__WEBPACK_IMPORTED_MODULE_0__["default"].minimumY()));
      this.ctx.stroke(); // Y axis tick marks

      var yDelta = this.yTickDelta();

      for (var i = 1; i * yDelta < _util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumY(); i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0) - 5, _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(i * yDelta));
        this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0) + 5, _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(i * yDelta));
        this.ctx.stroke();
      }

      for (var _i = 1; _i * yDelta > _util__WEBPACK_IMPORTED_MODULE_0__["default"].minimumY(); _i--) {
        this.ctx.beginPath();
        this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0) - 5, _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(_i * yDelta));
        this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0) + 5, _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(_i * yDelta));
        this.ctx.stroke();
      } // +X axis


      this.ctx.beginPath();
      this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0));
      this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(_util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumX()), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0));
      this.ctx.stroke(); // -X axis

      this.ctx.beginPath();
      this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(0), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0));
      this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(_util__WEBPACK_IMPORTED_MODULE_0__["default"].minimumX()), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0));
      this.ctx.stroke(); // X tick marks

      var xDelta = this.xTickDelta();

      for (var _i2 = 1; _i2 * xDelta < _util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumX(); _i2++) {
        this.ctx.beginPath();
        this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(_i2 * xDelta), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0) - 5);
        this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(_i2 * xDelta), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0) + 5);
        this.ctx.stroke();
      }

      for (var _i3 = 1; _i3 * xDelta > _util__WEBPACK_IMPORTED_MODULE_0__["default"].minimumX(); _i3--) {
        this.ctx.beginPath();
        this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(_i3 * xDelta), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0) - 5);
        this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(_i3 * xDelta), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(0) + 5);
        this.ctx.stroke();
      }

      this.ctx.restore();
    }
  }]);

  return Graph;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/stylesheets/reset.css */ "./assets/stylesheets/reset.css");
/* harmony import */ var _assets_stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/stylesheets/main.css */ "./assets/stylesheets/main.css");
/* harmony import */ var _assets_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_stylesheets_sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/stylesheets/sidebar.css */ "./assets/stylesheets/sidebar.css");
/* harmony import */ var _assets_stylesheets_sidebar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_sidebar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simulation */ "./src/simulation.js");
/* harmony import */ var _simulation_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simulation_view */ "./src/simulation_view.js");






document.addEventListener('DOMContentLoaded', function () {
  var canvasElement = document.getElementById('myCanvas');
  canvasElement.width = _util__WEBPACK_IMPORTED_MODULE_3__["default"].WIDTH;
  canvasElement.height = _util__WEBPACK_IMPORTED_MODULE_3__["default"].HEIGHT;
  var ctx = canvasElement.getContext('2d');
  new _simulation_view__WEBPACK_IMPORTED_MODULE_5__["default"](ctx).start();
});

/***/ }),

/***/ "./src/simulation.js":
/*!***************************!*\
  !*** ./src/simulation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simulation; });
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph */ "./src/graph.js");
/* harmony import */ var _wave_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wave_function */ "./src/wave_function.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // This class holds the wavefunction and graph and is in charge of drawing 
// everything that is stationary for each frame of the animation

var Simulation = /*#__PURE__*/function () {
  function Simulation(ctx) {
    _classCallCheck(this, Simulation);

    this.ctx = ctx;
    this.graph = new _graph__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.waveFunction = new _wave_function__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
  }

  _createClass(Simulation, [{
    key: "draw",
    value: function draw(time, n) {
      this.ctx.clearRect(0, 0, _util__WEBPACK_IMPORTED_MODULE_2__["default"].WIDTH, _util__WEBPACK_IMPORTED_MODULE_2__["default"].HEIGHT);
      this.graph.draw();
      this.waveFunction.draw(time, n);
    }
  }]);

  return Simulation;
}();



/***/ }),

/***/ "./src/simulation_view.js":
/*!********************************!*\
  !*** ./src/simulation_view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimulationView; });
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simulation */ "./src/simulation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // This class handles the animation and starting and stopping it

var SimulationView = /*#__PURE__*/function () {
  function SimulationView(ctx) {
    _classCallCheck(this, SimulationView);

    this.ctx = ctx;
    var simulation = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.simulation = simulation;
    this.n = 1;
    this.bindEventListeners();
  }

  _createClass(SimulationView, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      var inputN = document.getElementById('input-n');
      inputN.addEventListener('input', function (e) {
        _this.update('n', e.currentTarget.value);
      });
    }
  }, {
    key: "update",
    value: function update(field, value) {
      this[field] = value;
    }
  }, {
    key: "start",
    value: function start() {
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "animate",
    value: function animate(time) {
      this.simulation.draw(time, this.n);
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return SimulationView;
}();



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var util = {
  /*
  The origin (0,0) of the canvas is the upper left:
   (0,0)
    --------- +X
   |
   |
   |
   |
   +Y
   Positive x coordinates go to the right, and positive y coordinates go down.
   The origin in mathematics is the "center," and positive y goes *up*.
   We'll refer to the mathematics coordinate system as the "logical"
  coordinate system, and the coordinate system for the canvas as the
  "physical" coordinate system.
   The functions just below set up a mapping between the two coordinate
  systems.
   They're defined as functions, so that one wanted to, they could read
  ther values from a from instead of having them hard-coded.
   */
  HEIGHT: 800,
  WIDTH: 1200,
  // Returns the right boundary of the logical viewport:
  maximumX: function maximumX() {
    return 10;
  },
  // Returns the left boundary of the logical viewport:
  minimumX: function minimumX() {
    return 0;
  },
  // Returns the top boundary of the logical viewport:
  maximumY: function maximumY() {
    return this.maximumX() * this.HEIGHT / this.WIDTH;
  },
  // Returns the bottom boundary of the logical viewport:
  minimumY: function minimumY() {
    return -1 * this.maximumX() * this.HEIGHT / this.WIDTH;
  },
  xStep: function xStep() {
    return (this.maximumX() - this.minimumX()) / this.WIDTH;
  },
  // Returns the physical x-coordinate of a logical x-coordinate:
  mapX: function mapX(x) {
    return (x - this.minimumX()) / (this.maximumX() - this.minimumX()) * this.WIDTH;
  },
  // Returns the physical y-coordinate of a logical y-coordinate:
  mapY: function mapY(y) {
    return this.HEIGHT - (y - this.minimumY()) / (this.maximumY() - this.minimumY()) * (this.HEIGHT - 5);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./src/wave_function.js":
/*!******************************!*\
  !*** ./src/wave_function.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaveFunction; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var WaveFunction = /*#__PURE__*/function () {
  function WaveFunction(ctx) {
    _classCallCheck(this, WaveFunction);

    this.ctx = ctx;
  }

  _createClass(WaveFunction, [{
    key: "draw",
    value: function draw(time, n) {
      var t = time / 1000;
      this.renderRealWaveFunction(t, n);
      this.renderImaginaryWaveFunction(t, n);
      this.renderProbabilityDistribution(n);
    } // This part of the wave equation is the same for both the real and 
    // imaginary parts

  }, {
    key: "timeIndependentWaveEquation",
    value: function timeIndependentWaveEquation(n, x) {
      return _util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumY() * Math.sin(n * Math.PI * x / _util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumX());
    } // This returns the probability distribution based on the real and
    // imaginary parts of the wave function

  }, {
    key: "probabilityDistribution",
    value: function probabilityDistribution(n, x) {
      return Math.pow(_util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumY(), 1) * Math.pow(Math.sin(n * Math.PI * x / _util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumX()), 2);
    }
  }, {
    key: "renderProbabilityDistribution",
    value: function renderProbabilityDistribution(n) {
      var _this = this;

      this.renderMathFunction(function (x) {
        return _this.probabilityDistribution(n, x);
      }, 'black');
    } // given a value for time and energy level, render the real part of 
    // the wave function

  }, {
    key: "renderRealWaveFunction",
    value: function renderRealWaveFunction(t, n) {
      var _this2 = this;

      // this is the real part of the solution to the time dependent schrodinger's
      // equation for the particle in a box in 1-d, normalized to fit the graph
      var f = function f(x) {
        return Math.cos(t) * _this2.timeIndependentWaveEquation(n, x);
      };

      this.renderMathFunction(f, 'red');
    } // this is identical to above, but it renders the imaginary part of the func

  }, {
    key: "renderImaginaryWaveFunction",
    value: function renderImaginaryWaveFunction(t, n) {
      var _this3 = this;

      var f = function f(x) {
        return -1 * Math.sin(t) * _this3.timeIndependentWaveEquation(n, x);
      };

      this.renderMathFunction(f, 'blue');
    }
  }, {
    key: "renderMathFunction",
    value: function renderMathFunction(f, color) {
      // const t = time/1000;
      var first = true;
      this.ctx.beginPath();

      for (var x = _util__WEBPACK_IMPORTED_MODULE_0__["default"].minimumX(); x <= _util__WEBPACK_IMPORTED_MODULE_0__["default"].maximumX(); x += _util__WEBPACK_IMPORTED_MODULE_0__["default"].xStep()) {
        var y = f(x);

        if (first) {
          this.ctx.moveTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(x), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(y));
          first = false;
        } else {
          this.ctx.lineTo(_util__WEBPACK_IMPORTED_MODULE_0__["default"].mapX(x), _util__WEBPACK_IMPORTED_MODULE_0__["default"].mapY(y));
        }
      }

      this.ctx.lineWidth = 4;
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
    }
  }]);

  return WaveFunction;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map