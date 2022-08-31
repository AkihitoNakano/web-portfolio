/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css ***!
  \*****************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Paytone+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: #000;\n  --gray-color: #707070;\n  --green-color: rgb(0, 192, 131);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Oxygen', sans-serif;\n  letter-spacing: 0.5px;\n  overflow-x: hidden;\n}\n\nh1 {\n  font-family: 'Paytone One', sans-serif;\n}\n\n.japanese {\n  font-family: 'Zen Kaku Gothic New', sans-serif;\n}\n\n.container h1 {\n  font-size: 3rem;\n}\n\n.middle-text {\n  font-size: 1.2rem;\n  width: 800px;\n  margin: 10px 0 40px;\n}\n\n.weight-text {\n  font-weight: bold;\n}\n\nnav {\n  position: fixed;\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 20px 100px;\n}\n\n.title-wrap {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.circle-green {\n  background-color: var(--green-color);\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  margin-left: 7px;\n  margin-top: 8px;\n  transition: all 0.5 ease;\n}\n\n.title-wrap:hover .circle-green {\n  background-color: red;\n  border-radius: 0;\n  transform: scale(0.9);\n}\n\n.title-wrap p {\n  color: var(--font-color);\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\n.nav-link-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-link-wrap .nav-link {\n  color: #000;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  text-decoration: none;\n  padding: 0 20px;\n}\n\n.nav-link-wrap .nav-link:hover {\n  color: var(--green-color);\n}\n\n.home {\n  visibility: hidden;\n  position: relative;\n  width: 800px;\n  margin: 200px;\n  opacity: 0;\n  transition: opacity 1s ease-out;\n}\n\n.home h1 {\n  color: #ff5900;\n  font-size: 5rem;\n}\n\n.home h2 {\n  font-size: 3rem;\n  line-height: 60px;\n}\n\n.home img {\n  position: absolute;\n  right: 10%;\n  top: 50%;\n  width: 100px;\n  height: 100px;\n  transition: all 1s linear;\n  animation: jump 1s 2;\n}\n\n@keyframes jump {\n  0% {\n    top: 50%;\n    transform: scaleY(1);\n  }\n\n  5% {\n    transform: scaleY(0.5);\n  }\n\n  50% {\n    top: 0%;\n    transform: scaleY(1);\n  }\n\n  100% {\n    top: 50%;\n    transform: scaleY(1);\n  }\n}\n\n.border {\n  border: 1px solid #fc006d;\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 100px;\n}\n.container h1::after {\n  content: '●';\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n/* skills */\n\n.skill {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 1s ease-out;\n}\n\n.skills-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n\n.chart {\n  width: 400px;\n  margin-top: 40px;\n}\n\n.skills-right {\n  margin: auto;\n}\n\n.skill h1::after {\n  color: rgb(0, 115, 255);\n}\n\n.title {\n  margin-bottom: 20px;\n}\n\n.title h2 {\n  font-size: 2rem;\n}\n\n.columns-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.skill .list {\n  list-style-type: '\\02714';\n  letter-spacing: 1px;\n  line-height: 30px;\n  margin-left: 20px;\n}\n\n.skill .list li::before {\n  content: ' ';\n  margin-left: 10px;\n}\n\n/* portfolio section */\n\n.portfolio .sub-text {\n  margin-top: 40px;\n}\n\n.portfolio h1::after {\n  color: red;\n}\n\n.portfolio img {\n  width: 800px;\n  margin: auto;\n  margin-top: 40px;\n}\n\n.portfolio .weight-text {\n  font-size: 1.2rem;\n}\n\n.link-site {\n  display: flex;\n  flex-direction: row;\n}\n\n.link-site p {\n  margin-right: 10px;\n}\n\n.link-site a {\n  cursor: pointer;\n  color: palevioletred;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  transition: all 0.2s linear;\n}\n\n.link-site a:hover {\n  color: #00ff59;\n  /* font-weight: bold; */\n}\n\n/* contact */\n.contact h1::after {\n  color: rgb(0, 248, 215);\n}\n\n.contact-link {\n  list-style: none;\n  display: flex;\n  margin-top: 40px;\n}\n\n.contact-link li {\n  font-weight: bold;\n  margin-right: 20px;\n}\n\n.contact-link a {\n  color: #000;\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');\n\n:root {\n  --font-color: #000;\n  --gray-color: #707070;\n  --green-color: rgb(0, 192, 131);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Oxygen', sans-serif;\n  letter-spacing: 0.5px;\n  overflow-x: hidden;\n}\n\nh1 {\n  font-family: 'Paytone One', sans-serif;\n}\n\n.japanese {\n  font-family: 'Zen Kaku Gothic New', sans-serif;\n}\n\n.container h1 {\n  font-size: 3rem;\n}\n\n.middle-text {\n  font-size: 1.2rem;\n  width: 800px;\n  margin: 10px 0 40px;\n}\n\n.weight-text {\n  font-weight: bold;\n}\n\nnav {\n  position: fixed;\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 20px 100px;\n}\n\n.title-wrap {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.circle-green {\n  background-color: var(--green-color);\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  margin-left: 7px;\n  margin-top: 8px;\n  transition: all 0.5 ease;\n}\n\n.title-wrap:hover .circle-green {\n  background-color: red;\n  border-radius: 0;\n  transform: scale(0.9);\n}\n\n.title-wrap p {\n  color: var(--font-color);\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\n.nav-link-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-link-wrap .nav-link {\n  color: #000;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  text-decoration: none;\n  padding: 0 20px;\n}\n\n.nav-link-wrap .nav-link:hover {\n  color: var(--green-color);\n}\n\n.home {\n  visibility: hidden;\n  position: relative;\n  width: 800px;\n  margin: 200px;\n  opacity: 0;\n  transition: opacity 1s ease-out;\n}\n\n.home h1 {\n  color: #ff5900;\n  font-size: 5rem;\n}\n\n.home h2 {\n  font-size: 3rem;\n  line-height: 60px;\n}\n\n.home img {\n  position: absolute;\n  right: 10%;\n  top: 50%;\n  width: 100px;\n  height: 100px;\n  transition: all 1s linear;\n  animation: jump 1s 2;\n}\n\n@keyframes jump {\n  0% {\n    top: 50%;\n    transform: scaleY(1);\n  }\n\n  5% {\n    transform: scaleY(0.5);\n  }\n\n  50% {\n    top: 0%;\n    transform: scaleY(1);\n  }\n\n  100% {\n    top: 50%;\n    transform: scaleY(1);\n  }\n}\n\n.border {\n  border: 1px solid #fc006d;\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 100px;\n}\n.container h1::after {\n  content: '●';\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n/* skills */\n\n.skill {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 1s ease-out;\n}\n\n.skills-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n\n.chart {\n  width: 400px;\n  margin-top: 40px;\n}\n\n.skills-right {\n  margin: auto;\n}\n\n.skill h1::after {\n  color: rgb(0, 115, 255);\n}\n\n.title {\n  margin-bottom: 20px;\n}\n\n.title h2 {\n  font-size: 2rem;\n}\n\n.columns-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.skill .list {\n  list-style-type: '\\02714';\n  letter-spacing: 1px;\n  line-height: 30px;\n  margin-left: 20px;\n}\n\n.skill .list li::before {\n  content: ' ';\n  margin-left: 10px;\n}\n\n/* portfolio section */\n\n.portfolio .sub-text {\n  margin-top: 40px;\n}\n\n.portfolio h1::after {\n  color: red;\n}\n\n.portfolio img {\n  width: 800px;\n  margin: auto;\n  margin-top: 40px;\n}\n\n.portfolio .weight-text {\n  font-size: 1.2rem;\n}\n\n.link-site {\n  display: flex;\n  flex-direction: row;\n}\n\n.link-site p {\n  margin-right: 10px;\n}\n\n.link-site a {\n  cursor: pointer;\n  color: palevioletred;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  transition: all 0.2s linear;\n}\n\n.link-site a:hover {\n  color: #00ff59;\n  /* font-weight: bold; */\n}\n\n/* contact */\n.contact h1::after {\n  color: rgb(0, 248, 215);\n}\n\n.contact-link {\n  list-style: none;\n  display: flex;\n  margin-top: 40px;\n}\n\n.contact-link li {\n  font-weight: bold;\n  margin-right: 20px;\n}\n\n.contact-link a {\n  color: #000;\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/images/screenShots/chart.png":
/*!******************************************!*\
  !*** ./src/images/screenShots/chart.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/chart.png");

/***/ }),

/***/ "./src/images/screenShots/window01.png":
/*!*********************************************!*\
  !*** ./src/images/screenShots/window01.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/window01.png");

/***/ }),

/***/ "./src/images/svg/face.svg":
/*!*********************************!*\
  !*** ./src/images/svg/face.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/face.svg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/ts/importImages.ts":
/*!********************************!*\
  !*** ./src/ts/importImages.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../style.css */ "./src/style.css");
__webpack_require__(/*! ../images/svg/face.svg */ "./src/images/svg/face.svg");
__webpack_require__(/*! ../images/screenShots/chart.png */ "./src/images/screenShots/chart.png");
__webpack_require__(/*! ../images/screenShots/window01.png */ "./src/images/screenShots/window01.png");


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./ts/importImages.ts */ "./src/ts/importImages.ts");
class SetSectionPos {
    constructor(btnEl, sectionEl) {
        this.btnEl = btnEl;
        this.sectionEl = sectionEl;
    }
}
function moveToLinkPosition(btnEl, sectionEl) {
    btnEl.addEventListener('click', () => {
        if (sectionEl === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        else {
            const position = sectionEl.getBoundingClientRect();
            window.scrollTo({ top: position.top + window.pageYOffset, left: 0, behavior: 'smooth' });
        }
    });
}
const home = new SetSectionPos(document.getElementById('homeBtn'), 0);
const skill = new SetSectionPos(document.getElementById('skillBtn'), document.querySelector('.skill'));
const portfolio = new SetSectionPos(document.getElementById('portfolioBtn'), document.querySelector('.portfolio'));
window.addEventListener('load', e => {
    moveToLinkPosition(home.btnEl, home.sectionEl);
    moveToLinkPosition(skill.btnEl, skill.sectionEl);
    moveToLinkPosition(portfolio.btnEl, portfolio.sectionEl);
});
const homeEl = document.querySelector('.home');
const skillEl = document.querySelector('.skill');
setTimeout(() => showBlockElement(homeEl), 1000);
setTimeout(() => showBlockElement(skillEl), 1500);
function showBlockElement(element) {
    element.style.visibility = 'visible';
    element.style.opacity = '1';
}

})();

/******/ })()
;
//# sourceMappingURL=bundled43d93c45a01c6408091.js.map