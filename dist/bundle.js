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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/common */ \"./src/modules/common.js\");\n/* harmony import */ var _modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleModal */ \"./src/modules/toggleModal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_validationInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validationInputs */ \"./src/modules/validationInputs.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n // Общие функции\n\n(0,_modules_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Модальное окно\n\n(0,_modules_toggleModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Карусель\n\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Аккордеон\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // Валидация\n\n(0,_modules_validationInputs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // Отправка формы\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://electrician/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon'),\n      element = accordeon.querySelectorAll('.element'),\n      title = accordeon.querySelectorAll('.title'),\n      elementContent = accordeon.querySelectorAll('.element-content');\n\n  var toggleAccordeon = function toggleAccordeon(index) {\n    for (var i = 0; i < element.length; i++) {\n      if (index === i) {\n        element[i].classList.add('active');\n        elementContent[i].classList.add('active');\n      } else {\n        element[i].classList.remove('active');\n        elementContent[i].classList.remove('active');\n      }\n    }\n  };\n\n  title.forEach(function (elem, i) {\n    elem.addEventListener('click', function () {\n      toggleAccordeon(i);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://electrician/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar carousel = function carousel() {\n  var SliderCarusel = /*#__PURE__*/function () {\n    function SliderCarusel(_ref) {\n      var main = _ref.main,\n          wrap = _ref.wrap,\n          next = _ref.next,\n          prev = _ref.prev,\n          _ref$infinity = _ref.infinity,\n          infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n          _ref$position = _ref.position,\n          position = _ref$position === void 0 ? 0 : _ref$position,\n          _ref$slidesToShow = _ref.slidesToShow,\n          slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n          _ref$responsive = _ref.responsive,\n          responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n      _classCallCheck(this, SliderCarusel);\n\n      this.main = document.querySelector(main);\n      this.wrap = document.querySelector(wrap);\n      this.slides = document.querySelector(wrap).children;\n      this.next = document.querySelector(next);\n      this.prev = document.querySelector(prev);\n      this.slidesToShow = slidesToShow;\n      this.options = {\n        position: position,\n        infinity: infinity,\n        widthSlide: Math.floor(100 / this.slidesToShow)\n      };\n      this.responsive = responsive;\n    }\n\n    _createClass(SliderCarusel, [{\n      key: \"init\",\n      value: function init() {\n        this.addGloClass();\n        this.addStyle();\n\n        if (this.prev && this.next) {\n          this.controlSlider();\n        } else {\n          this.addArrow();\n          this.controlSlider();\n        }\n\n        if (this.responsive) {\n          this.responseInit();\n        }\n      }\n    }, {\n      key: \"addGloClass\",\n      value: function addGloClass() {\n        this.main.classList.add('glo-slider');\n        this.wrap.classList.add('glo-slider__wrap');\n\n        var _iterator = _createForOfIteratorHelper(this.slides),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n            item.classList.add('glo-slider__item');\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }, {\n      key: \"addStyle\",\n      value: function addStyle() {\n        var style = document.getElementById('slider');\n\n        if (!style) {\n          style = document.createElement('style');\n          style.id = 'sliderCarusel-style';\n        }\n\n        style.textContent = \"\\n    .glo-slider{\\n      overflow: hidden !important;\\n    }\\n    .glo-slider__wrap{\\n      display: flex !important;\\n      transition: transform 0.5s !important;\\n      will-change: transform !important;\\n    }\\n    .glo-slider__item{\\n      display: flex !important;\\n      align-items: center !important;\\n      justify-content: center !important;\\n      flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n      margin: auto 0 !important;\\n    }\\n    .glo-slider__prev,\\n    .glo-slider__next{\\n      margin: 0 10px;\\n      border: 20px solid transparent;\\n      background: transparent;\\n    }\\n    .glo-slider__next{\\n      border-left-color: #19b5fe;\\n    }\\n    .glo-slider__prev{\\n      border-right-color: #19b5fe;\\n    }\\n    .glo-slider__prev:hover,\\n    .glo-slider__next:hover,\\n    .glo-slider__prev:focus,\\n    .glo-slider__next:focus{\\n      background: transparent;\\n      outline: transparent;\\n    }\");\n        document.head.appendChild(style);\n      }\n    }, {\n      key: \"controlSlider\",\n      value: function controlSlider() {\n        this.prev.addEventListener('click', this.prevSlider.bind(this));\n        this.next.addEventListener('click', this.nextSlider.bind(this));\n      }\n    }, {\n      key: \"prevSlider\",\n      value: function prevSlider() {\n        if (this.options.infinity || this.options.position > 0) {\n          --this.options.position;\n\n          if (this.options.position < 0) {\n            this.options.position = this.slides.length - this.slidesToShow;\n          }\n\n          this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n        }\n      }\n    }, {\n      key: \"nextSlider\",\n      value: function nextSlider() {\n        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {\n          ++this.options.position;\n\n          if (this.options.position > this.slides.length - this.slidesToShow) {\n            this.options.position = 0;\n          }\n\n          this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n        }\n      }\n    }, {\n      key: \"addArrow\",\n      value: function addArrow() {\n        this.prev = document.createElement('button');\n        this.next = document.createElement('button');\n        this.prev.className = 'glo-slider__prev';\n        this.next.className = 'glo-slider__next';\n        this.main.appendChild(this.prev);\n        this.main.appendChild(this.next);\n      }\n    }, {\n      key: \"responseInit\",\n      value: function responseInit() {\n        var _this = this;\n\n        var slidesToShowDefault = this.slidesToShow;\n        var allResponse = this.responsive.map(function (item) {\n          return item.breakpoint;\n        });\n        var maxResponce = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n        var checkResponse = function checkResponse() {\n          var widthWindow = document.documentElement.clientWidth;\n\n          if (widthWindow < maxResponce) {\n            for (var i = 0; i < allResponse.length; i++) {\n              if (widthWindow < allResponse[i]) {\n                _this.slidesToShow = _this.responsive[i].slidesToShow;\n                _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n                _this.addStyle();\n              }\n            }\n          } else {\n            _this.slidesToShow = slidesToShowDefault;\n            _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n            _this.addStyle();\n          }\n        };\n\n        checkResponse();\n        window.addEventListener('resize', checkResponse);\n      }\n    }]);\n\n    return SliderCarusel;\n  }();\n\n  var carousel = new SliderCarusel({\n    main: '.services-elements',\n    wrap: '.services-carousel',\n    prev: '.arrow-left',\n    next: '.arrow-right',\n    slidesToShow: 3,\n    infinity: true,\n    responsive: [{\n      breakpoint: 1024,\n      slidesToShow: 3\n    }, {\n      breakpoint: 768,\n      slidesToShow: 2\n    }, {\n      breakpoint: 576,\n      slidesToShow: 1\n    }]\n  });\n  carousel.init();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://electrician/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/common.js":
/*!*******************************!*\
  !*** ./src/modules/common.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar common = function common() {\n  // Убираем якори из адресной строки\n  var linksMenu = document.querySelectorAll('a');\n  linksMenu.forEach(function (elem) {\n    elem.addEventListener('click', function (event) {\n      event.preventDefault();\n      var blockId = elem.getAttribute('href').substr(1);\n      document.getElementById(blockId).scrollIntoView();\n    });\n  }); // Кнопка для скрола вверх\n\n  var scrollUpButton = document.querySelector('.up'),\n      title = document.querySelector('.service-title');\n  document.addEventListener('scroll', function () {\n    var offset = title.getBoundingClientRect().top;\n\n    if (offset <= 100) {\n      scrollUpButton.classList.add('active');\n    } else {\n      scrollUpButton.classList.remove('active');\n    }\n  });\n  scrollUpButton.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);\n\n//# sourceURL=webpack://electrician/./src/modules/common.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var form = document.querySelectorAll('form');\n  var loadIconDiv = document.createElement('div');\n  loadIconDiv.style.color = '#000';\n  var successMessage = 'Спасибо! Скоро рассмотрим вашу заявку!',\n      errorMessage = 'Ой что-то пошло не так!';\n\n  var clearInput = function clearInput(form) {\n    var inputs = form.querySelectorAll('input');\n    inputs.forEach(function (input) {\n      input.value = '';\n      input.classList.remove('success');\n    });\n  };\n\n  var loadReqText = function loadReqText(data) {\n    loadIconDiv.textContent = data;\n  };\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  form.forEach(function (el) {\n    el.addEventListener('submit', function (e) {\n      e.preventDefault();\n      setTimeout(function () {\n        var subBtn = el.querySelector('[type=submit]');\n\n        if (subBtn.classList.contains('cancel')) {\n          return;\n        }\n\n        if (loadIconDiv) {\n          loadIconDiv.textContent = 'Идет отправка';\n        }\n\n        loadIconDiv.classList.remove('loadIconText');\n        loadIconDiv.classList.add('sk-fading-circle');\n\n        for (var i = 1; i < 13; i++) {\n          var innerDiv = document.createElement('div');\n          innerDiv.classList.add(\"sk-circle\");\n          innerDiv.classList.add(\"sk-circle-\".concat(i));\n          loadIconDiv.insertAdjacentElement('beforeend', innerDiv);\n        }\n\n        el.appendChild(loadIconDiv);\n        var formData = new FormData(el);\n        var body = {};\n        formData.forEach(function (val, key) {\n          body[key] = val;\n        });\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200');\n          }\n\n          loadIconDiv.classList.remove('sk-fading-circle');\n          loadIconDiv.classList.add('loadIconText');\n          loadReqText(successMessage);\n          clearInput(el);\n          setTimeout(function () {\n            loadIconDiv.textContent = '';\n          }, 3000);\n        })[\"catch\"](function (err) {\n          loadReqText(errorMessage);\n        });\n      }, 500);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://electrician/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.top-slider'),\n      slide = slider.querySelectorAll('.item'),\n      slideTable = slider.querySelectorAll('.table'),\n      slickDots = slider.querySelector('.slick-dots');\n  var widthWindow = window.innerWidth;\n  window.addEventListener('resize', function () {\n    widthWindow = window.innerWidth;\n  });\n\n  if (widthWindow < 768) {\n    slideTable.forEach(function (elem) {\n      elem.classList.remove('active');\n    });\n  }\n\n  slide.forEach(function () {\n    var li = document.createElement('li');\n    slickDots.append(li);\n  });\n  var dot = slickDots.querySelectorAll('li');\n  dot[0].classList.add('slick-active');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    if (!elem[index].classList.contains('slick-active') & !elem[index].classList.contains('table')) {\n      elem[index].style.opacity = '0';\n    }\n\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n\n    if (!elem[index].classList.contains('slick-active') & !elem[index].classList.contains('table')) {\n      var startAnimation = function startAnimation() {\n        if (op !== 39) {\n          requestAnimationFrame(startAnimation);\n        }\n\n        op++;\n        elem[index].style.opacity = \"\".concat(op / 40);\n      };\n\n      var op = 0;\n      startAnimation();\n    }\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    if (widthWindow >= 768) {\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(slideTable, currentSlide, 'active');\n      prevSlide(dot, currentSlide, 'slick-active');\n      currentSlide++;\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(slideTable, currentSlide, 'active');\n      nextSlide(dot, currentSlide, 'slick-active');\n    } else {\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(dot, currentSlide, 'slick-active');\n      currentSlide++;\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(dot, currentSlide, 'slick-active');\n    }\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    if (!target.matches('li')) return;\n\n    if (widthWindow >= 768) {\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(slideTable, currentSlide, 'active');\n      prevSlide(dot, currentSlide, 'slick-active');\n    } else {\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(dot, currentSlide, 'slick-active');\n    }\n\n    if (target.matches('li')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    if (widthWindow >= 768) {\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(slideTable, currentSlide, 'active');\n      nextSlide(dot, currentSlide, 'slick-active');\n    } else {\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(dot, currentSlide, 'slick-active');\n    }\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('li')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('li')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://electrician/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/toggleModal.js":
/*!************************************!*\
  !*** ./src/modules/toggleModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleModal = function toggleModal() {\n  var modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback'),\n      btnModal = document.querySelectorAll('[data-href=modal-callback]'),\n      body = document.querySelector('body');\n  btnModal.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      var op = 0;\n      modalOverlay.style.display = 'block';\n      modalCallback.style.opacity = '0';\n      modalCallback.style.display = 'block';\n      body.style.overflow = 'hidden';\n\n      function startAnimation() {\n        if (op !== 29) {\n          requestAnimationFrame(startAnimation);\n        }\n\n        op++;\n        modalCallback.style.opacity = \"\".concat(op / 30);\n      }\n\n      startAnimation();\n    });\n  });\n  modalOverlay.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('modal-close__img')) {\n      modalOverlay.style.display = 'none';\n      modalCallback.style.opacity = '0';\n      modalCallback.style.display = 'none';\n      body.style.overflow = 'initial';\n    } else {\n      target = target.closest('.modal-callback');\n\n      if (!target) {\n        modalOverlay.style.display = 'none';\n        modalCallback.style.opacity = '0';\n        modalCallback.style.display = 'none';\n        body.style.overflow = 'initial';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);\n\n//# sourceURL=webpack://electrician/./src/modules/toggleModal.js?");

/***/ }),

/***/ "./src/modules/validationInputs.js":
/*!*****************************************!*\
  !*** ./src/modules/validationInputs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable */\nvar validationInputs = function validationInputs() {\n  var inputsUserName = document.querySelectorAll('[name=\"fio\"]');\n  var inputsUserPhone = document.querySelectorAll('[name=\"tel\"]');\n  inputsUserName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^А-ЯЁ а-яё]/, '');\n      item.value = item.value.replace(/\\ +/g, ' ');\n      item.value = item.value.replace(/\\-+/g, '-');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^А-ЯЁ а-яё-]/g, '');\n      item.value = item.value.replace(/[\\s\\-]+$/g, '');\n      item.value = item.value.replace(/^[\\s\\-]+/g, '');\n      item.value = item.value.replace(/^[\\s\\ -]+/g, '');\n      var string = item.value.split(/[\\s,]/);\n      var newString = [];\n      string.forEach(function (elem) {\n        elem = elem.charAt(0).toUpperCase() + elem.slice(1);\n        newString.push(elem);\n      });\n      item.value = newString.join(' ');\n    });\n  });\n  inputsUserPhone.forEach(function (item) {\n    // item.setAttribute(`pattern`, `^8\\\\d{10}`);\n    item.setAttribute(\"maxlength\", \"12\");\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^+0-9]/, '');\n      item.value = item.value.replace(/\\-+/g, '');\n      item.value = item.value.replace(/\\++/g, '+');\n      item.value = item.value.replace(/\\(+/g, '');\n      item.value = item.value.replace(/\\)+/g, '');\n      item.value = item.value.replace(/^\\-+/g, '');\n      item.value = item.value.replace(/^\\(+/g, '');\n      item.value = item.value.replace(/^\\)+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[^+0-9]/g, '');\n      item.value = item.value.replace(/\\-+$/g, '');\n      item.value = item.value.replace(/\\(+$/g, '');\n      item.value = item.value.replace(/\\)+$/g, '');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationInputs);\n\n//# sourceURL=webpack://electrician/./src/modules/validationInputs.js?");

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