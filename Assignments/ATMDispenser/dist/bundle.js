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

/***/ "./src/ATM.js":
/*!********************!*\
  !*** ./src/ATM.js ***!
  \********************/
/*! exports provided: ATM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ATM\", function() { return ATM; });\n/* harmony import */ var _DispenseNotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispenseNotes */ \"./src/DispenseNotes.js\");\n\nclass ATM{\n    constructor(notes){\n        this.notes=notes;\n        this.result=[];\n    }\n\n    dispense(amount,index){\n        \n        if(index<0) {\n           return new Promise((resolve, reject)=>{\n                setTimeout(_=>resolve(this.result),2000);\n            })\n        }\n        var bal=amount%this.notes[index];\n        var count=(amount-bal)/this.notes[index];\n        this.result.push(new _DispenseNotes__WEBPACK_IMPORTED_MODULE_0__[\"DispenseNotes\"](this.notes[index],count));\n        index--;\n        return this.dispense(bal,index);\n    }\n}\n\n//# sourceURL=webpack:///./src/ATM.js?");

/***/ }),

/***/ "./src/DispenseNotes.js":
/*!******************************!*\
  !*** ./src/DispenseNotes.js ***!
  \******************************/
/*! exports provided: DispenseNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DispenseNotes\", function() { return DispenseNotes; });\nclass DispenseNotes{\n    constructor(note,count){\n        this.note=note;\n        this.count=count;\n    }\n}\n\n//# sourceURL=webpack:///./src/DispenseNotes.js?");

/***/ }),

/***/ "./src/htmlRender.js":
/*!***************************!*\
  !*** ./src/htmlRender.js ***!
  \***************************/
/*! exports provided: HtmlRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HtmlRender\", function() { return HtmlRender; });\n\nclass HtmlRender{\n    constructor(){\n\n    }\n    renderResult(result=[]){\n        let totalNotes=0;\n        let resultContainer=document.querySelector(\".result\");\n        resultContainer.appendChild(this.createNode(\"H4\",\"You will get the following input\"));\n        resultContainer.appendChild(this.createNode(\"div\",\"\",\"line\"));\n        \n        let position=result.length-1;\n        result.forEach((item,index)=>{\n            //Geting data from reverse order\n            item=result[position-index];\n            totalNotes=totalNotes+item.count;\n            resultContainer.appendChild(this.createNode(\"span\",`${item.count} notes of Rs ${item.note}`));\n            if((index+1)%2===0)\n            {\n                resultContainer.appendChild(this.createNode(\"div\",\"\",\"line\"));\n            }\n        });\n\n        resultContainer.appendChild(this.createNode(\"H4\",`Total Notes Dispensed:${totalNotes}`));\n        resultContainer.appendChild(this.createNode(\"div\",\"\",\"line thick\"));\n    }\n\n\n    //Generate dynamic HTML node\n    createNode(nodeName=\"span\",text=\"\",className=\"\"){\n        let node = document.createElement(nodeName);\n        if(text.length>0)\n        {\n            let textnode = document.createTextNode(text);\n            node.appendChild(textnode);\n        }\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n\n    //processing image\n    loadingImage(src=\"../images/processing.gif\",className=\"\"){\n        let node = document.createElement(\"img\");\n        node.src=src;\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n}\n\n//# sourceURL=webpack:///./src/htmlRender.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ATM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ATM */ \"./src/ATM.js\");\n/* harmony import */ var _htmlRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlRender */ \"./src/htmlRender.js\");\n\n\n\n\n//document.querySelector('#txtGetMoney').disabled = true;\n\n//***************** Validation ************************************************************ */\ndocument.querySelector(\"#txtAmount\").addEventListener('focusout',(e)=>{\n    let form=document.querySelector(\".form\");\n    let valid=form.reportValidity();\n    document.querySelector('#txtGetMoney').disabled = !valid;\n});\n\ndocument.querySelector(\"#txtAmount\").addEventListener('input',(e)=>{\n    let form=document.querySelector(\".form\");\n    let valid=form.reportValidity();\n    document.querySelector('#txtGetMoney').disabled = !valid;\n});\n//*********************************************************************************************** */\n\n\n//************************************** Button Click *******************************************\ndocument.querySelector(\"#txtGetMoney\").addEventListener(\"click\",(e)=>{\n    \n    let htmlRender=new _htmlRender__WEBPACK_IMPORTED_MODULE_1__[\"HtmlRender\"]();\n    let resultContainer=document.querySelector(\".result\");\n    let form=document.querySelector(\".form\");\n    let valid=form.reportValidity();\n    if(valid)\n    {\n        resultContainer.innerHTML=\"\"; //initially set blank || No child node\n        resultContainer.appendChild(htmlRender.loadingImage(\"images/processing.gif\"));\n        let amount=document.querySelector(\"#txtAmount\").value;\n        const notes=[1,2,5,10, 20, 50, 100, 200, 500,2000];//Available notes\n        let atm=new _ATM__WEBPACK_IMPORTED_MODULE_0__[\"ATM\"](notes);\n        let result=atm.dispense(amount,notes.length-1)\n        .then((res)=>{\n            resultContainer.innerHTML=\"\"; //initially set blank || No child node\n            htmlRender.renderResult(res);\n        })\n    }\n    e.preventDefault();\n});\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });