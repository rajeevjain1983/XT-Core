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

/***/ "./src/Product.js":
/*!************************!*\
  !*** ./src/Product.js ***!
  \************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return Product; });\nclass Product{\n    constructor(id,name,qty,size,color,price,code,description,productImage){\n        this.id=id;\n        this.name=name;\n        this.qty=qty;\n        this.size=size;\n        this.color=color;\n        this.price=price;\n        this.code=code;\n        this.description=description;\n        this.productImage=productImage;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/Product.js?");

/***/ }),

/***/ "./src/ProductComponent.js":
/*!*********************************!*\
  !*** ./src/ProductComponent.js ***!
  \*********************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductComponent\", function() { return ProductComponent; });\n\nclass ProductComponent{\n    constructor(productService)\n    {\n        this.productService=productService;\n    }\n    addProduct(product)\n    {\n        console.log(\"adding product.....\");\n        return this.productService.addProduct(product);\n    }\n    updateProduct(product){\n        this.productService.updateproduct(product)\n        .then(res=>console.log(res))\n        .catch(err=>console.log(err));\n    }\n    getProducts(){\n        return this.productService.findAll()\n        // .then(res=>res.map((item,index)=>{\n        //     console.log(item);\n        // }))\n        // .catch(err=>console.log(err))\n    }\n    deleteProduct(id){\n        this.productService.deleteproduct(id)\n        .then(res=>console.log(`Deleted product ${res}`))\n        .catch(err=>console.log(err));\n    }\n\n    findById(id){\n        this.productService.findById(id)\n        .then(res=>console.log(res))\n        .catch(err=>console.log(err));\n    }\n}\n\n//# sourceURL=webpack:///./src/ProductComponent.js?");

/***/ }),

/***/ "./src/ProductService.js":
/*!*******************************!*\
  !*** ./src/ProductService.js ***!
  \*******************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductService\", function() { return ProductService; });\n\n\nclass ProductService{\n    constructor(url)\n    {\n        this.url=url;\n    }\n\n   async addProduct(product)\n    {\n            try{\n                product.id= Math.floor(Math.random() * 1000);\n                const response= await fetch(this.url,{\n                    method:'POST',\n                    body:JSON.stringify(product),\n                    headers:{\n                        'Content-Type':'application/json'\n                    }\n                });\n                if(response.status!==200 && response.status!==201){\n                    throw new Error(response.statusText);\n                }\n\n                return await response.json();\n        }\n        catch(err){\n                throw(err);\n        }\n    }\n\n    async updateProduct(product){\n        try{\n           // debugger;\n                const response=await fetch(`${this.url}/${product.id}`,{\n                    method:'PUT',\n                    body:JSON.stringify(product),\n                    headers:{\n                        'content-Type':'application/json'\n                    }\n                });\n                if(response.status!==200 && response.status!==201){\n                    throw  new Error(response.statusText)\n                }\n                return await response.json();\n        }\n        catch(err){\n            throw err;\n        }\n    }\n    async findAll(){\n        try{\n            //debugger;\n            const response =await fetch(this.url);\n            if(response.status!==200 && response.status!==201){\n                throw new Error(response.statusText)\n            }\n            return await response.json();\n        }\n        catch(err){\n            console.log(err)\n        }\n    }\n\n    async findById(id){\n        try{\n            //debugger;\n            const response =await fetch(`${this.url}/${id}`);\n            if(response.status!==200 && response.status!==201){\n                throw new Error(response.statusText)\n            }\n            return await response.json();\n        }\n        catch(err){\n            console.log(err)\n        }\n    }\n\n    async deleteProduct(id){\n        try{\n                const response=await fetch(`${this.url}/${id}`,{\n                    method:'DELETE'\n                });\n                if(response.status!==200 && response.status!==201){\n                    throw  new Error(response.statusText)\n                }\n                return await response.json();\n        }\n        catch(err){\n            throw err;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ProductService.js?");

/***/ }),

/***/ "./src/htmlRender.js":
/*!***************************!*\
  !*** ./src/htmlRender.js ***!
  \***************************/
/*! exports provided: HtmlRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HtmlRender\", function() { return HtmlRender; });\n\nclass HtmlRender{\n    constructor(){\n\n    }\n    \n    renderProducts(result=[]){\n        \n        let productContainer=document.querySelector(\".product-container\");\n        result.forEach((item,index)=>{\n            console.log(item);\n            let container=this.createNode(\"div\",\"\",\"container\");\n                    let row=this.createNode(\"div\",\"\",\"row\");\n                            let imageContainer=this.createNode(\"aside\",\"\",\"image-container\");\n                            imageContainer.appendChild(this.createImage(`images/${item.productImage}`));\n                        row.appendChild(imageContainer);\n                            let wrapper=this.createNode(\"div\",\"\",\"wrapper\");\n                                    let aside1=this.createNode(\"aside\",\"\",\"aside aside-1\");\n                                            aside1.appendChild(this.createNode(\"p\",item.name,\"heading-Text\"));\n                                            aside1.appendChild(this.createNode(\"p\",item.code));\n                                            aside1.appendChild(this.createNode(\"p\",item.color));\n                                            aside1.appendChild(this.createButtonPanel(\"button-panel mobile-hide\"));\n                                    let aside2=this.createNode(\"aside\",\"\",\"aside aside-2\");\n                                        let p=this.createNode(\"p\");\n                                                p.appendChild(this.createNode(\"span\",\"Size:\",\"label\"));\n                                                p.appendChild(this.createNode(\"span\",item.size,\"size\"));\n                                        aside2.appendChild(p);\n                                            p=this.createNode(\"p\");\n                                                p.appendChild(this.createNode(\"span\",\"QTY:\",\"label\"));\n                                                p.appendChild(this.createNode(\"span\",item.qty,\"qty\"));\n                                        aside2.appendChild(p);\n                                        aside2.appendChild(this.createNode(\"p\",`$${item.price}`,\"heading-Text price\"));\n                                wrapper.appendChild(aside1);\n                                wrapper.appendChild(aside2);\n                        row.appendChild(wrapper);\n                container.appendChild(row);\n                container.appendChild(this.createButtonPanel(\"button-panel mobile\"));\n            productContainer.appendChild(container);\n            let lineClass=\"line\";\n            if(index == result.length-1){\n                lineClass=\"line thick\";\n            }\n            productContainer.appendChild(this.createNode(\"div\",\"\",lineClass));\n\n        });\n    }\n\n    createButtonPanel(className)\n    {\n        let ul=this.createNode(\"ul\",\"\",className);\n                let li=this.createNode(\"li\");\n                li.appendChild(this.createLink(\"#\",\"EDIT\"));\n                li.addEventListener(\"click\",()=>{\n                    this.openOverlay();\n                });\n            ul.appendChild(li);\n                li=this.createNode(\"li\",\"|\");\n            ul.appendChild(li);\n                li=this.createNode(\"li\");\n                li.appendChild(this.createLink(\"#\",\"X REMOVE\"));\n            ul.appendChild(li);\n                li=this.createNode(\"li\",\"|\");\n            ul.appendChild(li);\n                li=this.createNode(\"li\");\n                li.appendChild(this.createLink(\"#\",\"SAVE FOR LATER\"));\n            ul.appendChild(li);\n        return ul;\n    }\n    //Generate dynamic HTML node\n    createNode(nodeName=\"span\",text=\"\",className=\"\"){\n        let node = document.createElement(nodeName);\n        if(text.length>0)\n        {\n            let textnode = document.createTextNode(text);\n            node.appendChild(textnode);\n        }\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n\n    //processing image\n    createImage(src=\"../images/processing.gif\",className=\"\"){\n        let node = document.createElement(\"img\");\n        node.src=src;\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n\n    createLink(href=\"#\",text=\"\",className=\"\"){\n        let node = document.createElement(\"a\");\n        node.href=href;\n        if(text.length>0)\n        {\n            let textnode = document.createTextNode(text);\n            node.appendChild(textnode);\n        }\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n\n    openOverlay(){\n\n       // alert(\"hello overlay\");\n\n       document.getElementById(\"overlay\").style.display = \"block\";\n\n    }\n}\n\n//# sourceURL=webpack:///./src/htmlRender.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ \"./src/Product.js\");\n/* harmony import */ var _ProductService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductService */ \"./src/ProductService.js\");\n/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductComponent */ \"./src/ProductComponent.js\");\n/* harmony import */ var _htmlRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlRender */ \"./src/htmlRender.js\");\n\n\n\n\n\nconst productComponent=new _ProductComponent__WEBPACK_IMPORTED_MODULE_2__[\"ProductComponent\"](new _ProductService__WEBPACK_IMPORTED_MODULE_1__[\"ProductService\"]('http://localhost:3000/products'));\nproductComponent.getProducts()\n.then((products)=>{\n    console.log(products);\n    var htmlRender=new _htmlRender__WEBPACK_IMPORTED_MODULE_3__[\"HtmlRender\"]();\n    htmlRender.renderProducts(products);\n})\n.catch(err=>console.log(err))\n\n\ndocument.querySelector(\".header\").addEventListener(\"click\",(e)=>{\n    \n    // productComponent.addProduct(new Product(0,'solid green cotton tshirt','3','S','Green','11.50','Style#MS13KT906','','top-1.jpeg'));\n    // productComponent.addProduct(new Product(0,'Pink Rainbow Print Girls Tee','2','M','Red','17.50','Style#MS13KT907','','top-2.jpeg'));\n    // productComponent.addProduct(new Product(0,'Solid Blue cotton tshirt','1','L','Blue','9.50','Style#MS13KT908','','top-3.jpeg'));\n});\n\ndocument.querySelector(\"#btn-close\").addEventListener(\"click\",(e)=>{\n    document.getElementById(\"overlay\").style.display = \"none\";\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });