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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family:\r\n    'Trebuchet MS',\r\n    'Lucida Sans Unicode',\r\n    'Lucida Grande',\r\n    'Lucida Sans',\r\n    Arial,\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  flex: 1;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: grab;\r\n  color: #ccc;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .navbar {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #todo-section {\r\n    width: 100%;\r\n    margin: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  footer {\r\n    color: #4a1e9e;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB;;;;;;cAMY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yCAAyC;EACzC,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family:\r\n    'Trebuchet MS',\r\n    'Lucida Sans Unicode',\r\n    'Lucida Grande',\r\n    'Lucida Sans',\r\n    Arial,\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  flex: 1;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: grab;\r\n  color: #ccc;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .navbar {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #todo-section {\r\n    width: 100%;\r\n    margin: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  footer {\r\n    color: #4a1e9e;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    for (let i = toIndex; i < fromIndex; i += 1) {
      todoList[i].index = todoList[i + 1].index;
    }
    todoList[fromIndex].index = toIndex;
  } else {
    for (let i = toIndex; i > fromIndex; i -= 1) {
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
const DRAG_ICON = '<i class="fa-solid fa-grip-vertical"></i>';

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
  dragBtn.addEventListener('mousedown', () => {
    li.draggable = true;
  });
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
  completedItems.forEach((todo) => (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({ index: todo.index, list: todoList }));
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
    parseInt(dropOn.dataset.index, 10),
  );
  updateTodoList(todoList);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxnQ0FBZ0Msc0pBQXNKLEtBQUssWUFBWSx1QkFBdUIsS0FBSyxlQUFlLG1CQUFtQixvQ0FBb0MsOENBQThDLHdCQUF3QixLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyw0QkFBNEIseUJBQXlCLHFCQUFxQixLQUFLLGdCQUFnQix1QkFBdUIsbUJBQW1CLEtBQUssY0FBYyx1QkFBdUIsS0FBSyxnQkFBZ0IseUJBQXlCLG1CQUFtQix1QkFBdUIsb0JBQW9CLEtBQUssaUJBQWlCLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssZ0JBQWdCLHVEQUF1RCx3QkFBd0IscUJBQXFCLDRCQUE0QixnQ0FBZ0MsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixxREFBcUQsd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxnQkFBZ0IsZ0NBQWdDLG1DQUFtQyxzQ0FBc0Msc0JBQXNCLEtBQUssZUFBZSxzQkFBc0IsZ0NBQWdDLGtDQUFrQyxxQ0FBcUMsZ0NBQWdDLGtCQUFrQixLQUFLLHVCQUF1Qiw2QkFBNkIsaUJBQWlCLG1CQUFtQiw2QkFBNkIsa0ZBQWtGLEtBQUsseUJBQXlCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGdEQUFnRCxxQkFBcUIsb0JBQW9CLEtBQUssc0JBQXNCLHFCQUFxQix3QkFBd0IsMkJBQTJCLEtBQUssNEJBQTRCLDJDQUEyQyxLQUFLLDBCQUEwQixrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyx5QkFBeUIsOEJBQThCLGNBQWMsS0FBSyxrQkFBa0IseUJBQXlCLHdCQUF3QixxQkFBcUIsc0JBQXNCLG9CQUFvQixLQUFLLGtCQUFrQixnQ0FBZ0MseUJBQXlCLGdDQUFnQyx5QkFBeUIsS0FBSyxnREFBZ0QscUJBQXFCLEtBQUsseUJBQXlCLG9CQUFvQiw2QkFBNkIsS0FBSyw0QkFBNEIsb0JBQW9CLGdCQUFnQiwyQkFBMkIsaUNBQWlDLEtBQUsscUJBQXFCLGNBQWMsaUNBQWlDLEtBQUssZ0NBQWdDLHdCQUF3QixLQUFLLHFCQUFxQixvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLLG1CQUFtQixtQkFBbUIsa0JBQWtCLEtBQUssMkJBQTJCLDRCQUE0QixLQUFLLHlDQUF5QyxnQ0FBZ0MsS0FBSyxxREFBcUQscUJBQXFCLEtBQUssbURBQW1ELG9CQUFvQixLQUFLLG9CQUFvQixrQkFBa0Isb0JBQW9CLHlCQUF5Qix3QkFBd0Isb0NBQW9DLGdDQUFnQyx1QkFBdUIscUJBQXFCLHNCQUFzQiwyQkFBMkIsS0FBSywwQkFBMEIsMkNBQTJDLGtCQUFrQixLQUFLLG1DQUFtQyxZQUFZLCtCQUErQixPQUFPLG1CQUFtQiwrQkFBK0IsT0FBTyx5QkFBeUIsb0JBQW9CLGtCQUFrQix5QkFBeUIsT0FBTyxrQkFBa0IsdUJBQXVCLE9BQU8sS0FBSyxXQUFXLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLDRCQUE0Qiw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMsZ0NBQWdDLHNKQUFzSixLQUFLLFlBQVksdUJBQXVCLEtBQUssZUFBZSxtQkFBbUIsb0NBQW9DLDhDQUE4Qyx3QkFBd0IsS0FBSyxxQkFBcUIsb0JBQW9CLEtBQUssNEJBQTRCLHlCQUF5QixxQkFBcUIsS0FBSyxnQkFBZ0IsdUJBQXVCLG1CQUFtQixLQUFLLGNBQWMsdUJBQXVCLEtBQUssZ0JBQWdCLHlCQUF5QixtQkFBbUIsdUJBQXVCLG9CQUFvQixLQUFLLGlCQUFpQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGdCQUFnQix1REFBdUQsd0JBQXdCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIscURBQXFELHdCQUF3Qix1QkFBdUIscUJBQXFCLEtBQUssZ0JBQWdCLGdDQUFnQyxtQ0FBbUMsc0NBQXNDLHNCQUFzQixLQUFLLGVBQWUsc0JBQXNCLGdDQUFnQyxrQ0FBa0MscUNBQXFDLGdDQUFnQyxrQkFBa0IsS0FBSyx1QkFBdUIsNkJBQTZCLGlCQUFpQixtQkFBbUIsNkJBQTZCLGtGQUFrRixLQUFLLHlCQUF5QixvQkFBb0IscUNBQXFDLDBCQUEwQixnREFBZ0QscUJBQXFCLG9CQUFvQixLQUFLLHNCQUFzQixxQkFBcUIsd0JBQXdCLDJCQUEyQixLQUFLLDRCQUE0QiwyQ0FBMkMsS0FBSywwQkFBMEIsa0JBQWtCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUsseUJBQXlCLDhCQUE4QixjQUFjLEtBQUssa0JBQWtCLHlCQUF5Qix3QkFBd0IscUJBQXFCLHNCQUFzQixvQkFBb0IsS0FBSyxrQkFBa0IsZ0NBQWdDLHlCQUF5QixnQ0FBZ0MseUJBQXlCLEtBQUssZ0RBQWdELHFCQUFxQixLQUFLLHlCQUF5QixvQkFBb0IsNkJBQTZCLEtBQUssNEJBQTRCLG9CQUFvQixnQkFBZ0IsMkJBQTJCLGlDQUFpQyxLQUFLLHFCQUFxQixjQUFjLGlDQUFpQyxLQUFLLGdDQUFnQyx3QkFBd0IsS0FBSyxxQkFBcUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsS0FBSyxtQkFBbUIsbUJBQW1CLGtCQUFrQixLQUFLLDJCQUEyQiw0QkFBNEIsS0FBSyx5Q0FBeUMsZ0NBQWdDLEtBQUsscURBQXFELHFCQUFxQixLQUFLLG1EQUFtRCxvQkFBb0IsS0FBSyxvQkFBb0Isa0JBQWtCLG9CQUFvQix5QkFBeUIsd0JBQXdCLG9DQUFvQyxnQ0FBZ0MsdUJBQXVCLHFCQUFxQixzQkFBc0IsMkJBQTJCLEtBQUssMEJBQTBCLDJDQUEyQyxrQkFBa0IsS0FBSyxtQ0FBbUMsWUFBWSwrQkFBK0IsT0FBTyxtQkFBbUIsK0JBQStCLE9BQU8seUJBQXlCLG9CQUFvQixrQkFBa0IseUJBQXlCLE9BQU8sa0JBQWtCLHVCQUF1QixPQUFPLEtBQUssdUJBQXVCO0FBQ3Z4VTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBCQUEwQixlQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRjs7QUFFdEIsc0JBQXNCLFlBQVk7QUFDekM7QUFDQSxtQkFBbUIsZ0RBQUksR0FBRyxhQUFhO0FBQ3ZDO0FBQ0E7O0FBRU8sc0JBQXNCLGFBQWE7QUFDMUM7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVPLHNCQUFzQixtQkFBbUI7QUFDaEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ca0Q7QUFDSDs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckRiO0FBQ2YsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7OztVQ0xoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3NDO0FBQ2hCO0FBQ0s7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFZO0FBQzdCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFVLEdBQUcsaURBQWlEO0FBQ2hFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVLEdBQUcsK0JBQStCO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsNERBQVUsR0FBRyxtQ0FBbUM7QUFDbkY7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Jlb3JkZXItbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby1tYWtlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VwZGF0ZS1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjk4ZmY7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgICdMdWNpZGEgU2FucyBVbmljb2RlJyxcXHJcXG4gICAgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMnLFxcclxcbiAgICBBcmlhbCxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LWZhbWlseTogR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzhhMmJlMjtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwIDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDE1cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0biB7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgcm90YXRlWig5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZy1ib3gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogIzc0NzQ3NDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5rZXktdGFnIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAubXNnLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnLWJ0biB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNiZmY7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaTpmb2N1cy13aXRoaW4gLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaTpmb2N1cy13aXRoaW4gLmRyYWctYnRuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzc0NzQ3NDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICM0YTFlOWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIC01ZW0gMCAwICM0YTFlOWU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3RvZG8tc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBjb2xvcjogIzRhMWU5ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCOzs7Ozs7Y0FNWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1Q0FBdUM7RUFDdkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsT0FBTztFQUNQLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjk4ZmY7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgICdMdWNpZGEgU2FucyBVbmljb2RlJyxcXHJcXG4gICAgJ0x1Y2lkYSBHcmFuZGUnLFxcclxcbiAgICAnTHVjaWRhIFNhbnMnLFxcclxcbiAgICBBcmlhbCxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LWZhbWlseTogR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjZGRjYmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aW1lLWJsb2NrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNGExZTllO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2sge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzhhMmJlMjtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMmJlMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwIDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwIDE1cHggMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0biB7XFxyXFxuICBjb2xvcjogIzhhMmJlMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgcm90YXRlWig5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10YXNrLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZy1ib3gge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogIzc0NzQ3NDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5rZXktdGFnIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM3NDc0NzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAubXNnLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnLWJ0biB7XFxyXFxuICBjdXJzb3I6IGdyYWI7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgbGk6Zm9jdXMtd2l0aGluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNiZmY7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaTpmb2N1cy13aXRoaW4gLnJlbW92ZS1idG4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaTpmb2N1cy13aXRoaW4gLmRyYWctYnRuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzc0NzQ3NDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICM0YTFlOWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIC01ZW0gMCAwICM0YTFlOWU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3RvZG8tc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBjb2xvcjogIzRhMWU5ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmVvcmRlclRvZG9MaXN0ID0gKHRvZG9MaXN0LCBmcm9tSW5kZXgsIHRvSW5kZXgpID0+IHtcbiAgY29uc3QgbW92ZVVwID0gZnJvbUluZGV4IC0gdG9JbmRleCA+IDA7XG4gIGlmIChtb3ZlVXApIHtcbiAgICBmb3IgKGxldCBpID0gdG9JbmRleDsgaSA8IGZyb21JbmRleDsgaSArPSAxKSB7XG4gICAgICB0b2RvTGlzdFtpXS5pbmRleCA9IHRvZG9MaXN0W2kgKyAxXS5pbmRleDtcbiAgICB9XG4gICAgdG9kb0xpc3RbZnJvbUluZGV4XS5pbmRleCA9IHRvSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IHRvSW5kZXg7IGkgPiBmcm9tSW5kZXg7IGkgLT0gMSkge1xuICAgICAgdG9kb0xpc3RbaV0uaW5kZXggPSB0b2RvTGlzdFtpIC0gMV0uaW5kZXg7XG4gICAgfVxuICAgIHRvZG9MaXN0W2Zyb21JbmRleF0uaW5kZXggPSB0b0luZGV4O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW9yZGVyVG9kb0xpc3Q7XG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuXG5leHBvcnQgY29uc3QgYWRkTmV3VGFzayA9ICh7IHRhc2ssIGxpc3QgfSkgPT4ge1xuICBjb25zdCBpbmRleCA9IGxpc3QubGVuZ3RoO1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG8oeyB0YXNrLCBpbmRleCB9KTtcbiAgbGlzdC5wdXNoKHRvZG8pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSAoeyBpbmRleCwgbGlzdCB9KSA9PiB7XG4gIGlmIChpbmRleCA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuO1xuICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxpc3RbaV0uaW5kZXggLT0gMTtcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9ICh7IHRhc2ssIGluZGV4LCBsaXN0IH0pID0+IHtcbiAgaWYgKGluZGV4ID49IGxpc3QubGVuZ3RoKSByZXR1cm47XG4gIGxpc3RbaW5kZXhdLnRhc2sgPSB0YXNrO1xufTtcbiIsImltcG9ydCB1cGRhdGVUb2RvU3RhdHVzIGZyb20gJy4vdXBkYXRlLXN0YXR1cy5qcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrIH0gZnJvbSAnLi90YXNrLW1hbmFnZXIuanMnO1xuXG5jb25zdCBUUkFTSF9JQ09OID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+JztcbmNvbnN0IERSQUdfSUNPTiA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWdyaXAtdmVydGljYWxcIj48L2k+JztcblxuY29uc3QgbWFrZUVsZW1lbnQgPSAodGFnLCBjbGFzc05hbWUsIHRvZG9JbmRleCkgPT4ge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZWxlbS5kYXRhc2V0LmluZGV4ID0gdG9kb0luZGV4O1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmNvbnN0IG1ha2VUb2RvSXRlbSA9ICh0b2RvLCB0b2RvTGlzdCkgPT4ge1xuICAvLyBDcmVhdGluZyBlbGVtZW50cyBmb3IgZWFjaCB0b2RvXG4gIGNvbnN0IGxpID0gbWFrZUVsZW1lbnQoJ2xpJywgJ3RvZG8taXRlbScsIHRvZG8uaW5kZXgpO1xuICBjb25zdCBjaGVja0JveCA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICd0b2RvLWNoZWNrJywgdG9kby5pbmRleCk7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICd0YXNrLWlucHV0JywgdG9kby5pbmRleCk7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAncmVtb3ZlLWJ0bicsIHRvZG8uaW5kZXgpO1xuICBjb25zdCBkcmFnQnRuID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdkcmFnLWJ0bicsIHRvZG8uaW5kZXgpO1xuXG4gIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBjaGVja0JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgdXBkYXRlVG9kb1N0YXR1cyh7XG4gICAgICBpbmRleDogcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCwgMTApLFxuICAgICAgY29tcGxldGVkOiBlLnRhcmdldC5jaGVja2VkLFxuICAgICAgbGlzdDogdG9kb0xpc3QsXG4gICAgfSk7XG4gIH0pO1xuICB0YXNrSW5wdXQudmFsdWUgPSB0b2RvLnRhc2s7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCkgdGFza0lucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHRhc2subGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdXBkYXRlVGFzayh7XG4gICAgICB0YXNrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIGluZGV4OiBlLnRhcmdldC5kYXRhc2V0LmluZGV4LFxuICAgICAgbGlzdDogdG9kb0xpc3QsXG4gICAgfSk7XG4gIH0pO1xuICByZW1vdmVCdG4uaW5uZXJIVE1MID0gVFJBU0hfSUNPTjtcbiAgZHJhZ0J0bi5pbm5lckhUTUwgPSBEUkFHX0lDT047XG4gIGRyYWdCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgIGxpLmRyYWdnYWJsZSA9IHRydWU7XG4gIH0pO1xuICBsaS5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIGxpLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gIGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gIGxpLmFwcGVuZENoaWxkKGRyYWdCdG4pO1xuICByZXR1cm4gbGk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlVG9kb0l0ZW07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IoeyB0YXNrLCBpbmRleCwgY29tcGxldGVkID0gZmFsc2UgfSkge1xuICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCJjb25zdCB1cGRhdGVUb2RvU3RhdHVzID0gKHsgaW5kZXgsIGNvbXBsZXRlZCwgbGlzdCB9KSA9PiB7XG4gIGlmIChpbmRleCA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuO1xuICBsaXN0W2luZGV4XS5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVUb2RvU3RhdHVzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBhZGROZXdUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSAnLi90YXNrLW1hbmFnZXIuanMnO1xuaW1wb3J0IG1ha2VUb2RvSXRlbSBmcm9tICcuL3RvZG8tbWFrZXIuanMnO1xuaW1wb3J0IHJlb3JkZXJUb2RvTGlzdCBmcm9tICcuL3Jlb3JkZXItbGlzdC5qcyc7XG5cbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jb250YWluZXInKTtcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1pbnB1dCcpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYnRuJyk7XG5jb25zdCBjbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9jaycpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5cbmNvbnN0IExPQ0FMX0tFWSA9ICdtaWNyb3Rhc2tzLWRhdGEnO1xuXG5jb25zdCBnZXRMb2NhbERhdGEgPSAoKSA9PiB7XG4gIGxldCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9LRVkpO1xuICBpZiAobG9jYWxEYXRhICE9PSBudWxsKSB7XG4gICAgdG9kb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsRGF0YSk7XG4gIH1cbiAgcmV0dXJuIHRvZG9MaXN0O1xufTtcblxuY29uc3QgdXBkYXRlVG9kb0xpc3QgPSAodG9kb0xpc3QpID0+IHtcbiAgLy8gdXBkYXRlIGRpc3BsYXkgYW5kIHN0b3JhZ2VcbiAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICB0b2RvTGlzdC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIHRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBjb25zdCBpdGVtID0gbWFrZVRvZG9JdGVtKHRvZG8sIHRvZG9MaXN0KTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfS0VZLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xufTtcblxuLyogLS0tLS0tLU1haW4gUHJvZ3JhbS0tLS0tLS0tLS0tKi9cbmNvbnN0IHRvZG9MaXN0ID0gZ2V0TG9jYWxEYXRhKCk7XG51cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gaGFuZGxpbmcgcmVtb3ZlIGJ1dHRvbnNcbiAgY29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS1idG4nKTtcbiAgaWYgKHJlbW92ZUJ0biA9PT0gbnVsbCkgcmV0dXJuO1xuICBjb25zdCBpZFRvUmVtb3ZlID0gcmVtb3ZlQnRuLmRhdGFzZXQuaW5kZXg7XG4gIGRlbGV0ZVRhc2soeyBpbmRleDogcGFyc2VJbnQoaWRUb1JlbW92ZSwgMTApLCBsaXN0OiB0b2RvTGlzdCB9KTtcbiAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgLy8gYWRkaW5nIG5ldyB0YXNrIG9uIEVudGVyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXdUYXNrSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlmIChuZXdUYXNrLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGFkZE5ld1Rhc2soeyB0YXNrOiBuZXdUYXNrLCBsaXN0OiB0b2RvTGlzdCB9KTtcbiAgICB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCkpO1xuXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY29tcGxldGVkSXRlbXMgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkKTtcbiAgY29tcGxldGVkSXRlbXMuZm9yRWFjaCgodG9kbykgPT4gZGVsZXRlVGFzayh7IGluZGV4OiB0b2RvLmluZGV4LCBsaXN0OiB0b2RvTGlzdCB9KSk7XG4gIHVwZGF0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbn0pO1xuXG5kYXRlLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyk7XG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNsb2NrLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJyk7XG59LCAxMDAwKTtcblxuLy8gKiBEcmFnIGFuZCBEcm9wIEZlYXR1cmVcbmxldCBkcmFnSXRlbTtcbmxldCBkcm9wT247XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gIGRyYWdJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpO1xufSk7XG5cbnRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKGUpID0+IHtcbiAgZHJvcE9uID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gIGlmIChkcmFnSXRlbSA9PT0gbnVsbCkgcmV0dXJuO1xuICBkcmFnSXRlbS5kcmFnZ2FibGUgPSBmYWxzZTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZHJhZ0l0ZW0gPT09IG51bGwgfHwgZHJvcE9uID09PSBudWxsKSByZXR1cm47XG4gIHJlb3JkZXJUb2RvTGlzdChcbiAgICB0b2RvTGlzdCxcbiAgICBwYXJzZUludChkcmFnSXRlbS5kYXRhc2V0LmluZGV4LCAxMCksXG4gICAgcGFyc2VJbnQoZHJvcE9uLmRhdGFzZXQuaW5kZXgsIDEwKSxcbiAgKTtcbiAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=