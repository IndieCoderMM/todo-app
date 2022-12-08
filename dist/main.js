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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family:\r\n    'Trebuchet MS',\r\n    'Lucida Sans Unicode',\r\n    'Lucida Grande',\r\n    'Lucida Sans',\r\n    Arial,\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow:\r\n    rgba(0, 0, 0, 0.3) 0 19px 38px,\r\n    rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  width: 80%;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: move;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB;;;;;;cAMY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB;;mCAEiC;AACnC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yCAAyC;EACzC,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family:\r\n    'Trebuchet MS',\r\n    'Lucida Sans Unicode',\r\n    'Lucida Grande',\r\n    'Lucida Sans',\r\n    Arial,\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow:\r\n    rgba(0, 0, 0, 0.3) 0 19px 38px,\r\n    rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  width: 80%;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: move;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ makeTodoItem)
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

function makeTodoItem(todo, todoList) {
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
  taskInput.value = todo.task;
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

  li.appendChild(checkBox);
  li.appendChild(taskInput);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
}


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
/* harmony export */   "default": () => (/* binding */ updateTodoStatus)
/* harmony export */ });
function updateTodoStatus({ index, completed, list }) {
  if (index >= list.length) return;
  list[index].completed = completed;
}


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
  completedItems.forEach((todo) => (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({ index: todo.index, list: todoList }));
  updateTodoList(todoList);
});

date.textContent = new Date().toLocaleDateString('en-US');
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString('en-US');
}, 1000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0M7QUFDaEI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFZO0FBQzdCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFVLEdBQUcsaURBQWlEO0FBQ2hFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVLEdBQUcsK0JBQStCO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsNERBQVUsR0FBRyxtQ0FBbUM7QUFDbkY7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby1tYWtlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VwZGF0ZS1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjk4ZmY7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgICdMdWNpZGEgU2FucyBVbmljb2RlJyxcXHJcXG4gICAgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMnLFxcclxcbiAgICBBcmlhbCxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LWZhbWlseTogR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzhhMmJlMjtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDE5cHggMzhweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDE1cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0biB7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgcm90YXRlWig5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZy1ib3gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogIzc0NzQ3NDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5rZXktdGFnIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAubXNnLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnLWJ0biB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5yZW1vdmUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5kcmFnLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNWVtIDAgMCAjNGExZTllO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qjs7Ozs7O2NBTVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qjs7bUNBRWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjk4ZmY7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgICdMdWNpZGEgU2FucyBVbmljb2RlJyxcXHJcXG4gICAgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMnLFxcclxcbiAgICBBcmlhbCxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LWZhbWlseTogR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzhhMmJlMjtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDE5cHggMzhweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDE1cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0biB7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgcm90YXRlWig5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZy1ib3gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogIzc0NzQ3NDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5rZXktdGFnIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAubXNnLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnLWJ0biB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5yZW1vdmUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIC5kcmFnLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNWVtIDAgMCAjNGExZTllO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5cbmV4cG9ydCBjb25zdCBhZGROZXdUYXNrID0gKHsgdGFzaywgbGlzdCB9KSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5sZW5ndGg7XG4gIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh7IHRhc2ssIGluZGV4IH0pO1xuICBsaXN0LnB1c2godG9kbyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9ICh7IGluZGV4LCBsaXN0IH0pID0+IHtcbiAgaWYgKGluZGV4ID49IGxpc3QubGVuZ3RoKSByZXR1cm47XG4gIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbGlzdFtpXS5pbmRleCAtPSAxO1xuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gKHsgdGFzaywgaW5kZXgsIGxpc3QgfSkgPT4ge1xuICBpZiAoaW5kZXggPj0gbGlzdC5sZW5ndGgpIHJldHVybjtcbiAgbGlzdFtpbmRleF0udGFzayA9IHRhc2s7XG59O1xuIiwiaW1wb3J0IHVwZGF0ZVRvZG9TdGF0dXMgZnJvbSAnLi91cGRhdGUtc3RhdHVzLmpzJztcbmltcG9ydCB7IHVwZGF0ZVRhc2sgfSBmcm9tICcuL3Rhc2stbWFuYWdlci5qcyc7XG5cbmNvbnN0IFRSQVNIX0lDT04gPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT4nO1xuY29uc3QgRFJBR19JQ09OID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+JztcblxuY29uc3QgbWFrZUVsZW1lbnQgPSAodGFnLCBjbGFzc05hbWUsIHRvZG9JbmRleCkgPT4ge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbS5kYXRhc2V0LmluZGV4ID0gdG9kb0luZGV4O1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VUb2RvSXRlbSh0b2RvLCB0b2RvTGlzdCkge1xuICAvLyBDcmVhdGluZyBlbGVtZW50cyBmb3IgZWFjaCB0b2RvXG4gIGNvbnN0IGxpID0gbWFrZUVsZW1lbnQoJ2xpJywgJ3RvZG8taXRlbScsIHRvZG8uaW5kZXgpO1xuICBjb25zdCBjaGVja0JveCA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICd0b2RvLWNoZWNrJywgdG9kby5pbmRleCk7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICd0YXNrLWlucHV0JywgdG9kby5pbmRleCk7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAncmVtb3ZlLWJ0bicsIHRvZG8uaW5kZXgpO1xuICBjb25zdCBkcmFnQnRuID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdkcmFnLWJ0bicsIHRvZG8uaW5kZXgpO1xuXG4gIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBjaGVja0JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgdXBkYXRlVG9kb1N0YXR1cyh7XG4gICAgICBpbmRleDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCwgMTApLFxuICAgICAgY29tcGxldGVkOiBlLnRhcmdldC5jaGVja2VkLFxuICAgICAgbGlzdDogdG9kb0xpc3QsXG4gICAgfSk7XG4gIH0pO1xuICB0YXNrSW5wdXQudmFsdWUgPSB0b2RvLnRhc2s7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCkgdGFza0lucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHRhc2subGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdXBkYXRlVGFzayh7XG4gICAgICB0YXNrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIGluZGV4OiBlLnRhcmdldC5kYXRhc2V0LmluZGV4LFxuICAgICAgbGlzdDogdG9kb0xpc3QsXG4gICAgfSk7XG4gIH0pO1xuICByZW1vdmVCdG4uaW5uZXJIVE1MID0gVFJBU0hfSUNPTjtcbiAgZHJhZ0J0bi5pbm5lckhUTUwgPSBEUkFHX0lDT047XG5cbiAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBsaS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICBsaS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICBsaS5hcHBlbmRDaGlsZChkcmFnQnRuKTtcbiAgcmV0dXJuIGxpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHsgdGFzaywgaW5kZXgsIGNvbXBsZXRlZCA9IGZhbHNlIH0pIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVG9kb1N0YXR1cyh7IGluZGV4LCBjb21wbGV0ZWQsIGxpc3QgfSkge1xuICBpZiAoaW5kZXggPj0gbGlzdC5sZW5ndGgpIHJldHVybjtcbiAgbGlzdFtpbmRleF0uY29tcGxldGVkID0gY29tcGxldGVkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBhZGROZXdUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSAnLi90YXNrLW1hbmFnZXIuanMnO1xuaW1wb3J0IG1ha2VUb2RvSXRlbSBmcm9tICcuL3RvZG8tbWFrZXIuanMnO1xuXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tY29udGFpbmVyJyk7XG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2staW5wdXQnKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWJ0bicpO1xuY29uc3QgY2xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvY2snKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuXG5jb25zdCBMT0NBTF9LRVkgPSAnbWljcm90YXNrcy1kYXRhJztcblxuY29uc3QgZ2V0TG9jYWxEYXRhID0gKCkgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfS0VZKTtcbiAgaWYgKGxvY2FsRGF0YSAhPT0gbnVsbCkge1xuICAgIHRvZG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbERhdGEpO1xuICB9XG4gIHJldHVybiB0b2RvTGlzdDtcbn07XG5cbmNvbnN0IHVwZGF0ZVRvZG9MaXN0ID0gKHRvZG9MaXN0KSA9PiB7XG4gIC8vIHVwZGF0ZSBkaXNwbGF5IGFuZCBzdG9yYWdlXG4gIHRvZG9Db250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgdG9kb0xpc3Quc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IG1ha2VUb2RvSXRlbSh0b2RvLCB0b2RvTGlzdCk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX0tFWSwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbn07XG5cbi8qIC0tLS0tLS1NYWluIFByb2dyYW0tLS0tLS0tLS0tLSovXG5jb25zdCB0b2RvTGlzdCA9IGdldExvY2FsRGF0YSgpO1xudXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vIGhhbmRsaW5nIHJlbW92ZSBidXR0b25zXG4gIGNvbnN0IHJlbW92ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUtYnRuJyk7XG4gIGlmIChyZW1vdmVCdG4gPT09IG51bGwpIHJldHVybjtcbiAgY29uc3QgaWRUb1JlbW92ZSA9IHJlbW92ZUJ0bi5kYXRhc2V0LmluZGV4O1xuICBkZWxldGVUYXNrKHsgaW5kZXg6IHBhcnNlSW50KGlkVG9SZW1vdmUsIDEwKSwgbGlzdDogdG9kb0xpc3QgfSk7XG4gIHVwZGF0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gIC8vIGFkZGluZyBuZXcgdGFzayBvbiBFbnRlclxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3VGFza0lucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICBpZiAobmV3VGFzay5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBhZGROZXdUYXNrKHsgdGFzazogbmV3VGFzaywgbGlzdDogdG9kb0xpc3QgfSk7XG4gICAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpKTtcblxuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGNvbXBsZXRlZEl0ZW1zID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCk7XG4gIGNvbXBsZXRlZEl0ZW1zLmZvckVhY2goKHRvZG8pID0+IGRlbGV0ZVRhc2soeyBpbmRleDogdG9kby5pbmRleCwgbGlzdDogdG9kb0xpc3QgfSkpO1xuICB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCk7XG59KTtcblxuZGF0ZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycpO1xuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBjbG9jay50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycpO1xufSwgMTAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=