/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\n\n\n // Модальное окно\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://electrician/./src/index.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.top-slider'),\n      slide = slider.querySelectorAll('.item'),\n      slideTable = slider.querySelectorAll('.table'),\n      slickDots = slider.querySelector('.slick-dots');\n  slide.forEach(function () {\n    var li = document.createElement('li');\n    slickDots.append(li);\n  });\n  var dot = slickDots.querySelectorAll('li');\n  dot[0].classList.add('slick-active');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    if (!elem[index].classList.contains(strClass)) {\n      elem[index].style.opacity = '0';\n    }\n\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n\n    if (!elem[index].classList.contains('slick-active')) {\n      var startAnimation = function startAnimation() {\n        if (op !== 39) {\n          requestAnimationFrame(startAnimation);\n        }\n\n        op++;\n        elem[index].style.opacity = \"\".concat(op / 40);\n      };\n\n      var op = 0;\n      startAnimation();\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'active');\n    prevSlide(slideTable, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'active');\n    nextSlide(slideTable, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    if (!target.matches('li')) return;\n    prevSlide(slide, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'slick-active');\n\n    if (target.matches('li')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'slick-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('li')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('li')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://electrician/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  var modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback'),\n      btnModal = document.querySelectorAll('[data-href=modal-callback]'),\n      btnUp = document.querySelector('.up'),\n      body = document.querySelector('body');\n  btnModal.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      var op = 0;\n      modalOverlay.style.display = 'block';\n      modalCallback.style.opacity = '0';\n      modalCallback.style.display = 'block';\n      btnUp.style.display = 'none';\n      body.style.overflow = 'hidden';\n\n      function startAnimation() {\n        if (op !== 29) {\n          requestAnimationFrame(startAnimation);\n        }\n\n        op++;\n        modalCallback.style.opacity = \"\".concat(op / 30);\n      }\n\n      startAnimation();\n    });\n  });\n  modalOverlay.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('modal-close__img')) {\n      modalOverlay.style.display = 'none';\n      modalCallback.style.opacity = '0';\n      modalCallback.style.display = 'none';\n      btnUp.style.display = 'initial';\n      body.style.overflow = 'initial';\n    } else {\n      target = target.closest('.modal-callback');\n\n      if (!target) {\n        modalOverlay.style.display = 'none';\n        modalCallback.style.opacity = '0';\n        modalCallback.style.display = 'none';\n        btnUp.style.display = 'initial';\n        body.style.overflow = 'initial';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://electrician/./src/modules/toggleModal.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;