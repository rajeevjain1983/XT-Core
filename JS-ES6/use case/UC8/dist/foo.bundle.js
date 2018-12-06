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

/***/ "./src/UserComponent.js":
/*!******************************!*\
  !*** ./src/UserComponent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass UserComponent{\n    constructor(userService)\n    {\n        this.userService=userService;\n    }\n    addUser(user)\n    {\n        console.log(\"adding user.....\");\n        return this.userService.addUser(user);\n       // .then(res=>console.log(res));\n        //.catch(err=>console.log(err));\n        \n    }\n    updateUser(user){\n        this.userService.updateUser(user)\n        .then(res=>console.log(res))\n        .catch(err=>console.log(err));\n    }\n    findAll(){\n        this.userService.findAll()\n        .then(res=>res.map((item,index)=>{\n            console.log(item);\n        }))\n        .catch(err=>console.log(err))\n    }\n    deleteUser(id){\n        this.userService.deleteUser(id)\n        .then(res=>console.log(`Deleted User ${res}`))\n        .catch(err=>console.log(err));\n    }\n\n    findById(id){\n        this.userService.findById(id)\n        .then(res=>console.log(res))\n        .catch(err=>console.log(err));\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserComponent);\n\n//# sourceURL=webpack:///./src/UserComponent.js?");

/***/ }),

/***/ "./src/UserService.js":
/*!****************************!*\
  !*** ./src/UserService.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n//const  User = require('./user')\nclass UserService{\n    constructor(url)\n    {\n        this.url=url;\n    }\n\n   async addUser(user)\n    {\n            try{\n                user.id= Math.floor(Math.random() * 1000);\n                const response= await fetch(this.url,{\n                    method:'POST',\n                    body:JSON.stringify(user),\n                    headers:{\n                        'Content-Type':'application/json'\n                    }\n                });\n                if(response.status!==200 && response.status!==201){\n                    throw new Error(response.statusText);\n                }\n\n                return await response.json();\n        }\n        catch(err){\n                throw(err);\n        }\n    }\n\n    async updateUser(user){\n        try{\n           // debugger;\n                const response=await fetch(`${this.url}/${user.id}`,{\n                    method:'PUT',\n                    body:JSON.stringify(user),\n                    headers:{\n                        'content-Type':'application/json'\n                    }\n                });\n                if(response.status!==200 && response.status!==201){\n                    throw  new Error(response.statusText)\n                }\n                return await response.json();\n        }\n        catch(err){\n            throw err;\n        }\n    }\n    async findAll(){\n        try{\n            //debugger;\n            const response =await fetch(this.url);\n            if(response.status!==200 && response.status!==201){\n                throw new Error(response.statusText)\n            }\n            return await response.json();\n        }\n        catch(err){\n            console.log(err)\n        }\n    }\n\n    async findById(id){\n        try{\n            //debugger;\n            const response =await fetch(`${this.url}/${id}`);\n            if(response.status!==200 && response.status!==201){\n                throw new Error(response.statusText)\n            }\n            return await response.json();\n        }\n        catch(err){\n            console.log(err)\n        }\n    }\n\n    async deleteUser(id){\n        try{\n                const response=await fetch(`${this.url}/${id}`,{\n                    method:'DELETE'\n                });\n                if(response.status!==200 && response.status!==201){\n                    throw  new Error(response.statusText)\n                }\n                return await response.json();\n        }\n        catch(err){\n            throw err;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserService);\n\n//# sourceURL=webpack:///./src/UserService.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserService */ \"./src/UserService.js\");\n/* harmony import */ var _UserComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserComponent */ \"./src/UserComponent.js\");\n\n\n\n\ndocument.querySelector('#form1').addEventListener('click',function(e){\n });\n\nconst getFieldsValue=function(){\n\n    let name=document.querySelector(\"#txtName\").value;\n    let email=document.querySelector(\"#txtEmail\").value;\n    let phone=document.querySelector(\"#txtPhone\").value;\n    let description=document.querySelector(\"#txtMsg\").value;\n    let gender=document.querySelector('input[name=gender]:checked').value;\n    let employement=document.querySelector('input[name=Employement]:checked').value;\n    let city=document.querySelector(\"#citySelect\").value;\n    let state=document.querySelector(\"#stateSelect\").value;\n    return new _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,name,email,phone,gender,city,state,description);\n\n}\n\n document.querySelector('#btnSubmit').addEventListener('click',function(e){\n    let form=document.querySelector(\"#form1\");\n    let valid=form.reportValidity();\n    console.log(valid);\n    if(valid)\n    {\n        let user=getFieldsValue();\n        const userComponent=new _UserComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new _UserService__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('http://localhost:3000/profiles'));\n       userComponent.addUser(user)\n       .then((res)=>{\n        console.log(res);\n        document.querySelector(\".error-container\").style.visibility = 'visible';\n        \n       })\n       .catch(err=>console.log(err));\n    }\n\n    \n });\n \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Profile{\n    constructor(id,name,email,phone,gender,city,state,description){\n        this.id=id;\n        this.name=name;\n        this.email=email;\n        this.phone=phone;\n        this.gender=gender;\n        this.city=city;\n        this.state=state;\n        this.description=description;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./src/user.js?");

/***/ })

/******/ });