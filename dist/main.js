/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\r\n    'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  width: 80%;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: grab;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB;oCACkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yCAAyC;EACzC,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\r\n    'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  width: 80%;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: grab;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/reorder-list.js":
/*!*****************************!*\
  !*** ./src/reorder-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reorderTodoList = (todoList, fromIndex, toIndex) => {
  const moveUp = fromIndex - toIndex > 0;
  if (moveUp) {
    for (let i = toIndex; i < fromIndex; i++) {
      todoList[i].index = todoList[i + 1].index;
    }
    todoList[fromIndex].index = toIndex;
  } else {
    for (let i = toIndex; i > fromIndex; i--) {
      todoList[i].index = todoList[i - 1].index;
    }
    todoList[fromIndex].index = toIndex;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reorderTodoList);


/***/ }),

/***/ "./src/task-manager.js":
/*!*****************************!*\
  !*** ./src/task-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


const addNewTask = ({ task, list }) => {
  const index = list.length;
  const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ task, index });
  list.push(todo);
};

const deleteTask = ({ index, list }) => {
  if (index >= list.length) return;
  for (let i = index + 1; i < list.length; i += 1) {
    list[i].index -= 1;
  }
  list.splice(index, 1);
};

const updateTask = ({ task, index, list }) => {
  if (index >= list.length) return;
  list[index].task = task;
};


/***/ }),

/***/ "./src/todo-maker.js":
/*!***************************!*\
  !*** ./src/todo-maker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-status.js */ "./src/update-status.js");
/* harmony import */ var _task_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-manager.js */ "./src/task-manager.js");



const TRASH_ICON = '<i class="fa-solid fa-trash"></i>';
const DRAG_ICON = '<i class="fa-solid fa-ellipsis-vertical"></i>';

const makeElement = (tag, className, todoIndex) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.dataset.index = todoIndex;
  return elem;
};

const makeTodoItem = (todo, todoList) => {
  // Creating elements for each todo
  const li = makeElement('li', 'todo-item', todo.index);
  const checkBox = makeElement('input', 'todo-check', todo.index);
  const taskInput = makeElement('input', 'task-input', todo.index);
  const removeBtn = makeElement('button', 'remove-btn', todo.index);
  const dragBtn = makeElement('button', 'drag-btn', todo.index);

  checkBox.type = 'checkbox';
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', (e) => {
    (0,_update_status_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      index: parseInt(e.target.dataset.index, 10),
      completed: e.target.checked,
      list: todoList,
    });
  });
  taskInput.value = todo.task + todo.index;
  if (todo.completed) taskInput.style.textDecoration = 'line-through';
  taskInput.addEventListener('change', (e) => {
    const task = e.target.value.trim();
    if (task.length === 0) return;
    (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.updateTask)({
      task: e.target.value,
      index: e.target.dataset.index,
      list: todoList,
    });
  });
  removeBtn.innerHTML = TRASH_ICON;
  dragBtn.innerHTML = DRAG_ICON;
  dragBtn.addEventListener('mousedown', () => (li.draggable = true));
  li.appendChild(checkBox);
  li.appendChild(taskInput);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeTodoItem);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor({ task, index, completed = false }) {
    this.task = task;
    this.completed = completed;
    this.index = index;
  }
}


/***/ }),

/***/ "./src/update-status.js":
/*!******************************!*\
  !*** ./src/update-status.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateTodoStatus = ({ index, completed, list }) => {
  if (index >= list.length) return;
  list[index].completed = completed;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTodoStatus);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _task_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-manager.js */ "./src/task-manager.js");
/* harmony import */ var _todo_maker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-maker.js */ "./src/todo-maker.js");
/* harmony import */ var _reorder_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reorder-list.js */ "./src/reorder-list.js");





const todoContainer = document.querySelector('#todo-container');
const newTaskInput = document.querySelector('#new-task-input');
const clearBtn = document.querySelector('#clear-btn');
const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const LOCAL_KEY = 'microtasks-data';

const getLocalData = () => {
  let todoList = [];
  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    todoList = JSON.parse(localData);
  }
  return todoList;
};

const updateTodoList = (todoList) => {
  // update display and storage
  todoContainer.textContent = '';
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((todo) => {
    const item = (0,_todo_maker_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo, todoList);
    todoContainer.appendChild(item);
  });
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
};

/* -------Main Program-----------*/
const todoList = getLocalData();
updateTodoList(todoList);

document.addEventListener('click', (e) => {
  // handling remove buttons
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn === null) return;
  const idToRemove = removeBtn.dataset.index;
  (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({ index: parseInt(idToRemove, 10), list: todoList });
  updateTodoList(todoList);
});

document.addEventListener('keyup', (e) => {
  // adding new task on Enter
  if (e.key === 'Enter') {
    const newTask = newTaskInput.value.trim();
    newTaskInput.value = '';
    if (newTask.length === 0) return;
    (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)({ task: newTask, list: todoList });
    updateTodoList(todoList);
  }
});

document.addEventListener('change', () => updateTodoList(todoList));

clearBtn.addEventListener('click', () => {
  const completedItems = todoList.filter((item) => item.completed);
  completedItems.forEach((todo) =>
    (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({ index: todo.index, list: todoList })
  );
  updateTodoList(todoList);
});

date.textContent = new Date().toLocaleDateString('en-US');
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString('en-US');
}, 1000);

// * Drag and Drop Feature
let dragItem;
let dropOn;

document.addEventListener('dragstart', (e) => {
  dragItem = e.target.closest('.todo-item');
});

todoContainer.addEventListener('dragover', (e) => e.preventDefault());

document.addEventListener('dragenter', (e) => {
  dropOn = e.target.closest('.todo-item');
});

document.addEventListener('dragend', () => {
  if (dragItem === null) return;
  dragItem.draggable = false;
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  if (dragItem === null || dropOn === null) return;
  (0,_reorder_list_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    todoList,
    parseInt(dragItem.dataset.index, 10),
    parseInt(dropOn.dataset.index, 10)
  );
  updateTodoList(todoList);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxnQ0FBZ0MsbUhBQW1ILEtBQUssWUFBWSx1QkFBdUIsS0FBSyxlQUFlLG1CQUFtQixvQ0FBb0MsOENBQThDLHdCQUF3QixLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyw0QkFBNEIseUJBQXlCLHFCQUFxQixLQUFLLGdCQUFnQix1QkFBdUIsbUJBQW1CLEtBQUssY0FBYyx1QkFBdUIsS0FBSyxnQkFBZ0IseUJBQXlCLG1CQUFtQix1QkFBdUIsb0JBQW9CLEtBQUssaUJBQWlCLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssZ0JBQWdCLHVEQUF1RCx3QkFBd0IscUJBQXFCLDRCQUE0QixnQ0FBZ0MsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixxREFBcUQsd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxnQkFBZ0IsZ0NBQWdDLG1DQUFtQyxzQ0FBc0Msc0JBQXNCLEtBQUssZUFBZSxzQkFBc0IsZ0NBQWdDLGtDQUFrQyxxQ0FBcUMsZ0NBQWdDLGtCQUFrQixLQUFLLHVCQUF1Qiw2QkFBNkIsaUJBQWlCLG1CQUFtQiw2QkFBNkIsa0ZBQWtGLEtBQUsseUJBQXlCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGdEQUFnRCxxQkFBcUIsb0JBQW9CLEtBQUssc0JBQXNCLHFCQUFxQix3QkFBd0IsMkJBQTJCLEtBQUssNEJBQTRCLDJDQUEyQyxLQUFLLDBCQUEwQixrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyx5QkFBeUIsOEJBQThCLGlCQUFpQixLQUFLLGtCQUFrQix5QkFBeUIsd0JBQXdCLHFCQUFxQixzQkFBc0Isb0JBQW9CLEtBQUssa0JBQWtCLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLHlCQUF5QixLQUFLLGdEQUFnRCxxQkFBcUIsS0FBSyx5QkFBeUIsb0JBQW9CLDZCQUE2QixLQUFLLDRCQUE0QixvQkFBb0IsZ0JBQWdCLDJCQUEyQixpQ0FBaUMsS0FBSyxxQkFBcUIsY0FBYyxpQ0FBaUMsS0FBSyxnQ0FBZ0Msd0JBQXdCLEtBQUsscUJBQXFCLG9CQUFvQixxQkFBcUIsMkJBQTJCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLDJCQUEyQiw0QkFBNEIsS0FBSyx5Q0FBeUMsZ0NBQWdDLEtBQUsscURBQXFELHFCQUFxQixLQUFLLG1EQUFtRCxvQkFBb0IsS0FBSyxvQkFBb0Isa0JBQWtCLG9CQUFvQix5QkFBeUIsd0JBQXdCLG9DQUFvQyxnQ0FBZ0MsdUJBQXVCLHFCQUFxQixzQkFBc0IsMkJBQTJCLEtBQUssMEJBQTBCLDJDQUEyQyxrQkFBa0IsS0FBSyxXQUFXLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsNEJBQTRCLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxnQ0FBZ0MsbUhBQW1ILEtBQUssWUFBWSx1QkFBdUIsS0FBSyxlQUFlLG1CQUFtQixvQ0FBb0MsOENBQThDLHdCQUF3QixLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyw0QkFBNEIseUJBQXlCLHFCQUFxQixLQUFLLGdCQUFnQix1QkFBdUIsbUJBQW1CLEtBQUssY0FBYyx1QkFBdUIsS0FBSyxnQkFBZ0IseUJBQXlCLG1CQUFtQix1QkFBdUIsb0JBQW9CLEtBQUssaUJBQWlCLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssZ0JBQWdCLHVEQUF1RCx3QkFBd0IscUJBQXFCLDRCQUE0QixnQ0FBZ0MsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixxREFBcUQsd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxnQkFBZ0IsZ0NBQWdDLG1DQUFtQyxzQ0FBc0Msc0JBQXNCLEtBQUssZUFBZSxzQkFBc0IsZ0NBQWdDLGtDQUFrQyxxQ0FBcUMsZ0NBQWdDLGtCQUFrQixLQUFLLHVCQUF1Qiw2QkFBNkIsaUJBQWlCLG1CQUFtQiw2QkFBNkIsa0ZBQWtGLEtBQUsseUJBQXlCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGdEQUFnRCxxQkFBcUIsb0JBQW9CLEtBQUssc0JBQXNCLHFCQUFxQix3QkFBd0IsMkJBQTJCLEtBQUssNEJBQTRCLDJDQUEyQyxLQUFLLDBCQUEwQixrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyx5QkFBeUIsOEJBQThCLGlCQUFpQixLQUFLLGtCQUFrQix5QkFBeUIsd0JBQXdCLHFCQUFxQixzQkFBc0Isb0JBQW9CLEtBQUssa0JBQWtCLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLHlCQUF5QixLQUFLLGdEQUFnRCxxQkFBcUIsS0FBSyx5QkFBeUIsb0JBQW9CLDZCQUE2QixLQUFLLDRCQUE0QixvQkFBb0IsZ0JBQWdCLDJCQUEyQixpQ0FBaUMsS0FBSyxxQkFBcUIsY0FBYyxpQ0FBaUMsS0FBSyxnQ0FBZ0Msd0JBQXdCLEtBQUsscUJBQXFCLG9CQUFvQixxQkFBcUIsMkJBQTJCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLDJCQUEyQiw0QkFBNEIsS0FBSyx5Q0FBeUMsZ0NBQWdDLEtBQUsscURBQXFELHFCQUFxQixLQUFLLG1EQUFtRCxvQkFBb0IsS0FBSyxvQkFBb0Isa0JBQWtCLG9CQUFvQix5QkFBeUIsd0JBQXdCLG9DQUFvQyxnQ0FBZ0MsdUJBQXVCLHFCQUFxQixzQkFBc0IsMkJBQTJCLEtBQUssMEJBQTBCLDJDQUEyQyxrQkFBa0IsS0FBSyx1QkFBdUI7QUFDditTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRjtBQUM3QjtBQUNPLHNCQUFzQixZQUFZO0FBQ3pDO0FBQ0EsbUJBQW1CLGdEQUFJLEdBQUcsYUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDTyxzQkFBc0IsYUFBYTtBQUMxQztBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHNCQUFzQixtQkFBbUI7QUFDaEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ca0Q7QUFDSDtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRGI7QUFDZixnQkFBZ0IsZ0NBQWdDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7OztVQ0xoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3NDO0FBQ2hCO0FBQ0s7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBWTtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFVLEdBQUcsaURBQWlEO0FBQ2hFO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVSxHQUFHLCtCQUErQjtBQUNoRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVUsR0FBRyxtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Jlb3JkZXItbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby1tYWtlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VwZGF0ZS1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjk4ZmY7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LWZhbWlseTogR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzhhMmJlMjtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwIDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDE1cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0biB7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgcm90YXRlWig5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZy1ib3gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogIzc0NzQ3NDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5rZXktdGFnIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAubXNnLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnLWJ0biB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5yZW1vdmUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5kcmFnLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNWVtIDAgMCAjNGExZTllO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QjtvQ0FDa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjk4ZmY7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LWZhbWlseTogR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzhhMmJlMjtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwIDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDE1cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0biB7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgcm90YXRlWig5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZy1ib3gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogIzc0NzQ3NDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5rZXktdGFnIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAubXNnLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnLWJ0biB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5yZW1vdmUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5kcmFnLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNWVtIDAgMCAjNGExZTllO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJlb3JkZXJUb2RvTGlzdCA9ICh0b2RvTGlzdCwgZnJvbUluZGV4LCB0b0luZGV4KSA9PiB7XHJcbiAgY29uc3QgbW92ZVVwID0gZnJvbUluZGV4IC0gdG9JbmRleCA+IDA7XHJcbiAgaWYgKG1vdmVVcCkge1xyXG4gICAgZm9yIChsZXQgaSA9IHRvSW5kZXg7IGkgPCBmcm9tSW5kZXg7IGkrKykge1xyXG4gICAgICB0b2RvTGlzdFtpXS5pbmRleCA9IHRvZG9MaXN0W2kgKyAxXS5pbmRleDtcclxuICAgIH1cclxuICAgIHRvZG9MaXN0W2Zyb21JbmRleF0uaW5kZXggPSB0b0luZGV4O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpID0gdG9JbmRleDsgaSA+IGZyb21JbmRleDsgaS0tKSB7XHJcbiAgICAgIHRvZG9MaXN0W2ldLmluZGV4ID0gdG9kb0xpc3RbaSAtIDFdLmluZGV4O1xyXG4gICAgfVxyXG4gICAgdG9kb0xpc3RbZnJvbUluZGV4XS5pbmRleCA9IHRvSW5kZXg7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVvcmRlclRvZG9MaXN0O1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5ld1Rhc2sgPSAoeyB0YXNrLCBsaXN0IH0pID0+IHtcclxuICBjb25zdCBpbmRleCA9IGxpc3QubGVuZ3RoO1xyXG4gIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh7IHRhc2ssIGluZGV4IH0pO1xyXG4gIGxpc3QucHVzaCh0b2RvKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gKHsgaW5kZXgsIGxpc3QgfSkgPT4ge1xyXG4gIGlmIChpbmRleCA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuO1xyXG4gIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBsaXN0W2ldLmluZGV4IC09IDE7XHJcbiAgfVxyXG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gKHsgdGFzaywgaW5kZXgsIGxpc3QgfSkgPT4ge1xyXG4gIGlmIChpbmRleCA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuO1xyXG4gIGxpc3RbaW5kZXhdLnRhc2sgPSB0YXNrO1xyXG59O1xyXG4iLCJpbXBvcnQgdXBkYXRlVG9kb1N0YXR1cyBmcm9tICcuL3VwZGF0ZS1zdGF0dXMuanMnO1xyXG5pbXBvcnQgeyB1cGRhdGVUYXNrIH0gZnJvbSAnLi90YXNrLW1hbmFnZXIuanMnO1xyXG5cclxuY29uc3QgVFJBU0hfSUNPTiA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPic7XHJcbmNvbnN0IERSQUdfSUNPTiA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPic7XHJcblxyXG5jb25zdCBtYWtlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSwgdG9kb0luZGV4KSA9PiB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtLmRhdGFzZXQuaW5kZXggPSB0b2RvSW5kZXg7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn07XHJcblxyXG5jb25zdCBtYWtlVG9kb0l0ZW0gPSAodG9kbywgdG9kb0xpc3QpID0+IHtcclxuICAvLyBDcmVhdGluZyBlbGVtZW50cyBmb3IgZWFjaCB0b2RvXHJcbiAgY29uc3QgbGkgPSBtYWtlRWxlbWVudCgnbGknLCAndG9kby1pdGVtJywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBtYWtlRWxlbWVudCgnaW5wdXQnLCAndG9kby1jaGVjaycsIHRvZG8uaW5kZXgpO1xyXG4gIGNvbnN0IHRhc2tJbnB1dCA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICd0YXNrLWlucHV0JywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgcmVtb3ZlQnRuID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdyZW1vdmUtYnRuJywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgZHJhZ0J0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnZHJhZy1idG4nLCB0b2RvLmluZGV4KTtcclxuXHJcbiAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgY2hlY2tCb3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGVkO1xyXG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICB1cGRhdGVUb2RvU3RhdHVzKHtcclxuICAgICAgaW5kZXg6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEwKSxcclxuICAgICAgY29tcGxldGVkOiBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICBsaXN0OiB0b2RvTGlzdCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHRhc2tJbnB1dC52YWx1ZSA9IHRvZG8udGFzayArIHRvZG8uaW5kZXg7XHJcbiAgaWYgKHRvZG8uY29tcGxldGVkKSB0YXNrSW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodGFzay5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIHVwZGF0ZVRhc2soe1xyXG4gICAgICB0YXNrOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgaW5kZXg6IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgsXHJcbiAgICAgIGxpc3Q6IHRvZG9MaXN0LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmVtb3ZlQnRuLmlubmVySFRNTCA9IFRSQVNIX0lDT047XHJcbiAgZHJhZ0J0bi5pbm5lckhUTUwgPSBEUkFHX0lDT047XHJcbiAgZHJhZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiAobGkuZHJhZ2dhYmxlID0gdHJ1ZSkpO1xyXG4gIGxpLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICBsaS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xyXG4gIGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcbiAgbGkuYXBwZW5kQ2hpbGQoZHJhZ0J0bik7XHJcbiAgcmV0dXJuIGxpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVRvZG9JdGVtO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IoeyB0YXNrLCBpbmRleCwgY29tcGxldGVkID0gZmFsc2UgfSkge1xuICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCJjb25zdCB1cGRhdGVUb2RvU3RhdHVzID0gKHsgaW5kZXgsIGNvbXBsZXRlZCwgbGlzdCB9KSA9PiB7XHJcbiAgaWYgKGluZGV4ID49IGxpc3QubGVuZ3RoKSByZXR1cm47XHJcbiAgbGlzdFtpbmRleF0uY29tcGxldGVkID0gY29tcGxldGVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVG9kb1N0YXR1cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGFkZE5ld1Rhc2ssIGRlbGV0ZVRhc2sgfSBmcm9tICcuL3Rhc2stbWFuYWdlci5qcyc7XHJcbmltcG9ydCBtYWtlVG9kb0l0ZW0gZnJvbSAnLi90b2RvLW1ha2VyLmpzJztcclxuaW1wb3J0IHJlb3JkZXJUb2RvTGlzdCBmcm9tICcuL3Jlb3JkZXItbGlzdC5qcyc7XHJcblxyXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tY29udGFpbmVyJyk7XHJcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1pbnB1dCcpO1xyXG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1idG4nKTtcclxuY29uc3QgY2xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvY2snKTtcclxuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XHJcblxyXG5jb25zdCBMT0NBTF9LRVkgPSAnbWljcm90YXNrcy1kYXRhJztcclxuXHJcbmNvbnN0IGdldExvY2FsRGF0YSA9ICgpID0+IHtcclxuICBsZXQgdG9kb0xpc3QgPSBbXTtcclxuICBjb25zdCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9LRVkpO1xyXG4gIGlmIChsb2NhbERhdGEgIT09IG51bGwpIHtcclxuICAgIHRvZG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbERhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gdG9kb0xpc3Q7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVUb2RvTGlzdCA9ICh0b2RvTGlzdCkgPT4ge1xyXG4gIC8vIHVwZGF0ZSBkaXNwbGF5IGFuZCBzdG9yYWdlXHJcbiAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIHRvZG9MaXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gbWFrZVRvZG9JdGVtKHRvZG8sIHRvZG9MaXN0KTtcclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgfSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfS0VZLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xyXG59O1xyXG5cclxuLyogLS0tLS0tLU1haW4gUHJvZ3JhbS0tLS0tLS0tLS0tKi9cclxuY29uc3QgdG9kb0xpc3QgPSBnZXRMb2NhbERhdGEoKTtcclxudXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIC8vIGhhbmRsaW5nIHJlbW92ZSBidXR0b25zXHJcbiAgY29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS1idG4nKTtcclxuICBpZiAocmVtb3ZlQnRuID09PSBudWxsKSByZXR1cm47XHJcbiAgY29uc3QgaWRUb1JlbW92ZSA9IHJlbW92ZUJ0bi5kYXRhc2V0LmluZGV4O1xyXG4gIGRlbGV0ZVRhc2soeyBpbmRleDogcGFyc2VJbnQoaWRUb1JlbW92ZSwgMTApLCBsaXN0OiB0b2RvTGlzdCB9KTtcclxuICB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gIC8vIGFkZGluZyBuZXcgdGFzayBvbiBFbnRlclxyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ld1Rhc2tJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcclxuICAgIGlmIChuZXdUYXNrLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgYWRkTmV3VGFzayh7IHRhc2s6IG5ld1Rhc2ssIGxpc3Q6IHRvZG9MaXN0IH0pO1xyXG4gICAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCkpO1xyXG5cclxuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgY29tcGxldGVkSXRlbXMgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkKTtcclxuICBjb21wbGV0ZWRJdGVtcy5mb3JFYWNoKCh0b2RvKSA9PlxyXG4gICAgZGVsZXRlVGFzayh7IGluZGV4OiB0b2RvLmluZGV4LCBsaXN0OiB0b2RvTGlzdCB9KVxyXG4gICk7XHJcbiAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xyXG59KTtcclxuXHJcbmRhdGUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnKTtcclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGNsb2NrLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJyk7XHJcbn0sIDEwMDApO1xyXG5cclxuLy8gKiBEcmFnIGFuZCBEcm9wIEZlYXR1cmVcclxubGV0IGRyYWdJdGVtO1xyXG5sZXQgZHJvcE9uO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICBkcmFnSXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKTtcclxufSk7XHJcblxyXG50b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZSkgPT4ge1xyXG4gIGRyb3BPbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gIGlmIChkcmFnSXRlbSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gIGRyYWdJdGVtLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoZHJhZ0l0ZW0gPT09IG51bGwgfHwgZHJvcE9uID09PSBudWxsKSByZXR1cm47XHJcbiAgcmVvcmRlclRvZG9MaXN0KFxyXG4gICAgdG9kb0xpc3QsXHJcbiAgICBwYXJzZUludChkcmFnSXRlbS5kYXRhc2V0LmluZGV4LCAxMCksXHJcbiAgICBwYXJzZUludChkcm9wT24uZGF0YXNldC5pbmRleCwgMTApXHJcbiAgKTtcclxuICB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=