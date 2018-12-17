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

/***/ "./src/Overlay.js":
/*!************************!*\
  !*** ./src/Overlay.js ***!
  \************************/
/*! exports provided: Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Overlay\", function() { return Overlay; });\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ \"./src/Product.js\");\n/* harmony import */ var _ProductService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductService */ \"./src/ProductService.js\");\n/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductComponent */ \"./src/ProductComponent.js\");\n\n\n\nclass Overlay{\n    constructor(){\n\n    }\n    \n   Open(productId){\n    const productComponent=new _ProductComponent__WEBPACK_IMPORTED_MODULE_2__[\"ProductComponent\"](new _ProductService__WEBPACK_IMPORTED_MODULE_1__[\"ProductService\"]('http://localhost:3000/products'));\n    \n    document.querySelector(\"#loadingImage\").style.display = \"block\"; \n    document.querySelector(\".overlay-main\").style.visibility = \"hidden\"; \n    productComponent.getProduct(productId)\n    .then((product)=>{\n        this.BindOverlay(product);\n        document.querySelector(\"#loadingImage\").style.display = \"none\"; \n        document.querySelector(\".overlay-main\").style.visibility = \"visible\"; \n    })\n    .catch(err=>console.log(err))\n\n        document.getElementById(\"overlay\").style.display = \"block\";\n   }\n   Close(){\n    document.querySelector(\"#btn-close\").addEventListener(\"click\",(e)=>{\n        document.getElementById(\"overlay\").style.display = \"none\";\n    });\n   }\n\n   BindOverlay(item){\n        document.querySelector(\"#productImage\").src=`images/${item.productImage}`;\n        document.querySelector(\"#productName\").innerHTML=item.name;\n        document.querySelector(\"#productCode\").innerHTML=item.code;\n        document.querySelector(\"#productQty\").value=item.qty;\n        document.querySelector(\"#productSize\").value=item.size;\n        document.querySelector(\"#productId\").value=item.id;\n        if(item.color===\"Yellow\"){\n            document.querySelector(\".yellow\").className=\"yellow product-colors select\";\n            document.querySelector(\".aqwa\").className=\"aqwa product-colors\";\n        }\n        else{\n            document.querySelector(\".aqwa\").className=\"aqwa product-colors select\";\n            document.querySelector(\".yellow\").className=\"yellow product-colors\";\n        }\n   }\n}\n\n//# sourceURL=webpack:///./src/Overlay.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductComponent\", function() { return ProductComponent; });\n\nclass ProductComponent{\n    constructor(productService)\n    {\n        this.productService=productService;\n    }\n    addProduct(product)\n    {\n        console.log(\"adding product.....\");\n        return this.productService.addProduct(product);\n    }\n    updateProduct(product){\n        console.log(product);\n        let result=this.productService.updateProduct(product);\n        return new Promise((resolve, reject)=>{\n            setTimeout(_=>resolve(result),1000);\n            })\n    }\n    getProducts(){\n        let result= this.productService.findAll();\n        return new Promise((resolve, reject)=>{\n            setTimeout(_=>resolve(result),1);\n            })\n    }\n    deleteProduct(id){\n        this.productService.deleteproduct(id)\n        .then(res=>console.log(`Deleted product ${res}`))\n        .catch(err=>console.log(err));\n    }\n\n    getProduct(id){\n       let result= this.productService.findById(id);\n       return new Promise((resolve, reject)=>{\n        setTimeout(_=>resolve(result),1000);\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/ProductComponent.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HtmlRender\", function() { return HtmlRender; });\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay */ \"./src/Overlay.js\");\n\nclass HtmlRender{\n    constructor(){\n\n    }\n    \n    renderProducts(result=[]){\n        document.querySelector(\"#totalItem\").innerHTML=`${result.length} Items`;\n        let productContainer=document.querySelector(\".product-container\");\n        let totalPrice=0;\n        result.forEach((item,index)=>{\n            //console.log(item);\n            totalPrice=totalPrice+parseFloat(item.price);\n            let container=this.createNode(\"div\",\"\",\"container\");\n                    let row=this.createNode(\"div\",\"\",\"row\");\n                            let imageContainer=this.createNode(\"aside\",\"\",\"image-container\");\n                            imageContainer.appendChild(this.createImage(`images/${item.productImage}`));\n                        row.appendChild(imageContainer);\n                            let wrapper=this.createNode(\"div\",\"\",\"wrapper\");\n                                    let aside1=this.createNode(\"aside\",\"\",\"aside aside-1\");\n                                            aside1.appendChild(this.createNode(\"p\",item.name,\"heading-Text\"));\n                                            aside1.appendChild(this.createNode(\"p\",item.code));\n                                            aside1.appendChild(this.createNode(\"p\",item.color));\n                                            aside1.appendChild(this.createButtonPanel(item.id.toString(),\"button-panel mobile-hide\"));\n                                    let aside2=this.createNode(\"aside\",\"\",\"aside aside-2\");\n                                        let p=this.createNode(\"p\");\n                                                p.appendChild(this.createNode(\"span\",\"Size:\",\"label\"));\n                                                p.appendChild(this.createNode(\"span\",item.size,\"size\"));\n                                        aside2.appendChild(p);\n                                            p=this.createNode(\"p\");\n                                                p.appendChild(this.createNode(\"span\",\"QTY:\",\"label\"));\n                                                p.appendChild(this.createNode(\"span\",item.qty,\"qty\"));\n                                        aside2.appendChild(p);\n                                        aside2.appendChild(this.createNode(\"p\",`$${item.price}`,\"heading-Text price\"));\n                                wrapper.appendChild(aside1);\n                                wrapper.appendChild(aside2);\n                        row.appendChild(wrapper);\n                container.appendChild(row);\n                container.appendChild(this.createButtonPanel(item.id.toString(),\"button-panel mobile\"));\n            productContainer.appendChild(container);\n            let lineClass=\"line\";\n            if(index === result.length-1){\n                lineClass=\"line thick\";\n            }\n            productContainer.appendChild(this.createNode(\"div\",\"\",lineClass));\n\n        });\n\n        document.querySelector(\"#subTotal\").innerHTML=`$${totalPrice}`;\n        document.querySelector(\"#estimatedTotal\").innerHTML=`$${totalPrice}`;\n    }\n\n    createButtonPanel(productId,className)\n    {\n        let ul=this.createNode(\"ul\",\"\",className);\n                let li=this.createNode(\"li\");\n                li.appendChild(this.createLink(\"#\",\"EDIT\",\"\",productId));\n                li.addEventListener(\"click\",()=>{\n                    new _Overlay__WEBPACK_IMPORTED_MODULE_0__[\"Overlay\"]().Open(productId);\n                });\n            ul.appendChild(li);\n                li=this.createNode(\"li\",\"|\");\n            ul.appendChild(li);\n                li=this.createNode(\"li\");\n                li.appendChild(this.createLink(\"#\",\"X REMOVE\"));\n            ul.appendChild(li);\n                li=this.createNode(\"li\",\"|\");\n            ul.appendChild(li);\n                li=this.createNode(\"li\");\n                li.appendChild(this.createLink(\"#\",\"SAVE FOR LATER\"));\n            ul.appendChild(li);\n        return ul;\n    }\n    //Generate dynamic HTML node\n    createNode(nodeName=\"span\",text=\"\",className=\"\"){\n        let node = document.createElement(nodeName);\n        if(text.length>0)\n        {\n            let textnode = document.createTextNode(text);\n            node.appendChild(textnode);\n        }\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n\n    //processing image\n    createImage(src=\"../images/processing.gif\",className=\"\"){\n        let node = document.createElement(\"img\");\n        node.src=src;\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        return node;\n    }\n\n    createLink(href=\"#\",text=\"\",className=\"\",args=\"\"){\n        \n        //console.log(param.length);\n        let node = document.createElement(\"a\");\n        node.href=href;\n        if(text.length>0)\n        {\n            let textnode = document.createTextNode(text);\n            node.appendChild(textnode);\n        }\n        if(className.length>0)\n        {\n            node.className=className;\n        }\n        if(args.length>0)\n        {\n            node.setAttribute('args', args);\n        }\n        return node;\n    }\n\n    \n}\n\n//# sourceURL=webpack:///./src/htmlRender.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ \"./src/Product.js\");\n/* harmony import */ var _ProductService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductService */ \"./src/ProductService.js\");\n/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductComponent */ \"./src/ProductComponent.js\");\n/* harmony import */ var _htmlRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlRender */ \"./src/htmlRender.js\");\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Overlay */ \"./src/Overlay.js\");\n\n\n\n\n\n\ndocument.querySelector(\"#loader\").style.display = \"block\"; \ndocument.querySelector(\".content\").style.visibility = \"hidden\"; \n\nconst loadData=()=>{\n    productComponent.getProducts()\n    .then((products)=>{\n        document.querySelector(\"#loader\").style.display = \"none\"; \n    document.querySelector(\".content\").style.visibility = \"visible\"; \n        var htmlRender=new _htmlRender__WEBPACK_IMPORTED_MODULE_3__[\"HtmlRender\"]();\n        htmlRender.renderProducts(products);\n    })\n    .catch(err=>console.log(err))\n}\n\nconst productComponent=new _ProductComponent__WEBPACK_IMPORTED_MODULE_2__[\"ProductComponent\"](new _ProductService__WEBPACK_IMPORTED_MODULE_1__[\"ProductService\"]('http://localhost:3000/products'));\nloadData();\n\ndocument.querySelector(\"#btn-close\").addEventListener(\"click\",(e)=>{\n    new _Overlay__WEBPACK_IMPORTED_MODULE_4__[\"Overlay\"]().Close();\n});\n\n// document.querySelector(\"#overlay\").addEventListener(\"click\",(e)=>{\n//    document.getElementById(\"overlay\").style.display = \"none\";\n//     new Overlay().Close();\n// });\n\ndocument.querySelectorAll(\".product-colors\").forEach((item, index)=>{\n    item.addEventListener(\"click\",()=>{\n        \n        let selectColor=item.attributes[\"color\"].value;\n        document.querySelector(\"#productColor\").value=selectColor;\n    });\n\n});\n\n\n\ndocument.querySelector(\"#btnSave\").addEventListener(\"click\",(e)=>{\n\n    let qty=document.querySelector(\"#productQty\").value;\n    let productId=document.querySelector(\"#productId\").value;\n    let color=document.querySelector(\"#productColor\").value;\n    let size=document.querySelector(\"#productSize\").value;\n    document.querySelector(\"#loadingImage\").style.display = \"block\"; \n    document.querySelector(\".overlay-main\").style.visibility = \"hidden\"; \n    //alert(productId);\n    productComponent.getProduct(productId)\n    .then((product)=>{\n        product.qty=qty;\n        product.color=color;\n        product.size=size;\n        productComponent.updateProduct(product)\n        .then((res)=>{\n            //console.log(res);\n            loadData();\n            document.querySelector(\"#loadingImage\").style.display = \"none\"; \n            document.querySelector(\".overlay-main\").style.visibility = \"visible\"; \n            document.getElementById(\"overlay\").style.display = \"none\";\n            new _Overlay__WEBPACK_IMPORTED_MODULE_4__[\"Overlay\"]().Close();\n        });\n    })\n    .catch(err=>console.log(err)) \n });\n\n \n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });