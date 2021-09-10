/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
 * @param {number} canvasW width of canvas
 *
 * @param {number} canvasH height of canvas
 *
 * @param {Object.<boolean>} runAnimation Enables animation of particles
 *
 * @param {number} particleCount Number of particles
 *
 * @param {boolean} alpha Boolean that indicates if the canvas contains an alpha buffer.
 *
 * @param {string} bg Background of canvas
 *
 * @param {number} speed Speed of particles
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
        _ref$bg = _ref.bg,
        bg = _ref$bg === void 0 ? 'black' : _ref$bg;

    _classCallCheck(this, PBackground);

    this.canvasSelector = canvasSelector;
    this.canvas = document.querySelector(canvasSelector);
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
    this.runAnimation = runAnimation;
    this.particlesArray = [];
    this.particleCount = particleCount;
    this.alpha = alpha;
    this.speedMod = speedMod;
    _mouse__WEBPACK_IMPORTED_MODULE_1__.default.radius = this.canvas.height / 110 * (this.canvas.width / 110);
    this.ctx = this.canvas.getContext('2d', {
      alpha: this.alpha
    });
    this.canvas.style.cssText = "background:".concat(bg);
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
      window.addEventListener('mousemove', function (e) {
        _mouse__WEBPACK_IMPORTED_MODULE_1__.default.x = e.x;
        _mouse__WEBPACK_IMPORTED_MODULE_1__.default.y = e.y;
      });
      window.addEventListener('mouseout', function (e) {
        _mouse__WEBPACK_IMPORTED_MODULE_1__.default.x = undefined;
        _mouse__WEBPACK_IMPORTED_MODULE_1__.default.y = undefined;
      });
      window.addEventListener('resize', function (e) {
        _this.canvas.width = innerWidth;
        _this.canvas.height = innerHeight;
        _mouse__WEBPACK_IMPORTED_MODULE_1__.default.radius = _this.canvas.height / 100 * (_this.canvas.height / 100);

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
            opacity = 1 - distance / 20000;
            this.ctx.strokeStyle = "rgba(255, 215, 0, ".concat(opacity, ")");
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
          this.x += 3;
        }

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.x > this.x && this.x > this.size * 10) {
          this.x -= 3;
        }

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.y < this.y && this.y < this.canvas.height - this.size * 10) {
          this.y += 3;
        }

        if (_mouse__WEBPACK_IMPORTED_MODULE_0__.default.y > this.y && this.y > this.size * 10) {
          this.y -= 3;
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
var colors = ['AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'TanC', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
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

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _js_PBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/PBackground */ "./src/js/PBackground.js");


var bg = new _js_PBackground__WEBPACK_IMPORTED_MODULE_1__.default({
  canvasSelector: '#canvas1',
  bg: 'linear-gradient(0turn, rgba(230, 100, 101, 1), rgba(145, 152, 229, 1))',
  speedMod: 1
});
bg.init();
bg.animate(); //module.exports.PBackground = PBackground;
})();

/******/ })()
;
//# sourceMappingURL=main.js.map