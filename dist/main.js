/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_PBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/PBackground */ "./src/js/PBackground.js");
/* module decorator */ module = __webpack_require__.hmd(module);

module.exports.PBackground = _js_PBackground__WEBPACK_IMPORTED_MODULE_0__.default;

/***/ }),

/***/ "./src/js/PBackground.js":
/*!*******************************!*\
  !*** ./src/js/PBackground.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ "./src/js/Particle.js");
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse */ "./src/js/mouse.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./src/js/colors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * Class for making particle background on canvas.
 * Canvas element with given selector must exist on page
 *
 * @param {string} canvasSelector Selector for finding canvas element
 *
 * @param {boolean} mouseInteraction Enables interaction between particles and cursor
 *
 * @param {number} mouseRadius Size of radius around mouse
 *
 * @param {number} canvasW width of canvas
 *
 * @param {number} canvasH height of canvas
 *
 * @param {Object<boolean>} runAnimation Enables animation of particles
 *
 * @param {number} particleCount Number of particles
 *
 * @param {boolean} alpha Boolean that indicates if the canvas contains an alpha buffer.
 *
 * @param {string} bgColor Background of canvas
 *
 * @param {number} speedMod Speed modifier of particles
 *
 * @param {Array<number>} lineColor Color of connecting lines
 *
 * @param {number} lineModifier Distance of line when to connect , lower number shorter distance
 *
 * @constructor
 */

var PBackground = /*#__PURE__*/function () {
  function PBackground() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$canvasSelector = _ref.canvasSelector,
        canvasSelector = _ref$canvasSelector === void 0 ? '#canvas' : _ref$canvasSelector,
        _ref$mouseInteraction = _ref.mouseInteraction,
        mouseInteraction = _ref$mouseInteraction === void 0 ? true : _ref$mouseInteraction,
        _ref$mouseRadius = _ref.mouseRadius,
        mouseRadius = _ref$mouseRadius === void 0 ? 100 : _ref$mouseRadius,
        _ref$canvasW = _ref.canvasW,
        canvasW = _ref$canvasW === void 0 ? window.innerWidth : _ref$canvasW,
        _ref$canvasH = _ref.canvasH,
        canvasH = _ref$canvasH === void 0 ? window.innerHeight : _ref$canvasH,
        _ref$runAnimation = _ref.runAnimation,
        runAnimation = _ref$runAnimation === void 0 ? {
      value: true
    } : _ref$runAnimation,
        _ref$particleCount = _ref.particleCount,
        particleCount = _ref$particleCount === void 0 ? 200 : _ref$particleCount,
        _ref$alpha = _ref.alpha,
        alpha = _ref$alpha === void 0 ? true : _ref$alpha,
        _ref$speedMod = _ref.speedMod,
        speedMod = _ref$speedMod === void 0 ? 5 : _ref$speedMod,
        _ref$bgColor = _ref.bgColor,
        bgColor = _ref$bgColor === void 0 ? 'black' : _ref$bgColor,
        _ref$lineColor = _ref.lineColor,
        lineColor = _ref$lineColor === void 0 ? null : _ref$lineColor,
        _ref$lineModifier = _ref.lineModifier,
        lineModifier = _ref$lineModifier === void 0 ? 20000 : _ref$lineModifier;

    _classCallCheck(this, PBackground);

    this.canvasSelector = canvasSelector;
    this.canvas = document.querySelector(canvasSelector);
    this.runAnimation = runAnimation;
    this.particlesArray = [];
    this.particleCount = particleCount;
    this.alpha = alpha;
    this.speedMod = speedMod;
    this.mouseInteraction = mouseInteraction;
    this.lineModifier = lineModifier;
    this.canvasW = canvasW;
    this.canvasH = canvasH;
    this.canvas.width = this.canvasW;
    this.canvas.height = this.canvasH;

    if (this.mouseInteraction) {
      this.mouseRadius = mouseRadius;
      _mouse__WEBPACK_IMPORTED_MODULE_1__.default.radius = this.mouseRadius;
    }

    if (lineColor) {
      this.lineColor = {
        r: lineColor[0],
        g: lineColor[1],
        b: lineColor[2]
      };
    } else {
      this.lineColor = {
        r: Math.random() * 256,
        g: Math.random() * 256,
        b: Math.random() * 256
      };
    }

    this.ctx = this.canvas.getContext('2d', {
      alpha: this.alpha
    });
    this.canvas.style.cssText = "background:".concat(bgColor);
    this.initListeners();
  }

  _createClass(PBackground, [{
    key: "initListeners",
    value: function initListeners() {
      var _this = this;

      document.querySelector(this.canvasSelector).addEventListener('click', function () {
        _this.runAnimation.value = !_this.runAnimation.value;

        if (_this.runAnimation.value) {
          _this.animate();
        }
      });

      if (this.mouseInteraction) {
        window.addEventListener('mousemove', function (e) {
          _mouse__WEBPACK_IMPORTED_MODULE_1__.default.x = e.x;
          _mouse__WEBPACK_IMPORTED_MODULE_1__.default.y = e.y;
        });
        window.addEventListener('mouseout', function (e) {
          _mouse__WEBPACK_IMPORTED_MODULE_1__.default.x = undefined;
          _mouse__WEBPACK_IMPORTED_MODULE_1__.default.y = undefined;
        });
      }

      window.addEventListener('resize', function (e) {
        if (_this.canvas.width > window.innerWidth) {
          _this.canvas.width = window.innerWidth;
        } else {
          _this.canvas.width = _this.canvasW;
        }

        if (_this.canvas.height > window.innerHeight) {
          _this.canvas.height = window.innerHeight;
        } else {
          _this.canvas.height = _this.canvasH;
        }

        _mouse__WEBPACK_IMPORTED_MODULE_1__.default.radius = _this.canvas.height / _this.mouseRadius * (_this.canvas.height / _this.mouseRadius);

        _this.init();
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.particlesArray = [];
      var numberOfParticles = Math.floor(this.particleCount);
      var particleColor = _colors__WEBPACK_IMPORTED_MODULE_2__.default[Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_2__.default.length)];
      var collisionColor = _colors__WEBPACK_IMPORTED_MODULE_2__.default[Math.floor(Math.random() * _colors__WEBPACK_IMPORTED_MODULE_2__.default.length)];

      for (var i = 0; i < numberOfParticles; i++) {
        var size = Math.random() * 7 + 2;
        var x = Math.random() * (this.canvas.width - size * 2 - size * 2) + size * 2;
        var y = Math.random() * (this.canvas.height - size * 2 - size * 2) + size * 2;
        var dirX = Math.random() * this.speedMod - this.speedMod / 2;
        var dirY = Math.random() * this.speedMod - this.speedMod / 2;
        this.particlesArray.push(new _Particle__WEBPACK_IMPORTED_MODULE_0__.default({
          x: x,
          y: y,
          dirX: dirX,
          dirY: dirY,
          size: size,
          color: particleColor,
          canvas: this.canvas,
          ctx: this.ctx,
          collisionColor: collisionColor
        }));
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      if (this.runAnimation.value) {
        requestAnimationFrame(function () {
          return _this2.animate();
        });
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < this.particlesArray.length; i++) {
          this.particlesArray[i].update();
        }

        this.connect();
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      var opacity = 0.5;

      for (var i = 0; i < this.particlesArray.length; i++) {
        for (var j = i; j < this.particlesArray.length; j++) {
          var distance = (this.particlesArray[i].x - this.particlesArray[j].x) * (this.particlesArray[i].x - this.particlesArray[j].x) + (this.particlesArray[i].y - this.particlesArray[j].y) * (this.particlesArray[i].y - this.particlesArray[j].y);

          if (distance < this.canvas.width / 7 * (this.canvas.height / 7)) {
            opacity = 1 - distance / this.lineModifier;
            this.ctx.strokeStyle = "rgba(".concat(this.lineColor.r, ", ").concat(this.lineColor.g, ", ").concat(this.lineColor.b, ", ").concat(opacity, ")");
            this.ctx.lineWidth = this.particlesArray[i].size / 5;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particlesArray[i].x, this.particlesArray[i].y);
            this.ctx.lineTo(this.particlesArray[j].x, this.particlesArray[j].y);
            this.ctx.stroke();
          }
        }
      }
    }
  }]);

  return PBackground;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PBackground);

/***/ }),

/***/ "./src/js/Particle.js":
/*!****************************!*\
  !*** ./src/js/Particle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse */ "./src/js/mouse.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Particle = /*#__PURE__*/function () {
  function Particle(_ref) {
    var x = _ref.x,
        y = _ref.y,
        dirX = _ref.dirX,
        dirY = _ref.dirY,
        size = _ref.size,
        color = _ref.color,
        canvas = _ref.canvas,
        ctx = _ref.ctx,
        _ref$collisionColor = _ref.collisionColor,
        collisionColor = _ref$collisionColor === void 0 ? 'DarkOrange' : _ref$collisionColor;

    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
    this.canvas = canvas;
    this.ctx = ctx;
    this.collisionColor = collisionColor;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isOnCanvasX()) {
        this.dirX = -this.dirX;
      }

      if (this.isOnCanvasY()) {
        this.dirY = -this.dirY;
      } //check collision


      this.checkCollision();
      this.x += this.dirX;
      this.y += this.dirY;
      this.draw();
    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      var dx = _mouse__WEBPACK_IMPORTED_MODULE_0__.default.x - this.x;
      var dy = _mouse__WEBPACK_IMPORTED_MODULE_0__.default.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < _mouse__WEBPACK_IMPORTED_MODULE_0__.default.radius + this.size) {
        this.color = this.collisionColor;

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.x < this.x && this.x < this.canvas.width - this.size * 10) {
          this.x += 2;
        }

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.x > this.x && this.x > this.size * 10) {
          this.x -= 2;
        }

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.y < this.y && this.y < this.canvas.height - this.size * 10) {
          this.y += 2;
        }

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.y > this.y && this.y > this.size * 10) {
          this.y -= 2;
        }
      }
    }
  }, {
    key: "isOnCanvasX",
    value: function isOnCanvasX() {
      return this.x > this.canvas.width || this.x < 0;
    }
  }, {
    key: "isOnCanvasY",
    value: function isOnCanvasY() {
      return this.y > this.canvas.height || this.y < 0;
    }
  }]);

  return Particle;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);

/***/ }),

/***/ "./src/js/colors.js":
/*!**************************!*\
  !*** ./src/js/colors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var colors = ['AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'BlanchedAlmond', 'BlueViolet', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkKhaki', 'DarkMagenta', 'DarkOrange', 'DarkOrchid', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'GhostWhite', 'Gold', 'GoldenRod', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSteelBlue', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'MediumAquaMarine', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'OldLace', 'Olive', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'Snow', 'SpringGreen', 'SteelBlue', 'TanC', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);

/***/ }),

/***/ "./src/js/mouse.js":
/*!*************************!*\
  !*** ./src/js/mouse.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var mouse = {
  x: null,
  y: null,
  radius: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouse);

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map