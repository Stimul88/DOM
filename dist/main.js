/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dom/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\r\n\r\n\r\n// Точка входа webpack\r\n// Не пишите код в данном файле\r\n\n\n//# sourceURL=webpack://dom/./src/index.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePlay; }\n/* harmony export */ });\nclass GamePlay {\r\n  constructor() {\r\n  }\r\n\r\n  init() {\r\n    this.bindToDOM()\r\n    this.randomExit()\r\n\r\n  }\r\n\r\n  bindToDOM() {\r\n    const container = document.querySelector('#game-container')\r\n    let newTag = document.createElement('div');\r\n\r\n    newTag.className = 'all-cells';\r\n\r\n    newTag.innerHTML = `\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <br/>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <br/>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <br/>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n        <div class=\"cells\"></div>\r\n    `;\r\n\r\n    container.appendChild(newTag);\r\n  }\r\n\r\n  randomExit() {\r\n    const cells = Array.from(document.querySelectorAll('.cells'))\r\n    let newTag = document.createElement('img');\r\n    newTag.className = 'active';\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        setInterval(() => {\r\n          const randomCells = []\r\n          cells.forEach(item => {\r\n            if(!item.hasChildNodes()) {\r\n              randomCells.push(item)\r\n            }\r\n          })\r\n          const random = randomCells[Math.floor(Math.random() * randomCells.length)]\r\n          random.appendChild(newTag)\r\n        },1000)\r\n      })\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://dom/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n\r\n\r\nconst gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ngamePlay.init();\r\n\r\n\r\n\n\n//# sourceURL=webpack://dom/./src/js/app.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;